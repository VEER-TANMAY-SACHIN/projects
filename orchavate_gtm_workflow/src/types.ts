export interface CompanyInput {
  srNo: number;
  companyName: string;
  readymadeWebsite?: string;
  assignedTo?: string;
  contactPerson?: string;
  emailId?: string;
  verifiedBy?: string;
}

export type ResolutionSource = 
  | 'self-search' 
  | 'readymade-fallback' 
  | 'both-agreed';

export type ResolutionConfidence = 'HIGH' | 'LOW' | 'FAILED';

export interface WebsiteResolution {
  resolvedUrl: string;
  source: ResolutionSource;
  confidence: ResolutionConfidence;
  hasConflict: boolean;
  conflictDetails?: string;
  selfSearchUrl?: string;
  readymadeUrl?: string;
}

export type EmailStatus = 'Verified' | 'Unverified - guessed pattern' | 'Not Found';

export interface EmailField {
  address: string;
  type: 'primary' | 'compliance_grievance' | 'general';
  label: string;
  status: EmailStatus;
  sourceUrl?: string;
  screenshotPath?: string;
}

export interface EmailDiscoveryResult {
  primaryEmail: EmailField;
  regardingAccessibility: EmailField[];
  overallStatus: EmailStatus;
  evidenceScreenshots: string[];
}

export interface BotBlockResult {
  isBlocked: boolean;
  signatureMatched?: string;
}

export type ViolationCategory = 
  | 'missing_alt_text' 
  | 'color_contrast' 
  | 'form_labels' 
  | 'keyboard_navigation' 
  | 'other';

export interface AuditViolation {
  id: string;
  impact: 'critical' | 'serious' | 'moderate' | 'minor';
  description: string;
  help: string;
  helpUrl: string;
  category: ViolationCategory;
  selector: string;
  html: string;
  pageName: string;
  screenshotPath?: string;
}

export interface PageAuditResult {
  pageName: 'Homepage' | 'About' | 'Contact' | 'Investor Relations' | 'Statutory Details';
  url: string;
  accessible: boolean;
  axeViolations: AuditViolation[];
  lighthouseScore: number;
  screenshots: string[];
}

export interface DeliverablePair {
  name: string;
  reportPath: string;
  screenshotPath: string;
  markdownContent: string;
}

export type CompanyScanStatus = 
  | 'Completed' 
  | 'Blocked (Bot Protection)' 
  | 'Inaccessible' 
  | 'Conflict Flagged';

export interface CompanyAuditReportV11 {
  company: CompanyInput;
  resolution: WebsiteResolution;
  emailDiscovery: EmailDiscoveryResult;
  botBlock: BotBlockResult;
  pages: PageAuditResult[];
  status: CompanyScanStatus;
  totalViolations: number;
  altTextViolations: number;
  contrastViolations: number;
  labelViolations: number;
  keyboardViolations: number;
  lighthouseAvgScore: number;
  waveAimScore?: number;         // Real WAVE AIM Score from wave.webaim.org (e.g. 2.3)
  waveAimScoreStr?: string;      // e.g. "2.3 out of 10"
  deliverables: {
    websitePair: DeliverablePair;
    emailPair: DeliverablePair;
    toolsPair: DeliverablePair;
  };
  remarks: string;
  timestamp: string;
}

export interface RunReportStats {
  timestamp: string;
  durationSeconds: number;
  totalCompanies: number;
  searchMode?: string;
  searchProviderName?: string;
  searchAttempts?: number;
  avgSearchTimeMs?: number;
  resolutionStats: {
    selfSearchCount: number;
    fallbackCount: number;
    conflictCount: number;
  };
  emailStats: {
    verifiedCount: number;
    guessedCount: number;
    notFoundCount: number;
  };
  scanStats: {
    completedCount: number;
    blockedCount: number;
    inaccessibleCount: number;
  };
  circuitBreakerEvents: string[];
  conflictsTable: Array<{ company: string; selfSearchUrl: string; readymadeUrl: string; status: string }>;
  blockedDomainsTable: Array<{ company: string; domain: string; signatureMatched: string; attempts: number }>;
  recommendedNextSteps: {
    manualWebsiteResearch: string[];
    noEmailFound: string[];
    unresolvedConflicts: string[];
    infraIssues: string[];
  };
}

// ==========================================
// ORCHAVATE v1.3 MULTI-PIPELINE & DRAGTOOL TYPES
// ==========================================

export type PipelineType = 'digital' | 'infrastructure' | 'art_experiences';

export interface LocationPriorityMap {
  P1: string[]; // Bengaluru, Hosur, Bidadi
  P2: string[]; // Gurugram, Noida, Greater Noida, Manesar, Bhiwadi, Faridabad, Delhi
  P3: string[]; // Mumbai, Navi Mumbai, Thane, Pune, Chakan, Talegaon, Pimpri-Chinchwad
  P4: string[]; // Chennai & nearby
}

export interface ICPCriteriaResult {
  largeOffices500Plus: boolean;
  multipleLocations: boolean;
  locatedInPriorityArea: boolean;
  priorityTier?: 'P1' | 'P2' | 'P3' | 'P4' | 'None';
  hasFacilitiesOrCampuses: boolean; // Hospitals, hotels, malls, campuses, factories
  mentionsESGorDEI: boolean; // DEI, inclusion, accessibility, ESG
  openingNewLocations: boolean;
  satisfiedCount: number; // 0 to 6
  bottomlineRating: string; // e.g. "4/6 Criteria Satisfied"
  isICPQualified: boolean; // true if satisfiedCount >= 3
  evidenceLinks: Record<string, string>;
}

export type DecisionMakerRole = 
  | 'Facilities_Admin' 
  | 'RealEstate_Infra' 
  | 'ESG_Sustainability' 
  | 'HR_DEI' 
  | 'Operations' 
  | 'Manufacturing_Plant' 
  | 'Marketing_Brand' 
  | 'Digital_IT';

export interface DiscoveredContact {
  name: string;
  title: string;
  department: string;
  email: string;
  phone?: string;
  emailStatus: 'Verified' | 'Unverified - guessed pattern' | 'Email Not Found';
  linkedInUrl?: string;
  sourceUrl?: string;
  confidenceScore: number; // 0 to 100
  tierUsed: 'Tier 1 (Zero-Cost Local)' | 'Tier 2 (Freemium API)';
}

export interface DragtoolTargetConfig {
  pipeline: PipelineType;
  targetDepartmentTitles: string[];
}

export interface InfraTrackerRow {
  companyName: string;
  locationsOfOperation: string;
  ceoFounderName: string;
  icpRating: string; // e.g. "5/6"
  icpQualified: boolean;
  contactPerson: string;
  designation: string;
  emailId: string;
  emailStatus: string;
  linkedInUrl: string;
  outreachStatus: 'Not Contacted' | 'Email 1 Sent' | 'Responded' | 'Email 2 Sent' | 'Email 3 Sent' | 'No Response - Closed' | 'Interested';
  lastUpdatedDate: string;
  notes: string;
}

export interface ArtExperiencesTrackerRow {
  companyName: string;
  triggerSignal: string; // e.g. "New Office Opening", "Experiential Rebrand"
  locationsOfOperation: string;
  contactPerson: string;
  designation: string;
  emailId: string;
  emailStatus: string;
  linkedInUrl: string;
  outreachStatus: string;
  lastUpdatedDate: string;
}

export interface DigitalV13TrackerRow {
  srNo: number;
  assignedTo: string;
  companyName: string;
  website: string;
  websiteVerified: string;
  scanCompleted: string;
  screenshotTaken: string;
  waveAimScore: string;     // Real WAVE AIM Score from wave.webaim.org (e.g. "2.3 out of 10")
  axeScore: number;
  lhScore: number;
  screenshotLink: string; // GitHub markdown link syntax
  contactPerson1: string;
  designation1: string;
  emailId1: string;
  contactPerson2: string;
  designation2: string;
  emailId2: string;
}

// Apollo API & Enrichment Engine Types
export interface ApolloMatchRequest {
  first_name?: string;
  last_name?: string;
  name?: string;
  organization_name?: string;
  domain?: string;
  linkedin_url?: string;
}

export interface ApolloPersonMatch {
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  title?: string;
  email?: string;
  email_status?: string;
  organization?: {
    name?: string;
    primary_domain?: string;
  };
  linkedin_url?: string;
  phone_numbers?: Array<{ raw_number?: string }>;
}

export interface ApolloMatchResponse {
  person?: ApolloPersonMatch;
  status?: string;
  error?: string;
}

export interface ApolloQuotaStats {
  rateLimitRemaining: number;
  rateLimitTotal: number;
  quotaWarningTriggered: boolean;
}

export interface IncrementalCompanyInput extends CompanyInput {
  isFullyPopulated?: boolean;
  missingFields?: string[];
}



