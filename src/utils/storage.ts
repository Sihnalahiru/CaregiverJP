// Zero-overwrite namespaced localStorage persistence for SSW Nursing Care PWA

export const STORAGE_PREFIX = 'ssw_care_pwa_v1_';

export const STORAGE_KEYS = {
  ANSWERS: `${STORAGE_PREFIX}answers`,
  BOOKMARKS: `${STORAGE_PREFIX}bookmarks`,
  PAPER_PROGRESS: `${STORAGE_PREFIX}paper_progress`,
  STREAK: `${STORAGE_PREFIX}streak`,
  SETTINGS: `${STORAGE_PREFIX}settings`,
  ACHIEVEMENTS: `${STORAGE_PREFIX}achievements`,
} as const;

export type ThemePreference = 'light' | 'dark' | 'system';
export type PracticeMode = 'study' | 'exam';
export type BilingualLayout = 'stacked' | 'side-by-side';

export interface AnswerRecord {
  selectedIndex: number;
  isCorrect: boolean;
  attempts: number;
  updatedAt: number;
}

export interface PaperProgressRecord {
  lastIndex: number;
  completedCount: number;
  bestScore: number; // percentage 0..100
  lastCompletedAt?: number;
  zeroSkipCompleted?: boolean;
}

export interface StreakData {
  current: number;
  longest: number;
  lastStudyDate: string; // YYYY-MM-DD local date
  studyDates: string[];
  nightStudyCount: number;
  earlyStudyCount: number;
  consecutiveCorrect: number;
  bestConsecutiveCorrect: number;
}

export interface AppSettings {
  soundEnabled: boolean;
  theme: ThemePreference;
  defaultMode: PracticeMode;
  bilingualLayout: BilingualLayout;
  autoAdvance: boolean;
}

export interface PersistedState {
  answers: Record<string, AnswerRecord>;
  bookmarks: string[];
  paperProgress: Record<string, PaperProgressRecord>;
  streak: StreakData;
  settings: AppSettings;
  achievements: Record<string, number>;
}

export const DEFAULT_SETTINGS: AppSettings = {
  soundEnabled: true,
  theme: 'system',
  defaultMode: 'study',
  bilingualLayout: 'stacked',
  autoAdvance: false,
};

export const DEFAULT_STREAK: StreakData = {
  current: 0,
  longest: 0,
  lastStudyDate: '',
  studyDates: [],
  nightStudyCount: 0,
  earlyStudyCount: 0,
  consecutiveCorrect: 0,
  bestConsecutiveCorrect: 0,
};

function safeReadJSON<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (parsed === null || parsed === undefined) return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}

function safeWriteJSON<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Unable to persist ${key}:`, error);
  }
}

export function getLocalDateString(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getPreviousDateString(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, (m || 1) - 1, d || 1);
  dt.setDate(dt.getDate() - 1);
  return getLocalDateString(dt);
}

/**
 * Recompute active streak value based on today vs lastStudyDate
 * without erasing historical studyDates.
 */
export function computeEffectiveStreak(streak: StreakData): number {
  if (!streak.lastStudyDate) return 0;
  const today = getLocalDateString();
  const yesterday = getPreviousDateString(today);
  if (streak.lastStudyDate === today || streak.lastStudyDate === yesterday) {
    return streak.current;
  }
  return 0;
}

export function updateStreakOnAnswer(prev: StreakData, isCorrect: boolean, now = new Date()): StreakData {
  const today = getLocalDateString(now);
  const yesterday = getPreviousDateString(today);
  const hour = now.getHours();

  let current = prev.current;
  if (prev.lastStudyDate === today) {
    current = Math.max(1, prev.current);
  } else if (prev.lastStudyDate === yesterday) {
    current = prev.current + 1;
  } else {
    current = 1;
  }

  const longest = Math.max(prev.longest, current);
  const studyDates = prev.studyDates.includes(today)
    ? prev.studyDates
    : [...prev.studyDates, today].slice(-365);

  const isNight = hour >= 22 || hour < 4;
  const isEarly = hour >= 5 && hour < 8;

  const consecutiveCorrect = isCorrect ? prev.consecutiveCorrect + 1 : 0;
  const bestConsecutiveCorrect = Math.max(prev.bestConsecutiveCorrect, consecutiveCorrect);

  return {
    current,
    longest,
    lastStudyDate: today,
    studyDates,
    nightStudyCount: prev.nightStudyCount + (isNight ? 1 : 0),
    earlyStudyCount: prev.earlyStudyCount + (isEarly ? 1 : 0),
    consecutiveCorrect,
    bestConsecutiveCorrect,
  };
}

export function loadPersistedState(): PersistedState {
  const answers = safeReadJSON<Record<string, AnswerRecord>>(STORAGE_KEYS.ANSWERS, {});
  const bookmarks = safeReadJSON<string[]>(STORAGE_KEYS.BOOKMARKS, []);
  const paperProgress = safeReadJSON<Record<string, PaperProgressRecord>>(
    STORAGE_KEYS.PAPER_PROGRESS,
    {}
  );
  const savedStreak = safeReadJSON<Partial<StreakData>>(STORAGE_KEYS.STREAK, {});
  const savedSettings = safeReadJSON<Partial<AppSettings>>(STORAGE_KEYS.SETTINGS, {});
  const achievements = safeReadJSON<Record<string, number>>(STORAGE_KEYS.ACHIEVEMENTS, {});

  return {
    answers: typeof answers === 'object' && !Array.isArray(answers) ? answers : {},
    bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
    paperProgress:
      typeof paperProgress === 'object' && !Array.isArray(paperProgress) ? paperProgress : {},
    streak: { ...DEFAULT_STREAK, ...savedStreak },
    settings: { ...DEFAULT_SETTINGS, ...savedSettings },
    achievements:
      typeof achievements === 'object' && !Array.isArray(achievements) ? achievements : {},
  };
}

export function saveAnswers(answers: Record<string, AnswerRecord>): void {
  safeWriteJSON(STORAGE_KEYS.ANSWERS, answers);
}

export function saveBookmarks(bookmarks: string[]): void {
  safeWriteJSON(STORAGE_KEYS.BOOKMARKS, bookmarks);
}

export function savePaperProgress(progress: Record<string, PaperProgressRecord>): void {
  safeWriteJSON(STORAGE_KEYS.PAPER_PROGRESS, progress);
}

export function saveStreak(streak: StreakData): void {
  safeWriteJSON(STORAGE_KEYS.STREAK, streak);
}

export function saveSettings(settings: AppSettings): void {
  safeWriteJSON(STORAGE_KEYS.SETTINGS, settings);
}

export function saveAchievements(achievements: Record<string, number>): void {
  safeWriteJSON(STORAGE_KEYS.ACHIEVEMENTS, achievements);
}

export interface BackupPayload {
  app: 'CaregiverJP';
  schema: 'ssw_care_pwa_v1';
  version: 2;
  exportedAt: string;
  data: Record<string, string | null>;
}

export function createBackupPayload(): BackupPayload {
  const data: Record<string, string | null> = {};
  if (typeof window !== 'undefined') {
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key && (key.startsWith(STORAGE_PREFIX) || key.startsWith('caregiverjp.'))) {
        data[key] = window.localStorage.getItem(key);
      }
    }
  }
  return {
    app: 'CaregiverJP',
    schema: 'ssw_care_pwa_v1',
    version: 2,
    exportedAt: new Date().toISOString(),
    data,
  };
}

export function restoreBackupPayload(rawText: string): { restoredKeys: number } {
  const parsed = JSON.parse(rawText);
  const isV2 =
    parsed?.app === 'CaregiverJP' &&
    parsed?.schema === 'ssw_care_pwa_v1' &&
    parsed?.data &&
    typeof parsed.data === 'object';
  const isLegacyV1 =
    parsed?.app === 'CaregiverJP' &&
    parsed?.version === 1 &&
    parsed?.data &&
    typeof parsed.data === 'object';

  if (!isV2 && !isLegacyV1) {
    throw new Error('This file is not a valid CaregiverJP backup.');
  }

  if (typeof window === 'undefined') {
    throw new Error('Backup restore is only available in a browser.');
  }

  // Validate the entire backup before writing anything, so a malformed entry
  // cannot leave a partially restored progress store.
  const entries = Object.entries(parsed.data).filter(([key, value]) =>
    (key.startsWith(STORAGE_PREFIX) || key.startsWith('caregiverjp.')) &&
    typeof value === 'string'
  ) as Array<[string, string]>;

  for (const [key, value] of entries) {
    try {
      JSON.parse(value);
    } catch {
      throw new Error(`Backup contains invalid JSON for "${key}". No data was restored.`);
    }
  }

  try {
    for (const [key, value] of entries) window.localStorage.setItem(key, value);
  } catch {
    throw new Error('Unable to restore backup. Device storage may be full or unavailable.');
  }
  return { restoredKeys: entries.length };
}

export function clearStudyProgressOnly(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEYS.ANSWERS);
  window.localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
  window.localStorage.removeItem(STORAGE_KEYS.PAPER_PROGRESS);
  window.localStorage.removeItem(STORAGE_KEYS.STREAK);
  window.localStorage.removeItem(STORAGE_KEYS.ACHIEVEMENTS);
}
