import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Columns2,
  Eye,
  Flag,
  Grid,
  ImageOff,
  RotateCcw,
  Rows2,
  Volume2,
  VolumeX,
  X,
  XCircle,
} from 'lucide-react';
import { QUESTION_IMAGES } from '../data/questionImages';
import { parseOptionBilingual, parseQuestionBilingual } from '../utils/bilingual';
import type { IndexedQuestion } from '../utils/papers';
import { soundEngine } from '../utils/sound';
import type { AnswerRecord, BilingualLayout, PracticeMode } from '../utils/storage';

export interface PracticeSessionConfig {
  id: string;
  title: string;
  questions: IndexedQuestion[];
  initialIndex: number;
  initialMode: PracticeMode;
  paperId?: string;
}

interface QuizPracticeProps {
  session: PracticeSessionConfig;
  persistedAnswers: Record<string, AnswerRecord>;
  bookmarks: string[];
  bilingualLayout: BilingualLayout;
  soundEnabled: boolean;
  autoAdvance: boolean;
  onToggleSound: () => void;
  onToggleBilingualLayout: () => void;
  onRecordAnswer: (
    questionId: string,
    selectedIndex: number,
    isCorrect: boolean,
    paperId?: string,
    indexInPaper?: number
  ) => void;
  onRecordPaperCompletion: (paperId: string, scorePercent: number, zeroSkip: boolean) => void;
  onSetPaperLastIndex: (paperId: string, lastIndex: number) => void;
  onToggleBookmark: (questionId: string) => void;
  onExit: () => void;
}

const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60)
    .toString()
    .padStart(2, '0')}`;

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E'];

interface ImageGalleryProps {
  questionId: string;
  onZoom: (src: string, alt: string) => void;
}

const QuestionImageStrip: React.FC<ImageGalleryProps> = ({ questionId, onZoom }) => {
  const imageSet = QUESTION_IMAGES[questionId];
  const [failedMap, setFailedMap] = useState<Record<string, boolean>>({});

  if (!imageSet || imageSet.files.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex gap-2.5 overflow-x-auto pb-1">
        {imageSet.files.map((file) => {
          const src = `./assets/images/${file}`;
          const failed = Boolean(failedMap[file]);
          if (failed) {
            return (
              <div
                key={file}
                className="flex h-36 min-w-[150px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#E6EAF2] bg-[#F3F5F9] px-3 text-center text-xs text-[#5A647B] dark:border-[#23304A] dark:bg-[#192338] dark:text-[#94A3B8]"
              >
                <ImageOff className="h-5 w-5 opacity-60" />
                <span className="max-w-[130px] leading-4">{imageSet.alt}</span>
              </div>
            );
          }

          return (
            <button
              key={file}
              type="button"
              onClick={() => {
                soundEngine.playTap();
                onZoom(src, imageSet.alt);
              }}
              className="shrink-0 overflow-hidden rounded-2xl border border-[#E6EAF2] bg-white p-1.5 transition active:scale-[0.98] dark:border-[#23304A] dark:bg-[#0F1625]"
              aria-label={`Zoom illustration: ${imageSet.alt}`}
            >
              <img
                src={src}
                alt={imageSet.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setFailedMap((prev) => ({ ...prev, [file]: true }))}
                className="h-36 w-auto max-w-[260px] rounded-xl object-contain"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const QuizPractice: React.FC<QuizPracticeProps> = ({
  session,
  persistedAnswers,
  bookmarks,
  bilingualLayout,
  soundEnabled,
  autoAdvance,
  onToggleSound,
  onToggleBilingualLayout,
  onRecordAnswer,
  onRecordPaperCompletion,
  onSetPaperLastIndex,
  onToggleBookmark,
  onExit,
}) => {
  const { questions, paperId } = session;
  const [mode, setMode] = useState<PracticeMode>(session.initialMode);
  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, Math.min(questions.length - 1, session.initialIndex))
  );
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, number>>(() => {
    if (session.initialMode === 'study') {
      const prefilled: Record<string, number> = {};
      for (const q of questions) {
        const saved = persistedAnswers[q.id];
        if (saved !== undefined) prefilled[q.id] = saved.selectedIndex;
      }
      return prefilled;
    }
    return {};
  });
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [remainingSeconds, setRemainingSeconds] = useState(questions.length * 60);
  const [submitted, setSubmitted] = useState(false);
  const [showGridSheet, setShowGridSheet] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [zoomImage, setZoomImage] = useState<{ src: string; alt: string } | null>(null);
  const [feedbackPulse, setFeedbackPulse] = useState<'correct' | 'wrong' | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong'>('all');

  const advanceTimerRef = useRef<number | null>(null);
  const completionRecordedRef = useRef(
    session.initialMode === 'study' && Boolean(paperId) &&
    questions.every((question) => Boolean(persistedAnswers[question.id]))
  );
  const examSubmittedRef = useRef(false);
  const current = questions[currentIndex];

  // Track last position in paper for resume
  useEffect(() => {
    if (paperId) {
      onSetPaperLastIndex(paperId, currentIndex);
    }
  }, [paperId, currentIndex, onSetPaperLastIndex]);

  // Exam timer countdown
  useEffect(() => {
    if (mode !== 'exam' || submitted) return;
    const interval = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [mode, submitted]);

  // Auto-submit when timer hits zero in exam mode
  useEffect(() => {
    if (mode === 'exam' && remainingSeconds === 0 && !submitted) {
      finishExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSeconds, mode, submitted]);

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    };
  }, []);

  const answeredCount = useMemo(
    () => questions.filter((q) => sessionAnswers[q.id] !== undefined).length,
    [questions, sessionAnswers]
  );

  const correctCount = useMemo(
    () => questions.filter((q) => sessionAnswers[q.id] === q.correctIndex).length,
    [questions, sessionAnswers]
  );

  const wrongCount = useMemo(
    () =>
      questions.filter(
        (q) => sessionAnswers[q.id] !== undefined && sessionAnswers[q.id] !== q.correctIndex
      ).length,
    [questions, sessionAnswers]
  );

  const goTo = (index: number) => {
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    setFeedbackPulse(null);
    setCurrentIndex(Math.max(0, Math.min(questions.length - 1, index)));
  };

  const finishExam = () => {
    if (examSubmittedRef.current || submitted) return;
    examSubmittedRef.current = true;
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    setShowSubmitConfirm(false);
    setSubmitted(true);
    soundEngine.playPaperComplete();

    const finalAnswered = questions.filter((q) => sessionAnswers[q.id] !== undefined).length;
    const finalCorrect = questions.filter((q) => sessionAnswers[q.id] === q.correctIndex).length;
    const scorePct = questions.length > 0 ? Math.round((finalCorrect / questions.length) * 100) : 0;

    // Persist any exam answers into global store on submit as well
    for (const q of questions) {
      const sel = sessionAnswers[q.id];
      if (sel !== undefined) {
        onRecordAnswer(q.id, sel, sel === q.correctIndex, q.paperId, q.indexInPaper);
      }
    }

    if (paperId) {
      const zeroSkip = questions.length === 45 && finalAnswered === 45;
      onRecordPaperCompletion(paperId, scorePct, zeroSkip);
    }
  };

  const handleChooseOption = (optionIndex: number) => {
    if (!current || submitted) return;
    const isCorrect = optionIndex === current.correctIndex;

    setSessionAnswers((prev) => ({ ...prev, [current.id]: optionIndex }));

    if (mode === 'study') {
      onRecordAnswer(current.id, optionIndex, isCorrect, current.paperId, current.indexInPaper);
      if (isCorrect) {
        soundEngine.playCorrect();
        setFeedbackPulse('correct');
      } else {
        soundEngine.playWrong();
        setFeedbackPulse('wrong');
      }
      // Check if this completes the entire paper in Study mode
      if (paperId) {
        const nextAnswers = { ...sessionAnswers, [current.id]: optionIndex };
        const nowAllDone = questions.every((q) => nextAnswers[q.id] !== undefined);
        if (nowAllDone && !completionRecordedRef.current) {
          completionRecordedRef.current = true;
          const scorePct = Math.round(
            (questions.filter((q) => nextAnswers[q.id] === q.correctIndex).length /
              questions.length) *
              100
          );
          onRecordPaperCompletion(paperId, scorePct, questions.length === 45);
        }
      }
    } else {
      soundEngine.playTap();
      if (autoAdvance && currentIndex < questions.length - 1) {
        if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = window.setTimeout(() => {
          setCurrentIndex((idx) => Math.min(questions.length - 1, idx + 1));
        }, 550);
      }
    }
  };

  const switchMode = (nextMode: PracticeMode) => {
    if (nextMode === mode || submitted) return;
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    setFeedbackPulse(null);
    setShowSubmitConfirm(false);
    setShowGridSheet(false);
    setMode(nextMode);
    setSessionAnswers(() => {
      if (nextMode !== 'study') return {};
      const saved: Record<string, number> = {};
      for (const question of questions) {
        const answer = persistedAnswers[question.id];
        if (answer) saved[question.id] = answer.selectedIndex;
      }
      return saved;
    });
    setRemainingSeconds(questions.length * 60);
    examSubmittedRef.current = false;
    completionRecordedRef.current = nextMode === 'study' && Boolean(paperId) &&
      questions.every((question) => Boolean(persistedAnswers[question.id]));
  };

  const handleRestartExam = () => {
    soundEngine.playTap();
    examSubmittedRef.current = false;
    completionRecordedRef.current = false;
    setSessionAnswers({});
    setRevealedIds({});
    setRemainingSeconds(questions.length * 60);
    setSubmitted(false);
    setCurrentIndex(0);
    setReviewFilter('all');
  };

  // Exam Results & Clean Question/Answer Review Screen
  if (submitted) {
    const scorePct = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;
    const passed = scorePct >= 60;
    const reviewItems =
      reviewFilter === 'wrong'
        ? questions.filter((q) => sessionAnswers[q.id] !== q.correctIndex)
        : questions;

    return (
      <div className="animate-fade-slide min-h-dvh space-y-5 px-4 pb-10 pt-safe">
        <div className="flex h-14 items-center justify-between">
          <button
            type="button"
            onClick={() => {
              soundEngine.playTap();
              onExit();
            }}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#5A647B] dark:text-[#94A3B8]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
          <span className="text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
            {session.title} · Results
          </span>
          <div className="w-12" />
        </div>

        <section className="rounded-3xl border border-[#E6EAF2] bg-white p-6 text-center dark:border-[#23304A] dark:bg-[#131B2C]">
          <div
            className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
              passed
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
            }`}
          >
            <Flag className="h-7 w-7" />
          </div>
          <p className="mt-4 font-mono-tabular text-4xl font-extrabold text-[#131A2C] dark:text-[#F1F5FB]">
            {scorePct}%
          </p>
          <p className="mt-1 font-mono-tabular text-sm font-medium text-[#5A647B] dark:text-[#94A3B8]">
            {correctCount} / {questions.length} correct · {passed ? 'Passing Score' : 'Keep Practicing'}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-950/40">
              <p className="font-mono-tabular text-lg font-bold text-emerald-700 dark:text-emerald-300">
                {correctCount}
              </p>
              <p className="text-[11px] font-medium text-emerald-700/80 dark:text-emerald-300/80">
                Correct
              </p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-3 dark:bg-rose-950/40">
              <p className="font-mono-tabular text-lg font-bold text-[#C83254] dark:text-[#FB7185]">
                {wrongCount}
              </p>
              <p className="text-[11px] font-medium text-[#C83254]/80 dark:text-[#FB7185]/80">
                Wrong
              </p>
            </div>
            <div className="rounded-2xl bg-[#F1F5F9] p-3 dark:bg-[#1A253B]">
              <p className="font-mono-tabular text-lg font-bold text-[#131A2C] dark:text-[#F1F5FB]">
                {questions.length - answeredCount}
              </p>
              <p className="text-[11px] font-medium text-[#5A647B] dark:text-[#94A3B8]">Skipped</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleRestartExam}
              className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl border border-[#DCE3F0] bg-[#F8FAFC] text-sm font-bold text-[#131A2C] dark:border-[#2B3B5C] dark:bg-[#1A253B] dark:text-[#F1F5FB]"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retry</span>
            </button>
            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                onExit();
              }}
              className="flex min-h-[46px] items-center justify-center rounded-xl bg-[#1D4ED8] text-sm font-bold text-white dark:bg-[#5B8BFF] dark:text-[#0B101B]"
            >
              Done
            </button>
          </div>
        </section>

        {/* Answer Key Review */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#131A2C] dark:text-[#F1F5FB]">Answer Review</h2>
            <div className="flex gap-1 rounded-xl bg-[#EAEFF6] p-1 dark:bg-[#131B2C]">
              <button
                type="button"
                onClick={() => setReviewFilter('all')}
                className={`min-h-[32px] rounded-lg px-2.5 text-xs font-semibold ${
                  reviewFilter === 'all'
                    ? 'bg-white text-[#131A2C] dark:bg-[#22304D] dark:text-[#F1F5FB]'
                    : 'text-[#5A647B] dark:text-[#94A3B8]'
                }`}
              >
                All ({questions.length})
              </button>
              <button
                type="button"
                onClick={() => setReviewFilter('wrong')}
                className={`min-h-[32px] rounded-lg px-2.5 text-xs font-semibold ${
                  reviewFilter === 'wrong'
                    ? 'bg-white text-[#131A2C] dark:bg-[#22304D] dark:text-[#F1F5FB]'
                    : 'text-[#5A647B] dark:text-[#94A3B8]'
                }`}
              >
                Missed ({questions.length - correctCount})
              </button>
            </div>
          </div>

          {reviewItems.map((q) => {
            const stem = parseQuestionBilingual(q);
            const selectedIdx = sessionAnswers[q.id];
            const isCorrect = selectedIdx === q.correctIndex;
            const correctOpt = parseOptionBilingual(q.options[q.correctIndex] ?? '');
            const selectedOpt =
              selectedIdx !== undefined ? parseOptionBilingual(q.options[selectedIdx] ?? '') : null;

            return (
              <article
                key={q.id}
                className="rounded-2xl border border-[#E6EAF2] bg-white p-4 dark:border-[#23304A] dark:bg-[#131B2C]"
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="font-mono-tabular text-[#5A647B] dark:text-[#94A3B8]">
                    Q{q.globalNumber}
                  </span>
                  <span
                    className={
                      isCorrect
                        ? 'text-emerald-700 dark:text-emerald-400'
                        : 'text-[#C83254] dark:text-[#FB7185]'
                    }
                  >
                    {isCorrect ? 'Correct' : selectedIdx === undefined ? 'Skipped' : 'Incorrect'}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#131A2C] dark:text-[#F1F5FB]">
                  {stem.en}
                </p>
                {stem.si && (
                  <p className="sinhala-text mt-1 text-[13px] text-[#475569] dark:text-[#CBD5E1]" lang="si">
                    {stem.si}
                  </p>
                )}

                {!isCorrect && selectedOpt && (
                  <div className="mt-2.5 rounded-xl bg-rose-50 px-3 py-2 text-xs text-[#9F1239] dark:bg-rose-950/40 dark:text-rose-200">
                    <span className="font-bold">Your answer ({OPTION_LETTERS[selectedIdx!]}): </span>
                    {selectedOpt.en}
                    {selectedOpt.si ? (
                      <span className="sinhala-text block opacity-90" lang="si">
                        {selectedOpt.si}
                      </span>
                    ) : null}
                  </div>
                )}

                <div className="mt-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">
                  <span className="font-bold">
                    Correct ({OPTION_LETTERS[q.correctIndex]}):{' '}
                  </span>
                  {correctOpt.en}
                  {correctOpt.si ? (
                    <span className="sinhala-text block opacity-90" lang="si">
                      {correctOpt.si}
                    </span>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center p-6 text-center">
        <p className="text-sm font-medium text-[#5A647B] dark:text-[#94A3B8]">
          No questions available in this filter.
        </p>
        <button
          type="button"
          onClick={onExit}
          className="mt-4 min-h-[44px] rounded-xl bg-[#1D4ED8] px-5 text-sm font-semibold text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  const stem = parseQuestionBilingual(current);
  const selectedIndex = sessionAnswers[current.id];
  const isAnswered = selectedIndex !== undefined;
  const isBookmarked = bookmarks.includes(current.id);
  const isRevealed = mode === 'study' && (isAnswered || Boolean(revealedIds[current.id]));
  const progressWidth = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="flex min-h-dvh flex-col">
      {/* Focused Exam Top Bar */}
      <header className="sticky top-0 z-30 border-b border-[#E6EAF2] bg-white/95 pt-safe backdrop-blur-md dark:border-[#1E293E] dark:bg-[#0F1625]/95">
        <div className="flex h-14 items-center justify-between gap-2 px-3">
          <button
            type="button"
            onClick={() => {
              soundEngine.playTap();
              onExit();
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#475569] active:scale-95 hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-[#1B253A]"
            aria-label="Exit session"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="min-w-0 flex-1 text-center">
            <p className="truncate text-xs font-bold text-[#131A2C] dark:text-[#F1F5FB]">
              {session.title}
            </p>
            <p className="font-mono-tabular text-[11px] font-medium text-[#5A647B] dark:text-[#94A3B8]">
              {currentIndex + 1} / {questions.length} · #{current.globalNumber}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-0.5">
            {mode === 'exam' && (
              <span
                className={`mr-1 inline-flex items-center gap-1 rounded-lg px-2 py-1 font-mono-tabular text-xs font-bold ${
                  remainingSeconds <= 300
                    ? 'bg-rose-50 text-[#C83254] dark:bg-rose-950/60 dark:text-[#FB7185]'
                    : 'bg-[#F1F5F9] text-[#131A2C] dark:bg-[#1B253A] dark:text-[#F1F5FB]'
                }`}
              >
                <Clock3 className="h-3.5 w-3.5" />
                {formatTime(remainingSeconds)}
              </span>
            )}

            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                onToggleBilingualLayout();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[#475569] hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-[#1B253A]"
              aria-label="Switch English and Sinhala layout"
              title={bilingualLayout === 'stacked' ? 'Switch to Side-by-side' : 'Switch to Stacked'}
            >
              {bilingualLayout === 'stacked' ? (
                <Columns2 className="h-[18px] w-[18px]" />
              ) : (
                <Rows2 className="h-[18px] w-[18px]" />
              )}
            </button>

            <button
              type="button"
              onClick={onToggleSound}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[#475569] hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-[#1B253A]"
              aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
            >
              {soundEnabled ? (
                <Volume2 className="h-[18px] w-[18px] text-[#1D4ED8] dark:text-[#7FA4FF]" />
              ) : (
                <VolumeX className="h-[18px] w-[18px]" />
              )}
            </button>
          </div>
        </div>

        {/* Hairline Progress Bar */}
        <div className="h-[3px] w-full bg-[#EEF2F7] dark:bg-[#1A253B]">
          <div
            className="h-full bg-[#1D4ED8] transition-all duration-300 dark:bg-[#5B8BFF]"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </header>

      {/* Main Question + Options Canvas (Pure Real-Exam Content Only) */}
      <main className="flex-1 px-4 pb-28 pt-4">
        {/* Compact Mode Switch + Bookmark Row */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="inline-flex rounded-xl bg-[#EAEFF6] p-0.5 dark:bg-[#131B2C]">
            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                switchMode('study');
              }}
              className={`min-h-[34px] rounded-[10px] px-3 text-xs font-semibold transition ${
                mode === 'study'
                  ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                  : 'text-[#5A647B] dark:text-[#94A3B8]'
              }`}
            >
              Study
            </button>
            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                switchMode('exam');
              }}
              className={`min-h-[34px] rounded-[10px] px-3 text-xs font-semibold transition ${
                mode === 'exam'
                  ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                  : 'text-[#5A647B] dark:text-[#94A3B8]'
              }`}
            >
              Exam
            </button>
          </div>

          <div className="flex items-center gap-1">
            {mode === 'study' && !isRevealed && (
              <button
                type="button"
                onClick={() => {
                  soundEngine.playTap();
                  setRevealedIds((prev) => ({ ...prev, [current.id]: true }));
                }}
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-xl border border-[#DCE3F0] bg-white px-2.5 text-xs font-semibold text-[#131A2C] transition active:scale-95 dark:border-[#2B3B5C] dark:bg-[#131B2C] dark:text-[#F1F5FB]"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>Answer</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                onToggleBookmark(current.id);
              }}
              className={`flex h-9 w-9 items-center justify-center rounded-xl border transition active:scale-95 ${
                isBookmarked
                  ? 'border-amber-300 bg-amber-50 text-amber-600 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-400'
                  : 'border-[#DCE3F0] bg-white text-[#64748B] dark:border-[#23304A] dark:bg-[#131B2C] dark:text-[#94A3B8]'
              }`}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Save for later review'}
              aria-pressed={isBookmarked}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Question Card */}
        <section
          key={current.id}
          className="animate-fade-slide rounded-3xl border border-[#E6EAF2] bg-white p-4 shadow-[0_4px_18px_rgba(19,26,44,0.03)] dark:border-[#23304A] dark:bg-[#131B2C] dark:shadow-none"
        >
          <div
            className={
              bilingualLayout === 'side-by-side' && stem.si
                ? 'grid grid-cols-2 gap-3 divide-x divide-[#EEF2F7] dark:divide-[#1E2A42]'
                : 'space-y-2.5'
            }
          >
            <h1 className="text-[16px] font-bold leading-6 text-[#131A2C] dark:text-[#F1F5FB]">
              {stem.en}
            </h1>
            {stem.si && (
              <p
                lang="si"
                className={`sinhala-text text-[15px] font-medium text-[#334155] dark:text-[#D5DFEE] ${
                  bilingualLayout === 'side-by-side' ? 'pl-3 text-[13.5px]' : ''
                }`}
              >
                {stem.si}
              </p>
            )}
          </div>

          {/* Clinical Illustration Images (if mapped to this question) */}
          <QuestionImageStrip
            questionId={current.id}
            onZoom={(src, alt) => setZoomImage({ src, alt })}
          />
        </section>

        {/* Answer Options */}
        <div className="mt-4 space-y-2.5" role="radiogroup" aria-label="Answer choices">
          {current.options.map((rawOpt, idx) => {
            const opt = parseOptionBilingual(rawOpt);
            const isSelected = selectedIndex === idx;
            const isCorrectOption = idx === current.correctIndex;

            let cardStyle =
              'border-[#E6EAF2] bg-white text-[#131A2C] hover:border-[#94B0F8] dark:border-[#23304A] dark:bg-[#131B2C] dark:text-[#F1F5FB] dark:hover:border-[#4969B8]';
            let letterStyle =
              'border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] dark:border-[#334155] dark:bg-[#1B253A] dark:text-[#CBD5E1]';
            let animClass = '';

            if (isRevealed) {
              if (isCorrectOption) {
                cardStyle =
                  'border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-1 ring-emerald-500/40 dark:border-emerald-500/80 dark:bg-emerald-950/50 dark:text-emerald-100';
                letterStyle = 'border-emerald-600 bg-emerald-600 text-white';
                if (isSelected && feedbackPulse === 'correct') {
                  animClass = 'animate-correct-pulse';
                }
              } else if (isSelected && !isCorrectOption) {
                cardStyle =
                  'border-[#C83254] bg-rose-50/90 text-rose-950 ring-1 ring-[#C83254]/40 dark:border-rose-500/80 dark:bg-rose-950/50 dark:text-rose-100';
                letterStyle = 'border-[#C83254] bg-[#C83254] text-white';
                if (feedbackPulse === 'wrong') {
                  animClass = 'animate-shake';
                }
              } else {
                cardStyle =
                  'border-[#E6EAF2] bg-white/70 text-[#64748B] opacity-75 dark:border-[#1D283E] dark:bg-[#111827]/70 dark:text-[#64748B]';
              }
            } else if (isSelected) {
              cardStyle =
                'border-[#1D4ED8] bg-[#EEF3FF] text-[#131A2C] ring-1 ring-[#1D4ED8]/40 dark:border-[#5B8BFF] dark:bg-[#1B2A4D] dark:text-[#F1F5FB]';
              letterStyle =
                'border-[#1D4ED8] bg-[#1D4ED8] text-white dark:border-[#5B8BFF] dark:bg-[#5B8BFF] dark:text-[#0B101B]';
            }

            return (
              <button
                key={idx}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleChooseOption(idx)}
                className={`flex min-h-[58px] w-full items-start gap-3 rounded-2xl border px-3.5 py-3 text-left transition active:scale-[0.99] ${cardStyle} ${animClass}`}
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono-tabular text-xs font-bold ${letterStyle}`}
                >
                  {OPTION_LETTERS[idx] ?? idx + 1}
                </span>

                <div
                  className={`min-w-0 flex-1 ${
                    bilingualLayout === 'side-by-side' && opt.si
                      ? 'grid grid-cols-2 gap-2.5'
                      : 'space-y-1'
                  }`}
                >
                  <span className="block text-[14px] font-semibold leading-5">{opt.en}</span>
                  {opt.si && (
                    <span
                      lang="si"
                      className="sinhala-text block text-[13.5px] font-normal opacity-90"
                    >
                      {opt.si}
                    </span>
                  )}
                </div>

                {isRevealed && isCorrectOption && (
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                )}
                {isRevealed && isSelected && !isCorrectOption && (
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-[#C83254] dark:text-[#FB7185]" />
                )}
              </button>
            );
          })}
        </div>
      </main>

      {/* Thumb-Zone Fixed Bottom Action Bar */}
      <footer className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[430px] border-t border-[#E6EAF2] bg-white/95 px-3 pb-safe pt-2 backdrop-blur-md dark:border-[#1E293E] dark:bg-[#0F1625]/95">
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={() => {
              soundEngine.playTap();
              goTo(currentIndex - 1);
            }}
            className="flex min-h-[46px] min-w-[46px] items-center justify-center rounded-xl border border-[#DCE3F0] bg-[#F8FAFC] text-[#131A2C] transition active:scale-95 disabled:opacity-35 dark:border-[#2B3B5C] dark:bg-[#1A253B] dark:text-[#F1F5FB]"
            aria-label="Previous question"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => {
              soundEngine.playTap();
              setShowGridSheet(true);
            }}
            className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border border-[#DCE3F0] bg-[#F8FAFC] px-3 text-xs font-bold text-[#131A2C] transition active:scale-[0.98] dark:border-[#2B3B5C] dark:bg-[#1A253B] dark:text-[#F1F5FB]"
          >
            <Grid className="h-4 w-4" />
            <span className="font-mono-tabular">
              {answeredCount}/{questions.length}
            </span>
          </button>

          {mode === 'exam' && currentIndex === questions.length - 1 ? (
            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                setShowSubmitConfirm(true);
              }}
              className="flex min-h-[46px] flex-[1.3] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-sm font-bold text-white transition active:scale-[0.98]"
            >
              <Flag className="h-4 w-4" />
              <span>Submit</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={currentIndex === questions.length - 1 && mode === 'study'}
              onClick={() => {
                soundEngine.playTap();
                if (currentIndex < questions.length - 1) {
                  goTo(currentIndex + 1);
                } else {
                  setShowSubmitConfirm(true);
                }
              }}
              className="flex min-h-[46px] flex-[1.3] items-center justify-center gap-1 rounded-xl bg-[#1D4ED8] px-4 text-sm font-bold text-white transition active:scale-[0.98] disabled:opacity-40 dark:bg-[#5B8BFF] dark:text-[#0B101B]"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </footer>

      {/* Question Navigator Bottom Sheet */}
      {showGridSheet && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowGridSheet(false)}
        >
          <div
            className="animate-sheet-up flex max-h-[78dvh] w-full max-w-[430px] flex-col rounded-t-3xl border-t border-[#E6EAF2] bg-white p-5 pb-safe dark:border-[#23304A] dark:bg-[#131B2C]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center justify-between pb-3">
              <div>
                <h2 className="text-base font-bold text-[#131A2C] dark:text-[#F1F5FB]">
                  Questions ({answeredCount}/{questions.length})
                </h2>
                <p className="text-xs text-[#5A647B] dark:text-[#94A3B8]">
                  Tap any number to jump immediately
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowGridSheet(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-[#5A647B] hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-[#1B253A]"
                aria-label="Close navigator"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-5 gap-2 overflow-y-auto py-2">
              {questions.map((q, idx) => {
                const ans = sessionAnswers[q.id];
                const isCur = idx === currentIndex;
                const starred = bookmarks.includes(q.id);
                let cellCls =
                  'border-[#E6EAF2] bg-[#F8FAFC] text-[#475569] dark:border-[#23304A] dark:bg-[#1A2438] dark:text-[#94A3B8]';

                if (isCur) {
                  cellCls =
                    'border-[#1D4ED8] bg-[#EEF3FF] text-[#1D4ED8] ring-2 ring-[#1D4ED8]/30 dark:border-[#5B8BFF] dark:bg-[#1C2E56] dark:text-[#8FB0FF]';
                } else if (ans !== undefined) {
                  if (mode === 'study') {
                    cellCls =
                      ans === q.correctIndex
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300'
                        : 'border-rose-300 bg-rose-50 text-[#C83254] dark:border-rose-800 dark:bg-rose-950/50 dark:text-[#FB7185]';
                  } else {
                    cellCls =
                      'border-[#93B4FA] bg-[#EEF3FF] text-[#1D4ED8] dark:border-[#365394] dark:bg-[#192849] dark:text-[#8FB0FF]';
                  }
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playTap();
                      goTo(idx);
                      setShowGridSheet(false);
                    }}
                    className={`relative flex h-11 items-center justify-center rounded-xl border font-mono-tabular text-xs font-bold transition active:scale-95 ${cellCls}`}
                  >
                    {idx + 1}
                    {starred && (
                      <span
                        className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-amber-500"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {mode === 'exam' && (
              <button
                type="button"
                onClick={() => {
                  setShowGridSheet(false);
                  setShowSubmitConfirm(true);
                }}
                className="mt-4 min-h-[46px] w-full rounded-xl bg-[#131A2C] text-sm font-bold text-white dark:bg-[#5B8BFF] dark:text-[#0B101B]"
              >
                Submit Exam ({answeredCount}/{questions.length})
              </button>
            )}
          </div>
        </div>
      )}

      {/* Submit Exam Confirmation Sheet */}
      {showSubmitConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowSubmitConfirm(false)}
        >
          <div
            className="animate-sheet-up w-full max-w-[400px] rounded-3xl border border-[#E6EAF2] bg-white p-5 shadow-xl dark:border-[#23304A] dark:bg-[#131B2C]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
            <h3 className="text-base font-bold text-[#131A2C] dark:text-[#F1F5FB]">
              Submit {session.title}?
            </h3>
            <p className="mt-1.5 text-xs leading-5 text-[#5A647B] dark:text-[#94A3B8]">
              You have answered {answeredCount} of {questions.length} questions. You will see your full score and correct answers immediately.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="min-h-[44px] rounded-xl bg-[#EEF2F7] text-sm font-semibold text-[#131A2C] dark:bg-[#1E2A42] dark:text-[#F1F5FB]"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={finishExam}
                className="min-h-[44px] rounded-xl bg-[#1D4ED8] text-sm font-semibold text-white dark:bg-[#5B8BFF] dark:text-[#0B101B]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tap-to-Zoom Image Lightbox Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-h-[85dvh] w-full max-w-[410px] overflow-hidden rounded-3xl bg-white p-3 dark:bg-[#131B2C]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomImage(null)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={zoomImage.src}
              alt={zoomImage.alt}
              referrerPolicy="no-referrer"
              className="max-h-[76dvh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
