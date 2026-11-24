import { ALL_QUIZ_QUESTIONS } from '../data/studyBank';
import type { QuizQuestion } from '../types';

export const QUESTIONS_PER_PAPER = 45;
export const TOTAL_QUESTIONS = ALL_QUIZ_QUESTIONS.length; // 555
export const TOTAL_PAPERS = Math.ceil(TOTAL_QUESTIONS / QUESTIONS_PER_PAPER); // 13

export interface IndexedQuestion extends QuizQuestion {
  globalNumber: number; // 1..555
  paperNumber: number; // 1..13
  paperId: string; // cbt-paper-01..cbt-paper-13
  indexInPaper: number; // 0..44 (0..14 for Paper 13)
}

export interface PaperSetMeta {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  startNumber: number;
  endNumber: number;
  questions: IndexedQuestion[];
}

const PAPER_TOPICS: Record<number, string> = {
  1: 'Core Bilingual CBT & Infection Control',
  2: 'Hygiene, Safety & Basic Care Principles',
  3: 'Communication & Care Foundations',
  4: 'Caregiving Basics & Dignity',
  5: 'Body Mechanics & Hygiene Practice',
  6: 'Daily Living Support & Positioning',
  7: 'Care Assistance & Communication',
  8: 'Empathy, Records & Team Care',
  9: 'Human Body, Aging & Vital Signs',
  10: 'Circulatory, Respiratory & Dementia Care',
  11: 'Health Observation & Cognitive Care',
  12: 'Mobility, Transfer & Dressing Support',
  13: 'Final Review & Infection Routes',
};

export const INDEXED_QUESTIONS: IndexedQuestion[] = ALL_QUIZ_QUESTIONS.map((q, idx) => {
  const paperNumber = Math.floor(idx / QUESTIONS_PER_PAPER) + 1;
  return {
    ...q,
    globalNumber: idx + 1,
    paperNumber,
    paperId: `cbt-paper-${String(paperNumber).padStart(2, '0')}`,
    indexInPaper: idx % QUESTIONS_PER_PAPER,
  };
});

export const QUESTION_BY_ID: Record<string, IndexedQuestion> = Object.fromEntries(
  INDEXED_QUESTIONS.map((q) => [q.id, q])
);

export const PAPER_SETS: PaperSetMeta[] = Array.from({ length: TOTAL_PAPERS }, (_, idx) => {
  const number = idx + 1;
  const start = idx * QUESTIONS_PER_PAPER;
  const questions = INDEXED_QUESTIONS.slice(start, start + QUESTIONS_PER_PAPER);
  return {
    id: `cbt-paper-${String(number).padStart(2, '0')}`,
    number,
    title: `Paper ${String(number).padStart(2, '0')}`,
    subtitle: PAPER_TOPICS[number] ?? `SSW Practice Set ${number}`,
    startNumber: start + 1,
    endNumber: start + questions.length,
    questions,
  };
});

export function getPaperById(paperId: string): PaperSetMeta {
  return PAPER_SETS.find((p) => p.id === paperId) ?? PAPER_SETS[0];
}

export function getQuestionByGlobalNumber(globalNumber: number): IndexedQuestion | null {
  const clamped = Math.floor(globalNumber);
  if (clamped < 1 || clamped > INDEXED_QUESTIONS.length) return null;
  return INDEXED_QUESTIONS[clamped - 1];
}
