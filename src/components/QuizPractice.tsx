import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock3, Flag, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_QUIZ_QUESTIONS } from '../data/studyBank';
import { QUESTION_IMAGES } from '../data/questionImages';

interface QuizPracticeProps { paperSetId: string; onExit: () => void; }
const QUESTIONS_PER_PAPER = 45;
const AUTO_NEXT_MS = 800;
const getQuestions = (paperSetId: string) => {
  const paperNumber = Number(paperSetId.match(/(\d+)$/)?.[1] ?? 1);
  const start = (paperNumber - 1) * QUESTIONS_PER_PAPER;
  return ALL_QUIZ_QUESTIONS.slice(start, start + QUESTIONS_PER_PAPER);
};
const formatTime = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

export const QuizPractice: React.FC<QuizPracticeProps> = ({ paperSetId, onExit }) => {
  const questions = useMemo(() => getQuestions(paperSetId), [paperSetId]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [remaining, setRemaining] = useState(questions.length * 60);
  const [submitted, setSubmitted] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = questions[currentIndex];

  useEffect(() => {
    if (submitted) return;
    const timer = window.setInterval(() => setRemaining((value) => {
      if (value <= 1) { window.clearInterval(timer); setSubmitted(true); return 0; }
      return value - 1;
    }), 1000);
    return () => window.clearInterval(timer);
  }, [submitted]);

  useEffect(() => () => { if (advanceTimer.current) window.clearTimeout(advanceTimer.current); }, []);

  // Source-mcq items stay visible as unscored notices because the source scan is incomplete.
  const gradedQuestions = questions.filter((question) => question.kind !== 'self-check' && question.correctIndex >= 0);
  const answeredCount = questions.filter((question) => answers[question.id] !== undefined).length;
  const correctCount = gradedQuestions.filter((question) => answers[question.id] === question.correctIndex).length;
  const wrongCount = gradedQuestions.filter((question) => answers[question.id] !== undefined && answers[question.id] !== question.correctIndex).length;
  const unansweredCount = gradedQuestions.filter((question) => answers[question.id] === undefined).length;
  const unscoredCount = questions.length - gradedQuestions.length;
  const paperNumber = Number(paperSetId.match(/(\d+)$/)?.[1] ?? 1);

  const goTo = (index: number) => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    setCurrentIndex(Math.max(0, Math.min(questions.length - 1, index)));
  };
  const choose = (optionIndex: number) => {
    if (!current || submitted) return;
    setAnswers((previous) => ({ ...previous, [current.id]: optionIndex }));
    if (autoAdvance && currentIndex < questions.length - 1) {
      advanceTimer.current = window.setTimeout(() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1)), AUTO_NEXT_MS);
    }
  };
  const submit = () => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    setSubmitted(true);
  };

  if (submitted) return <div className="cbt-exam mx-auto max-w-3xl px-4 py-8 pb-28 sm:px-6 sm:pb-8"><section className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><Flag className="h-7 w-7" /></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">CBT exam completed</p><h1 className="mt-2 text-2xl font-bold text-slate-950">Paper {paperNumber} · Results</h1><p className="mt-5 text-5xl font-bold tabular-nums text-slate-950">{correctCount}<span className="text-2xl text-slate-400"> / {gradedQuestions.length}</span></p><p className="mt-2 text-sm text-slate-500">Correct answers · {gradedQuestions.length ? Math.round(correctCount / gradedQuestions.length * 100) : 0}%</p><div className="mt-7 grid grid-cols-2 gap-2 text-left sm:grid-cols-4"><div className="rounded-xl bg-emerald-50 p-3"><strong className="block text-xl text-emerald-800">{correctCount}</strong><span className="text-xs text-emerald-700">Correct</span></div><div className="rounded-xl bg-red-50 p-3"><strong className="block text-xl text-red-800">{wrongCount}</strong><span className="text-xs text-red-700">Incorrect</span></div><div className="rounded-xl bg-slate-100 p-3"><strong className="block text-xl text-slate-800">{unansweredCount}</strong><span className="text-xs text-slate-600">Unanswered</span></div><div className="rounded-xl bg-amber-50 p-3"><strong className="block text-xl text-amber-800">{unscoredCount}</strong><span className="text-xs text-amber-700">Pending source verification</span></div></div><p className="mt-4 text-xs text-slate-500">All questions remain in the paper. Items without a verified source answer key are shown and can be answered, but are not included in the score until verified.</p><button onClick={onExit} className="mt-8 min-h-12 w-full rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700">Back to Paper Library</button></section></div>;

  return <div className="cbt-exam mx-auto w-full max-w-6xl px-3 py-4 pb-28 sm:px-6 sm:py-7 sm:pb-7">
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><button onClick={onExit} className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"><ArrowLeft className="h-4 w-4" />Exit exam</button><div className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-lg font-bold tabular-nums ${remaining <= 300 ? 'bg-red-50 text-red-700' : 'bg-slate-900 text-white'}`}><Clock3 className="h-5 w-5" />{formatTime(remaining)}<span className="text-xs font-sans font-medium opacity-75">remaining</span></div></div>
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4"><div><p className="text-xs font-semibold uppercase tracking-wider text-sky-700">CBT Practice Paper {paperNumber}</p><h1 className="mt-1 text-lg font-bold text-slate-950">Question {currentIndex + 1} of {questions.length}</h1></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{answeredCount}/{questions.length} answered</span></div>
        {current && <><h2 className="whitespace-pre-line py-6 text-lg font-semibold leading-relaxed text-slate-950 sm:text-xl">{current.question}</h2>{current.kind === "source-mcq" && current.correctIndex < 0 && <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4"><p className="text-sm font-bold text-amber-900">Source verification pending · This question stays in the paper</p><p className="mt-1 text-sm leading-6 text-amber-900">The source PDF does not provide a verifiable answer key or complete scan for this item. The question and all available choices remain visible. It is excluded from scoring until the source can be verified.</p><p className="mt-1 text-sm leading-6 text-amber-900">මුල් PDF එකෙන් නිවැරදි පිළිතුර හෝ සම්පූර්ණ විස්තර තහවුරු කළ නොහැක. ප්‍රශ්නය සහ ඇති විකල්ප App එකේ පවතී. තහවුරු කරන තුරු ලකුණු ගණනයට පමණක් ඇතුළත් නොවේ.</p></div>}{QUESTION_IMAGES[current.id] && <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-3"><p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500">Source image</p><div className="flex flex-wrap items-start gap-3">{QUESTION_IMAGES[current.id].files.map((file) => <a key={file} href={`${"./"}assets/images/${file}`} target="_blank" rel="noreferrer" className="block max-w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-2"><img src={`${"./"}assets/images/${file}`} alt={QUESTION_IMAGES[current.id].alt} loading="lazy" className="max-h-64 max-w-full object-contain" /><span className="mt-1 block text-center text-[10px] text-slate-500">Open image</span></a>)}</div></div>}<div className="space-y-3">{current.options.map((option, index) => { const selected = answers[current.id] === index; const locked = answers[current.id] !== undefined; return <button key={index} type="button" onClick={() => choose(index)} className={`flex min-h-14 w-full items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${selected ? 'border-sky-600 bg-sky-50 text-sky-950 ring-1 ring-sky-600' : locked ? 'border-slate-100 bg-slate-50 text-slate-400' : 'border-slate-200 bg-white text-slate-800 hover:border-sky-400 hover:bg-sky-50/40'}`}><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">{String.fromCharCode(65 + index)}</span><span className="whitespace-pre-line text-sm font-medium leading-6 sm:text-base">{option}</span>{selected && <CheckCircle2 className="ml-auto mt-1 h-5 w-5 shrink-0 text-sky-700" />}</button>; })}</div></>}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4"><button onClick={() => goTo(currentIndex - 1)} disabled={currentIndex === 0} className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-slate-100 px-4 text-sm font-semibold text-slate-700 disabled:opacity-40"><ChevronLeft className="h-4 w-4" />Previous</button><button onClick={() => goTo(currentIndex + 1)} disabled={currentIndex === questions.length - 1} className="inline-flex min-h-11 items-center gap-1 rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white disabled:opacity-40">Next<ChevronRight className="h-4 w-4" /></button></div>
      </section>
      <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"><div className="flex items-center justify-between"><h2 className="font-bold text-slate-900">Exam progress</h2><span className="text-xs tabular-nums text-slate-500">{answeredCount}/{questions.length}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-sky-600 transition-all" style={{ width: `${answeredCount / questions.length * 100}%` }} /></div><div className="mt-5 flex items-center justify-between gap-2"><span className="text-xs font-semibold text-slate-600">Question navigator</span><label className="flex items-center gap-1 text-[11px] text-slate-500"><input type="checkbox" checked={autoAdvance} onChange={(event) => setAutoAdvance(event.target.checked)} />Auto next</label></div><div className="mt-3 grid grid-cols-5 gap-2">{questions.map((question, index) => <button key={question.id} onClick={() => goTo(index)} className={`h-10 rounded-lg border text-xs font-bold tabular-nums ${index === currentIndex ? 'border-sky-600 bg-sky-50 text-sky-800 ring-1 ring-sky-600' : answers[question.id] !== undefined ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>{index + 1}</button>)}</div><div className="mt-4 flex flex-wrap gap-3 text-[11px] text-slate-500"><span>● Answered</span><span>○ Pending</span></div><button onClick={() => { if (window.confirm(`Submit Paper ${paperNumber}? Unanswered questions will remain blank.`)) submit(); }} className="mt-6 min-h-12 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800">Submit Exam</button><p className="mt-2 text-center text-[11px] text-slate-500">Exam submits automatically when the timer reaches 00:00.</p></aside>
    </div>
  </div>;
};
