/**
 * Visually verified question-to-source-image links.
 * Batch 02: source images 53–102 (50 images reviewed).
 * Only topic matches supported by the image and question wording are included.
 * Image files remain in public/assets/images via scripts/prepare-papers.mjs.
 */
export interface QuestionImageSet {
  files: string[];
  alt: string;
  auditBatch: string;
}

export const QUESTION_IMAGES: Record<string, QuestionImageSet> = {
  "main-paper-q011": { files: ["99.jpg"], alt: "Wheelchair positioned beside a bed for a transfer", auditBatch: "53-102" },
  "main-paper-q021": { files: ["89.jpg"], alt: "Person standing with a walking cane", auditBatch: "53-102" },
  "lesson-02-q001": { files: ["68.jpg", "69.png", "70.png", "71.png", "72.png", "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png", "80.png", "81.png", "82.png", "83.png", "84.png", "85.png"], alt: "Illustrated handwashing steps", auditBatch: "53-102" },
  "lesson-04-q040": { files: ["87.jpg", "88.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg"], alt: "Examples of safe and unsafe lifting posture", auditBatch: "53-102" },
  "lesson-04-q044": { files: ["87.jpg", "88.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg"], alt: "Body mechanics and lifting posture examples", auditBatch: "53-102" },
  "lesson-04-q045": { files: ["90.jpg", "91.jpg", "92.jpg", "93.jpg"], alt: "Body mechanics when lifting a load", auditBatch: "53-102" },
  "lesson-04-q049": { files: ["92.jpg", "93.jpg"], alt: "Squatting posture while lifting a load", auditBatch: "53-102" },
  "lesson-04-q050": { files: ["91.jpg"], alt: "Incorrect bending posture while lifting a load", auditBatch: "53-102" },
  "lesson-04-q057": { files: ["98.jpg"], alt: "Mechanical lifting hoist used as welfare equipment", auditBatch: "53-102" },
  "lesson-04-q063": { files: ["54.jpg"], alt: "Person vomiting", auditBatch: "53-102" },
  "lesson-04-q076": { files: ["57.jpg", "58.png", "59.png", "60.jpg"], alt: "Protective equipment: apron, mask, gloves and goggles", auditBatch: "53-102" },
  "lesson-04-q078": { files: ["64.jpg"], alt: "Safe removal and disposal of a used glove", auditBatch: "53-102" },
  "lesson-04-q079": { files: ["68.jpg"], alt: "Applying soap to hands", auditBatch: "53-102" },
  "lesson-04-q080": { files: ["66.jpg"], alt: "Items to remove before handwashing", auditBatch: "53-102" },
  "lesson-04-q081": { files: ["65.jpg"], alt: "Areas of the hands highlighted during hand hygiene", auditBatch: "53-102" },
  "lesson-04-q082": { files: ["80.png", "81.png"], alt: "Cleaning between fingers during handwashing", auditBatch: "53-102" },
  "lesson-04-q083": { files: ["76.png"], alt: "Drying hands with a towel after washing", auditBatch: "53-102" },
  "lesson-05-q015": { files: ["99.jpg"], alt: "Wheelchair positioned beside a bed for a transfer", auditBatch: "53-102" },
  "lesson-05-q044": { files: ["98.jpg"], alt: "Mechanical lifting hoist for a bedridden care recipient", auditBatch: "53-102" },
  "lesson-05-q045": { files: ["55.jpg"], alt: "Person coughing", auditBatch: "53-102" },
  "lesson-06-q001": { files: ["101.jpg"], alt: "Two people communicating face to face", auditBatch: "53-102" },
  "lesson-06-q004": { files: ["101.jpg"], alt: "Two people communicating face to face", auditBatch: "53-102" },
  "lesson-06-q005": { files: ["101.jpg"], alt: "Two people communicating face to face", auditBatch: "53-102" },
  "lesson-09-q038": { files: ["62.jpg", "63.jpg"], alt: "Examples showing correct mask wearing", auditBatch: "53-102" }
};

export const IMAGE_AUDIT_BATCHES = [
  { range: "1-52", status: "VISUALLY_REVIEWED_IN_PRIOR_BATCH", mappedCount: null },
  { range: "53-102", status: "VISUALLY_REVIEWED", mappedQuestionCount: Object.keys(QUESTION_IMAGES).length, imageCount: 50 }
] as const;
