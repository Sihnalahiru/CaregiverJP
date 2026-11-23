# CaregiverJP — Source Question QA

## Scope and rules
- Repository: Sihnalahiru/CaregiverJP
- Source set: `data/originalpapers/` (9 exam PDFs)
- Textbook reference: `001471475_compressed.pdf` (276 pages)
- Work rule: process one small source batch at a time; inspect existing records before adding anything; never duplicate a question; preserve source wording unless a documented correction is needed.
- Every learner-facing study and quiz item must provide English and Sinhala. Sinhala text must be Unicode-safe and rendered with a Sinhala-capable font; quiz mode is not exempt.
- Map an illustration only when the textbook page/image clearly supports the specific question. Uncertain mappings remain `PENDING`.
- Missing or unclear question content/answers may be completed from the original textbook only when directly supported there. Otherwise mark `PENDING`.

## Source inventory — preliminary
| Source PDF | Pages | Extracted entries | Status |
|---|---:|---:|---|
| SSW Nursing Care paper 01-2-1.pdf | 8 | 39 | QA batch 1 reviewed |
| cargiver 6 ^%.pdf | 8 | 45 | Pending |
| cargiver 8 %.pdf | 7 | 45 | Pending |
| Communication Skills-1-2-1.pdf | 7 | 32 | Pending |
| Exam papers 2.pdf | 9 | 81 | Pending — Q&A pairing audit |
| Exam questions 1.pdf | 9 | 94 | Pending — Q&A pairing audit |
| exam questions 3.pdf | 9 | 72 | Pending — Q&A pairing audit |
| Mechanism of mind and body paper-1-1-1.pdf | 21 | 102 | Pending |
| Skills for Providing Daily Assistance.pdf | 21 | 102 | Pending — image-only pages require visual audit |
| **Total** | **99** | **612** | Preliminary source entries, not unique-question total |

## QA batch 1 — SSW Nursing Care Paper 01
- Source: `SSW Nursing Care paper 01-2-1.pdf`
- PDF pages: 8
- Numbered items: 01–39 (39 total).
- Items 01–37 contain text stems and options.
- Items 38–39 are image/diagram-dependent in the supplied PDF extraction; their visual content and answer choices must be inspected before completion.
- No answer key is printed beside the questions in this source; correct answers are not inferred from blank answer spaces.
- Potential wording/quality flags to resolve against textbook:
  - Q04 and Q05 use overlapping/nonstandard terms ("Self-independence", "Self-choice", "User-centric"); retain source wording until the textbook establishes the intended distinction.
  - Q07 asks types of abuse but uses "Mental" and "Psychological" as separate choices; verify terminology against the textbook before keying.
  - Q17 and Q30 contain potentially misleading body-mechanics wording about center of gravity/base of support; check exact textbook guidance.
  - Q20 and Q23 terminology/options need source-based verification before answer assignment.
- Image mapping: `PENDING` for Q38 and Q39 until matching the corresponding textbook illustrations.
- Answer verification: `PENDING` for all 39 until the relevant textbook sections/answer evidence are checked.
- Duplicate comparison: `PENDING` against the other eight source PDFs and the existing app bank.

## Current app baseline observations
- Existing app already has `src/data/studyBank.ts`, `src/components/QuizPractice.tsx`, and `src/components/BilingualStudy.tsx`.
- Existing `QuizQuestion` type currently stores one question string, options, a correct index, and one explanation; it has no explicit Sinhala question/option/explanation fields or source-page/image evidence fields.
- Existing `src/index.css` declares `Noto Sans Sinhala` as a preferred font fallback, but actual font asset/loading and quiz coverage still need verification.
- Existing first quiz module currently advertises 25 questions; source PDF 01 contains 39 numbered items. Reconcile only after duplicate/source coverage audit; do not silently discard or repeat items.
