import React from 'react';
import { Award, X } from 'lucide-react';
import type { EvaluatedAchievement } from '../utils/achievements';

interface AchievementToastProps {
  achievement: EvaluatedAchievement | null;
  onDismiss: () => void;
  onViewBadges: () => void;
}

const RARITY_STYLES: Record<EvaluatedAchievement['rarity'], string> = {
  Common: 'text-slate-600 dark:text-slate-300',
  Rare: 'text-[#1D4ED8] dark:text-[#7FA4FF]',
  Epic: 'text-amber-700 dark:text-amber-300',
  Legendary: 'text-emerald-700 dark:text-emerald-300',
};

export const AchievementToast: React.FC<AchievementToastProps> = ({
  achievement,
  onDismiss,
  onViewBadges,
}) => {
  if (!achievement) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 pt-safe">
      <div
        role="status"
        aria-live="polite"
        className="animate-pop-in pointer-events-auto flex w-full max-w-[404px] items-center gap-3 rounded-2xl border border-[#DCE3F0] bg-white/95 p-3.5 shadow-[0_12px_32px_rgba(19,26,44,0.16)] backdrop-blur-md dark:border-[#2B3B5C] dark:bg-[#162036]/95 dark:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#1D4ED8] dark:bg-[#1E2E52] dark:text-[#7FA4FF]">
          <Award className="h-6 w-6" />
        </div>
        <button
          type="button"
          onClick={() => {
            onDismiss();
            onViewBadges();
          }}
          className="min-w-0 flex-1 text-left"
        >
          <p className={`text-[11px] font-semibold ${RARITY_STYLES[achievement.rarity]}`}>
            Achievement Unlocked · {achievement.rarity}
          </p>
          <p className="truncate text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
            {achievement.title}
          </p>
          <p className="sinhala-text truncate text-xs text-[#5A647B] dark:text-[#94A3B8]" lang="si">
            {achievement.titleSi}
          </p>
        </button>
        <button
          type="button"
          onClick={onDismiss}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#5A647B] hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-slate-800"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
