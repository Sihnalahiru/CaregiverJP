import fs from 'node:fs/promises';
import path from 'node:path';

const file = path.join(process.cwd(), 'src', 'data', 'studyBank.ts');
const source = await fs.readFile(file, 'utf8');
const match = source.match(/export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = (\[[\s\S]*?\n\]);/);
if (!match) throw new Error('Could not parse ALL_QUIZ_QUESTIONS');
const questions = JSON.parse(match[1]);
const expected = { 'main-paper': 45, 'lesson-02': 45, 'lesson-03': 32, 'lesson-04': 84, 'lesson-05': 83, 'lesson-06': 75, 'lesson-07': 103, 'lesson-08': 68, 'lesson-09': 20 };
const counts = Object.create(null);
const ids = new Set();
const errors = [];
const sourceReview = [];
for (const q of questions) {
  counts[q.moduleId] = (counts[q.moduleId] || 0) + 1;
  if (!q.id || ids.has(q.id)) errors.push('Missing or duplicate question id: ' + q.id);
  ids.add(q.id);
  if (!q.question?.trim()) errors.push(q.id + ': empty question');
  if (!Array.isArray(q.options) || q.options.length < 2) errors.push(q.id + ': fewer than two options');
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= (q.options?.length || 0)) errors.push(q.id + ': invalid answer index');
  if (!q.explanation?.trim()) errors.push(q.id + ': empty explanation');
  if (/[\u3040-\u30ff\u3400-\u9fff]/.test(JSON.stringify(q))) errors.push(q.id + ': Japanese characters are not allowed in this English + Sinhala app');
  if (/\[(?:truncated in pdf|missing)(?::[^\]]*)?(?:[^\]]*)\]/i.test(JSON.stringify(q))) sourceReview.push(q.id);
}
if (questions.length !== 555) errors.push('Expected 555 questions, found ' + questions.length);
for (const [moduleId, count] of Object.entries(expected)) if (counts[moduleId] !== count) errors.push(moduleId + ': expected ' + count + ', found ' + (counts[moduleId] || 0));
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Study bank structure passed: 555 questions across 9 modules; IDs, options, answer indexes, explanations and English + Sinhala scope checked.');
if (sourceReview.length) console.warn('Source PDF text still needs manual verification; do not mark these items complete: ' + [...new Set(sourceReview)].join(', '));
