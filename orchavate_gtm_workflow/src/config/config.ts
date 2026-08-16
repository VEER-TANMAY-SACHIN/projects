export type SearchMode = 'AUTOMATED_SEARCH' | 'READYMADE' | 'HYBRID';

export interface AppConfig {
  searchMode: SearchMode;
  readymadeFilePath?: string;
  workers: number;
  retryCount: number;
  searchTimeoutMs: number;
  cacheEnabled: boolean;
  cacheTTLMs: number;
  manualReviewThreshold: number;
  nonInteractive: boolean;
  skipWave: boolean;           // --skip-wave: skip WAVE free-scan, use synthetic overlay instead
}

export const defaultConfig: AppConfig = {
  searchMode: 'AUTOMATED_SEARCH',
  readymadeFilePath: undefined,
  workers: 1,
  retryCount: 2,
  searchTimeoutMs: 10000,
  cacheEnabled: true,
  cacheTTLMs: 7 * 24 * 60 * 60 * 1000, // 7 days
  manualReviewThreshold: 0.50,
  nonInteractive: false,
  skipWave: false,
};

export function parseCliConfig(args: string[]): Partial<AppConfig> {
  const config: Partial<AppConfig> = {};

  const modeIdx = args.indexOf('--mode');
  if (modeIdx !== -1 && args[modeIdx + 1]) {
    const val = args[modeIdx + 1].toUpperCase();
    if (val === 'AUTOMATED' || val === 'AUTOMATED_SEARCH') {
      config.searchMode = 'AUTOMATED_SEARCH';
    } else if (val === 'READYMADE') {
      config.searchMode = 'READYMADE';
    } else if (val === 'HYBRID') {
      config.searchMode = 'HYBRID';
    }
  }

  const readymadeIdx = args.indexOf('--readymade');
  if (readymadeIdx !== -1 && args[readymadeIdx + 1]) {
    config.readymadeFilePath = args[readymadeIdx + 1];
  }

  const workersIdx = args.indexOf('--workers');
  if (workersIdx !== -1 && args[workersIdx + 1]) {
    const w = parseInt(args[workersIdx + 1], 10);
    if (!isNaN(w) && w > 0) config.workers = w;
  }

  if (args.includes('--non-interactive') || args.includes('-y')) {
    config.nonInteractive = true;
  }

  if (args.includes('--skip-wave')) {
    config.skipWave = true;
  }

  return config;
}
