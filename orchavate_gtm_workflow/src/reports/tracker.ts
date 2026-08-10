import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { CompanyAuditReportV11 } from '../types.js';

/**
 * Calculates WebAIM AIM Score out of 10 based on total audit violations/errors
 */
export function calculateAimScore(violations: number): { scoreNum: number; scoreStr: string } {
  if (!violations || violations === 0) return { scoreNum: 10.0, scoreStr: '10.0 out of 10' };
  const scoreNum = Math.max(1.0, Number((10 - (violations * 0.16)).toFixed(1)));
  return { scoreNum, scoreStr: `${scoreNum} out of 10` };
}

export function createTrackerRow(report: CompanyAuditReportV11, outputDir?: string) {
  const safeName = report.company.companyName.replace(/[^a-zA-Z0-9]/g, '_');
  const runFolderName = outputDir ? path.basename(outputDir) : 'outputs';
  const repoBaseUrl = 'https://github.com/VEER-TANMAY-SACHIN/projects/blob/main/orchavate_gtm_workflow/outputs';
  const githubScreenshotUrl = `${repoBaseUrl}/${runFolderName}/${safeName}/screenshots/${safeName}_Homepage_WAVE_Overlay.png`;
  const githubMarkdownPath = `![WAVE Tool Screenshot](${githubScreenshotUrl})`;

  const aimObj = calculateAimScore(report.totalViolations || 0);

  const email1 = report.emailDiscovery.primaryEmail.address && report.emailDiscovery.primaryEmail.address !== 'N/A' && !report.emailDiscovery.primaryEmail.address.includes('company.com')
    ? report.emailDiscovery.primaryEmail.address
    : 'Not publicly disclosed';

  const contact2Obj = report.emailDiscovery.regardingAccessibility && report.emailDiscovery.regardingAccessibility.length > 0
    ? report.emailDiscovery.regardingAccessibility[0]
    : null;

  const person2 = contact2Obj && contact2Obj.label ? contact2Obj.label : 'N/A';
  const email2 = contact2Obj && contact2Obj.address && !contact2Obj.address.includes('company.com') ? contact2Obj.address : 'Not publicly disclosed';

  return {
    'Sr. No.': report.company.srNo,
    'Assigned To': report.company.assignedTo || 'Unassigned',
    'Company Name': report.company.companyName,
    'Website': report.resolution.resolvedUrl || report.company.readymadeWebsite || 'N/A',
    'Website Verified': report.resolution.resolvedUrl ? 'Yes' : 'No',
    'Scan Completed': report.status === 'Completed' ? 'Yes' : 'No',
    'Screenshot Taken': report.pages.some(p => p.screenshots.length > 0) ? 'Yes' : 'No',
    'Wave Score': aimObj.scoreStr, // WebAIM AIM Score out of 10 (e.g. 2.9 out of 10)
    'Axe Score': report.totalViolations,
    'LH Score': report.lighthouseAvgScore,
    'Screenshot link': githubMarkdownPath,
    'Contact Person 1': report.company.contactPerson && report.company.contactPerson !== 'N/A' ? report.company.contactPerson : `Company Secretary (${report.company.companyName})`,
    'Designation 1': 'Company Secretary & Compliance Officer',
    'Email ID 1': email1,
    'Contact Person 2': person2,
    'Designation 2': 'Managing Director / CEO',
    'Email ID 2': email2
  };
}

export function exportTrackerFiles(reports: CompanyAuditReportV11[], outputDir: string): void {
  // STRICT FILTERING RULE: Only include websites whose Wave AIM Score is strictly below 8.0!
  const filteredReports = reports.filter(r => {
    const aimObj = calculateAimScore(r.totalViolations || 0);
    return aimObj.scoreNum < 8.0;
  });

  const rows = filteredReports.map(r => createTrackerRow(r, outputDir));
  const headers = [
    'Sr. No.',
    'Assigned To',
    'Company Name',
    'Website',
    'Website Verified',
    'Scan Completed',
    'Screenshot Taken',
    'Wave Score',
    'Axe Score',
    'LH Score',
    'Screenshot link',
    'Contact Person 1',
    'Designation 1',
    'Email ID 1',
    'Contact Person 2',
    'Designation 2',
    'Email ID 2'
  ];

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. CSV Export
  const csvLines: string[] = [];
  csvLines.push(headers.join(','));

  for (const row of rows) {
    const values = headers.map(h => {
      const val = String((row as any)[h] || '').replace(/"/g, '""');
      return `"${val}"`;
    });
    csvLines.push(values.join(','));
  }
  const csvPath = path.join(outputDir, 'Simple_Accessibility_Outreach_Tracker.csv');
  fs.writeFileSync(csvPath, csvLines.join('\n'), 'utf8');

  // 2. Excel (.xlsx) Export
  const worksheet = XLSX.utils.json_to_sheet(rows, { header: headers });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Outreach Tracker');
  const excelPath = path.join(outputDir, 'Simple_Accessibility_Outreach_Tracker.xlsx');
  XLSX.writeFile(workbook, excelPath);
}

/**
 * Export Infrastructure Accessibility Audits Leads Tracker Excel file
 */
export function exportInfraTrackerFile(rows: any[], outputDir: string): void {
  const headers = [
    'Sr. No.',
    'Company Name',
    'Locations of Operation',
    'CEO / Founder Name',
    'ICP Rating',
    'ICP Qualified',
    'Contact Person',
    'Designation / Role',
    'Email ID',
    'Email Status',
    'LinkedIn Profile',
    'Outreach Status',
    'Last Updated Date',
    'Notes'
  ];

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const worksheet = XLSX.utils.json_to_sheet(rows, { header: headers });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Infra Leads Tracker');

  const excelPath = path.join(outputDir, 'Infrastructure_Accessibility_Audits_Leads_Tracker.xlsx');
  XLSX.writeFile(workbook, excelPath);
  console.log(`\n📊 Generated Infrastructure Accessibility Tracker: "${excelPath}"`);
}

/**
 * Export Art & Experiences Prospecting Tracker Excel file
 */
export function exportArtExperiencesTrackerFile(rows: any[], outputDir: string): void {
  const headers = [
    'Sr. No.',
    'Company Name',
    'Trigger Signal / Announcement',
    'Locations of Operation',
    'Contact Person',
    'Designation / Role',
    'Email ID',
    'Email Status',
    'LinkedIn Profile',
    'Outreach Status',
    'Last Updated Date'
  ];

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const worksheet = XLSX.utils.json_to_sheet(rows, { header: headers });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Art & Exp Tracker');

  const excelPath = path.join(outputDir, 'Art_Experiences_Prospecting_Tracker.xlsx');
  XLSX.writeFile(workbook, excelPath);
  console.log(`\n📊 Generated Art & Experiences Tracker: "${excelPath}"`);
}

/**
 * Export Digital Accessibility Tracker v1.3 Semi-Final Edition
 */
export function exportDigitalV13TrackerFile(reports: CompanyAuditReportV11[], outputDir: string): void {
  const runFolderName = path.basename(outputDir);
  const repoBaseUrl = 'https://github.com/VEER-TANMAY-SACHIN/projects/blob/main/orchavate_gtm_workflow/outputs';

  const headers = [
    'Sr. No.',
    'Assigned To',
    'Company Name',
    'Website',
    'Website Verified',
    'Scan Completed',
    'Screenshot Taken',
    'Wave Score',
    'Axe Score',
    'LH Score',
    'Screenshot link',
    'Contact Person 1',
    'Designation 1',
    'Email ID 1',
    'Contact Person 2',
    'Designation 2',
    'Email ID 2'
  ];

  // STRICT FILTERING RULE: Only include websites whose Wave AIM Score is strictly below 8.0!
  const filteredReports = reports.filter(r => {
    const aimObj = calculateAimScore(r.totalViolations || 0);
    return aimObj.scoreNum < 8.0;
  });

  const rows = filteredReports.map((r, idx) => {
    const safeName = r.company.companyName.replace(/[^a-zA-Z0-9]/g, '_');
    const githubScreenshotUrl = `${repoBaseUrl}/${runFolderName}/${safeName}/screenshots/${safeName}_Homepage_WAVE_Overlay.png`;
    const githubMarkdownPath = `![WAVE Tool Screenshot](${githubScreenshotUrl})`;

    const aimObj = calculateAimScore(r.totalViolations || 0);

    const email1 = r.emailDiscovery.primaryEmail.address && r.emailDiscovery.primaryEmail.address !== 'N/A' && !r.emailDiscovery.primaryEmail.address.includes('company.com')
      ? r.emailDiscovery.primaryEmail.address
      : 'Not publicly disclosed';

    const contact2Obj = r.emailDiscovery.regardingAccessibility && r.emailDiscovery.regardingAccessibility.length > 0
      ? r.emailDiscovery.regardingAccessibility[0]
      : null;

    const person2 = contact2Obj && contact2Obj.label ? contact2Obj.label : 'N/A';
    const email2 = contact2Obj && contact2Obj.address && !contact2Obj.address.includes('company.com') ? contact2Obj.address : 'Not publicly disclosed';

    return {
      'Sr. No.': idx + 1,
      'Assigned To': r.company.assignedTo || 'Unassigned',
      'Company Name': r.company.companyName,
      'Website': r.resolution.resolvedUrl || r.company.readymadeWebsite || 'N/A',
      'Website Verified': r.resolution.resolvedUrl ? 'Yes' : 'No',
      'Scan Completed': r.status === 'Completed' ? 'Yes' : 'No',
      'Screenshot Taken': r.pages.some(p => p.screenshots.length > 0) ? 'Yes' : 'No',
      'Wave Score': aimObj.scoreStr, // WebAIM AIM Score out of 10
      'Axe Score': r.totalViolations,
      'LH Score': r.lighthouseAvgScore,
      'Screenshot link': githubMarkdownPath,
      'Contact Person 1': r.company.contactPerson && r.company.contactPerson !== 'N/A' ? r.company.contactPerson : `Company Secretary (${r.company.companyName})`,
      'Designation 1': 'Company Secretary & Compliance Officer',
      'Email ID 1': email1,
      'Contact Person 2': person2,
      'Designation 2': 'Managing Director / CEO',
      'Email ID 2': email2
    };
  });

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Export CSV
  const csvLines: string[] = [headers.join(',')];
  for (const row of rows) {
    const values = headers.map(h => `"${String((row as any)[h] || '').replace(/"/g, '""')}"`);
    csvLines.push(values.join(','));
  }
  fs.writeFileSync(path.join(outputDir, 'Simple_Accessibility_Outreach_Tracker_v13_SemiFinal.csv'), csvLines.join('\n'), 'utf8');

  // Export Excel
  const worksheet = XLSX.utils.json_to_sheet(rows, { header: headers });
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Digital v1.3 Tracker');
  const excelPath = path.join(outputDir, 'Simple_Accessibility_Outreach_Tracker_v13_SemiFinal.xlsx');
  XLSX.writeFile(workbook, excelPath);

  console.log(`\n📊 Generated v1.3 Semi-Final Digital Outreach Tracker (< 8.0 AIM Score Filtered): "${excelPath}"`);
}
