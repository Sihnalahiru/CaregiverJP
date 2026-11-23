import React, { useMemo, useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { QUIZ_MODULES, ALL_QUIZ_QUESTIONS } from '../data/studyBank';

interface QuizPracticeProps {
  selectedModuleId: string;
  onSelectModule: (moduleId: string) => void;
}

export const QuizPractice: React.FC<QuizPracticeProps> = ({
  selectedModuleId,
  onSelectModule,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showMissedOnly, setShowMissedOnly] = useState(false);

  const activeModule =
    QUIZ_MODULES.find((m) => m.id === selectedModuleId) ?? QUIZ_MODULES[0];

  const moduleQuestions = useMemo(() => {
    const all = selectedModuleId === 'all-mixed' ? ALL_QUIZ_QUESTIONS : ALL_QUIZ_QUESTIONS.filter((q) => q.moduleId === activeModule.id);
    if (!showMissedOnly) return all;
    return all.filter(
      (q) => answers[q.id] !== undefined && (q.kind === 'self-check' ? answers[q.id] === 1 : q.kind === 'source-mcq' ? false : answers[q.id] !== q.correctIndex)
    );
  }, [activeModule.id, showMissedOnly, answers]);

  const allModuleQuestions = useMemo(
    () => selectedModuleId === 'all-mixed' ? ALL_QUIZ_QUESTIONS : ALL_QUIZ_QUESTIONS.filter((q) => q.moduleId === activeModule.id),
    [activeModule.id, selectedModuleId]
  );

  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    for (const q of allModuleQuestions) {
      if (q.kind === 'source-mcq') continue;
      if (q.kind === 'self-check' && answers[q.id] === -1) continue;
      if (answers[q.id] !== undefined) {
        answered++;
        if (q.kind === 'self-check' ? answers[q.id] === 0 : answers[q.id] === q.correctIndex) correct++;
      }
    }
    return {
      total: allModuleQuestions.length,
      answered,
      correct,
      missed: answered - correct,
    };
  }, [allModuleQuestions, answers]);

  const safeIndex = Math.min(
    currentIndex,
    Math.max(0, moduleQuestions.length - 1)
  );
  const currentQuestion = moduleQuestions[safeIndex] ?? null;

  const handleModuleSwitch = (id: string) => {
    onSelectModule(id);
    setCurrentIndex(0);
    setShowMissedOnly(false);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleResetModule = () => {
    setAnswers((prev) => {
      const next = { ...prev };
      for (const q of allModuleQuestions) {
        delete next[q.id];
      }
      return next;
    });
    setCurrentIndex(0);
    setShowMissedOnly(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      {/* Module Switcher Bar */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs text-slate-500 font-mono-tabular">
            {activeModule.lessonLabel} · {activeModule.sourceFilename}
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            {activeModule.title}
          </h1>
        </div>

        <div
          role="tablist"
          aria-label="Select exam lesson module"
          className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto"
        >
          {QUIZ_MODULES.map((mod) => {
            const active = mod.id === activeModule.id;
            return (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleModuleSwitch(mod.id)}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {mod.lessonLabel}
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Question Stage */}
        <section className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
          {currentQuestion ? (
            <>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <span className="text-xs font-semibold text-[#0284C7] font-mono-tabular">
                  Question {safeIndex + 1} of {moduleQuestions.length}
                </span>
                <span className="text-xs text-slate-500 font-mono-tabular">
                  {stats.answered}/{stats.total} answered · {stats.correct} correct
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
                {currentQuestion.question}
              </h2>

              {currentQuestion.kind === 'self-check' ? (
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Recall the answer before revealing</p>
                  {answers[currentQuestion.id] === undefined ? (
                    <button type="button" onClick={() => handleSelectOption(currentQuestion.id, -1)} className="w-full px-4 py-3 text-left border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-sm font-semibold">Reveal source answer</button>
                  ) : (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                      <p className="text-sm text-slate-800">{currentQuestion.explanation.split('\\n\\n')[0]}</p>
                      <p className="text-sm text-slate-600">{currentQuestion.sinhalaText}</p>
                      <div className="flex gap-2 pt-2">
                        <button type="button" onClick={() => handleSelectOption(currentQuestion.id, 0)} className="px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-100 text-emerald-800">I knew it</button>
                        <button type="button" onClick={() => handleSelectOption(currentQuestion.id, 1)} className="px-3 py-2 text-xs font-semibold rounded-lg bg-amber-100 text-amber-800">Need review</button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => {
                  const chosen = answers[currentQuestion.id];
                  const hasAnswered = chosen !== undefined;
                  const isChosen = chosen === idx;
                  const isCorrect = currentQuestion.kind !== 'source-mcq' && idx === currentQuestion.correctIndex;

                  let buttonStyle =
                    'bg-white border-slate-200 text-slate-800 hover:border-slate-400 hover:bg-slate-50';
                  if (hasAnswered) {
                    if (isCorrect) {
                      buttonStyle =
                        'bg-emerald-50 border-emerald-600 text-emerald-950';
                    } else if (isChosen && !isCorrect) {
                      buttonStyle = 'bg-red-50 border-red-600 text-red-950';
                    } else {
                      buttonStyle =
                        'bg-slate-50 border-slate-200 text-slate-500';
                    }
                  }

                  const optionLetter = String.fromCharCode(65 + idx);

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, idx)}
                      className={`w-full text-left px-4 py-3.5 border rounded-lg transition-colors flex items-center justify-between gap-4 cursor-pointer ${buttonStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xs font-semibold font-mono-tabular mt-0.5 shrink-0">
                          {optionLetter}.
                        </span>
                        <span className="text-sm sm:text-base font-medium leading-snug">
                          {opt}
                        </span>
                      </div>

                      {hasAnswered && currentQuestion.kind !== 'source-mcq' && isCorrect && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 shrink-0">
                          <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                          Correct
                        </span>
                      )}
                      {hasAnswered && currentQuestion.kind !== 'source-mcq' && isChosen && !isCorrect && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 shrink-0">
                          <XCircle className="w-4 h-4" aria-hidden="true" />
                          Incorrect
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              )}

              {currentQuestion.kind === 'source-mcq' && answers[currentQuestion.id] !== undefined && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-900">
                  The original PDF does not include an answer key for this question. Your selection is saved for practice but is not graded.
                </div>
              )}

              {answers[currentQuestion.id] !== undefined && currentQuestion.kind !== 'self-check' && (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                  <div className="text-xs font-semibold text-slate-700">
                    Study Explanation
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  disabled={safeIndex === 0}
                  onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none rounded-lg transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  Previous
                </button>

                <button
                  type="button"
                  disabled={safeIndex >= moduleQuestions.length - 1}
                  onClick={() =>
                    setCurrentIndex((i) =>
                      Math.min(moduleQuestions.length - 1, i + 1)
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] disabled:opacity-40 disabled:pointer-events-none rounded-lg transition-colors cursor-pointer"
                >
                  Next Question
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </>
          ) : (
            <div className="py-12 text-center space-y-3">
              <p className="text-base font-semibold text-slate-900">
                No missed questions to review
              </p>
              <p className="text-sm text-slate-600">
                Switch back to all questions to continue practicing this module.
              </p>
              <button
                type="button"
                onClick={() => setShowMissedOnly(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0284C7] rounded-lg cursor-pointer"
              >
                Show All Questions
              </button>
            </div>
          )}
        </section>

        {/* Right Navigator & Session Progress */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-slate-900">
              Session Progress
            </h2>
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-lg font-bold text-slate-900 font-mono-tabular">
                  {stats.answered}/{stats.total}
                </div>
                <div className="text-xs text-slate-500">Answered</div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg">
                <div className="text-lg font-bold text-emerald-700 font-mono-tabular">
                  {stats.correct}
                </div>
                <div className="text-xs text-emerald-700">Correct</div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="text-lg font-bold text-red-700 font-mono-tabular">
                  {stats.missed}
                </div>
                <div className="text-xs text-red-700">Missed</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">
                Question Grid
              </span>
              <button
                type="button"
                onClick={() => {
                  setShowMissedOnly((v) => !v);
                  setCurrentIndex(0);
                }}
                className={`text-xs font-medium cursor-pointer ${
                  showMissedOnly
                    ? 'text-[#0284C7] underline'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {showMissedOnly ? 'Show All' : 'Filter Missed'}
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {moduleQuestions.map((q, idx) => {
                const chosen = answers[q.id];
                const isCurrent = idx === safeIndex;
                let cellStyle =
                  'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
                if (chosen !== undefined && !(q.kind === 'self-check' && chosen === -1) && q.kind !== 'source-mcq') {
                  cellStyle =
                    (q.kind === 'self-check' ? chosen === 0 : chosen === q.correctIndex)
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                      : 'bg-red-50 border-red-500 text-red-800';
                }
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-10 border rounded-lg text-xs font-semibold font-mono-tabular transition-colors cursor-pointer ${cellStyle} ${
                      isCurrent ? 'ring-2 ring-[#0284C7] ring-offset-1' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handleResetModule}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Reset Module Progress
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
