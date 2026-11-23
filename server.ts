import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';

const PORT = Number(process.env.PORT) || 3000;
const PAPERS_DIR = path.resolve(process.cwd(), 'data', 'originalpapers');

interface CatalogEntry {
  id: string;
  title: string;
  category: 'MCQ Exam' | 'Bilingual Q&A' | 'Caregiver Guide';
  lessonCode: string;
  language: string;
  description: string;
  quizModuleId?: string;
  bilingualSourceId?: string;
}

const KNOWN_CATALOG: Record<string, CatalogEntry> = {
  'SSW Nursing Care paper 01-2-1.pdf': {
    id: 'ssw-nursing-care-01',
    title: 'SSW Nursing Care Skill — Paper 01',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 01',
    language: 'English',
    description:
      'Core SSW Nursing Care concepts: human dignity, QOL, normalization, care process flow, body mechanics, infection control, and disaster preparedness.',
    quizModuleId: 'lesson-01',
  },
  'Mechanism of mind and body paper-1-1-1.pdf': {
    id: 'mechanism-of-mind-and-body',
    title: 'Mechanism of Mind & Body',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 02',
    language: 'English',
    description:
      'Memory, stress, Maslow hierarchy, vital signs, nervous and cardiovascular systems, sleep stages, aging changes, dementia, and disabilities.',
    quizModuleId: 'lesson-02',
  },
  'Communication Skills-1-2-1.pdf': {
    id: 'communication-skills',
    title: 'Communication Skills',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 03',
    language: 'English',
    description:
      'Verbal and non-verbal communication, empathy, acceptance, questioning techniques, visual/hearing impairment, aphasia, dementia, and team reporting.',
    quizModuleId: 'lesson-03',
  },
  'Skills for Providing Daily Assistance.pdf': {
    id: 'skills-daily-assistance',
    title: 'Skills for Providing Daily Assistance',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 04',
    language: 'English',
    description:
      'Mobility, stair and wheelchair assistance, hemiplegia dressing/bathing, meal assistance, swallowing safety, excretion care, and illustrated care scenarios.',
    quizModuleId: 'lesson-04',
  },
  'Exam questions 1.pdf': {
    id: 'exam-questions-1',
    title: 'Exam Questions 01 — Daily Care & Mobility',
    category: 'Bilingual Q&A',
    lessonCode: 'Study Set 01',
    language: 'English · සිංහල',
    description:
      'Bilingual English and Sinhala Q&A covering disuse syndrome, pressure ulcers, wheelchair transfers, swallowing phases, excretion, bathing, and dignity.',
    bilingualSourceId: 'exam-q1',
  },
  'Exam papers 2.pdf': {
    id: 'exam-papers-2',
    title: 'Exam Questions 02 — Ethics, Process & Safety',
    category: 'Bilingual Q&A',
    lessonCode: 'Study Set 02',
    language: 'English · සිංහල',
    description:
      'Bilingual English and Sinhala Q&A covering professional ethics, abuse prevention, care roles, care process, body mechanics, and infection control.',
    bilingualSourceId: 'exam-q2',
  },
  'exam questions 3.pdf': {
    id: 'exam-questions-3',
    title: 'Exam Questions 03 — Communication & Records',
    category: 'Bilingual Q&A',
    lessonCode: 'Study Set 03',
    language: 'English · සිංහල',
    description:
      'Bilingual English and Sinhala Q&A on Keichou, Kyoukan, Juyou, sensory impairment communication, aphasia, dementia, care records, and Soudan.',
    bilingualSourceId: 'exam-q3',
  },
  'cargiver 6 ^%.pdf': {
    id: 'caregiver-06',
    title: 'Caregiver Reference Paper 06',
    category: 'Caregiver Guide',
    lessonCode: 'Archive 06',
    language: 'Bilingual / Reference',
    description:
      'Original caregiver training and assessment reference paper from the HiCare paper archive.',
  },
  'cargiver 8 %.pdf': {
    id: 'caregiver-08',
    title: 'Caregiver Reference Paper 08',
    category: 'Caregiver Guide',
    lessonCode: 'Archive 08',
    language: 'Bilingual / Reference',
    description:
      'Original caregiver training and assessment reference paper from the HiCare paper archive.',
  },
};

interface ResolvedPaper {
  id: string;
  filename: string;
  title: string;
  category: 'MCQ Exam' | 'Bilingual Q&A' | 'Caregiver Guide';
  lessonCode: string;
  language: string;
  sizeBytes: number;
  pageCount: number | null;
  description: string;
  pdfUrl: string;
  downloadUrl: string;
  quizModuleId?: string;
  bilingualSourceId?: string;
  fullPath: string;
}

let cachedPapers: ResolvedPaper[] | null = null;

async function loadPapersCatalog(): Promise<ResolvedPaper[]> {
  if (cachedPapers) return cachedPapers;
  if (!fs.existsSync(PAPERS_DIR)) {
    return [];
  }

  const entries = fs.readdirSync(PAPERS_DIR, { withFileTypes: true });
  const pdfFiles = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.pdf'))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const results: ResolvedPaper[] = [];

  for (let i = 0; i < pdfFiles.length; i++) {
    const filename = pdfFiles[i];
    const fullPath = path.join(PAPERS_DIR, filename);
    const stat = fs.statSync(fullPath);

    let pageCount: number | null = null;
    try {
      const buffer = fs.readFileSync(fullPath);
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
      pageCount = pdfDoc.getPageCount();
    } catch {
      pageCount = null;
    }

    const meta = KNOWN_CATALOG[filename];
    const id =
      meta?.id ??
      filename
        .replace(/\.pdf$/i, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') +
        `-${i}`;

    results.push({
      id,
      filename,
      title: meta?.title ?? filename.replace(/\.pdf$/i, ''),
      category: meta?.category ?? 'Caregiver Guide',
      lessonCode: meta?.lessonCode ?? 'Reference',
      language: meta?.language ?? 'PDF',
      sizeBytes: stat.size,
      pageCount,
      description: meta?.description ?? 'Original PDF study paper from data/originalpapers.',
      pdfUrl: `/api/papers/${encodeURIComponent(id)}/pdf`,
      downloadUrl: `/api/papers/${encodeURIComponent(id)}/pdf?download=1`,
      quizModuleId: meta?.quizModuleId,
      bilingualSourceId: meta?.bilingualSourceId,
      fullPath,
    });
  }

  // Keep consistent pedagogical ordering
  const order = [
    'ssw-nursing-care-01',
    'mechanism-of-mind-and-body',
    'communication-skills',
    'skills-daily-assistance',
    'exam-questions-1',
    'exam-papers-2',
    'exam-questions-3',
    'caregiver-06',
    'caregiver-08',
  ];
  results.sort((a, b) => {
    const ia = order.indexOf(a.id);
    const ib = order.indexOf(b.id);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return a.title.localeCompare(b.title);
  });

  cachedPapers = results;
  return results;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/papers', async (_req, res) => {
    try {
      const papers = await loadPapersCatalog();
      res.json(
        papers.map(({ fullPath: _fp, ...publicPaper }) => publicPaper)
      );
    } catch (error) {
      console.error('Failed to list papers:', error);
      res.status(500).json({ error: 'Unable to load paper catalog' });
    }
  });

  app.get('/api/papers/:id/pdf', async (req, res) => {
    try {
      const papers = await loadPapersCatalog();
      const target = papers.find((p) => p.id === req.params.id);
      if (!target || !fs.existsSync(target.fullPath)) {
        res.status(404).json({ error: 'Paper not found' });
        return;
      }

      const safeDownloadName = target.filename.replace(/[^\w.\- ]+/g, '_');
      const isDownload = req.query.download === '1';

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        `${isDownload ? 'attachment' : 'inline'}; filename="${safeDownloadName}"`
      );
      res.setHeader('Cache-Control', 'public, max-age=3600');
      fs.createReadStream(target.fullPath).pipe(res);
    } catch (error) {
      console.error('Failed to serve PDF:', error);
      res.status(500).json({ error: 'Unable to read PDF file' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`HiCare server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start HiCare server:', err);
  process.exit(1);
});
