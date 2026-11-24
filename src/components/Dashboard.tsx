import React, { useMemo } from 'react';
import { BookOpen, ClipboardCheck, FileText, ArrowRight } from 'lucide-react';
import { ALL_QUIZ_QUESTIONS } from '../data/studyBank';
import type { PaperMeta } from '../types';

interface DashboardProps {
  papers: PaperMeta[];
  loading: boolean;
  onStartQuiz: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ papers, loading, onStartQuiz }) => {
  const totalPages = useMemo(() => papers.reduce((sum, paper) => sum + (paper.pageCount ?? 0), 0), [papers]);
  const gradedCount = useMemo(() => ALL_QUIZ_QUESTIONS.filter((question) => question.kind !== 'source-mcq' && question.kind !== 'self-check').length, []);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-10 pt-6 sm:px-6 sm:pt-10">
      <section className="overflow-hidden rounded-3xl bg-slate-950 px-5 py-7 text-white shadow-xl sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Personal SSW study app</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">CaregiverJP</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
          Your caregiver exam preparation space. Continue practising your saved question bank whenever you are ready.
        </p>
        <button
          type="button"
          onClick={onStartQuiz}
          className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-950/30 transition hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
        >
          <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
          Open Quiz Section
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4" aria-label="Study library summary">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700"><ClipboardCheck className="h-5 w-5" /></div>
          <p className="mt-4 text-2xl font-bold tabular-nums text-slate-950">{ALL_QUIZ_QUESTIONS.length}</p>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Imported questions</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700"><FileText className="h-5 w-5" /></div>
          <p className="mt-4 text-2xl font-bold tabular-nums text-slate-950">{loading ? '—' : papers.length}</p>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">Study papers (PDF)</p>
        </article>
        <article className="col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-1 sm:p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><BookOpen className="h-5 w-5" /></div>
          <p className="mt-4 text-2xl font-bold tabular-nums text-slate-950">{loading ? '—' : totalPages}</p>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">PDF pages</p>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-8 sm:p-6">
        <h2 className="text-base font-bold text-slate-900">Study bank</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The question bank currently contains {ALL_QUIZ_QUESTIONS.length} imported questions. The paper library is separate: additional PDF papers can be added without changing this question count. New questions are included when their source content is imported and verified.
        </p>
        <p className="mt-3 text-xs text-slate-500">{gradedCount} questions have a reliable answer key for automatic grading; source items without a reliable key remain ungraded.</p>
      </section>
    </div>
  );
};
