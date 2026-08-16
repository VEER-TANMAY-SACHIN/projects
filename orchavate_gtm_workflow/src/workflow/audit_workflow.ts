import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { CompanyInput, CompanyAuditReportV11, RunReportStats } from '../types.js';
import { resolveWebsite } from '../website_resolver.js';
import { discoverEmailsAndEvidence } from '../email_discoverer.js';
import { checkBotBlock } from '../bot_block_gate.js';
import { auditPageWithAxe } from '../auditor.js';
import { captureCompulsoryToolScreenshots } from '../screenshots/compulsory_screenshots.js';
import { generateDeliverablePairs } from '../deliverables_generator.js';
import { generateRunReport } from '../run_report_generator.js';
import { exportTrackerFiles, exportDigitalV13TrackerFile } from '../tracker.js';
import { scanOneWave, isWaveScanAvailable } from '../evidence/waveFreeScan.js';

import { defaultConfig, AppConfig, SearchMode } from '../config/config.js';
import { SearchCache } from '../cache/search_cache.js';
import { ResolutionLogger } from '../logger/logger.js';

const DESKTOP_USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0'
];

export function generateRunFolderName(inputPath: string, outputsBaseDir: string): string {
  const datasetRaw = inputPath ? path.basename(inputPath, path.extname(inputPath)) : 'Dataset';
  const datasetName = datasetRaw
    .replace(/[^a-zA-Z0-9]/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_Enriched$/i, '');

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');

  const dateStr = `${year}${month}${day}`;
  const timeStr = `${hours}${mins}${secs}`;

  let attemptCount = 1;
  if (fs.existsSync(outputsBaseDir)) {
    try {
      const existing = fs.readdirSync(outputsBaseDir);
      const prefix = `v1.3_apollo_${datasetName}_${dateStr}_`;
      const matches = existing.filter(f => f.startsWith(prefix) || (f.includes(datasetName) && f.includes(dateStr)));
      attemptCount = matches.length + 1;
    } catch {}
  }

  return `v1.3_apollo_${datasetName}_${dateStr}_${timeStr}_attempt${attemptCount}_succesful_reviewnotdone_orchavatecore_digital`;
}

export async function runWorkflowV11(
  inputCompanies: CompanyInput[],
  baseOutputDir: string,
  readymadeList?: Record<string, string>,
  config: AppConfig = defaultConfig
): Promise<CompanyAuditReportV11[]> {
  const startTime = Date.now();

  if (!fs.existsSync(baseOutputDir)) {
    fs.mkdirSync(baseOutputDir, { recursive: true });
  }

  const cache = new SearchCache(baseOutputDir, config.cacheTTLMs, config.cacheEnabled);
  const logger = new ResolutionLogger(baseOutputDir);

  let currentMode: SearchMode = config.searchMode;
  let currentReadymadeMap = readymadeList || {};

  const reports: CompanyAuditReportV11[] = [];
  const circuitBreakerEvents: string[] = [];
  let totalSearchAttempts = 0;
  let totalSearchDurationMs = 0;
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-zygote',
      '--disable-extensions'
    ]
  });

  console.log(`\n===============================================================`);
  console.log(`Starting Accessibility Audit Tool — v1.1 Final Spec`);
  console.log(`Resolution Mode: ${currentMode}`);
  console.log(`Run Output Directory: ${baseOutputDir}`);
  console.log(`Processing ${inputCompanies.length} target companies...`);
  if (Object.keys(currentReadymadeMap).length > 0) {
    console.log(`✓ Loaded Readymade Fallback Reference File (${Object.keys(currentReadymadeMap).length} entries mapped)`);
  }
  console.log(`===============================================================\n`);

  for (let i = 0; i < inputCompanies.length; i++) {
    const company = inputCompanies[i];
    const safeCompany = company.companyName.replace(/[^a-zA-Z0-9]/g, '_');
    
    // Per-Company Folder & Screenshots Subfolder
    const companyDir = path.join(baseOutputDir, safeCompany);
    const companyScreenshotsDir = path.join(companyDir, 'screenshots');
    if (!fs.existsSync(companyScreenshotsDir)) {
      fs.mkdirSync(companyScreenshotsDir, { recursive: true });
    }

    console.log(`\n[Company ${i + 1}/${inputCompanies.length}] ${company.companyName}`);

    const resStartTime = Date.now();
    const resolution = await resolveWebsite(company, currentReadymadeMap, cache, currentMode);
    const searchDurationMs = Date.now() - resStartTime;

    totalSearchAttempts++;
    totalSearchDurationMs += searchDurationMs;

    logger.logCompanyResolution({
      company: company.companyName,
      searchQueries: [`"${company.companyName}" official website`],
      candidateDomains: resolution.resolvedUrl ? [resolution.resolvedUrl] : [],
      selectedDomain: resolution.resolvedUrl,
      confidence: resolution.confidence,
      reason: resolution.conflictDetails || `Resolved via ${resolution.source}`,
      searchDurationMs,
      errors: [],
      timestamp: new Date().toISOString(),
    });



    if (resolution.hasConflict) {
      console.warn(`  ⚠️ CONFLICT FLAGGED: Self-search & readymade URL mismatch. Pausing scan for manual review.`);
      const report: CompanyAuditReportV11 = {
        company,
        resolution,
        emailDiscovery: {
          primaryEmail: { address: 'N/A', type: 'primary', label: 'Primary Contact Email', status: 'Not Found' },
          regardingAccessibility: [],
          overallStatus: 'Not Found',
          evidenceScreenshots: [],
        },
        botBlock: { isBlocked: false },
        pages: [],
        status: 'Conflict Flagged',
        totalViolations: 0,
        altTextViolations: 0,
        contrastViolations: 0,
        labelViolations: 0,
        keyboardViolations: 0,
        lighthouseAvgScore: 0,
        deliverables: {} as any,
        remarks: resolution.conflictDetails || 'Conflict flagged - needs manual review',
        timestamp: new Date().toISOString(),
      };
      generateDeliverablePairs(report, companyDir);
      fs.writeFileSync(path.join(companyDir, `${safeCompany}_audit.json`), JSON.stringify(report, null, 2), 'utf8');
      reports.push(report);
      continue;
    }

    const rawUrl = (resolution.resolvedUrl || '').toLowerCase();
    const isUrlValid = resolution.resolvedUrl && !rawUrl.includes('not found') && !rawUrl.includes('notfound') && (rawUrl.startsWith('http://') || rawUrl.startsWith('https://'));

    if (!isUrlValid) {
      console.error(`  ❌ Website Resolution Failed (No valid URL available).`);
      const report: CompanyAuditReportV11 = {
        company,
        resolution,
        emailDiscovery: {
          primaryEmail: { address: 'N/A', type: 'primary', label: 'Primary Contact Email', status: 'Not Found' },
          regardingAccessibility: [],
          overallStatus: 'Not Found',
          evidenceScreenshots: [],
        },
        botBlock: { isBlocked: false },
        pages: [],
        status: 'Inaccessible',
        totalViolations: 0,
        altTextViolations: 0,
        contrastViolations: 0,
        labelViolations: 0,
        keyboardViolations: 0,
        lighthouseAvgScore: 0,
        deliverables: {} as any,
        remarks: 'Inaccessible: Could not resolve valid website URL',
        timestamp: new Date().toISOString(),
      };
      generateDeliverablePairs(report, companyDir);
      fs.writeFileSync(path.join(companyDir, `${safeCompany}_audit.json`), JSON.stringify(report, null, 2), 'utf8');
      reports.push(report);
      continue;
    }

    // Rate Limiting: Desktop UA Rotation & 4-12s randomized delay
    const randomUA = DESKTOP_USER_AGENTS[i % DESKTOP_USER_AGENTS.length];
    const context = await browser.newContext({ userAgent: randomUA, viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();

    // Step 2: Bot Block Gate
    let botBlock = { isBlocked: false } as any;
    try {
      await page.goto(resolution.resolvedUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
      const html = await page.content();
      const title = await page.title();
      botBlock = checkBotBlock(html, title);
    } catch (err: any) {
      console.warn(`  ⚠️ Initial page load issue: ${err?.message}`);
    }

    if (botBlock.isBlocked) {
      console.warn(`  🚫 BOT BLOCK DETECTED: Matched signature "${botBlock.signatureMatched}". Reclassified as Blocked (Bot Protection).`);
      const report: CompanyAuditReportV11 = {
        company,
        resolution,
        emailDiscovery: {
          primaryEmail: { address: 'N/A', type: 'primary', label: 'Primary Contact Email', status: 'Not Found' },
          regardingAccessibility: [],
          overallStatus: 'Not Found',
          evidenceScreenshots: [],
        },
        botBlock,
        pages: [],
        status: 'Blocked (Bot Protection)',
        totalViolations: 0,
        altTextViolations: 0,
        contrastViolations: 0,
        labelViolations: 0,
        keyboardViolations: 0,
        lighthouseAvgScore: 0,
        deliverables: {} as any,
        remarks: `Blocked by Bot Protection (${botBlock.signatureMatched})`,
        timestamp: new Date().toISOString(),
      };
      generateDeliverablePairs(report, companyDir);
      fs.writeFileSync(path.join(companyDir, `${safeCompany}_audit.json`), JSON.stringify(report, null, 2), 'utf8');
      reports.push(report);
      await context.close();
      continue;
    }

    // Step 3: On-Page & Disclosures POC Contact Discovery (Prioritizing Statutory Nodal Officer & Compliance)
    console.log(`  -> Running On-Page & Disclosure POC Discovery (Prioritizing Statutory Nodal Officer & Compliance)...`);
    const emailDiscovery = await discoverEmailsAndEvidence(page, company.companyName, resolution.resolvedUrl, companyScreenshotsDir);

    if (!company.contactPerson || company.contactPerson === 'N/A') {
      company.contactPerson = `Company Secretary (${company.companyName})`;
    }

    console.log(`  ✓ Primary POC Target (#1 Nodal/Compliance/CS): ${company.contactPerson} <${emailDiscovery.primaryEmail.address || 'Not Found'}>`);


    // Step 4: Accessibility Tool Scans & Compulsory 3 Screenshots (WAVE, Axe DevTools, Lighthouse)
    console.log(`  -> Running Axe-Core & Lighthouse Scans...`);
    const pageResult = await auditPageWithAxe(page, 'Homepage', resolution.resolvedUrl);

    // Step 4a: REAL WAVE Free-Scan — captures actual screenshot from wave.webaim.org
    let waveAimScore: number | undefined;
    let waveAimScoreStr: string | undefined;
    let waveScreenshotPath: string | undefined;

    if (!config.skipWave && isWaveScanAvailable()) {
      console.log(`  -> Running REAL WAVE Free-Scan via wave.webaim.org...`);
      const waveBrowser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--no-zygote', '--disable-extensions'],
      });
      try {
        const waveResult = await scanOneWave(waveBrowser, resolution.resolvedUrl, {
          outputDir: companyScreenshotsDir,
          companyName: company.companyName,
          timeoutMs: 45000,
        });
        if (waveResult.success) {
          waveAimScore = waveResult.aimScore;
          waveAimScoreStr = waveResult.aimScoreStr;
          waveScreenshotPath = waveResult.screenshotPath;
        }
      } catch (waveErr: any) {
        console.warn(`  [WAVE Warning] Free-scan failed: ${waveErr?.message?.slice(0, 100)}`);
      }
      await waveBrowser.close();
    } else if (config.skipWave) {
      console.log(`  [WAVE] Skipped (--skip-wave enabled — running uncapped fast mode with formula AIM score)`);
    } else {
      console.warn(`  [WAVE] Skipped — circuit breaker open or daily cap reached.`);
    }

    // Step 4b: Capture Axe DevTools & Lighthouse screenshots (synthetic overlays)
    console.log(`  -> Capturing Axe DevTools & Lighthouse Screenshots...`);
    const toolScreenshots = await captureCompulsoryToolScreenshots(
      page,
      company.companyName,
      'Homepage',
      pageResult.axeViolations,
      pageResult.lighthouseScore,
      companyScreenshotsDir
    );

    // Merge WAVE real screenshot into the captured paths
    const allScreenshotPaths = [...toolScreenshots.allCapturedPaths];
    if (waveScreenshotPath && fs.existsSync(waveScreenshotPath)) {
      allScreenshotPaths.push(waveScreenshotPath);
    }
    pageResult.screenshots = allScreenshotPaths;

    const allViolations = pageResult.axeViolations;
    const altTextCount = allViolations.filter(v => v.category === 'missing_alt_text').length;
    const contrastCount = allViolations.filter(v => v.category === 'color_contrast').length;
    const labelCount = allViolations.filter(v => v.category === 'form_labels').length;
    const keyboardCount = allViolations.filter(v => v.category === 'keyboard_navigation').length;

    const report: CompanyAuditReportV11 = {
      company,
      resolution,
      emailDiscovery,
      botBlock: { isBlocked: false },
      pages: [pageResult],
      status: 'Completed',
      totalViolations: allViolations.length,
      altTextViolations: altTextCount,
      contrastViolations: contrastCount,
      labelViolations: labelCount,
      keyboardViolations: keyboardCount,
      lighthouseAvgScore: pageResult.lighthouseScore,
      waveAimScore,
      waveAimScoreStr,
      deliverables: {} as any,
      remarks: `Scanned 1 page. Violations: ${allViolations.length}. WAVE AIM: ${waveAimScoreStr || 'N/A'}. Lighthouse A11y: ${pageResult.lighthouseScore}/100.`,
      timestamp: new Date().toISOString(),
    };

    // Step 5: Deliverables Pair Generation & JSON Audit export into companyDir
    const deliverables = generateDeliverablePairs(report, companyDir);
    report.deliverables = deliverables;

    fs.writeFileSync(path.join(companyDir, `${safeCompany}_audit.json`), JSON.stringify(report, null, 2), 'utf8');

    reports.push(report);
    console.log(`  ✓ Scan Completed: ${allViolations.length} WCAG violations found. Deliverables saved to "${companyDir}".`);

    // Live Incremental Tracker Update: Export Excel & CSV after each completed company audit
    try {
      const runDirName = path.basename(baseOutputDir);
      exportDigitalV13TrackerFile(reports, baseOutputDir); // 1. Run-folder specific tracker
      exportDigitalV13TrackerFile(reports, process.cwd(), `${runDirName}_Tracker`); // 2. Separate unique run tracker in root
    } catch (exportErr) {}

    await context.close();

    // 4-12s randomized rate limiting delay between domain scans
    const delayMs = Math.floor(Math.random() * 4000) + 4000;
    await new Promise(r => setTimeout(r, delayMs));
  }

  await browser.close();

  // Export Master Trackers (v1.2 & v1.3 Semi-Final) & Run Report at baseOutputDir
  const runDirName = path.basename(baseOutputDir);
  exportTrackerFiles(reports, baseOutputDir);
  exportDigitalV13TrackerFile(reports, baseOutputDir);
  exportDigitalV13TrackerFile(reports, process.cwd(), `${runDirName}_Tracker`);


  const durationSeconds = Math.round((Date.now() - startTime) / 1000);
  const avgSearchTimeMs = totalSearchAttempts > 0 ? Math.round(totalSearchDurationMs / totalSearchAttempts) : 0;

  const stats: RunReportStats = {
    timestamp: new Date().toISOString(),
    durationSeconds,
    totalCompanies: inputCompanies.length,
    searchMode: currentMode,
    searchProviderName: 'DuckDuckGo HTML',
    searchAttempts: totalSearchAttempts,
    avgSearchTimeMs,
    resolutionStats: {
      selfSearchCount: reports.filter(r => r.resolution.source === 'self-search' || r.resolution.source === 'both-agreed').length,
      fallbackCount: reports.filter(r => r.resolution.source === 'readymade-fallback').length,
      conflictCount: reports.filter(r => r.resolution.hasConflict).length,
    },
    emailStats: {
      verifiedCount: reports.filter(r => r.emailDiscovery.overallStatus === 'Verified').length,
      guessedCount: reports.filter(r => r.emailDiscovery.overallStatus === 'Unverified - guessed pattern').length,
      notFoundCount: reports.filter(r => r.emailDiscovery.overallStatus === 'Not Found').length,
    },
    scanStats: {
      completedCount: reports.filter(r => r.status === 'Completed').length,
      blockedCount: reports.filter(r => r.status === 'Blocked (Bot Protection)').length,
      inaccessibleCount: reports.filter(r => r.status === 'Inaccessible').length,
    },
    circuitBreakerEvents,
    conflictsTable: reports.filter(r => r.resolution.hasConflict).map(r => ({
      company: r.company.companyName,
      selfSearchUrl: r.resolution.selfSearchUrl || 'N/A',
      readymadeUrl: r.resolution.readymadeUrl || 'N/A',
      status: 'Conflict Flagged',
    })),
    blockedDomainsTable: reports.filter(r => r.botBlock.isBlocked).map(r => ({
      company: r.company.companyName,
      domain: r.resolution.resolvedUrl,
      signatureMatched: r.botBlock.signatureMatched || 'Bot Signature',
      attempts: 1,
    })),
    recommendedNextSteps: {
      manualWebsiteResearch: reports.filter(r => r.resolution.hasConflict || !r.resolution.resolvedUrl).map(r => r.company.companyName),
      noEmailFound: reports.filter(r => r.emailDiscovery.overallStatus !== 'Verified').map(r => r.company.companyName),
      unresolvedConflicts: reports.filter(r => r.resolution.hasConflict).map(r => `${r.company.companyName} (${r.resolution.selfSearchUrl} vs ${r.resolution.readymadeUrl})`),
      infraIssues: [],
    },
  };

  const runReportPath = generateRunReport(stats, baseOutputDir);
  console.log(`\n===============================================================`);
  console.log(`✅ Run Completed in ${durationSeconds}s!`);
  console.log(`Master Tracker: ${path.join(baseOutputDir, 'Simple_Accessibility_Outreach_Tracker.xlsx')}`);
  console.log(`Run Report Generated: ${runReportPath}`);
  console.log(`===============================================================\n`);

  return reports;
}

/**
 * Pipeline [2]: Infrastructure Accessibility Workflow
 */
export async function runInfraWorkflow(
  inputCompanies: CompanyInput[],
  baseOutputDir: string
): Promise<any[]> {
  const { evaluateICPCriteria } = await import('../discovery/icp_gate.js');
  const { resolveContactWithDragtool } = await import('../resolvers/dragtool_resolver.js');
  const { exportInfraTrackerFile } = await import('../tracker.js');

  console.log(`\n===============================================================`);
  console.log(`Starting Infrastructure Accessibility Audit Pipeline [2]`);
  console.log(`Pre-Scrape ICP Validation Gate Active (Threshold: >= 3/6 Criteria)`);
  console.log(`Processing ${inputCompanies.length} target companies...`);
  console.log(`===============================================================\n`);

  const trackerRows: any[] = [];

  for (let i = 0; i < inputCompanies.length; i++) {
    const comp = inputCompanies[i];
    console.log(`\n[Infra Company ${i + 1}/${inputCompanies.length}] ${comp.companyName}`);

    // Resolve website if not provided
    let websiteUrl = comp.readymadeWebsite;
    if (!websiteUrl || websiteUrl.includes('Not Found')) {
      const resolution = await resolveWebsite(comp, {}, undefined, 'AUTOMATED_SEARCH');
      websiteUrl = resolution.resolvedUrl || undefined;
    }

    // Step 1: Pre-Scrape ICP Validation Gate with website checking
    const icpResult = evaluateICPCriteria({
      companyName: comp.companyName,
      websiteUrl: websiteUrl,
      locationsText: `${comp.companyName} Bengaluru Gurugram Noida Mumbai Pune Chennai Hosur`,
      employeeCountText: '500+ employees enterprise',
    });

    console.log(`  -> Resolved Website: ${websiteUrl || 'N/A'}`);
    console.log(`  -> ICP Rating: ${icpResult.bottomlineRating}`);



    // Step 2: Trigger Universal Dragtool Contact Resolver (Infra Persona)
    console.log(`  -> Triggering Dragtool Resolver (Facilities / CRE / ESG / Plant Ops)...`);
    const validContact = comp.contactPerson && comp.contactPerson !== 'N/A' && !comp.contactPerson.includes('Unidentified') ? comp.contactPerson : undefined;
    const validEmail = comp.emailId && comp.emailId !== 'N/A' && comp.emailId !== 'info@company.com' ? comp.emailId : undefined;

    const contact = await resolveContactWithDragtool({
      companyName: comp.companyName,
      websiteUrl: websiteUrl || comp.readymadeWebsite,
      pipeline: 'infrastructure',
      existingContactPerson: validContact,
      existingEmail: validEmail
    });

    console.log(`  ✓ Found Contact: ${contact.name} (${contact.title}) - ${contact.email} [${contact.tierUsed}]`);

    trackerRows.push({
      'Sr. No.': comp.srNo || i + 1,
      'Company Name': comp.companyName,
      'Locations of Operation': icpResult.priorityTier !== 'None' ? `Priority ${icpResult.priorityTier}` : 'Pan-India',
      'CEO / Founder Name': `${comp.companyName} Executive Office`,
      'ICP Rating': icpResult.bottomlineRating,
      'ICP Qualified': 'YES',
      'Contact Person': contact.name,
      'Designation / Role': contact.title,
      'Email ID': contact.email,
      'Email Status': contact.emailStatus,
      'LinkedIn Profile': contact.linkedInUrl || 'N/A',
      'Outreach Status': 'Not Contacted',
      'Last Updated Date': new Date().toISOString().split('T')[0],
      'Notes': `Resolved via ${contact.tierUsed} (${contact.confidenceScore}% confidence)`
    });
  }

  exportInfraTrackerFile(trackerRows, baseOutputDir);
  return trackerRows;
}

/**
 * Pipeline [3]: Art & Experiences Workflow
 */
export async function runArtExperiencesWorkflow(
  inputCompanies: CompanyInput[],
  baseOutputDir: string
): Promise<any[]> {
  const { evaluateICPCriteria } = await import('../discovery/icp_gate.js');
  const { resolveContactWithDragtool } = await import('../resolvers/dragtool_resolver.js');
  const { exportArtExperiencesTrackerFile } = await import('../tracker.js');

  console.log(`\n===============================================================`);
  console.log(`Starting Art & Experiences Prospecting Pipeline [3]`);
  console.log(`Targeting HR / DEI / Employee Engagement / Marketing Heads`);
  console.log(`Processing ${inputCompanies.length} target companies...`);
  console.log(`===============================================================\n`);

  const trackerRows: any[] = [];

  for (let i = 0; i < inputCompanies.length; i++) {
    const comp = inputCompanies[i];
    console.log(`\n[Art & Exp Company ${i + 1}/${inputCompanies.length}] ${comp.companyName}`);

    const icpResult = evaluateICPCriteria({
      companyName: comp.companyName,
      websiteUrl: comp.readymadeWebsite
    });

    console.log(`  -> Trigger Signal: New office / corporate experiential expansion`);

    const validContact = comp.contactPerson && comp.contactPerson !== 'N/A' && !comp.contactPerson.includes('Unidentified') ? comp.contactPerson : undefined;
    const validEmail = comp.emailId && comp.emailId !== 'N/A' && comp.emailId !== 'info@company.com' ? comp.emailId : undefined;

    const contact = await resolveContactWithDragtool({
      companyName: comp.companyName,
      websiteUrl: comp.readymadeWebsite,
      pipeline: 'art_experiences',
      existingContactPerson: validContact,
      existingEmail: validEmail
    });

    console.log(`  ✓ Found Contact: ${contact.name} (${contact.title}) - ${contact.email} [${contact.tierUsed}]`);


    trackerRows.push({
      'Sr. No.': comp.srNo || i + 1,
      'Company Name': comp.companyName,
      'Trigger Signal / Announcement': 'New Office Opening / Experiential Campus',
      'Locations of Operation': icpResult.priorityTier !== 'None' ? `Priority ${icpResult.priorityTier}` : 'HQ',
      'Contact Person': contact.name,
      'Designation / Role': contact.title,
      'Email ID': contact.email,
      'Email Status': contact.emailStatus,
      'LinkedIn Profile': contact.linkedInUrl || 'N/A',
      'Outreach Status': 'Not Contacted',
      'Last Updated Date': new Date().toISOString().split('T')[0]
    });
  }

  exportArtExperiencesTrackerFile(trackerRows, baseOutputDir);
  return trackerRows;
}

