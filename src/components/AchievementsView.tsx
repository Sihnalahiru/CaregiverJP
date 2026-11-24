import React, { useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Compass,
  Crown,
  Flame,
  Footprints,
  Lock,
  Moon,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Target,
} from 'lucide-react';
import type { AchievementDefinition, EvaluatedAchievement } from '../utils/achievements';
import { soundEngine } from '../utils/sound';

interface AchievementsViewProps {
  achievements: EvaluatedAchievement[];
  effectiveStreak: number;
  bestStreak: number;
  bestConsecutiveCorrect: number;
}

type BadgeFilter = 'all' | 'unlocked' | 'locked';

const ICON_MAP: Record<
  AchievementDefinition['iconKey'],
  React.ComponentType<{ className?: string }>
> = {
  footprints: Footprints,
  book: BookOpen,
  award: Award,
  target: Target,
  flame: Flame,
  calendar: Calendar,
  moon: Moon,
  sunrise: Sunrise,
  shield: ShieldCheck,
  compass: Compass,
  sparkles: Sparkles,
  crown: Crown,
};

const RARITY_COLOR: Record<AchievementDefinition['rarity'], string> = {
  Common: 'text-[#5A647B] dark:text-[#94A3B8]',
  Rare: 'text-[#1D4ED8] dark:text-[#7FA4FF]',
  Epic: 'text-amber-700 dark:text-amber-300',
  Legendary: 'text-emerald-700 dark:text-emerald-300',
};

const RARITY_ICON_BG: Record<AchievementDefinition['rarity'], string> = {
  Common: 'bg-[#EEF2F7] text-[#334155] dark:bg-[#1D283E] dark:text-[#CBD5E1]',
  Rare: 'bg-[#EEF3FF] text-[#1D4ED8] dark:bg-[#1C2D54] dark:text-[#7FA4FF]',
  Epic: 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300',
  Legendary: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300',
};

export const AchievementsView: React.FC<AchievementsViewProps> = ({
  achievements,
  effectiveStreak,
  bestStreak,
  bestConsecutiveCorrect,
}) => {
  const [filter, setFilter] = useState<BadgeFilter>('all');

  const unlockedCount = useMemo(
    () => achievements.filter((a) => a.unlocked).length,
    [achievements]
  );

  const visible = useMemo(() => {
    const base =
      filter === 'all'
        ? achievements
        : filter === 'unlocked'
          ? achievements.filter((a) => a.unlocked)
          : achievements.filter((a) => !a.unlocked);
    // Show unlocked first when viewing all
    return [...base].sort((a, b) => Number(b.unlocked) - Number(a.unlocked));
  }, [achievements, filter]);

  const progressPct = Math.round((unlockedCount / achievements.length) * 100);

  return (
    <div className="animate-fade-slide space-y-4 px-4 pb-24 pt-4">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-[#131A2C] dark:text-[#F1F5FB]">
          Achievements
        </h1>
        <p className="mt-0.5 text-xs text-[#5A647B] dark:text-[#94A3B8]">
          Milestones across accuracy, streaks, timing, and all 555 questions
        </p>
      </div>

      {/* Summary Progress Card */}
      <section className="rounded-3xl border border-[#E6EAF2] bg-white p-4 dark:border-[#23304A] dark:bg-[#131B2C]">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-xs font-medium text-[#5A647B] dark:text-[#94A3B8]">Unlocked</p>
            <p className="mt-0.5 font-mono-tabular text-2xl font-extrabold text-[#131A2C] dark:text-[#F1F5FB]">
              {unlockedCount}
              <span className="text-sm font-semibold text-[#94A3B8]">
                {' '}
                / {achievements.length}
              </span>
            </p>
          </div>
          <span className="font-mono-tabular text-sm font-bold text-[#1D4ED8] dark:text-[#7FA4FF]">
            {progressPct}%
          </span>
        </div>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#EEF2F7] dark:bg-[#1E2A42]">
          <div
            className="h-full rounded-full bg-[#1D4ED8] transition-all duration-500 dark:bg-[#5B8BFF]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="mt-3.5 flex items-center justify-between border-t border-[#EEF2F7] pt-3 text-xs text-[#5A647B] dark:border-[#1E2A42] dark:text-[#94A3B8]">
          <span className="font-mono-tabular">
            Active streak: <strong className="text-[#131A2C] dark:text-[#F1F5FB]">{effectiveStreak}d</strong>
          </span>
          <span className="font-mono-tabular">
            Best streak: <strong className="text-[#131A2C] dark:text-[#F1F5FB]">{bestStreak}d</strong>
          </span>
          <span className="font-mono-tabular">
            In a row: <strong className="text-[#131A2C] dark:text-[#F1F5FB]">{bestConsecutiveCorrect}</strong>
          </span>
        </div>
      </section>

      {/* Filter Segmented Control */}
      <div className="grid grid-cols-3 gap-1 rounded-2xl bg-[#EAEFF6] p-1 dark:bg-[#131B2C]">
        {(
          [
            { id: 'all', label: `All (${achievements.length})` },
            { id: 'unlocked', label: `Unlocked (${unlockedCount})` },
            { id: 'locked', label: `Locked (${achievements.length - unlockedCount})` },
          ] as const
        ).map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                soundEngine.playTap();
                setFilter(tab.id);
              }}
              className={`min-h-[38px] whitespace-nowrap rounded-xl px-2 text-xs font-semibold transition ${
                active
                  ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                  : 'text-[#5A647B] hover:text-[#131A2C] dark:text-[#94A3B8] dark:hover:text-[#F1F5FB]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Achievement List */}
      <div className="space-y-2.5">
        {visible.map((badge) => {
          const Icon = ICON_MAP[badge.iconKey];
          return (
            <article
              key={badge.id}
              className={`rounded-2xl border p-4 transition ${
                badge.unlocked
                  ? 'border-[#DCE3F0] bg-white dark:border-[#2A3B5E] dark:bg-[#131B2C]'
                  : 'border-[#E6EAF2] bg-white/75 dark:border-[#1D283E] dark:bg-[#111827]/75'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    badge.unlocked
                      ? RARITY_ICON_BG[badge.rarity]
                      : 'bg-[#F1F5F9] text-[#94A3B8] dark:bg-[#1A2438] dark:text-[#475569]'
                  }`}
                >
                  {badge.unlocked ? (
                    <Icon className="h-5 w-5" />
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="truncate text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
                      {badge.title}
                    </h2>
                    <span className={`shrink-0 text-[11px] font-semibold ${RARITY_COLOR[badge.rarity]}`}>
                      {badge.rarity}
                    </span>
                  </div>
                  <p className="sinhala-text text-xs text-[#5A647B] dark:text-[#94A3B8]" lang="si">
                    {badge.titleSi}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#5A647B] dark:text-[#94A3B8]">
                    {badge.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2.5">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#EEF2F7] dark:bg-[#1E2A42]">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          badge.unlocked
                            ? 'bg-emerald-600 dark:bg-emerald-400'
                            : 'bg-[#1D4ED8] dark:bg-[#5B8BFF]'
                        }`}
                        style={{ width: `${badge.progressPercent}%` }}
                      />
                    </div>
                    <span className="shrink-0 font-mono-tabular text-[11px] font-semibold text-[#5A647B] dark:text-[#94A3B8]">
                      {badge.unlocked ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Unlocked
                        </span>
                      ) : (
                        `${badge.current}/${badge.target}`
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {visible.length === 0 && (
          <div className="rounded-2xl border border-[#E6EAF2] bg-white p-8 text-center text-sm text-[#5A647B] dark:border-[#23304A] dark:bg-[#131B2C] dark:text-[#94A3B8]">
            No achievements in this view yet. Start practicing to unlock badges.
          </div>
        )}
      </div>
    </div>
  );
};
