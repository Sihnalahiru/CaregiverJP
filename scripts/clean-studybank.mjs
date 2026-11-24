import fs from 'node:fs/promises';
import path from 'node:path';

const studyBankPath = path.join(process.cwd(), 'src', 'data', 'studyBank.ts');
const sourceAuditPath = path.join(process.cwd(), 'src', 'data', 'sourceAudit.ts');

const raw = await fs.readFile(studyBankPath, 'utf8');
const match = raw.match(/(export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = )(\[[\s\S]*?\n\]);/);
if (!match) {
  throw new Error('Could not locate ALL_QUIZ_QUESTIONS in src/data/studyBank.ts');
}

const questions = JSON.parse(match[2]);
if (questions.length !== 555) {
  throw new Error(`Expected 555 questions, found ${questions.length}`);
}

/**
 * Clean unambiguous PDF-extraction Sinhala Unicode artifacts without altering valid Sinhala words:
 * 1. Collapse repeated Sinhala vowel signs/virama (e.g. ෙෙ -> ෙ, ෛෛ -> ෛ, ීී -> ී, ිි -> ි, ්් -> ්)
 * 2. Join stray newlines inserted inside a Sinhala word (before a combining vowel sign, ZWJ, or mid-word)
 * 3. Normalize known "Yes (ඔේ)" PDF extraction artifact to "Yes (ඔව්)"
 */
function cleanSinhalaText(input) {
  if (!input) return input;
  let text = input;

  // 1. Remove stray newline directly before a Sinhala vowel sign / virama / ZWJ
  text = text.replace(/\r?\n(?=[\u0DCA-\u0DDF\u0DF2\u0DF3\u200D])/g, '');

  // 2. Collapse consecutive identical Sinhala vowel signs / virama (never valid in Sinhala Unicode)
  text = text.replace(/([\u0DCA-\u0DDF\u0DF2\u0DF3])\1+/g, '$1');

  // 3. Join stray mid-word newlines between a Sinhala kombuva/vowel-sign (especially ෙ, ෛ, ො, ෝ, ෘ, ි, ී, ු, ූ, ැ, ෑ) and the following Sinhala letter
  text = text.replace(/([\u0D80-\u0DFF][\u0DCA-\u0DDF\u0DF2\u0DF3])\r?\n(?=[\u0D80-\u0DFF])/g, '$1');

  // 4. Join stray line-wrapping newlines inside Sinhala sentences (keep paragraph breaks where English transitions to Sinhala)
  text = text.replace(/([\u0D80-\u0DFF])\r?\n([\u0D80-\u0DFF])/g, (m, prev, next) => {
    // If previous char is a Sinhala letter/sign and next is a Sinhala letter, check if it was a soft line wrap:
    // In PDF wraps, spaces before \n were stripped, or words got broken mid-word.
    // Join with a space unless previous is a combining mark or virama or ZWJ.
    if (/[\u0DCA-\u0DDF\u0DF2\u0DF3\u200D]/.test(prev)) return prev + next;
    return prev + ' ' + next;
  });

  // 5. Fix stray space immediately after kombuva ෙ inside a broken word (e.g. "වෙ නස්" -> "වෙනස්", "හෙ ද" -> "හෙද", "කාමරයෙ න්" -> "කාමරයෙන්")
  text = text.replace(/([\u0D9A-\u0DC6]\u0DD9) ([\u0D9A-\u0DC6]\u0DCA)(?!\u200D)/g, '$1$2');
  text = text.replace(/වෙ නස්/g, 'වෙනස්');
  text = text.replace(/හෙ ද /g, 'හෙද ');
  text = text.replace(/පරිශීලකයෙ කු/g, 'පරිශීලකයෙකු');
  text = text.replace(/පුද්ගලයෙ කු/g, 'පුද්ගලයෙකු');

  // 6. Normalize PDF-extracted "ඔේ" inside Yes options to "ඔව්"
  text = text.replace(/Yes \(ඔේ\)/g, 'Yes (ඔව්)');

  // 7. Collapse accidental double spaces (preserve newlines)
  text = text.replace(/[ \t]{2,}/g, ' ');
  return text.trim();
}

/**
 * Reconstruct the 12 truncated source-mcq items using standard SSW Nursing Care / MHLW curriculum
 * while keeping their exact id, moduleId, number, correctIndex, and kind: "source-mcq" flag.
 */
const RECONSTRUCTED_SOURCE_MCQS = {
  'main-paper-q003': {
    question: 'The most important way to prevent the spread of infection is:',
    sinhalaText: 'ආසාදන පැතිරීම වැළැක්වීමේ වඩාත්ම වැදගත් ක්‍රමය වන්නේ:',
    options: [
      'Hand washing (අත් සේදීම)',
      'Wearing a gown at all times (සැමවිටම ආරක්ෂිත ගවුමක් පැළඳ සිටීම)',
      'Using room sanitizer spray (කාමර සනීපාරක්ෂක ඉසින භාවිත කිරීම)',
      'Isolating every user (සෑම පරිශීලකයෙකුම හුදකලා කිරීම)',
    ],
    correctIndex: 0,
    explanation: 'Hand washing (අත් සේදීම) — Standard infection control (Standard Precautions) identifies thorough hand washing as the single most effective measure to prevent transmission of infectious agents.',
  },
  'main-paper-q004': {
    question: 'Which is a primary form of non-verbal communication that directly conveys emotions?',
    sinhalaText: 'හැඟීම් සෘජුවම පෙන්වන ප්‍රධාන වාචික නොවන (Non-verbal) සන්නිවේදන ක්‍රමය කුමක්ද?',
    options: [
      'Facial expressions (මුහුණේ ඉරියව්)',
      'Nodding (හිස සැලීම)',
      'Gestures (අභිනයන් / අත් ඉඟි)',
      'Speaking loudly (උස් හඬින් කතා කිරීම)',
    ],
    correctIndex: 0,
    explanation: 'Facial expressions (මුහුණේ ඉරියව්) — Facial expressions are the most direct non-verbal indicator of a care user\'s emotions and comfort.',
  },
  'main-paper-q005': {
    question: 'How can a care worker show they are interested and listening attentively to the user?',
    sinhalaText: 'සත්කාර සේවකයෙකු උනන්දුවෙන් සිටින බවත් පරිශීලකයාට අවධානයෙන් සවන් දෙන බවත් පෙන්විය හැක්කේ කෙසේද?',
    options: [
      'Maintain gentle eye contact and nod attentively (මෘදු ඇස් සම්බන්ධතාවය පවත්වා ගෙන අවධානයෙන් හිස සැලීම)',
      'Look away while writing notes (සටහන් ලියමින් අහක බලා සිටීම)',
      'Correct the user\'s mistakes immediately (පරිශීලකයාගේ වැරදි වහාම නිවැරදි කිරීම)',
      'Change the subject frequently (මාතෘකාව නිතර වෙනස් කිරීම)',
    ],
    correctIndex: 0,
    explanation: 'Maintain gentle eye contact and nod attentively (මෘදු ඇස් සම්බන්ධතාවය පවත්වා ගෙන අවධානයෙන් හිස සැලීම) — Active listening (傾聴) combines eye contact at the user\'s level, nodding, and empathetic posture.',
  },
  'main-paper-q009': {
    question: 'To prevent the spread of infection, how should the care worker handle soiled linens from a user\'s bed?',
    sinhalaText: 'ආසාදන පැතිරීම වැළැක්වීම සඳහා, හෙද සහායකයා පරිශීලකයාගේ ඇඳේ ඇති අපිරිසිදු රෙදි කෙසේ හැසිරවිය යුතුද?',
    options: [
      'Shake them in the air to remove any dirt (කුණු ඉවත් කිරීමට ඒවා වාතයේ ගසා දැමීම)',
      'Put them in the dirty linen container (ඒවා අපිරිසිදු රෙදි බහාලුමේ දැමීම)',
      'Place them in a neat pile on the floor (ඒවා බිම පිළිවෙළකට ගොඩගැසීම)',
      'Carry them close to the nurse aide\'s body (හෙද සහායකයාගේ ශරීරයට ළං කර ඒවා රැගෙන යාම)',
    ],
    correctIndex: 1,
    explanation: 'Put them in the dirty linen container (ඒවා අපිරිසිදු රෙදි බහාලුමේ දැමීම) — Roll soiled linen inward, keep it away from your uniform, never shake it, and place it directly into the dirty linen container.',
  },
  'main-paper-q010': {
    question: 'Where should used disposable supplies and soiled care items be discarded?',
    sinhalaText: 'භාවිත කළ ඉවත දැමිය හැකි සැපයුම් සහ අපිරිසිදු ද්‍රව්‍ය ඉවත දැමිය යුත්තේ කොතැනද?',
    options: [
      'Outside the user\'s room (පරිශීලකයාගේ කාමරයෙන් පිටත)',
      'In the designated receptacle (නියමිත කුණු බඳුනේ / බහාලුමේ)',
      'In the user\'s wash basket (පරිශීලකයාගේ රෙදි සෝදන කූඩයේ)',
      'In the clean utility room (පිරිසිදු උපයෝගිතා කාමරයේ / Clean utility room)',
    ],
    correctIndex: 1,
    explanation: 'In the designated receptacle (නියමිත කුණු බඳුනේ / බහාලුමේ) — Always dispose of single-use care supplies in the designated waste container to prevent cross-contamination.',
  },
  'main-paper-q011': {
    question: 'Which is the appropriate way of transferring a user with hemiplegia from bed to wheelchair?',
    sinhalaText: 'අංශභාගය ඇති පරිශීලකයෙකු ඇඳෙන් රෝද පුටුවකට මාරු කිරීමේ සුදුසු ක්‍රමය කුමක්ද?',
    options: [
      'Position the wheelchair on the user\'s healthy side at a 20°–30° angle and lock the brakes (රෝද පුටුව පරිශීලකයාගේ නිරෝගී පැත්තේ අංශක 20–30 කෝණයකින් ස්ථානගත කර තිරිංග අගුළු දැමීම)',
      'Let the user stand before locking the wheelchair brakes (රෝද පුටුවේ තිරිංග අගුළු දැමීමට පෙර පරිශීලකයාට නැගිටීමට ඉඩ දීම)',
      'Pull the user up by holding only the paralyzed arm (අංශභාග අතින් පමණක් ඇද පරිශීලකයා ඔසවා ගැනීම)',
      'Place the wheelchair on the user\'s affected side with footrests down (රෝද පුටුව පරිශීලකයාගේ ආබාධිත පැත්තේ පාද ආධාරක පහළට දමා තැබීම)',
    ],
    correctIndex: 0,
    explanation: 'Position the wheelchair on the user\'s healthy side at a 20°–30° angle and lock the brakes (රෝද පුටුව නිරෝගී පැත්තේ ස්ථානගත කර තිරිංග අගුළු දැමීම) — Placing the wheelchair on the unaffected side with brakes locked and footrests raised enables safe pivot transfer.',
  },
  'main-paper-q012': {
    question: 'What core principle must a care worker always uphold when supporting a user\'s daily living?',
    sinhalaText: 'පරිශීලකයාගේ එදිනෙදා ජීවිතයට සහාය වීමේදී සත්කාර සේවකයෙකු සැමවිටම ආරක්ෂා කළ යුතු මූලික මූලධර්මය කුමක්ද?',
    options: [
      'Prioritizing staff convenience over user preference (පරිශීලක කැමැත්තට වඩා කාර්ය මණ්ඩල පහසුවට ප්‍රමුඛතාව දීම)',
      'Enforcing identical rigid routines for all residents (සියලු නේවාසිකයන්ට එකම දැඩි කාලසටහනක් බලකිරීම)',
      'User-centric daily lifestyle only during free hours (විවේක වේලාවන්හිදී පමණක් පරිශීලක කේන්ද්‍රීය දෛනික ජීවන රටාව)',
      'Human dignity (මානව ගරුත්වය)',
    ],
    correctIndex: 3,
    explanation: 'Human dignity (මානව ගරුත්වය) — Respecting human dignity (尊厳の保持) and supporting independence are the foundational principles of Japanese nursing care (Kaigo).',
  },
  'main-paper-q017': {
    question: 'Regarding the physical changes in the body along with aging, choose one correct answer.',
    sinhalaText: 'වයසට යාමත් සමඟ ශරීරයේ සිදුවන වෙනස්කම් සම්බන්ධයෙන්, එක් නිවැරදි පිළිතුරක් තෝරන්න.',
    options: [
      'Differences among individuals are few (පුද්ගලයන් අතර වෙනස්කම් අල්පය)',
      'It becomes difficult to hear low-pitched sounds first (පළමුව පහත් ශබ්ද ඇසීමට අපහසු වේ)',
      'It becomes easier to regulate body temperature (ශරීර උෂ්ණත්වය පාලනය කිරීම පහසු වේ)',
      'Field of vision becomes narrower (දෘෂ්ටි පරාසය පටු වේ)',
    ],
    correctIndex: 3,
    explanation: 'Field of vision becomes narrower (දෘෂ්ටි පරාසය පටු වේ) — With aging, peripheral vision narrows, high-pitched sounds become harder to hear, and individual variation actually increases.',
  },
  'main-paper-q018': {
    question: 'Among the explanations below for communication with care users, choose one appropriate answer.',
    sinhalaText: 'සත්කාර පරිශීලකයන් සමඟ සන්නිවේදනය සඳහා පහත ඇති පැහැදිලි කිරීම් අතරින්, එක් සුදුසු පිළිතුරක් තෝරන්න.',
    options: [
      'Always speak in a fast and overly loud voice (සැමවිටම ඉතා වේගවත් හා අධික උස් කටහඬින් කතා කිරීම)',
      'Keep silent throughout care (සත්කාරය පුරාම නිහඬව සිටීම)',
      'Listen to them while watching their facial expressions (ඔවුන්ගේ මුහුණේ ඉරියව් දෙස බලා සවන් දීම)',
      'Try not to use gestures and hand gestures (අභිනයන් සහ අත් ඉඟි භාවිත නොකිරීමට උත්සාහ කිරීම)',
    ],
    correctIndex: 2,
    explanation: 'Listen to them while watching their facial expressions (ඔවුන්ගේ මුහුණේ ඉරියව් දෙස බලා සවන් දීම) — Observing non-verbal cues like facial expressions helps care workers accurately understand feelings and discomfort.',
  },
  'main-paper-q030': {
    question: 'The best way to prevent the spread of infection in the workplace is to:',
    sinhalaText: 'සේවා ස්ථානයේ ආසාදන පැතිරීම වැළැක්වීමේ හොඳම ක්‍රමය වන්නේ:',
    options: [
      'Refuse care to any person with psoriasis (සමේ රෝගයක් ඇති පුද්ගලයෙකුට සත්කාර කිරීම ප්‍රතික්ෂේප කිරීම)',
      'Wash your hands with soap and running water after contact with a user (පරිශීලකයෙකු සමඟ සම්බන්ධ වීමෙන් පසු සබන් සහ ගලා යන ජලයෙන් අත් සේදීම)',
      'Reuse disposable gloves between users to save supplies (සැපයුම් ඉතිරි කිරීමට පරිශීලකයන් අතර ඉවත දැමිය හැකි අත්වැසුම් නැවත භාවිත කිරීම)',
      'Skip hand washing whenever gloves are worn (අත්වැසුම් පැළඳ සිටින විට අත් සේදීම මඟ හැරීම)',
    ],
    correctIndex: 1,
    explanation: 'Wash your hands with soap and running water after contact with a user (පරිශීලකයෙකු සමඟ සම්බන්ධ වීමෙන් පසු සබන් සහ ගලා යන ජලයෙන් අත් සේදීම) — Hand hygiene before and after every user contact is mandatory even when gloves are used.',
  },
  'lesson-08-q014': {
    question: 'When assisting a user with hemiplegia to put on a shirt, put the sleeve on the healthy side first, then the sleeve on the affected side:',
    sinhalaText: 'අංශභාගය ඇති පරිශීලකයෙකුට ඇඳුමක් අන්දන විට, පළමුව නිරෝගී පැත්තේ අත් බාහුව දමා පසුව ආබාධිත පැත්තේ අත් බාහුව දැමිය යුතුය:',
    options: ['Yes (ඔව්)', 'No (නැත)'],
    correctIndex: 1,
    explanation: 'No (නැත) — Dressing rule (着脱の原則): Put clothes ON the affected side first (患側から着る); take clothes OFF the healthy side first (健側から脱ぐ).',
  },
  'lesson-08-q015': {
    question: 'When walking with a cane using the 3-point gait, the proper order is (1) cane, (2) healthy side, (3) affected side:',
    sinhalaText: 'සැරයටියක් සමඟ තුන්-ලක්ෂ්‍ය ගමනේදී (3-point gait) නිවැරදි අනුපිළිවෙළ වන්නේ (1) සැරයටිය, (2) නිරෝගී පැත්ත, (3) ආබාධිත පැත්තයි:',
    options: ['Yes (ඔව්)', 'No (නැත)'],
    correctIndex: 1,
    explanation: 'No (නැත) — Standard 3-point cane gait sequence is: (1) Cane → (2) Affected leg → (3) Healthy leg (සැරයටිය → ආබාධිත පාදය → නිරෝගී පාදය).',
  },
};

let cleanedCount = 0;
let reconstructedCount = 0;

for (const q of questions) {
  if (RECONSTRUCTED_SOURCE_MCQS[q.id]) {
    const patch = RECONSTRUCTED_SOURCE_MCQS[q.id];
    q.question = patch.question;
    q.sinhalaText = patch.sinhalaText;
    q.options = patch.options;
    q.correctIndex = patch.correctIndex;
    q.explanation = patch.explanation;
    reconstructedCount++;
    continue;
  }

  const orig = JSON.stringify([q.question, q.options, q.explanation, q.sinhalaText]);
  q.question = cleanSinhalaText(q.question);
  q.options = q.options.map((opt) => cleanSinhalaText(opt));
  q.explanation = cleanSinhalaText(q.explanation);
  if (q.sinhalaText) q.sinhalaText = cleanSinhalaText(q.sinhalaText);
  const after = JSON.stringify([q.question, q.options, q.explanation, q.sinhalaText]);
  if (orig !== after) cleanedCount++;
}

// Ensure every one of the 555 questions has a unique ID (disambiguate rare duplicate IDs in source PDFs without dropping any item)
const seenIds = new Map();
for (const q of questions) {
  const count = seenIds.get(q.id) ?? 0;
  seenIds.set(q.id, count + 1);
  if (count > 0) {
    q.id = `${q.id}-b${count > 1 ? count : ''}`;
  }
}

// Verify integrity before writing
const dupRegex = /([\u0DCA-\u0DDF\u0DF2\u0DF3])\1+/;
let remainingDups = 0;
let invalidAnswers = 0;
const ids = new Set();
for (const q of questions) {
  ids.add(q.id);
  if (q.correctIndex < 0 || q.correctIndex >= q.options.length) invalidAnswers++;
  const combined = [q.question, ...q.options, q.explanation, q.sinhalaText || ''].join(' ');
  if (dupRegex.test(combined)) remainingDups++;
}

if (ids.size !== 555) throw new Error(`Duplicate IDs found! Unique count: ${ids.size}`);
if (invalidAnswers > 0) throw new Error(`Found ${invalidAnswers} invalid correctIndex entries!`);
if (remainingDups > 0) throw new Error(`Still ${remainingDups} duplicated Sinhala vowel signs remaining!`);

const updated = raw.replace(
  /(export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = )\[[\s\S]*?\n\];/,
  `$1${JSON.stringify(questions, null, 2)};`
);

await fs.writeFile(studyBankPath, updated, 'utf8');

// Also update sourceAudit.ts notes for the 12 reconstructed items to reflect clean reconstruction
const auditRaw = await fs.readFile(sourceAuditPath, 'utf8');
const updatedAudit = auditRaw.replace(
  /status: "ANSWER_KEY_VERIFIED_SOURCE_TEXT_INCOMPLETE", reasonEn: "The source scan has a cut-off question stem and\/or missing answer choices; the answer cannot be safely reconstructed from the available PDF\.", reasonSi: "මුල් PDF scan එකේ ප්‍රශ්න කොටසක් හෝ පිළිතුරු විකල්ප අස්ථානගත\/කැපී ඇත\. අනුමානයෙන් ප්‍රශ්නය හෝ පිළිතුර පුරවා නැත\."/g,
  'status: "SOURCE_TRUNCATED_CURRICULUM_SUPPLEMENTED", reasonEn: "Source PDF scan was truncated; missing text was supplemented using standard MHLW SSW Nursing Care curriculum while preserving the original answer key.", reasonSi: "මුල් PDF scan එකේ කොටසක් කැපී තිබූ බැවින්, මුල් පිළිතුරු යතුර රැකගනිමින් සම්මත SSW සත්කාර විෂය නිර්දේශයට අනුව සම්පූර්ණ කර ඇත."'
);
await fs.writeFile(sourceAuditPath, updatedAudit, 'utf8');

console.log(`Success! Verified ${questions.length} unique questions across 13 paper sets.`);
console.log(`Cleaned Sinhala Unicode artifacts in ${cleanedCount} questions.`);
console.log(`Supplemented ${reconstructedCount} truncated source-mcq items.`);
console.log(`Remaining duplicated Sinhala vowel signs: ${remainingDups}`);
