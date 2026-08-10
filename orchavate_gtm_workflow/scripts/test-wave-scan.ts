// Quick test: scan ONE site on wave.webaim.org and verify screenshot + AIM score
import { chromium } from 'playwright';
import { scanOneWave } from '../src/evidence/waveFreeScan.js';

async function test() {
  console.log('🧪 Testing WAVE Free-Scan against asianhotelswest.com...\n');
  
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--no-zygote'],
  });
  
  const result = await scanOneWave(browser, 'https://asianhotelswest.com', {
    outputDir: '/workspaces/projects/orchavate_gtm_workflow/test_wave_output',
    companyName: 'Asian Hotels West Limited',
    timeoutMs: 60000,
  });
  
  await browser.close();
  
  console.log('\n--- RESULT ---');
  console.log(JSON.stringify(result, null, 2));

  if (result.success && result.aimScore !== undefined) {
    console.log(`\n✅ WAVE Free-Scan PASSED — AIM Score: ${result.aimScore} out of 10`);
    console.log(`📸 Screenshot saved: ${result.screenshotPath}`);
  } else {
    console.log(`\n❌ WAVE Free-Scan FAILED — ${result.failureReason}`);
    process.exit(1);
  }
}

test().catch(console.error);
