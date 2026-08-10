import readline from 'readline';
import fs from 'fs';
import { AppConfig, SearchMode } from '../config/config.js';

export interface StartupMenuResult {
  mode: SearchMode;
  readymadeFilePath?: string;
  inputFilePath?: string;
}

function promptUser(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => {
    rl.question(query, answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

/**
 * Prompt for the input file path (Excel/JSON with company list).
 * Returns the validated file path or empty string if skipped.
 */


export async function promptForInputFile(): Promise<string> {
  console.log(`\n=====================================================`);
  console.log(`Input File Selection`);
  console.log(`=====================================================\n`);
  console.log(`Please provide the input file containing company names.`);
  console.log(`Supported formats: .xlsx, .xls, .json\n`);

  const filePath = (await promptUser(`Enter file path (or press Enter to skip): `)).replace(/^['"]|['"]$/g, '');

  if (!filePath) {
    console.warn(`\n⚠️ No file path provided. Will use dummy test data.\n`);
    return '';
  }

  if (!fs.existsSync(filePath)) {
    console.warn(`\n⚠️ File not found at "${filePath}". Will use dummy test data.\n`);
    return '';
  }

  console.log(`\n✓ Input file found: "${filePath}"\n`);
  return filePath;
}

export async function renderStartupMenu(config: AppConfig): Promise<StartupMenuResult> {
  // If non-interactive mode or explicitly passed mode via CLI, bypass interactive menu
  if (config.nonInteractive || process.env.NON_INTERACTIVE === 'true') {
    return {
      mode: config.searchMode,
      readymadeFilePath: config.readymadeFilePath,
    };
  }

  console.log(`\n=====================================================`);
  console.log(`Accessibility Outreach Tool — Input Mode Selection`);
  console.log(`=====================================================\n`);
  console.log(`Select Website Input Mode:\n`);
  console.log(`  Press 1 : Automated Website Search (Internet Discovery)`);
  console.log(`  Press 2 : Readymade Website List (Excel / CSV Mapping)\n`);

  const choice = await promptUser(`Enter selection (Press 1 or 2): `);

  if (choice === '2') {
    console.log(`\nPlease provide website mapping file.`);
    console.log(`Supported formats: .xlsx, .csv\n`);

    let filePath = await promptUser(`File path: `);
    filePath = filePath.replace(/^['"]|['"]$/g, ''); // strip surrounding quotes

    if (filePath && fs.existsSync(filePath)) {
      return {
        mode: 'READYMADE',
        readymadeFilePath: filePath,
      };
    } else {
      console.warn(`\n⚠️ File not found at "${filePath}". Defaulting to Automated Website Search.\n`);
      return { mode: 'AUTOMATED_SEARCH' };
    }
  }

  return { mode: 'AUTOMATED_SEARCH' };
}

export async function renderPipelineMenu(): Promise<'digital' | 'infrastructure' | 'art_experiences'> {
  console.log(`\n=====================================================`);
  console.log(`[ORCHAVATE v1.3] System Initialized.`);
  console.log(`Select Execution Pipeline:`);
  console.log(`[1] Digital Accessibility Audit`);
  console.log(`[2] Infrastructure Audit (ICP Gate active)`);
  console.log(`[3] Art & Experiences (ICP Gate active)`);
  console.log(`=====================================================\n`);

  const choice = await promptUser(`Select option (1, 2, or 3) [default 1]: `);

  switch (choice) {
    case '2':
      return 'infrastructure';
    case '3':
      return 'art_experiences';
    case '1':
    default:
      return 'digital';
  }
}

export async function renderVersionMenu(): Promise<'v1.2' | 'v1.3_semifinal'> {

  console.log(`\n=====================================================`);
  console.log(`Select Digital Audit Output Version:`);
  console.log(`[1] v1.2 Standard Tracker (Legacy Format)`);
  console.log(`[2] v1.3 17-Column Master Tracker (GitHub Image Links, Designation, Wave/Axe/LH Scores)`);
  console.log(`=====================================================\n`);

  const choice = await promptUser(`Select version (1 or 2) [default 2]: `);

  if (choice === '1') {
    return 'v1.2';
  }
  return 'v1.3_semifinal';
}


