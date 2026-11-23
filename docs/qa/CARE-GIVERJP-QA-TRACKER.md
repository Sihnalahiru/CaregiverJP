# CaregiverJP — Source Question QA

## Scope and rules
- Repository: Sihnalahiru/CaregiverJP
- Source set: `data/originalpapers/` (9 exam PDFs)
- Textbook reference: `001471475_compressed.pdf` (276 pages)
- Work rule: process one small source batch at a time; inspect existing records before adding anything; never duplicate a question; preserve source wording unless a documented correction is needed.
- Final exam-bank packaging rule: create separate sequential papers with 45 questions each (Paper 01 = 45, Paper 02 = 45, etc.); only the final paper may contain fewer than 45 if the verified unique total is not divisible by 45. Do not fabricate questions to fill a paper.
- Every learner-facing study and quiz item must provide English and Sinhala. Sinhala text must be Unicode-safe and rendered with a Sinhala-capable font; quiz mode is not exempt.
- A question with no image in its original source remains a text-only question. Do not create or force an image where none is required. If the original question depends on an image, use the original PDF and textbook to identify the exact image and map it.
- Missing or unclear question content/answers may be completed from the original textbook only when directly supported there. Do not guess or silently rewrite source content.

## Source inventory — preliminary
| Source PDF | Pages | Extracted entries | Status |
|---|---:|---:|---|
| SSW Nursing Care paper 01-2-1.pdf | 8 | 39 | QA batch 1 reviewed |
| cargiver 6 ^%.pdf | 8 | 45 | QA batch 2 reviewed |
| cargiver 8 %.pdf | 7 | 45 | QA batch 3 reviewed |
| Communication Skills-1-2-1.pdf | 7 | 32 | Pending |
| Exam papers 2.pdf | 9 | 83 | QA batch 5 reviewed — Q&A entries |
| Exam questions 1.pdf | 9 | 94 | Pending — Q&A pairing audit |
| exam questions 3.pdf | 9 | 72 | Pending — Q&A pairing audit |
| Mechanism of mind and body paper-1-1-1.pdf | 21 | 102 | Pending |
| Skills for Providing Daily Assistance.pdf | 21 | 102 | Pending — image-heavy pages require visual audit |
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
- Image mapping: inspect Q38 and Q39 against original page images and textbook illustrations.
- Answer verification: all 39 require evidence from the textbook or an authoritative source answer record.
- Duplicate comparison: compare against the other eight source PDFs and existing app bank.

## Current app baseline observations
- Existing app already has `src/data/studyBank.ts`, `src/components/QuizPractice.tsx`, and `src/components/BilingualStudy.tsx`.
- Existing `QuizQuestion` type currently stores one question string, options, a correct index, and one explanation; it has no explicit Sinhala question/option/explanation fields or source-page/image evidence fields.
- Existing `src/index.css` declares `Noto Sans Sinhala` as a preferred font fallback, but actual font asset/loading and quiz coverage still need verification.
- Existing first quiz module currently advertises 25 questions; source PDF 01 contains 39 numbered items. Reconcile only after duplicate/source coverage audit; do not silently discard or repeat items.

## QA batch 2 — Caregiver 6
- Source: `cargiver 6 ^%.pdf`
- PDF pages: 8
- Numbered items: 1–45 (45 total).
- Diagram/image-dependent items: Q31 (toilet sitting posture), Q33 (post-meal resting position), Q36 (body-mechanics illustration). Match these against original page images and textbook before final inclusion.
- No marked answer key is present in the extracted source; all 45 answer keys require textbook verification.
- QA flags:
  - Q4 has facial expressions/nodding/gestures/all-of-the-above options; validate the intended combined answer.
  - Q13 asks for an airborne infection; verify the intended choice against textbook classification.
  - Q14 option A ("Use violence in the user's body") is semantically unclear; retain source wording and resolve only with source support.
  - Q22 lever-principle options require exact textbook cross-check.
  - Q28 has malformed "(ff)" and distractors mixing autonomy with unrelated concepts; preserve original in audit record and verify intended answer.
  - Q31/Q33/Q36 have image labels A–D without readable alternatives in extracted text.
  - Q38 contains potentially overlapping statements about intellectual disability and motor dysfunction; verify source distinction.
  - Q40 labels memory impairment as a peripheral/BPSD symptom; check textbook terminology before any correction.
  - Q41 slope-direction statement requires textbook confirmation.
  - Q45 spinal-cord shape item needs source verification.
- Cross-paper duplicate/overlap candidates: Q12 (QOL), Q14 (physical restraint), Q16 (self-decision/autonomy), Q18 (communication), Q19 (excretion privacy), Q20 (dressing with paralysis), Q21 (walking with cane), Q25 (disuse syndrome), Q29 (nutrient absorption), Q37 (hearing), Q43–44 (QOL). Candidates are not removed until exact wording and answer intent are compared.

## QA batch 3 — Caregiver 8
- Source: `cargiver 8 %.pdf`
- PDF pages: 7
- Numbered items: 01–45 (45 total); visually checked all seven original PDF pages.
- All 45 items are text-based in this source. The page images show the printed question text/options and no question-specific diagrams or image-choice panels. Therefore no textbook image is required merely to complete this paper.
- No answer key is marked in the source; all 45 correct answers must be verified against the original textbook before being loaded as keyed quiz questions.
- Wording/quality flags:
  - Q03: asks for types of pathogens but option A "Ebola" is a disease name while the other options are pathogen classes; check the source textbook and preserve the original option wording.
  - Q04: "normalization" and "human dignity" concepts need careful distinction; do not assume an answer from general wording alone.
  - Q07: "nurse aid" wording; verify whether the source textbook describes a pre-care sequence and whether "all of the above" is supported.
  - Q08: ethics question has "prohibition of physical restraint" as an option; verify the exact professional-ethics list in the textbook.
  - Q09: restraint options include safety rails, locking a door, tying the body, and excess psychotropic medication; verify which is the intended exception from the textbook definition.
  - Q10: asks which therapist trains physical activities such as walking; verify role distinction between occupational and physical therapist.
  - Q12: care-process flow question; verify the named stages and source wording.
  - Q14–16: observation, base of support, and body mechanics definitions; verify exact textbook definitions.
  - Q17: asks which mental-health maintenance statement is "not true"; all four options appear positive at face value, so check source wording/answer evidence carefully.
  - Q19: infection-control principles ("do not bring in/out/spread") need exact textbook wording.
  - Q20: "eating molded breads" appears to describe a route/exposure rather than a source; verify the source's intended category.
  - Q21: "contagious infection" versus routes such as food, droplet, and airborne; verify the intended classification.
  - Q23: disaster-prevention supplies; check the exact list before assigning an exception.
  - Q24: risk-management exception; verify the information-sharing rule.
  - Q26: all four choices appear to be safety/accident-prevention actions; the "except" stem requires textbook cross-check.
  - Q27: asks which body part is not easy to get dirty; verify the listed hand/arm areas.
  - Q28/Q33: assessment and care-plan development are distinct process stages; verify terminology, not duplicates by topic alone.
  - Q29: record-keeping timing and content; confirm the required immediate-recording rule.
  - Q30: adverse effects involving physical ability and dementia; verify whether "physical restraint" is the supported concept.
  - Q31: speech therapist role; verify terminology.
  - Q34: daily activities/rhythm-of-life item has a long stem and potentially awkward distractors; preserve wording pending textbook review.
  - Q35: professional role item appears to associate following doctors' instructions with nurse; verify scope/wording.
  - Q36: sense of accomplishment; verify the intended user-ability support option.
  - Q37: confidentiality options include potentially absolute statements; verify exact consent/privacy rule.
  - Q38: glove changing, glove use, and fulcrum statements; verify each proposition individually before keying.
  - Q39: inter-professional collaboration definition; verify exact scope.
  - Q40–41: abandonment and abuse definitions; verify distinction and terminology.
  - Q42: stability/body mechanics; verify against textbook and compare with batch 1 body-mechanics items.
  - Q43: risk-management sequence; verify the ordered steps against the textbook.
  - Q44: three factors of infectious disease; verify the exact triad.
  - Q45: disaster preparedness; verify the care worker's role and emergency-preparedness guidance.
- Cross-paper duplicate/overlap candidates against batches 1–2:
  - Q04/Q32 (normalization, QOL, human dignity) overlap conceptually with batch 1 QOL items and batch 2 Q12/Q43–44; exact question identity is not established.
  - Q08/Q09 (professional ethics and physical restraint) overlap in topic with batch 2 Q14 and batch 1 abuse/rights questions; compare stems and answer intent before deduplication.
  - Q14–16/Q42 (observation, base of support, body mechanics/stability) overlap conceptually with batch 1 Q17/Q30 and batch 2 Q22; not automatically duplicates.
  - Q18–21/Q44 (infection, infection control, infection routes/factors) may overlap with batch 2 Q13 and batch 1 infection/abuse content; compare exact stems and tested knowledge.
  - Q28/Q33 (assessment/care-plan process) are related but distinct stages within this same paper; do not merge without exact duplicate evidence.
  - Q40–41 (abandonment/abuse) require comparison with batch 1 abuse questions.
- Image requirement: none identified in the original 7-page source; do not add generated or unrelated images.
- Answer verification: 45/45 pending original-textbook evidence; no answer key was marked in this PDF.
- Unique-question status: not yet finalized. These overlap candidates are retained until exact/near-duplicate comparison across all nine PDFs and the existing app bank is complete.


## QA batch 4 — Communication Skills
- Source: `Communication Skills-1-2-1(1).pdf` (uploaded filename variant of the Communication Skills source listed in inventory).
- PDF pages: 7.
- Numbered items: 01–32 (32 total); all seven pages read from the source PDF.
- The source contains text-based questions and options; no question-specific image/diagram panels are present in the seven pages. Do not add unrelated images.
- No answer key is printed in this source. All 32 answer keys require verification against the original textbook.
- Wording/quality flags:
  - Q01: verbal-communication exception; sign language classification needs exact textbook wording.
  - Q02 and Q14: non-verbal communication/sign-language definitions overlap in topic; verify the distinction between the broad mode and sign language.
  - Q03/Q04: empathy versus acceptance definitions; verify exact wording from textbook.
  - Q05: "Closed question" stem has a punctuation/grammar issue; preserve original stem in audit record.
  - Q06–08: fill-in-the-blank items on repetition, eye contact, and polite wording; verify which option fits each sentence.
  - Q09: posture options include leaning back, crossed arms, crossed legs, and face-to-face speaking; verify the source's intended posture.
  - Q10: visual-impairment communication exception; option D may conflict with the need to explain using non-visual information; verify against textbook.
  - Q11: clock-position explanation; verify exact term ("Clock Position" vs "Hour Position").
  - Q12: tools for communicating with blind users; verify the listed Braille tools.
  - Q13: hearing-disorder communication exception; confirm the instruction about speaking toward the less-impaired ear and volume.
  - Q15/Q26/Q28/Q32: aphasia definition/characteristics are repeated in several forms; Q15 includes likely misspellings ("Aphycusia", "Basybachia"), Q26 mixes aphasia with swallowing difficulty, and Q32 has only three options. Preserve source content and verify/correct only with textbook evidence.
  - Q16/Q17: aphasia and dementia communication exceptions; verify open-question guidance and communication strategies separately.
  - Q18: nursing-care personnel exception includes cook and laundry service; verify the categories in the textbook.
  - Q19: information-sharing methods; hand/body gestures may not be an information-record/sharing method in this context; verify.
  - Q20: record-keeping "at the end of your shift" conflicts with same-day/accurate recording guidance in textbook; verify intended exception.
  - Q21/Q22: subjective versus objective facts; options mix user-reported experience and care-worker observation. Verify each category.
  - Q23/Q24: information giver versus receiver responsibilities; options appear to mix reporting and listening behaviours. Verify roles and preserve exact source text.
  - Q25: reporting/consulting/confirming distinction; verify exact definition.
  - Q27: general communication practice; compare against earlier communication questions.
  - Q29: confidentiality and permitted team information sharing; verify scope/need-to-know rule.
  - Q30: dementia communication has only three options; verify answer and do not invent a fourth option.
  - Q31: recording purpose has only three options; verify intended answer and retain original option count.
- Cross-paper duplicate/overlap candidates:
  - Q03/Q04 (empathy/acceptance) overlap communication concepts in the other papers but no exact duplicate has yet been established.
  - Q06 (repeating what user said to signal listening) is a strong concept/stem overlap candidate with the Q&A source `exam questions 3.pdf` ("What is repetition?" / "What message can be conveyed by repeating?") and batch 2 communication Q18; compare exact source phrasing before deduplication.
  - Q09 (conversation posture) overlaps Q&A items in `exam questions 3.pdf` about leaning back/crossed legs and batch 2 Q18; exact duplicate comparison required.
  - Q15/Q26/Q28/Q32 are within-paper aphasia overlap candidates; compare whether they test identical definition or distinct recognition/characteristics before deciding which to retain.
  - Q17/Q30 (dementia communication) overlap by topic; determine if same tested instruction or separate recall/application questions.
  - Q19/Q23/Q24/Q25 (information sharing, reporting, receiving, consulting) are related but not interchangeable; do not merge solely by topic.
  - Q20 overlaps batch 3 Q29 (nursing-care record keeping) and batch 2 Q29 candidate (recording/care records); compare exact stems and tested rule.
  - Q21/Q22 overlap textbook definitions of subjective/objective facts; check against any Q&A source items before deduplication.
  - Q27 overlaps batch 2 Q18 and other source communication questions; exact duplicate comparison required.
  - Q29 overlaps batch 3 Q37 and batch 2 Q14 confidentiality/privacy topics; compare exact wording and answer intent.
- Image requirement: none identified in the original seven-page source.
- Answer verification: 32/32 pending original-textbook evidence; no answer key is printed in this PDF.
- Unique-question status: not finalized. All overlap candidates remain in the audit set until the nine-PDF and existing-app comparison is complete.


## QA batch 5 — Exam Questions 2 (Q&A source)
- Source: `Exam papers 2.pdf`
- PDF pages: 9; all nine extracted pages read.
- Count: 83 Q&A entries (counted from the source's Q:/G: entry markers); this is not a numbered 45-question MCQ paper.
- The source already includes English questions/answers and Sinhala translations for the entries. Preserve those source pairs; Sinhala accuracy and technical terminology still require review against the textbook before publication.
- No answer key/MCQ option set: this is a study Q&A source, not a conventional four-option paper. Do not invent options or convert every short-answer item into MCQ without source support.
- Source integrity flags:
  - Two entries are marked `G:` rather than `Q:` (infection-facility spread and disposable-glove removal). Check whether this is a source typo, but retain the original source marker in the audit record.
  - Source content includes some technical phrases that require careful comparison with textbook terminology, including "visiting-type services", "day-type services", "facility-admitting-type services", "susceptible host", "breaking the chain of infection", and "inside becomes the outside" for glove removal.
  - Q&A sequence crosses page breaks (for example, an answer/translation may begin on the next PDF page); preserve each complete Q/A pair rather than treating page boundaries as item boundaries.
- Image requirement: no question-specific images are embedded/required in this Q&A source. Do not attach unrelated textbook illustrations.
- Strong duplicate/overlap candidates with the three reviewed MCQ sources:
  - Human dignity, QOL, normalization, self-determination/self-selection and privacy items overlap topics in batch 1 QOL/rights questions, batch 2 QOL/autonomy/privacy questions, and batch 3 Q04/Q32/Q37.
  - Physical restraint and abuse definitions overlap batch 1 abuse/rights items, batch 2 Q14 and batch 3 Q08–09/Q30/Q40–41.
  - Professional roles (doctor, nurse, PT, OT, speech-language-hearing therapist, dietitian, care manager) overlap batch 3 Q10–11/Q31/Q35/Q39 and batch 2 professional-team items.
  - Care services and care-process stages overlap batch 3 Q12–13/Q28/Q33 and batch 2 service/process items.
  - Observation, record keeping, reporting, mental health and body mechanics overlap batch 3 Q14–16/Q17/Q20/Q22/Q24–29/Q42–43 and batch 2 record/lever/body-mechanics items.
  - Infection, pathogen types, transmission routes, infection sources, protective equipment and handwashing overlap batch 3 Q02–03/Q18–21/Q44 and batch 2 Q13/Q27, plus the handwashing questions in the other Q&A source `Exam questions 1.pdf`.
  - Handwashing locations and between-finger cleaning are direct topic overlaps with the existing Q&A source `Exam questions 1.pdf`; compare exact question intent before deduplication.
- Answer verification: the source supplies proposed answers, but all 83 still require direct textbook cross-check before they are marked verified.
- Final exam packaging: these 83 Q&A entries must not automatically be counted as 83 additional MCQs. They must be matched to the original exam questions and existing app bank first; use them as supporting answer evidence where the question intent matches.
- Unique-question status: not finalized pending cross-source and app-bank deduplication.
