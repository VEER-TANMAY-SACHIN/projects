// scripts/discover-wave-selectors.ts
// One-time script to discover and confirm CSS selectors from wave.webaim.org's DOM.
// Run against 2–3 real sites, lock confirmed selectors into waveFreeScan.ts.
//
// Usage: npx tsx scripts/discover-wave-selectors.ts https://targetsite.com

import { chromium } from 'playwright';

async function discoverSelectors(targetUrl: string) {
  const browser = await chromium.launch({
    headless: true, // headless for CI/Codespaces; use false locally to eyeball
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

  const waveUrl = `https://wave.webaim.org/report#/${encodeURIComponent(targetUrl)}`;
  console.log(`Opening WAVE report: ${waveUrl}`);
  await page.goto(waveUrl, { waitUntil: 'networkidle' });

  // Wait for the scan to finish — "Errors" text appears when done
  try {
    await page.waitForSelector('text=Errors', { timeout: 60000 });
  } catch {
    console.warn('Timed out waiting for "Errors" text — WAVE may still be loading.');
  }
  await page.waitForTimeout(5000); // extra settle time

  // Dump the full sidebar/details panel HTML for manual inspection
  const detailsPanelHtml = await page.evaluate(() => {
    const candidates = [
      document.querySelector('#sidebar'),
      document.querySelector('#details'),
      document.querySelector('.sidebar'),
      document.querySelector('[id*="wave"]'),
      document.querySelector('[class*="wave"]'),
    ];
    for (const el of candidates) {
      if (el && el.outerHTML.length > 100) return el.outerHTML;
    }
    // Fallback: dump all body children IDs/classes
    const bodyChildren = Array.from(document.body.children);
    return bodyChildren.map(c => `<${c.tagName} id="${c.id}" class="${c.className}">`).join('\n');
  });

  console.log('\n--- SIDEBAR/DETAILS PANEL HTML (first 8000 chars) ---');
  console.log(detailsPanelHtml.slice(0, 8000));

  // Try to auto-guess the count elements by common WAVE class patterns
  const guesses = await page.evaluate(() => {
    const results: Record<string, string | null> = {};

    // Try various selector patterns
    const patterns: Record<string, string[]> = {
      errors: ['.ttl_errors', '[class*="errors"]', '#errors'],
      contrastErrors: ['.ttl_ce', '[class*="contrasterrors"]', '[class*="contrast"]'],
      alerts: ['.ttl_alerts', '[class*="alerts"]'],
      features: ['.ttl_feat', '[class*="features"]'],
      structure: ['.ttl_struct', '[class*="structure"]'],
      aria: ['.ttl_aria', '[class*="aria"]'],
      aimScore: ['.aimscore', '[class*="aimscore"]', '[class*="aim"]'],
    };

    for (const [key, selectors] of Object.entries(patterns)) {
      results[key] = null;
      for (const sel of selectors) {
        try {
          const el = document.querySelector(sel);
          if (el && el.textContent) {
            results[key] = `${sel} => "${el.textContent.trim().slice(0, 100)}"`;
            break;
          }
        } catch {}
      }
    }

    // Also try to find ALL elements with numeric text inside the sidebar
    const sidebar = document.querySelector('#sidebar') || document.querySelector('.sidebar') || document.body;
    const allEls = sidebar.querySelectorAll('*');
    const numericEls: string[] = [];
    allEls.forEach(el => {
      const text = el.textContent?.trim() || '';
      if (/^\d+$/.test(text) && el.children.length === 0) {
        numericEls.push(`<${el.tagName} class="${el.className}" id="${el.id}"> => "${text}"`);
      }
    });
    results['_numericElements'] = numericEls.slice(0, 30).join(' | ');

    return results;
  });

  console.log('\n--- AUTO-GUESSED COUNTS ---');
  for (const [key, val] of Object.entries(guesses)) {
    console.log(`  ${key}: ${val || '(not found)'}`);
  }

  // Save discovery screenshot
  await page.screenshot({ path: 'discovery_screenshot.png', fullPage: true });
  console.log('\nSaved discovery_screenshot.png — compare visually against sidebar numbers.');

  // Also grab the page title to confirm scan loaded
  const title = await page.title();
  console.log(`Page title: "${title}"`);

  await browser.close();
}

const targetUrl = process.argv[2] || 'https://example.com';
console.log(`\n🔍 WAVE Selector Discovery for: ${targetUrl}\n`);
discoverSelectors(targetUrl).catch(console.error);
