import type { QuizQuestion } from '../types';

export interface BilingualSegment {
  en: string;
  si: string;
}

const SINHALA_CHAR_RE = /[\u0D80-\u0DFF]/;

/**
 * Cleanly separates English and Sinhala text for any question stem across all 555 MCQs.
 * Handles both dedicated `sinhalaText` fields (Lessons 2-9) and newline-embedded Sinhala (Main Paper).
 */
export function parseQuestionBilingual(question: QuizQuestion): BilingualSegment {
  const dedicatedSi = (question.sinhalaText || '').normalize('NFC').trim();
  const rawQuestion = (question.question || '').normalize('NFC').trim();

  if (dedicatedSi) {
    // Strip any duplicate Sinhala lines if embedded in question text
    const lines = rawQuestion.split('\n').map((l) => l.trim()).filter(Boolean);
    const enLines = lines.filter((l) => !SINHALA_CHAR_RE.test(l));
    return {
      en: (enLines.length > 0 ? enLines.join(' ') : rawQuestion).replace(/\s+/g, ' ').trim(),
      si: dedicatedSi.replace(/\s+/g, ' ').trim(),
    };
  }

  // Split embedded English + Sinhala lines (used in Main Paper Q1-Q45)
  const lines = rawQuestion.split('\n').map((l) => l.trim()).filter(Boolean);
  const enLines: string[] = [];
  const siLines: string[] = [];

  for (const line of lines) {
    if (SINHALA_CHAR_RE.test(line)) {
      siLines.push(line);
    } else {
      enLines.push(line);
    }
  }

  if (enLines.length > 0 && siLines.length > 0) {
    return {
      en: enLines.join(' ').replace(/\s+/g, ' ').trim(),
      si: siLines.join(' ').replace(/\s+/g, ' ').trim(),
    };
  }

  // Fallback if English and Sinhala appear on the same line
  const firstSinhalaIdx = rawQuestion.search(SINHALA_CHAR_RE);
  if (firstSinhalaIdx > 0) {
    return {
      en: rawQuestion.slice(0, firstSinhalaIdx).replace(/\s+/g, ' ').trim(),
      si: rawQuestion.slice(firstSinhalaIdx).replace(/\s+/g, ' ').trim(),
    };
  }

  return {
    en: rawQuestion.replace(/\s+/g, ' ').trim(),
    si: '',
  };
}

/**
 * Cleanly extracts English and Sinhala parts from an option or explanation string.
 * Most options follow the format: "English text (සිංහල පෙළ)" or "English text (සිංහල / English)".
 */
export function parseOptionBilingual(raw: string): BilingualSegment {
  const text = (raw || '').normalize('NFC').replace(/\s+/g, ' ').trim();
  if (!SINHALA_CHAR_RE.test(text)) {
    return { en: text, si: '' };
  }

  // Match the trailing parenthesized Sinhala segment: "English ... (සිංහල ...)"
  const lastClose = text.lastIndexOf(')');
  if (lastClose === text.length - 1) {
    // Walk backward to find the matching opening parenthesis
    let depth = 0;
    let openIdx = -1;
    for (let i = lastClose; i >= 0; i--) {
      if (text[i] === ')') depth++;
      else if (text[i] === '(') {
        depth--;
        if (depth === 0) {
          openIdx = i;
          break;
        }
      }
    }

    if (openIdx > 0) {
      const inner = text.slice(openIdx + 1, lastClose).trim();
      const before = text.slice(0, openIdx).trim();
      if (SINHALA_CHAR_RE.test(inner) && before.length > 0) {
        // Remove redundant trailing "/ English" echo inside Sinhala parens if identical to `before`
        let cleanSi = inner;
        const slashParts = inner.split('/').map((p) => p.trim());
        if (
          slashParts.length > 1 &&
          !SINHALA_CHAR_RE.test(slashParts[slashParts.length - 1]) &&
          slashParts[slashParts.length - 1].toLowerCase() === before.toLowerCase()
        ) {
          cleanSi = slashParts.slice(0, -1).join(' / ').trim();
        }
        return { en: before, si: cleanSi };
      }
    }
  }

  // Fallback: split at first Sinhala character
  const idx = text.search(SINHALA_CHAR_RE);
  if (idx > 0) {
    return {
      en: text.slice(0, idx).replace(/[\s(/-]+$/, '').trim(),
      si: text.slice(idx).replace(/\)+$/, '').trim(),
    };
  }

  return { en: text, si: '' };
}
