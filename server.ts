import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';

const PORT = Number(process.env.PORT) || 3000;
const PAPERS_DIR = path.resolve(process.cwd(), 'data', 'papers');

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
  'Nursing Care Skills Evaluation Test (English + Sinhala).pdf': {
    id: 'main-paper',
    title: 'Nursing Care Skills Evaluation Test — English + Sinhala',
    category: 'MCQ Exam',
    lessonCode: 'Main Paper',
    language: 'English · සිංහල',
    description: '45 source questions from the uploaded bilingual nursing care evaluation paper.',
    quizModuleId: 'main-paper',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 2.pdf': {
    id: 'lesson-02-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 2',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 02',
    language: 'English · සිංහල',
    description: '45 source questions imported from Lesson 2.',
    quizModuleId: 'lesson-02',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 3.pdf': {
    id: 'lesson-03-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 3',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 03',
    language: 'English · සිංහල',
    description: '32 source questions imported from Lesson 3.',
    quizModuleId: 'lesson-03',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 4.pdf': {
    id: 'lesson-04-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 4',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 04',
    language: 'English · සිංහල',
    description: '84 source questions imported from Lesson 4, including its bonus check.',
    quizModuleId: 'lesson-04',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 5.pdf': {
    id: 'lesson-05-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 5',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 05',
    language: 'English · සිංහල',
    description: '83 source questions imported from Lesson 5.',
    quizModuleId: 'lesson-05',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 6.pdf': {
    id: 'lesson-06-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 6',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 06',
    language: 'English · සිංහල',
    description: '75 source questions imported from Lesson 6.',
    quizModuleId: 'lesson-06',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 7.pdf': {
    id: 'lesson-07-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 7',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 07',
    language: 'English · සිංහල',
    description: '103 source questions imported from Lesson 7.',
    quizModuleId: 'lesson-07',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 8.pdf': {
    id: 'lesson-08-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 8',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 08',
    language: 'English · සිංහල',
    description: '68 source questions imported from Lesson 8, including source-truncated items.',
    quizModuleId: 'lesson-08',
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 9.pdf': {
    id: 'lesson-09-paper',
    title: 'Nursing Care Skills Evaluation Test — Lesson 9',
    category: 'MCQ Exam',
    lessonCode: 'Lesson 09',
    language: 'English · සිංහල',
    description: '20 source questions imported from Lesson 9.',
    quizModuleId: 'lesson-09',
  },
}

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
      description: meta?.description ?? 'Original PDF study paper from data/papers.',
      pdfUrl: `/api/papers/${encodeURIComponent(id)}/pdf`,
      downloadUrl: `/api/papers/${encodeURIComponent(id)}/pdf?download=1`,
      quizModuleId: meta?.quizModuleId,
      bilingualSourceId: meta?.bilingualSourceId,
      fullPath,
    });
  }

  // Keep consistent pedagogical ordering
  const order = [
    'main-paper',
    'lesson-02',
    'lesson-03',
    'lesson-04',
    'lesson-05',
    'lesson-06',
    'lesson-07',
    'lesson-08',
    'lesson-09',
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
