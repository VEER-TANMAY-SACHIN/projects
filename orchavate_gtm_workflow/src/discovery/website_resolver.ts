import { CompanyInput, WebsiteResolution } from '../types.js';
import { WebsiteResolver, ResolutionResult } from '../resolvers/resolver_types.js';
import { AutomatedWebsiteResolver } from '../resolvers/automated_resolver.js';
import { ReadymadeWebsiteResolver } from '../resolvers/readymade_resolver.js';
import { HybridWebsiteResolver } from '../resolvers/hybrid_resolver.js';
import { SearchCache } from '../cache/search_cache.js';

export function normalizeDomain(urlStr: string): string {
  try {
    let formatted = urlStr.trim().toLowerCase();
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    const parsed = new URL(formatted);
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    return urlStr.trim().toLowerCase();
  }
}

export async function resolveWebsite(
  company: CompanyInput,
  readymadeList?: Record<string, string>,
  cache?: SearchCache,
  mode: 'AUTOMATED_SEARCH' | 'READYMADE' | 'HYBRID' = 'AUTOMATED_SEARCH'
): Promise<WebsiteResolution> {
  let resolver: WebsiteResolver;

  const autoResolver = new AutomatedWebsiteResolver(undefined, cache);
  const readyResolver = new ReadymadeWebsiteResolver(readymadeList);

  if (mode === 'READYMADE') {
    resolver = readyResolver;
  } else if (mode === 'HYBRID') {
    resolver = new HybridWebsiteResolver(autoResolver, readyResolver);
  } else {
    // AUTOMATED_SEARCH
    if (readymadeList && Object.keys(readymadeList).length > 0) {
      resolver = new HybridWebsiteResolver(autoResolver, readyResolver);
    } else {
      resolver = autoResolver;
    }
  }

  const result: ResolutionResult = await resolver.resolve(company);

  // Convert ResolutionResult to WebsiteResolution interface for backward compatibility
  let compatSource: 'self-search' | 'readymade-fallback' | 'both-agreed' = 'self-search';
  if (result.source === 'hybrid-agreed') compatSource = 'both-agreed';
  else if (result.source === 'readymade-mapping' || result.source === 'hybrid-fallback') compatSource = 'readymade-fallback';

  return {
    resolvedUrl: result.resolvedUrl,
    source: compatSource,
    confidence: result.confidence,
    hasConflict: result.hasConflict,
    conflictDetails: result.conflictDetails,
    selfSearchUrl: result.selfSearchUrl,
    readymadeUrl: result.readymadeUrl,
  };
}
