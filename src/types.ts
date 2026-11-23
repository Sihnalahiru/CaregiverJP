export type PaperCategory = 'MCQ Exam' | 'Bilingual Q&A' | 'Caregiver Guide';

export interface PaperMeta {
  id: string;
  filename: string;
  title: string;
  category: PaperCategory;
  lessonCode: string;
  language: string;
  sizeBytes: number;
  pageCount: number | null;
  description: string;
  pdfUrl: string;
  downloadUrl: string;
  quizModuleId?: string;
  bilingualSourceId?: string;
}

export interface QuizQuestion {
  id: string;
  moduleId: string;
  number: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizModule {
  id: string;
  title: string;
  lessonLabel: string;
  sourceFilename: string;
  description: string;
  questionCount: number;
}

export interface BilingualCard {
  id: string;
  sourceId: string;
  sourceTitle: string;
  topic: string;
  questionEn: string;
  answerEn: string;
  sinhalaText: string;
}
