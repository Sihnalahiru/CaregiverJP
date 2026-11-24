import React, { useMemo, useState } from 'react';
import { BookOpen, Clock3, Search } from 'lucide-react';
import { PAPER_SETS, TOTAL_PAPERS, TOTAL_QUESTIONS } from '../utils/papers';
import { soundEngine } from '../utils/sound';
import type { AnswerRecord, PaperProgressRecord, PracticeMode } from '../utils/storage';

interface PaperLibraryProps {
  answers: Record<string, AnswerRecord>;
  paperProgress: Record<string, PaperProgressRecord>;
  onStartPaper: (paperId: string, mode: PracticeMode, startIndex?: number) => void;
}

type FilterStatus = 'all' | 'in-progress' | 'completed' | 'unstarted';

export const PaperLibrary: React.FC<PaperLibraryProps> = ({
  answers,
  paperProgress,
  onStartPaper,
}) => {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');

  const enrichedPapers = useMemo(() => {
    return PAPER_SETS.map((paper) => {
      const answered = paper.questions.filter((q) => Boolean(answers[q.id])).length;
      const correct = paper.questions.filter((q) => answers[q.id]?.isCorrect).length;
      const pct = Math.round((answered / paper.questions.length) * 100);
      const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : null;
      const status: Exclude<FilterStatus, 'all'> =
        answered === 0 ? 'unstarted' : answered >= paper.questions.length ? 'completed' : 'in-progress';
      const firstUnansweredIdx = paper.questions.findIndex((q) => !answers[q.id]);
      const bestScore = paperProgress[paper.id]?.bestScore ?? accuracy ?? 0;

      return {
        paper,
        answered,
        correct,
        pct,
        accuracy,
        bestScore,
        status,
        resumeIdx: firstUnansweredIdx >= 0 ? firstUnansweredIdx : 0,
      };
    });
  }, [answers, paperProgress]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return enrichedPapers.filter(({ paper, status }) => {
      if (statusFilter !== 'all' && status !== statusFilter) return false;
      if (!q) return true;
      return (
        paper.title.toLowerCase().includes(q) ||
        `paper ${paper.number}`.includes(q) ||
        String(paper.number) === q ||
        paper.subtitle.toLowerCase().includes(q)
      );
    });
  }, [enrichedPapers, query, statusFilter]);

  const filters: Array<{ id: FilterStatus; label: string }> = [
    { id: 'all', label: `All (${TOTAL_PAPERS})` },
    { id: 'in-progress', label: 'Active' },
    { id: 'completed', label: 'Done' },
    { id: 'unstarted', label: 'New' },
  ];

  return (
    <div className="animate-fade-slide space-y-4 px-4 pb-24 pt-4">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-[#131A2C] dark:text-[#F1F5FB]">
          Exam Paper Sets
        </h1>
        <p className="mt-0.5 text-xs text-[#5A647B] dark:text-[#94A3B8]">
          {TOTAL_PAPERS} practice papers · {TOTAL_QUESTIONS} bilingual questions · Study or Timed CBT Exam
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search paper number (1–13)..."
          aria-label="Search paper sets"
          className="min-h-[44px] w-full rounded-2xl border border-[#E6EAF2] bg-white pl-10 pr-4 text-sm font-medium text-[#131A2C] placeholder-[#8A94A8] outline-none transition focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 dark:border-[#23304A] dark:bg-[#131B2C] dark:text-[#F1F5FB] dark:placeholder-[#64748B]"
        />
      </div>

      {/* Interactive Filter Segmented Control */}
      <div className="grid grid-cols-4 gap-1 rounded-2xl bg-[#EAEFF6] p-1 dark:bg-[#131B2C]">
        {filters.map((f) => {
          const active = statusFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                soundEngine.playTap();
                setStatusFilter(f.id);
              }}
              className={`min-h-[38px] whitespace-nowrap rounded-xl px-2 text-xs font-semibold transition ${
                active
                  ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                  : 'text-[#5A647B] hover:text-[#131A2C] dark:text-[#94A3B8] dark:hover:text-[#F1F5FB]'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Paper Cards List */}
      <div className="space-y-3">
        {filtered.map(({ paper, answered, pct, accuracy, resumeIdx }) => (
          <article
            key={paper.id}
            className="rounded-2xl border border-[#E6EAF2] bg-white p-4 dark:border-[#23304A] dark:bg-[#131B2C]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="text-base font-bold text-[#131A2C] dark:text-[#F1F5FB]">
                  {paper.title}
                </h2>
                <p className="mt-0.5 text-xs text-[#5A647B] dark:text-[#94A3B8]">
                  Questions {paper.startNumber}–{paper.endNumber} · {paper.questions.length} MCQs
                  {accuracy !== null ? ` · ${accuracy}% accuracy` : ''}
                </p>
              </div>
              <span className="shrink-0 font-mono-tabular text-xs font-bold text-[#1D4ED8] dark:text-[#7FA4FF]">
                {answered}/{paper.questions.length}
              </span>
            </div>

            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#EEF2F7] dark:bg-[#1E2A42]">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  pct === 100
                    ? 'bg-emerald-600 dark:bg-emerald-400'
                    : 'bg-[#1D4ED8] dark:bg-[#5B8BFF]'
                }`}
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="mt-3.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playTap();
                  onStartPaper(paper.id, 'study', resumeIdx);
                }}
                className="flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-[#1D4ED8] px-3 text-xs font-bold text-white transition active:scale-[0.98] hover:bg-[#1E40AF] dark:bg-[#5B8BFF] dark:text-[#0B101B]"
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>{answered > 0 && answered < paper.questions.length ? 'Resume Study' : 'Study Mode'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playTap();
                  onStartPaper(paper.id, 'exam', 0);
                }}
                className="flex min-h-[44px] items-center justify-center gap-1.5 whitespace-nowrap rounded-xl border border-[#DCE3F0] bg-[#F8FAFC] px-3 text-xs font-bold text-[#131A2C] transition active:scale-[0.98] hover:bg-[#EEF2F7] dark:border-[#2B3B5C] dark:bg-[#1A253B] dark:text-[#F1F5FB]"
              >
                <Clock3 className="h-3.5 w-3.5" />
                <span>Timed Exam</span>
              </button>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-[#E6EAF2] bg-white p-8 text-center text-sm text-[#5A647B] dark:border-[#23304A] dark:bg-[#131B2C] dark:text-[#94A3B8]">
            No paper sets match your filter.
          </div>
        )}
      </div>
    </div>
  );
};
