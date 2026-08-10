import fs from 'fs';
import path from 'path';
import { CompanyInput, PipelineType } from './types.js';
import { defaultConfig, parseCliConfig, AppConfig } from './config/config.js';
import { renderStartupMenu, promptForInputFile, renderPipelineMenu, renderVersionMenu } from './ui/menu.js';
import { parseInputFile, parseReadymadeFile } from './parsers/input_parser.js';
import { runWorkflowV11, runInfraWorkflow, runArtExperiencesWorkflow, generateRunFolderName } from './workflow/audit_workflow.js';

export { parseInputFile, parseReadymadeFile } from './parsers/input_parser.js';
export { runWorkflowV11, runInfraWorkflow, runArtExperiencesWorkflow } from './workflow/audit_workflow.js';

async function main() {
  const cliArgs = process.argv.slice(2);
  const cliConfig = parseCliConfig(cliArgs);
  const config: AppConfig = { ...defaultConfig, ...cliConfig };



  let pipelineChoice: PipelineType = 'digital';
  const pipelineIdx = cliArgs.indexOf('--pipeline');
  if (pipelineIdx !== -1 && cliArgs[pipelineIdx + 1]) {
    const val = cliArgs[pipelineIdx + 1].toLowerCase();
    if (val.includes('infra')) pipelineChoice = 'infrastructure';
    else if (val.includes('art') || val.includes('exp')) pipelineChoice = 'art_experiences';
    else pipelineChoice = 'digital';
  } else if (!config.nonInteractive && process.stdin.isTTY) {
    pipelineChoice = await renderPipelineMenu();
  }

  let selectedVersion = 'v1.3_semifinal';
  const versionIdx = cliArgs.indexOf('--version');
  if (versionIdx !== -1 && cliArgs[versionIdx + 1]) {
    selectedVersion = cliArgs[versionIdx + 1].toLowerCase().includes('1.2') ? 'v1.2' : 'v1.3_semifinal';
  } else if (pipelineChoice === 'digital' && !config.nonInteractive && process.stdin.isTTY) {
    selectedVersion = await renderVersionMenu();
  }


  let inputPath = '';
  const inputIdx = cliArgs.indexOf('--input');
  if (inputIdx !== -1) {
    const valueTokens: string[] = [];
    for (let k = inputIdx + 1; k < cliArgs.length; k++) {
      if (cliArgs[k].startsWith('--') || cliArgs[k].startsWith('-')) break;
      valueTokens.push(cliArgs[k]);
    }
    inputPath = valueTokens.join(' ').replace(/^['"]|['"]$/g, '');
  }

  if (!inputPath) {
    const possibleFiles = ['target_file_*.xlsx', 'target_file_*.csv', 'Registered_Mutual_Funds_Enriched.xlsx', 'nse_tracker_enriched_clearbit.xlsx', 'targets.json', 'targets.xlsx', 'targets.csv'];
    for (const pf of possibleFiles) {
      if (pf.includes('*')) {
        const matching = fs.readdirSync(process.cwd()).filter(f => f.startsWith('target_file_') && (f.endsWith('.xlsx') || f.endsWith('.csv')));
        if (matching.length > 0) {
          inputPath = path.join(process.cwd(), matching[0]);
          break;
        }
      } else {
        const fullP = path.join(process.cwd(), pf);
        if (fs.existsSync(fullP)) {
          inputPath = fullP;
          break;
        }
      }
    }
  }

  // If no input file found yet, prompt the user interactively
  if (!inputPath && !config.nonInteractive && process.stdin.isTTY) {
    const promptedPath = await promptForInputFile();
    if (promptedPath) {
      inputPath = promptedPath;
    }
  }

  // Interactive Startup Menu if no explicit mode passed and non-interactive not set (For Digital Pipeline)
  if (pipelineChoice === 'digital' && !cliArgs.includes('--mode') && !config.nonInteractive && process.stdin.isTTY) {
    const menuResult = await renderStartupMenu(config);
    config.searchMode = menuResult.mode;
    if (menuResult.readymadeFilePath) {
      config.readymadeFilePath = menuResult.readymadeFilePath;
    }
  }

  let targetsToAudit: CompanyInput[] = [];
  if (inputPath && fs.existsSync(inputPath)) {
    const { parseIncrementalInputFile } = await import('./incremental_parser.js');
    const incResult = parseIncrementalInputFile(inputPath);
    console.log(`\n===============================================================`);
    console.log(`🚀 Orchavate GTM & Accessibility Suite — v1.3 Apollo Edition`);
    console.log(`📁 Target File Loaded: "${path.basename(inputPath)}"`);
    console.log(`📊 Total Input Rows: ${incResult.allCompanies.length}`);
    console.log(`⏩ Pre-Populated Rows (Skipped via Delta Parser): ${incResult.skippedCount}`);
    console.log(`🎯 Enqueued Missing Rows for Processing: ${incResult.pendingQueue.length}`);
    console.log(`===============================================================\n`);

    targetsToAudit = incResult.pendingQueue.length > 0 ? incResult.pendingQueue : incResult.allCompanies;
  } else {
    console.warn('\n⚠️ WARNING: No input file provided or found. Running benchmark sample targets...\n');
    targetsToAudit = [
      {
        srNo: 1,
        companyName: 'Toyota Kirloskar Motor',
        readymadeWebsite: 'https://www.toyotabharat.com',
        contactPerson: 'Head of Facilities',
        emailId: 'admin@toyotabharat.com',
        assignedTo: 'Auditor 1',
      },
      {
        srNo: 2,
        companyName: 'Bosch India',
        readymadeWebsite: 'https://www.bosch.in',
        contactPerson: 'Infrastructure Head',
        emailId: 'contact@bosch.in',
        assignedTo: 'Auditor 1',
      },
      {
        srNo: 3,
        companyName: 'Narayana Health',
        readymadeWebsite: 'https://www.narayanahealth.org',
        contactPerson: 'ESG & Compliance Head',
        emailId: 'info@narayanahealth.org',
        assignedTo: 'Auditor 1',
      }
    ];
  }

  let readymadeMap: Record<string, string> = {};
  if (config.readymadeFilePath && fs.existsSync(config.readymadeFilePath)) {
    readymadeMap = parseReadymadeFile(config.readymadeFilePath);
    console.log(`\n📁 Loaded ${Object.keys(readymadeMap).length} readymade website fallback URLs from "${config.readymadeFilePath}"`);
  }

  const outputsBaseDir = path.join(process.cwd(), 'orchavate_gtm_workflow', 'outputs');
  const runFolderName = generateRunFolderName(inputPath, outputsBaseDir);
  const runOutputDir = path.join(outputsBaseDir, `${runFolderName}_${pipelineChoice}`);

  if (pipelineChoice === 'infrastructure') {
    await runInfraWorkflow(targetsToAudit, runOutputDir);
  } else if (pipelineChoice === 'art_experiences') {
    await runArtExperiencesWorkflow(targetsToAudit, runOutputDir);
  } else {
    await runWorkflowV11(targetsToAudit, runOutputDir, readymadeMap, config);
  }
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('cli.ts') || process.argv[1].endsWith('cli.js')) {
  main().catch(err => {
    console.error('Orchavate v1.3 Execution Error:', err);
    process.exit(1);
  });
}