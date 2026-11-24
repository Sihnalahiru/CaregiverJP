import { PAPER_SETS, TOTAL_QUESTIONS } from './papers';
import type { AnswerRecord, PaperProgressRecord, StreakData } from './storage';

export type AchievementRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

export interface AchievementDefinition {
  id: string;
  title: string;
  titleSi: string;
  description: string;
  rarity: AchievementRarity;
  iconKey:
    | 'footprints'
    | 'book'
    | 'award'
    | 'target'
    | 'flame'
    | 'calendar'
    | 'moon'
    | 'sunrise'
    | 'shield'
    | 'compass'
    | 'sparkles'
    | 'crown';
  target: number;
  unit: string;
  evaluate: (metrics: StudyMetrics) => number;
}

export interface StudyMetrics {
  answeredCount: number;
  correctCount: number;
  accuracyPercent: number;
  completedPapersCount: number;
  highAccuracyPapersCount: number;
  zeroSkipPapersCount: number;
  bestStreakDays: number;
  totalStudyDays: number;
  bestConsecutiveCorrect: number;
  nightStudyCount: number;
  earlyStudyCount: number;
  bookmarkedCount: number;
}

export interface EvaluatedAchievement extends AchievementDefinition {
  current: number;
  progressPercent: number;
  unlocked: boolean;
  unlockedAt?: number;
}

export function computeStudyMetrics(
  answers: Record<string, AnswerRecord>,
  bookmarks: string[],
  paperProgress: Record<string, PaperProgressRecord>,
  streak: StreakData
): StudyMetrics {
  const answerEntries = Object.values(answers);
  const answeredCount = answerEntries.length;
  const correctCount = answerEntries.filter((a) => a.isCorrect).length;
  const accuracyPercent =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  let completedPapersCount = 0;
  let highAccuracyPapersCount = 0;
  let zeroSkipPapersCount = 0;

  for (const paper of PAPER_SETS) {
    const paperAnswered = paper.questions.filter((q) => Boolean(answers[q.id])).length;
    const paperCorrect = paper.questions.filter((q) => answers[q.id]?.isCorrect).length;
    const prog = paperProgress[paper.id];

    const isComplete =
      paperAnswered >= paper.questions.length || (prog?.completedCount ?? 0) > 0;
    if (isComplete) {
      completedPapersCount++;
    }

    const paperAcc =
      paperAnswered >= paper.questions.length
        ? Math.round((paperCorrect / paper.questions.length) * 100)
        : prog?.bestScore ?? 0;

    if (isComplete && paperAcc >= 80) {
      highAccuracyPapersCount++;
    }

    if (prog?.zeroSkipCompleted || (paper.questions.length === 45 && paperAnswered === 45)) {
      zeroSkipPapersCount++;
    }
  }

  return {
    answeredCount,
    correctCount,
    accuracyPercent,
    completedPapersCount,
    highAccuracyPapersCount,
    zeroSkipPapersCount,
    bestStreakDays: Math.max(streak.longest, streak.current),
    totalStudyDays: streak.studyDates.length,
    bestConsecutiveCorrect: streak.bestConsecutiveCorrect,
    nightStudyCount: streak.nightStudyCount,
    earlyStudyCount: streak.earlyStudyCount,
    bookmarkedCount: bookmarks.length,
  };
}

export const ACHIEVEMENTS: AchievementDefinition[] = [
  {
    id: 'first-step',
    title: 'First Step',
    titleSi: 'පළමු පියවර',
    description: 'Answer your very first SSW Nursing Care MCQ.',
    rarity: 'Common',
    iconKey: 'footprints',
    target: 1,
    unit: 'question',
    evaluate: (m) => m.answeredCount,
  },
  {
    id: 'warmup-scholar',
    title: 'Warm-Up Scholar',
    titleSi: 'ආරම්භක ශිෂ්‍යයා',
    description: 'Complete 25 bilingual questions across any paper sets.',
    rarity: 'Common',
    iconKey: 'book',
    target: 25,
    unit: 'questions',
    evaluate: (m) => m.answeredCount,
  },
  {
    id: 'paper-master',
    title: 'Paper Master',
    titleSi: 'ප්‍රශ්න පත්‍ර ප්‍රවීණයා',
    description: 'Finish every question in any complete paper set.',
    rarity: 'Rare',
    iconKey: 'award',
    target: 1,
    unit: 'paper',
    evaluate: (m) => m.completedPapersCount,
  },
  {
    id: 'sharp-shooter',
    title: 'Sharp Shooter',
    titleSi: 'නිරවද්‍ය ඉලක්කය',
    description: 'Maintain 85% or higher accuracy across at least 20 answered questions.',
    rarity: 'Rare',
    iconKey: 'target',
    target: 85,
    unit: '% accuracy',
    evaluate: (m) => (m.answeredCount >= 20 ? m.accuracyPercent : Math.min(m.answeredCount * 3, 60)),
  },
  {
    id: 'hot-streak',
    title: 'Precision Streak',
    titleSi: 'අඛණ්ඩ නිවැරදි මාලාව',
    description: 'Answer 10 questions correctly in a row without a mistake.',
    rarity: 'Rare',
    iconKey: 'flame',
    target: 10,
    unit: 'in a row',
    evaluate: (m) => m.bestConsecutiveCorrect,
  },
  {
    id: 'three-day-habit',
    title: 'Steady Routine',
    titleSi: 'නියමිත පුහුණුව',
    description: 'Build a 3-day consecutive study streak.',
    rarity: 'Rare',
    iconKey: 'calendar',
    target: 3,
    unit: 'days',
    evaluate: (m) => m.bestStreakDays,
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    titleSi: 'රාත්‍රී අධ්‍යයනය',
    description: 'Answer at least 5 questions during late-night study (10 PM – 4 AM).',
    rarity: 'Epic',
    iconKey: 'moon',
    target: 5,
    unit: 'late answers',
    evaluate: (m) => m.nightStudyCount,
  },
  {
    id: 'early-riser',
    title: 'Early Riser',
    titleSi: 'උදෑසන ප්‍රබෝධය',
    description: 'Answer at least 5 questions during early-morning study (5 AM – 8 AM).',
    rarity: 'Epic',
    iconKey: 'sunrise',
    target: 5,
    unit: 'morning answers',
    evaluate: (m) => m.earlyStudyCount,
  },
  {
    id: 'zero-skip-marathon',
    title: 'Zero-Skip Marathon',
    titleSi: 'නොකඩවා සම්පූර්ණ කළ පත්‍රය',
    description: 'Complete an entire 45-question paper without skipping a single question.',
    rarity: 'Epic',
    iconKey: 'shield',
    target: 1,
    unit: '45-Q paper',
    evaluate: (m) => m.zeroSkipPapersCount,
  },
  {
    id: 'halfway-hero',
    title: 'Halfway Hero',
    titleSi: 'අර්ධ සන්ධිස්ථානය',
    description: 'Answer at least 278 out of 555 questions across the question bank.',
    rarity: 'Epic',
    iconKey: 'compass',
    target: Math.ceil(TOTAL_QUESTIONS / 2),
    unit: 'questions',
    evaluate: (m) => m.answeredCount,
  },
  {
    id: 'bilingual-ace',
    title: 'Bilingual Ace',
    titleSi: 'ද්විභාෂා දක්ෂයා',
    description: 'Complete 5 different paper sets with 80% or higher accuracy.',
    rarity: 'Epic',
    iconKey: 'sparkles',
    target: 5,
    unit: 'papers ≥ 80%',
    evaluate: (m) => m.highAccuracyPapersCount,
  },
  {
    id: 'all-clear-legend',
    title: '555 All-Clear Legend',
    titleSi: '555 සම්පූර්ණ විශිෂ්ටයා',
    description: 'Answer every single one of the 555 questions across all 13 paper sets.',
    rarity: 'Legendary',
    iconKey: 'crown',
    target: TOTAL_QUESTIONS,
    unit: 'questions',
    evaluate: (m) => m.answeredCount,
  },
];

export function evaluateAchievements(
  metrics: StudyMetrics,
  unlockedMap: Record<string, number>
): { list: EvaluatedAchievement[]; newlyUnlocked: EvaluatedAchievement[] } {
  const newlyUnlocked: EvaluatedAchievement[] = [];

  const list: EvaluatedAchievement[] = ACHIEVEMENTS.map((def) => {
    const rawCurrent = def.evaluate(metrics);
    const clampedCurrent = Math.min(rawCurrent, def.target);
    const alreadyUnlockedAt = unlockedMap[def.id];
    const meetsTarget = rawCurrent >= def.target;
    const unlocked = Boolean(alreadyUnlockedAt) || meetsTarget;
    const progressPercent = unlocked
      ? 100
      : Math.min(99, Math.round((clampedCurrent / def.target) * 100));

    const evaluated: EvaluatedAchievement = {
      ...def,
      current: unlocked ? def.target : clampedCurrent,
      progressPercent,
      unlocked,
      unlockedAt: alreadyUnlockedAt ?? (meetsTarget ? Date.now() : undefined),
    };

    if (meetsTarget && !alreadyUnlockedAt) {
      newlyUnlocked.push(evaluated);
    }

    return evaluated;
  });

  return { list, newlyUnlocked };
}
