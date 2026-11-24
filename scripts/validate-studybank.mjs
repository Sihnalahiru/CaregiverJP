import fs from 'node:fs/promises';
import path from 'node:path';

const file = path.join(process.cwd(), 'src', 'data', 'studyBank.ts');
const source = await fs.readFile(file, 'utf8');
const match = source.match(/export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = (\[[\s\S]*?\n\]);/);
if (!match) throw new Error('Could not parse ALL_QUIZ_QUESTIONS');
const questions = JSON.parse(match[1]);
const sourceRanges = { 'main-paper': 45, 'lesson-02': 45, 'lesson-03': 32, 'lesson-04': 68, 'lesson-05': 78, 'lesson-06': 74, 'lesson-07': 80, 'lesson-08': 68, 'lesson-09': 20 };
const supplementalIds = new Set([
  ...Array.from({length:16},(_,i)=>'lesson-04-q'+String(69+i).padStart(3,'0')),
  ...Array.from({length:5},(_,i)=>'lesson-05-q'+String(79+i).padStart(3,'0')),
  'lesson-06-q060-b',
  ...Array.from({length:23},(_,i)=>'lesson-07-q'+String(81+i).padStart(3,'0'))
]);
const ids = new Set();
const errors = [];
const sourceReview = [];
const actualSourceCounts = Object.create(null);
for (const q of questions) {
  if (!q.id || ids.has(q.id)) errors.push('Missing or duplicate question id: ' + q.id);
  ids.add(q.id);
  if (!q.question?.trim()) errors.push(q.id + ': empty question');
  if (!Array.isArray(q.options) || q.options.length < 2) errors.push(q.id + ': fewer than two options');
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= (q.options?.length || 0)) errors.push(q.id + ': invalid answer index');
  if (!q.explanation?.trim()) errors.push(q.id + ': empty explanation');
  if (/[\\u3040-\\u30ff\\u3400-\\u9fff]/.test(JSON.stringify(q))) errors.push(q.id + ': Japanese characters are not allowed in this English + Sinhala app');
  if (/\[(?:truncated in pdf|missing)(?::[^\]]*)?(?:[^\]]*)\]/i.test(JSON.stringify(q))) sourceReview.push(q.id);
  if (!supplementalIds.has(q.id)) actualSourceCounts[q.moduleId] = (actualSourceCounts[q.moduleId] || 0) + 1;
}
if (questions.length !== 555) errors.push('Expected 555 total app records, found ' + questions.length);
for (const [moduleId, count] of Object.entries(sourceRanges)) if (actualSourceCounts[moduleId] !== count) errors.push(moduleId + ': expected ' + count + ' source-range records, found ' + (actualSourceCounts[moduleId] || 0));
for (const id of supplementalIds) if (!ids.has(id)) errors.push('Expected supplemental audit record missing from bank: ' + id);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Structural validation passed: 555 records; 510 source-range records match the nine supplied PDF ranges; supplemental records are separately identified.');
if (supplementalIds.size) console.warn('UNVERIFIED SUPPLEMENTAL records outside source-verified PDF ranges (' + supplementalIds.size + '): ' + [...supplementalIds].join(', '));
if (sourceReview.length) console.warn('SOURCE CONTENT REVIEW required (' + sourceReview.length + '): ' + [...new Set(sourceReview)].join(', '));
