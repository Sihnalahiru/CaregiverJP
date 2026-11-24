import fs from 'node:fs/promises';
import path from 'node:path';
import { PDFDocument } from 'pdf-lib';

const root = process.cwd();
const sourceDir = path.join(root, 'data', 'papers');
const publicDir = path.join(root, 'public');
const targetDir = path.join(publicDir, 'papers');
const manifestPath = path.join(publicDir, 'papers-manifest.json');

const catalog = {
  'Nursing Care Skills Evaluation Test (English + Sinhala).pdf': {
    id: 'main-paper',
    title: 'Nursing Care Skills Evaluation Test — English + Sinhala',
    category: 'MCQ Exam',
    lessonCode: 'Main Paper',
    language: 'English · සිංහල',
    description: '45 source questions from the uploaded bilingual nursing care evaluation paper.',
    quizModuleId: 'main-paper',
    order: 0,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 2.pdf': {
    id: 'lesson-02-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 2',
    category: 'MCQ Exam', lessonCode: 'Lesson 02', language: 'English · සිංහල',
    description: '45 source questions imported from Lesson 2.', quizModuleId: 'lesson-02', order: 1,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 3.pdf': {
    id: 'lesson-03-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 3',
    category: 'MCQ Exam', lessonCode: 'Lesson 03', language: 'English · සිංහල',
    description: '32 source questions imported from Lesson 3.', quizModuleId: 'lesson-03', order: 2,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 4.pdf': {
    id: 'lesson-04-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 4',
    category: 'MCQ Exam', lessonCode: 'Lesson 04', language: 'English · සිංහල',
    description: '84 source questions imported from Lesson 4, including its bonus check.', quizModuleId: 'lesson-04', order: 3,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 5.pdf': {
    id: 'lesson-05-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 5',
    category: 'MCQ Exam', lessonCode: 'Lesson 05', language: 'English · සිංහල',
    description: '83 source questions imported from Lesson 5.', quizModuleId: 'lesson-05', order: 4,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 6.pdf': {
    id: 'lesson-06-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 6',
    category: 'MCQ Exam', lessonCode: 'Lesson 06', language: 'English · සිංහල',
    description: '75 source questions imported from Lesson 6.', quizModuleId: 'lesson-06', order: 5,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 7.pdf': {
    id: 'lesson-07-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 7',
    category: 'MCQ Exam', lessonCode: 'Lesson 07', language: 'English · සිංහල',
    description: '103 source questions imported from Lesson 7.', quizModuleId: 'lesson-07', order: 6,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 8.pdf': {
    id: 'lesson-08-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 8',
    category: 'MCQ Exam', lessonCode: 'Lesson 08', language: 'English · සිංහල',
    description: '68 source questions imported from Lesson 8, including source-truncated items.', quizModuleId: 'lesson-08', order: 7,
  },
  'Nursing Care Skills Evaluation Test [English] – Lesson 9.pdf': {
    id: 'lesson-09-paper', title: 'Nursing Care Skills Evaluation Test — Lesson 9',
    category: 'MCQ Exam', lessonCode: 'Lesson 09', language: 'English · සිංහල',
    description: '20 source questions imported from Lesson 9.', quizModuleId: 'lesson-09', order: 8,
  },
};

await fs.access(sourceDir);
await fs.mkdir(targetDir, { recursive: true });
const names = (await fs.readdir(sourceDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.pdf'))
  .map((entry) => entry.name);

if (names.length !== 9) {
  throw new Error(`Expected exactly 9 source PDFs in data/papers; found ${names.length}. Refusing to publish an incomplete paper library.`);
}

const papers = [];
for (const filename of names) {
  const meta = catalog[filename];
  if (!meta) throw new Error(`PDF is not mapped in the paper catalog: ${filename}`);
  const sourcePath = path.join(sourceDir, filename);
  const buffer = await fs.readFile(sourcePath);
  const pdf = await PDFDocument.load(buffer, { ignoreEncryption: true });
  const targetPath = path.join(targetDir, filename);
  await fs.copyFile(sourcePath, targetPath);
  papers.push({
    id: meta.id,
    filename,
    title: meta.title,
    category: meta.category,
    lessonCode: meta.lessonCode,
    language: meta.language,
    sizeBytes: buffer.byteLength,
    pageCount: pdf.getPageCount(),
    description: meta.description,
    pdfUrl: `/api/papers/${encodeURIComponent(meta.id)}/pdf`,
    downloadUrl: `/api/papers/${encodeURIComponent(meta.id)}/pdf?download=1`,
    quizModuleId: meta.quizModuleId,
    order: meta.order,
  });
}
papers.sort((a, b) => a.order - b.order);
await fs.writeFile(manifestPath, JSON.stringify(papers.map(({ order, ...paper }) => paper), null, 2) + '\n');
console.log(`Prepared ${papers.length} PDFs (${papers.reduce((sum, paper) => sum + paper.pageCount, 0)} pages) for Cloudflare Workers assets.`);
