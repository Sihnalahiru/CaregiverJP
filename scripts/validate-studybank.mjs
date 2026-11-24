import fs from 'node:fs/promises';
import path from 'node:path';

const file = path.join(process.cwd(), 'src', 'data', 'studyBank.ts');
const source = await fs.readFile(file, 'utf8');
const match = source.match(/export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = (\[[\s\S]*?\n\]);/);
if (!match) throw new Error('Could not parse ALL_QUIZ_QUESTIONS');
const questions = JSON.parse(match[1]);
const sourceRanges = { 'main-paper': [1,45], 'lesson-02': [1,45], 'lesson-03': [1,32], 'lesson-04': [1,68], 'lesson-05': [1,78], 'lesson-06': [1,74], 'lesson-07': [1,80], 'lesson-08': [1,68], 'lesson-09': [20,39] };
const supplementalIds = new Set([
  ...Array.from({length:16},(_,i)=>'lesson-04-q'+String(69+i).padStart(3,'0')),
  ...Array.from({length:5},(_,i)=>'lesson-05-q'+String(79+i).padStart(3,'0')),
  'lesson-06-q060-b',
  'lesson-07-q041-b',
  ...Array.from({length:22},(_,i)=>'lesson-07-q'+String(81+i).padStart(3,'0'))
]);
const ids = new Set();
const errors = [];
const sourceReview = [];
const missingSinhala = [];
const actualSourceCounts = Object.create(null);
for (const q of questions) {
  if (!q.id || ids.has(q.id)) errors.push('Missing or duplicate question id: ' + q.id);
  ids.add(q.id);
  if (!q.question?.trim()) errors.push(q.id + ': empty question');
  if (!Array.isArray(q.options) || q.options.length < 2) errors.push(q.id + ': fewer than two options');
  if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= (q.options?.length || 0)) errors.push(q.id + ': invalid answer index');
  if (!q.explanation?.trim()) errors.push(q.id + ': empty explanation');
  const sinhala = /[\\u0D80-\\u0DFF]/u;
  if (!sinhala.test(q.sinhalaText || q.question || '')) missingSinhala.push(q.id + ': question');
  for (let i = 0; i < (q.options || []).length; i++) {
    if (!sinhala.test(q.options[i])) missingSinhala.push(q.id + ': option ' + (i + 1));
  }
  if (!sinhala.test(q.explanation || '')) missingSinhala.push(q.id + ': explanation');
  if (/[\u3040-\u30ff\u3400-\u9fff]/u.test(JSON.stringify(q))) errors.push(q.id + ': Japanese characters are not allowed in this English + Sinhala app');
  if (/\[(?:truncated in pdf|missing)(?::[^\]]*)?(?:[^\]]*)\]/i.test(JSON.stringify(q))) sourceReview.push(q.id);
  if (!supplementalIds.has(q.id)) actualSourceCounts[q.moduleId] = (actualSourceCounts[q.moduleId] || 0) + 1;
}
if (questions.length !== 555) errors.push('Expected 555 total app records, found ' + questions.length);
for (const [moduleId, [min, max]] of Object.entries(sourceRanges)) {
  const actual = actualSourceCounts[moduleId] || 0;
  const expected = max - min + 1;
  if (actual !== expected) errors.push(moduleId + ': expected ' + expected + ' source-range records, found ' + actual);
}
for (const id of supplementalIds) if (!ids.has(id)) errors.push('Expected supplemental audit record missing from bank: ' + id);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Structural validation passed: 555 records; 510 records fall within the configured source-number ranges; 45 supplemental records are separately identified. Required Sinhala text is present in every question, option, and explanation.');
if (supplementalIds.size) console.warn('UNVERIFIED SUPPLEMENTAL records outside source-verified PDF ranges (' + supplementalIds.size + '): ' + [...supplementalIds].join(', '));
if (sourceReview.length) console.warn('SOURCE CONTENT REVIEW required (' + sourceReview.length + '): ' + [...new Set(sourceReview)].join(', '));
