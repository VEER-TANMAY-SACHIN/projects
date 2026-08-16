import { CompanyInput } from '../types.js';
import { WebsiteResolver, ResolutionResult } from './resolver_types.js';
import { normalizeDomain } from '../website_resolver.js';
import { parseReadymadeFile } from '../cli.js';

export class ReadymadeWebsiteResolver implements WebsiteResolver {
  private readymadeMap: Record<string, string> = {};

  constructor(mappingFileOrMap?: string | Record<string, string>) {
    if (typeof mappingFileOrMap === 'string') {
      this.readymadeMap = parseReadymadeFile(mappingFileOrMap);
    } else if (mappingFileOrMap) {
      this.readymadeMap = mappingFileOrMap;
    }
  }

  public setMapping(map: Record<string, string>): void {
    this.readymadeMap = map;
  }

  public async resolve(company: CompanyInput): Promise<ResolutionResult> {
    const startTime = Date.now();
    const key = company.companyName.trim().toLowerCase();
    const readymadeUrl = company.readymadeWebsite || this.readymadeMap[key];

    if (!readymadeUrl || !readymadeUrl.trim()) {
      return {
        resolvedUrl: '',
        source: 'readymade-mapping',
        confidence: 'FAILED',
        hasConflict: false,
        candidateDomains: [],
        searchQueries: ['READYMADE_LOOKUP'],
        searchDurationMs: Date.now() - startTime,
        reason: `No readymade website URL found in mapping file for "${company.companyName}"`,
      };
    }

    let formattedUrl = readymadeUrl.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const norm = normalizeDomain(formattedUrl);
    const normLower = (norm || '').toLowerCase();
    const isValid = normLower && !normLower.includes('not found') && !normLower.includes('notfound') && !normLower.includes('invalid') && !normLower.includes('test');

    return {
      resolvedUrl: isValid ? formattedUrl : '',
      source: 'readymade-mapping',
      confidence: isValid ? 'HIGH' : 'FAILED',
      hasConflict: false,
      readymadeUrl: formattedUrl,
      candidateDomains: isValid ? [formattedUrl] : [],
      searchQueries: ['READYMADE_LOOKUP'],
      searchDurationMs: Date.now() - startTime,
      reason: isValid
        ? `Resolved via readymade reference file ("${formattedUrl}")`
        : `Readymade URL "${readymadeUrl}" failed format validation`,
    };
  }
}
