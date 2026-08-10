// src/evidence/waveFreeScan.ts
// WAVE Free-Scan Module — captures REAL screenshots & data from wave.webaim.org
// Uses the public free online checker (NOT browser extension, NOT paid API).

import { chromium, Browser, Page } from 'playwright';
import fs from 'fs';
import path from 'path';

// ✅ CONFIRMED selectors from Part 1 discovery against asianhotelswest.com
// Run discover-wave-selectors.ts again if WAVE changes its markup.
const SELECTORS = {
  aimScoreValue: '#aim-score-value',     // e.g. "2.3"
  aimScoreBar: '#aim-score-bar',         // style="width: 23%; background: rgb(255, 85, 85);"
  readySignal: '#aim-score-value',       // appears when scan is complete
  sidebar: '#sidebar',
};

export interface WaveScanResult {
  url: string;
  timestamp: string;
  success: boolean;
  aimScore?: number;
  aimScoreStr?: string;        // e.g. "2.3 out of 10"
  screenshotPath?: string;
  failureReason?: string;
}

interface ScanOptions {
  outputDir: string;
  companyName?: string;
  minDelayMs?: number;      // min delay between requests, default 7000
  maxRetries?: number;      // per-URL retry attempts, default 2
  timeoutMs?: number;       // per-scan timeout, default 45000
}

// --- Circuit breaker state (module-level, persists across calls in one run) ---
class CircuitBreaker {
  private consecutiveFailures = 0;
  private readonly threshold: number;
  private tripped = false;
  private trippedAt: number | null = null;
  private readonly cooldownMs: number;

  constructor(threshold = 3, cooldownMs = 15 * 60 * 1000) {
    this.threshold = threshold;
    this.cooldownMs = cooldownMs;
  }

  recordSuccess() {
    this.consecutiveFailures = 0;
  }

  recordFailure() {
    this.consecutiveFailures += 1;
    if (this.consecutiveFailures >= this.threshold) {
      this.tripped = true;
      this.trippedAt = Date.now();
      console.error(
        `  [WAVE CIRCUIT BREAKER TRIPPED] ${this.consecutiveFailures} consecutive failures. ` +
        `Halting further WAVE requests for ${this.cooldownMs / 60000} minutes.`
      );
    }
  }

  // THIS is the fix for the known bug: callers MUST check this and actually stop.
  isOpen(): boolean {
    if (!this.tripped) return false;
    if (this.trippedAt && Date.now() - this.trippedAt > this.cooldownMs) {
      console.warn('  [WAVE CIRCUIT BREAKER] Cooldown elapsed — resetting to closed state.');
      this.tripped = false;
      this.consecutiveFailures = 0;
      this.trippedAt = null;
      return false;
    }
    return true;
  }
}

const breaker = new CircuitBreaker();

// --- Daily request cap tracking (no paid fallback exists — protect the free source) ---
class DailyCap {
  private count = 0;
  private day = new Date().toDateString();
  private readonly max: number;

  constructor(max = 120) {
    this.max = max;
  }

  canProceed(): boolean {
    const today = new Date().toDateString();
    if (today !== this.day) {
      this.day = today;
      this.count = 0;
    }
    return this.count < this.max;
  }

  increment() {
    this.count += 1;
  }

  remaining(): number {
    return this.max - this.count;
  }
}

const dailyCap = new DailyCap(120);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Scan a single URL on wave.webaim.org and capture real screenshot + AIM score.
 */
export async function scanOneWave(
  browser: Browser,
  targetUrl: string,
  options: ScanOptions
): Promise<WaveScanResult> {
  const timestamp = new Date().toISOString();
  const waveUrl = `https://wave.webaim.org/report#/${encodeURIComponent(targetUrl)}`;
  const timeoutMs = options.timeoutMs ?? 45000;

  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  try {
    console.log(`  [WAVE] Scanning: ${waveUrl}`);
    await page.goto(waveUrl, { waitUntil: 'networkidle', timeout: timeoutMs });

    // Wait for WAVE scan to complete — #aim-score-value appears when done
    await page.waitForSelector(SELECTORS.readySignal, { timeout: timeoutMs });

    // Let icon overlays finish painting
    await page.waitForTimeout(4000);

    // Extract real AIM score from the DOM
    const aimScoreText = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      return el ? el.textContent?.trim() ?? null : null;
    }, SELECTORS.aimScoreValue);

    const aimScore = aimScoreText ? parseFloat(aimScoreText) : undefined;
    const aimScoreStr = aimScore !== undefined ? `${aimScore} out of 10` : undefined;

    // Build screenshot filename
    const safeName = (options.companyName || targetUrl)
      .replace(/[^a-zA-Z0-9]/g, '_')
      .slice(0, 80);
    const screenshotPath = path.join(
      options.outputDir,
      `${safeName}_Homepage_WAVE_Overlay.png`
    );

    if (!fs.existsSync(options.outputDir)) {
      fs.mkdirSync(options.outputDir, { recursive: true });
    }

    // Capture REAL WAVE screenshot — this IS the evidence
    await page.screenshot({ path: screenshotPath, fullPage: false });

    await page.close();
    breaker.recordSuccess();

    console.log(`  ✓ [WAVE] Real AIM Score: ${aimScoreStr || 'N/A'} — Screenshot: ${path.basename(screenshotPath)}`);

    return {
      url: targetUrl,
      timestamp,
      success: true,
      aimScore,
      aimScoreStr,
      screenshotPath,
    };
  } catch (err: any) {
    await page.close().catch(() => {});
    breaker.recordFailure();

    console.warn(`  ✗ [WAVE] Scan failed for ${targetUrl}: ${err?.message?.slice(0, 120)}`);

    return {
      url: targetUrl,
      timestamp,
      success: false,
      failureReason: err?.message ?? 'unknown error',
    };
  }
}

/**
 * Main entry point: scan a list of URLs with rate limiting, retries,
 * circuit breaker enforcement, and daily cap enforcement.
 * On repeated failure or breaker trip, remaining URLs are returned
 * in `queuedForManualReview` rather than silently dropped.
 */
export async function runWaveFreeScanBatch(
  urls: Array<{ url: string; companyName: string; outputDir: string }>,
  globalOptions?: { minDelayMs?: number; maxRetries?: number; timeoutMs?: number }
): Promise<{ results: WaveScanResult[]; queuedForManualReview: string[] }> {
  const results: WaveScanResult[] = [];
  const queuedForManualReview: string[] = [];
  const minDelay = globalOptions?.minDelayMs ?? 7000;
  const maxRetries = globalOptions?.maxRetries ?? 2;

  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-zygote',
      '--disable-extensions',
    ],
  });

  for (let i = 0; i < urls.length; i++) {
    const { url, companyName, outputDir } = urls[i];

    // --- Daily cap check: free-only, no paid fallback, hard stop ---
    if (!dailyCap.canProceed()) {
      console.warn(`  [WAVE DAILY CAP REACHED] ${dailyCap.remaining()} remaining. Queuing rest for manual review.`);
      for (let j = i; j < urls.length; j++) {
        queuedForManualReview.push(urls[j].url);
      }
      break;
    }

    // --- Circuit breaker check: actually halt, don't just log ---
    if (breaker.isOpen()) {
      console.warn(`  [WAVE CIRCUIT BREAKER OPEN] Skipping remaining URLs until cooldown.`);
      for (let j = i; j < urls.length; j++) {
        queuedForManualReview.push(urls[j].url);
      }
      break;
    }

    let attempt = 0;
    let result: WaveScanResult | null = null;

    while (attempt <= maxRetries) {
      result = await scanOneWave(browser, url, {
        outputDir,
        companyName,
        timeoutMs: globalOptions?.timeoutMs,
      });
      dailyCap.increment();

      if (result.success) break;

      attempt += 1;
      if (attempt <= maxRetries) {
        const backoff = minDelay * Math.pow(2, attempt);
        console.warn(`  [WAVE RETRY ${attempt}/${maxRetries}] Backing off ${backoff}ms`);
        await sleep(backoff);
      }
    }

    if (result && result.success) {
      results.push(result);
    } else {
      queuedForManualReview.push(url);
      if (result) results.push(result); // keep failure record for audit trail
    }

    // Pace requests — protect the free source
    await sleep(minDelay);
  }

  await browser.close();

  return { results, queuedForManualReview };
}

/**
 * Check if WAVE scanning is available (circuit breaker not tripped, daily cap not hit)
 */
export function isWaveScanAvailable(): boolean {
  return !breaker.isOpen() && dailyCap.canProceed();
}

export function getWaveDailyRemaining(): number {
  return dailyCap.remaining();
}
