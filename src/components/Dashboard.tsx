import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Bookmark,
  ChevronRight,
  Flame,
  Hash,
  Layers,
  Play,
} from 'lucide-react';
import { PAPER_SETS, TOTAL_PAPERS, TOTAL_QUESTIONS } from '../utils/papers';
import { soundEngine } from '../utils/sound';
import type { AnswerRecord, PaperProgressRecord, PracticeMode } from '../utils/storage';
import type { StudyMetrics } from '../utils/achievements';

interface DashboardProps {
  answers: Record<string, AnswerRecord>;
  bookmarks: string[];
  paperProgress: Record<string, PaperProgressRecord>;
  metrics: StudyMetrics;
  effectiveStreak: number;
  defaultMode: PracticeMode;
  onStartPaper: (paperId: string, mode?: PracticeMode, startIndex?: number) => void;
  onStartWeakReview: () => void;
  onStartBookmarksReview: () => void;
  onStartUnansweredReview: () => void;
  onJumpToQuestion: (globalNumber: number) => void;
  onOpenPapers: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  answers,
  bookmarks,
  paperProgress,
  metrics,
  effectiveStreak,
  defaultMode,
  onStartPaper,
  onStartWeakReview,
  onStartBookmarksReview,
  onStartUnansweredReview,
  onJumpToQuestion,
  onOpenPapers,
}) => {
  const [jumpValue, setJumpValue] = useState('');
  const [jumpError, setJumpError] = useState('');

  const completionPercent = Math.round((metrics.answeredCount / TOTAL_QUESTIONS) * 100);

  const weakCount = useMemo(
    () => Object.values(answers).filter((a) => !a.isCorrect).length,
    [answers]
  );

  const unansweredCount = TOTAL_QUESTIONS - metrics.answeredCount;

  // Determine the best paper to resume next
  const resumeTarget = useMemo(() => {
    for (const paper of PAPER_SETS) {
      const answeredInPaper = paper.questions.filter((q) => Boolean(answers[q.id])).length;
      if (answeredInPaper < paper.questions.length) {
        const firstUnansweredIdx = paper.questions.findIndex((q) => !answers[q.id]);
        return {
          paper,
          answeredInPaper,
          startIndex:
            firstUnansweredIdx >= 0
              ? firstUnansweredIdx
              : paperProgress[paper.id]?.lastIndex ?? 0,
        };
      }
    }
    return { paper: PAPER_SETS[0], answeredInPaper: PAPER_SETS[0].questions.length, startIndex: 0 };
  }, [answers, paperProgress]);

  // SVG progress ring math
  const ringRadius = 42;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference - (completionPercent / 100) * ringCircumference;

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = Number(jumpValue.trim());
    if (!Number.isInteger(num) || num < 1 || num > TOTAL_QUESTIONS) {
      soundEngine.playWrong();
      setJumpError(`Enter a number between 1 and ${TOTAL_QUESTIONS}`);
      return;
    }
    soundEngine.playTap();
    setJumpError('');
    setJumpValue('');
    onJumpToQuestion(num);
  };

  return (
    <div className="animate-fade-slide space-y-5 px-4 pb-24 pt-4">
      {/* Primary Hero Progress Overview Card */}
      <section className="rounded-3xl border border-[#E6EAF2] bg-white p-5 shadow-[0_6px_24px_rgba(19,26,44,0.04)] dark:border-[#23304A] dark:bg-[#131B2C] dark:shadow-none">
        <div className="flex items-center gap-4">
          {/* Circular Completion Ring */}
          <div className="relative flex h-[104px] w-[104px] shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r={ringRadius}
                fill="none"
                strokeWidth="8"
                className="stroke-[#EEF2F7] dark:stroke-[#1E2A42]"
              />
              <circle
                cx="50"
                cy="50"
                r={ringRadius}
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={ringCircumference}
                strokeDashoffset={ringOffset}
                className="stroke-[#1D4ED8] transition-all duration-500 ease-out dark:stroke-[#5B8BFF]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono-tabular text-xl font-bold leading-none text-[#131A2C] dark:text-[#F1F5FB]">
                {completionPercent}%
              </span>
              <span className="mt-1 text-[10px] font-medium text-[#5A647B] dark:text-[#94A3B8]">
                Done
              </span>
            </div>
          </div>

          {/* Core Headline Metrics */}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-[#5A647B] dark:text-[#94A3B8]">
              SSW Nursing Care · EN + සිංහල
            </p>
            <h1 className="mt-1 font-mono-tabular text-2xl font-extrabold tracking-tight text-[#131A2C] dark:text-[#F1F5FB]">
              {metrics.answeredCount}
              <span className="text-base font-semibold text-[#94A3B8] dark:text-[#64748B]">
                {' '}
                / {TOTAL_QUESTIONS}
              </span>
            </h1>
            <p className="mt-1 text-xs text-[#5A647B] dark:text-[#94A3B8]">
              {metrics.completedPapersCount} of {TOTAL_PAPERS} papers completed
            </p>

            {/* Clean inline metadata strip */}
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-[#131A2C] dark:text-[#E2E8F0]">
              <span className="font-mono-tabular">
                {metrics.accuracyPercent}% accuracy
              </span>
              <span className="text-[#CBD5E1] dark:text-[#334155]" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1 font-mono-tabular text-amber-700 dark:text-amber-300">
                <Flame className="h-3.5 w-3.5" />
                {effectiveStreak}d streak
              </span>
            </div>
          </div>
        </div>

        {/* Single Dominant Primary CTA */}
        <button
          type="button"
          onClick={() => {
            soundEngine.playTap();
            onStartPaper(resumeTarget.paper.id, defaultMode, resumeTarget.startIndex);
          }}
          className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-4 py-3 text-sm font-bold text-white transition active:scale-[0.98] hover:bg-[#1E40AF] dark:bg-[#5B8BFF] dark:text-[#0B101B] dark:hover:bg-[#739CFF]"
        >
          <Play className="h-4 w-4 fill-current" />
          <span>
            {metrics.answeredCount === 0
              ? 'Start Paper 01'
              : `Continue ${resumeTarget.paper.title} · Q${resumeTarget.paper.startNumber + resumeTarget.startIndex}`}
          </span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </section>

      {/* Quick Jump (1–555) & Smart Review Filters */}
      <section className="space-y-3">
        <form onSubmit={handleJumpSubmit} className="flex items-center gap-2">
          <div className="relative flex-1">
            <Hash className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
            <input
              type="number"
              inputMode="numeric"
              min={1}
              max={TOTAL_QUESTIONS}
              value={jumpValue}
              onChange={(e) => {
                setJumpValue(e.target.value);
                if (jumpError) setJumpError('');
              }}
              placeholder={`Jump to question (1–${TOTAL_QUESTIONS})`}
              aria-label="Jump to question number"
              className="min-h-[44px] w-full rounded-2xl border border-[#E6EAF2] bg-white pl-9 pr-3 text-sm font-medium text-[#131A2C] placeholder-[#8A94A8] outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 dark:border-[#23304A] dark:bg-[#131B2C] dark:text-[#F1F5FB] dark:placeholder-[#64748B] dark:focus:border-[#5B8BFF]"
            />
          </div>
          <button
            type="submit"
            className="min-h-[44px] shrink-0 whitespace-nowrap rounded-2xl bg-[#131A2C] px-4 text-sm font-semibold text-white transition active:scale-95 hover:bg-[#1E293B] dark:bg-[#22304D] dark:text-[#F1F5FB] dark:hover:bg-[#2B3D61]"
          >
            Go
          </button>
        </form>
        {jumpError && (
          <p className="px-1 text-xs font-medium text-[#C83254] dark:text-[#FB7185]">{jumpError}</p>
        )}

        {/* Smart Review Quick Triggers */}
        <div className="grid grid-cols-3 gap-2.5">
          <button
            type="button"
            disabled={weakCount === 0}
            onClick={() => {
              soundEngine.playTap();
              onStartWeakReview();
            }}
            className="flex min-h-[76px] flex-col items-start justify-between rounded-2xl border border-[#E6EAF2] bg-white p-3 text-left transition active:scale-[0.98] disabled:opacity-50 dark:border-[#23304A] dark:bg-[#131B2C]"
          >
            <AlertCircle className="h-4 w-4 text-[#C83254] dark:text-[#FB7185]" />
            <div>
              <p className="font-mono-tabular text-base font-bold leading-none text-[#131A2C] dark:text-[#F1F5FB]">
                {weakCount}
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#5A647B] dark:text-[#94A3B8]">
                Weak
              </p>
            </div>
          </button>

          <button
            type="button"
            disabled={bookmarks.length === 0}
            onClick={() => {
              soundEngine.playTap();
              onStartBookmarksReview();
            }}
            className="flex min-h-[76px] flex-col items-start justify-between rounded-2xl border border-[#E6EAF2] bg-white p-3 text-left transition active:scale-[0.98] disabled:opacity-50 dark:border-[#23304A] dark:bg-[#131B2C]"
          >
            <Bookmark className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="font-mono-tabular text-base font-bold leading-none text-[#131A2C] dark:text-[#F1F5FB]">
                {bookmarks.length}
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#5A647B] dark:text-[#94A3B8]">
                Saved
              </p>
            </div>
          </button>

          <button
            type="button"
            disabled={unansweredCount === 0}
            onClick={() => {
              soundEngine.playTap();
              onStartUnansweredReview();
            }}
            className="flex min-h-[76px] flex-col items-start justify-between rounded-2xl border border-[#E6EAF2] bg-white p-3 text-left transition active:scale-[0.98] disabled:opacity-50 dark:border-[#23304A] dark:bg-[#131B2C]"
          >
            <Layers className="h-4 w-4 text-[#1D4ED8] dark:text-[#7FA4FF]" />
            <div>
              <p className="font-mono-tabular text-base font-bold leading-none text-[#131A2C] dark:text-[#F1F5FB]">
                {unansweredCount}
              </p>
              <p className="mt-1 text-[11px] font-medium text-[#5A647B] dark:text-[#94A3B8]">
                Remaining
              </p>
            </div>
          </button>
        </div>
      </section>

      {/* Per-Paper Breakdown (All 13 Paper Sets) */}
      <section>
        <div className="mb-3 flex items-baseline justify-between px-0.5">
          <div>
            <h2 className="text-base font-bold tracking-tight text-[#131A2C] dark:text-[#F1F5FB]">
              All 13 Paper Sets
            </h2>
            <p className="text-xs text-[#5A647B] dark:text-[#94A3B8]">
              Paper 01 – Paper 13 · {TOTAL_QUESTIONS} questions
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              soundEngine.playTap();
              onOpenPapers();
            }}
            className="min-h-[36px] text-xs font-semibold text-[#1D4ED8] hover:underline dark:text-[#7FA4FF]"
          >
            Exam modes
          </button>
        </div>

        <div className="divide-y divide-[#EEF2F7] overflow-hidden rounded-3xl border border-[#E6EAF2] bg-white dark:divide-[#1E2A42] dark:border-[#23304A] dark:bg-[#131B2C]">
          {PAPER_SETS.map((paper) => {
            const answered = paper.questions.filter((q) => Boolean(answers[q.id])).length;
            const correct = paper.questions.filter((q) => answers[q.id]?.isCorrect).length;
            const pct = Math.round((answered / paper.questions.length) * 100);
            const acc = answered > 0 ? Math.round((correct / answered) * 100) : null;
            const nextIdx = paper.questions.findIndex((q) => !answers[q.id]);
            const resumeIdx = nextIdx >= 0 ? nextIdx : 0;

            return (
              <button
                key={paper.id}
                type="button"
                onClick={() => {
                  soundEngine.playTap();
                  onStartPaper(paper.id, defaultMode, resumeIdx);
                }}
                className="flex min-h-[68px] w-full items-center gap-3 px-4 py-3 text-left transition active:bg-slate-50 hover:bg-slate-50/70 dark:active:bg-[#1A243A] dark:hover:bg-[#182236]"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono-tabular text-sm font-bold ${
                    pct === 100
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : answered > 0
                        ? 'bg-[#EEF3FF] text-[#1D4ED8] dark:bg-[#1E2E52] dark:text-[#7FA4FF]'
                        : 'bg-[#F3F5F9] text-[#5A647B] dark:bg-[#1B253A] dark:text-[#94A3B8]'
                  }`}
                >
                  {String(paper.number).padStart(2, '0')}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="truncate text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
                      {paper.title}
                    </span>
                    <span className="shrink-0 font-mono-tabular text-xs font-semibold text-[#5A647B] dark:text-[#94A3B8]">
                      {answered}/{paper.questions.length}
                      {acc !== null ? ` · ${acc}%` : ''}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EEF2F7] dark:bg-[#1E2A42]">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        pct === 100
                          ? 'bg-emerald-600 dark:bg-emerald-400'
                          : 'bg-[#1D4ED8] dark:bg-[#5B8BFF]'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 shrink-0 text-[#94A3B8]" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
