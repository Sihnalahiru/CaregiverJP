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
  "main-paper-q021": { files: ["89.jpg"], alt: "Person standing with a walking cane", auditBatch: "53-102" },
  "lesson-02-q001": { files: ["68.jpg", "69.png", "70.png", "71.png", "72.png", "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png", "80.png", "81.png", "82.png", "83.png", "84.png", "85.png"], alt: "Illustrated handwashing steps", auditBatch: "53-102" },
  "lesson-04-q040": { files: ["87.jpg", "88.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg"], alt: "Examples of safe and unsafe lifting posture", auditBatch: "53-102" },
  "lesson-04-q044": { files: ["87.jpg", "88.jpg", "90.jpg", "91.jpg", "92.jpg", "93.jpg"], alt: "Body mechanics and lifting posture examples", auditBatch: "53-102" },
  "lesson-04-q045": { files: ["90.jpg", "91.jpg", "92.jpg", "93.jpg"], alt: "Body mechanics when lifting a load", auditBatch: "53-102" },
  "lesson-04-q049": { files: ["92.jpg", "93.jpg"], alt: "Squatting posture while lifting a load", auditBatch: "53-102" },
  "lesson-04-q050": { files: ["91.jpg"], alt: "Incorrect bending posture while lifting a load", auditBatch: "53-102" },
  "lesson-04-q063": { files: ["54.jpg"], alt: "Person vomiting", auditBatch: "53-102" },
  "lesson-04-q076": { files: ["57.jpg", "58.png", "59.png", "60.jpg"], alt: "Protective equipment: apron, mask, gloves and goggles", auditBatch: "53-102" },
  "lesson-04-q078": { files: ["64.jpg"], alt: "Safe removal and disposal of a used glove", auditBatch: "53-102" },
  "lesson-04-q079": { files: ["68.jpg"], alt: "Applying soap to hands", auditBatch: "53-102" },
  "lesson-04-q080": { files: ["66.jpg"], alt: "Items to remove before handwashing", auditBatch: "53-102" },
  "lesson-04-q081": { files: ["65.jpg"], alt: "Areas of the hands highlighted during hand hygiene", auditBatch: "53-102" },
  "lesson-04-q082": { files: ["80.png", "81.png"], alt: "Cleaning between fingers during handwashing", auditBatch: "53-102" },
  "lesson-04-q083": { files: ["76.png"], alt: "Drying hands with a towel after washing", auditBatch: "53-102" },
  "lesson-05-q045": { files: ["55.jpg"], alt: "Person coughing", auditBatch: "53-102" },
  "lesson-06-q001": { files: ["101.jpg"], alt: "Two people communicating face to face", auditBatch: "53-102" },
  "lesson-06-q004": { files: ["101.jpg"], alt: "Two people communicating face to face", auditBatch: "53-102" },
  "lesson-06-q005": { files: ["101.jpg"], alt: "Two people communicating face to face", auditBatch: "53-102" },

  "main-paper-q017": { files: ["123.jpg", "124.jpg", "125.jpg", "128.jpg", "131.jpg", "132.jpg"], alt: "Body systems and structures that change with ageing", auditBatch: "103-152" },
  "main-paper-q027": { files: ["104.jpg"], alt: "Care staff assisting residents during an emergency evacuation", auditBatch: "103-152" },
  "main-paper-q035": { files: ["135.jpg", "136.jpg"], alt: "Rest and sleep in bed", auditBatch: "103-152" },
  "main-paper-q041": { files: ["107.jpg"], alt: "Care worker assisting an older person in a wheelchair", auditBatch: "103-152" },
  "lesson-02-q016": { files: ["124.jpg", "125.jpg"], alt: "Human skeleton and muscle structure", auditBatch: "103-152" },
  "lesson-02-q022": { files: ["104.jpg"], alt: "Emergency evacuation drill at a care facility", auditBatch: "103-152" },
  "lesson-02-q023": { files: ["103.jpg"], alt: "Emergency and disaster-prevention supplies", auditBatch: "103-152" },
  "lesson-04-q042": { files: ["108.jpg"], alt: "Person experiencing stress and worry", auditBatch: "103-152" },
  "lesson-07-q019": { files: ["114.png"], alt: "Checking the pulse at the wrist", auditBatch: "103-152" },
  "lesson-07-q020": { files: ["115.jpg"], alt: "Blood vessel and blood pressure illustration", auditBatch: "103-152" },
  "lesson-07-q022": { files: ["119.jpg", "120.jpg"], alt: "Human brain and central nervous system", auditBatch: "103-152" },
  "lesson-07-q027": { files: ["130.jpg"], alt: "Circulatory system showing the heart and blood vessels", auditBatch: "103-152" },
  "lesson-07-q028": { files: ["130.jpg"], alt: "Heart and blood circulation", auditBatch: "103-152" },
  "lesson-07-q031": { files: ["131.jpg"], alt: "Digestive system and intestines", auditBatch: "103-152" },
  "lesson-07-q036": { files: ["135.jpg", "136.jpg"], alt: "Sleep and rest", auditBatch: "103-152" },
  "lesson-07-q042": { files: ["109.jpg"], alt: "Person sweating in hot weather", auditBatch: "103-152" },
  "lesson-07-q044": { files: ["151.jpg"], alt: "Blocked blood vessel illustration", auditBatch: "103-152" },
  "lesson-07-q045": { files: ["151.jpg"], alt: "Brain blood-vessel disorder illustration", auditBatch: "103-152" },
  "lesson-07-q047": { files: ["128.jpg"], alt: "Human respiratory system and lungs", auditBatch: "103-152" },
  "lesson-07-q057": { files: ["113.jpg"], alt: "Heart and blood-vessel system illustration", auditBatch: "103-152" },
  "lesson-07-q067": { files: ["126.jpg"], alt: "Brain and visual processing illustration", auditBatch: "103-152" },
  "lesson-07-q068": { files: ["127.jpg", "119.jpg"], alt: "Ear structure and brain illustration", auditBatch: "103-152" },
  "lesson-07-q087": { files: ["132.jpg"], alt: "Kidneys and urinary system", auditBatch: "103-152" },
  "lesson-07-q088": { files: ["135.jpg", "136.jpg"], alt: "Sleep and rest", auditBatch: "103-152" },
  "lesson-07-q089": { files: ["110.jpg", "111.jpg", "112.jpg"], alt: "Different methods of measuring body temperature", auditBatch: "103-152" },
  "lesson-07-q090": { files: ["114.png"], alt: "Pulse measurement at the wrist", auditBatch: "103-152" },
  "lesson-07-q096": { files: ["114.png"], alt: "Pulse measurement location at the wrist", auditBatch: "103-152" },
  "lesson-07-q100": { files: ["115.jpg"], alt: "Blood pressure and blood vessel illustration", auditBatch: "103-152" },
  "lesson-07-q101": { files: ["115.jpg"], alt: "Blood pressure and blood vessel illustration", auditBatch: "103-152" },

  "main-paper-q011": { files: ["156.jpg"], alt: "Care worker assisting a wheelchair user to board a train using a ramp", auditBatch: "153-202" },
  "lesson-03-q002": { files: ["159.jpg", "178.jpg"], alt: "Non-verbal communication using facial expression and gestures", auditBatch: "153-202" },
  "lesson-03-q010": { files: ["158.jpg"], alt: "Examples of how visual impairment changes what a person sees", auditBatch: "153-202" },
  "lesson-03-q013": { files: ["160.jpg"], alt: "Hearing aid device", auditBatch: "153-202" },
  "lesson-06-q025": { files: ["158.jpg"], alt: "Examples of visual impairment", auditBatch: "153-202" },
  "lesson-06-q042": { files: ["160.jpg"], alt: "Hearing aid device", auditBatch: "153-202" },
  "lesson-07-q017": { files: ["153.jpg"], alt: "Human respiratory system and lungs", auditBatch: "153-202" },
  "lesson-07-q050": { files: ["155.jpg"], alt: "Fall injuries and fractures involving bones", auditBatch: "153-202" },
  "lesson-07-q058": { files: ["166.jpg", "167.jpg"], alt: "Portable and stationary oxygen therapy equipment", auditBatch: "153-202" },
  "lesson-07-q059": { files: ["154.png"], alt: "Dialysis treatment for a care recipient", auditBatch: "153-202" },
  "lesson-07-q073": { files: ["182.png", "183.png", "184.png", "185.png"], alt: "Brain illustrations used to explain dementia-related changes", auditBatch: "153-202" },
  "lesson-07-q074": { files: ["182.png", "183.png", "184.png", "185.png"], alt: "Brain illustrations used to explain dementia-related changes", auditBatch: "153-202" },
  "lesson-07-q079": { files: ["187.jpg"], alt: "Older person confused about the date on a calendar", auditBatch: "153-202" },
  "lesson-07-q080": { files: ["186.jpg"], alt: "Older person forgetting how to use a familiar item", auditBatch: "153-202" },
  "lesson-07-q082": { files: ["193.jpg"], alt: "Older person wandering at night", auditBatch: "153-202" },
  "lesson-07-q084": { files: ["191.jpg"], alt: "Older person experiencing a visual hallucination", auditBatch: "153-202" },
  "lesson-07-q085": { files: ["194.jpg"], alt: "Older person believing a personal item has been stolen", auditBatch: "153-202" },
  "lesson-06-q048": { files: ["186.jpg", "187.jpg", "188.jpg", "189.jpg", "190.jpg", "191.jpg", "192.jpg", "193.jpg", "194.jpg"], alt: "Illustrations of dementia-related communication and behavioral symptoms", auditBatch: "153-202" }

  "lesson-03-q006": { files: ["203.jpg"], alt: "Care worker listening attentively and offering reassurance", auditBatch: "203-252" },
  "lesson-03-q009": { files: ["212.jpg", "223.jpg"], alt: "Appropriate posture and eye level during conversation", auditBatch: "203-252" },
  "lesson-03-q014": { files: ["220.jpg"], alt: "Sign language gestures used in communication", auditBatch: "203-252" },
  "lesson-03-q040": { files: ["219.jpg", "224.jpg"], alt: "Written communication using a tablet and written notes", auditBatch: "203-252" },
  "lesson-06-q006": { files: ["203.jpg", "210.jpg"], alt: "Active listening and attentive communication", auditBatch: "203-252" },
  "lesson-06-q007": { files: ["203.jpg"], alt: "Care worker showing empathy and reassurance", auditBatch: "203-252" },
  "lesson-06-q034": { files: ["221.jpg"], alt: "Speaking face to face with a person who has hearing impairment", auditBatch: "203-252" },
  "lesson-06-q040": { files: ["219.jpg", "224.jpg"], alt: "Written communication", auditBatch: "203-252" },
  "lesson-06-q041": { files: ["220.jpg"], alt: "Sign language communication", auditBatch: "203-252" },
  "lesson-05-q026": { files: ["240.jpg", "241.png"], alt: "Care recipient positioning in bed", auditBatch: "203-252" },
  "lesson-08-q031": { files: ["249.jpg", "250.jpg"], alt: "Walking aids including a walker and canes", auditBatch: "203-252" },
  "lesson-08-q033": { files: ["240.jpg", "241.png", "244.jpg"], alt: "Supported positions in bed for breathing comfort", auditBatch: "203-252" },
  "lesson-04-q057": { files: ["247.jpg", "248.jpg"], alt: "Ceiling and mobile hoist welfare equipment", auditBatch: "203-252" },
  "lesson-05-q044": { files: ["247.jpg", "248.jpg"], alt: "Mechanical lifting equipment for a bedridden care recipient", auditBatch: "203-252" },
  "lesson-08-q007": { files: ["229.jpg"], alt: "Wheelchair assistance", auditBatch: "203-252" },
  "lesson-09-q038": { files: ["62.jpg", "63.jpg"], alt: "Examples showing correct mask wearing", auditBatch: "53-102" }
};

export const IMAGE_AUDIT_BATCHES = [
  { range: "1-52", status: "VISUALLY_REVIEWED_IN_PRIOR_BATCH", mappedCount: null },
  { range: "53-102", status: "VISUALLY_REVIEWED", mappedQuestionCount: 24, imageCount: 50 },
  { range: "103-152", status: "VISUALLY_REVIEWED", mappedQuestionCount: 31, imageCount: 50 },
  { range: "153-202", status: "VISUALLY_REVIEWED", mappedQuestionCount: 20, imageCount: 50 },
  { range: "203-252", status: "VISUALLY_REVIEWED", mappedQuestionCount: 20, imageCount: 50 },
  { range: "253-302", status: "VISUALLY_REVIEWED", mappedQuestionCount: 15, imageCount: 50 },
  { range: "303-343", status: "VISUALLY_REVIEWED", mappedQuestionCount: 20, imageCount: 41 }
] as const;
