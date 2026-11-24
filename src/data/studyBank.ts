import type { BilingualCard, QuizModule, QuizQuestion } from '../types';

export const QUIZ_MODULES: QuizModule[] = [
  {
    "id": "all-mixed",
    "title": "All Uploaded PDF Questions",
    "lessonLabel": "All 555",
    "sourceFilename": "All 9 uploaded PDFs",
    "description": "All questions from the nine currently uploaded source PDFs.",
    "questionCount": 555
  },
  {
    "id": "main-paper",
    "title": "Main Bilingual Paper",
    "lessonLabel": "Main Paper",
    "sourceFilename": "Nursing Care Skills Evaluation Test (English + Sinhala).pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test (English + Sinhala).pdf.",
    "questionCount": 45
  },
  {
    "id": "lesson-02",
    "title": "Lesson 2",
    "lessonLabel": "Lesson 02",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 2.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 2.pdf.",
    "questionCount": 45
  },
  {
    "id": "lesson-03",
    "title": "Lesson 3",
    "lessonLabel": "Lesson 03",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 3.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 3.pdf.",
    "questionCount": 32
  },
  {
    "id": "lesson-04",
    "title": "Lesson 4",
    "lessonLabel": "Lesson 04",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 4.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 4.pdf.",
    "questionCount": 84
  },
  {
    "id": "lesson-05",
    "title": "Lesson 5",
    "lessonLabel": "Lesson 05",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 5.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 5.pdf.",
    "questionCount": 83
  },
  {
    "id": "lesson-06",
    "title": "Lesson 6",
    "lessonLabel": "Lesson 06",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 6.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 6.pdf.",
    "questionCount": 75
  },
  {
    "id": "lesson-07",
    "title": "Lesson 7",
    "lessonLabel": "Lesson 07",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 7.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 7.pdf.",
    "questionCount": 103
  },
  {
    "id": "lesson-08",
    "title": "Lesson 8",
    "lessonLabel": "Lesson 08",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 8.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 8.pdf.",
    "questionCount": 68
  },
  {
    "id": "lesson-09",
    "title": "Lesson 9",
    "lessonLabel": "Lesson 09",
    "sourceFilename": "Nursing Care Skills Evaluation Test [English] – Lesson 9.pdf",
    "description": "Source questions imported from Nursing Care Skills Evaluation Test [English] – Lesson 9.pdf.",
    "questionCount": 20
  }
];

export const ALL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    "id": "main-paper-q001",
    "moduleId": "main-paper",
    "number": 1,
    "question": "While emptying the trash in a user's room, you get stuck by a needle that should have\nbeen placed in the sharp container. What is the first thing to do?\nපරිශීලකයෙකුගේ කාමරයේ කුණු හිස් කරන අතරතුර, sharp container (තියුණු ආයුධ බහාලුමේ) තැබිය යුතුව තිබූ ඉඳිකටුවකින් ඔබට ඇනුණි. පළමුව කළ යුත්තේ කුමක්ද?",
    "options": [
      "Try to squeeze the blood out (ලේ මිරිකා ඉවත් කිරීමට උත්සාහ කිරීම)",
      "Call your personal physician (ඔබේ පෞද්ගලික වෛද්‍යවරයා ඇමතීම)",
      "Wash the site for several hours (ඇනුණු ස්ථානය පැය ගණනක් සේදීම)",
      "Fill out an incident report (සිදුවීම් වාර්තාවක් පිරවීම)"
    ],
    "correctIndex": 2,
    "explanation": "Wash the site for several hours (ඇනුණු ස්ථානය පැය ගණනක්සේදීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q002",
    "moduleId": "main-paper",
    "number": 2,
    "question": "During dinner, a client who is HIV-positive accidently breaks a glass and cuts himself.\nWhat is the proper procedure?\nරාත්‍රී ආහාරය අතරතුර, HIV ධනාත්මක (HIV-positive) සේවාදායකයෙකු අහම්බෙන් වීදුරුවක්බිඳගෙන තමන්ටම කපා ගනී. නිසි ක්‍රියා පටිපාටිය කුමක්ද?",
    "options": [
      "Call the paramedics to treat the client (සේවාදායකයාට ප්‍රතිකාර කිරීමට හදිසි වෛද්‍ය කණ්ඩායමක් කැඳවීම)",
      "Use a long-handled mop to wipe up the blood (ලේ පිස දැමීමට දිගු මිටක් සහිත මොප් එකක්භාවිත කිරීම)",
      "Begin to fill out an incident report (සිදුවීම් වාර්තාවක් පිරවීම ආරම්භ කිරීම)",
      "Block off the area until it can be cleaned (පිරිසිදු කළ හැකි වන තෙක් එම ප්‍රදේශය අවහිර කර තැබීම)"
    ],
    "correctIndex": 3,
    "explanation": "Block off the area until it can be cleaned (පිරිසිදු කළ හැකි වනතෙක් එම ප්‍රදේශය අවහිර කර තැබීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q003",
    "moduleId": "main-paper",
    "number": 3,
    "question": "The most important way to prevent the spread of infection is:",
    "options": [
      "Hand washing (අත් සේදීම)",
      "Wearing a gown at all times (සැමවිටම ආරක්ෂිත ගවුමක් පැළඳ සිටීම)",
      "Using room sanitizer spray (කාමර සනීපාරක්ෂක ඉසින භාවිත කිරීම)",
      "Isolating every user (සෑම පරිශීලකයෙකුම හුදකලා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Hand washing (අත් සේදීම) — Standard infection control (Standard Precautions) identifies thorough hand washing as the single most effective measure to prevent transmission of infectious agents.",
    "kind": "source-mcq",
    "sinhalaText": "ආසාදන පැතිරීම වැළැක්වීමේ වඩාත්ම වැදගත් ක්‍රමය වන්නේ:"
  },
  {
    "id": "main-paper-q004",
    "moduleId": "main-paper",
    "number": 4,
    "question": "Which is a primary form of non-verbal communication that directly conveys emotions?",
    "options": [
      "Facial expressions (මුහුණේ ඉරියව්)",
      "Nodding (හිස සැලීම)",
      "Gestures (අභිනයන් / අත් ඉඟි)",
      "Speaking loudly (උස් හඬින් කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Facial expressions (මුහුණේ ඉරියව්) — Facial expressions are the most direct non-verbal indicator of a care user's emotions and comfort.",
    "kind": "source-mcq",
    "sinhalaText": "හැඟීම් සෘජුවම පෙන්වන ප්‍රධාන වාචික නොවන (Non-verbal) සන්නිවේදන ක්‍රමය කුමක්ද?"
  },
  {
    "id": "main-paper-q005",
    "moduleId": "main-paper",
    "number": 5,
    "question": "How can a care worker show they are interested and listening attentively to the user?",
    "options": [
      "Maintain gentle eye contact and nod attentively (මෘදු ඇස් සම්බන්ධතාවය පවත්වා ගෙන අවධානයෙන් හිස සැලීම)",
      "Look away while writing notes (සටහන් ලියමින් අහක බලා සිටීම)",
      "Correct the user's mistakes immediately (පරිශීලකයාගේ වැරදි වහාම නිවැරදි කිරීම)",
      "Change the subject frequently (මාතෘකාව නිතර වෙනස් කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Maintain gentle eye contact and nod attentively (මෘදු ඇස් සම්බන්ධතාවය පවත්වා ගෙන අවධානයෙන් හිස සැලීම) — Active listening (傾聴) combines eye contact at the user's level, nodding, and empathetic posture.",
    "kind": "source-mcq",
    "sinhalaText": "සත්කාර සේවකයෙකු උනන්දුවෙන් සිටින බවත් පරිශීලකයාට අවධානයෙන් සවන් දෙන බවත් පෙන්විය හැක්කේ කෙසේද?"
  },
  {
    "id": "main-paper-q006",
    "moduleId": "main-paper",
    "number": 6,
    "question": "A good way to build a relationship with a user is to:\nපරිශීලකයෙකු සමඟ හොඳ සබඳතාවක් ගොඩනඟා ගැනීමට හොඳ ක්‍රමයක් වන්නේ:",
    "options": [
      "Learn their non-verbal communication (ඔවුන්ගේ වාචික නොවන සන්නිවේදනය තේරුම් ගැනීම /\nඉගෙන ගැනීම)",
      "Compliment them every day on their outfit (සෑම දිනකම ඔවුන්ගේ ඇඳුම ගැන ප්‍රශංසා කිරීම)",
      "Learn their favourite kind of joke so you can make them laugh (ඔවුන්ව සිනස්සවීමට හැකිවන පරිදි ඔවුන් කැමතිම විහිළු වර්ගය ඉගෙන ගැනීම)",
      "Bring them home-baked cookies once a week (සතියකට වරක් නිවසේ සාදන ලද කුකීස්ඔවුන්ට ගෙනැවිත් දීම)"
    ],
    "correctIndex": 0,
    "explanation": "Learn their non-verbal communication (ඔවුන්ගේ වාචික නොවන සන්නිවේදනය ඉගෙන ගැනීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q007",
    "moduleId": "main-paper",
    "number": 7,
    "question": "Which is a good way to start a conversation with users?\nපරිශීලකයන් සමඟ සංවාදයක් ආරම්භ කිරීමට හොඳ ක්‍රමයක් වන්නේ කුමක්ද?",
    "options": [
      "\"what kind of work do you do\" (\"ඔබ කරන්නේ මොන වගේ රැකියාවක්ද?\")",
      "\"is your room warm enough\" (\"ඔබේ කාමරය ප්‍රමාණවත් තරම් උණුසුම්ද?\")",
      "\"are you feeling great today\" (\"අද ඔබට හොඳින් දැනෙනවාද?\")",
      "\"are you ready to eat breakfast\" (\"ඔබ උදෑසන ආහාරය ගැනීමට සූදානම්ද?\")"
    ],
    "correctIndex": 0,
    "explanation": "\"what kind of work do you do\" (\"ඔබ කරන්නේ මොන වගේරැකියාවක්ද?\")",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q008",
    "moduleId": "main-paper",
    "number": 8,
    "question": "What should the care worker do when a user comes out their room wearing mismatched\nslippers?\nපරිශීලකයෙකු නොගැළපෙන පාවහන් (mismatched slippers) පැළඳ තම කාමරයෙන් එළියට එන විට සත්කාර සේවකයා කළ යුත්තේ කුමක්ද?",
    "options": [
      "Tease the user about their fashion sense (පරිශීලකයාගේ විලාසිතා රටාව ගැන විහිළු කිරීම)",
      "Make the resident go back and fix their mistake (නේවාසිකයාට ආපසු ගොස් තම වරද නිවැරදිකර ගැනීමට සැලැස්වීම)",
      "Tell the user to get help next time (ඊළඟ වතාවේ උදව් ලබා ගන්නා ලෙස පරිශීලකයාට පැවසීම)",
      "Quietly ask if the user notices the slippers (පාවහන් ගැන පරිශීලකයාට අවධානය යොමු වීතිබේදැයි නිහඬව විමසීම)"
    ],
    "correctIndex": 3,
    "explanation": "Quietly ask if the user notices the slippers (පාවහන් ගැන පරිශීලකයාට අවධානය යොමු වී තිබේදැයි නිහඬව විමසීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q009",
    "moduleId": "main-paper",
    "number": 9,
    "question": "To prevent the spread of infection, how should the care worker handle soiled linens from a user's bed?",
    "options": [
      "Shake them in the air to remove any dirt (කුණු ඉවත් කිරීමට ඒවා වාතයේ ගසා දැමීම)",
      "Put them in the dirty linen container (ඒවා අපිරිසිදු රෙදි බහාලුමේ දැමීම)",
      "Place them in a neat pile on the floor (ඒවා බිම පිළිවෙළකට ගොඩගැසීම)",
      "Carry them close to the nurse aide's body (හෙද සහායකයාගේ ශරීරයට ළං කර ඒවා රැගෙන යාම)"
    ],
    "correctIndex": 1,
    "explanation": "Put them in the dirty linen container (ඒවා අපිරිසිදු රෙදි බහාලුමේ දැමීම) — Roll soiled linen inward, keep it away from your uniform, never shake it, and place it directly into the dirty linen container.",
    "kind": "source-mcq",
    "sinhalaText": "ආසාදන පැතිරීම වැළැක්වීම සඳහා, හෙද සහායකයා පරිශීලකයාගේ ඇඳේ ඇති අපිරිසිදු රෙදි කෙසේ හැසිරවිය යුතුද?"
  },
  {
    "id": "main-paper-q010",
    "moduleId": "main-paper",
    "number": 10,
    "question": "Where should used disposable supplies and soiled care items be discarded?",
    "options": [
      "Outside the user's room (පරිශීලකයාගේ කාමරයෙන් පිටත)",
      "In the designated receptacle (නියමිත කුණු බඳුනේ / බහාලුමේ)",
      "In the user's wash basket (පරිශීලකයාගේ රෙදි සෝදන කූඩයේ)",
      "In the clean utility room (පිරිසිදු උපයෝගිතා කාමරයේ / Clean utility room)"
    ],
    "correctIndex": 1,
    "explanation": "In the designated receptacle (නියමිත කුණු බඳුනේ / බහාලුමේ) — Always dispose of single-use care supplies in the designated waste container to prevent cross-contamination.",
    "kind": "source-mcq",
    "sinhalaText": "භාවිත කළ ඉවත දැමිය හැකි සැපයුම් සහ අපිරිසිදු ද්‍රව්‍ය ඉවත දැමිය යුත්තේ කොතැනද?"
  },
  {
    "id": "main-paper-q011",
    "moduleId": "main-paper",
    "number": 11,
    "question": "Which is the appropriate way of transferring a user with hemiplegia from bed to wheelchair?",
    "options": [
      "Position the wheelchair on the user's healthy side at a 20°–30° angle and lock the brakes (රෝද පුටුව පරිශීලකයාගේ නිරෝගී පැත්තේ අංශක 20–30 කෝණයකින් ස්ථානගත කර තිරිංග අගුළු දැමීම)",
      "Let the user stand before locking the wheelchair brakes (රෝද පුටුවේ තිරිංග අගුළු දැමීමට පෙර පරිශීලකයාට නැගිටීමට ඉඩ දීම)",
      "Pull the user up by holding only the paralyzed arm (අංශභාග අතින් පමණක් ඇද පරිශීලකයා ඔසවා ගැනීම)",
      "Place the wheelchair on the user's affected side with footrests down (රෝද පුටුව පරිශීලකයාගේ ආබාධිත පැත්තේ පාද ආධාරක පහළට දමා තැබීම)"
    ],
    "correctIndex": 0,
    "explanation": "Position the wheelchair on the user's healthy side at a 20°–30° angle and lock the brakes (රෝද පුටුව නිරෝගී පැත්තේ ස්ථානගත කර තිරිංග අගුළු දැමීම) — Placing the wheelchair on the unaffected side with brakes locked and footrests raised enables safe pivot transfer.",
    "kind": "source-mcq",
    "sinhalaText": "අංශභාගය ඇති පරිශීලකයෙකු ඇඳෙන් රෝද පුටුවකට මාරු කිරීමේ සුදුසු ක්‍රමය කුමක්ද?"
  },
  {
    "id": "main-paper-q012",
    "moduleId": "main-paper",
    "number": 12,
    "question": "What core principle must a care worker always uphold when supporting a user's daily living?",
    "options": [
      "Prioritizing staff convenience over user preference (පරිශීලක කැමැත්තට වඩා කාර්ය මණ්ඩල පහසුවට ප්‍රමුඛතාව දීම)",
      "Enforcing identical rigid routines for all residents (සියලු නේවාසිකයන්ට එකම දැඩි කාලසටහනක් බලකිරීම)",
      "User-centric daily lifestyle only during free hours (විවේක වේලාවන්හිදී පමණක් පරිශීලක කේන්ද්‍රීය දෛනික ජීවන රටාව)",
      "Human dignity (මානව ගරුත්වය)"
    ],
    "correctIndex": 3,
    "explanation": "Human dignity (මානව ගරුත්වය) — Respecting human dignity (尊厳の保持) and supporting independence are the foundational principles of Japanese nursing care (Kaigo).",
    "kind": "source-mcq",
    "sinhalaText": "පරිශීලකයාගේ එදිනෙදා ජීවිතයට සහාය වීමේදී සත්කාර සේවකයෙකු සැමවිටම ආරක්ෂා කළ යුතු මූලික මූලධර්මය කුමක්ද?"
  },
  {
    "id": "main-paper-q013",
    "moduleId": "main-paper",
    "number": 13,
    "question": "An airborne infection is;\nවාතය මගින් බෝවන ආසාදනයක් (Airborne infection) වන්නේ:",
    "options": [
      "Noro virus (නොරෝ වෛරසය / Noro virus)",
      "E-coli (ඊ-කෝලි / E-coli)",
      "Measles (සරම්ප / Measles)",
      "Influenza (ඉන්ෆ්ලුවෙන්සා / Influenza)"
    ],
    "correctIndex": 2,
    "explanation": "Measles (සරම්ප / Measles)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q014",
    "moduleId": "main-paper",
    "number": 14,
    "question": "Physical restraint is to restrict the user's physical movements. Which of the following is\nnot considered as a physical restraint?\nභෞතික සීමා කිරීම (Physical restraint) යනු පරිශීලකයාගේ ශාරීරික චලනයන් සීමා කිරීමයි.\nපහත සඳහන් ඒවායින් භෞතික සීමා කිරීමක් ලෙස නොසැලකෙන්නේ කුමක්ද?",
    "options": [
      "Use violence in the user's body (පරිශීලකයාගේ ශරීරයට හිංසනය/ප්‍රචණ්ඩත්වය යෙදීම)",
      "Put safety rails around the bed so that the user cannot get off the bed by himself\n(පරිශීලකයාට තනිවම ඇඳෙන් බැසීමට නොහැකි වන පරිදි ඇඳ වටා ආරක්ෂිත වැටවල් දැමීම)",
      "Administer excess amount of psychological medication (අධික මානසික ඖෂධ ප්‍රමාණයක් ලබාදීම)",
      "Lock the door of the room to keep the user inside (පරිශීලකයා ඇතුළත තබා ගැනීමට කාමරයේ දොර අගුළු දැමීම)"
    ],
    "correctIndex": 2,
    "explanation": "Administer excess amount of psychological medication (අධික මානසික ඖෂධ ප්‍රමාණයක් ලබා දීම — රසායනික සීමා කිරීමකි / Chemical restraint)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q015",
    "moduleId": "main-paper",
    "number": 15,
    "question": "Various professionals other than care workers works as a team for a user, using their\nrespective expertise. Choose the professional out of the following which is not included for\nthe nursing care team.\nසත්කාර සේවකයින්ට අමතරව විවිධ වෘත්තිකයන් තම තමන්ගේ විශේෂඥ දැනුම භාවිත කරමින් පරිශීලකයෙකු වෙනුවෙන් කණ්ඩායමක් ලෙස කටයුතු කරයි. පහත සඳහන් අය අතරින් හෙද සත්කාර කණ්ඩායමට ඇතුළත් නොවන වෘත්තිකයා තෝරන්න.",
    "options": [
      "Nurse (හෙදිය)",
      "Care manager (සත්කාර කළමනාකරු / Care manager)",
      "Care worker (සත්කාර සේවකයා / Care worker)",
      "Social worker (සමාජ සේවකයා / Social worker)"
    ],
    "correctIndex": 3,
    "explanation": "Social worker (සමාජ සේවකයා / Social worker)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q016",
    "moduleId": "main-paper",
    "number": 16,
    "question": "When supporting user's self-decision, choose one appropriate answer as the point that\nyou have to know.\nපරිශීලකයාගේ ස්වයං තීරණ ගැනීමට (self-decision) සහාය වන විට, ඔබ දැනගත යුතුකරුණ ලෙස සුදුසු පිළිතුරක් තෝරන්න.",
    "options": [
      "Opinion of the family members (පවුලේ සාමාජිකයන්ගේ මතය)",
      "What the person who needs care wants (සත්කාර අවශ්‍ය පුද්ගලයාට අවශ්‍ය දේ)",
      "Consideration of the doctor (වෛද්‍යවරයාගේ සලකා බැලීම)",
      "Economic condition (ආර්ථික තත්ත්වය)"
    ],
    "correctIndex": 1,
    "explanation": "What the person who needs care wants (සත්කාර අවශ්‍ය පුද්ගලයාට අවශ්‍ය දේ)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q017",
    "moduleId": "main-paper",
    "number": 17,
    "question": "Regarding the physical changes in the body along with aging, choose one correct answer.",
    "options": [
      "Differences among individuals are few (පුද්ගලයන් අතර වෙනස්කම් අල්පය)",
      "It becomes difficult to hear low-pitched sounds first (පළමුව පහත් ශබ්ද ඇසීමට අපහසු වේ)",
      "It becomes easier to regulate body temperature (ශරීර උෂ්ණත්වය පාලනය කිරීම පහසු වේ)",
      "Field of vision becomes narrower (දෘෂ්ටි පරාසය පටු වේ)"
    ],
    "correctIndex": 3,
    "explanation": "Field of vision becomes narrower (දෘෂ්ටි පරාසය පටු වේ) — With aging, peripheral vision narrows, high-pitched sounds become harder to hear, and individual variation actually increases.",
    "kind": "source-mcq",
    "sinhalaText": "වයසට යාමත් සමඟ ශරීරයේ සිදුවන වෙනස්කම් සම්බන්ධයෙන්, එක් නිවැරදි පිළිතුරක් තෝරන්න."
  },
  {
    "id": "main-paper-q018",
    "moduleId": "main-paper",
    "number": 18,
    "question": "Among the explanations below for communication with care users, choose one appropriate answer.",
    "options": [
      "Always speak in a fast and overly loud voice (සැමවිටම ඉතා වේගවත් හා අධික උස් කටහඬින් කතා කිරීම)",
      "Keep silent throughout care (සත්කාරය පුරාම නිහඬව සිටීම)",
      "Listen to them while watching their facial expressions (ඔවුන්ගේ මුහුණේ ඉරියව් දෙස බලා සවන් දීම)",
      "Try not to use gestures and hand gestures (අභිනයන් සහ අත් ඉඟි භාවිත නොකිරීමට උත්සාහ කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Listen to them while watching their facial expressions (ඔවුන්ගේ මුහුණේ ඉරියව් දෙස බලා සවන් දීම) — Observing non-verbal cues like facial expressions helps care workers accurately understand feelings and discomfort.",
    "kind": "source-mcq",
    "sinhalaText": "සත්කාර පරිශීලකයන් සමඟ සන්නිවේදනය සඳහා පහත ඇති පැහැදිලි කිරීම් අතරින්, එක් සුදුසු පිළිතුරක් තෝරන්න."
  },
  {
    "id": "main-paper-q019",
    "moduleId": "main-paper",
    "number": 19,
    "question": "Among the explanation below for the care of excretion, choose one appropriate answer.\nමළපහ/මුත්‍ර පිට කිරීමේ සත්කාරය (care of excretion) සඳහා පහත පැහැදිලි කිරීම් අතරින්,\nඑක් සුදුසු පිළිතුරක් තෝරන්න.",
    "options": [
      "Refrain from taking water when user has diarrhea (පරිශීලකයාට පාචනය ඇති විට ජලය පානය කිරීමෙන් වැළකී සිටීම)",
      "For the improvement of constipation, exercise isn't effective (මලබද්ධය වැඩිදියුණු කිරීම සඳහාව්‍යායාම ඵලදායී නොවේ)",
      "Use positively diapers (ඩයපර් ධනාත්මකව/සක්‍රීයව භාවිත කිරීම)",
      "Be considerate of privacy (පෞද්ගලිකත්වය ගැන සැලකිලිමත් වීම)"
    ],
    "correctIndex": 3,
    "explanation": "Be considerate of privacy (පෞද්ගලිකත්වය ගැන සැලකිලිමත්වීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q020",
    "moduleId": "main-paper",
    "number": 20,
    "question": "Among the explanation below when supporting to put on/off a shirt to care a person\nwith paralysis on the left hand side, choose one appropriate answer.\nවම් අත පැත්තේ අංශභාගය (paralysis on the left hand side) ඇති පුද්ගලයෙකුට කමිසයක්ඇඳීමට හෝ ගැලවීමට සහාය වන විට, පහත පැහැදිලි කිරීම් අතරින් එක් සුදුසු පිළිතුරක්තෝරන්න.",
    "options": [
      "Refrain from using clothes with buttons (බොත්තම් සහිත ඇඳුම් භාවිත කිරීමෙන් වැළකී සිටීම)",
      "When putting on, put first the left arm and through the sleeve (අඳින විට, පළමුව වම් අත අත්බාහුව හරහා දැමීම)",
      "When putting off, take off the arm through the sleeve (ගලවන විට, අත් බාහුව හරහා අත පිටතට ගැනීම)",
      "Provide total assistance (සම්පූර්ණ සහාය ලබා දීම)"
    ],
    "correctIndex": 1,
    "explanation": "When putting on, put first the left arm and through the sleeve\n(අඳින විට, පළමුව වම් අත අත් බාහුව හරහා දැමීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q021",
    "moduleId": "main-paper",
    "number": 21,
    "question": "For the basic support to walking with cane with a person with paralysis on the right\nside, choose one appropriate answer.\nදකුණු පැත්තේ අංශභාගය (paralysis on the right side) ඇති පුද්ගලයෙකුට වේවැලකින් (cane)\nඇවිදීමට මූලික සහාය ලබා දීම සඳහා, එක් සුදුසු පිළිතුරක් තෝරන්න.",
    "options": [
      "Caregiver stands at the right front position (සත්කාරකයා දකුණු ඉදිරිපස ස්ථානයේ සිටියි)",
      "Caregiver stands at the right back position (සත්කාරකයා දකුණු පිටුපස ස්ථානයේ සිටියි)",
      "Caregiver stands at the left front position (සත්කාරකයා වම් ඉදිරිපස ස්ථානයේ සිටියි)",
      "Caregiver stands at the left back position (සත්කාරකයා වම් පිටුපස ස්ථානයේ සිටියි)"
    ],
    "correctIndex": 1,
    "explanation": "Caregiver stands at the right back position (සත්කාරකයා දකුණුපිටුපස ස්ථානයේ සිටියි)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q022",
    "moduleId": "main-paper",
    "number": 22,
    "question": "Which of the following statement is true about the lever principle?\nලීවර මූලධර්මය (lever principle) පිළිබඳව පහත ප්‍රකාශ අතරින් සත්‍ය වන්නේ කුමක්ද?",
    "options": [
      "Point your feet in the opposite direction (ඔබේ පාද ප්‍රතිවිරුද්ධ දිශාවට යොමු කිරීම)",
      "When lifting, you should use the smallest muscle group of your body (ඔසවන විට, ඔබ ඔබේශරීරයේ කුඩාම මාංශ පේශි කාණ්ඩය භාවිත කළ යුතුය)",
      "To prevent lower back pain when lifting, use the smallest energy of the body (ඔසවන විට කොන්දේ වේදනාව වැළැක්වීම සඳහා, ශරීරයේ කුඩාම ශක්තිය භාවිත කිරීම)",
      "Use a wide base of support (පුළුල් ආධාරක පදනමක් / Wide base of support භාවිත කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Use a wide base of support (පුළුල් ආධාරක පදනමක් භාවිත කිරීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q023",
    "moduleId": "main-paper",
    "number": 23,
    "question": "Which of the following is easy to aspirate?\nපහත සඳහන් ඒවායින් ශ්වාසනාලයට/පෙනහළුවලට යාමේ (aspiration) අවදානම පහසුවෙන්ඇතිවන්නේ කුමකින්ද?",
    "options": [
      "Yoghurt (යෝගට් / Yoghurt)",
      "Porridge (කැඳ / Porridge)",
      "Miso soup (මිසෝ සුප් / Miso soup)",
      "Jelly (ජෙලි / Jelly)"
    ],
    "correctIndex": 2,
    "explanation": "Miso soup (මිසෝ සුප් / Miso soup)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q024",
    "moduleId": "main-paper",
    "number": 24,
    "question": "Which is appropriate about heat shock?\nතාප කම්පනය (heat shock) පිළිබඳව සුදුසු වන්නේ කුමක්ද?",
    "options": [
      "It is common during summer (එය ගිම්හාන කාලයේදී බහුලව දක්නට ලැබේ)",
      "Eliminate the temperature difference between changing room and the bathroom (ඇඳුම් මාරුකරන කාමරය සහ නාන කාමරය අතර උෂ්ණත්ව වෙනස ඉවත් කිරීම)",
      "Common to people with high blood pressure (අධි රුධිර පීඩනය ඇති පුද්ගලයින්ට බහුලව ඇතිවේ)",
      "The temperature of the bath tub is at 38°C (නාන තටාකයේ උෂ්ණත්වය 38°C කි)"
    ],
    "correctIndex": 1,
    "explanation": "Eliminate the temperature difference between changing room and\nthe bathroom (ඇඳුම් මාරු කරන කාමරය සහ නාන කාමරය අතර උෂ්ණත්ව වෙනස ඉවත් කිරීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q025",
    "moduleId": "main-paper",
    "number": 25,
    "question": "Appropriate prevention of disuse syndrome;\nඅක්‍රියතා සින්ඩ්‍රෝමය (disuse syndrome) වැළැක්වීමේ සුදුසු ක්‍රමය:",
    "options": [
      "Change body position every 4 hours (සෑම පැය 4කට වරක් ශරීර ඉරියව් වෙනස් කිරීම)",
      "Have a rest and spend the time in supine position (විවේක ගෙන උඩුබැලි අතට / supine\nඉරියව්වෙන් කාලය ගත කිරීම)",
      "ADL perform in full support (ADL / එදිනෙදා ක්‍රියාකාරකම් සම්පූර්ණ සහාය ඇතිව සිදු කිරීම)",
      "Incorporate individual recreational activities (පුද්ගලික විනෝදාත්මක ක්‍රියාකාරකම් ඇතුළත් කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Incorporate individual recreational activities (පුද්ගලික විනෝදාත්මක ක්‍රියාකාරකම් ඇතුළත් කිරීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q026",
    "moduleId": "main-paper",
    "number": 26,
    "question": "Mr. Kazuo receives news that his son died in an accident. He seems depressed and stays in one corner of the room. How should you approach Mr. Kazuo?\nකසුඕ මහතාට තම පුතා අනතුරකින් මියගිය බවට ආරංචිය ලැබේ. ඔහු දැඩි ශෝකයෙන් සිටින බව පෙනෙන අතර කාමරයේ එක් මුල්ලක නිහඬව රැඳී සිටියි. ඔබ කසුඕ මහතා වෙත ළඟා විය යුත්තේ කෙසේද?",
    "options": [
      "Give him space and time to grieve (ඔහුට ශෝකය විඳීමට අවශ්‍ය ඉඩකඩ සහ කාලය ලබා දෙන්න)",
      "Listen to him and let him say what he wants to say (ඔහුට පැවසීමට අවශ්‍ය දේට අවධානයෙන් සවන් දෙන්න)",
      "Crack some jokes (විහිළු කිහිපයක් කියන්න)",
      "Encourage him to join recreational activities (විනෝදාත්මක ක්‍රියාකාරකම්වලට සහභාගි වීමට ඔහු දිරිමත් කරන්න)"
    ],
    "correctIndex": 1,
    "explanation": "Correct answer: B — Listen to him and let him say what he wants to say. Give him a calm, supportive presence, listen without pressure, and allow him to express his grief in his own time. Do not try to cheer him up with jokes or push him into activities. (නිවැරදි පිළිතුර: B — ඔහුට පැවසීමට අවශ්‍ය දේට අවධානයෙන් සවන් දෙන්න. බලපෑම් නොකර සන්සුන්ව සහ සහයෝගයෙන් ඔහු අසල සිටිමින්, ඔහුගේ ශෝකය ඔහුට කැමති වේලාවට ප්‍රකාශ කිරීමට ඉඩ දෙන්න. විහිළු කියා ඔහුගේ දුක අඩු කිරීමට උත්සාහ කිරීම හෝ ක්‍රියාකාරකම්වලට බලෙන් යොමු කිරීම සුදුසු නොවේ.)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q027",
    "moduleId": "main-paper",
    "number": 27,
    "question": "If an accident occurs in the workplace which action should you take?\nසේවා ස්ථානයේ අනතුරක් සිදු වුවහොත් ඔබ ගත යුතු ක්‍රියාමාර්ගය කුමක්ද?",
    "options": [
      "Willingly leave for days until condition is ok (තත්ත්වය යහපත් වන තුරු කැමැත්තෙන්ම දින ගණනක් බැහැරව සිටීම)",
      "Think of the cause of the situation (එම තත්ත්වයට හේතුව ගැන සිතීම)",
      "Keep a record, record it. (වාර්තාවක් තබා ගැනීම, එය සටහන් කිරීම.)",
      "Continue on working no matter the situation (තත්ත්වය කුමක් වුවත් දිගටම වැඩ කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Keep a record, record it. (වාර්තාවක් තබා ගැනීම, එය සටහන්කිරීම.)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q028",
    "moduleId": "main-paper",
    "number": 28,
    "question": "Which is the best description of autonomy on the following (ff) sentences?\nපහත ප්‍රකාශ අතරින් ස්වයං පාලනය/ස්වාධීනත්වය (autonomy) වඩාත් හොඳින් විස්තර කරන්නේ කුමක්ද?",
    "options": [
      "Let the user decide which to eat (කුමක් අනුභව කළ යුතුද යන්න තීරණය කිරීමට පරිශීලකයාට ඉඩ දීම)",
      "It is the act of treating each user fairly (එය එක් එක් පරිශීලකයාට සාධාරණව සැලකීමේක්‍රියාවයි)",
      "Decide for the user which dress to put on since the patient has dementia (රෝගියාට ඩිමෙන්ශියා ඇති බැවින් කුමන ඇඳුමක් ඇඳිය යුතුද යන්න පරිශීලකයා වෙනුවෙන් තීරණය කිරීම)",
      "Proper execution of task given to care workers (සත්කාර සේවකයින්ට ලබා දී ඇති කාර්යය නිසිලෙස ඉටු කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Let the user decide which to eat (කුමක් අනුභව කළ යුතුද යන්න තීරණය කිරීමට පරිශීලකයාට ඉඩ දීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q029",
    "moduleId": "main-paper",
    "number": 29,
    "question": "It is where the absorption of nutrients happen,\nපෝෂ්‍ය පදාර්ථ අවශෝෂණය (absorption of nutrients) සිදුවන්නේ මෙහිදීය:",
    "options": [
      "Large intestine (මහා අන්ත්‍රය / Large intestine)",
      "Small intestine (කුඩා අන්ත්‍රය / Small intestine)",
      "Stomach (ආමාශය / Stomach)",
      "Esophagus (ග්‍රසනිකාව / Esophagus)"
    ],
    "correctIndex": 1,
    "explanation": "Small intestine (කුඩා අන්ත්‍රය / Small intestine)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q030",
    "moduleId": "main-paper",
    "number": 30,
    "question": "The best way to prevent the spread of infection in the workplace is to:",
    "options": [
      "Refuse care to any person with psoriasis (සමේ රෝගයක් ඇති පුද්ගලයෙකුට සත්කාර කිරීම ප්‍රතික්ෂේප කිරීම)",
      "Wash your hands with soap and running water after contact with a user (පරිශීලකයෙකු සමඟ සම්බන්ධ වීමෙන් පසු සබන් සහ ගලා යන ජලයෙන් අත් සේදීම)",
      "Reuse disposable gloves between users to save supplies (සැපයුම් ඉතිරි කිරීමට පරිශීලකයන් අතර ඉවත දැමිය හැකි අත්වැසුම් නැවත භාවිත කිරීම)",
      "Skip hand washing whenever gloves are worn (අත්වැසුම් පැළඳ සිටින විට අත් සේදීම මඟ හැරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Wash your hands with soap and running water after contact with a user (පරිශීලකයෙකු සමඟ සම්බන්ධ වීමෙන් පසු සබන් සහ ගලා යන ජලයෙන් අත් සේදීම) — Hand hygiene before and after every user contact is mandatory even when gloves are used.",
    "kind": "source-mcq",
    "sinhalaText": "සේවා ස්ථානයේ ආසාදන පැතිරීම වැළැක්වීමේ හොඳම ක්‍රමය වන්නේ:"
  },
  {
    "id": "main-paper-q031",
    "moduleId": "main-paper",
    "number": 31,
    "question": "Proper sitting posture in the toilet;\nවැසිකිළියේ නිවැරදිව වාඩි වී සිටින ඉරියව්ව (Proper sitting posture in the toilet):",
    "options": [
      "(A ඉරියව්ව — 90° කෝණයකින් කෙළින් වාඩි වී සිටීම)",
      "(B ඉරියව්ව — පාද ආධාරකයක් මත තබා මඳක් ඉදිරියට නැඹුරු වී සිටීම)",
      "(C ඉරියව්ව — දුරකථනයක් භාවිත කරමින් වාඩි වී සිටීම)",
      "(D ඉරියව්ව — කොන්ද නවාගෙන දුරකථනයක් දෙස බලමින් වාඩි වී සිටීම)"
    ],
    "correctIndex": 1,
    "explanation": "Option B — feet supported on a small footstool and leaning slightly forward. The original PDF explicitly marks B as the correct answer. (B — පාද කුඩා ආධාරකයක් මත තබා මඳක් ඉදිරියට නැඹුරු වී සිටීම. මුල් PDF එකේ නිවැරදි පිළිතුර B ලෙස පැහැදිලිව දක්වා ඇත.)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q032",
    "moduleId": "main-paper",
    "number": 32,
    "question": "Urinary incontinence appear as we grow older. Which statement best describe it?\nවයසට යත්ම මුත්‍රා පාලනය කරගත නොහැකි වීම (Urinary incontinence) ඇති විය හැක. එය වඩාත් හොඳින් විස්තර කරන ප්‍රකාශය කුමක්ද?",
    "options": [
      "It is more common in man and woman (එය පිරිමි සහ කාන්තා දෙපාර්ශ්වයේම බහුලව දක්නට ලැබේ)",
      "It is the dysfunction where bladder cannot store urine (එය මුත්‍රාශයට මුත්‍රා රඳවා තබා ගත නොහැකි වන ක්‍රියාකාරී අක්‍රමතාවයකි)",
      "Can cause kidney diseases (වකුගඩු රෝග ඇති කළ හැක)",
      "The kidney felt sudden pressure (වකුගඩුවට හදිසි පීඩනයක් දැනුණි)"
    ],
    "correctIndex": 1,
    "explanation": "It is the dysfunction where bladder cannot store urine (එය මුත්‍රාශයට මුත්‍රා රඳවා තබා ගත නොහැකි වන ක්‍රියාකාරී අක්‍රමතාවයකි)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q033",
    "moduleId": "main-paper",
    "number": 33,
    "question": "Ms.Suzuki just finished her meal. Which position should you let Ms. Suzuki rest?\nසුසුකි මහත්මිය දැන්ම ඇගේ ආහාරය අවසන් කළාය. සුසුකි මහත්මියට විවේක ගැනීමට ඔබ සලස්වන්නේ කුමන ඉරියව්වකින්ද?",
    "options": [
      "Supine (උඩුබැලි අතට වැතිර සිටීම / Supine)",
      "Right Lateral Recumbent (දකුණු පැත්තට ඇලවී සිටීම / Right Lateral Recumbent)",
      "Fowler's (ෆවුලර් ඉරියව්ව - අර්ධ වශයෙන් හිස ඔසවා සිටීම / Fowler's)",
      "Prone (මුනින් අතට වැතිර සිටීම / Prone)"
    ],
    "correctIndex": 2,
    "explanation": "Fowler's (ෆවුලර් ඉරියව්ව / Fowler's — ආහාර ජීර්ණයට පහසුවන අතර ශ්වාසනාලයට ආහාර යාම වළක්වයි)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q034",
    "moduleId": "main-paper",
    "number": 34,
    "question": "Which of the following assistance is best about grooming?\nපෞද්ගලික පෙනුම සහ සැරසීම (grooming) සම්බන්ධයෙන් පහත සහායන් අතරින් වඩාත්සුදුසු වන්නේ කුමක්ද?",
    "options": [
      "Help her/him on applying heavy makeup (ඇයට/ඔහුට තද මේකප් / heavy makeup දැමීමට උදව්කිරීම)",
      "Brush her hair to remove dirt (අපිරිසිදු ඉවත් කිරීමට ඇගේ කෙස් පීරීම)",
      "Massage in between toes of a user with diabetic (දියවැඩියාව ඇති පරිශීලකයෙකුගේ ඇඟිලිඅතර සම්බාහනය කිරීම)",
      "Cut the nails in a curve manner (නියපොතු වක්‍රාකාරව කැපීම)\nNursing Care Skills Evaluation Test (English + සිංහල)"
    ],
    "correctIndex": 1,
    "explanation": "Brush her hair to remove dirt (අපිරිසිදු ඉවත් කිරීමට ඇගේ කෙස්පීරීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q035",
    "moduleId": "main-paper",
    "number": 35,
    "question": "Choose one that is not appropriate to help the user sleep.\nපරිශීලකයාට නින්ද යාමට උපකාර කිරීම සඳහා සුදුසු නොවන එකක් තෝරන්න.",
    "options": [
      "Recommend that [exercise properly in the day time] (දිවා කාලයේදී නිසි ලෙස ව්‍යායාම කරනලෙස නිර්දේශ කිරීම)",
      "Open the curtain in the morning and encourage them to take in the sun (උදෑසන තිර රෙදිවිවර කර හිරු එළිය ලබා ගැනීමට ඔවුන් දිරිමත් කිරීම)",
      "Prepare clean, dry bedding (පිරිසිදු, වියළි ඇඳ ඇතිරිලි සකස් කිරීම)",
      "Recommend that you eat and go to bed immediately (ආහාර ගත් වහාම නින්දට යන ලෙස නිර්දේශ කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Recommend that you eat and go to bed immediately (ආහාර ගත්වහාම නින්දට යන ලෙස නිර්දේශ කිරීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q036",
    "moduleId": "main-paper",
    "number": 36,
    "question": "Choose the option that demonstrates the correct application of body mechanics.\nනිවැරදි ශරීර යාන්ත්‍ර විද්‍යා මූලධර්ම භාවිත කරන ආකාරය පෙන්වන විකල්පය තෝරන්න.",
    "options": [
      "A. Keep the back straight and move the load using a stable posture close to the body (කොන්ද කෙළින් තබාගෙන, ස්ථාවර ඉරියව්වකින් බර ශරීරයට ළං කරගෙන චලනය කිරීම)",
      "B. Bend from the waist with the knees straight when lifting (බර එසවීමේදී දණහිස් නොනමා ඉණෙන් ඉදිරියට නැමීම)",
      "C. Twist the trunk while carrying a load (බරක් රැගෙන යන අතරතුර ශරීරයේ මැද කොටස ඇඹරීම)",
      "D. Hold the load away from the body with the arms extended (අත් දිගු කර බර ශරීරයෙන් ඈත් කර අල්ලා ගැනීම)"
    ],
    "correctIndex": 0,
    "explanation": "A is the correct posture shown in the matching source body-mechanics illustration. The safe principles are a stable/wide base of support, keeping the load close, maintaining a straight back, and avoiding twisting. (A නිවැරදි ඉරියව්වයි. ආරක්ෂිත මූලධර්ම වන්නේ පුළුල් හා ස්ථාවර ආධාරක පදනමක් පවත්වා ගැනීම, බර ශරීරයට ළං කර තබා ගැනීම, කොන්ද කෙළින් තබා ගැනීම සහ ශරීරය ඇඹරීමෙන් වැළකීමයි.)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q037",
    "moduleId": "main-paper",
    "number": 37,
    "question": "Mechanism of hearing is aided with the ear. Which of the following part of the ear\nchanges the received vibration of the sound wave into signals?\nශ්‍රවණ යාන්ත්‍රණය කන ආශ්‍රයෙන් සිදු වේ. ලැබෙන ශබ්ද තරංග කම්පන සංඥා (signals)\nබවට පරිවර්තනය කරන්නේ කනේ පහත සඳහන් කුමන කොටසද?",
    "options": [
      "Cochlea (කර්ණශංඛය / Cochlea)",
      "Auditory ossicles (ශ්‍රවණ අස්ථිකා / Auditory ossicles)",
      "Tympanic membrane (කර්ණපටහය - කන් බෙරය / Tympanic membrane)",
      "Auditory nerves (ශ්‍රවණ ස්නායු / Auditory nerves)"
    ],
    "correctIndex": 0,
    "explanation": "Cochlea (කර්ණශංඛය / Cochlea)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q038",
    "moduleId": "main-paper",
    "number": 38,
    "question": "Physical disability is a state in which a person has damaged limbs or trunk and having\ndifficulties in daily living due to that. Which of the following is correct regarding physical\ndisability?\nශාරීරික ආබාධිතභාවය (Physical disability) යනු පුද්ගලයෙකුගේ අත් පා හෝ කඳට හානිසිදුවී ඒ හේතුවෙන් එදිනෙදා ජීවිතයේ අපහසුතා ඇති වන තත්ත්වයකි. ශාරීරික ආබාධිතභාවය සම්බන්ධයෙන් පහත ප්‍රකාශ අතරින් නිවැරදි වන්නේ කුමක්ද?",
    "options": [
      "Degree of difficulty of daily activities are same from person to person if the damaged region\nof the body is same for them. (ශරීරයේ හානියට පත් කොටස සමාන නම්, එදිනෙදා ක්‍රියාකාරකම්වල දුෂ්කරතා මට්ටම පුද්ගලයාගෙන් පුද්ගලයාට සමාන වේ.)",
      "Physical disability occurs concurrently with Intellectual disability (ශාරීරික ආබාධිතභාවය බුද්ධිමය ආබාධිතභාවය සමඟ එකවර සිදු වේ)",
      "Sometimes intellectual disability occurs concurrently with motor dysfunction (සමහර විට චාලක අක්‍රියතාව සමඟ බුද්ධිමය ආබාධිතභාවය එකවර ඇති වේ)",
      "Assistive devices can be used to treat intellectual disability (බුද්ධිමය ආබාධිතභාවයට ප්‍රතිකාර කිරීම සඳහා සහායක උපකරණ / Assistive devices භාවිත කළ හැක)"
    ],
    "correctIndex": 2,
    "explanation": "Sometimes intellectual disability occurs concurrently with motor\ndysfunction (සමහර විට චාලක අක්‍රියතාව සමඟ බුද්ධිමය ආබාධිතභාවය එකවර ඇති වේ)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q039",
    "moduleId": "main-paper",
    "number": 39,
    "question": "The causative diseases of dementia exclude;\nඩිමෙන්ශියා (Dementia) රෝගය ඇති කරන රෝග අතරින් ඇතුළත් නොවන්නේ (exclude):",
    "options": [
      "Vascular dementia (සනාල ඩිමෙන්ශියා / Vascular dementia)",
      "Alzheimer type (ඇල්සයිමර් වර්ගය / Alzheimer type)",
      "Parietal dementia (පැරියෙටල් ඩිමෙන්ශියා / Parietal dementia)",
      "Frontotemporal dementia (ෆ්‍රොන්ටොටෙම්පෝරල් ඩිමෙන්ශියා / Frontotemporal dementia)"
    ],
    "correctIndex": 2,
    "explanation": "Parietal dementia (පැරියෙටල් ඩිමෙන්ශියා / Parietal dementia)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q040",
    "moduleId": "main-paper",
    "number": 40,
    "question": "Memory impairment is one of the peripheral symptoms of dementia (BPSD);\nමතක ශක්තිය දුර්වල වීම (Memory impairment) ඩිමෙන්ශියා රෝගයේ පර්යන්ත රෝග ලක්ෂණ (BPSD) වලින් එකකි;",
    "options": [
      "Yes (ඔව්)",
      "[No — Truncated in PDF] (නැත - PDF හි කැපී ඇත)"
    ],
    "correctIndex": 1,
    "explanation": "No (මතක ශක්තිය දුර්වල වීම ඩිමෙන්ශියා රෝගයේ ප්‍රධාන රෝග ලක්ෂණයක් / Core symptom වන අතර BPSD හෙවත් පර්යන්ත රෝග ලක්ෂණයක් නොවේ)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q041",
    "moduleId": "main-paper",
    "number": 41,
    "question": "In wheelchair assistance, the wheelchair shall better go forward when going down a\nslope.\nරෝද පුටු සහායේදී, බෑවුමකින් (slope) පහළට යන විට රෝද පුටුව ඉදිරියට (forward) ගෙන යාම වඩා හොඳය.",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත — බෑවුමකින් පහළට යන විට ආරක්ෂාව සඳහා රෝද පුටුව පිටුපසට / backward ගෙන යා යුතුය)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q042",
    "moduleId": "main-paper",
    "number": 42,
    "question": "Before you perform bathing of the care user, which of the following you should\nconsider?\nසත්කාර ලබන පරිශීලකයා නෑවීමට පෙර, පහත සඳහන් ඒවායින් ඔබ සලකා බැලිය යුත්තේකුමක්ද?",
    "options": [
      "Check the room temperature (කාමරයේ උෂ්ණත්වය පරීක්ෂා කිරීම)",
      "Prepare clothes, towel, etc. in advance (ඇඳුම්, තුවා ආදිය කලින් සූදානම් කර තැබීම)",
      "Check the user's condition and explain to him/her what are you going to perform\n(පරිශීලකයාගේ තත්ත්වය පරීක්ෂා කර ඔබ කිරීමට යන්නේ කුමක්දැයි ඔහුට/ඇයට පැහැදිලි කිරීම)",
      "All of above (ඉහත සියල්ල)"
    ],
    "correctIndex": 3,
    "explanation": "All of above (ඉහත සියල්ල)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q043",
    "moduleId": "main-paper",
    "number": 43,
    "question": "Quality of life is important for the care user. Which best promote the QOL of the user?\nසත්කාර ලබන පරිශීලකයාට ජීවන තත්ත්වය (Quality of Life - QOL) වැදගත් වේ.\nපරිශීලකයාගේ QOL වඩාත් හොඳින් ප්‍රවර්ධනය කරන්නේ කුමක්ද?",
    "options": [
      "Ask them what they want to do and allow them to experience it (ඔවුන්ට කිරීමට අවශ්‍ය දේවිමසා එය අත්විඳීමට ඔවුන්ට ඉඩ දීම)",
      "Give them a task to do even if they refused it (ඔවුන් එය ප්‍රතික්ෂේප කළත් කිරීමට කාර්යයක්ලබා දීම)",
      "Make them to do physical/mental activities to avoid disuse syndrome (අක්‍රියතා සින්ඩ්‍රෝමය වළක්වා ගැනීම සඳහා ශාරීරික/මානසික ක්‍රියාකාරකම් කිරීමට ඔවුන්ට සැලැස්වීම)",
      "If there is a family allow them to join and be with their family (පවුලක් සිටී නම් ඔවුන්ට සම්බන්ධ වී තම පවුල සමඟ සිටීමට ඉඩ දීම)"
    ],
    "correctIndex": 0,
    "explanation": "Ask them what they want to do and allow them to experience it\n(ඔවුන්ට කිරීමට අවශ්‍ය දේ විමසා එය අත්විඳීමට ඔවුන්ට ඉඩ දීම)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q044",
    "moduleId": "main-paper",
    "number": 44,
    "question": "Which of the following is true about quality of life?\nජීවන තත්ත්වය (Quality of Life) පිළිබඳව පහත ප්‍රකාශ අතරින් සත්‍ය වන්නේ කුමක්ද?",
    "options": [
      "The top most priority is to give activities concerning ADL (ADL සම්බන්ධ ක්‍රියාකාරකම් ලබා දීම ප්‍රමුඛතම කාර්යය වේ)",
      "Focuses on the happiness of the user (පරිශීලකයාගේ සතුට කෙරෙහි අවධානය යොමු කරයි)",
      "Environmental factors should be consider when giving activities (ක්‍රියාකාරකම් ලබා දීමේදීපාරිසරික සාධක සලකා බැලිය යුතුය)",
      "It is to treat each individual normally (එය එක් එක් පුද්ගලයාට සාමාන්‍ය ලෙස සැලකීමයි)"
    ],
    "correctIndex": 1,
    "explanation": "Focuses on the happiness of the user (පරිශීලකයාගේ සතුටකෙරෙහි අවධානය යොමු කරයි)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "main-paper-q045",
    "moduleId": "main-paper",
    "number": 45,
    "question": "Our spinal cord shape looks like;\nඅපගේ කොඳු ඇට පෙළේ/සුෂුම්නාවේ හැඩය පෙනෙන්නේ:",
    "options": [
      "Letter S (S අකුර මෙන්)",
      "Letter C (C අකුර මෙන්)",
      "Letter I (I අකුර මෙන්)",
      "Letter W (W අකුර මෙන්)"
    ],
    "correctIndex": 0,
    "explanation": "Letter S (S අකුර මෙන්)",
    "kind": "mcq",
    "sinhalaText": ""
  },
  {
    "id": "lesson-02-q001",
    "moduleId": "lesson-02",
    "number": 1,
    "question": "When washing your hands, apply the soap",
    "options": [
      "Before turning on the faucet (කරාමය විවෘත කිරීමට පෙර)",
      "After wetting your hands (අත් තෙත් කළ පසු)",
      "Before wetting your hands (අත් තෙත් කිරීමට පෙර)",
      "After removing the gloves (අත්වැසුම් ගැලවූ පසු)"
    ],
    "correctIndex": 1,
    "explanation": "After wetting your hands (අත් තෙත් කළ පසු)",
    "kind": "mcq",
    "sinhalaText": "අත් සෝදන විට, සබන් ආලේප කළ යුත්තේ"
  },
  {
    "id": "lesson-02-q002",
    "moduleId": "lesson-02",
    "number": 2,
    "question": "All body fluids are considered infectious EXCEPT,",
    "options": [
      "semen (ශුක්‍ර තරලය / semen)",
      "saliva (කෙළ / saliva)",
      "blood (රුධිරය / blood)",
      "sweat (දහඩිය / sweat)"
    ],
    "correctIndex": 3,
    "explanation": "sweat (දහඩිය / sweat)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා හැර අනෙකුත් සියලුම ශරීර තරල ආසාදනකාරක ලෙස සැලකේ:"
  },
  {
    "id": "lesson-02-q003",
    "moduleId": "lesson-02",
    "number": 3,
    "question": "All are the types of pathogens EXCEPT,",
    "options": [
      "Ebola (ඉබෝලා / Ebola)",
      "Fungus (දිලීර / Fungus)",
      "Virus (වවර / Virus)",
      "Bacteria (බැේීරියා / Bacteria)"
    ],
    "correctIndex": 0,
    "explanation": "Ebola (ඉබෝලා / Ebola) (Ebola is a specific viral disease/virus rather than one of the general\nmicrobial pathogen categories like fungus, virus, and bacteria.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා හැර අනෙකුත් සියල්ල රෝග කාරක (pathogens) වර්ග වේ:"
  },
  {
    "id": "lesson-02-q004",
    "moduleId": "lesson-02",
    "number": 4,
    "question": "It refers to the user's continuing lifestyle without being subjected to prejudice and with human rights respected.",
    "options": [
      "QOL (QOL / ජීවන තත්ත්වය)",
      "Normalization (මානයකරණය / Normalization)",
      "user centric daily life-style (පරිශීලක සේන්ීය වදනික ජීවන රටාව)",
      "Human dignity (මානව ගරුත්වය)"
    ],
    "correctIndex": 1,
    "explanation": "Normalization (මානයකරණය / Normalization)",
    "kind": "mcq",
    "sinhalaText": "පූර්වග්‍රහයන්ට ලේ නොවී හ මානව හිමිකම්වලට ගරු කරමින් පරිශීලකයාගේ ජීවන රටාව අඛණ්ඩව පවත්වාගෙන යාම මෙයින් අදහ  කෙරේ:"
  },
  {
    "id": "lesson-02-q005",
    "moduleId": "lesson-02",
    "number": 5,
    "question": "How can you give a user some independence when he must be fed?",
    "options": [
      "Play mu music during meal time (ආහාර සේලාසේදී ංගීතය වාදනය කිරීම)",
      "Ask which food he would like to eat (ඔහු කැමති කුමන ආහාරයේ අනුභව කිරීමටදැයි විමසීම)",
      "Use colourful dishes and napkins (වර්ණවත් භාජන හ නැප්කකින් භාවිත කිරීම)",
      "Always stand to feed the user (පරිශීලකයාට ආහාර කැවීමට මවිටම සිටගෙන සිීම)"
    ],
    "correctIndex": 1,
    "explanation": "Ask which food he would like to eat (ඔහු කැමති කුමන ආහාරයේ අනුභව කිරීමටදැයි විමසීම)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයෙකුට අනිවාර්යසයන්ම ආහාර කැවිය යුතු අව ථාවකදී, ඔබට ඔහුට යම් වාධීනත්වයේ ලබා දිය හැේවේ සකස ද?"
  },
  {
    "id": "lesson-02-q006",
    "moduleId": "lesson-02",
    "number": 6,
    "question": "Which of the following is the acceptable way for a care worker to cope with feelings of anger and frustration?",
    "options": [
      "Call your best friend on the way home and vent (නිව ට යන අතරතුර ඔවේ හොඳම මිතුරාට ඇමතුමේ දී සිසත් ඇති වේ පිට කිරීම)",
      "Ask your supervisor for time to talk about your feelings (ඔවේ හැඟීම් ගැන කතා කිරීමට කාලය ඉේලා ඔවේ අධීේෂකවරයාසගන් විමසීම)",
      "Tell several staff members over lunch (දිවා ආහාරය අතරතුර කාර්ය මණ්ඩලගේ කිහිප දෙසනකුට පැවසීම)",
      "Refuse to care for a difficult user until your mood improves (ඔවේ මනෝභාවය යහපත් වන තුරු අපහසු පරිශීලකයෙකුට ත්කාර කිරීම ප්‍රතිේසෂ්ප කිරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Ask your supervisor for time to talk about your feelings (ඔවේ හැඟීම් ගැන කතා කිරීමට කාලය ඉේලා ඔසේඅධීේෂකවරයාසගන් විමසීම)",
    "kind": "mcq",
    "sinhalaText": "කෝපය හ කලකිරීම පිළිබඳ හැඟීම් මඟ ර්ථකව කටයුතු කිරීමට ත්කාර ස වකයෙකුට පිළිගත හැකි ක්‍රමය පහත ඒවායින් කුමේද?"
  },
  {
    "id": "lesson-02-q007",
    "moduleId": "lesson-02",
    "number": 7,
    "question": "Before performing, the nurse aid must,",
    "options": [
      "Identify the patient (රෝගියා හඳුනා ගැනීම)",
      "Explain the procedure (ක්‍රියා පටිපාටිය පැහැදිලි කිරීම)",
      "Make care plan (ත්කාර ලැ ම ක  කිරීම)",
      "All of the above (ඉහත සියල්ල)"
    ],
    "correctIndex": 3,
    "explanation": "All of the above (ඉහත සියල්ල) (In this test item, identifying the user/patient, explaining the procedure,\nand following/making care plan steps are all listed as expected actions.)",
    "kind": "mcq",
    "sinhalaText": "ත්කාර කටයුත්තේ සිදු කිරීමට පෙර, හෙද හායකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-02-q008",
    "moduleId": "lesson-02",
    "number": 8,
    "question": "Which of the following is not included in the Professional Ethics of Care workers?",
    "options": [
      "Consideration of privacy (පෞේගලිකත්වය ගැන ලකිලිමත් වීම)",
      "Maintaining of confidentiality (රහ යභාවය පවත්වා ගැනීම)",
      "Prohibition of physical restraint (භෞතික සීමා කිරීම් තහනම් කිරීම)",
      "Providing support to promote self-confidence (ආත්ම විශ්වා ය ප්‍රවර්ධනය කිරීම ඳහා හාය ලබා දීම)"
    ],
    "correctIndex": 3,
    "explanation": "Providing support to promote self-confidence (ආත්ම විශ්වා ය ප්‍රවර්ධනය කිරීම ඳහා හාය ලබා දීම)\n(Privacy, confidentiality, and prohibition of physical restraint are core ethical/legal rules, whereas promoting self-confidence is a general\ncare support goal.)",
    "kind": "mcq",
    "sinhalaText": "ත්කාර ස වකයින්වේ වෘත්ීය ආචාර ධර්ම (Professional Ethics) තුළ ඇතුළත් නනොවන්නන් පහත ඒවායින් කුමේද?"
  },
  {
    "id": "lesson-02-q009",
    "moduleId": "lesson-02",
    "number": 9,
    "question": "Which of the following is not an example of physical restraint?",
    "options": [
      "Put safety rails around the bed (ඇඳ වටා ආරේිත වැටවේ දැමීම)",
      "Lock the door to keep the user inside (පරිශීලකයා ඇතුළත තබා ගැනීමට දොර අගුළු දැමීම)",
      "Tying the whole body including mouth (මුඛය ද ඇතුළුව මුළු ශරීරයම බැඳ තැබීම)",
      "Administer an excess amount of psychotropic medication (අධික මානසික ඖෂධ / psychotropic medication ප්‍රමාණයේ ලබා දීම)"
    ],
    "correctIndex": 3,
    "explanation": "Administer an excess amount of psychotropic medication (අධික මානසික ඖෂධ ප්‍රමාණයේ ලබා දීම)\n(Excess psychotropic medication is chemical restraint, not physical restraint.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවායින් භෞතික සීමා කිරීමකට (physical restraint) උදාහරණයේ නනොවන්නන් කුමේද?"
  },
  {
    "id": "lesson-02-q010",
    "moduleId": "lesson-02",
    "number": 10,
    "question": "A therapist that gives training of physical activities such as walking;",
    "options": [
      "nurse (සහදිය)",
      "occupational therapist (වෘත්ීය චිකිත් ක / occupational therapist)",
      "physical therapist (භෞත චිකිත් ක / physical therapist)",
      "care workers (ත්කාර ස වකයින්)"
    ],
    "correctIndex": 2,
    "explanation": "physical therapist (භෞත චිකිත් ක / physical therapist)",
    "kind": "mcq",
    "sinhalaText": "ඇවිදීම වැනි ශාරීරික ක්‍රියාකාරකම් පුහුණුව ලබා දෙන චිකිත් කයා වන්නේ:"
  },
  {
    "id": "lesson-02-q011",
    "moduleId": "lesson-02",
    "number": 11,
    "question": "The professionals who develop support plans, give consultation, and make adjustment regarding user's welfare;",
    "options": [
      "care managers (ත්කාර කළමනාකරුවන් / care managers)",
      "registered dietician (ලියාපදිංචි පෝෂණසේදියා / registered dietician)",
      "doctor (වවදයවරයා)",
      "nurse (සහදිය)"
    ],
    "correctIndex": 0,
    "explanation": "care managers (ත්කාර කළමනාකරුවන් / care managers)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාගේ සුභ ධනය ම්බන්ධයෙන් හායක ලසුම් ක  කරන, උපසේශන ලබා දෙන හ ගැලපීම් සිදු කරන වෘත්තිකයන් වන්නේ:"
  },
  {
    "id": "lesson-02-q012",
    "moduleId": "lesson-02",
    "number": 12,
    "question": "Which of the following is not included in the basic flow of care process?",
    "options": [
      "Assessment (තේස රුව / Assessment)",
      "Evaluation (ඇගයීම / Evaluation)",
      "Care service (ත්කාර ස වාව / Care service)",
      "Care plan development (ත්කාර ලසුම් ංවර්ධනය / Care plan development)"
    ],
    "correctIndex": 2,
    "explanation": "Care service (ත්කාර ස වාව / Care service) (Standard care process flow consists of Assessment →\nCare plan development → Care plan implementation → Evaluation; \"Care service\" is the general service rather than a distinct process\nstep name.)",
    "kind": "mcq",
    "sinhalaText": "ත්කාර ක්‍රියාවලිගේ මූලික පියවර (basic flow of care process) තුළ ඇතුළත් නනොවන්නන් පහත ඒවායින් කුමේද?"
  },
  {
    "id": "lesson-02-q013",
    "moduleId": "lesson-02",
    "number": 13,
    "question": "A service in which a care worker would visit the house of the user to provide care services;",
    "options": [
      "Day care services (දිවා ත්කාර ස වා / Day care services)",
      "Short stay (කෙටි නවාතැන් / Short stay)",
      "Long stay service (දිගුකාලීන නවාතැන් ස වාව / Long stay service)",
      "Home visit (නිවා ංචාරය / Home visit)"
    ],
    "correctIndex": 3,
    "explanation": "Home visit (නිවා ංචාරය / Home visit)",
    "kind": "mcq",
    "sinhalaText": "ත්කාර ස වා ලබා දීම ඳහා ත්කාර ස වකයෙකු පරිශීලකයාගේ නිව ට යන ස වාව වන්නේ:"
  },
  {
    "id": "lesson-02-q014",
    "moduleId": "lesson-02",
    "number": 14,
    "question": "It refers to carefully look and find out the state of user for their safety;",
    "options": [
      "Health management (ස ඛය කළමනාකරණය / Health management)",
      "Observation (නිරීේෂණය / Observation)",
      "Safety management (ආරේෂක කළමනාකරණය / Safety management)",
      "Body mechanics (ශරීර යාන්ර විදයාව / Body mechanics)"
    ],
    "correctIndex": 1,
    "explanation": "Observation (නිරීේෂණය / Observation)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාගේ ආරේෂාව ඳහා ඔවුන්වේ තත්ත්වය හොඳින් බලා ස යා බැලීම මෙයින් අදහ  කෙරේ:"
  },
  {
    "id": "lesson-02-q015",
    "moduleId": "lesson-02",
    "number": 15,
    "question": "It refers to every point of contact of a person with the floor surface in order to support his body;",
    "options": [
      "Center of gravity (ගුරුත්වාකර්ෂණ සේන්රය / Center of gravity)",
      "Observation (නිරීේෂණය / Observation)",
      "Base of support (ආධාරක පදනම / Base of support)",
      "Body mechanics (ශරීර යාන්ර විදයාව / Body mechanics)"
    ],
    "correctIndex": 2,
    "explanation": "Base of support (ආධාරක පදනම / Base of support)",
    "kind": "mcq",
    "sinhalaText": "තම ශරීරයට ආධාර කිරීම ඳහා පුේගලයෙකුගේ පාද/ශරීරය බිම් මතුපිට මඟ පර්ශ වන ම ථානයේම මෙයින් අදහ  කෙරේ:"
  },
  {
    "id": "lesson-02-q016",
    "moduleId": "lesson-02",
    "number": 16,
    "question": "It refers to the way our body moves between bones and muscles;",
    "options": [
      "Center of gravity (ගුරුත්වාකර්ෂණ සේන්රය / Center of gravity)",
      "Observation (නිරීේෂණය / Observation)",
      "Base of support (ආධාරක පදනම / Base of support)",
      "Body mechanics (ශරීර යාන්ර විදයාව / Body mechanics)"
    ],
    "correctIndex": 3,
    "explanation": "Body mechanics (ශරීර යාන්ර විදයාව / Body mechanics)",
    "kind": "mcq",
    "sinhalaText": "අ ි හ මාංශ සප්කශි අතර අපවේ ශරීරය චලනය වන ආකාරය මෙයින් අදහ  කෙරේ:"
  },
  {
    "id": "lesson-02-q017",
    "moduleId": "lesson-02",
    "number": 17,
    "question": "According to the official study text, which option is NOT listed as a specific method for maintaining mental health?\nනිල අධ්‍යයන පෙළේ මානසික සෞඛ්‍යය පවත්වා ගැනීම සඳහා විශේෂයෙන් සඳහන් කර නොමැති ක්‍රමය කුමක්ද?",
    "options": [
      "Ensure time for meals and sleep (ආහාර ගැනීමට සහ නිදා ගැනීමට ප්‍රමාණවත් කාලය වෙන් කරගැනීම)",
      "Find a way to relieve stress that suits you (තමන්ට ගැළපෙන මානසික ආතතිය අඩු කරගැනීමේ ක්‍රමයක් සොයාගැනීම)",
      "Talk or consult with seniors and colleagues (ජ්‍යෙෂ්ඨයන් සහ සහකාර සේවකයන් සමඟ කතා කිරීම හෝ උපදෙස් ලබාගැනීම)",
      "Maintain regular exercise (නිතිපතා ව්‍යායාම කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "The official MHLW study text lists the first three measures under 'How to maintain mental health'. Regular exercise is generally beneficial, but it is not one of the three specific measures listed in that section. (MHLW නිල අධ්‍යයන පෙළේ 'මානසික සෞඛ්‍යය පවත්වා ගන්නා ආකාරය' යටතේ පළමු ක්‍රම තුන සඳහන් කර ඇත. නිතිපතා ව්‍යායාම කිරීම සෞඛ්‍යයට හිතකර වුවත් එම කොටවේ සඳහන් විශේෂ ක්‍රම තුනට ඇතුළත් නොවේ.)",
    "kind": "mcq",
    "sinhalaText": "මානසික ස ඛයය පවත්වා ගැනීමේදී, පහත සඳහන් ඒවායින් තය නනොවන්නන් කුමේද?"
  },
  {
    "id": "lesson-02-q018",
    "moduleId": "lesson-02",
    "number": 18,
    "question": "An illness in which a pathogen enters the body and cause various symptoms;",
    "options": [
      "Infectious diseases (බෝවන රෝග / Infectious diseases)",
      "Pathogenic diseases (රෝගකාරක රෝග / Pathogenic diseases)",
      "Parasitic diseases (පරපෝිත රෝග / Parasitic diseases)",
      "Bacterial disease (බැේීරියා රෝගය / Bacterial disease)"
    ],
    "correctIndex": 0,
    "explanation": "Infectious diseases (බෝවන රෝග / Infectious diseases)",
    "kind": "mcq",
    "sinhalaText": "රෝග කාරකයේ (pathogen) ශරීරයට ඇතුළු වී විවිධ රෝග ලේෂණ ඇති කරන රෝගය වන්නේ:"
  },
  {
    "id": "lesson-02-q019",
    "moduleId": "lesson-02",
    "number": 19,
    "question": "Which of the following is not included in the basic rules of controlling infections;",
    "options": [
      "Do not bring in (ඇතුළට රැගෙන නොයන්න)",
      "Do not bring out (පිටතට රැගෙන නොයන්න)",
      "Stop at all cost (කුමන මිලේ හෝ දී නවත්වන්න)",
      "Do not spread out (පැතිසරන්නට ඉඩ නොසදන්න)"
    ],
    "correctIndex": 2,
    "explanation": "Stop at all cost (කුමන මිලේ හෝ දී නවත්වන්න) (Infection control basic principles are \"Do not bring in,\ndo not let it spread/do not bring out, do not spread out\".)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන පාලනය කිරීමේ මූලික නීති (basic rules of controlling infections) තුළ ඇතුළත් නනොවන්නන් පහත ඒවායින් කුමේද:"
  },
  {
    "id": "lesson-02-q020",
    "moduleId": "lesson-02",
    "number": 20,
    "question": "Which of the following is not included in the sources of infection?",
    "options": [
      "Blood (රුධිරය / Blood)",
      "Body fluid (ශරීර තරලය / Body fluid)",
      "Urine (මුරා / Urine)",
      "Eating molded breads (පු  බැඳුණු පාන් අනුභව කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Eating molded breads (පු  බැඳුණු පාන් අනුභව කිරීම) (Blood, body fluid, and urine are body-derived\ninfection sources/excretions; eating moldy bread is an intake/exposure action.)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන ප්‍රභවයන් (sources of infection) තුළ ඇතුළත් නනොවන්නන් පහත ඒවායින් කුමේද?"
  },
  {
    "id": "lesson-02-q021",
    "moduleId": "lesson-02",
    "number": 21,
    "question": "Which of the following is not included in the routes of infection?",
    "options": [
      "Eating contaminated food (දූිත ආහාර අනුභව කිරීම)",
      "Droplet infection (රව බිඳිති මගින් ආසාදනය වීම / Droplet infection)",
      "Contagious infection (පර්ශයෙන් බෝවන ආසාදනය / Contagious infection)",
      "Airborne infection (වාතය මගින් බෝවන ආසාදනය / Airborne infection)"
    ],
    "correctIndex": 0,
    "explanation": "Eating contaminated food (දූිත ආහාර අනුභව කිරීම) (In standard care curriculum classifications,\ndroplet, contact/contagious, and airborne are listed as transmission routes.)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මාර්ග (routes of infection) තුළ ඇතුළත් නනොවන්නන් පහත ඒවායින් කුමේද?"
  },
  {
    "id": "lesson-02-q022",
    "moduleId": "lesson-02",
    "number": 22,
    "question": "Damage caused by earthquakes, typhoons, fire etc. are referred as;",
    "options": [
      "Disaster (ආපදාව / Disaster)",
      "Emergency (හදිසි අව ථාව / Emergency)",
      "Risk (අවදානම / Risk)",
      "Accident (අනතුර / Accident)"
    ],
    "correctIndex": 0,
    "explanation": "Disaster (ආපදාව / Disaster)",
    "kind": "mcq",
    "sinhalaText": "භූමිකම්පා, ටයිෆූන් කුණාටු, ගිනිගැනීම් ආදියෙන් සිදුවන හානිය හැඳින්සවන්නේ:"
  },
  {
    "id": "lesson-02-q023",
    "moduleId": "lesson-02",
    "number": 23,
    "question": "The following is the supplies necessary to prepare in disaster prevention measure except?",
    "options": [
      "Money (මුදේ)",
      "Water (ජලය)",
      "Pillow (කොට්ටය)",
      "Food (ආහාර)"
    ],
    "correctIndex": 2,
    "explanation": "Pillow (කොට්ටය)",
    "kind": "mcq",
    "sinhalaText": "ආපදා වැළැේවීමේ ක්‍රියාමාර්ගයකදී සූදානම් කිරීමට අවශය පයුම් පහත ඒවා වේ, නෙය හැර:"
  },
  {
    "id": "lesson-02-q024",
    "moduleId": "lesson-02",
    "number": 24,
    "question": "The following is an example of risk management except?",
    "options": [
      "Preventive measures (වැළැේවීමේ ක්‍රියාමාර්ග)",
      "Think why it happened (එය සිදු වූගේ ඇයිදැයි සිීම)",
      "Record the incident (සිදුවීම වාර්තා කිරීම)",
      "Do not share the information to everyone (තොරතුරු මට බෙදා නොගැනීම)"
    ],
    "correctIndex": 3,
    "explanation": "Do not share the information to everyone (තොරතුරු මට බෙදා නොගැනීම) (Sharing risk/incident\ninformation appropriately across the care team is essential for prevention.)",
    "kind": "mcq",
    "sinhalaText": "අවදානම් කළමනාකරණයට (risk management) උදාහරණයේ වන්නේ පහත ඒවායින් කුමේද, නෙය හැර?"
  },
  {
    "id": "lesson-02-q025",
    "moduleId": "lesson-02",
    "number": 25,
    "question": "It refers to predicting risks, getting involved as an organization and working to prevent accidents?",
    "options": [
      "Disaster management (ආපදා කළමනාකරණය / Disaster management)",
      "Risk management (අවදානම් කළමනාකරණය / Risk management)",
      "Emergency management (හදිසි අව ථා කළමනාකරණය / Emergency management)",
      "Prevention management (වැළැේවීමේ කළමනාකරණය / Prevention management)"
    ],
    "correctIndex": 1,
    "explanation": "Risk management (අවදානම් කළමනාකරණය / Risk management)",
    "kind": "mcq",
    "sinhalaText": "අවදානම් පුරෝකථනය කිරීම, ංවිධානයේ සල ම්බන්ධ වීම හ අනතුරු වැළැේවීමට කටයුතු කිරීම මෙයින් අදහ  කෙරේ:"
  },
  {
    "id": "lesson-02-q026",
    "moduleId": "lesson-02",
    "number": 26,
    "question": "The following are examples of accident prevention and safety measures except?",
    "options": [
      "Washing the hands regularly (නිතිපතා අත් ස දීම)",
      "Carefully observe the state of the user (පරිශීලකයාගේ තත්ත්වය හොඳින් නිරීේෂණය කිරීම)",
      "Confirm the user's clothes and footwear (පරිශීලකයාගේ ඇඳුම් හ පාවහන් තහවුරු කිරීම)",
      "Inspect the assistive devices before use (භාවිතයට පෙර හායක උපකරණ පරීේෂා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Washing the hands regularly (නිතිපතා අත් ස දීම) (Regular handwashing is primarily an infection\nprevention measure rather than a physical fall/accident prevention measure.)",
    "kind": "mcq",
    "sinhalaText": "අනතුරු වැළැේවීමේ හ ආරේෂක ක්‍රියාමාර්ගවලට උදාහරණ වන්නේ පහත ඒවායින් කුමේද, නෙය හැර?"
  },
  {
    "id": "lesson-02-q027",
    "moduleId": "lesson-02",
    "number": 27,
    "question": "The following are the parts that easy to get dirty except?",
    "options": [
      "Fingertips (ඇඟිලි තුඩු)",
      "Area between fingers (ඇඟිලි අතර ප්‍රසේශය)",
      "Elbow (වැලමිට)",
      "Back of the hand (අසත් පිටුප)"
    ],
    "correctIndex": 2,
    "explanation": "Elbow (වැලමිට)",
    "kind": "mcq",
    "sinhalaText": "පහසුවෙන් අපිරිසිදු වන සකාට  වන්නේ පහත ඒවායින් කුමේද, නෙය හැර?"
  },
  {
    "id": "lesson-02-q028",
    "moduleId": "lesson-02",
    "number": 28,
    "question": "It is the gatherings of information on the user and analyze the issues of daily living;",
    "options": [
      "Care plan development (ත්කාර ලසුම් ංවර්ධනය / Care plan development)",
      "Assessment (තේස රුව / Assessment)",
      "Care plan implementation (ත්කාර ලසුම ක්‍රියාත්මක කිරීම / Care plan implementation)",
      "Evaluation (ඇගයීම / Evaluation)"
    ],
    "correctIndex": 1,
    "explanation": "Assessment (තේස රුව / Assessment)",
    "kind": "mcq",
    "sinhalaText": "එය පරිශීලකයා පිළිබඳ තොරතුරු රැ  කිරීම හ එදිනෙදා ජීවිතවේ ගැටලු විශ්සේෂණය කිරීමයි:"
  },
  {
    "id": "lesson-02-q029",
    "moduleId": "lesson-02",
    "number": 29,
    "question": "Which of the following is not appropriate in the basic of keeping records of nursing care?",
    "options": [
      "Record the date and time (දිනය හ සේලාව ටහන් කිරීම)",
      "Keep records later in free time (පසුව විසේක සේලාවකදී වාර්තා තබා ගැනීම)",
      "Record the incident (සිදුවීම වාර්තා කිරීම)",
      "Record why it happened (එය සිදු වූගේ ඇයිද යන්න ටහන් කිරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Keep records later in free time (පසුව විසේක සේලාවකදී වාර්තා තබා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "හෙද ත්කාර වාර්තා තබා ගැනීමේ මූලික කරුණු අතර, පහත සඳහන් ඒවායින් සුදුසු නනොවන්නන් කුමේද?"
  },
  {
    "id": "lesson-02-q030",
    "moduleId": "lesson-02",
    "number": 30,
    "question": "It has an adverse effect such as reduction of physical abilities and worsening of user's dementia?",
    "options": [
      "Physical restraint (භෞතික සීමා කිරීම / Physical restraint)",
      "Locking of door (දොර අගුළු දැමීම)",
      "Abandonment (අතහැර දැමීම / Abandonment)",
      "Body mechanics (ශරීර යාන්ර විදයාව / Body mechanics)"
    ],
    "correctIndex": 0,
    "explanation": "Physical restraint (භෞතික සීමා කිරීම / Physical restraint)",
    "kind": "mcq",
    "sinhalaText": "ශාරීරික හැකියාවන් අඩු වීම හ පරිශීලකයාගේ ඩිමෙන්ශියා තත්ත්වය උග්‍ර වීම වැනි අහිතකර බලපෑම් මෙයින් ඇති වේ:"
  },
  {
    "id": "lesson-02-q031",
    "moduleId": "lesson-02",
    "number": 31,
    "question": "Appropriate treatment for persons who have difficulty in talking due to stroke?",
    "options": [
      "Occupational therapist (වෘත්ීය චිකිත් ක / Occupational therapist)",
      "Physical therapist (භෞත චිකිත් ක / Physical therapist)",
      "Speech therapist (කථන චිකිත් ක / Speech therapist)",
      "Nurse (සහදිය)"
    ],
    "correctIndex": 2,
    "explanation": "Speech therapist (කථන චිකිත් ක / Speech therapist)",
    "kind": "mcq",
    "sinhalaText": "ආඝාතය (stroke) හේතුවෙන් කතා කිරීමේ අපහසුතා ඇති පුේගලයින් ඳහා සුදුසු ප්‍රතිකාරය වන්නේ:"
  },
  {
    "id": "lesson-02-q032",
    "moduleId": "lesson-02",
    "number": 32,
    "question": "What do we call the concept that refers to the quality of a person's daily life, including happiness and satisfaction?\nසතුට සහ තෘප්තිය ඇතුළත් පුද්ගලයෙකුගේ දෛනික ජීවිතයේ ගුණාත්මකභාවය හඳුන්වන්නේ කුමන සංකල්පයෙන්ද?",
    "options": [
      "Human dignity (මානව ගරුත්වය)",
      "Quality of Life – QOL (ජීවන තත්ත්වය)",
      "User-centred approach (පරිශීලක කේන්ද්‍රීය ප්‍රවේශය)",
      "Willpower (අධිෂ්ඨාන ශක්තිය)"
    ],
    "correctIndex": 1,
    "explanation": "Quality of Life (QOL) refers to a person's overall quality of daily life and includes well-being, happiness, satisfaction and purpose. (Quality of Life හෙවත් QOL යනු පුද්ගලයෙකුගේ සමස්ත දෛනික ජීවිතයේ ගුණාත්මකභාවයයි. එයට යහපැවැත්ම, සතුට, තෘප්තිය සහ ජීවිතයේ අරමුණ ඇතුළත් වේ.)",
    "kind": "mcq",
    "sinhalaText": "තුට හ ජීවිත තෘප්කතිය ඇතුළත් පුේගලයෙකුගේ වදනික ජීවිතවේ ගුණාත්මකභාවය මෙයින් අදහ  කෙරේ:"
  },
  {
    "id": "lesson-02-q033",
    "moduleId": "lesson-02",
    "number": 33,
    "question": "It is to develop the contents of care plan to offer to the user;",
    "options": [
      "[Option missing / විකේපය කැපී ඇත]",
      "Assessment (තේස රුව / Assessment)",
      "Care plan implementation (ත්කාර ලසුම ක්‍රියාත්මක කිරීම / Care plan implementation)",
      "Evaluation (ඇගයීම / Evaluation)"
    ],
    "correctIndex": 0,
    "explanation": "Care plan development (ත්කාර ලසුම් ංවර්ධනය / Care plan development — cut off in PDF)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාට ලබා දීම ඳහා ත්කාර ලැ සම් අන්තර්ගතය ංවර්ධනය කිරීම වන්නේ:"
  },
  {
    "id": "lesson-02-q034",
    "moduleId": "lesson-02",
    "number": 34,
    "question": "Wakeup, change clothes, washing the face, having meals, going to bathroom, taking a bath, engaging in recreational activities and going to",
    "options": [
      "happen to the rhythm of life (ජීවන රිේමයට / rhythm of life අනුව සිදු වේ)",
      "happen according to the will of care worker (ත්කාර ස වකයාගේ කැමැත්ත පරිදි සිදු වේ)",
      "are never supported by the care worker (ත්කාර ස වකයා විසින් කිසි විසටකත් හාය නොගේ)",
      "are things done by the disabled at his own with his own ability (ආබාධිත පුේගලයා විසින් ඔහුසේම හැකියාවෙන් තනිවම කරන සේවේ වේ)"
    ],
    "correctIndex": 0,
    "explanation": "happen to the rhythm of life (ජීවන රිේමයට අනුව සිදු වේ)",
    "kind": "mcq",
    "sinhalaText": "අවදි වීම, ඇඳුම් මාරු කිරීම, මුහුණ ස දීම, ආහාර ගැනීම, වැසිකිළියට යාම, නෑම, විනෝදාත්මක ක්‍රියාකාරකම්වල සයදීම හ නින්දට යාම:"
  },
  {
    "id": "lesson-02-q035",
    "moduleId": "lesson-02",
    "number": 35,
    "question": "Follows the instruction given by the doctors and assist in providing medical care;",
    "options": [
      "Care managers (ත්කාර කළමනාකරුවන් / Care managers)",
      "Registered dietician (ලියාපදිංචි පෝෂණසේදියා / Registered dietician)",
      "Doctor (වවදයවරයා)",
      "Nurse (සහදිය)"
    ],
    "correctIndex": 3,
    "explanation": "Nurse (සහදිය)",
    "kind": "mcq",
    "sinhalaText": "වවදයවරුන් ලබා දෙන උපසද  අනුගමනය කරමින් වවදය ත්කාර ලබා දීමට හාය වන්නේ:"
  },
  {
    "id": "lesson-02-q036",
    "moduleId": "lesson-02",
    "number": 36,
    "question": "What is done to give the user a sense of accomplishment?",
    "options": [
      "Do all the works for the disabled (ආබාධිත පුේගලයා වෙනුවෙන් සියලු වැඩ කිරීම)",
      "Getting the support of the user to enhance the nursing profession (හෙද වෘත්තිය ඉහළ නැංවීමට පරිශීලකයාගේ හාය ලබා ගැනීම)",
      "Support the user to increase the number of things he can do with his own ability (ඔහුසේම හැකියාවෙන් කළ හැකි සේවේ ප්‍රමාණය වැඩිකිරීමට පරිශීලකයාට හාය වීම)",
      "Doing recreational activities even if the user dislike it (පරිශීලකයා එයට අකමැති වුවද විනෝදාත්මක ක්‍රියාකාරකම් කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Support the user to increase the number of things he can do with his own ability (ඔහුසේම හැකියාසවන්කළ හැකි සේවේ ප්‍රමාණය වැඩි කිරීමට පරිශීලකයාට හාය වීම)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාට ර්ථකත්වවේ හැඟීමේ (sense of accomplishment) ලබා දීමට කරන්නේ කුමේද?"
  },
  {
    "id": "lesson-02-q037",
    "moduleId": "lesson-02",
    "number": 37,
    "question": "Choose the correct statement on maintaining confidentiality.",
    "options": [
      "Care worker must disclose the personal informat[ion] of the user to any third party. (ත්කාර ස වකයා පරිශීලකයාගේ පෞේගලික තොරතුරුඕනෑම සතවන පාර්ශ්වයකට සහළි කළ යුතුය.)",
      "The care worker has to obtain information on the user in order to provide appropriate care. (සුදුසු ත්කාර ලබා දීම ඳහා ත්කාර ස වකයාට පරිශීලකයා පිළිබඳ තොරතුරු ලබා ගැනීමට සිදුගේ.)",
      "User's information cannot be spread on internet and social media even with his consent. (පරිශීලකයාගේ කැමැත්ත ඇතිව වුවද ඔහුසේතොරතුරු අන්තර්ජාලගේ හ මාජ මාධයවල පැතිරවිය නොහැක.)",
      "Care worker must force the user to give permission to disclose his personal information to the third parties (සතවන පාර්ශ්වයන්ට තම පෞේගලික තොරතුරු සහළි කිරීමට අව ර දෙන සල ත්කාර ස වකයා පරිශීලකයාට බල කළ යුතුය)"
    ],
    "correctIndex": 1,
    "explanation": "The care worker has to obtain information on the user in order to provide appropriate care. (සුදුසුත්කාර ලබා දීම ඳහා ත්කාර ස වකයාට පරිශීලකයා පිළිබඳ තොරතුරු ලබා ගැනීමට සිදුගේ.)",
    "kind": "mcq",
    "sinhalaText": "රහ යභාවය පවත්වා ගැනීම පිළිබඳ නිවැරදි ප්‍රකාශය තෝරන්න:"
  },
  {
    "id": "lesson-02-q038",
    "moduleId": "lesson-02",
    "number": 38,
    "question": "Choose the correct statements of the following.",
    "options": [
      "Only A is correct (A පමණේ නිවැරදිය)",
      "Only B is correct (B පමණේ නිවැරදිය)",
      "Only A and B are correct (A හ B පමණේ නිවැරදිය)",
      "All correct (සියල්ල නිවැරදිය)"
    ],
    "correctIndex": 0,
    "explanation": "Only A is correct (A පමණේ නිවැරදිය) (Gloves are removed keeping contaminated surfaces contained\ninside/with dirty side turned in during removal, while wearing gloves is not necessary for every single care task when there is no contact\nwith blood/body fluids/contaminants, and using a fulcrum/lever makes lifting easier.)",
    "kind": "mcq",
    "sinhalaText": "පහත ප්‍රකාශ අතරින් නිවැරදි ප්‍රකාශ තෝරන්න.\nA - ඉවත දැමිය හැකි අත්වැසුම් අපිරිසිදු පැත්ත පිටතට සිටින ස  ගලවා වෙන  කළ යුතුය\nB - හෙද ත්කාර ලබා දෙන විට අත්වැසුම් පැළඳීම අතයවශය වේ\nC - බර ඔ වන විට වාරු ලේෂයයේ (fulcrum) නිර්මාණය කිරීමෙන් කාර්යය අපහසු වේ"
  },
  {
    "id": "lesson-02-q039",
    "moduleId": "lesson-02",
    "number": 39,
    "question": "What is meant by inter-professional collaboration?",
    "options": [
      "Conducting activities based on medical knowledge and skills by the care worker (ත්කාර ස වකයා විසින් වවදය දැනුම හ කු ලතා මත පදනම්ව ක්‍රියාකාරකම් සිදු කිරීම)",
      "Providing functional recovery training by the rehabilitation professionals (පුනරුත්ථාපන වෘත්තිකයන් විසින් ක්‍රියාකාරී යථා තත්ත්වයට පත්කිරීමේ පුහුණුව ලබා දීම)",
      "Cooperation of professionals on diet and professionals on welfare and other services. (ආහාර පිළිබඳ වෘත්තිකයන් හ සුභ ධන හාඅනෙකුත් ස වා පිළිබඳ වෘත්තිකයන්වේ හයෝගීතාව.)",
      "Various professionals other than the care workers work as a team for a user, using their respective expertise. (ත්කාර ස වකයින්ට අමතරව විවිධ වෘත්තිකයන් තම තමන්වේ විශේෂඥ දැනුම භාවිත කරමින් පරිශීලකයෙකු වෙනුවෙන් කණ්ඩායමේ සල කටයුතු කිරීම.)"
    ],
    "correctIndex": 3,
    "explanation": "Various professionals other than the care workers work as a team for a user, using their respective\nexpertise. (ත්කාර ස වකයින්ට අමතරව විවිධ වෘත්තිකයන් තම තමන්වේ විශේෂඥ දැනුම භාවිත කරමින් පරිශීලකයෙකු වෙනුවෙන් කණ්ඩායමේ සල කටයුතු කිරීම.)",
    "kind": "mcq",
    "sinhalaText": "අන්තර්-වෘත්ීය හයෝගීතාව (inter-professional collaboration) යන්සනන් අදහ  කරන්නේ කුමේද?"
  },
  {
    "id": "lesson-02-q040",
    "moduleId": "lesson-02",
    "number": 40,
    "question": "Leaving the user unattended is,",
    "options": [
      "Economic abuse (ආර්ික අපයෝජනය / Economic abuse)",
      "Physical abuse (ශාරීරික අපයෝජනය / Physical abuse)",
      "Abandonment of nursing care (හෙද ත්කාර අතහැර දැමීම / Abandonment of nursing care)",
      "Psychological abuse (මානසික අපයෝජනය / Psychological abuse)"
    ],
    "correctIndex": 2,
    "explanation": "Abandonment of nursing care (හෙද ත්කාර අතහැර දැමීම / Abandonment of nursing care)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා අවධානයකින් සතාරව තනිවම හැර යාම වන්නේ:"
  },
  {
    "id": "lesson-02-q041",
    "moduleId": "lesson-02",
    "number": 41,
    "question": "Abuse means,",
    "options": [
      "Disclosing the personal information of user to third parties (පරිශීලකයාගේ පෞේගලික තොරතුරු සතවන පාර්ශ්වයන්ට සහළි කිරීම)",
      "Maintaining of confidentiality (රහ යභාවය පවත්වා ගැනීම)",
      "Not giving consideration to user's privacy (පරිශීලකයාගේ පෞේගලිකත්වය ගැන ලකිලිමත් නොවීම)",
      "Violation of human rights of the user (පරිශීලකයාගේ මානව හිමිකම් උේලංඝනය කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Violation of human rights of the user (පරිශීලකයාගේ මානව හිමිකම් උේලංඝනය කිරීම)",
    "kind": "mcq",
    "sinhalaText": "අපයෝජනය (Abuse) යන්සනන් අදහ  වන්නේ:"
  },
  {
    "id": "lesson-02-q042",
    "moduleId": "lesson-02",
    "number": 42,
    "question": "Which cannot increase the stability?",
    "options": [
      "Use of a cane to widen the base of support (ආධාරක පදනම පුළුේ කිරීමට සේවැලේ / cane භාවිත කිරීම)",
      "Stretching the arms and legs of user close together (පරිශීලකයාගේ අත් හ පාද එකිසනකට ළං කර දිගු කිරීම)",
      "Using bigger muscles such as thighs (කලවා වැනි විශාල මාංශ සප්කශි භාවිත කිරීම)",
      "Bringing center of gravity of user and care worker close together. (පරිශීලකයාගේ හ ත්කාර ස වකයාගේ ගුරුත්වාකර්ෂණ සේන්රය එකිසනකට ළං කිරීම.)"
    ],
    "correctIndex": 1,
    "explanation": "Stretching the arms and legs of user close together (පරිශීලකයාගේ අත් හ පාද එකිසනකට ළං කර දිගුකිරීම)",
    "kind": "mcq",
    "sinhalaText": "ථාවරත්වය (stability) වැඩි කළ නනොහැක්නක් කුමකින්ද?"
  },
  {
    "id": "lesson-02-q043",
    "moduleId": "lesson-02",
    "number": 43,
    "question": "Risk management steps with correct order are given in;",
    "options": [
      "user may slip on the floor, taking preventive measures for next time, sharing the information, think the reasons for that, keeping\nrecords (පරිශීලකයා බිම ලි   යා හැකිය, ඊළඟ වතාව ඳහා වැළැේවීමේ ක්‍රියාමාර්ග ගැනීම, තොරතුරු බෙදා ගැනීම, ඊට හේතු සිීම, වාර්තා තබා ගැනීම)",
      "user may slip on the floor, think the reasons for that, keeping records, taking preventive measures for next time, sharing the\ninformation (පරිශීලකයා බිම ලි   යා හැකිය, ඊට හේතු සිීම, වාර්තා තබා ගැනීම, ඊළඟ වතාව ඳහා වැළැේවීමේ ක්‍රියාමාර්ග ගැනීම, තොරතුරු බෙදාගැනීම)",
      "user may get infected by a disease, taking preventive measures for next time, sharing the information, think the reasons for that,\nkeeping records (පරිශීලකයාට රෝගයේ බෝ විය හැකිය, ඊළඟ වතාව ඳහා වැළැේවීමේ ක්‍රියාමාර්ග ගැනීම, තොරතුරු බෙදා ගැනීම, ඊට හේතු සිීම,\nවාර්තා තබා ගැනීම)",
      "user may slip on the floor, taking preventive measures for next time, informing the user to be careful next time (පරිශීලකයා බිම ලි   යාහැකිය, ඊළඟ වතාව ඳහා වැළැේවීමේ ක්‍රියාමාර්ග ගැනීම, ඊළඟ වතාගේ ප්‍රසේශම් වන සල පරිශීලකයාට දැනුම් දීම)"
    ],
    "correctIndex": 1,
    "explanation": "user may slip on the floor, think the reasons for that, keeping records, taking preventive measures\nfor next time, sharing the information (පරිශීලකයා බිම ලි   යා හැකිය, ඊට හේතු සිීම, වාර්තා තබා ගැනීම, ඊළඟ වතාව ඳහා වැළැේවීමේ ක්‍රියාමාර්ග ගැනීම, තොරතුරු බෙදා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "අවදානම් කළමනාකරණ පියවර (Risk management steps) නිවැරදි පිළිසවළට දේවා ඇත්තේ:"
  },
  {
    "id": "lesson-02-q044",
    "moduleId": "lesson-02",
    "number": 44,
    "question": "Three factors of infectious diseases are,",
    "options": [
      "Source of infection, route of infection, host (ආසාදන ප්‍රභවය, ආසාදන මාර්ගය, ධාරකයා / Source of infection, route of infection, host)",
      "Source of infection, pathogen, host (ආසාදන ප්‍රභවය, රෝග කාරකය, ධාරකයා / Source of infection, pathogen, host)",
      "pathogen, host, virus (රෝග කාරකය, ධාරකයා, වවර ය)",
      "hands, food, animals (අත්, ආහාර, තුන්)"
    ],
    "correctIndex": 1,
    "explanation": "Source of infection, pathogen, host (ආසාදන ප්‍රභවය, රෝග කාරකය, ධාරකයා / Source of infection,\npathogen, host)",
    "kind": "mcq",
    "sinhalaText": "බෝවන රෝගවල ධක තුන වන්නේ:"
  },
  {
    "id": "lesson-02-q045",
    "moduleId": "lesson-02",
    "number": 45,
    "question": "The incorrect statement regarding disaster preparedness,",
    "options": [
      "Facilities and communities regularly have a cooperation system for disasters and emergencies (ආපදා හ හදිසි අව ථා ඳහා පහසුකම් හ ප්‍රජාවන් නිතිපතා හයෝගීතා පේධතියේ පවත්වා ගනී)",
      "Most of the luggage are taken out of the house by the care worker during a disaster (ආපදාවකදී බොහෝ ගමන් මලු ත්කාර ස වකයා විසින්නිවසින් පිටතට රැගෙන යනු ලැගේ)",
      "It is important to be prepared for disasters to avoid panicking even in the case of a sudden disaster (හදිසි ආපදාවකදී පවා කලබල වීම වැළැේවීම ඳහා ආපදාවලට සූදානම් වීම වැදගත් වේ)",
      "Emergency drills are implemented for care worker to be taken in a time of a disaster (ආපදා අව ථාවකදී ක්‍රියා කිරීම ඳහා ත්කාර ස වකයින්ට හදිසි අභයා ක්‍රියාත්මක කෙරේ)"
    ],
    "correctIndex": 1,
    "explanation": "Most of the luggage are taken out of the house by the care worker during a disaster (ආපදාවකදීබොහෝ ගමන් මලු ත්කාර ස වකයා විසින් නිවසින් පිටතට රැගෙන යනු ලැගේ)\nWould you like to turn this Lesson 1 set into an interactive quiz or add a quick summary sheet of the key caregiver terms?",
    "kind": "mcq",
    "sinhalaText": "ආපදා සූදානම (disaster preparedness) ම්බන්ධයෙන් සොවද්‍ය ප්‍රකාශය වන්නේ:"
  },
  {
    "id": "lesson-03-q001",
    "moduleId": "lesson-03",
    "number": 1,
    "question": "The following are verbal communication. EXCEPT:",
    "options": [
      "Letters and Characters (අකුරු සහ ලිපි / Letters and Characters)",
      "Speech (කථනය / Speech)",
      "Sign Language (සංඥා භාෂාව / Sign Language)",
      "Nodding (හිස සැලීම / Nodding)"
    ],
    "correctIndex": 3,
    "explanation": "Nodding (හිස සැලීම / Nodding) (Nodding is a non-verbal gesture; in caregiving communication\nframeworks, spoken words and written characters/letters are categorized under verbal communication.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා වාචික සන්නිවේදනය (verbal communication) වේ. මේවා හැර:"
  },
  {
    "id": "lesson-03-q002",
    "moduleId": "lesson-03",
    "number": 2,
    "question": "It is mode Through hand and body gestures and facial expressions:",
    "options": [
      "Sign Language (සංඥා භාෂාව / Sign Language)",
      "Non verbal (වාචික නොවන / Non verbal)",
      "Verbal (වාචික / Verbal)",
      "Nodding (හිස සැලීම / Nodding)"
    ],
    "correctIndex": 1,
    "explanation": "Non verbal (වාචික නොවන / Non verbal)",
    "kind": "mcq",
    "sinhalaText": "අත් සහ ශරීර ඉඟි මෙන්ම මුහුණේ ඉරියව් හරහා සිදු කෙරෙන ක්‍රමය වන්නේ:"
  },
  {
    "id": "lesson-03-q003",
    "moduleId": "lesson-03",
    "number": 3,
    "question": "It implies sharing other's opinions and feelings:",
    "options": [
      "Attentive listening (අවධානයෙන් සවන් දීම / Attentive listening)",
      "Empathy (සංවේදීභාවය / Empathy)",
      "Acceptance (පිළිගැනීම / Acceptance)",
      "Repetition (නැවත පැවසීම / Repetition)"
    ],
    "correctIndex": 1,
    "explanation": "Empathy (සංවේදීභාවය / Empathy)",
    "kind": "mcq",
    "sinhalaText": "අන් අයගේ අදහස් සහ හැඟීම් බෙදා ගැනීම මෙයින් අදහස් කෙරේ:"
  },
  {
    "id": "lesson-03-q004",
    "moduleId": "lesson-03",
    "number": 4,
    "question": "It implies accepting the other party's opinions and feelings without denying or admitting them:",
    "options": [
      "Attentive Listening (අවධානයෙන් සවන් දීම / Attentive Listening)",
      "Empathy (සංවේදීභාවය / Empathy)",
      "Acceptance (පිළිගැනීම / Acceptance)",
      "Repetition (නැවත පැවසීම / Repetition)"
    ],
    "correctIndex": 2,
    "explanation": "Acceptance (පිළිගැනීම / Acceptance)",
    "kind": "mcq",
    "sinhalaText": "අනෙක් පාේශ්වේ අදහස් සහ හැඟීම් ප්‍රතික්වෂ්ප නොකර හෝ තහවුරු නොකර ඒවා පිළිගැනීම මෙයින් අදහස් කෙරේ:"
  },
  {
    "id": "lesson-03-q005",
    "moduleId": "lesson-03",
    "number": 5,
    "question": "Elicits a one word. response from the other party such as \"Yes\" or \"No\" or \"A\" or \"B\":",
    "options": [
      "Closed question (සංවෘත ප්‍රශ්නය / Closed question)",
      "Free question (දහස් ප්‍රශ්නය / Free question)",
      "One-sided question (ඒකපාේශ්ික ප්‍රශ්නය / One-sided question)",
      "Open question (වෘත ප්‍රශ්නය / Open question)"
    ],
    "correctIndex": 0,
    "explanation": "Closed question (සංවෘත ප්‍රශ්නය / Closed question)",
    "kind": "mcq",
    "sinhalaText": "\"ඔේ\" හෝ \"නැත\" හෝ \"A\" හෝ \"B\" වැි එක් වචනයක/කෙටි ප්‍රතිචාරයක් අනෙක් පාේශ්වයෙන් ලබා ගන්නේ:"
  },
  {
    "id": "lesson-03-q006",
    "moduleId": "lesson-03",
    "number": 6,
    "question": "The care worker can give the user a message that \"I am listening\" by [blank] what the user said:",
    "options": [
      "Wording (වචන භාවිතය / Wording)",
      "Repeating (නැවත පැවසීම / Repeating)",
      "Eye Contact (ඇස් සම්ෙන්ධතාව / Eye Contact)",
      "Gestures and facial expressions (ඉඟි සහ මුහුණේ ඉරියව් / Gestures and facial expressions)"
    ],
    "correctIndex": 1,
    "explanation": "Repeating (නැවත පැවසීම / Repeating)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා පැවසූ වේ [හිස්තැන] කිරීවමන් \"මම සවන් දීගෙන සිටිනවා\" යන පණිඩය සත්කාර සේවකයාට ලබා දිය හැකිය:"
  },
  {
    "id": "lesson-03-q007",
    "moduleId": "lesson-03",
    "number": 7,
    "question": "The care worker establishes [blank] on the same level with the user :",
    "options": [
      "Wording (වචන භාවිතය / Wording)",
      "Repeating (නැවත පැවසීම / Repeating)",
      "Eye contact (ඇස් සම්ෙන්ධතාව / Eye contact)",
      "Gestures and facial expressions (ඉඟි සහ මුහුණේ ඉරියව් / Gestures and facial expressions)"
    ],
    "correctIndex": 2,
    "explanation": "Eye contact (ඇස් සම්ෙන්ධතාව / Eye contact)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේවකයා පරිශීලකයා සමඟ එකම මට්ටමක [හිස්තැන] ඇති කර ගියි:"
  },
  {
    "id": "lesson-03-q008",
    "moduleId": "lesson-03",
    "number": 8,
    "question": "Care workers keep in mind to use polite [blank]",
    "options": [
      "Wording (වචන භාවිතය / Wording)",
      "Repeating (නැවත පැවසීම / Repeating)",
      "Eye contact (ඇස් සම්ෙන්ධතාව / Eye contact)",
      "Gestures and facial expressions (ඉඟි සහ මුහුණේ ඉරියව් / Gestures and facial expressions)"
    ],
    "correctIndex": 0,
    "explanation": "Wording (වචන භාවිතය / Wording)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේකෙයින් ආචාරශීලී [හිස්තැන] භාවිත කිරීමට මතක තො ගියි:"
  },
  {
    "id": "lesson-03-q009",
    "moduleId": "lesson-03",
    "number": 9,
    "question": "Which of the following is a correct posture when having a conversation to other person :",
    "options": [
      "Lean back in chair (පුටුවේ පිටුපසට වහ්ත්ු වීම / Lean back in chair)",
      "Cross arms (අත් හරස් කර ගැනීම / Cross arms)",
      "Cross legs (කකුල් හරස් කර ගැනීම / Cross legs)",
      "Speak face to face (මුහුණට මුහුණ ලා කතා කිරීම / Speak face to face)"
    ],
    "correctIndex": 3,
    "explanation": "Speak face to face (මුහුණට මුහුණ ලා කතා කිරීම / Speak face to face)",
    "kind": "mcq",
    "sinhalaText": "වෙනත් පුේගලයෙකු සමඟ සංවාදයක වයවදන ට වැරදි ඉරියව්ව පහත ඒවායින් කුමක්ද:"
  },
  {
    "id": "lesson-03-q010",
    "moduleId": "lesson-03",
    "number": 10,
    "question": "The following are the points to remember when communicating with a person with visual impairment. EXCEPT :",
    "options": [
      "Call the person by name and talk to him/her (පුේගලයාවේ නම කියා අමතා ඔහු/ඇය සමඟ කතා කිරීම)",
      "Make it clear to whom you are talking (ඔෙ කතා කරන්නේ කා සමඟද යන්න පැහැදිලි කිරීම)",
      "Explain the location and direction (ස්ථානය සහ දිශාව පැහැදිලි කිරීම)",
      "Use the information obtained from visual perception (දෘශය සංජානනයෙන් / visual perception ලොගත් වතාරුරු භාවිත කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Use the information obtained from visual perception (දෘශය සංජානනයෙන් ලොගත් වතාරුරු භාවිත කිරීම)",
    "kind": "mcq",
    "sinhalaText": "දෘශය ආොධිතභාවය (visual impairment) ඇති පුේගලයෙකු සමඟ සන්නිවේදනය කිරීමේදී මතක තො ගත යු කරුණු පහත ඒවා වේ. මේවා හැර:"
  },
  {
    "id": "lesson-03-q011",
    "moduleId": "lesson-03",
    "number": 11,
    "question": "A method in which you explain the location of the dish by the direction to which the hour hand of the clock is pointing at a certain time of the",
    "options": [
      "Braille (වේල් / Braille)",
      "Hour Position (පැය ස්ථානය / Hour Position)",
      "Clock Position (ඔරලෝසු ස්ථානය / Clock Position)",
      "Hand Position (අත් ස්ථානය / Hand Position)"
    ],
    "correctIndex": 2,
    "explanation": "Clock Position (ඔරලෝසු ස්ථානය / Clock Position)",
    "kind": "mcq",
    "sinhalaText": "දවවස් යම් වේලාවක ඔරලෝසුවේ පැය කටුව යොමු වී ඇති දිශාව අනුව ආහාර ඳුවන්/පිඟානේ පිහිටීම පැහැදිලි කරන ක්‍රමය වන්නේ:"
  },
  {
    "id": "lesson-03-q012",
    "moduleId": "lesson-03",
    "number": 12,
    "question": "Available tools for communicating information with people who are blind :",
    "options": [
      "Braille and Braille blocks (වේල් සහ වේල් බවලාක් / Braille and Braille blocks)",
      "Hour position (පැය ස්ථානය / Hour position)",
      "Clock position (ඔරලෝසු ස්ථානය / Clock position)",
      "Hand position (අත් ස්ථානය / Hand position)"
    ],
    "correctIndex": 0,
    "explanation": "Braille and Braille blocks (වේල් සහ වේල් බවලාක් / Braille and Braille blocks)",
    "kind": "mcq",
    "sinhalaText": "අන්ධ පුේගලයින් සමඟ වතාරුරු සන්නිවේදනය කිරීම සඳහා ඇති මෙවලම් වන්නේ:"
  },
  {
    "id": "lesson-03-q013",
    "moduleId": "lesson-03",
    "number": 13,
    "question": "The following are the points to remember when communicating a person with hearing disorder, EXCEPT :",
    "options": [
      "Converse with the user in as quiet place as possible (හැකිතාක් ශ්ශබද ස්ථානයක පරිශීලකයා සමඟ සංවාදවේ වයදීම)",
      "Talk to side of less impaired ears (ශ්‍රවණ ආොධය අඩු කන ඇති පැත්තට කතා කිරීම)",
      "Talk unnecessarily loudly (අනවශය ලෙස ශබද නඟා කතා කිරීම)",
      "Face the user while talking (කතා කරන ට පරිශීලකයාට මුහුණලා සිටීම)"
    ],
    "correctIndex": 2,
    "explanation": "Talk unnecessarily loudly (අනවශය ලෙස ශබද නඟා කතා කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණ ආොධයක් (hearing disorder) ඇති පුේගලයෙකු සමඟ සන්නිවේදනය කිරීමේදී මතක තො ගත යු කරුණු පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-03-q014",
    "moduleId": "lesson-03",
    "number": 14,
    "question": "Refers to the expression of meaning using a combination of finger and hand gestures and face and neck movements :",
    "options": [
      "Gestures (ඉඟි / Gestures)",
      "Body language (ශරීර භාෂාව / Body language)",
      "Sign language (සංඥා භාෂාව / Sign language)",
      "Nodding and agreeing (හිස සලා එකඟ වීම / Nodding and agreeing)"
    ],
    "correctIndex": 2,
    "explanation": "Sign language (සංඥා භාෂාව / Sign language)",
    "kind": "mcq",
    "sinhalaText": "ඇඟිලි සහ අත් ඉඟි මෙන්ම මුහුණේ සහ වගවලහි චලනයන්වේ සංයෝජනයක් භාවිත කරමින් අදහස් ප්‍රකාශ කිරීම මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-03-q015",
    "moduleId": "lesson-03",
    "number": 15,
    "question": "It is a state in which a person's function to listen and understand others, to read and understand documents, etc. declines due to the",
    "options": [
      "Dementia (ඩිවමන්ියා / Dementia)",
      "Aphasia (ඇව සියා - භාෂා චලන ආොධය / Aphasia)",
      "Aphycusia (Aphycusia — PDF හි ඇති පදය)",
      "Basybachia (Basybachia — PDF හි ඇති පදය)"
    ],
    "correctIndex": 1,
    "explanation": "Aphasia (ඇව සියා / Aphasia)",
    "kind": "mcq",
    "sinhalaText": "කථනය පාලනය කරන මස්තිෂ්කවේ (cerebrum) කොටසට සිදුවන හාිය වහ්ුවෙන් අන් අයට සවන් දීමේ සහ තේරුම් ගැනීමේ, වල්ඛන කියවා තේරුම් ගැනීවම්ආදී ක්‍රියාකාරකම් පිරිවහන තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-03-q016",
    "moduleId": "lesson-03",
    "number": 16,
    "question": "The following are the points to remember when communicating with a person with aphasia. EXCEPT :",
    "options": [
      "Ask open type question (වෘත ආකාරවේ ප්‍රශ්න ඇසීම / Ask open type question)",
      "Do not point out minor speech errors (සුළු කථන වැරදි පෙන්වා නොදීම)",
      "Talk to the person slowly and clearly (පුේගලයාට වසමින් සහ පැහැදිලිව කතා කිරීම)",
      "Use pictures, photos, hand and body gestures (පින්ූර, ඡායාරූප, අත් සහ ශරීර ඉඟි භාවිත කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Ask open type question (වෘත ආකාරවේ ප්‍රශ්න ඇසීම) (With aphasia, simple/closed or easily\nanswerable questions are generally easier than complex open-ended questions.)\nSensory and accessible communication illustration (clock position, braille, and hearing support)",
    "kind": "mcq",
    "sinhalaText": "ඇව සියා (aphasia) තත්ත්වය ඇති පුේගලයෙකු සමඟ සන්නිවේදනය කිරීමේදී මතක තො ගත යු කරුණු පහත ඒවා වේ. මේවා හැර:"
  },
  {
    "id": "lesson-03-q017",
    "moduleId": "lesson-03",
    "number": 17,
    "question": "The following are the points to remember when communicating with a person with dementia. EXCEPT :",
    "options": [
      "Ask open type question (වෘත ආකාරවේ ප්‍රශ්න ඇසීම)",
      "Communicate with easy to understand words (තේරුම් ගැනීමට පහසු වචනවලින් සන්නිවේදනය කිරීම)",
      "Talk to the person slowly and clearly (පුේගලයාට වසමින් සහ පැහැදිලිව කතා කිරීම)",
      "Accept and sympathize with the person (පුේගලයා පිළිගෙන අනුකම්පා/සහයෝගය දැක්වීම)"
    ],
    "correctIndex": 0,
    "explanation": "Ask open type question (වෘත ආකාරවේ ප්‍රශ්න ඇසීම)",
    "kind": "mcq",
    "sinhalaText": "ඩිවමන්ියා (dementia) ඇති පුේගලයෙකු සමඟ සන්නිවේදනය කිරීමේදී මතක තො ගත යු කරුණු පහත ඒවා වේ. මේවා හැර:"
  },
  {
    "id": "lesson-03-q018",
    "moduleId": "lesson-03",
    "number": 18,
    "question": "Nursing care is provided by the following personnel, EXCEPT :",
    "options": [
      "Care workers (සත්කාර සේකෙයින් / Care workers)",
      "Cook (කෝකියා / Cook)",
      "Medical (වවදය / Medical)",
      "Laundry Service (රෙදි වස්දුම් සේවාව / Laundry Service)"
    ],
    "correctIndex": 1,
    "explanation": "Cook (කෝකියා / Cook) / d) Laundry Service (රෙදි වස්දුම් සේවාව / Laundry Service) (In caregiving team\ndistinctions, cooks and laundry staff provide food/laundry support rather than direct nursing/caregiving services; b is typically the\nintended non-care/support role.)",
    "kind": "mcq",
    "sinhalaText": "හෙද සත්කාර සපයනු ලෙන්නේ පහත සඳහන් කාේය මේඩලය සි, මේවා හැර:"
  },
  {
    "id": "lesson-03-q019",
    "moduleId": "lesson-03",
    "number": 19,
    "question": "The following are the methods of sharing information, EXCEPT :",
    "options": [
      "Reporting (වාේතා කිරීම / Reporting)",
      "Hand and body gestures (අත් සහ ශරීර ඉඟි / Hand and body gestures)",
      "Holding a meeting (රැස්වීමක් පැවැත්වීම / Holding a meeting)",
      "Keeping records (වාේතා තො ගැනීම / Keeping records)"
    ],
    "correctIndex": 1,
    "explanation": "Hand and body gestures (අත් සහ ශරීර ඉඟි / Hand and body gestures) (In care information\nmanagement, reporting, holding meetings, and keeping records are formal information-sharing methods.)",
    "kind": "mcq",
    "sinhalaText": "වතාරුරු බෙදා ගැනීමේ ක්‍රම පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-03-q020",
    "moduleId": "lesson-03",
    "number": 20,
    "question": "The following are the basics of keeping records of nursing care, EXCEPT :",
    "options": [
      "Keep records at the end of your shift (ඔවබ වැඩ මුරය අවසානවේ වාේතා තො ගැනීම)",
      "Record the time accurately (වේලාව වැරදිව සටහන් කිරීම)",
      "Record Facts (කරුණු / Facts සටහන් කිරීම)",
      "Record the date to when the incident happened (සිදුවීම සිදු වූ දිනය සටහන් කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Keep records at the end of your shift (ඔවබ වැඩ මුරය අවසානවේ වාේතා තො ගැනීම) (Records should be\nwritten promptly/accurately while details are fresh rather than delayed until the end of a shift.)",
    "kind": "mcq",
    "sinhalaText": "හෙද සත්කාර වාේතා තො ගැනීමේ මූලික කරුණු පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-03-q021",
    "moduleId": "lesson-03",
    "number": 21,
    "question": "The following are the details of subjective facts, EXCEPT :",
    "options": [
      "What the user saw (පරිශීලකයා දුටු වේ)",
      "Remarks of the user (පරිශීලකයාගේ ප්‍රකාශ / Remarks)",
      "What the care worker observed (සත්කාර සේවකයා රීක්ෂණය කළ වේ)",
      "What the user complained about (පරිශීලකයා පැමිණිලි කළ වේ)"
    ],
    "correctIndex": 2,
    "explanation": "What the care worker observed (සත්කාර සේවකයා රීක්ෂණය කළ වේ) (Direct caregiver observations\nare objective facts, whereas user statements, complaints, and perceptions are subjective information.)",
    "kind": "mcq",
    "sinhalaText": "ආත්ීය කරුණු (subjective facts) පිළිෙඳ ස්තර පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-03-q022",
    "moduleId": "lesson-03",
    "number": 22,
    "question": "The following are the details of objective facts, EXCEPT:",
    "options": [
      "What the care worker observes (සත්කාර සේවකයා රීක්ෂණය කරන වේ)",
      "Blood pressure value (රුධිර පීඩන අගය / Blood pressure value)",
      "Body temperature value (ශරීර උෂ්ණත්ව අගය / Body temperature value)",
      "What the user experienced (පරිශීලකයා අත්ිඳි වේ)"
    ],
    "correctIndex": 3,
    "explanation": "What the user experienced (පරිශීලකයා අත්ිඳි වේ) (Measured vitals and direct observations are\nobjective; the user's subjective experience/feeling is subjective.)",
    "kind": "mcq",
    "sinhalaText": "වාස්තික කරුණු (objective facts) පිළිෙඳ ස්තර පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-03-q023",
    "moduleId": "lesson-03",
    "number": 23,
    "question": "Which of the following is NOT included in the person providing the information :",
    "options": [
      "Report it concisely (කෙටියෙන් සහ පැහැදිලිව වාේතා කිරීම)",
      "Take notes (සටහන් ගැනීම)",
      "Report the facts and opinions separately (කරුණු සහ මත වවන් වවන්ව වාේතා කිරීම)",
      "Report the information by the talking the place and timing into consideration (ස්ථානය සහ වේලාව සැලකිල්ලට ගිමින් වතාරුරු වාේතාකිරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Take notes (සටහන් ගැනීම) (Reporting concisely, separating facts from opinions, and considering\nplace/timing are reporting responsibilities of the sender/reporter.)",
    "kind": "mcq",
    "sinhalaText": "වතාරුරු සපයන පුේගලයාට අදාළව පහත ඒවායින් ඇතුළත් මනාවන්මන් කුමක්ද:"
  },
  {
    "id": "lesson-03-q024",
    "moduleId": "lesson-03",
    "number": 24,
    "question": "Which of the following is NOT included in the person receiving the information :",
    "options": [
      "Report it concisely (කෙටියෙන් වාේතා කිරීම)",
      "Take notes (සටහන් ගැනීම)",
      "Listen and distinguish facts from opinions (සවන් දී කරුණු සහ මත වවන් කර හඳුනා ගැනීම)",
      "Repeat what the other party has said (අනෙක් පාේශ්වය පැවසූ වේ නැවත පැවසීම)"
    ],
    "correctIndex": 0,
    "explanation": "Report it concisely (කෙටියෙන් වාේතා කිරීම) (The receiver listens, takes notes, distinguishes facts from\nopinions, and confirms/repeats back; \"report it concisely\" describes the person reporting/providing information.)",
    "kind": "mcq",
    "sinhalaText": "වතාරුරු ලබා ගන්නා පුේගලයාට අදාළව පහත ඒවායින් ඇතුළත් මනාවන්මන් කුමක්ද:"
  },
  {
    "id": "lesson-03-q025",
    "moduleId": "lesson-03",
    "number": 25,
    "question": "It is when you have trouble or there is something you do not understand, Seek advice from colleagues, specialist, etc.... :",
    "options": [
      "Recording (වාේතාගත කිරීම / Recording)",
      "Reporting (වාේතා කිරීම / Reporting)",
      "Consulting (උපවදස් ලබා ගැනීම / Consulting)",
      "Confirming (තහවුරු කිරීම / Confirming)"
    ],
    "correctIndex": 2,
    "explanation": "Consulting (උපවදස් ලබා ගැනීම / Consulting)",
    "kind": "mcq",
    "sinhalaText": "ඔෙට ගැටලුවක් ඇති වූ ට හෝ ඔෙට නොවත්වරන යමක් ඇති ට, සගයන්වගන්, වශ්ෂඥයන්වගන් ආදියෙන් උපවදස් පැතීම වන්නේ:"
  },
  {
    "id": "lesson-03-q026",
    "moduleId": "lesson-03",
    "number": 26,
    "question": "Which of the following is NOT true in Aphasia :",
    "options": [
      "Aphasia is a Communication disorder (ඇව සියා යනු සන්නිවේදන ආොධයකි)",
      "It refers to problems in swallowing certain food or liquids (එය ඇතැම් ආහාර හෝ ද්‍රව ගිලීමේ ගැටලු පෙන්නුම් කරයි)",
      "A person with aphasia can have trouble speaking, reading, writing and understanding language. (ඇව සියා ඇති පුේගලයෙකුට කතා කිරීම,\nකියවීම, ලිවීම සහ භාෂාව තේරුම් ගැනීමේ ගැටලු ඇති ය හැක.)",
      "It is a disorder that results from damage to portions of the brain that are responsible for language. It interferes with one's verbal\ncommunication, written communication or both. (එය භාෂාවට වගකිව යු මොළවේ කොටස්වලට සිදුවන හාියෙන් ඇතිවන ආොධයකි. එය පුේගලයෙකුවේ වාචික සන්නිවේදනයට, ලිඛිත සන්නිවේදනයට හෝ දෙකටම ාධා කරයි.)"
    ],
    "correctIndex": 1,
    "explanation": "It refers to problems in swallowing certain food or liquids (එය ඇතැම් ආහාර හෝ ද්‍රව ගිලීමේ ගැටලුපෙන්නුම් කරයි) (Swallowing difficulty is dysphagia, not aphasia.)",
    "kind": "mcq",
    "sinhalaText": "ඇව සියා (Aphasia) සම්ෙන්ධයෙන් පහත ඒවායින් සතය මනාවන්මන් කුමක්ද:"
  },
  {
    "id": "lesson-03-q027",
    "moduleId": "lesson-03",
    "number": 27,
    "question": "What is the proper way to communicate with the user :",
    "options": [
      "Use hand gesture for the user to understand (පරිශීලකයාට තේරුම් ගැනීමට අත් ඉඟි භාවිත කිරීම)",
      "Say it in a very loud voice so he can hear you clearly (ඔහුට පැහැදිලිව ඇවසන පරිදි ඉතා ශබද නඟා පැවසීම)",
      "Always laugh at the user even if you do not understand (ඔෙට නොතේරුණත් සැමිටම පරිශීලකයාට සිනාසීම)",
      "Listen to the user and observe his/her facial expressions (පරිශීලකයාට සවන් දී ඔහුගේ/ඇයගේ මුහුණේ ඉරියව් රීක්ෂණය කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Listen to the user and observe his/her facial expressions (පරිශීලකයාට සවන් දී ඔහුගේ/ඇයගේ මුහුණේඉරියව් රීක්ෂණය කිරීම)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා සමඟ සන්නිවේදනය කිරීමේ වැරදි ක්‍රමය කුමක්ද:"
  },
  {
    "id": "lesson-03-q028",
    "moduleId": "lesson-03",
    "number": 28,
    "question": "Which of the following is the resulting disorder from brain damage on the portion of the brain that is responsible for language :",
    "options": [
      "Aphasia (ඇව සියා / Aphasia)",
      "Apraxia (ඇප්‍රැක්සියා / Apraxia)",
      "Dysphagia (ඩිස්ව ජියා - ගිලීමේ අපහසුව / Dysphagia)",
      "Dysarthria (ඩිසාේියා - කථන මාංශ වේි ගැටලුව / Dysarthria)"
    ],
    "correctIndex": 0,
    "explanation": "Aphasia (ඇව සියා / Aphasia)",
    "kind": "mcq",
    "sinhalaText": "භාෂාවට වගකිව යු මොළවේ කොටසට සිදුවන මොළවේ හාියකින් ඇතිවන ආොධය පහත ඒවායින් කුමක්ද:"
  },
  {
    "id": "lesson-03-q029",
    "moduleId": "lesson-03",
    "number": 29,
    "question": "For the protection of user's information or his/her condition's confidentiality, which of the following is correct :",
    "options": [
      "Sharing information with reliable friends (ශ්වාසවන්ත මිුරන් සමඟ වතාරුරු බෙදා ගැනීම)",
      "Sharing records with the care team members (සත්කාර කේඩායවම් සාමාජිකයන් සමඟ වාේතා බෙදා ගැනීම)",
      "Sharing information outside workplace to know other's opinion (අන් අයගේ මතය දැන ගැනීමට සේවා ස්ථානයෙන් පිටත වතාරුරු බෙදා ගැනීම)",
      "Sharing the user's information through the social media or the internet (සමාජ මාධය හෝ අන්තේජාලය හරහා පරිශීලකයාගේ වතාරුරු බෙදාගැනීම)"
    ],
    "correctIndex": 1,
    "explanation": "Sharing records with the care team members (සත්කාර කේඩායවම් සාමාජිකයන් සමඟ වාේතා බෙදා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාගේ වතාරුරු හෝ ඔහුගේ/ඇයගේ තත්ත්වේ රහසයභාවය ආරක්ෂා කිරීම සඳහා, පහත ඒවායින් වැරදි වන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-03-q030",
    "moduleId": "lesson-03",
    "number": 30,
    "question": "How to communicate with the patient with dementia :",
    "options": [
      "Constantly change the environment (පරිසරය රන්තරයෙන් වෙනස් කිරීම)",
      "Use easy to understand words (තේරුම් ගැනීමට පහසු වචන භාවිත කිරීම)",
      "Tell them false information (ඔවුන්ට අසතය වතාරුරු පැවසීම)"
    ],
    "correctIndex": 1,
    "explanation": "Use easy to understand words (තේරුම් ගැනීමට පහසු වචන භාවිත කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ඩිවමන්ියා ඇති රෝගියෙකු/පරිශීලකයෙකු සමඟ සන්නිවේදනය කරන්නේ වකවස්ද:"
  },
  {
    "id": "lesson-03-q031",
    "moduleId": "lesson-03",
    "number": 31,
    "question": "What is the appropriate purpose of recording :",
    "options": [
      "To promote safety the user (පරිශීලකයාගේ ආරක්ෂාව ප්‍රවේධනය කිරීම)",
      "Team communication (කේඩායම් සන්නිවේදනය / Team communication)",
      "To promote confidentiality (රහසයභාවය ප්‍රවේධනය කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "To promote safety the user (පරිශීලකයාගේ ආරක්ෂාව ප්‍රවේධනය කිරීම) / b) Team communication\n(කේඩායම් සන්නිවේදනය) (In caregiving documentation, accurate records support user safety and continuity/communication across the\ncare team.)",
    "kind": "mcq",
    "sinhalaText": "වාේතා තො ගැනීමේ සුදුසු අරමුණ කුමක්ද:"
  },
  {
    "id": "lesson-03-q032",
    "moduleId": "lesson-03",
    "number": 32,
    "question": "Which is the appropriate meaning of Aphasia :",
    "options": [
      "A conditions where the elderly sees something that doesn't exist (වැඩිහිටියෙකුට නොපවතින යමක් වපවනන තත්ත්වයකි)",
      "A conditions where the elderly loses their ability to speak (වැඩිහිටියෙකුට කතා කිරීමේ හැකියාව අහිමි වන තත්ත්වයකි)",
      "A conditions where the elderly forgot their names (වැඩිහිටියෙකුට තම නම් අමතක වන තත්ත්වයකි)"
    ],
    "correctIndex": 1,
    "explanation": "A conditions where the elderly loses their ability to speak (වැඩිහිටියෙකුට කතා කිරීමේ හැකියාව අහිමි වන තත්ත්වයකි)",
    "kind": "mcq",
    "sinhalaText": "ඇව සියා (Aphasia) යන්වනහි සුදුසු තේරුම කුමක්ද:"
  },
  {
    "id": "lesson-04-q001",
    "moduleId": "lesson-04",
    "number": 1,
    "question": "What kind of specialized profession is a care worker, and what kind of work do they do?",
    "options": [
      "They support people who have difficulties in their daily lives due to aging or disabilities so that they\ncan continue living a lifestyle unique to themselves. (වයස්ගත වීම හෝ ආබාධයක් නිසා දෛනික ජීවිතයට අපහසුතා ඇති පුද්ගලයන්ට, ඔවුන්ගේම ජීවන රටාව දිගටම පවත්වා ගෙන යාමට සහාය වීම Caregiver ගේ කාර්යයයි.)",
      "They diagnose illnesses and prescribe hospital surgery schedules. (ඔවුන් රෝග හඳුනාගෙන රෝහල් ශල්‍යකර්ම කාලසටහන් නියම කරයි.)",
      "They only manage building maintenance and accounting ledgers. (ඔවුන් ගොඩනැඟිලි නඩත්තුව සහ ගිණුම් පොත් පමණක් කළමනාකරණය කරයි.)",
      "They replace family members and make all legal and financial decisions for the user. (ඔවුන් පවුලේසාමාජිකයන් වෙනුවට පෙනී සිටිමින් පරිශීලකයාගේ සියලු නීතිමය හා මූල්‍ය තීරණ ගනියි.)"
    ],
    "correctIndex": 0,
    "explanation": "They support people who have difficulties in their daily lives due to\naging or disabilities so that they can continue living a lifestyle unique to themselves. (වයස්ගත වීම හෝආබාධයක් නිසා දෛනික ජීවිතයට අපහසුතා ඇති පුද්ගලයන්ට, ඔවුන්ගේම ජීවන රටාව දිගටම පවත්වා ගෙන යාමට සහාය වීම Caregiver ගේ කාර්යයයි.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේවකයෙකු (care worker) යනු කුමන ආකාරයේ විශේෂිත වෘත්තියක්ද, සහ ඔවුන් කරන්නේ කුමන ආකාරයේ කාර්යයක්ද?"
  },
  {
    "id": "lesson-04-q002",
    "moduleId": "lesson-04",
    "number": 2,
    "question": "What does human dignity mean?",
    "options": [
      "It means that each and every person is respected as an individual. (සෑම පුද්ගලයෙකුම වෙනම පුද්ගලයෙකු ලෙස ගෞරවයට ලක් කිරීම මිනිස් ගෞරවයයි.)",
      "It means prioritizing facility rules over a person's personal feelings. (පුද්ගලයෙකුගේ හැඟීම්වලට වඩා ආයතනයේ නීතිවලට ප්‍රමුඛත්වය දීමයි.)",
      "It means giving care only when the user has no family support. (පරිශීලකයාට පවුලේ සහායක් නොමැතිවිට පමණක් සත්කාර ලබා දීමයි.)",
      "It means treating all users identically without considering individual differences. (පුද්ගල වෙනසේකම්නොසලකා සියලු පරිශීලකයන්ට එකම ආකාරයෙන් සැලකීමයි.)"
    ],
    "correctIndex": 0,
    "explanation": "It means that each and every person is respected as an individual.\n(සෑම පුද්ගලයෙකුම වෙනම පුද්ගලයෙකු ලෙස ගෞරවයට ලක් කිරීම මිනිස් ගෞරවයයි.)",
    "kind": "mcq",
    "sinhalaText": "මානව ගරුත්වය / මිනිස් ගෞරවය (human dignity) යන්නෙන් අදහස් කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q003",
    "moduleId": "lesson-04",
    "number": 3,
    "question": "What kinds of things are included in QOL (Quality of Life)?",
    "options": [
      "Only physical strength and muscle mass measurements. (ශාරීරික ශක්තිය සහ මාංශපේශි මිනුම් පමණි.)",
      "It includes satisfaction and happiness with life, reasons for living (ikigai), and so on. (QOL තුළ ජීවිතය පිළිබඳ තෘප්තිය, සුට සහ ජීවිතයේ අරමුණ වැනි කරුණු ඇතුළත් වේ.)",
      "Strict daily schedules controlled entirely by staff. (කාර්ය මණ්ඩලය විසින් සම්ූර්ණයෙන් පාලනය කරන දැඩිදෛනික කාලසටහන්.)",
      "Limiting outdoor walks to prevent minor fatigue. (සුළු සතසහට්ටුවක් වළක්වා ගැනීමට එළිමහන් ඇවිදීම් සීමාකිරීම.)"
    ],
    "correctIndex": 1,
    "explanation": "It includes satisfaction and happiness with life, reasons for living\n(ikigai), and so on. (QOL තුළ ජීවිතය පිළිබඳ තෘප්තිය, සුට සහ ජීවිතයේ අරමුණ වැනි කරුණු ඇතුළත් වේ.)",
    "kind": "mcq",
    "sinhalaText": "QOL (Quality of Life / ජීවන තත්ත්වය) තුළ ඇතුළත් වන්නේ කුමන ආකාරයේ දේවල්ද?"
  },
  {
    "id": "lesson-04-q004",
    "moduleId": "lesson-04",
    "number": 4,
    "question": "What kind of concept is normalization?",
    "options": [
      "It is the concept that people with disabilities, just like people without disabilities, should not face\nprejudice, should have their human rights protected, and should be able to live a normal life. (ආබාධ සහිත පුද්ගලයන්ටද ආබාධ නොමැති පුද්ගලයන් මෙන් අගියකට ලක් නොවී, මානව හිමිකම් ආරක්ෂා කරගෙන සාමාන්‍ය ජීවිතයක් ගත කළ හැකි බව පිළිගන්නා සංකල්පයයි.)",
      "It means forcing people with disabilities to adapt to institutional routines regardless of their wishes.\n(ආබාධ සහිත පුද්ගලයන්ගේ කැමැත්ත නොබලා ආයතනික රටාවන්ට හැඩගැසීමට බල කිරීමයි.)",
      "It means separating elderly people from community life. (වැඩිහිටියන් ප්‍රජා ජීවිතයෙන් සවන් කර තැබීමයි.)",
      "It means ignoring assistive devices so users appear unassisted. (සහායක උපකරණ නොසලකාහැරීමයි.)"
    ],
    "correctIndex": 0,
    "explanation": "It is the concept that people with disabilities, just like people\nwithout disabilities, should not face prejudice, should have their human rights protected, and should\nbe able to live a normal life. (ආබාධ සහිත පුද්ගලයන්ටද ආබාධ නොමැති පුද්ගලයන් මෙන් අගියකට ලක් නොවී,\nමානව හිමිකම් ආරක්ෂා කරගෙන සාමාන්‍ය ජීවිතයක් ගත කළ හැකි බව පිළිගන්නා සංකල්පයයි.)",
    "kind": "mcq",
    "sinhalaText": "සාමාන්‍යකරණය (normalization) යනු කුමන ආකාරයේ සංකල්පයක්ද?"
  },
  {
    "id": "lesson-04-q005",
    "moduleId": "lesson-04",
    "number": 5,
    "question": "When supporting the independence of a care recipient, what does the care worker do?",
    "options": [
      "They do every task for the recipient so nothing takes extra time. (කාලය ඉතිරි කර ගැනීමට සියලු කාර්යයන් තමන්ම කරයි.)",
      "They support the care recipient so that they can make their own choices, decide for themselves,\nand do what they can by themselves. (රැකවරණ ලබන පුද්ගලයාට තමන්ම තෝරා ගෙන තීරණය කිරීමටත්,\nතමන්ට කළ හැකි දේ තමන්ම කිරීමටත් සහාය දිය යුතුය.)",
      "They make decisions on behalf of the family without asking the recipient. (පරිශීලකයාගෙන් නොඅසාපවුල වෙනුවෙන් තීරණ ගනියි.)",
      "They restrict choices when a recipient is slow to answer. (පිළිතුරු දීමට ප්‍රමාද වන විට තේරීම් සීමා කරයි.)"
    ],
    "correctIndex": 1,
    "explanation": "They support the care recipient so that they can make their own\nchoices, decide for themselves, and do what they can by themselves. (රැකවරණ ලබන පුද්ගලයාට තමන්ම තෝරා ගෙන තීරණය කිරීමටත්, තමන්ට කළ හැකි දේ තමන්ම කිරීමටත් සහාය දිය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකුගේ ස්වාධීනත්වයට (independence) සහාය වන විට, සත්කාර සේවකයා කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q006",
    "moduleId": "lesson-04",
    "number": 6,
    "question": "What does self-selection mean?",
    "options": [
      "It means choosing what to do by oneself according to one's lifestyle and values. (තම ජීවන රටාව සහ වටිනාකම් අනුව කළ යුතු දේ තමන් විසින්ම තෝරා ගැනීම ස්වයං තේරීමයි.)",
      "It means letting the care worker pick meals and clothes every day. (සෑම දිනකම ආහාර සහ ඇඳුම් සත්කාර සේවකයාට තෝරා ගැනීමට ඉඩ දීමයි.)",
      "It means following only the preferences of roommates. (කාමර සගයන්සේ කැමැත්ත පමණක් අනුගමනයකිරීමයි.)",
      "It means avoiding personal preferences to fit a group norm. (සමූහ රටාවකට ගැළපීමට පෞද්ගලික කැමැත්ත මඟ හැරීමයි.)"
    ],
    "correctIndex": 0,
    "explanation": "It means choosing what to do by oneself according to one's\nlifestyle and values. (තම ජීවන රටාව සහ වටිනාකම් අනුව කළ යුතු දේ තමන් විසින්ම තෝරා ගැනීම ස්වයං තේරීමයි.)",
    "kind": "mcq",
    "sinhalaText": "ස්වයං තේරීම (self-selection) යන්නෙන් අදහස් කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q007",
    "moduleId": "lesson-04",
    "number": 7,
    "question": "What causes a person's lifestyle to differ?",
    "options": [
      "Only age and room number. (වයස සහ කාමර අාංකය පමණි.)",
      "It differs depending on the country's culture and customs, individual intentions, values,\npreferences, and more. (රසට්ට සාංසේකෘතිය, සම්ප්‍රදායන්, පුද්ගලයාසේ අදහස්, වටිනාකම් සහ විස ෂ කැමැත්ත අනුව ජීවන රටාව වෙනසේ වේ.)",
      "Only the care worker's personal background. (සත්කාර සේවකයාසේ පෞද්ගලික පසුබිම පමණි.)",
      "Lifestyles never differ among people in the same region. (එකම ප්‍රදේ සේ අය අතර ජීවන රටා කිසිවිසටකත් වෙනසේ නොසේ.)"
    ],
    "correctIndex": 1,
    "explanation": "It differs depending on the country's culture and customs,\nindividual intentions, values, preferences, and more. (රසට්ට සාංසේකෘතිය, සම්ප්‍රදායන්, පුද්ගලයාසේ අදහස්,\nවටිනාකම් සහ විස ෂ කැමැත්ත අනුව ජීවන රටාව වෙනසේ වේ.)",
    "kind": "mcq",
    "sinhalaText": "පුද්ගලයෙකුගේ ජීවන රටාව වෙනසේ වීමට හේතු වන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q008",
    "moduleId": "lesson-04",
    "number": 8,
    "question": "During bathing and excretion, how does the care worker give consideration to privacy?",
    "options": [
      "They protect privacy so that the care recipient does not feel embarrassed. (සේනානය හෝ මලපහ කිරීමේදී ලැජ්ජාවක් හෝ අපහසුතාවයක් ඇති නොවන ලෙස භාවිතා කරන්නාසේ පෞද්ගලිකත්වය ආරක්ෂා කළ යුතුය.)",
      "They keep doors open for quick staff monitoring. (කාර්ය මණ්ඩලයට ඉක්මනින් බැලීමට දොරවල් විවෘතව තබයි.)",
      "They discuss bathing details loudly in common hallways. (පොදු සකාරිඩෝවල සේනානය කිරීමේ විසේතර බ්ද නඟා කතා කරයි.)",
      "They take photos to show family members without asking. (නොඅසා පවුලේ අයට පෙන්වීමට ඡායාරූප ගනියි.)"
    ],
    "correctIndex": 0,
    "explanation": "They protect privacy so that the care recipient does not feel\nembarrassed. (සේනානය හෝ මලපහ කිරීමේදී ලැජ්ජාවක් හෝ අපහසුතාවයක් ඇති නොවන ලෙස භාවිතාකරන්නාසේ පෞද්ගලිකත්වය ආරක්ෂා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "සේනානය කිරීමේදී සහ මළපහ/මුත්‍ර පිට කිරීමේදී (bathing and excretion), සත්කාර සේවකයා පෞද්ගලිකත්වය ගැන සැලකිලිමත් වන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q009",
    "moduleId": "lesson-04",
    "number": 9,
    "question": "Is it okay for a care worker to casually talk about confidential information of a care recipient to other",
    "options": [
      "Yes, if it is to close neighbors. (ඔේ, සමීප අසල්වැසියන් සමඟ නම්.)",
      "No, you must not talk about it casually. (නැත. භාවිතා කරන්නා පිළිබඳ රහසය සතාරුරු අවසරයකින් සතාරව වෙනත් පුද්ගලයන්ට පැවසිය නොහැක.)",
      "Yes, during break time outside the facility. (ඔේ, ආයතනයෙන් පිටත විසේක කාලසේදී.)",
      "Yes, whenever a coworker is curious. (ඔේ, සගයෙකුට කුහලයක් ඇති වූ විට.)"
    ],
    "correctIndex": 1,
    "explanation": "No, you must not talk about it casually. (නැත. භාවිතා කරන්නා පිළිබඳ රහසය සතාරුරු අවසරයකින් සතාරව වෙනත් පුද්ගලයන්ට පැවසිය නොහැක.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේවකයෙකුට රැකවරණ ලබන්නෙකුගේ රහසය සතාරුරු අනෙක් අය සමඟ සැහැල්ලුවෙන් කතා කිරීම සුදුසුද?"
  },
  {
    "id": "lesson-04-q010",
    "moduleId": "lesson-04",
    "number": 10,
    "question": "Is it okay to post a care recipient's information on SNS without obtaining their consent?",
    "options": [
      "Yes, if the photo looks cheerful. (ඔේ, ඡායාරූපය සුටින් සපසන් නම්.)",
      "Yes, if names are not written. (ඔේ, නම් ලියා නැති නම්.)",
      "No, you must not post it without obtaining consent. (නැත. භාවිතා කරන්නාසේ කැමැත්ත ලබා නොගෙන ඔහු/ඇය පිළිබඳ සතාරුරු SNS හෝ අන්තර්ජාලසේ පළ කළ නොහැක.)",
      "Yes, if posted on a private account. (ඔේ, පෞද්ගලික ගිණුමක පළ කරන්නේ නම්.)"
    ],
    "correctIndex": 2,
    "explanation": "No, you must not post it without obtaining consent. (නැත. භාවිතාකරන්නාසේ කැමැත්ත ලබා නොගෙන ඔහු/ඇය පිළිබඳ සතාරුරු SNS හෝ අන්තර්ජාලසේ පළ කළ නොහැක.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකුගේ කැමැත්ත ලබා නොගෙන ඔහුසේ/ඇයසේ සතාරුරු SNS (සමාජ මාධය) හි පළ කිරීම සුදුසුද?"
  },
  {
    "id": "lesson-04-q011",
    "moduleId": "lesson-04",
    "number": 11,
    "question": "What kind of acts are included in physical restraint?",
    "options": [
      "Offering verbal encouragement and holding a hand gently for balance. (සමබරතාව සඳහා වාචික දිරිගැන්වීමක් ලබා දී මෘදු ලෙස අතක් අල්ලා ගැනීම.)",
      "Acts such as tying hands and feet with strings, locking them inside a room, or using a restraint belt.\n(අත් පා ලණුවකින් බැඳීම, කාමරයට අගුළු දමා සිර කිරීම, restraint belt එකක් භාවිතා කර චලනය වීම වැළැක්වීම වැනික්‍රියා ශාරීරික සීමා කිරීම් වේ.)",
      "Adjusting lighting and room temperature for comfort. (පහසුව සඳහා ආලෝකය සහ කාමර උෂේණත්වයකෙසේ කිරීම.)",
      "Providing a walking cane requested by the user. (පරිශීලකයා ඉල්ලා සිටින ඇවිදින සේවැලක් ලබා දීම.)"
    ],
    "correctIndex": 1,
    "explanation": "Acts such as tying hands and feet with strings, locking them inside\na room, or using a restraint belt. (අත් පා ලණුවකින් බැඳීම, කාමරයට අගුළු දමා සිර කිරීම, restraint belt එකක්භාවිතා කර චලනය වීම වැළැක්වීම වැනි ක්‍රියා ශාරීරික සීමා කිරීම් වේ.)",
    "kind": "mcq",
    "sinhalaText": "භෞතික සීමා කිරීම් (physical restraint) තුළ ඇතුළත් වන්නේ කුමන ආකාරයේ ක්‍රියාද?"
  },
  {
    "id": "lesson-04-q012",
    "moduleId": "lesson-04",
    "number": 12,
    "question": "What is it called when you hit or push a care recipient and cause physical injury?",
    "options": [
      "Economic abuse (ආර්තික අපයෝජනය)",
      "It is called physical abuse. (පහර දීම, තල්ලු කිරීම වැනි ක්‍රියාවලින් රීරයට හානි කිරීම ශාරීරික අපයෝජනයලෙස හැඳින්සේ.)",
      "Normalization (සාමාන්‍යකරණය)",
      "Assessment (තක්සේරුව)"
    ],
    "correctIndex": 1,
    "explanation": "It is called physical abuse. (පහර දීම, තල්ලු කිරීම වැනි ක්‍රියාවලින්රීරයට හානි කිරීම ශාරීරික අපයෝජනය ලෙස හැඳින්සේ.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකුට පහර දීමෙන් හෝ තල්ලු කිරීමෙන් ශාරීරික හානියක් සිදු කරන විට එය හඳුන්වන්නේ කුමක් ලෙසද?"
  },
  {
    "id": "lesson-04-q013",
    "moduleId": "lesson-04",
    "number": 13,
    "question": "What is it called when you threaten or make fun of a care recipient to cause psychological injury?",
    "options": [
      "It is called psychological abuse. (බිය ගැන්වීම, අපහාස කිරීම වැනි ක්‍රියා වලින් මානසික හානියක් සිදු කිරීම මානසික අපයෝජනයයි.)",
      "Physical therapy (භෞත චිකිත්සාව)",
      "Care plan evaluation (සත්කාර සැලසුම් ඇගයීම)",
      "Self-selection (ස්වයං තේරීම)"
    ],
    "correctIndex": 0,
    "explanation": "It is called psychological abuse. (බිය ගැන්වීම, අපහාස කිරීම වැනි ක්‍රියාවලින් මානසික හානියක් සිදු කිරීම මානසික අපයෝජනයයි.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකුට මානසික හානියක් සිදු කිරීම සඳහා තර්ජනය කිරීම හෝ විහිළුවට/අපහාසයට ලක් කිරීම හඳුන්වන්නේ කුමක් ලෙසද?"
  },
  {
    "id": "lesson-04-q014",
    "moduleId": "lesson-04",
    "number": 14,
    "question": "What is it called when you neglect a care recipient who needs care?",
    "options": [
      "It is called neglect or abandonment. (රැකවරණය අව ය පුද්ගලයෙකු නොසලකා හැර රැකවරණය ලබානොදීම රැකවරණ අත්හැරීම ලෙස හැඳින්සේ.)",
      "Inter-professional collaboration (අන්තර්-වෘත්තීය සහයෝගීතාව)",
      "Hand hygiene (අත් පිරිසිදු කිරීම)",
      "Home visit service (නිවාස සාංචාර සේවාව)"
    ],
    "correctIndex": 0,
    "explanation": "It is called neglect or abandonment. (රැකවරණය අව ය පුද්ගලයෙකුනොසලකා හැර රැකවරණය ලබා නොදීම රැකවරණ අත්හැරීම ලෙස හැඳින්සේ.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර අව ය රැකවරණ ලබන්නෙකු නොසලකා හරින විට එය හඳුන්වන්නේ කුමක් ලෙසද?"
  },
  {
    "id": "lesson-04-q015",
    "moduleId": "lesson-04",
    "number": 15,
    "question": "What is it called when you unfairly use a care recipient's money or property?",
    "options": [
      "It is called economic abuse. (භාවිතා කරන්නාසේ මුදල් හෝ සද්පළ අසාධාරණ ලෙස භාවිතා කිරීම ආර්තික අපයෝජනයයි.)",
      "Sexual abuse (ලිාංගික අපයෝජනය)",
      "Observation (නිරීක්ෂණය)",
      "Base of support (ආධාරක පදනම)"
    ],
    "correctIndex": 0,
    "explanation": "It is called economic abuse. (භාවිතා කරන්නාසේ මුදල් හෝ සද්පළ අසාධාරණ ලෙස භාවිතා කිරීම ආර්තික අපයෝජනයයි.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකුගේ මුදල් හෝ සද්පළ අසාධාරණ ලෙස භාවිතා කරන විට එය හඳුන්වන්නේ කුමක් ලෙසද?"
  },
  {
    "id": "lesson-04-q016",
    "moduleId": "lesson-04",
    "number": 16,
    "question": "What is it called when you perform a sexual act on a care recipient?",
    "options": [
      "It is called sexual abuse. (භාවිතා කරන්නාට අස භන හෝ ලිාංගික සේවභාවසේ ක්‍රියා සිදු කිරීම ලිාංගික අපයෝජනයයි.)",
      "Psychological abuse (මානසික අපයෝජනය)",
      "Economic abuse (ආර්තික අපයෝජනය)",
      "Rehabilitation (පුනරුත්ථාපනය)"
    ],
    "correctIndex": 0,
    "explanation": "It is called sexual abuse. (භාවිතා කරන්නාට අස භන හෝ ලිාංගික සේවභාවසේ ක්‍රියා සිදු කිරීම ලිාංගික අපයෝජනයයි.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකුට ලිාංගික සේවභාවසේ ක්‍රියාවක් සිදු කරන විට එය හඳුන්වන්නේ කුමක් ලෙසද?"
  },
  {
    "id": "lesson-04-q017",
    "moduleId": "lesson-04",
    "number": 17,
    "question": "Who is the specialist that performs medical acts?",
    "options": [
      "Doctors and nursing staff. (දවදය ක්‍රියා සිදු කරන වෘත්තිකයන් කවුද? - දවදයවරයා සහ හෙද නිලධාරියා.)",
      "Care workers only. (සත්කාර සේවකයින් පමණි.)",
      "Care managers only. (සත්කාර කළමනාකරුවන් පමණි.)",
      "Kitchen and laundry staff. (මුළුතැන්සගයි සහ රෙදි සේදුම් කාර්ය මණ්ඩලය.)"
    ],
    "correctIndex": 0,
    "explanation": "Doctors and nursing staff. (දවදය ක්‍රියා සිදු කරන වෘත්තිකයන් කවුද? -\nදවදයවරයා සහ හෙද නිලධාරියා.)",
    "kind": "mcq",
    "sinhalaText": "දවදය ක්‍රියා (medical acts) සිදු කරන වෘත්තිකයා/විස ෂඥයා කවුද?"
  },
  {
    "id": "lesson-04-q018",
    "moduleId": "lesson-04",
    "number": 18,
    "question": "Can a care worker perform medical acts as a general rule?",
    "options": [
      "Yes, whenever a doctor is busy. (ඔේ, දවදයවරයා කාර්යබහුල වූ විට.)",
      "No, they cannot. (රැකවරණ සේවකයාට මූලික ව සයන් දවදය ක්‍රියා සිදු කළ හැකිද? - නැත.)",
      "Yes, for any medication or injection. (ඔේ, ඕනෑම ඖෂධයක් හෝ එන්නතක් සඳහා.)",
      "Yes, if the user asks. (ඔේ, පරිශීලකයා ඉල්ලා සිටියසහාත්.)"
    ],
    "correctIndex": 1,
    "explanation": "No, they cannot. (රැකවරණ සේවකයාට මූලික ව සයන් දවදය ක්‍රියා සිදුකළ හැකිද? - නැත.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ සේවකයාට මූලික ව සයන්/සාමාන්‍ය රීතියක් ලෙස දවදය ක්‍රියා සිදු කළ හැකිද?"
  },
  {
    "id": "lesson-04-q019",
    "moduleId": "lesson-04",
    "number": 19,
    "question": "What kind of work does a doctor do?",
    "options": [
      "They diagnose and treat illnesses. (දවදයවරයාසේ ප්‍රධාන කාර්ය කුමක්ද? - රෝග හඳුනාගෙන ප්‍රිකාර කිරීම.)",
      "They coordinate care plans across agencies. (ආයතන හරහා සත්කාර සැලසුම් සම්බන්ධීකරණය කරයි.)",
      "They wash facility bed linens. (ආයතනයේ ඇඳ ඇතිරිලි සෝදයි.)",
      "They teach sign language exclusively. (සාංඥා භාෂාව පමණක් උගන්වයි.)"
    ],
    "correctIndex": 0,
    "explanation": "They diagnose and treat illnesses. (දවදයවරයාසේ ප්‍රධාන කාර්යකුමක්ද? - රෝග හඳුනාගෙන ප්‍රිකාර කිරීම.)",
    "kind": "mcq",
    "sinhalaText": "දවදයවරයාසේ ප්‍රධාන කාර්ය කුමක්ද?"
  },
  {
    "id": "lesson-04-q020",
    "moduleId": "lesson-04",
    "number": 20,
    "question": "Under whose instructions does the nursing staff perform their work?",
    "options": [
      "They work under the instructions of a doctor. (හෙද නිලධාරියා කාසේ උපසදසේ අනුව කටයු කරයිද? -\nදවදයවරයාසේ උපසදසේ අනුව.)",
      "Under the instructions of a cook. (කෝකියාසේ උපසදසේ අනුව.)",
      "Under no medical supervision. (කිසිදු දවදය අධීක්ෂණයකින් සතාරව.)",
      "Only under family instructions. (පවුලේ උපසදසේ මත පමණි.)"
    ],
    "correctIndex": 0,
    "explanation": "They work under the instructions of a doctor. (හෙද නිලධාරියා කාසේඋපසදසේ අනුව කටයු කරයිද? - දවදයවරයාසේ උපසදසේ අනුව.)",
    "kind": "mcq",
    "sinhalaText": "හෙද නිලධාරියා/කාර්ය මණ්ඩලය කාසේ උපසදසේ අනුව කටයු කරයිද?"
  },
  {
    "id": "lesson-04-q021",
    "moduleId": "lesson-04",
    "number": 21,
    "question": "Who is the specialist that trains people in movement abilities such as walking?",
    "options": [
      "A physical therapist. (ඇවිදීම වැනි චලන හැකියාවන් පුහුණු කරන්නේ කවුද? - භෞතික චිකිත්සකයා.)",
      "A registered dietitian. (ලියාපදිාංචි පෝෂණසේදියා.)",
      "A care manager. (සත්කාර කළමනාකරු.)",
      "A pharmacist. (ඖෂධසේදියා.)"
    ],
    "correctIndex": 0,
    "explanation": "A physical therapist. (ඇවිදීම වැනි චලන හැකියාවන් පුහුණු කරන්නේකවුද? - භෞතික චිකිත්සකයා.)",
    "kind": "mcq",
    "sinhalaText": "ඇවිදීම වැනි චලන හැකියාවන් පුහුණු කරන්නේ කවුද?"
  },
  {
    "id": "lesson-04-q022",
    "moduleId": "lesson-04",
    "number": 22,
    "question": "Who is the specialist that trains people in necessary activities for daily living?",
    "options": [
      "An occupational therapist. (දෛනික ජීවිතයට අව ය ක්‍රියාකාරකම් පුහුණු කරන්නේ කවුද? - වෘත්තීයචිකිත්සකයා.)",
      "A dentist. (දන්ත දවදයවරයා.)",
      "A security guard. (ආරක්ෂක නිලධාරියා.)",
      "A receptionist. (පිළිගැනීමේ නිලධාරියා.)"
    ],
    "correctIndex": 0,
    "explanation": "An occupational therapist. (දෛනික ජීවිතයට අව ය ක්‍රියාකාරකම් පුහුණුකරන්නේ කවුද? - වෘත්තීය චිකිත්සකයා.)",
    "kind": "mcq",
    "sinhalaText": "දෛනික ජීවිතයට අව ය ක්‍රියාකාරකම් පුහුණු කරන්නේ කවුද?"
  },
  {
    "id": "lesson-04-q023",
    "moduleId": "lesson-04",
    "number": 23,
    "question": "Who is the specialist that trains care recipients who have difficulty speaking or swallowing?",
    "options": [
      "A speech-language-hearing therapist. (කතා කිරීමට හෝ ගිලීමට අපහසු භාවිතා කරන්නන් පුහුණු කරන්නේකවුද? - භාෂා හා ශ්‍රවණ චිකිත්සකයා.)",
      "A physical therapist. (භෞතික චිකිත්සකයා.)",
      "A registered dietitian. (පෝෂණසේදියා.)",
      "A care worker. (සත්කාර සේවකයා.)"
    ],
    "correctIndex": 0,
    "explanation": "A speech-language-hearing therapist. (කතා කිරීමට හෝ ගිලීමට අපහසු භාවිතා කරන්නන් පුහුණු කරන්නේ කවුද? - භාෂා හා ශ්‍රවණ චිකිත්සකයා.)",
    "kind": "mcq",
    "sinhalaText": "කතා කිරීමට හෝ ගිලීමට අපහසු භාවිතා කරන්නන් පුහුණු කරන්නේ කවුද?"
  },
  {
    "id": "lesson-04-q024",
    "moduleId": "lesson-04",
    "number": 24,
    "question": "Who is the specialist that creates menus considering nutritional balance?",
    "options": [
      "A registered dietitian. (පෝෂණ සමුලිතතාවය සලකා සමනු කෙසේ කරන්නේ කවුද? - කළමනාකරණ පෝෂණසේදියා.)",
      "A speech-language-hearing therapist. (භාෂා හා ශ්‍රවණ චිකිත්සකයා.)",
      "A physical therapist. (භෞතික චිකිත්සකයා.)",
      "A driver. (රියදුරු.)"
    ],
    "correctIndex": 0,
    "explanation": "A registered dietitian. (පෝෂණ සමුලිතතාවය සලකා සමනු කෙසේකරන්නේ කවුද? - කළමනාකරණ පෝෂණසේදියා.)",
    "kind": "mcq",
    "sinhalaText": "පෝෂණ සමුලිතතාවය සලකා සමනු (menus) කෙසේ කරන්නේ කවුද?"
  },
  {
    "id": "lesson-04-q025",
    "moduleId": "lesson-04",
    "number": 25,
    "question": "What do care managers do for care recipients and their families?",
    "options": [
      "They provide consultation, liaison, and coordination. (Care Manager භාවිතා කරන්නා සහ පවුල සම්බන්ධයෙන් සිදු කරන්නේ කුමක්ද? - උපදේ න, සම්බන්ධතා සහ සම්බන්ධීකරණ කටයු.)",
      "They perform surgeries. (ශල්‍යකර්ම සිදු කරයි.)",
      "They cook all meals in the kitchen. (මුළුතැන්සගයි සියලු ආහාර පිසියි.)",
      "They repair wheelchairs. (රෝද පු අලුත්වැඩියා කරයි.)"
    ],
    "correctIndex": 0,
    "explanation": "They provide consultation, liaison, and coordination. (Care\nManager භාවිතා කරන්නා සහ පවුල සම්බන්ධයෙන් සිදු කරන්නේ කුමක්ද? - උපදේ න, සම්බන්ධතා සහ සම්බන්ධීකරණ කටයු.)",
    "kind": "mcq",
    "sinhalaText": "Care Manager භාවිතා කරන්නා සහ පවුල සම්බන්ධයෙන් සිදු කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q026",
    "moduleId": "lesson-04",
    "number": 26,
    "question": "What are the services provided by visiting the care recipient's home called?",
    "options": [
      "Visiting-type services. (භාවිතා කරන්නාසේ නිවසට සගාසේ ලබාසදන සේවාව කුමක්ද? - නිවසට පැමිණ ලබාසදන සේවාව.)",
      "Day-type services (Day care). (දිවා රැකවරණ සේවාව.)",
      "Facility-admitting-type services (Residential services). (සන්වාසික රැකවරණ සේවාව.)",
      "Emergency ambulance service. (හදිසි ගිලන් රථ සේවාව.)"
    ],
    "correctIndex": 0,
    "explanation": "Visiting-type services. (භාවිතා කරන්නාසේ නිවසට සගාසේ ලබාසදන සේවාව කුමක්ද? - නිවසට පැමිණ ලබාසදන සේවාව.)",
    "kind": "mcq",
    "sinhalaText": "භාවිතා කරන්නාසේ නිවසට සගාසේ ලබාසදන සේවාව කුමක්ද?"
  },
  {
    "id": "lesson-04-q027",
    "moduleId": "lesson-04",
    "number": 27,
    "question": "What is it called when you receive services at a care facility during the daytime?",
    "options": [
      "Day-type services (Day care). (දිවා කාලසේ රැකවරණ මධයසේථානයකට සගාසේ සේවා ලබා ගැනීම කුමක්ද? -\nදිවා රැකවරණ සේවාව.)",
      "Visiting-type services. (නිවසට පැමිණ ලබාසදන සේවාව.)",
      "Facility-admitting-type services (Residential services). (සන්වාසික රැකවරණ සේවාව.)",
      "Self-care only. (ස්වයං රැකවරණය පමණි.)"
    ],
    "correctIndex": 0,
    "explanation": "Day-type services (Day care). (දිවා කාලසේ රැකවරණ මධයසේථානයකට සගාසේ සේවා ලබා ගැනීම කුමක්ද? - දිවා රැකවරණ සේවාව.)",
    "kind": "mcq",
    "sinhalaText": "දිවා කාලසේ රැකවරණ මධයසේථානයකට සගාසේ සේවා ලබා ගැනීම කුමක්ද?"
  },
  {
    "id": "lesson-04-q028",
    "moduleId": "lesson-04",
    "number": 28,
    "question": "What is it called when you receive services while living at a care facility?",
    "options": [
      "Facility-admitting-type services (Residential services). (රැකවරණ ආයතනයක සන්වාසිකව සිටිමින් සේවාලබාගැනීම කුමක්ද? - සන්වාසික රැකවරණ සේවාව.)",
      "Day-type services (Day care). (දිවා රැකවරණ සේවාව.)",
      "Visiting-type services. (නිවසට පැමිණ ලබාසදන සේවාව.)",
      "Telephone consultation only. (දුරකථන උපදේ නය පමණි.)"
    ],
    "correctIndex": 0,
    "explanation": "Facility-admitting-type services (Residential services). (රැකවරණ ආයතනයක සන්වාසිකව සිටිමින් සේවා ලබාගැනීම කුමක්ද? - සන්වාසික රැකවරණ සේවාව.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ආයතනයක සන්වාසිකව සිටිමින් සේවා ලබාගැනීම කුමක්ද?"
  },
  {
    "id": "lesson-04-q029",
    "moduleId": "lesson-04",
    "number": 29,
    "question": "What is created for each care recipient in the care process?",
    "options": [
      "A care plan. (රැකවරණ ක්‍රියාවලිසේදී එක් එක් භාවිතා කරන්නා සඳහා කෙසේ කරන්නේ කුමක්ද? – රැකවරණ සැලැසේම.)",
      "A tax return. (බදු වාර්තාවක්.)",
      "A shopping receipt. (සාේපු රිසිට්ටපතක්.)",
      "A construction blueprint. (ඉදිකිරීම් සැලැසේමක්.)"
    ],
    "correctIndex": 0,
    "explanation": "A care plan. (රැකවරණ ක්‍රියාවලිසේදී එක් එක් භාවිතා කරන්නා සඳහා කෙසේකරන්නේ කුමක්ද? – රැකවරණ සැලැසේම.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ක්‍රියාවලිසේදී එක් එක් භාවිතා කරන්නා සඳහා කෙසේ කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q030",
    "moduleId": "lesson-04",
    "number": 30,
    "question": "In assessment, what is done first?",
    "options": [
      "Information regarding the care recipient is collected and analyzed. (Assessment හිදී මුලින් සිදුකරන්නේ කුමක්ද? - භාවිතා කරන්නා පිළිබඳ සතාරුරු රැසේ කර වි සල්ෂණය කිරීම.)",
      "The service is terminated immediately. (සේවාව වහාම අවසන් කෙරේ.)",
      "The recipient is moved to another country. (පරිශීලකයා වෙනත් රටකට මාරු කෙරේ.)",
      "Meals are skipped for evaluation. (ඇගයීම සඳහා ආහාර මඟ හැසර්.)"
    ],
    "correctIndex": 0,
    "explanation": "Information regarding the care recipient is collected and analyzed.\n(Assessment හිදී මුලින් සිදු කරන්නේ කුමක්ද? - භාවිතා කරන්නා පිළිබඳ සතාරුරු රැසේ කර වි සල්ෂණය කිරීම.)",
    "kind": "mcq",
    "sinhalaText": "Assessment හිදී මුලින් සිදු කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q031",
    "moduleId": "lesson-04",
    "number": 31,
    "question": "What is the stage called where the contents of the care plan are decided?",
    "options": [
      "Care plan creation (Planning). (රැකවරණ සැලැසේමේ අන්තර්ගතය තීරණය කරන අදියර කුමක්ද? - සැලැසේම කෙසේ කිරීම.)",
      "Implementation. (ක්‍රියාත්මක කිරීම.)",
      "Evaluation. (ඇගයීම.)",
      "Discharge. (මුදා හැරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Care plan creation (Planning). (රැකවරණ සැලැසේමේ අන්තර්ගතයතීරණය කරන අදියර කුමක්ද? - සැලැසේම කෙසේ කිරීම.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ සැලැසේමේ අන්තර්ගතය තීරණය කරන අදියර කුමක්ද?"
  },
  {
    "id": "lesson-04-q032",
    "moduleId": "lesson-04",
    "number": 32,
    "question": "What is the stage called where care is provided based on the care plan?",
    "options": [
      "Implementation. (රැකවරණ සැලැසේම අනුව රැකවරණය ලබාසදන අදියර කුමක්ද? - ක්‍රියාත්මක කිරීම.)",
      "Assessment. (තක්සේරුව.)",
      "Care plan creation (Planning). (සැලැසේම කෙසේ කිරීම.)",
      "Admission. (ඇතුළත් කර ගැනීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Implementation. (රැකවරණ සැලැසේම අනුව රැකවරණය ලබාසදන අදියර කුමක්ද? - ක්‍රියාත්මක කිරීම.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ සැලැසේම අනුව රැකවරණය ලබාසදන අදියර කුමක්ද?"
  },
  {
    "id": "lesson-04-q033",
    "moduleId": "lesson-04",
    "number": 33,
    "question": "What is the stage called where it is checked whether the care plan suits the care recipient?",
    "options": [
      "Evaluation. (රැකවරණ සැලැසේම භාවිතා කරන්නාට ගැළපෙනවා දැයි පරීක්ෂා කරන අදියර කුමක්ද? - ඇගයීම.)",
      "Assessment. (තක්සේරුව.)",
      "Care plan creation. (සැලැසේම කෙසේ කිරීම.)",
      "Implementation. (ක්‍රියාත්මක කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Evaluation. (රැකවරණ සැලැසේම භාවිතා කරන්නාට ගැළපෙනවා දැයි පරීක්ෂාකරන අදියර කුමක්ද? - ඇගයීම.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ සැලැසේම භාවිතා කරන්නාට ගැළපෙනවා දැයි පරීක්ෂා කරන අදියර කුමක්ද?"
  },
  {
    "id": "lesson-04-q034",
    "moduleId": "lesson-04",
    "number": 34,
    "question": "What is the correct flow of the care process?",
    "options": [
      "Assessment -> Care plan creation -> Implementation -> Evaluation. (රැකවරණ ක්‍රියාවලිසේ නිවැරදිඅනුපිළිසවළ කුමක්ද? - Assessment - සැලැසේම කෙසේ කිරීම – ක්‍රියාත්මක කිරීම – ඇගයීම)",
      "Evaluation -> Implementation -> Care plan creation -> Assessment. (ඇගයීම -> ක්‍රියාත්මක කිරීම ->\nසැලැසේම කෙසේ කිරීම -> තක්සේරුව.)",
      "Implementation -> Assessment -> Evaluation -> Care plan creation. (ක්‍රියාත්මක කිරීම -> තක්සේරුව ->\nඇගයීම -> සැලැසේම කෙසේ කිරීම.)",
      "Care plan creation -> Evaluation -> Assessment -> Implementation. (සැලැසේම කෙසේ කිරීම -> ඇගයීම -\n> තක්සේරුව -> ක්‍රියාත්මක කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Assessment -> Care plan creation -> Implementation ->\nEvaluation. (රැකවරණ ක්‍රියාවලිසේ නිවැරදි අනුපිළිසවළ කුමක්ද? - Assessment - සැලැසේම කෙසේ කිරීම –\nක්‍රියාත්මක කිරීම – ඇගයීම)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ක්‍රියාවලිසේ නිවැරදි අනුපිළිසවළ කුමක්ද?"
  },
  {
    "id": "lesson-04-q035",
    "moduleId": "lesson-04",
    "number": 35,
    "question": "What does observation mean?",
    "options": [
      "It means looking carefully to know the state of the care recipient. (නිරීක්ෂණය යනු භාවිතා කරන්නාසේතත්ත්වය දැනගැනීම සඳහා අවධානයෙන් බැලීමයි.)",
      "It means ignoring changes in appetite or mood. (ආහාර රුචිසේ හෝ මනෝභාවසේ වෙනසේකම් නොසලකාහැරීමයි.)",
      "It means guessing without checking. (පරීක්ෂා නොකර අනුමාන කිරීමයි.)",
      "It means watching television during care duties. (සත්කාර රාජකාරි අතරුර රූපවාහිනිය නැරඹීමයි.)"
    ],
    "correctIndex": 0,
    "explanation": "It means looking carefully to know the state of the care recipient.\n(නිරීක්ෂණය යනු භාවිතා කරන්නාසේ තත්ත්වය දැනගැනීම සඳහා අවධානයෙන් බැලීමයි.)",
    "kind": "mcq",
    "sinhalaText": "නිරීක්ෂණය (observation) යන්නෙන් අදහස් කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q036",
    "moduleId": "lesson-04",
    "number": 36,
    "question": "How is the observation by a care worker utilized?",
    "options": [
      "It is utilized to make the care recipient's life better. (භාවිතා කරන්නාසේ ජීවිතය වඩා යහපත් කිරීමට නිරීක්ෂණය උපයෝගී වේ.)",
      "It is kept secret from the care team. (සත්කාර කණ්ඩායමෙන් රහසිගතව තබා ගැනේ.)",
      "It is used to criticize the recipient. (පරිශීලකයා විසේචනය කිරීමට භාවිතා කෙරේ.)",
      "It is discarded at the end of the day. (දවස අවසානසේ ඉවත දැමේ.)"
    ],
    "correctIndex": 0,
    "explanation": "It is utilized to make the care recipient's life better. (භාවිතාකරන්නාසේ ජීවිතය වඩා යහපත් කිරීමට නිරීක්ෂණය උපයෝගී වේ.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේවකයෙකුසේ නිරීක්ෂණය (observation) ප්‍රයෝජනයට ගන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q037",
    "moduleId": "lesson-04",
    "number": 37,
    "question": "What is done with what has been observed?",
    "options": [
      "It is recorded and shared with all staff members. (නිරීක්ෂණය කළ දේ වාර්තා කර සියලුම කාර්ය මණ්ඩලයඅතර බෙදාගනී.)",
      "It is forgotten once the shift ends. (වැඩ මුරය අවසන් වූ පසු අමතක කෙරේ.)",
      "It is written on personal social media. (පෞද්ගලික සමාජ මාධයවල ලියැසේ.)",
      "It is ignored unless a doctor asks. (දවදයවරයෙකු අසන තුරු නොසලකා හැසර්.)"
    ],
    "correctIndex": 0,
    "explanation": "It is recorded and shared with all staff members. (නිරීක්ෂණය කළ දේ වාර්තා කර සියලුම කාර්ය මණ්ඩලය අතර බෙදාගනී.)",
    "kind": "mcq",
    "sinhalaText": "නිරීක්ෂණය කළ දේ සමඟ සිදු කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q038",
    "moduleId": "lesson-04",
    "number": 38,
    "question": "How is information about the care recipient obtained?",
    "options": [
      "It is obtained by interacting with the care recipient and through measurements. (භාවිතා කරන්නා සමඟ සම්බන්ධ වීමෙන් සහ මිනුම් කිරීම වැනි ක්‍රමවලින් සතාරුරු ලබාගනී.)",
      "Only by reading rumors. (කටකතා කියවීමෙන් පමණි.)",
      "By avoiding conversation with the recipient. (පරිශීලකයා සමඟ කතා කිරීමෙන් වැළකී සිටීසමන්.)",
      "Only by guessing their mood from a distance. (දුර සිට මනෝභාවය අනුමාන කිරීමෙන් පමණි.)"
    ],
    "correctIndex": 0,
    "explanation": "It is obtained by interacting with the care recipient and through\nmeasurements. (භාවිතා කරන්නා සමඟ සම්බන්ධ වීමෙන් සහ මිනුම් කිරීම වැනි ක්‍රමවලින් සතාරුරු ලබාගනී.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නා පිළිබඳ සතාරුරු ලබා ගන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q039",
    "moduleId": "lesson-04",
    "number": 39,
    "question": "Why is the health of the care worker themselves important?",
    "options": [
      "Because if you are not healthy yourself, you cannot provide better care. (තමන් සෞඛය සම්පන්න නොසේ නම් හොඳ රැකවරණයක් ලබාදිය නොහැකි නිසා තමන්සේ සෞඛයය වැදගත් වේ.)",
      "Because healthy workers never need rest breaks. (සෞඛය සම්පන්න සේවකයින්ට කිසි විසටකත් විසේක අව ය නොවන නිසා.)",
      "Because it eliminates the need for body mechanics. (එමඟින් රීර යාන්ත්‍ර විදයාසේ අව යතාව නැති වන නිසා.)",
      "Because it replaces care planning. (එමඟින් සත්කාර සැලසුම් කිරීම වෙනුවට ආදේ වන නිසා.)"
    ],
    "correctIndex": 0,
    "explanation": "Because if you are not healthy yourself, you cannot provide better\ncare. (තමන් සෞඛය සම්පන්න නොසේ නම් හොඳ රැකවරණයක් ලබාදිය නොහැකි නිසා තමන්සේ සෞඛයය වැදගත්සේ.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේවකයාසේම සෞඛයය වැදගත් වන්නේ ඇයි?"
  },
  {
    "id": "lesson-04-q040",
    "moduleId": "lesson-04",
    "number": 40,
    "question": "What is necessary for a care worker to prevent lower back pain?",
    "options": [
      "It is necessary to acquire correct knowledge and methods. (සකාන්දේ සේදනාව වැළැක්වීමට නිවැරදිදැනුම සහ ක්‍රම ඉගෙන ගැනීම අව ය වේ.)",
      "Lifting heavy loads with a rounded back and locked knees. (කොන්ද නවාගෙන සහ දණහිසේ කෙළින්තබාගෙන බර එසවීම.)",
      "Twisting the spine while carrying weight. (බර රැගෙන යන අතරුර සකාඳු ඇට පෙළ ඇඹරීම.)",
      "Standing far away from the person being moved. (චලනය කරන පුද්ගලයාගෙන් ඈත්ව සිටීම.)"
    ],
    "correctIndex": 0,
    "explanation": "It is necessary to acquire correct knowledge and methods.\n(සකාන්දේ සේදනාව වැළැක්වීමට නිවැරදි දැනුම සහ ක්‍රම ඉගෙන ගැනීම අව ය වේ.)",
    "kind": "mcq",
    "sinhalaText": "සකාන්දේ සේදනාව (lower back pain) වැළැක්වීමට සත්කාර සේවකයෙකුට අව ය වන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q041",
    "moduleId": "lesson-04",
    "number": 41,
    "question": "What is important to maintain mental health?",
    "options": [
      "Securing time for meals and sleep. (මානසික සෞඛයය පවත්වා ගැනීමට ආහාර සහ නින්ද සඳහා කාලය සවන්කරගැනීම වැදගත්ය.)",
      "Skipping sleep and meals during busy shifts. (කාර්යබහුල වැඩ මුරවලදී නින්ද සහ ආහාර මඟ හැරීම.)",
      "Keeping all worries bottled up alone. (සියලු ගැටලු තනිවම සඟවා තබා ගැනීම.)",
      "Working nonstop without any recovery. (කිසිදු විසේකයකින් සතාරව නොනවත්වා වැඩ කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Securing time for meals and sleep. (මානසික සෞඛයය පවත්වාගැනීමට ආහාර සහ නින්ද සඳහා කාලය සවන් කරගැනීම වැදගත්ය.)",
    "kind": "mcq",
    "sinhalaText": "මානසික සෞඛයය (mental health) පවත්වා ගැනීමට වැදගත් වන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q042",
    "moduleId": "lesson-04",
    "number": 42,
    "question": "What do you do when stress builds up?",
    "options": [
      "Find a stress-relief method that suits you. (ආතිය එකු වූ විට තමන්ට ගැළපෙන ආතිය අඩු කිරීසම්ක්‍රමයක් සොයාගත යුතුය.)",
      "Take anger out on a care recipient. (රැකවරණ ලබන්නෙකු පිට කෝපය පිට කිරීම.)",
      "Ignore stress until burnout occurs. (මානසික බිඳවැටීමක් සිදුවන තුරු ආතිය නොසලකා හැරීම.)",
      "Refuse teamwork completely. (කණ්ඩායම් ක්‍රියාකාරකම් සම්ූර්ණයෙන් ප්‍රික්ෂේප කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Find a stress-relief method that suits you. (ආතිය එකු වූ විට තමන්ට ගැළපෙන ආතිය අඩු කිරීමේ ක්‍රමයක් සොයාගත යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "මානසික ආතිය (stress) එකු වූ විට ඔබ කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q043",
    "moduleId": "lesson-04",
    "number": 43,
    "question": "When you have worries at work, who do you consult?",
    "options": [
      "Consult seniors or colleagues. (රැකියාසේ ගැටලුවක් ඇති විට සජයෂේඨයන් හෝ සහෝදර සේවකයන් සමඟ සාකච්ඡා කළ යුතුය.)",
      "Post complaints publicly on social media. (සමාජ මාධයවල ප්‍රසිද්තිසේ පැමිණිලි පළ කිරීම.)",
      "Keep it hidden from the supervisor. (අධීක්ෂකවරයාගෙන් සඟවා තබා ගැනීම.)",
      "Ask strangers on the street. (මඟසතාසට්ට නාඳුනන අයගෙන් විමසීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Consult seniors or colleagues. (රැකියාසේ ගැටලුවක් ඇති විට සජයෂේඨයන් හෝ සහෝදර සේවකයන් සමඟ සාකච්ඡා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "රැකියාසේදී ගැටලු/කනසේසල්ල ඇති වූ විට, ඔබ උපසදසේ ලබා ගන්නේ කාගෙන්ද?"
  },
  {
    "id": "lesson-04-q044",
    "moduleId": "lesson-04",
    "number": 44,
    "question": "Body mechanics is body movement based on what?",
    "options": [
      "It is body movement based on the interrelationship between bones and muscles. (Body Mechanicsයනු අසේති හා මාංශපේශි අතර අන්තර් සම්බන්ධතාවය මත සිදුවන රීර චලනයයි.)",
      "Movement based on random jerking motions. (අහඹු ලෙස ගැසේසසන චලනයන් මත පදනම් වූ චලනය.)",
      "Movement without bending joints. (සන්ති නොනවා සිදු කරන චලනය.)",
      "Movement relying solely on spine bending. (සකාඳු ඇට පෙළ නැමීම මත පමණක් රඳා පවින චලනය.)"
    ],
    "correctIndex": 0,
    "explanation": "It is body movement based on the interrelationship between\nbones and muscles. (Body Mechanics යනු අසේති හා මාංශපේශි අතර අන්තර් සම්බන්ධතාවය මත සිදුවන රීර චලනයයි.)",
    "kind": "mcq",
    "sinhalaText": "Body mechanics යනු කුමක් මත පදනම් වූ රීර චලනයක්ද?"
  },
  {
    "id": "lesson-04-q045",
    "moduleId": "lesson-04",
    "number": 45,
    "question": "What is the purpose of utilizing body mechanics?",
    "options": [
      "To protect the safety of the care recipient and reduce the burden on the care worker. (භාවිතාකරන්නාසේ ආරක්ෂාව තහවුරු කිරීම සහ රැකවරණ සේවකයාසේ බර අඩු කිරීම අරමුණයි.)",
      "To lift heavier loads without equipment or assistance. (උපකරණ හෝ සහාය නොමැතිව අතික බර එසවීමට.)",
      "To increase muscle strain on the lower back. (පහළ සකාඳු ඇට පෙළේ මාංශපේශි ආතිය වැඩි කිරීමට.)",
      "To speed up transfers recklessly. (නොසැලකිලිමත් ලෙස මාරු කිරීම් සේගවත් කිරීමට.)"
    ],
    "correctIndex": 0,
    "explanation": "To protect the safety of the care recipient and reduce the burden\non the care worker. (භාවිතා කරන්නාසේ ආරක්ෂාව තහවුරු කිරීම සහ රැකවරණ සේවකයාසේ බර අඩු කිරීම අරමුණයි.)",
    "kind": "mcq",
    "sinhalaText": "Body mechanics භාවිතා කිරීමේ අරමුණ කුමක්ද?"
  },
  {
    "id": "lesson-04-q046",
    "moduleId": "lesson-04",
    "number": 46,
    "question": "In body mechanics, what do you do with the base of support?",
    "options": [
      "Make it wide and lower the center of gravity. (ආධාරක පදනම පුළුල් කර ගුරුත්ව සක්න්රය පහත් කරයි.)",
      "Keep feet tightly together and stand on tiptoes. (පාද තදින් ළාං කර ඇඟිලි තුඩුවලින් සිටගනියි.)",
      "Narrow the stance as much as possible. (සිටගන්නා පරතරය හැකිතාක් පු කරයි.)",
      "Raise the center of gravity high. (ගුරුත්වාකර්ෂණ සක්න්රය ඉහළට ඔසවයි.)"
    ],
    "correctIndex": 0,
    "explanation": "Make it wide and lower the center of gravity. (ආධාරක පදනම පුළුල්කර ගුරුත්ව සක්න්රය පහත් කරයි.)",
    "kind": "mcq",
    "sinhalaText": "Body mechanics හිදී, ආධාරක පදනම (base of support) සම්බන්ධයෙන් ඔබ කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q047",
    "moduleId": "lesson-04",
    "number": 47,
    "question": "What do you do with the centers of gravity of the care worker and the care recipient?",
    "options": [
      "Bring them as close together as possible. (රැකවරණ සේවකයාසේ සහ භාවිතා කරන්නාසේ ගුරුත්ව සක්න්ර හැකිතාක් ළාං කරයි.)",
      "Push them as far apart as possible. (හැකිතාක් ඈත් කරයි.)",
      "Keep the recipient suspended away from the body. (රැකවරණ ලබන්නා රීරයෙන් ඈත්ව තබයි.)",
      "Twist away while lifting. (ඔසවන විට පැත්තකට ඇඹසරයි.)"
    ],
    "correctIndex": 0,
    "explanation": "Bring them as close together as possible. (රැකවරණ සේවකයාසේ සහ භාවිතා කරන්නාසේ ගුරුත්ව සක්න්ර හැකිතාක් ළාං කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර සේවකයාසේ සහ රැකවරණ ලබන්නාසේ ගුරුත්වාකර්ෂණ සක්න්ර (centers of gravity) සම්බන්ධයෙන් ඔබ කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q048",
    "moduleId": "lesson-04",
    "number": 48,
    "question": "What effect does bringing the center of gravity closer have?",
    "options": [
      "You can move things with a small amount of force. (ගුරුත්ව සක්න්ර ළාං කිරීමෙන් අඩු බලයකින් චලනයකළ හැක.)",
      "You need much more force and risk falling. (වැඩි බලයක් අව ය වී වැටීමේ අවදානම වැඩි වේ.)",
      "Balance becomes unstable immediately. (සමබරතාව වහාම අසේථාවර වේ.)",
      "Lifting becomes impossible. (එසවීම කළ නොහැකි වේ.)"
    ],
    "correctIndex": 0,
    "explanation": "You can move things with a small amount of force. (ගුරුත්ව සක්න්ර ළාං කිරීමෙන් අඩු බලයකින් චලනය කළ හැක.)",
    "kind": "mcq",
    "sinhalaText": "ගුරුත්වාකර්ෂණ සක්න්රය ළාං කිරීමෙන් ඇතිවන බලපෑම කුමක්ද?"
  },
  {
    "id": "lesson-04-q049",
    "moduleId": "lesson-04",
    "number": 49,
    "question": "When lifting a care recipient, what kind of muscles do you use?",
    "options": [
      "Large muscles such as the thighs and buttocks. (භාවිතා කරන්නා එසවීමේදී කලවා සහ තට්ටටම් වැනි වි ල මාංශපේශි භාවිතා කරයි.)",
      "Only small finger and wrist muscles. (කුඩා ඇඟිලි සහ මැණික් කුසේ මාංශපේශි පමණි.)",
      "Only neck muscles. (සගසල් මාංශපේශි පමණි.)",
      "Only lower back muscles while keeping legs straight. (කකුල් කෙළින් තබාගෙන පහළ සකාන්දේ මාංශපේශි පමණි.)"
    ],
    "correctIndex": 0,
    "explanation": "Large muscles such as the thighs and buttocks. (භාවිතා කරන්නාඑසවීමේදී කලවා සහ තට්ටටම් වැනි වි ල මාංශපේශි භාවිතා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නෙකු ඔසවන විට, ඔබ භාවිතා කරන්නේ කුමන ආකාරයේ මාංශපේශිද?"
  },
  {
    "id": "lesson-04-q050",
    "moduleId": "lesson-04",
    "number": 50,
    "question": "Is the method of stretching your knees and lifting using only your back muscles correct?",
    "options": [
      "Yes, it is the safest lifting method. (ඔේ, එය ආරක්ෂිතම එසවීමේ ක්‍රමයයි.)",
      "No, it is not correct. (දණහිසේ දිගහැර සකාන්දේ මාංශපේශි පමණක් භාවිතයෙන් එසවීම නිවැරදි ක්‍රමයක්නොසේ.)",
      "Yes, for all adult transfers. (ඔේ, සියලු වැඩිහිටි මාරු කිරීම් සඳහා.)",
      "Yes, when lifting from the floor. (ඔේ, බිමෙන් ඔසවන විට.)"
    ],
    "correctIndex": 1,
    "explanation": "No, it is not correct. (දණහිසේ දිගහැර සකාන්දේ මාංශපේශි පමණක්භාවිතයෙන් එසවීම නිවැරදි ක්‍රමයක් නොසේ.)",
    "kind": "mcq",
    "sinhalaText": "දණහිසේ දිගහැර සකාන්දේ මාංශපේශි පමණක් භාවිතයෙන් එසවීම නිවැරදි ක්‍රමයක්ද?"
  },
  {
    "id": "lesson-04-q051",
    "moduleId": "lesson-04",
    "number": 51,
    "question": "How should you handle the body of the care recipient?",
    "options": [
      "Keep it bundled up tightly/compactly. (භාවිතා කරන්නාසේ රීරය හැකිතාක් කුඩාවට එකු කරයි.)",
      "Let arms and legs dangle loosely outward. (අත් සහ පාද පිටතට ලිහිල්ව එල්ලා වැටීමට ඉඩ හරියි.)",
      "Pull abruptly by one limb. (එක් අතකින් හෝ පයකින් හදිසිසේ අදියි.)",
      "Twist the torso sharply. (කඳ කොටස තියුණු ලෙස අඹරයි.)"
    ],
    "correctIndex": 0,
    "explanation": "Keep it bundled up tightly/compactly. (භාවිතා කරන්නාසේ රීරයහැකිතාක් කුඩාවට එකු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නාසේ රීරය ඔබ හැසිරවිය යුත්තේ කෙසේද?"
  },
  {
    "id": "lesson-04-q052",
    "moduleId": "lesson-04",
    "number": 52,
    "question": "In body mechanics, instead of pushing, what should you do?",
    "options": [
      "Try to pull toward yourself. (තල්ලු කිරීමට වඩා තමන් දෙසට ඇදීමට උත්සාහ කරයි.)",
      "Shove forcefully with stiff arms. (දැඩි අත්වලින් බලහත්කාරයෙන් තල්ලු කරයි.)",
      "Leap backward while holding the user. (පරිශීලකයා අල්ලාගෙන පිතුපසට පනියි.)",
      "Lean backward away from the load. (බරෙන් ඈත්ව පිතුපසට නැසමයි.)"
    ],
    "correctIndex": 0,
    "explanation": "Try to pull toward yourself. (තල්ලු කිරීමට වඩා තමන් දෙසට ඇදීමට උත්සාහ කරයි.)",
    "kind": "mcq",
    "sinhalaText": "Body mechanics හිදී, තල්ලු කරනවා වෙනුවට ඔබ කළ යුත්තේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q053",
    "moduleId": "lesson-04",
    "number": 53,
    "question": "How should the movement of the center of gravity be carried out?",
    "options": [
      "Carry it out horizontally as much as possible. (ගුරුත්ව සක්න්රසේ චලනය හැකිතාක් තිරසේ ආකාරයෙන් සිදුකරයි.)",
      "In jerky up-and-down bounces. (ගැසේසසන ඉහළ-පහළ චලන ලෙස.)",
      "In wide circular swings. (පුළුල් වෘත්තාකාර පැද්දීම් ලෙස.)",
      "By dropping suddenly. (හදිසිසේ පහත් කිරීසමන්.)"
    ],
    "correctIndex": 0,
    "explanation": "Carry it out horizontally as much as possible. (ගුරුත්ව සක්න්රසේචලනය හැකිතාක් තිරසේ ආකාරයෙන් සිදු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "ගුරුත්වාකර්ෂණ සක්න්රසේ චලනය (movement of the center of gravity) සිදු කළ යුත්තේ කෙසේද?"
  },
  {
    "id": "lesson-04-q054",
    "moduleId": "lesson-04",
    "number": 54,
    "question": "To avoid twisting your body, where do you point the tips of your toes?",
    "options": [
      "Point them in the direction you are moving. (රීරය නොපැටලැවීමට පාදසේ ඇඟිලි ගමන් කරන දි වට යොමු කරයි.)",
      "Point them in the opposite direction of movement. (චලනය වන දි වට ප්‍රිවිරුද්ධ දි වට යොමු කරයි.)",
      "Point them inward toward each other at all times. (සෑම විටම එකිනෙකා දෙසට ඇතුළට යොමු කරයි.)",
      "Keep one foot in the air while turning. (හැසරන විට එක් පාදයක් වාතසේ තබයි.)"
    ],
    "correctIndex": 0,
    "explanation": "Point them in the direction you are moving. (රීරය නොපැටලැවීමට පාදසේ ඇඟිලි ගමන් කරන දි වට යොමු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "රීරය ඇඹරීම (twisting) වළක්වා ගැනීමට, ඔබේ පාදසේ ඇඟිලි තුඩු (tips of your toes) යොමු කරන්නේ සකාහාටද?"
  },
  {
    "id": "lesson-04-q055",
    "moduleId": "lesson-04",
    "number": 55,
    "question": "In body mechanics, what do you do with the principle of leverage?",
    "options": [
      "Utilize it. (Lever principle එක භාවිතා කරයි.)",
      "Ignore it completely. (සම්ූර්ණයෙන් නොසලකා හරියි.)",
      "Work against leverage using extra force. (අමතර බලයක් යොදා ලීවර මූලධර්මයට එසරහිව ක්‍රියා කරයි.)",
      "Replace it with twisting motions. (ඇඹසරන චලනවලින් එය ආදේ කරයි.)"
    ],
    "correctIndex": 0,
    "explanation": "Utilize it. (Lever principle එක භාවිතා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "Body mechanics හිදී, ලීවර මූලධර්මය (principle of leverage) සම්බන්ධයෙන් ඔබ කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q056",
    "moduleId": "lesson-04",
    "number": 56,
    "question": "To prevent lower back pain, what do you check about the care recipient?",
    "options": [
      "Check the state and ability of the care recipient. (සකාන්දේ සේදනාව වැළැක්වීමට භාවිතා කරන්නාසේතත්ත්වය සහ හැකියාව පරීක්ෂා කරයි.)",
      "Check only the clock on the wall. (බිත්තිසේ ඇති ඔරලෝසුව පමණක් පරීක්ෂා කරයි.)",
      "Check only the color of the bedsheet. (ඇඳ ඇතිරිල්සල් වර්ණය පමණක් පරීක්ෂා කරයි.)",
      "Nothing needs to be checked before lifting. (එසවීමට පෙර කිසිවක් පරීක්ෂා කිරීමට අව ය නැත.)"
    ],
    "correctIndex": 0,
    "explanation": "Check the state and ability of the care recipient. (සකාන්දේ සේදනාව වැළැක්වීමට භාවිතා කරන්නාසේ තත්ත්වය සහ හැකියාව පරීක්ෂා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සකාන්දේ සේදනාව වැළැක්වීමට, රැකවරණ ලබන්නා සම්බන්ධයෙන් ඔබ පරීක්ෂා කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q057",
    "moduleId": "lesson-04",
    "number": 57,
    "question": "What kind of welfare equipment is used to prevent lower back pain?",
    "options": [
      "Lifts, sliding boards, and similar equipment are used. (සකාන්දේ සේදනාව වැළැක්වීමට Lift සහ Sliding\nBoard වැනි උපකරණ භාවිතා කරයි.)",
      "Heavy metal weights and hammers. (බර ලෝහ බර සහ මිටි.)",
      "Slippery plastic sheets on stairs. (පඩිපෙළ මත ලිසේසන ලාසේටික් තහඩු.)",
      "Tight belts worn around the neck. (සගල වටා පළඳින තද පටි.)"
    ],
    "correctIndex": 0,
    "explanation": "Lifts, sliding boards, and similar equipment are used. (සකාන්සද්සේදනාව වැළැක්වීමට Lift සහ Sliding Board වැනි උපකරණ භාවිතා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සකාන්දේ සේදනාව වැළැක්වීමට භාවිතා කරන සුභසාධන උපකරණ (welfare equipment) මොනවාද?"
  },
  {
    "id": "lesson-04-q058",
    "moduleId": "lesson-04",
    "number": 58,
    "question": "What is important in daily habits to prevent lower back pain?",
    "options": [
      "Moderate exercise, nutrition, and rest are important. (මධයසේථ වයායාම, පෝෂණය සහ විසේකය වැදගත්ය.)",
      "Prolonged sitting without movement and poor sleep. (චලනයකින් සතාරව දිගු සේලාවක් වාඩි වී සිටීම සහ දුර්වල නින්ද.)",
      "Skipping meals and overworking. (ආහාර මඟ හැරීම සහ අතික ලෙස වැඩ කිරීම.)",
      "Avoiding all stretching and posture awareness. (සියලු ඇදීම් සහ ඉරියේ අවධානය මඟ හැරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Moderate exercise, nutrition, and rest are important. (මධයසේථ වයායාම, පෝෂණය සහ විසේකය වැදගත්ය.)",
    "kind": "mcq",
    "sinhalaText": "සකාන්දේ සේදනාව වැළැක්වීම සඳහා දෛනික පුරුදු (daily habits) තුළ වැදගත් වන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q059",
    "moduleId": "lesson-04",
    "number": 59,
    "question": "What is an infectious disease?",
    "options": [
      "It is an illness where pathogens enter the body and cause various symptoms. (රෝගකාරක රීරයට ඇතුළු වී විවිධ රෝග ලක්ෂණ ඇති කරන රෝගය ආසාදන රෝගයකි.)",
      "A condition caused only by wearing comfortable shoes. (පහසු සපත්තු පැළඳීමෙන් පමණක් ඇතිවන තත්ත්වයකි.)",
      "An injury caused by a sliding board. (sliding board එකකින් ඇතිවන තුවාලයකි.)",
      "A non-biological change from reading books. (පොත් කියවීමෙන් ඇතිවන ජීව විදයාත්මක නොවන වෙනසකි.)"
    ],
    "correctIndex": 0,
    "explanation": "It is an illness where pathogens enter the body and cause various\nsymptoms. (රෝගකාරක රීරයට ඇතුළු වී විවිධ රෝග ලක්ෂණ ඇති කරන රෝගය ආසාදන රෝගයකි.)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන රෝගයක් (infectious disease) යනු කුමක්ද?"
  },
  {
    "id": "lesson-04-q060",
    "moduleId": "lesson-04",
    "number": 60,
    "question": "Why are care recipients prone to contracting infectious diseases?",
    "options": [
      "Because their resistance/immunity may be weak. (භාවිතා කරන්නන්සේ ප්‍රිරෝධක හැකියාව දුර්වල වියහැකි නිසා ආසාදන රෝග වලට පහසුවෙන් සගාදුරු විය හැක.)",
      "Because they wash their hands too often. (ඔවුන් නිතරම අත් සෝදන නිසා.)",
      "Because clean rooms increase infection risk. (පිරිසිදු කාමර ආසාදන අවදානම වැඩි කරන නිසා.)",
      "Because nutrition strengthens pathogens. (පෝෂණය රෝග කාරක ශක්තිමත් කරන නිසා.)"
    ],
    "correctIndex": 0,
    "explanation": "Because their resistance/immunity may be weak. (භාවිතාකරන්නන්සේ ප්‍රිරෝධක හැකියාව දුර්වල විය හැකි නිසා ආසාදන රෝග වලට පහසුවෙන් සගාදුරු විය හැක.)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ ලබන්නන් ආසාදන රෝගවලට සගාදුරු වීමේ ප්‍රවණතාව වැඩි වන්නේ ඇයි?"
  },
  {
    "id": "lesson-04-q061",
    "moduleId": "lesson-04",
    "number": 61,
    "question": "Why do infectious diseases spread easily in care facilities?",
    "options": [
      "Because many people live together. (බොහෝ දෙනා එකට ජීවත් වන නිසා ආසාදන පහසුවෙන් පැතිරිය හැක.)",
      "Because residents never meet each other. (සන්වාසිකයන් කිසි විසටකත් එකිනෙකා හමු නොවන නිසා.)",
      "Because ventilation is prohibited. (වාතාශ්‍රය තහනම් කර ඇති නිසා.)",
      "Because gloves are disposed of properly. (අත්වැසුම් නිසි ලෙස ඉවත දමන නිසා.)"
    ],
    "correctIndex": 0,
    "explanation": "Because many people live together. (බොහෝ දෙනා එකට ජීවත් වන නිසා ආසාදන පහසුවෙන් පැතිරිය හැක.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාර මධයසේථාන/ආයතන තුළ ආසාදන රෝග පහසුවෙන් පැතිසරන්නේ ඇයි?"
  },
  {
    "id": "lesson-04-q062",
    "moduleId": "lesson-04",
    "number": 62,
    "question": "What kinds of things are pathogens?",
    "options": [
      "Viruses, bacteria, fungi, parasites, etc. (රෝගකාරක අතර දවරසේ, බැක්ටීරියා, දිලීර සහ පරපෝෂිතයන්ඇත.)",
      "Chairs, tables, and curtains. (පු, සම්ස සහ තිර රෙදි.)",
      "Sliding boards and lifts. (sliding boards සහ lifts.)",
      "Care plans and notebooks. (සත්කාර සැලසුම් සහ සටහන් පොත්.)"
    ],
    "correctIndex": 0,
    "explanation": "Viruses, bacteria, fungi, parasites, etc. (රෝගකාරක අතර දවරසේ,\nබැක්ටීරියා, දිලීර සහ පරපෝෂිතයන් ඇත.)",
    "kind": "mcq",
    "sinhalaText": "රෝග කාරක (pathogens) යනු කුමන ආකාරයේ දේවල්ද?"
  },
  {
    "id": "lesson-04-q063",
    "moduleId": "lesson-04",
    "number": 63,
    "question": "What do you do when a care recipient has a fever, diarrhea, vomiting, etc.?",
    "options": [
      "Wait until the next day to see if they recover (සුව සේදැයි බැලීමට ඊළඟ දවස වන තෙක් බලා සිටීම)",
      "Give them leftover medicine from another user (වෙනත් පරිශීලකයෙකුගේ ඉතිරි ඖෂධ ලබා දීම)",
      "Report to medical staff (දවදය කාර්ය මණ්ඩලයට වාර්තා කිරීම)",
      "Tell them to skip meals and sleep (ආහාර නොගෙන නිදා ගන්නා ලෙස පැවසීම)"
    ],
    "correctIndex": 2,
    "explanation": "Report to medical staff (දවදය කාර්ය මණ්ඩලයට වාර්තා කිරීම)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණය ලබන්නෙකුට උණ, පාචනය හෝ වමනය වැනි ලක්ෂණ ඇති විට ඔබ කුමක් කළ යුද?"
  },
  {
    "id": "lesson-04-q064",
    "moduleId": "lesson-04",
    "number": 64,
    "question": "What are the three elements of infection?",
    "options": [
      "Source of infection, route of transmission, and susceptible host (ආසාදන මූලාශ්‍රය, ආසාදන මාර්ගය සහ ධාරකයා)",
      "Fever, coughing, and sneezing (උණ, කැසේස සහ කිවිසුම් යාම)",
      "Gloves, mask, and vinyl apron (අත්වැසුම්, මුඛ ආවරණ සහ වයිනයිල් ඒප්‍රන්)",
      "Hospital, doctor, and medicine (රෝහල, දවදයවරයා සහ ඖෂධ)"
    ],
    "correctIndex": 0,
    "explanation": "Source of infection, route of transmission, and susceptible host\n(ආසාදන මූලාශ්‍රය, ආසාදන මාර්ගය සහ ධාරකයා)",
    "kind": "mcq",
    "sinhalaText": "ආසාදනයක කරුණු/සාධක තුන (three elements of infection) මොනවාද?"
  },
  {
    "id": "lesson-04-q065",
    "moduleId": "lesson-04",
    "number": 65,
    "question": "What is the basic method for preventing infectious diseases?",
    "options": [
      "Keeping all doors locked (සියලුම දොරවල් අගුළු දමා තැබීම)",
      "Breaking the chain of infection (ආසාදන දාමය බිඳ දැමීම)",
      "Stopping all family visits (පවුලේ සාමාජිකයන්සේ පැමිණීම සම්ූර්ණයෙන් නැවැත්වීම)",
      "Avoiding physical exercise (ශාරීරික වයායාමවලින් වැළකී සිටීම)"
    ],
    "correctIndex": 1,
    "explanation": "Breaking the chain of infection (ආසාදන දාමය බිඳ දැමීම)",
    "kind": "mcq",
    "sinhalaText": "බෝවන රෝග වැළැක්වීමේ මූලික ක්‍රමය කුමක්ද?"
  },
  {
    "id": "lesson-04-q066",
    "moduleId": "lesson-04",
    "number": 66,
    "question": "What is the countermeasure against the source of infection?",
    "options": [
      "Improve resistance/immunity (ප්‍රිරෝධක හැකියාව වැඩි කිරීම)",
      "Eliminate the source of infection (ආසාදන මූලාශ්‍රය ඉවත් කිරීම)",
      "Open all windows (සියලුම ජසනල් විවෘත කිරීම)",
      "Wear thick socks (ඝන සම්සේ පැළඳීම)"
    ],
    "correctIndex": 1,
    "explanation": "Eliminate the source of infection (ආසාදන මූලාශ්‍රය ඉවත් කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මූලාශ්‍රයට (source of infection) එසරහි ප්‍රිකර්මය/පියවර කුමක්ද?"
  },
  {
    "id": "lesson-04-q067",
    "moduleId": "lesson-04",
    "number": 67,
    "question": "What is the countermeasure against the route of transmission?",
    "options": [
      "Block the route of transmission (ආසාදන මාර්ගය අවහිර කිරීම)",
      "Increase room temperature (කාමර උෂේණත්වය වැඩි කිරීම)",
      "Share towels among users (පරිශීලකයන් අතර තුවා බෙදා ගැනීම)",
      "Reduce water intake (ජලය පානය කිරීම අඩු කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Block the route of transmission (ආසාදන මාර්ගය අවහිර කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මාර්ගයට (route of transmission) එසරහි ප්‍රිකර්මය/පියවර කුමක්ද?"
  },
  {
    "id": "lesson-04-q068",
    "moduleId": "lesson-04",
    "number": 68,
    "question": "What is the countermeasure against the host?",
    "options": [
      "Eliminate the source of infection (ආසාදන මූලාශ්‍රය ඉවත් කිරීම)",
      "Improve resistance/immunity (ධාරකයාසේ ප්‍රිරෝධක හැකියාව / ප්‍රි ශක්තිය වැඩි කිරීම)",
      "Keep the user in bed all day (පරිශීලකයා දවස පුරා ඇඳේ තබා ගැනීම)",
      "Avoid bathing (සේනානය කිරීමෙන් වැළකී සිටීම)"
    ],
    "correctIndex": 1,
    "explanation": "Improve resistance/immunity (ධාරකයාසේ ප්‍රිරෝධක හැකියාව වැඩිකිරීම)",
    "kind": "mcq",
    "sinhalaText": "ධාරකයාට (host) අදාළව ගන්නා ප්‍රිකර්මය/පියවර කුමක්ද?"
  },
  {
    "id": "lesson-04-q069",
    "moduleId": "lesson-04",
    "number": 69,
    "question": "What is an example of droplet transmission?",
    "options": [
      "Tuberculosis (ක්ෂය රෝගය)",
      "Measles (සරම්ප)",
      "Influenza, etc. (ඉන්ේලුසවන්සා ආදිය)",
      "Athlete's foot (අළුහම් / දිලීර ආසාදනය)"
    ],
    "correctIndex": 2,
    "explanation": "Influenza, etc. (ඉන්ේලුසවන්සා ආදිය)",
    "kind": "mcq",
    "sinhalaText": "බිඳි ආසාදනයකට (droplet transmission) උදාහරණයක් කුමක්ද?"
  },
  {
    "id": "lesson-04-q070",
    "moduleId": "lesson-04",
    "number": 70,
    "question": "What is an example of airborne transmission?",
    "options": [
      "Tuberculosis, measles, etc. (ක්ෂය රෝගය සහ සරම්ප ආදිය)",
      "Norovirus (නොරෝ දවරසය)",
      "Food poisoning (ආහාර විෂ වීම)",
      "Scabies (සහාරි / කැසීම)"
    ],
    "correctIndex": 0,
    "explanation": "Tuberculosis, measles, etc. (ක්ෂය රෝගය සහ සරම්ප ආදිය)",
    "kind": "mcq",
    "sinhalaText": "වායු මාර්ග ආසාදනයකට (airborne transmission) උදාහරණ මොනවාද?"
  },
  {
    "id": "lesson-04-q071",
    "moduleId": "lesson-04",
    "number": 71,
    "question": "How does contact transmission occur?",
    "options": [
      "Only through drinking unboiled water (උතුරවා නොගත් ජලය පානය කිරීමෙන් පමණි)",
      "It occurs by touching infected people or objects (ආසාදිත පුද්ගලයෙකු හෝ වසේතුවක් සේපර් කිරීසමන්සිදුසේ)",
      "By listening to loud noises (අතික බ්දවලට සවන් දීසමන්)",
      "By sitting near a window (ජසන්ලයක් අසල වාඩි වී සිටීසමන්)"
    ],
    "correctIndex": 1,
    "explanation": "It occurs by touching infected people or objects (ආසාදිත පුද්ගලයෙකුහෝ වසේතුවක් සේපර් කිරීමෙන් සිදුසේ)",
    "kind": "mcq",
    "sinhalaText": "සේපර් ආසාදනය (contact transmission) සිදුවන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q072",
    "moduleId": "lesson-04",
    "number": 72,
    "question": "What things become sources of infection?",
    "options": [
      "Blood, saliva, nasal mucus, excretions, and others (රුතිරය, කෙළ, නාසයෙන් පිටවන දියර සහ බැහැර කරන රවය ආදිය)",
      "Clean bedsheets and fresh towels (පිරිසිදු ඇඳ ඇතිරිලි සහ අලුත් තුවා)",
      "Boiled water and steamed rice (උතුරවා ගත් ජලය සහ පිසූ බත්)",
      "Disinfected doorknobs (විෂබීජහරණය කළ දොර අගුළු)"
    ],
    "correctIndex": 0,
    "explanation": "Blood, saliva, nasal mucus, excretions, and others (රුතිරය, කෙළ,\nනාසයෙන් පිටවන දියර සහ බැහැර කරන රවය ආදිය)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මූලාශ්‍ර (sources of infection) බවට පත්වන දේවල් මොනවාද?"
  },
  {
    "id": "lesson-04-q073",
    "moduleId": "lesson-04",
    "number": 73,
    "question": "What kinds of things are excretions?",
    "options": [
      "Sweat and tears (දහඩිය සහ කඳුළු)",
      "Vomit, urine, stool, etc. (වමනය, මුත්‍රා සහ මල ආදිය)",
      "Hair and nails (හිසකෙසේ සහ නියසපාතු)",
      "Soap and water (සබන් සහ ජලය)"
    ],
    "correctIndex": 1,
    "explanation": "Vomit, urine, stool, etc. (වමනය, මුත්‍රා සහ මල ආදිය)",
    "kind": "mcq",
    "sinhalaText": "බැහැර කරන රවය (excretions) යනු මොනවාද?"
  },
  {
    "id": "lesson-04-q074",
    "moduleId": "lesson-04",
    "number": 74,
    "question": "To prevent infection, how do you handle blood and body fluids?",
    "options": [
      "Touch them with bare hands if the user looks healthy (පරිශීලකයා නිරෝගීව සපසන් නම් හිසේ අතින් සේපර්කිරීම)",
      "Handle them as things that have the possibility of causing infection (ආසාදනය විය හැකි රවය ලෙස සලකා හැසිරවිය යුය)",
      "Wipe them using a regular cloth towel and reuse it (සාමාන්‍ය රෙදි තුවායකින් පිස දමා නැවත භාවිත කිරීම)",
      "Wash them off only at the end of the shift (වැඩ මුරය අවසානසේ පමණක් සෝදා හැරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Handle them as things that have the possibility of causing\ninfection (ආසාදනය විය හැකි රවය ලෙස සලකා හැසිරවිය යුය)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන වැළැක්වීම සඳහා, ඔබ රුතිරය සහ රීර දියර (blood and body fluids) හසුරුවන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q075",
    "moduleId": "lesson-04",
    "number": 75,
    "question": "When touching blood or excretions, what do you do?",
    "options": [
      "Always wear gloves (අනිවාර්යයෙන් අත්වැසුම් පැළඳිය යුය)",
      "Only apply hand cream beforehand (කලින් අත් ක්‍රීම් පමණක් ආසල්ප කිරීම)",
      "Use bare hands and wipe with a tissue (හිසේ අත් භාවිත කර ටිෂූ එකකින් පිස දැමීම)",
      "Wear cloth winter gloves (ශීත ඍතුසේ භාවිත කරන රෙදි අත්වැසුම් පැළඳීම)"
    ],
    "correctIndex": 0,
    "explanation": "Always wear gloves (අනිවාර්යයෙන් අත්වැසුම් පැළඳිය යුය)",
    "kind": "mcq",
    "sinhalaText": "රුතිරය හෝ බැහැර කරන රවය (blood or excretions) සේපර් කරන විට ඔබ කුමක් කළ යුද?"
  },
  {
    "id": "lesson-04-q076",
    "moduleId": "lesson-04",
    "number": 76,
    "question": "What protective equipment is used in care work?",
    "options": [
      "Gloves, vinyl aprons, masks, etc. (අත්වැසුම්, Vinyl apron සහ Mask ආදිය)",
      "Helmets and safety boots (සහල්මට්ට සහ ආරක්ෂිත සපත්තු)",
      "Sunglasses and scarves (අේ කණ්ණාඩි සහ සේකා්ේ)",
      "Cotton aprons and cloth slippers (කපු ඒප්‍රන් සහ රෙදි සරේපු)"
    ],
    "correctIndex": 0,
    "explanation": "Gloves, vinyl aprons, masks, etc. (අත්වැසුම්, Vinyl apron සහ Mask\nආදිය)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ කටයුවලදී (care work) භාවිතා කරන ආරක්ෂක උපකරණ (protective equipment) මොනවාද?"
  },
  {
    "id": "lesson-04-q077",
    "moduleId": "lesson-04",
    "number": 77,
    "question": "When do you replace disposable gloves?",
    "options": [
      "Once a day at the end of work (දිනකට වරක් වැඩ අවසානසේ)",
      "Replace them for each care act (එක් එක් රැකවරණ ක්‍රියාවකින් පසු මාරු කළ යුය)",
      "Only when they tear (ඒවා ඉරුණු විට පමණක්)",
      "Every Monday morning (සෑම සඳුදා උදෑසනකම)"
    ],
    "correctIndex": 1,
    "explanation": "Replace them for each care act (එක් එක් රැකවරණ ක්‍රියාවකින් පසු මාරුකළ යුය)",
    "kind": "mcq",
    "sinhalaText": "ඉවත දැමිය හැකි අත්වැසුම් (disposable gloves) මාරු කළ යුත්තේ කවදාද?"
  },
  {
    "id": "lesson-04-q078",
    "moduleId": "lesson-04",
    "number": 78,
    "question": "When removing disposable gloves, how do you handle the soiled side?",
    "options": [
      "Pull them off from the fingertips so the dirty side stays outside (අපිරිසිදු පැත්ත පිටතට සිටින සේ ඇඟිලිතුඩුවලින් ඇද ගලවයි)",
      "Remove them so that the inside becomes the outside (turn them inside out) (අපිරිසිදු පැත්ත ඇතුළට වන පරිදි ඇතුළු පැත්ත පිටතට හරවා ඉවත් කරයි)",
      "Wash them with soap and hang them to dry (සබන් යොදා සෝදා සේසලන්නට එල්ලයි)",
      "Put them in your uniform pocket (ඔබේ නිල ඇඳුමේ සාක්කුසේ දමා ගනියි)"
    ],
    "correctIndex": 1,
    "explanation": "Remove them so that the inside becomes the outside (turn them\ninside out) (අපිරිසිදු පැත්ත ඇතුළට වන පරිදි ඉවත් කරයි)",
    "kind": "mcq",
    "sinhalaText": "ඉවත දැමිය හැකි අත්වැසුම් (disposable gloves) ඉවත් කිරීමේදී අපිරිසිදු පැත්ත (soiled side) හසුරුවන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q079",
    "moduleId": "lesson-04",
    "number": 79,
    "question": "What do you use when washing your hands?",
    "options": [
      "Stagnant water in a basin (සබ්සමක ඇති එකු වූ ජලය)",
      "Running water and liquid soap (ගලා යන ජලය සහ සබන් දියර)",
      "Only warm water without soap (සබන් නොමැතිව උණුසුම් ජලය පමණක්)",
      "A wet cloth (තෙත් රෙදි කඩක්)"
    ],
    "correctIndex": 1,
    "explanation": "Running water and liquid soap (ගලා යන ජලය සහ සබන් දියර)",
    "kind": "mcq",
    "sinhalaText": "අත් සේදීමේදී ඔබ භාවිතා කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-04-q080",
    "moduleId": "lesson-04",
    "number": 80,
    "question": "What do you remove before washing your hands?",
    "options": [
      "Glasses and mask (කණ්ණාඩි සහ මුඛ ආවරණය)",
      "Rings and wristwatches (මුදු සහ අත් ඔරලෝසු)",
      "Apron and shoes (ඒප්‍රන් සහ සපත්තු)",
      "Name badge (නාම පුවරුව)"
    ],
    "correctIndex": 1,
    "explanation": "Rings and wristwatches (මුදු සහ අත් ඔරලෝසු)",
    "kind": "mcq",
    "sinhalaText": "අත් සේදීමට පෙර ඔබ ඉවත් කරන්නේ මොනවාද?"
  },
  {
    "id": "lesson-04-q081",
    "moduleId": "lesson-04",
    "number": 81,
    "question": "Where are the places that easily get dirty during handwashing?",
    "options": [
      "Fingertips, between fingers, back of the hand, base of the thumb, wrists, etc. (ඇඟිලි තුඩු, ඇඟිලි අතර,\nඅත් පිතුපස, මහපට ඇඟිල්සල් මුල සහ මැණික් කුව ආදිය)",
      "Elbows and shoulders only (වැලමිට සහ උරහිසේ පමණි)",
      "Forearms only (යටි බාහු පමණි)",
      "Only the center of the palm (අත්සල් මැද කොටස පමණි)"
    ],
    "correctIndex": 0,
    "explanation": "Fingertips, between fingers, back of the hand, base of the thumb,\nwrists, etc. (ඇඟිලි තුඩු, ඇඟිලි අතර, අත් පිතුපස, මහපට ඇඟිල්සල් මුල සහ මැණික් කුව ආදිය)",
    "kind": "mcq",
    "sinhalaText": "අත් සේදීමේදී පහසුවෙන් අපිරිසිදු වන (සේදීම මඟ හැරිය හැකි) සේථාන මොනවාද?"
  },
  {
    "id": "lesson-04-q082",
    "moduleId": "lesson-04",
    "number": 82,
    "question": "During handwashing, what do you do with the spaces between your fingers?",
    "options": [
      "Rinse them quickly with water only (ජලයෙන් පමණක් ඉක්මනින් සෝදා හරින්න)",
      "Interlace your fingers and wash the spaces between them thoroughly (ඇඟිලි එකිසනකට සම්බන්ධ කර ඇඟිලි අතර හොඳින් සේදිය යුතුය)",
      "Keep fingers tightly closed together (ඇඟිලි තදින් එකට වසා තබා ගන්න)",
      "Wipe them with a dry cloth before rinsing (සේදීමට පෙර වියළි සරද්දකින් පිස දමන්න)"
    ],
    "correctIndex": 1,
    "explanation": "Interlace your fingers and wash the spaces between them\nthoroughly (ඇඟිලි එකිසනකට සම්බන්ධ කර ඇඟිලි අතර හොඳින් සේදිය යුතුය)",
    "kind": "mcq",
    "sinhalaText": "අත් සේදීමේදී, ඔබේ ඇඟිලි අතර ඇති හිසේතැන් (spaces between your fingers) සෝදන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q083",
    "moduleId": "lesson-04",
    "number": 83,
    "question": "After handwashing, how do you dry your hands?",
    "options": [
      "Wipe them on your uniform (ඔබේ නිල ඇඳුමේ පිස දමන්න)",
      "Share a common cloth towel with everyone (සියලු දෙනා සමඟ පොදු රෙදි තුවායක් භාවිත කරන්න)",
      "Wipe off the water with a paper towel and dry them well (Paper towel එකකින් ජලය පිස දමා හොඳින්වියළාගත යුය)",
      "Leave them wet until they air dry (වාතයෙන් වියසළන තෙක් සතත පිටින් තබන්න)"
    ],
    "correctIndex": 2,
    "explanation": "Wipe off the water with a paper towel and dry them well (Paper towel එකකින් ජලය පිස දමා හොඳින් වියළාගත යුතුය). This matches the original Lesson 4 PDF answer key: c.",
    "kind": "mcq",
    "sinhalaText": "අත් සේදීමෙන් පසු, ඔබේ අත් වියළා ගන්නේ කෙසේද?"
  },
  {
    "id": "lesson-04-q084",
    "moduleId": "lesson-04",
    "number": 84,
    "question": "Why are care recipients prone to contracting infectious diseases?",
    "options": [
      "Because their resistance/immunity may be weak (ඔවුන්ගේ ප්‍රිරෝධක හැකියාව / ප්‍රි ශක්තිය දුර්වල වියහැකි නිසා)",
      "Because they exercise too much (ඔවුන් ඕනෑවට වඩා වයායාම කරන නිසා)",
      "Because they wash their hands too often (ඔවුන් නිතරම අත් සෝදන නිසා)",
      "Because they drink too much water (ඔවුන් ඕනෑවට වඩා ජලය පානය කරන නිසා)"
    ],
    "correctIndex": 0,
    "explanation": "Because their resistance/immunity may be weak (ඔවුන්ගේ ප්‍රතිරෝධක හැකියාව / ප්‍රතිශක්තිය දුර්වල විය හැකි නිසා). This matches the original Lesson 4 PDF bonus question answer key: a.",
    "kind": "mcq",
    "sinhalaText": "භාවිතා කරන්නන් (care recipients) බෝවන රෝගවලට පහසුවෙන් සගාදුරු වන්නේ ඇයි?"
  },
  {
    "id": "lesson-05-q001",
    "moduleId": "lesson-05",
    "number": 1,
    "question": "What is disuse syndrome?",
    "options": [
      "Various physical and mental conditions occurring due to prolonged bed rest or decreased activity. (දිගුකාලීන වි‍ේකය ‍  ක්‍රියාකාරකම්අඩු වීම නිසා ශරීර‍ේ  මන‍සේ විවිධ තත්තත්තව ඇති වීම.)",
      "Sudden fever caused by a bacterial throat infection. (බැක්ීරියා උගු‍ේ ආසාදනයක් නිසා ඇතිවන දිසි උණ.)",
      "A temporary allergy to wool blankets. (‍ලාම් බ්ලැන්ඩ්කට්වලට ඇතිවන තාවකාලික අසාත්තිකතාවක්.)",
      "Normal muscle growth after heavy weight training. (බර ඉසිලී‍ම් පුහුණු‍වන්ඩ් පසු සාමානය මාංශ ‍ේශි වේධනය.)"
    ],
    "correctIndex": 0,
    "explanation": "Various physical and mental conditions occurring due to prolonged bed rest or decreased activity.\n(දිගුකාලීන වි‍ේකය ‍  ක්‍රියාකාරකම් අඩු වීම නිසා ශරීර‍ේ  මන‍සේ විවිධ තත්තත්තව ඇති වීම.)",
    "kind": "mcq",
    "sinhalaText": "අක්‍රියතා සින්ඩ්‍රෝමය (Disuse syndrome) යනු කුමක්ද?"
  },
  {
    "id": "lesson-05-q002",
    "moduleId": "lesson-05",
    "number": 2,
    "question": "What are the symptoms caused by disuse syndrome?",
    "options": [
      "Orthostatic hypotension, palpitations/shortness of breath, malnutrition, decreased activity, decline in mental and sensory functions,\npressure ulcers (bedsores), and bone atrophy. (නැගී සිටින විට රුධිර පීඩනය අඩු වීම, ද සේපන්ඩ්දනය/ හුසේම ගැනී‍ම් අප සුතාව, ‍පෝෂණ ගැටලු,\nක්‍රියාකාරීත්තවය අඩු වීම, මානසික  සාං‍ේදන ක්‍රියාකාරීත්තවය අඩු වීම, පීඩන තුවාල ස අසේි ක්ෂය වීම.)",
      "Only toothaches and seasonal hay fever. (දත්ත කැක්කුම ස සෘතුමය පීනස පමණි.)",
      "Improved joint flexibility and stronger bone density. (සන්ඩ්ධි නමයශීලීභාවය වැඩි වීම ස අසේි ඝනත්තවය ශක්තිමත්ත වීම.)",
      "Instantaneous healing of surgical wounds without care. (සත්තකාර ‍නාමැතිව ශලයකේම තුවාල ක්ෂණිකව සුව වීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Orthostatic hypotension, palpitations/shortness of breath, malnutrition, decreased activity, decline in\nmental and sensory functions, pressure ulcers (bedsores), and bone atrophy. (නැගී සිටින විට රුධිර පීඩනය අඩු වීම, ද සේපන්ඩ්දනය/ හුසේම ගැනී‍ම් අප සුතාව, ‍පෝෂණ ගැටලු, ක්‍රියාකාරීත්තවය අඩු වීම, මානසික  සාං‍ේදන ක්‍රියාකාරීත්තවය අඩු වීම, පීඩන තුවාල ස අසේි ක්ෂය වීම.)",
    "kind": "mcq",
    "sinhalaText": "අක්‍රියතා සින්ඩ්‍රෝමය නිසා ඇතිවන ‍රෝග ලක්ෂණ ‍මානවාද?"
  },
  {
    "id": "lesson-05-q003",
    "moduleId": "lesson-05",
    "number": 3,
    "question": "What is a pressure ulcer (bedsore)?",
    "options": [
      "Damage/death of the skin tissue caused by circulatory disturbances due to staying in the same posture for a long time. (දිගු ‍ේලාවක්එකම ඉරියේ‍වන්ඩ් සිීම නිසා රුධිර සාංසරණය බාධා වී ස‍ම් පටක ය යා‍මන්ඩ් ඇතිවන පීඩන තුවාලය.)",
      "A scratch caused only by sharp fingernails. (තියුණු නිය‍පාතු නිසා පමණක් ඇතිවන සීරීමක්.)",
      "A harmless freckle that appears in sunlight. (හිරු එළි‍ේදී ‍ප‍නන නිකර ‍නාවන ලපයක්.)",
      "Swelling of the tongue after eating spicy food. (කුළුබඩු සහිත ආ ර ගැනී‍මන්ඩ් පසු දිව ඉදිමීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Damage/death of the skin tissue caused by circulatory disturbances due to staying in the same\nposture for a long time. (දිගු ‍ේලාවක් එකම ඉරියේ‍වන්ඩ් සිීම නිසා රුධිර සාංසරණය බාධා වී ස‍ම් පටක ය යා‍මන්ඩ් ඇතිවන පීඩන තුවාලය.)",
    "kind": "mcq",
    "sinhalaText": "පීඩන තුවාලය (Pressure ulcer / Bedsore) යනු කුමක්ද?"
  },
  {
    "id": "lesson-05-q004",
    "moduleId": "lesson-05",
    "number": 4,
    "question": "What are the causes of pressure ulcers?",
    "options": [
      "Staying in the same posture for a long time, wrinkles in the bedsheets, and friction during position changes. (දිගු ‍ේලාවක් එකම ඉරියේ‍වන්ඩ් සිීම, ඇඳ ඇතිරිල්‍ල් රැළි ස ඉරියේ ‍වනසේ කිරී‍ම්දී ඇතිවන ඝූෂණය.)",
      "Drinking plenty of water and walking daily. (ප්‍රමාණවත්ත තරම් ජලය පානය කිරීම ස දිනපතා ඇවිදීම.)",
      "Using a smooth mattress with clean, flat sheets. (පිරිසිදු, සමතලා ඇඳ ඇතිරිලි සහිත සුමුදු ‍මට්ටයක් භාවිත කිරීම.)",
      "Changing body position regularly every couple of hours. (පැය කිහිපයකට වරක් නිතිපතා ශරීර ඉරියේ ‍වනසේ කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Staying in the same posture for a long time, wrinkles in the bedsheets, and friction during position\nchanges. (දිගු ‍ේලාවක් එකම ඉරියේ‍වන්ඩ් සිීම, ඇඳ ඇතිරිල්‍ල් රැළි ස ඉරියේ ‍වනසේ කිරී‍ම්දී ඇතිවන ඝූෂණය.)",
    "kind": "mcq",
    "sinhalaText": "පීඩන තුවාල ඇතිවීමට ‍ තු ‍මානවාද?"
  },
  {
    "id": "lesson-05-q005",
    "moduleId": "lesson-05",
    "number": 5,
    "question": "What are the methods to prevent pressure ulcers?",
    "options": [
      "Regular position changes, adequate nutrition, and getting out of bed if possible. (නිතිපතා ඉරියේ ‍වනසේ කිරීම, ප්‍රමාණවත්ත ‍පෝෂණය ලබාදීම ස කි නම් ඇ‍ඳන්ඩ් නැගිීමට උපකාර කිරීම.)",
      "Leaving the user in one position for 24 hours without moving. (චලනය ‍නාකර පැය 24ක් එකම ඉරියේ‍වන්ඩ් තැබීම.)",
      "Pulling the user across wrinkled sheets by dragging their arms. (අත්ත ඇද‍ගන රැළි සහිත ඇඳ ඇතිරිලි මතින්ඩ් ඇදීම.)",
      "Restricting fluids and meals. (දියර ස ආ ර සීමා කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Regular position changes, adequate nutrition, and getting out of bed if possible. (නිතිපතා ඉරියේ‍වනසේ කිරීම, ප්‍රමාණවත්ත ‍පෝෂණය ලබාදීම ස කි නම් ඇ‍ඳන්ඩ් නැගිීමට උපකාර කිරීම.)",
    "kind": "mcq",
    "sinhalaText": "පීඩන තුවාල වැළැක්වී‍ම් ක්‍රම ‍මානවාද?"
  },
  {
    "id": "lesson-05-q006",
    "moduleId": "lesson-05",
    "number": 6,
    "question": "Where are the areas prone to pressure ulcers?",
    "options": [
      "Head area, sacrum area, joint areas, scapula (shoulder blade) area, radius (forearm) area, and buttocks area. (හිස ප්‍ර‍ේශය, සැක්‍රම්ප්‍ර‍ේශය, සන්ඩ්ධි ප්‍ර‍ේශ, උරහිසේ අසේි ප්‍ර‍ේශය, පිටු පස අසේි ප්‍ර‍ේශ ස තට්ටම් ප්‍ර‍ේශ)",
      "Only the tips of the eyelashes. (ඇහිපි ටු තුඩු පමණි.)",
      "Only the inside of the mouth. (මුඛය ඇතුළත පමණි.)",
      "None of the body parts are ever affected. (කිසිදු ශරීර ‍කාටසකට බලපෑමක් සිදු ‍නා‍ේ.)"
    ],
    "correctIndex": 0,
    "explanation": "Head area, sacrum area, joint areas, scapula (shoulder blade) area, radius (forearm) area, and\nbuttocks area. (හිස ප්‍ර‍ේශය, සැක්‍රම් ප්‍ර‍ේශය, සන්ඩ්ධි ප්‍ර‍ේශ, උරහිසේ අසේි ප්‍ර‍ේශය, පිටු පස අසේි ප්‍ර‍ේශ ස තට්ටම් ප්‍ර‍ේශ)",
    "kind": "mcq",
    "sinhalaText": "පීඩන තුවාල ඇතිවී‍ම් අවදානම ඇති සේථාන ‍මානවාද?"
  },
  {
    "id": "lesson-05-q007",
    "moduleId": "lesson-05",
    "number": 7,
    "question": "What is used to support the body when walking?",
    "options": [
      "A cane/crutch. (ඇවිදී‍ම්දී ශරීරයට ආධාර ලබා ගැනීමට භාවිත කරන සැරයටිය.)",
      "A pillow under the chin. (නිකට යටින්ඩ් තබන ‍කාට්ටයක්.)",
      "A television remote control. (රූපවාහිනී දුරසේථ පාලකයක්.)",
      "A thermometer. (උෂේණත්තවමානයක්.)"
    ],
    "correctIndex": 0,
    "explanation": "A cane/crutch. (ඇවිදී‍ම්දී ශරීරයට ආධාර ලබා ගැනීමට භාවිත කරන සැරයටිය.)",
    "kind": "mcq",
    "sinhalaText": "ඇවිදී‍ම්දී ශරීරයට ආධාර ලබා ගැනීමට භාවිත කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q008",
    "moduleId": "lesson-05",
    "number": 8,
    "question": "When helping a user with left-sided hemiplegia roll over, how do you position the affected side?",
    "options": [
      "Place the affected side up. (නි‍රෝගී පැත්ත‍ත්ත පාදය ඉ ළට නබයි / Place the affected side up.)",
      "Twist the neck forcefully. (බල ත්තකාර‍යන්ඩ් ‍ගල ඇඹරීම.)",
      "Drop the arm off the bed edge. (අත ඇ‍ඳේ දාර‍යන්ඩ් ප ළට දැමීම.)",
      "Roll them rapidly without warning. (අනතුරු ඇඟවීමකින්ඩ් ‍තාරව ‍ේග‍යන්ඩ් ‍පරළීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Place the affected side up. (නි‍රෝගී පැත්ත‍ත්ත පාදය ඉ ළට නබයි / Place the affected side up.)",
    "kind": "mcq",
    "sinhalaText": "වම් පැත්ත‍ත්ත අාංශභාගය (left-sided hemiplegia) ඇති පරිශීලක‍යකු ‍පරළීමට උපකාර කරන විට, ආබාධිත/දුේවල පැත්තත සේථානගත කරන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q009",
    "moduleId": "lesson-05",
    "number": 9,
    "question": "How do you adjust the height of the bed?",
    "options": [
      "Adjust it to a height where both soles of the user's feet touch the floor. (‍සේවාලාභියා වාඩි වූ විට පාද ‍ද‍ක් පතුල් බිමට සේපේශ වන උසට ඇඳ සකසේ කරයි.)",
      "Raise it as high as the ceiling. (සිවිලිම තරම් ඉ ළට එසවීම.)",
      "Tilt the bed sideways. (ඇඳ පැත්තතකට ඇල කිරීම.)",
      "Leave it at a height where feet dangle in the air. (පාද වාත‍ේ එල්‍ලන උසක තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Adjust it to a height where both soles of the user's feet touch the floor. (‍සේවාලාභියා වාඩි වූ විට පාද‍ද‍ක් පතුල් බිමට සේපේශ වන උසට ඇඳ සකසේ කරයි.)",
    "kind": "mcq",
    "sinhalaText": "ඇ‍ඳේ උස සකසේ කරන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q010",
    "moduleId": "lesson-05",
    "number": 10,
    "question": "When standing up, what do you do with the knee on the affected side?",
    "options": [
      "Support it with your hand to prevent the knee from buckling. (දුේවල පැත්ත‍ත්ත දණහිස නැමී වැීම වැළැක්වීමට අතින්ඩ් ආධාර කරයි)",
      "Push it backward suddenly. (එකවර පිටුපසට තල්ලු කිරීම.)",
      "Ignore it completely. (සම්ූේණ‍යන්ඩ්ම ‍නාසලකා රීම.)",
      "Tie it tightly to the chair leg. (පුටු කකුලක තදින්ඩ් බැඳ තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Support it with your hand to prevent the knee from buckling. (දුේවල පැත්ත‍ත්ත දණහිස නැමී වැීම වැළැක්වීමට අතින්ඩ් ආධාර කරයි)",
    "kind": "mcq",
    "sinhalaText": "නැගී සිටින විට, දුේවල/ආබාධිත පැත්ත‍ත්ත දණහිස සම්බන්ඩ්ධ‍යන්ඩ් ඔබ කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q011",
    "moduleId": "lesson-05",
    "number": 11,
    "question": "When going up stairs, where is the caregiver located?",
    "options": [
      "Behind the user. (පඩි‍පළ නගින විට ආරක්ෂාව සඳ  සාත්තතු ‍සේවකයා ‍සේවාලාභියා‍ේ පිටුපසින්ඩ් සිී.)",
      "Walking blindfolded. (ඇසේ බැඳ‍ගන ඇවිදීම.)",
      "Sitting on the top landing reading a book. (ඉ ළ තට්ටු‍ේ වාඩි වී ‍පාතක් කියවීම.)",
      "Far away in another room. (‍වනත්ත කාමරයක ඈතින්ඩ් සිීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Behind the user. (පඩි‍පළ නගින විට ආරක්ෂාව සඳ  සාත්තතු ‍සේවකයා ‍සේවාලාභියා‍ේ පිටුපසින්ඩ් සිී.)",
    "kind": "mcq",
    "sinhalaText": "පඩි‍පළ නගින විට, සත්තකාරකයා සිටින්ඩ්‍න්ඩ් ‍කාතැනද?"
  },
  {
    "id": "lesson-05-q012",
    "moduleId": "lesson-05",
    "number": 12,
    "question": "When going up stairs, in what order does the user move their legs/cane?",
    "options": [
      "Cane → unaffected leg → affected leg. (පඩි‍පළ නගින විට අනුපිළි‍වල: සැරයටිය – ශක්තිමත්ත පාදය – දුේවල පාදය.)",
      "Affected leg → cane → unaffected leg. (දුේවල පාදය – සැරයටිය – ශක්තිමත්ත පාදය.)",
      "Both legs jumping together with eyes closed. (දෑසේ පියා‍ගන පාද ‍දකම එකට පැනීම.)",
      "Cane thrown up first. (සැරයටිය මුලින්ඩ්ම ඉ ළට විසි කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Cane → unaffected leg → affected leg. (පඩි‍පළ නගින විට අනුපිළි‍වල: සැරයටිය – ශක්තිමත්ත පාදය – දුේවල පාදය.)",
    "kind": "mcq",
    "sinhalaText": "පඩි‍පළ නගින විට, පරිශීලකයා සැරයටිය ස පාද චලනය කරන්ඩ්‍න්ඩ් කුමන අනුපිළි‍වළටද?"
  },
  {
    "id": "lesson-05-q013",
    "moduleId": "lesson-05",
    "number": 13,
    "question": "When going down stairs, in what order does the user move?",
    "options": [
      "Cane → affected leg → unaffected leg. (පඩි‍පළ බසින විට අනුපිළි‍වල: සැරයටිය - දුේවල පාදය - ශක්තිමත්ත පාදය.)",
      "Unaffected leg → cane → affected leg. (ශක්තිමත්ත පාදය – සැරයටිය – දුේවල පාදය.)",
      "Running down rapidly without holding rail/cane. (අත්තවැල ‍  සැරයටිය ‍නාඅල්ලා ‍ේග‍යන්ඩ් දිව යාම.)",
      "Sliding down on a tray. (තැටියක වාඩි වී ලිසේසා යාම.)"
    ],
    "correctIndex": 0,
    "explanation": "Cane → affected leg → unaffected leg. (පඩි‍පළ බසින විට අනුපිළි‍වල: සැරයටිය - දුේවල පාදය - ශක්තිමත්ත පාදය.)",
    "kind": "mcq",
    "sinhalaText": "පඩි‍පළ බසින විට, පරිශීලකයා චලනය වන්ඩ්‍න්ඩ් කුමන අනුපිළි‍වළටද?"
  },
  {
    "id": "lesson-05-q014",
    "moduleId": "lesson-05",
    "number": 14,
    "question": "What is the reason for checking tire air pressure before using a wheelchair?",
    "options": [
      "Because if the air pressure is low, the brakes will not work sufficiently, which is dangerous. (‍රෝද වල වායු පීඩනය අඩු නම් ‍ේක් ප්‍රමාණවත්ත‍ලස ක්‍රියා ‍නාකරන නිසා අනතුරුදායක ‍ේ.)",
      "Because low air pressure makes the wheelchair fly. (වායු පීඩනය අඩු වී‍මන්ඩ් ‍රෝද පුටුව පියාසර කරන නිසා.)",
      "To change the color of the tires. (ටයේවල වේණය ‍වනසේ කිරීමට.)",
      "There is no reason at all. (කිසිදු ‍ තුවක් ‍නාමැත.)"
    ],
    "correctIndex": 0,
    "explanation": "Because if the air pressure is low, the brakes will not work sufficiently, which is dangerous. (‍රෝද වල වායු පීඩනය අඩු නම් ‍ේක් ප්‍රමාණවත්ත ‍ලස ක්‍රියා ‍නාකරන නිසා අනතුරුදායක ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "‍රෝද පුටුවක් භාවිත කිරීමට ‍පර ටයේවල වායු පීඩනය පරීක්ෂා කිරීමට ‍ තුව කුමක්ද?"
  },
  {
    "id": "lesson-05-q015",
    "moduleId": "lesson-05",
    "number": 15,
    "question": "When transferring from a bed to a wheelchair, why is the wheelchair placed on the unaffected side?",
    "options": [
      "To make it easier for the user to move safely. (‍සේවාලාභියාට ආරක්ිතව ‍රෝද පුටුවට මාරු වීමට ප සු කිරීම සඳ ය.)",
      "To block the doorway. (‍දාරටුව අවහිර කිරීමට.)",
      "To make the transfer harder. (මාරු කිරීම වඩාත්ත අප සු කිරීමට.)",
      "To leave the brakes unlocked. (‍ේක් අගුළු ‍නාදමා තැබීමට.)"
    ],
    "correctIndex": 0,
    "explanation": "To make it easier for the user to move safely. (‍සේවාලාභියාට ආරක්ිතව ‍රෝද පුටුවට මාරු වීමට ප සු කිරීම සඳ ය.)",
    "kind": "mcq",
    "sinhalaText": "ඇ‍ඳන්ඩ් ‍රෝද පුටුවකට මාරු කරන විට, ‍රෝද පුටුව නි‍රෝගී පැත්ත‍ත්ත තබන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q016",
    "moduleId": "lesson-05",
    "number": 16,
    "question": "Why do you support the user's affected knee when transferring to a wheelchair?",
    "options": [
      "To prevent the knee from buckling. (දුේවල පැත්ත‍ත්ත දණහිස නැමී වැීම වැළැක්වීම සඳ ය.)",
      "To make the user stand on one leg without support. (ආධාරයකින්ඩ් ‍තාරව එක් පයකින්ඩ් සිටුවීමට.)",
      "To pull the foot off the floor. (පාදය බි‍මන්ඩ් ඉ ළට ඇදීමට.)",
      "To twist the ankle. (වළලුකර ඇඹරීමට.)"
    ],
    "correctIndex": 0,
    "explanation": "To prevent the knee from buckling. (දුේවල පැත්ත‍ත්ත දණහිස නැමී වැීම වැළැක්වීම සඳ ය.)",
    "kind": "mcq",
    "sinhalaText": "‍රෝද පුටුවකට මාරු කරන විට පරිශීලකයා‍ේ දුේවල/ආබාධිත දණහිසට ආධාර කරන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q017",
    "moduleId": "lesson-05",
    "number": 17,
    "question": "After having the user sit in the wheelchair, why do you have them sit back deeply?",
    "options": [
      "To stabilize their posture. (නිවැරදි ස සේථාවර වාඩි වී‍ම් ඉරියේවක් ලබාදීම සඳ ය.)",
      "So they fall out of the front. (ඔවුන්ඩ් ඉදිරි‍යන්ඩ් වැීමට.)",
      "To leave them leaning sideways. (පැත්තතකට ඇල වී සිීමට.)",
      "To make the backrest uncomfortable. (පිටුපස ආධාරකය අප සු කිරීමට.)"
    ],
    "correctIndex": 0,
    "explanation": "To stabilize their posture. (නිවැරදි ස සේථාවර වාඩි වී‍ම් ඉරියේවක් ලබාදීම සඳ ය.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා ‍රෝද පුටු‍ේ වාඩි කරවී‍මන්ඩ් පසු, පිටුපසට ‍ ඳින්ඩ් වාඩි කරවන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q018",
    "moduleId": "lesson-05",
    "number": 18,
    "question": "Why do you check the user's hands and feet before moving the wheelchair?",
    "options": [
      "To prevent hands or feet from getting caught in the driving wheels or other parts. (අත්ත ‍  පාද ‍රෝද‍ේ චලනය වන ‍කාටසේ වලට සු වීම වැළැක්වීම සඳ ය.)",
      "To count their fingernails. (නිය‍පාතු ගණන්ඩ් කිරීමට.)",
      "To remove their shoes mid-roll. (චලනය වන අතරතුර සපත්තතු ගැලවීමට.)",
      "Because wheels never move. (‍රෝද කිසි වි‍ටක චලනය ‍නාවන නිසා.)"
    ],
    "correctIndex": 0,
    "explanation": "To prevent hands or feet from getting caught in the driving wheels or other parts. (අත්ත ‍  පාද‍රෝද‍ේ චලනය වන ‍කාටසේ වලට සු වීම වැළැක්වීම සඳ ය.)",
    "kind": "mcq",
    "sinhalaText": "‍රෝද පුටුව චලනය කිරීමට ‍පර පරිශීලකයා‍ේ අත්ත ස පාද පරීක්ෂා කරන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q019",
    "moduleId": "lesson-05",
    "number": 19,
    "question": "Before moving the wheelchair, besides releasing the brake, what do you do?",
    "options": [
      "Inform the user that the wheelchair is going to move before moving it. (‍ේක් ඉවත්ත කිරීම පමණක් ‍නාව, ‍රෝද පුටුව චලනය කරන බව‍සේවාලාභියාට දැනුම් දී පසුව ‍ගන යයි.)",
      "Push suddenly without saying anything. (කිසිවක් ‍නාකියා එකවර තල්ලු කිරීම.)",
      "Lift the footplates onto the floor while rolling. (ගමන්ඩ් කරන අතරතුර පාද තබන පුවරු බිමට දැමීම.)",
      "Walk away and leave the user. (පරිශීලකයා තනි කර ඉවත්තව යාම.)"
    ],
    "correctIndex": 0,
    "explanation": "Inform the user that the wheelchair is going to move before moving it. (‍ේක් ඉවත්ත කිරීම පමණක් ‍නාව,‍රෝද පුටුව චලනය කරන බව ‍සේවාලාභියාට දැනුම් දී පසුව ‍ගන යයි.)",
    "kind": "mcq",
    "sinhalaText": "‍රෝද පුටුව චලනය කිරීමට ‍පර, ‍ේක් ඉවත්ත කිරීමට අමතරව ඔබ කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q020",
    "moduleId": "lesson-05",
    "number": 20,
    "question": "When going up a step with a wheelchair, what do you do first?",
    "options": [
      "Stop once in front of the step and explain to the user. (පඩිය / උස ‍වනස ඉදිරි‍ේ මුලින්ඩ් නතර වී, එය තරණය කරන බව ‍සේවාලාභියාට පැ දිලිකරයි.)",
      "Rush at full speed into the step. (උපරිම ‍ේග‍යන්ඩ් පඩිය ‍දසට දිව යාම.)",
      "Tilt backward with no warning. (අනතුරු ඇඟවීමකින්ඩ් ‍තාරව පිටුපසට ඇල කිරීම.)",
      "Leave the step uninspected. (පඩිය පරීක්ෂා ‍නාකර සිීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Stop once in front of the step and explain to the user. (පඩිය / උස ‍වනස ඉදිරි‍ේ මුලින්ඩ් නතර වී, එය තරණය කරන බව ‍සේවාලාභියාට පැ දිලි කරයි.)",
    "kind": "mcq",
    "sinhalaText": "‍රෝද පුටුවකින්ඩ් පඩියක් ඉ ළට යන විට, ඔබ පළමුව කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q021",
    "moduleId": "lesson-05",
    "number": 21,
    "question": "When going up a step, in what order do you proceed?",
    "options": [
      "Place the casters (front wheels) on top of the step, and then lift the driving wheels (large wheels). (මුලින්ඩ් ඉදිරි කුඩා ‍රෝද පඩි‍ේ ඉ ළට තබා, පසුව ප්‍රධාන ‍රෝද ඉ ළට ‍ගන යයි.)",
      "Lift the large wheels first while leaving front wheels stuck below. (ඉදිරි ‍රෝද ප ළ සිරවී තිබියදී විශාල ‍රෝද මුලින්ඩ් එසවීම.)",
      "Roll backward up the step. (පසුපසට ‍පරළා පඩිය නැගීම.)",
      "Remove the wheels first. (මුලින්ඩ් ‍රෝද ගැලවීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Place the casters (front wheels) on top of the step, and then lift the driving wheels (large wheels).\n(මුලින්ඩ් ඉදිරි කුඩා ‍රෝද පඩි‍ේ ඉ ළට තබා, පසුව ප්‍රධාන ‍රෝද ඉ ළට ‍ගන යයි.)",
    "kind": "mcq",
    "sinhalaText": "පඩියක් ඉ ළට යන විට, ඔබ ඉදිරියට යන්ඩ්‍න්ඩ් කුමන අනුපිළි‍වළටද?"
  },
  {
    "id": "lesson-05-q022",
    "moduleId": "lesson-05",
    "number": 22,
    "question": "When going down a step in a wheelchair, how do you go down?",
    "options": [
      "Face backward, lower the driving wheels quietly, and then lower the casters. (පසුපසට මුහුණලා ප්‍රධාන ‍රෝද ‍සින්ඩ් ප ළට දමා, පසුව ඉදිරි‍රෝද ප ළට දමයි.)",
      "Face forward and drop front casters straight down. (ඉදිරියට මුහුණලා ඉදිරි ‍රෝද ‍කළින්ඩ්ම ප ළට දැමීම.)",
      "Let go of the handles and let it roll. (සුරු අත්ත ර ‍පර‍ළන්ඩ්නට ඉඩ රීම.)",
      "Jump down with the wheelchair. (‍රෝද පුටුව සමඟ ප ළට පැනීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Face backward, lower the driving wheels quietly, and then lower the casters. (පසුපසට මුහුණලා ප්‍රධාන‍රෝද ‍සින්ඩ් ප ළට දමා, පසුව ඉදිරි ‍රෝද ප ළට දමයි.)",
    "kind": "mcq",
    "sinhalaText": "‍රෝද පුටුවකින්ඩ් පඩියකින්ඩ් ප ළට බසින විට, ඔබ බසින්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q023",
    "moduleId": "lesson-05",
    "number": 23,
    "question": "When going down a steep slope, why do you go backward?",
    "options": [
      "To prevent the user from sliding out of the wheelchair. (‍සේවාලාභියා ‍රෝද පුටු‍වන්ඩ් ඉදිරියට ලිසේසා වැීම වැළැක්වීමට පසුපසට මුහුණලා ගමන්ඩ්කරයි.)",
      "Because forward movement is impossible on slopes. (බෑවුම්වල ඉදිරියට යාම කළ ‍නා කි නිසා.)",
      "To make the user slide forward. (පරිශීලකයා ඉදිරියට ලිසේසා යාමට.)",
      "To save battery power. (බැටරි බලය ඉතිරි කිරීමට.)"
    ],
    "correctIndex": 0,
    "explanation": "To prevent the user from sliding out of the wheelchair. (‍සේවාලාභියා ‍රෝද පුටු‍වන්ඩ් ඉදිරියට ලිසේසා වැීම වැළැක්වීමට පසුපසට මුහුණලා ගමන්ඩ් කරයි.)",
    "kind": "mcq",
    "sinhalaText": "තියුණු බෑවුමකින්ඩ් (steep slope) ප ළට යන විට, පසුපසට මුහුණලා යන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q024",
    "moduleId": "lesson-05",
    "number": 24,
    "question": "When going down a steep slope, what does the caregiver check?",
    "options": [
      "Thoroughly check safety behind them. (බෑවු‍මන්ඩ් ප ළට යාමට ‍පර පිටුපස ආරක්ිත දැයි ‍ ඳින්ඩ් පරීක්ෂා කරයි.)",
      "Check the sky for rain only. (වැසේස ඇද ‍ල්දැයි අ ස පමණක් පරීක්ෂා කිරීම.)",
      "Close their eyes while backing up. (පසුපසට යන අතරතුර දෑසේ පියා ගැනීම.)",
      "Ignore obstacles behind. (පිටුපස ඇති බාධක ‍නාසලකා රීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Thoroughly check safety behind them. (බෑවු‍මන්ඩ් ප ළට යාමට ‍පර පිටුපස ආරක්ිත දැයි ‍ ඳින්ඩ් පරීක්ෂාකරයි.)Caregiver assisting mobility transfer from bed to wheelchair with knee support and locked brakesCaregiver assisting mobility\ntransfer from bed to wheelchair with knee support and locked brakes## Part 2: Swallowing & Meal Assistance (ප්‍රශේන 25 – 37)",
    "kind": "mcq",
    "sinhalaText": "තියුණු බෑවුමකින්ඩ් ප ළට යන විට, සත්තකාරකයා පරීක්ෂා කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q025",
    "moduleId": "lesson-05",
    "number": 25,
    "question": "[Phases of swallowing] — What is the correct sequence of the phases of swallowing?",
    "options": [
      "Advance recognition phase → Preparation phase → Oral phase → Pharyngeal phase → Esophageal phase (ඳුනා ගැනීම – සකසේ කිරීම\n– මුඛ‍යන්ඩ් ‍ගනයාම - ගිලීම - ආ ර නාලය ර  ආමාශයට යාම.)",
      "Esophageal phase → Pharyngeal phase → Oral phase → Preparation phase → Advance recognition phase (ආ ර නාලය – ගිලීම –\nමුඛ‍යන්ඩ් ‍ගනයාම – සකසේ කිරීම – ඳුනා ගැනීම.)",
      "Oral phase → Esophageal phase → Advance recognition phase (මුඛ‍යන්ඩ් ‍ගනයාම – ආ ර නාලය – ඳුනා ගැනීම.)",
      "Pharyngeal phase only (ගිලී‍ම් අවධිය පමණි.)"
    ],
    "correctIndex": 0,
    "explanation": "Advance recognition phase → Preparation phase → Oral phase → Pharyngeal phase →\nEsophageal phase (ඳුනා ගැනීම – සකසේ කිරීම – මුඛ‍යන්ඩ් ‍ගනයාම - ගිලීම - ආ ර නාලය ර  ආමාශයට යාම.)",
    "kind": "mcq",
    "sinhalaText": "[ගිලී‍ම් අවධීන්ඩ් / Phases of swallowing] — ගිලී‍ම් අවධීන්ඩ්‍ේ නිවැරදි අනුපිළි‍වළ කුමක්ද?"
  },
  {
    "id": "lesson-05-q026",
    "moduleId": "lesson-05",
    "number": 26,
    "question": "When eating on a bed, what posture do you put the user in?",
    "options": [
      "Raise the bed's gatch (backrest) and create an upright upper-body posture. (ඇ‍ඳේ හිසේ වැසුම ඉ ළ නාංවා උඩුකය ‍කළින්ඩ් වන ඉරියේවක්සකසේ කරයි.)",
      "Keep the user completely flat on their back. (පරිශීලකයා සම්ූේණ‍යන්ඩ්ම පිටුපසින්ඩ් සමතලා තැබීම.)",
      "Hang the head upside down over the edge. (හිස දාර‍යන්ඩ් ප ළට එල්ලා තැබීම.)",
      "Keep the user asleep while feeding. (ආ ර කවන අතරතුර පරිශීලකයා නිදි කරවා තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Raise the bed's gatch (backrest) and create an upright upper-body posture. (ඇ‍ඳේ හිසේ වැසුම ඉ ළ නාංවා උඩුකය ‍කළින්ඩ් වන ඉරියේවක් සකසේ කරයි.)",
    "kind": "mcq",
    "sinhalaText": "ඇඳක සිට ආ ර ගන්ඩ්නා විට, පරිශීලකයා කුමන ඉරියේවක තබන්ඩ්‍න්ඩ්ද?"
  },
  {
    "id": "lesson-05-q027",
    "moduleId": "lesson-05",
    "number": 27,
    "question": "If it is difficult to adopt an upright upper-body posture, what do you do?",
    "options": [
      "Adopt a lateral (side-lying) posture. (උඩුකය ‍කළින්ඩ් කිරීම අප සු නම්, පැත්තතට රවූ ඉරියේවක් ලබා ‍දයි.)",
      "Force the user to stand on tiptoes. (ඇඟිලි තුඩුවලින්ඩ් සිටගැනීමට බල කිරීම.)",
      "Tilt the bed straight down at 90 degrees. (ඇඳ අාංශක 90කින්ඩ් ‍කළින්ඩ්ම ප ළට ඇල කිරීම.)",
      "Stop all nutrition permanently. (සියලුම ‍පෝෂණය සේිරවම නැවැත්තවීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Adopt a lateral (side-lying) posture. (උඩුකය ‍කළින්ඩ් කිරීම අප සු නම්, පැත්තතට රවූ ඉරියේවක් ලබා ‍දයි.)",
    "kind": "mcq",
    "sinhalaText": "උඩුකය ‍කළින්ඩ් වන ඉරියේවක් ගැනීම අප සු නම්, ඔබ කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q028",
    "moduleId": "lesson-05",
    "number": 28,
    "question": "During meals for a user with hemiplegia, which side is placed downward?",
    "options": [
      "The unaffected side is placed downward. (අාංශභාගය ඇත්තනම්, නි‍රෝගී පැත්තත ප ළට සිටින ‍සේ තබයි.)",
      "The paralyzed/affected side is always placed downward. (දුේවල/ආබාධිත පැත්තත සැමවිටම ප ළට තැබීම.)",
      "Neither side matters. (කිසිදු පැත්තතක් වැදගත්ත ‍නා‍ේ.)",
      "Rotate the user like a wheel. (‍රෝදයක් ‍මන්ඩ් පරිශීලකයා කරකැවීම.)"
    ],
    "correctIndex": 0,
    "explanation": "The unaffected side is placed downward. (අාංශභාගය ඇත්තනම්, නි‍රෝගී පැත්තත ප ළට සිටින ‍සේ තබයි.)",
    "kind": "mcq",
    "sinhalaText": "අාංශභාගය (hemiplegia) ඇති පරිශීලක‍යකු‍ේ ආ ර ‍ේල් අතරතුර, කුමන පැත්තත ප ළට සිටින ‍සේ තබන්ඩ්‍න්ඩ්ද?"
  },
  {
    "id": "lesson-05-q029",
    "moduleId": "lesson-05",
    "number": 29,
    "question": "Before starting meal assistance, what do you check first?",
    "options": [
      "Check the user's physical condition. (ආ ර ලබා දීමට ‍පර ‍සේවාලාභියා‍ේ ශාරීරික තත්තත්තවය පරීක්ෂා කරයි.)",
      "Check the TV schedule only. (රූපවාහිනී වැඩසට න්ඩ් ‍ේලාව පමණක් පරීක්ෂා කිරීම.)",
      "Check how fast the caregiver can eat. (සත්තකාරකයාට ‍කාතරම් ‍ේග‍යන්ඩ් කෑ කිදැයි පරීක්ෂා කිරීම.)",
      "Skip checking anything. (කිසිවක් පරීක්ෂා ‍නාකර සිීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Check the user's physical condition. (ආ ර ලබා දීමට ‍පර ‍සේවාලාභියා‍ේ ශාරීරික තත්තත්තවය පරීක්ෂා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "ආ ර ලබා දීමට ස ය වීම ආරම්භ කිරීමට ‍පර, ඔබ පළමුව පරීක්ෂා කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q030",
    "moduleId": "lesson-05",
    "number": 30,
    "question": "Before providing meal assistance, what do you do to the user?",
    "options": [
      "Explain the purpose and content of what will be done and obtain consent. (සිදු කරන ‍ද‍යහි අරමුණ ස අන්ඩ්තේගතය පැ දිලි කර එකඟතාව ලබා ගනී.)",
      "Put food in their mouth without speaking. (කතා ‍නාකර කටට ආ ර දැමීම.)",
      "Take away their plate without explanation. (පැ දිලි කිරීමකින්ඩ් ‍තාරව පිඟාන ඉවත්ත කිරීම.)",
      "Ignore their preference. (ඔවුන්ඩ්‍ේ කැමැත්තත ‍නාසලකා රීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Explain the purpose and content of what will be done and obtain consent. (සිදු කරන ‍ද‍යහි අරමුණ ස අන්ඩ්තේගතය පැ දිලි කර එකඟතාව ලබා ගනී.)",
    "kind": "mcq",
    "sinhalaText": "ආ ර ලබා දී‍ම් ස ය ලබා දීමට ‍පර, ඔබ පරිශීලකයාට කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q031",
    "moduleId": "lesson-05",
    "number": 31,
    "question": "Where does the caregiver sit during meals?",
    "options": [
      "Sit on the user's dominant hand side, or diagonally in front of the unaffected side. (‍සේවාලාභියා‍ේ වැඩ කරන අත ඇති පැත්ත‍ත්ත ‍  නි‍රෝගීපැත්ත‍ත්ත ඇලයට ඉදිරි‍යන්ඩ් වාඩි ‍ේ.)",
      "Directly behind the user's back out of sight. (‍නා‍ප‍නන ‍ලස පරිශීලකයා‍ේ පිටුපසින්ඩ් ‍කළින්ඩ්ම.)",
      "Standing far across the room. (කාමර‍ේ ඈත ‍කළවරක සිට‍ගන.)",
      "Above the user's head level. (පරිශීලකයා‍ේ හි‍සේ මට්ටමට ඉ ළින්ඩ්.)"
    ],
    "correctIndex": 0,
    "explanation": "Sit on the user's dominant hand side, or diagonally in front of the unaffected side. (‍සේවාලාභියා‍ේ වැඩ කරන අත ඇති පැත්ත‍ත්ත ‍  නි‍රෝගී පැත්ත‍ත්ත ඇලයට ඉදිරි‍යන්ඩ් වාඩි ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "ආ ර ගන්ඩ්නා අතරතුර සත්තකාරකයා වාඩි වන්ඩ්‍න්ඩ් ‍කාතැනද?"
  },
  {
    "id": "lesson-05-q032",
    "moduleId": "lesson-05",
    "number": 32,
    "question": "At the beginning of a meal, what do you have them drink first?",
    "options": [
      "Have them drink moisture/liquids such as tea or soup first. (ආ ර ‍ේල ආරම්භ‍ේදී ‍ත්ත ‍  සූේ වැනි දියර වේග පානය කිරීමට සලසේවයි.)",
      "Have them swallow dry biscuits all at once. (වියළි බිසේකට් එකවර ගිලීමට සැලැසේවීම.)",
      "Give nothing to drink throughout. (කිසිදු දියරයක් පානය කිරීමට ‍නාදීම.)",
      "Give boiling hot liquid immediately. (උතුරන උණුසුම් දියරයක් ව ම ලබා දීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Have them drink moisture/liquids such as tea or soup first. (ආ ර ‍ේල ආරම්භ‍ේදී ‍ත්ත ‍  සූේ වැනිදියර වේග පානය කිරීමට සලසේවයි.)",
    "kind": "mcq",
    "sinhalaText": "ආ ර ‍ේල ආරම්භ‍ේදී, ඔවුන්ඩ්ට පළමුව පානය කිරීමට සලසේවන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q033",
    "moduleId": "lesson-05",
    "number": 33,
    "question": "When providing meal assistance, what do you match your pace with?",
    "options": [
      "Match the user's eating pace. (ආ ර ලබා දී‍ම්දී ‍සේවාලාභියා‍ේ ආ ර ගැනී‍ම් ‍ේගයට අනුගත ‍ේ.)",
      "Match the speed of a running marathon. (මැරතන්ඩ් ධාවනයක ‍ේගයට.)",
      "Eat your own lunch at the same time. (ඒ සමඟම ඔ‍බ්ම දිවා ආ රය ගැනීම.)",
      "Rush to finish in 2 minutes. (නිත්තතු 2කින්ඩ් අවසන්ඩ් කිරීමට ඉක්මන්ඩ් වීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Match the user's eating pace. (ආ ර ලබා දී‍ම්දී ‍සේවාලාභියා‍ේ ආ ර ගැනී‍ම් ‍ේගයට අනුගත ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "ආ ර ලබා දී‍ම්දී, ඔ‍බ් ‍ේගය ගළපා ගන්ඩ්‍න්ඩ් කුමකටද?"
  },
  {
    "id": "lesson-05-q034",
    "moduleId": "lesson-05",
    "number": 34,
    "question": "If there is paralysis, from where do you introduce food into the mouth?",
    "options": [
      "Introduce it from the corner of the mouth on the unaffected side. (අාංශ භාගයක් ඇත්තනම්, නි‍රෝගී පැත්ත‍ත්ත කට ‍කානින්ඩ් ආ ර ඇතුළත්ත කිරීමට වලාබ බලා ගනී.)",
      "Introduce it from the paralyzed/affected side corner. (දුේවල/අාංශභාග පැත්ත‍ත්ත කට ‍කානින්ඩ්.)",
      "Push it straight into the throat. (‍කළින්ඩ්ම උගුර තුළට තල්ලු කිරීම.)",
      "Place it on the nose. (නාසය මත තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Introduce it from the corner of the mouth on the unaffected side. (අාංශ භාගයක් ඇත්තනම්, නි‍රෝගී පැත්ත‍ත්ත කට ‍කානින්ඩ් ආ ර ඇතුළත්ත කිරීමට වලාබ බලා ගනී.)",
    "kind": "mcq",
    "sinhalaText": "අාංශභාගයක් ඇත්තනම්, කුමන සේථාන‍යන්ඩ් මුඛයට ආ ර ඇතුළු කරන්ඩ්‍න්ඩ්ද?"
  },
  {
    "id": "lesson-05-q035",
    "moduleId": "lesson-05",
    "number": 35,
    "question": "To prevent aspiration, what do you do during chewing?",
    "options": [
      "Avoid talking to them. (උගුරට යාම වැළැක්වීම සඳ  සැපී‍ම්දී කතා ‍නාකර සිී.)",
      "Ask difficult questions to make them speak while chewing. (සපින්ඩ් සිටින විට කතා කරවීමට අප සු ප්‍රශේන ඇසීම.)",
      "Make them laugh loudly. (ඔවුන්ඩ්ව ශබ්ද නඟා සිනසේසවීම.)",
      "Tilt their head back. (ඔවුන්ඩ්‍ේ හිස පිටුපසට ඇල කිරීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Avoid talking to them. (උගුරට යාම වැළැක්වීම සඳ  සැපී‍ම්දී කතා ‍නාකර සිී.)",
    "kind": "mcq",
    "sinhalaText": "උගුරට යාම (aspiration) වැළැක්වීම සඳ , සපින්ඩ් සිටින අතරතුර ඔබ කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q036",
    "moduleId": "lesson-05",
    "number": 36,
    "question": "When putting food into the mouth with a spoon, how do you pull it out?",
    "options": [
      "Pull out the spoon horizontally. (න්ඩ්‍දන්ඩ් ආ ර කටට ‍දන විට, න්ඩ්ද තිරසේ අතට ඉවතට ගනී)",
      "Pull it upward scraping the upper teeth/palate. (ඉ ළ දත්ත ‍  තල්ල සූරින්ඩ් ඉ ළට ඇදීම.)",
      "Jab it downward into the lower jaw. (ප ළ කු ඇටයට ප ළට ඇනීම.)",
      "Leave the spoon inside the mouth. (න්ඩ්ද මුඛය ඇතුළත තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Pull out the spoon horizontally. (න්ඩ්‍දන්ඩ් ආ ර කටට ‍දන විට, න්ඩ්ද තිරසේ අතට ඉවතට ගනී)",
    "kind": "mcq",
    "sinhalaText": "න්ඩ්දකින්ඩ් ආ ර මුඛයට ‍දන විට, න්ඩ්ද පිටතට ගන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q037",
    "moduleId": "lesson-05",
    "number": 37,
    "question": "After a meal, why do you check inside the mouth?",
    "options": [
      "To check if any food is left behind. (ආ ර‍යන්ඩ් පසු කට තුළ ආ ර ඉතිරි වී ඇත්තදැයි පරීක්ෂා කරයි.)",
      "To count how many teeth the user has left. (පරිශීලකයාට ඉතිරිව ඇති දත්ත ගණන ගණන්ඩ් කිරීමට.)",
      "Because eating never leaves food in the mouth. (ආ ර ගැනී‍මන්ඩ් කිසි වි‍ටක ක‍ට් ආ ර ඉතිරි ‍නාවන නිසා.)",
      "To put more food back in. (තවත්ත ආ ර නැවත ඇතුළට දැමීමට.)"
    ],
    "correctIndex": 0,
    "explanation": "To check if any food is left behind. (ආ ර‍යන්ඩ් පසු කට තුළ ආ ර ඉතිරි වී ඇත්තදැයි පරීක්ෂා කරයි.)Caregiver\nassisting seated older adult with spoon during meal on unaffected sideCaregiver assisting seated older adult with spoon during meal on\nunaffected side",
    "kind": "mcq",
    "sinhalaText": "ආ ර ‍ේලකින්ඩ් පසු, මුඛය ඇතුළත පරීක්ෂා කරන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q038",
    "moduleId": "lesson-05",
    "number": 38,
    "question": "Where is urine produced and where is it stored?",
    "options": [
      "Produced in the kidneys and stored in the bladder. (මුත්‍රා වකුගඩු තුළ නිෂේපාදනය වී මුත්‍රාශ‍ේ තැන්ඩ්පත්ත ‍ේ.)",
      "Produced in the stomach and stored in the lungs. (ආමාශ‍ේ නිෂේපාදනය වී ‍පන ළුවල තැන්ඩ්පත්ත ‍ේ.)",
      "Produced in the heart and stored in the ears. (දව‍ත්ත නිෂේපාදනය වී කන්ඩ්වල තැන්ඩ්පත්ත ‍ේ.)",
      "Produced in the liver and stored in the eyes. (අක්මා‍ේ නිෂේපාදනය වී ඇසේවල තැන්ඩ්පත්ත ‍ේ.)"
    ],
    "correctIndex": 0,
    "explanation": "Produced in the kidneys and stored in the bladder. (මුත්‍රා වකුගඩු තුළ නිෂේපාදනය වී මුත්‍රාශ‍ේ තැන්ඩ්පත්ත ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "මුත්‍රා නිෂේපාදනය වන්ඩ්‍න්ඩ් ‍කාතැනද ස තැන්ඩ්පත්ත වන්ඩ්‍න්ඩ් ‍කාතැනද?"
  },
  {
    "id": "lesson-05-q039",
    "moduleId": "lesson-05",
    "number": 39,
    "question": "How much urine accumulates in the bladder before feeling the urge to urinate?",
    "options": [
      "When about 200 to 300 ml accumulates, you feel the urge. (ලි ලීටේ 200ත්ත 300ත්ත අතර ප්‍රමාණයක් එකතු වූ විට මුත්‍රා කිරීමට අවශයතාව දැ‍න්ඩ්.)",
      "When 5 liters accumulates. (ලීටේ 5ක් එකතු වූ විට.)",
      "When 0.1 ml accumulates. (ලි ලීටේ 0.1ක් එකතු වූ විට.)",
      "No urge is ever felt. (කිසි වි‍ටක අවශයතාවක් ‍නාදැ‍න්ඩ්.)"
    ],
    "correctIndex": 0,
    "explanation": "When about 200 to 300 ml accumulates, you feel the urge. (ලි ලීටේ 200ත්ත 300ත්ත අතර ප්‍රමාණයක් එකතුවූ විට මුත්‍රා කිරීමට අවශයතාව දැ‍න්ඩ්.)",
    "kind": "mcq",
    "sinhalaText": "මුත්‍රා කිරීමට අවශයතාව දැනීමට ‍පර මුත්‍රාශ‍ේ මුත්‍රා ‍කාපමණ ප්‍රමාණයක් එකතු ‍ේද?"
  },
  {
    "id": "lesson-05-q040",
    "moduleId": "lesson-05",
    "number": 40,
    "question": "What role do the ureters play?",
    "options": [
      "They send urine produced in the kidneys to the bladder. (වකුගඩු මගින්ඩ් සදන මුත්‍රා මුත්‍රාශයට යැවීම මුත්‍රා නාල මගින්ඩ් සිදු කරයි.)",
      "They pump blood around the body. (ශරීරය වටා රුධිරය ‍පාම්ප කරයි.)",
      "They digest solid food. (ඝන ආ ර ජීේණය කරයි.)",
      "They produce saliva. (‍කළ නිපදවයි.)"
    ],
    "correctIndex": 0,
    "explanation": "They send urine produced in the kidneys to the bladder. (වකුගඩු මගින්ඩ් සදන මුත්‍රා මුත්‍රාශයට යැවීම මුත්‍රානාල මගින්ඩ් සිදු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "මුත්‍රා නාල (ureters) ඉටු කරන කාේයභාරය කුමක්ද?"
  },
  {
    "id": "lesson-05-q041",
    "moduleId": "lesson-05",
    "number": 41,
    "question": "What is absorbed from food in the small intestine? [PDF artifact: ξ]",
    "options": [
      "Nutrients and water are absorbed. (කුඩා අන්ඩ්ත්‍රය තුළ ආ රවල ‍පෝෂය පදාේථ ස ජලය ශරීරයට අව‍ශෝෂණය ‍ේ.)",
      "Only air and plastic are absorbed. (වාතය ස ලාසේටික් පමණක් අව‍ශෝෂණය ‍ේ.)",
      "Nothing is absorbed in the small intestine. (කුඩා අන්ඩ්ත්‍ර‍ේ කිසිවක් අව‍ශෝෂණය ‍නා‍ේ.)",
      "Only sound waves are absorbed. (ශබ්ද තරාංග පමණක් අව‍ශෝෂණය ‍ේ.)"
    ],
    "correctIndex": 0,
    "explanation": "Nutrients and water are absorbed. (කුඩා අන්ඩ්ත්‍රය තුළ ආ රවල ‍පෝෂය පදාේථ ස ජලය ශරීරයට අව‍ශෝෂණය‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "කුඩා අන්ඩ්ත්‍රය (small intestine) තුළ ආ රවලින්ඩ් අව‍ශෝෂණය වන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q042",
    "moduleId": "lesson-05",
    "number": 42,
    "question": "Where is stool mainly formed?",
    "options": [
      "Formed in the large intestine. (මල ප්‍රධාන වශ‍යන්ඩ් ම  අන්ඩ්ත්‍රය තුළ සෑ‍ේ.)",
      "Formed in the heart. (දව‍ත්ත සෑ‍ේ.)",
      "Formed in the thyroid gland. (තයි‍රායිඩ් ග්‍රන්ඩ්ි‍ේ සෑ‍ේ.)",
      "Formed in the eardrum. (කන්ඩ් ‍බර‍ේ සෑ‍ේ.)"
    ],
    "correctIndex": 0,
    "explanation": "Formed in the large intestine. (මල ප්‍රධාන වශ‍යන්ඩ් ම  අන්ඩ්ත්‍රය තුළ සෑ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "මල ප්‍රධාන වශ‍යන්ඩ් සෑ‍දන්ඩ්‍න්ඩ් ‍කාතැනද?"
  },
  {
    "id": "lesson-05-q043",
    "moduleId": "lesson-05",
    "number": 43,
    "question": "A 78-year-old user feels the urge to urinate, but has weak leg strength... What equipment is good to use?",
    "options": [
      "Use a portable toilet. (‍පෝටබල් ‍ටායිලට් (Portable toilet - අ‍ත්ත ‍ගන යා කි වැසිකිළියක්) භාවිතා කරයි.)",
      "Use a ladder to climb to the roof. (ව ලයට නැගීමට ඉණිමඟක් භාවිත කිරීම.)",
      "Do not provide any toilet option. (කිසිදු වැසිකිළි ප සුකමක් ලබා ‍නාදීම.)",
      "Make them walk 5 km to a distant park. (ඈත උදයානයකට කි‍ලෝමීටර 5ක් ඇවිේදවීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Use a portable toilet. (‍පෝටබල් ‍ටායිලට් (Portable toilet - අ‍ත්ත ‍ගන යා කි වැසිකිළියක්) භාවිතා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "වයස අවුරුදු 78ක පරිශීලක‍යකුට මුත්‍රා කිරීමට අවශයතාව දැ‍නන නමුත්ත පාදවල ශක්තිය අඩුය... භාවිත කිරීමට සුදුසු උපකරණය කුමක්ද?"
  },
  {
    "id": "lesson-05-q044",
    "moduleId": "lesson-05",
    "number": 44,
    "question": "An 82-year-old user is bedridden and not in good physical condition... In this case, what do you use?",
    "options": [
      "Use a urinal (nyoki) or bedpan (benki). (මුත්‍රා බඳුන්ඩ් ‍  මල බඳුන්ඩ් භාවිතා කරයි.)",
      "A bicycle. (බයිසිකලයක්.)",
      "A skipping rope. (පනින ලණුවක්.)",
      "A loud whistle. (ශබ්ද විසේල් එකක්.)"
    ],
    "correctIndex": 0,
    "explanation": "Use a urinal (nyoki) or bedpan (benki). (මුත්‍රා බඳුන්ඩ් ‍  මල බඳුන්ඩ් භාවිතා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "වයස අවුරුදු 82ක පරිශීලක‍යකු ඇ‍ඳේ රැඳී සිටින අතර ශාරීරික තත්තත්තවය ‍ ඳ නැත... ‍මවැනි අවසේථාවක ඔබ භාවිත කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q045",
    "moduleId": "lesson-05",
    "number": 45,
    "question": "When the user coughs or sneezes, urine leaks. What kind of urinary incontinence is this?",
    "options": [
      "Stress urinary incontinence. (ආතති මුත්‍රා අසාංයමතාව (Stress urinary incontinence) ‍ේ.)",
      "Total deafness. (සම්ූේණ බිහිරිභාවය.)",
      "Color blindness. (වේණ අන්ඩ්ධභාවය.)",
      "Motion sickness. (ගමන්ඩ් අප සුතාව.)"
    ],
    "correctIndex": 0,
    "explanation": "Stress urinary incontinence. (ආතති මුත්‍රා අසාංයමතාව (Stress urinary incontinence) ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා කහින විට ‍  කිවිසුම් යන විට මුත්‍රා කාන්ඩ්දු ‍ේ. ‍මය කුමන වේග‍ේ මුත්‍රා අසාංයමතාවක්ද (urinary incontinence)?"
  },
  {
    "id": "lesson-05-q046",
    "moduleId": "lesson-05",
    "number": 46,
    "question": "The user feels the urge to urinate, but cannot make it in time... What kind of incontinence is this?",
    "options": [
      "Urge urinary incontinence. (දිසි මුත්‍රා අසාංයමතාව (Urge urinary incontinence) ‍ේ.)",
      "Stress urinary incontinence. (ආතති මුත්‍රා අසාංයමතාව.)",
      "Reflex urinary incontinence. (පරාවේතක මුත්‍රා අසාංයමතාව.)",
      "Functional urinary incontinence. (ක්‍රියාකාරී මුත්‍රා අසාංයමතාව.)"
    ],
    "correctIndex": 0,
    "explanation": "Urge urinary incontinence. (දිසි මුත්‍රා අසාංයමතාව (Urge urinary incontinence) ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාට මුත්‍රා කිරීමට අවශයතාව දැනුණත්ත, නියිත ‍ේලාවට යා ‍නා ක... ‍මය කුමන වේග‍ේ අසාංයමතාවක්ද?"
  },
  {
    "id": "lesson-05-q047",
    "moduleId": "lesson-05",
    "number": 47,
    "question": "The user leaks urine without feeling the urge, and has a spinal cord disorder...",
    "options": [
      "Reflex urinary incontinence. (පරාවේතක මුත්‍රා අසාංයමතාව ‍ේ.)",
      "Urge urinary incontinence. (දිසි මුත්‍රා අසාංයමතාව.)",
      "Stress urinary incontinence. (ආතති මුත්‍රා අසාංයමතාව.)",
      "Normal continence. (සාමානය මුත්‍රා පාලනය.)"
    ],
    "correctIndex": 0,
    "explanation": "Reflex urinary incontinence. (පරාවේතක මුත්‍රා අසාංයමතාව ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "අවශයතාව ‍නාදැනී මුත්‍රා කාන්ඩ්දු වන අතර සුෂුම්නා ආබාධයක් (spinal cord disorder) ඇත..."
  },
  {
    "id": "lesson-05-q048",
    "moduleId": "lesson-05",
    "number": 48,
    "question": "Due to dementia, the user does not know the location of the toilet...",
    "options": [
      "Functional urinary incontinence. (ක්‍රියාකාරී මුත්‍රා අසාංයමතාව ‍ේ.)",
      "Reflex urinary incontinence. (පරාවේතක මුත්‍රා අසාංයමතාව.)",
      "Stress urinary incontinence. (ආතති මුත්‍රා අසාංයමතාව.)",
      "Urge urinary incontinence. (දිසි මුත්‍රා අසාංයමතාව.)"
    ],
    "correctIndex": 0,
    "explanation": "Functional urinary incontinence. (ක්‍රියාකාරී මුත්‍රා අසාංයමතාව ‍ේ.)",
    "kind": "mcq",
    "sinhalaText": "ඩි‍මන්ඩ්ශියා තත්තත්තවය නිසා, පරිශීලකයාට වැසිකිළිය පිහිටි සේථානය ‍නාදනී..."
  },
  {
    "id": "lesson-05-q049",
    "moduleId": "lesson-05",
    "number": 49,
    "question": "Recently, the frequency and amount of bowel movements have decreased, and constipation continues...",
    "options": [
      "Maintain fluid intake, consume dietary fiber, and exercise. (ප්‍රමාණවත්ත තරම් ජලය පානය කිරීම, ආ රමය තන්ඩ්තු ලබා ගැනීම ස වයායාම කිරීම සිදු කරයි.)",
      "Stop drinking all fluids and avoid fiber. (සියලුම දියර පානය කිරීම නවත්තවා තන්ඩ්තු වළක්වා ගැනීම.)",
      "Stay motionless in bed all day. (දවස පුරා ඇ‍ඳේ ‍සල‍වන්ඩ්‍න්ඩ් නැතිව සිීම.)",
      "Ignore constipation indefinitely. (මලබේධය දිගටම ‍නාසලකා රීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Maintain fluid intake, consume dietary fiber, and exercise. (ප්‍රමාණවත්ත තරම් ජලය පානය කිරීම, ආ රමය තන්ඩ්තු ලබා ගැනීම ස වයායාම කිරීම සිදු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "මෑතකදී මළප කිරී‍ම් වාර ගණන ස ප්‍රමාණය අඩු වී ඇති අතර, මලබේධය (constipation) පවතී..."
  },
  {
    "id": "lesson-05-q050",
    "moduleId": "lesson-05",
    "number": 50,
    "question": "The user has persistent diarrhea. What is the first thing to be careful about in care?",
    "options": [
      "Prevent dehydration. (විජලනය වැළැක්වීම මුලින්ඩ්ම සැලකිලිමත්ත විය යුතුය.)",
      "Encourage running marathons. (මැරතන්ඩ් දිවීමට දිරිමත්ත කිරීම.)",
      "Avoid giving fluids. (දියර ලබා ‍නාදීම.)",
      "Leave soiled bedding unchanged. (අපිරිසිදු ඇඳ ඇතිරිලි මාරු ‍නාකර තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Prevent dehydration. (විජලනය වැළැක්වීම මුලින්ඩ්ම සැලකිලිමත්ත විය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාට ‍නානවතින පාචනය (persistent diarrhea) ඇත. සත්තකාර‍ේදී පළමුව සැලකිලිමත්ත විය යුත්ත‍ත්ත කුමක් ගැනද?"
  },
  {
    "id": "lesson-05-q051",
    "moduleId": "lesson-05",
    "number": 51,
    "question": "For a user with left-sided hemiplegia, which hand do you have them hold the handrail with?",
    "options": [
      "Have them hold the handrail with the unaffected hand. (නි‍රෝගී අතින්ඩ් අත්තවැල (Handrail) අල්ලා ගැනීමට සලසේවයි.)",
      "Force them to hold it with the paralyzed hand only. (අාංශභාග අතින්ඩ් පමණක් අල්ලා ගැනීමට බල කිරීම.)",
      "Tell them not to hold any handrail. (කිසිදු අත්තවැලක් ‍නාඅල්ලන ‍ලස පැවසීම.)",
      "Blindfold them while walking. (ඇවිදින අතරතුර ඇසේ බැඳීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Have them hold the handrail with the unaffected hand. (නි‍රෝගී අතින්ඩ් අත්තවැල (Handrail) අල්ලා ගැනීමට සලසේවයි.)",
    "kind": "mcq",
    "sinhalaText": "වම් පැත්ත‍ත්ත අාංශභාගය ඇති පරිශීලක‍යකුට, ඔවුන්ඩ් අත්තවැල (handrail) අල්ලා ගත යුත්ත‍ත්ත කුමන අතින්ඩ්ද?"
  },
  {
    "id": "lesson-05-q052",
    "moduleId": "lesson-05",
    "number": 52,
    "question": "While the user is using the toilet, what does the caregiver do?",
    "options": [
      "Step out of the toilet and close the door. (වැසිකිළි‍යන්ඩ් පිටතට පැිණ ‍දාර වසා තබයි.)",
      "Stand directly in front of the user watching closely. (පරිශීලකයා ඉදිරි‍ේ ‍කළින්ඩ්ම සිට‍ගන දැඩිව බලා සිීම.)",
      "Leave the door wide open to the hallway. (‍දාර ‍කාරි‍ඩෝවට ‍ ඳින්ඩ් විවෘතව තැබීම.)",
      "Call visitors inside to watch. (අමුත්තතන්ඩ් ඇතුළට කැඳවීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Step out of the toilet and close the door. (වැසිකිළි‍යන්ඩ් පිටතට පැිණ ‍දාර වසා තබයි.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා වැසිකිළිය භාවිත කරන අතරතුර, සත්තකාරකයා කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q053",
    "moduleId": "lesson-05",
    "number": 53,
    "question": "When inserting a bedpan, where should the anal region be positioned? [PDF typo: ozb]",
    "options": [
      "Make sure it comes to the center of the bedpan. (ගුද ප්‍ර‍ේශය මල බඳු‍න්ඩ් මධයයට පැි‍ණන ‍සේ තබයි.)",
      "On the outside rim of the bedpan. (මල බඳු‍න්ඩ් පිටත දාරය මත.)",
      "Under the shoulders. (උරහිසේ යටින්ඩ්.)",
      "On top of the pillow. (‍කාට්ටය මත.)"
    ],
    "correctIndex": 0,
    "explanation": "Make sure it comes to the center of the bedpan. (ගුද ප්‍ර‍ේශය මල බඳු‍න්ඩ් මධයයට පැි‍ණන ‍සේ තබයි.)",
    "kind": "mcq",
    "sinhalaText": "මල බඳුනක් (bedpan) ඇතුළු කරන විට, ගුද ප්‍ර‍ේශය (anal region) සේථානගත කළ යුත්ත‍ත්ත ‍කාතැනටද?"
  },
  {
    "id": "lesson-05-q054",
    "moduleId": "lesson-05",
    "number": 54,
    "question": "After removing the bedpan, what do you check?",
    "options": [
      "Observe the condition of the skin. (ස‍ම් තත්තත්තවය නිරීක්ෂණය කරයි.)",
      "Check the room wallpaper. (කාමර‍ේ බිත්තති කඩදාසි පරීක්ෂා කිරීම.)",
      "Check the television volume. (රූපවාහිනී ශබ්දය පරීක්ෂා කිරීම.)",
      "Nothing is checked. (කිසිවක් පරීක්ෂා ‍නා‍ක‍ේ.)"
    ],
    "correctIndex": 0,
    "explanation": "Observe the condition of the skin. (ස‍ම් තත්තත්තවය නිරීක්ෂණය කරයි.)",
    "kind": "mcq",
    "sinhalaText": "මල බඳුන ඉවත්ත කිරී‍මන්ඩ් පසු, ඔබ පරීක්ෂා කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q055",
    "moduleId": "lesson-05",
    "number": 55,
    "question": "After assisting with a bedpan or urinal, what do you do?",
    "options": [
      "Check the user's physical condition and clean up/store the supplies. (‍සේවාලාභියා‍ේ ශාරීරික තත්තත්තවය නිරීක්ෂණය කර භාණ්ඩ පරිසේසින්ඩ්ඉවත්ත කර ‍සෝදා පිරිසිදු කරයි.)",
      "Leave the bedpan under the bed uncleaned. (මල බඳුන පිරිසිදු ‍නාකර ඇඳ යට තැබීම.)",
      "Walk away without washing hands. (අත්ත ‍නා‍සෝදා ඉවත්තව යාම.)",
      "Put dirty supplies on the dining table. (අපිරිසිදු ‍ේ කෑම ‍ම්සය මත තැබීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Check the user's physical condition and clean up/store the supplies. (‍සේවාලාභියා‍ේ ශාරීරික තත්තත්තවය නිරීක්ෂණය කර භාණ්ඩ පරිසේසින්ඩ් ඉවත්ත කර ‍සෝදා පිරිසිදු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "මල බඳුනක් ‍  මුත්‍රා බඳුනක් සඳ  ස ය වූ පසු, ඔබ කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q056",
    "moduleId": "lesson-05",
    "number": 56,
    "question": "When changing a diaper, in which direction do you wash a female's private parts?",
    "options": [
      "Wash from the urinary meatus toward the anus. (මුත්‍රා මාේග‍ේ සිට ගුදය ‍දසට ‍සෝදයි.)",
      "Wash from the anus toward the urinary meatus. (ගුද‍ේ සිට මුත්‍රා මාේගය ‍දසට ‍සේදීම.)",
      "Scrub back and forth repeatedly. (පිටුපසට ස ඉදිරියට නැවත නැවත තදින්ඩ් ඇතිල්ලීම.)",
      "Do not wash at all. (කිසි‍සේත්ත ‍නා‍සේදීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Wash from the urinary meatus toward the anus. (මුත්‍රා මාේග‍ේ සිට ගුදය ‍දසට ‍සෝදයි.)",
    "kind": "mcq",
    "sinhalaText": "ඩයපේ මාරු කරන විට, කාන්ඩ්තාවක‍ේ ර සේ ප්‍ර‍ේශ ‍සෝදන්ඩ්‍න්ඩ් කුමන දිශාවටද?"
  },
  {
    "id": "lesson-05-q057",
    "moduleId": "lesson-05",
    "number": 57,
    "question": "In grooming and dressing assistance, what is important to respect about the user?",
    "options": [
      "Respect their individuality, such as their lifestyle habits and preferences. (ජීවන රටාව ස අභිමතයන්ඩ් වැනි ‍පෞේගලික ලක්ෂණ ‍ගෞරවයට ලක් කරයි.)",
      "Force everyone to wear the exact same outfit regardless of preference. (කැමැත්තත ‍නාබලා සැමට එකම ඇඳුම අන්ඩ්දවීම.)",
      "Ignore their personal habits. (‍පෞේගලික පුරුදු ‍නාසලකා රීම.)",
      "Choose clothes without asking. (‍නාඅසා ඇඳුම් ‍තෝරා ගැනීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Respect their individuality, such as their lifestyle habits and preferences. (ජීවන රටාව ස අභිමතයන්ඩ්වැනි ‍පෞේගලික ලක්ෂණ ‍ගෞරවයට ලක් කරයි.)",
    "kind": "mcq",
    "sinhalaText": "‍පෞේගලික ‍පනුම ස ඇඳුම් ඇඳී‍ම් ස ‍ේදී, පරිශීලකයා සම්බන්ඩ්ධ‍යන්ඩ් ‍ගෞරව කිරීමට වැදගත්ත වන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q058",
    "moduleId": "lesson-05",
    "number": 58,
    "question": "When taking off the upper garments of a user with paralysis, which side do you take off first?",
    "options": [
      "Take off from the unaffected side first. (නි‍රෝගී පැත්ත‍තන්ඩ් ඇඳුම ගැලවීම ආරම්භ කරයි.)",
      "Take off from the affected/paralyzed side first. (දුේවල/අාංශභාග පැත්ත‍තන්ඩ් මුලින්ඩ් ගැලවීම.)",
      "Pull the garment over the head forcefully. (හිස ර  ඇඳුම තදින්ඩ් ඇදීම.)",
      "Tear the garment off. (ඇඳුම ඉරා දැමීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Take off from the unaffected side first. (නි‍රෝගී පැත්ත‍තන්ඩ් ඇඳුම ගැලවීම ආරම්භ කරයි.)",
    "kind": "mcq",
    "sinhalaText": "අාංශභාගය ඇති පරිශීලක‍යකු‍ේ ඉ ළ ඇඳුම් ගලවන විට, පළමුව ගලවන්ඩ්‍න්ඩ් කුමන පැත්ත‍තන්ඩ්ද?"
  },
  {
    "id": "lesson-05-q059",
    "moduleId": "lesson-05",
    "number": 59,
    "question": "When putting an upper garment on a user with paralysis, from which side do you put the sleeve through first?",
    "options": [
      "Put the sleeve through the affected side first. (දුේවල / අප සුතා ඇති පැත්ත‍තන්ඩ් අත බසේවා ඇඳුම අඳියි.)",
      "Put the sleeve through the unaffected side first. (නි‍රෝගී පැත්ත‍තන්ඩ් මුලින්ඩ් අත දැමීම.)",
      "Put both sleeves on backwards. (අත්ත බාහු ‍දකම පිටුපසට රවා ඇඳවීම.)",
      "Leave sleeves untied and hanging. (අත්ත බාහු එල්‍ලන්ඩ්නට රීම.)"
    ],
    "correctIndex": 0,
    "explanation": "Put the sleeve through the affected side first. (දුේවල / අප සුතා ඇති පැත්ත‍තන්ඩ් අත බසේවා ඇඳුම අඳියි.)",
    "kind": "mcq",
    "sinhalaText": "අාංශභාගය ඇති පරිශීලක‍යකුට ඉ ළ ඇඳුමක් අන්ඩ්දවන විට, පළමුව අත්ත බාහුව දමන්ඩ්‍න්ඩ් කුමන පැත්ත‍තන්ඩ්ද?"
  },
  {
    "id": "lesson-05-q060",
    "moduleId": "lesson-05",
    "number": 60,
    "question": "Why are care recipients prone to contracting infectious diseases?",
    "options": [
      "Because their resistance/immunity may be weak (ඔවුන්ඩ්‍ේ ප්‍රති‍රෝධක කියාව / ප්‍රතිශක්තිය දුේවල විය කි නිසා)",
      "Because they drink too much water (ඔවුන්ඩ් ඕනෑවට වඩා ජලය පානය කරන නිසා)",
      "Because they sleep too early (ඔවුන්ඩ් ඉතා ‍ේලාසනින්ඩ් නිදා ගන්ඩ්නා නිසා)",
      "Because they exercise every morning (ඔවුන්ඩ් සෑම උදෑසනකම වයායාම කරන නිසා)"
    ],
    "correctIndex": 0,
    "explanation": "Because their resistance/immunity may be weak (ඔවුන්ඩ්‍ේ ප්‍රති‍රෝධක කියාව දුේවල විය කි නිසා)",
    "kind": "mcq",
    "sinhalaText": "භාවිතා කරන්ඩ්නන්ඩ්‍ේ (care recipients) ප්‍රති‍රෝධක කියාව දුේවල විය කි නිසා ආසාදන ‍රෝග වලට ප සු‍වන්ඩ් ‍ගාදුරු වන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q061",
    "moduleId": "lesson-05",
    "number": 61,
    "question": "Why do infectious diseases spread easily in care facilities?",
    "options": [
      "Because windows are never opened (ජ‍නල් කිසි වි‍ටකත්ත විවෘත ‍නාකරන නිසා)",
      "Because many people live together (‍බා‍  ‍දනා එකට ජීවත්ත වන නිසා)",
      "Because rooms are painted white (කාමර සුදු පැ ‍යන්ඩ් වේණ ගන්ඩ්වා ඇති නිසා)",
      "Because meals are served warm (ආ ර උණුසුම්ව පිළිගන්ඩ්වන නිසා)"
    ],
    "correctIndex": 1,
    "explanation": "Because many people live together (‍බා‍  ‍දනා එකට ජීවත්ත වන නිසා)",
    "kind": "mcq",
    "sinhalaText": "සත්තකාර මධයසේථානවල (care facilities) ‍බෝවන ‍රෝග ප සු‍වන්ඩ් පැති‍රන්ඩ්‍න්ඩ් ඇයි?"
  },
  {
    "id": "lesson-05-q062",
    "moduleId": "lesson-05",
    "number": 62,
    "question": "What kinds of things are pathogens?",
    "options": [
      "Vitamins, minerals, and proteins (විටින්ඩ්, ඛනිජ ලවණ ස ‍ප්‍රෝීන්ඩ්)",
      "Viruses, bacteria, fungi, parasites, etc. (වවරසේ, බැක්ීරියා, දිලීර ස පර‍පෝිතයන්ඩ් ආදිය)",
      "Masks, gloves, and vinyl aprons (මුඛ ආවරණ, අත්තවැසුම් ස වයිනයිල් ඒප්‍රන්ඩ්)",
      "Paper towels and liquid soap (කඩදාසි තුවා ස සබන්ඩ් දියර)"
    ],
    "correctIndex": 1,
    "explanation": "Viruses, bacteria, fungi, parasites, etc. (වවරසේ, බැක්ීරියා, දිලීර ස පර‍පෝිතයන්ඩ් ආදිය)",
    "kind": "mcq",
    "sinhalaText": "‍රෝගකාරක (pathogens) යනු ‍මානවාද?"
  },
  {
    "id": "lesson-05-q063",
    "moduleId": "lesson-05",
    "number": 63,
    "question": "What do you do when a care recipient has a fever, diarrhea, vomiting, etc.?",
    "options": [
      "Wait three days before telling anyone (කිසි‍වකුට ‍නාකියා දින තුනක් බලා සිීම)",
      "Give them cold water and ask them to walk (සීතල ජලය ලබා දී ඇවිදින ‍ලස පැවසීම)",
      "Report to medical staff (වවදය කාේය මණ්ඩලයට වාේතා කිරීම)",
      "Lock the door of their room (ඔවුන්ඩ්‍ේ කාමර‍ේ ‍දාර අගුළු දැමීම)"
    ],
    "correctIndex": 2,
    "explanation": "Report to medical staff (වවදය කාේය මණ්ඩලයට වාේතා කිරීම)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණය ලබන්ඩ්‍නකුට උණ, පාචනය ‍  වමනය වැනි ලක්ෂණ ඇති විට ඔබ කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-05-q064",
    "moduleId": "lesson-05",
    "number": 64,
    "question": "What are the three elements of infection?",
    "options": [
      "Source of infection, route of transmission, and susceptible host (ආසාදන මූලාශ්‍රය, ආසාදන මාේගය ස ධාරකයා)",
      "Doctor, nurse, and care worker (වවදයවරයා, ‍ දිය ස සත්තකාර ‍සේවකයා)",
      "Fever, cough, and headache (උණ, කැසේස ස හිසරදය)",
      "Soap, water, and paper towel (සබන්ඩ්, ජලය ස කඩදාසි තුවා)"
    ],
    "correctIndex": 0,
    "explanation": "Source of infection, route of transmission, and susceptible host (ආසාදන මූලාශ්‍රය, ආසාදන මාේගය ස ධාරකයා)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන‍ේ කරුණු තුන (three elements of infection) ‍මානවාද?"
  },
  {
    "id": "lesson-05-q065",
    "moduleId": "lesson-05",
    "number": 65,
    "question": "What is the basic method for preventing infectious diseases?",
    "options": [
      "Stopping all outdoor activities (සියලුම එළිම න්ඩ් ක්‍රියාකාරකම් නැවැත්තවීම)",
      "Breaking the chain of infection (ආසාදන දාමය බිඳ දැමීම)",
      "Sharing eating utensils (ආ ර ගන්ඩ්නා භාජන ‍බදා ගැනීම)",
      "Avoiding handwashing (අත්ත ‍සේදී‍මන්ඩ් වැළකී සිීම)"
    ],
    "correctIndex": 1,
    "explanation": "Breaking the chain of infection (ආසාදන දාමය බිඳ දැමීම)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන වැළැක්වී‍ම් මූලික ක්‍රමය කුමක්ද?"
  },
  {
    "id": "lesson-05-q066",
    "moduleId": "lesson-05",
    "number": 66,
    "question": "What is the countermeasure against the source of infection?",
    "options": [
      "Improve resistance/immunity (ප්‍රති‍රෝධක කියාව වැඩි කිරීම)",
      "Eliminate the source of infection (ආසාදන මූලාශ්‍රය ඉවත්ත කිරීම)",
      "Turn off the air conditioner (වායු සමීකරණය නිවා දැමීම)",
      "Keep dirty linen on the floor (අපිරිසිදු ‍රදි බිම තැබීම)"
    ],
    "correctIndex": 1,
    "explanation": "Eliminate the source of infection (ආසාදන මූලාශ්‍රය ඉවත්ත කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මූලාශ්‍රයට (source of infection) එ‍රහි ප්‍රතිකේමය කුමක්ද?"
  },
  {
    "id": "lesson-05-q067",
    "moduleId": "lesson-05",
    "number": 67,
    "question": "What is the countermeasure against the route of transmission?",
    "options": [
      "Block the route of transmission (ආසාදන මාේගය අවහිර කිරීම)",
      "Reduce sleep hours (නිදා ගන්ඩ්නා පැය ගණන අඩු කිරීම)",
      "Reuse disposable gloves (ඉවත දැිය කි අත්තවැසුම් නැවත භාවිත කිරීම)",
      "Skip breakfast (උදෑසන ආ රය මඟ රීම)"
    ],
    "correctIndex": 0,
    "explanation": "Block the route of transmission (ආසාදන මාේගය අවහිර කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මාේගයට (route of transmission) එ‍රහි ප්‍රතිකේමය කුමක්ද?"
  },
  {
    "id": "lesson-05-q068",
    "moduleId": "lesson-05",
    "number": 68,
    "question": "What is the countermeasure against the host?",
    "options": [
      "Eliminate the source of infection (ආසාදන මූලාශ්‍රය ඉවත්ත කිරීම)",
      "Improve resistance/immunity (ධාරකයා‍ේ ප්‍රති‍රෝධක කියාව වැඩි කිරීම)",
      "Keep the user isolated permanently (පරිශීලකයා සේිරවම හුදකලා කර තැබීම)",
      "Avoid drinking fluids (දියර පානය කිරී‍මන්ඩ් වැළකී සිීම)"
    ],
    "correctIndex": 1,
    "explanation": "Improve resistance/immunity (ධාරකයා‍ේ ප්‍රති‍රෝධක කියාව වැඩි කිරීම)",
    "kind": "mcq",
    "sinhalaText": "ධාරකයාට (host) අදාළ ප්‍රතිකේමය කුමක්ද?"
  },
  {
    "id": "lesson-05-q069",
    "moduleId": "lesson-05",
    "number": 69,
    "question": "What is an example of droplet transmission?",
    "options": [
      "Tuberculosis (ක්ෂය ‍රෝගය)",
      "Measles (සරම්ප)",
      "Influenza, etc. (ඉන්ඩ්ේලු‍වන්ඩ්සා ආදිය)",
      "Scabies (‍ රි)"
    ],
    "correctIndex": 2,
    "explanation": "Influenza, etc. (ඉන්ඩ්ේලු‍වන්ඩ්සා ආදිය)",
    "kind": "mcq",
    "sinhalaText": "බිඳිති ආසාදනයකට (droplet transmission) උදා රණයක් කුමක්ද?"
  },
  {
    "id": "lesson-05-q070",
    "moduleId": "lesson-05",
    "number": 70,
    "question": "What is an example of airborne transmission?",
    "options": [
      "Tuberculosis, measles, etc. (ක්ෂය ‍රෝගය ස සරම්ප ආදිය)",
      "Food poisoning (ආ ර විෂ වීම)",
      "Athlete's foot (දිලීර ආසාදනය)",
      "E-coli (ඊ-‍කෝලි)"
    ],
    "correctIndex": 0,
    "explanation": "Tuberculosis, measles, etc. (ක්ෂය ‍රෝගය ස සරම්ප ආදිය)",
    "kind": "mcq",
    "sinhalaText": "වායු මාේග ආසාදනයකට (airborne transmission) උදා රණ ‍මානවාද?"
  },
  {
    "id": "lesson-05-q071",
    "moduleId": "lesson-05",
    "number": 71,
    "question": "How does contact transmission occur?",
    "options": [
      "By looking at an infected person (ආසාදිත පුේගල‍යකු ‍දස බැලී‍මන්ඩ්)",
      "It occurs by touching infected people or objects (ආසාදිත පුේගල‍යකු ‍  වසේතුවක් සේපේශ කිරී‍මන්ඩ් සිදු‍ේ)",
      "By eating fresh fruit (නැවුම් පලතුරු අනුභව කිරී‍මන්ඩ්)",
      "By washing hands with soap (සබන්ඩ් ‍යාදා අත්ත ‍සේදී‍මන්ඩ්)"
    ],
    "correctIndex": 1,
    "explanation": "It occurs by touching infected people or objects (ආසාදිත පුේගල‍යකු ‍  වසේතුවක් සේපේශ කිරී‍මන්ඩ් සිදු‍ේ)",
    "kind": "mcq",
    "sinhalaText": "සේපේශ ආසාදනය (contact transmission) සිදුවන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q072",
    "moduleId": "lesson-05",
    "number": 72,
    "question": "What things become sources of infection?",
    "options": [
      "Blood, saliva, nasal mucus, excretions, and others (රුධිරය, ‍කළ, නාස‍යන්ඩ් පිටවන දියර ස බැ ර කරන ද්‍රවය ආදිය)",
      "Clean dishes and fresh water (පිරිසිදු පිඟන්ඩ් ස පිරිසිදු ජලය)",
      "Unused paper towels (භාවිත ‍නාකළ කඩදාසි තුවා)",
      "Sterilized medical tools (ජීවාණු රණය කළ වවදය උපකරණ)"
    ],
    "correctIndex": 0,
    "explanation": "Blood, saliva, nasal mucus, excretions, and others (රුධිරය, ‍කළ, නාස‍යන්ඩ් පිටවන දියර ස බැ ර කරන ද්‍රවය ආදිය)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන මූලාශ්‍ර (sources of infection) බවට පත්තවන ‍ේවල් ‍මානවාද?"
  },
  {
    "id": "lesson-05-q073",
    "moduleId": "lesson-05",
    "number": 73,
    "question": "What kinds of things are excretions?",
    "options": [
      "Tears and sweat (කඳුළු ස ද ඩිය)",
      "Vomit, urine, stool, etc. (වමනය, මුත්‍රා ස මල ආදිය)",
      "Hair and skin (හිස‍කසේ ස සම)",
      "Soap and sanitizer (සබන්ඩ් ස සැනිටයිසේ)"
    ],
    "correctIndex": 1,
    "explanation": "Vomit, urine, stool, etc. (වමනය, මුත්‍රා ස මල ආදිය)",
    "kind": "mcq",
    "sinhalaText": "බැ ර කරන ද්‍රවය (excretions) යනු ‍මානවාද?"
  },
  {
    "id": "lesson-05-q074",
    "moduleId": "lesson-05",
    "number": 74,
    "question": "To prevent infection, how do you handle blood and body fluids?",
    "options": [
      "Handle them with bare hands (හිසේ අතින්ඩ් සිරවීම)",
      "Handle them as things that have the possibility of causing infection (ආසාදනය විය කි ද්‍රවය ‍ලස සලකා සිරවිය යුතුය)",
      "Wipe them with a dry cloth and keep it in your pocket (වියළි ‍රේදකින්ඩ් පිස සාක්කු‍ේ තබා ගැනීම)",
      "Ignore small spills (කුඩා දියර බිාංදු ‍නාසලකා රීම)"
    ],
    "correctIndex": 1,
    "explanation": "Handle them as things that have the possibility of causing infection (ආසාදනය විය කි ද්‍රවය ‍ලස සලකාැසිරවිය යුතුය)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන වැළැක්වීම සඳ , ඔබ රුධිරය ස ශරීර දියර සුරුවන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q075",
    "moduleId": "lesson-05",
    "number": 75,
    "question": "When touching blood or excretions, what do you do?",
    "options": [
      "Always wear gloves (අනිවාේය‍යන්ඩ් අත්තවැසුම් පැළඳිය යුතුය)",
      "Wash hands only before touching them (සේපේශ කිරීමට ‍පර පමණක් අත්ත ‍සේදීම)",
      "Use a handkerchief (‍ල්න්ඩ්සුවක් භාවිත කිරීම)",
      "Wear cotton gloves (කපු අත්තවැසුම් පැළඳීම)"
    ],
    "correctIndex": 0,
    "explanation": "Always wear gloves (අනිවාේය‍යන්ඩ් අත්තවැසුම් පැළඳිය යුතුය)",
    "kind": "mcq",
    "sinhalaText": "රුධිරය ‍  බැ ර කරන ද්‍රවය සේපේශ කරන විට ඔබ කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-05-q076",
    "moduleId": "lesson-05",
    "number": 76,
    "question": "What protective equipment is used in care work?",
    "options": [
      "Gloves, vinyl aprons, masks, etc. (අත්තවැසුම්, Vinyl apron ස Mask ආදිය)",
      "Helmets and safety goggles (‍ ල්මට් ස ආරක්ිත කණ්ණාඩි)",
      "Wool sweaters and scarves (‍ලාම් සේ‍වටේ ස සේකා්ේ)",
      "Leather boots and belts (සම් සපත්තතු ස පටි)"
    ],
    "correctIndex": 0,
    "explanation": "Gloves, vinyl aprons, masks, etc. (අත්තවැසුම්, Vinyl apron ස Mask ආදිය)",
    "kind": "mcq",
    "sinhalaText": "රැකවරණ‍ේදී භාවිතා කරන ආරක්ෂක උපකරණ (protective equipment) ‍මානවාද?"
  },
  {
    "id": "lesson-05-q077",
    "moduleId": "lesson-05",
    "number": 77,
    "question": "When do you replace disposable gloves?",
    "options": [
      "Once every week (සතියකට වරක්)",
      "Replace them for each care act (එක් එක් රැකවරණ ක්‍රියාවකින්ඩ් පසු මාරු කළ යුතුය)",
      "At the end of the month (මාසය අවසාන‍ේදී)",
      "Only when they change color (ඒවා‍ේ වේණය ‍වනසේ වූ විට පමණක්)"
    ],
    "correctIndex": 1,
    "explanation": "Replace them for each care act (එක් එක් රැකවරණ ක්‍රියාවකින්ඩ් පසු මාරු කළ යුතුය)",
    "kind": "mcq",
    "sinhalaText": "ඉවත දැිය කි අත්තවැසුම් (disposable gloves) මාරු කළ යුත්ත‍ත්ත කවදාද?"
  },
  {
    "id": "lesson-05-q078",
    "moduleId": "lesson-05",
    "number": 78,
    "question": "When removing disposable gloves, how do you handle the soiled side?",
    "options": [
      "Keep the dirty side facing outward (අපිරිසිදු පැත්තත පිටතට සිටින ‍සේ තබා ගැනීම)",
      "Remove them so that the inside becomes the outside (turn them inside out) (අපිරිසිදු පැත්තත ඇතුළට වන පරිදි ඉවත්ත කරයි)",
      "Rinse them in water while still wearing them (පැළඳ සිටියදීම ජල‍යන්ඩ් ‍සෝදා රීම)",
      "Pull them off with your teeth (දත්තවලින්ඩ් ඇද ගැලවීම)"
    ],
    "correctIndex": 1,
    "explanation": "Remove them so that the inside becomes the outside (turn them inside out) (අපිරිසිදු පැත්තත ඇතුළට වන පරිදි ඉවත්ත කරයි)",
    "kind": "mcq",
    "sinhalaText": "අත්තවැසුම් ඉවත්ත කිරී‍ම්දී අපිරිසිදු පැත්තත (soiled side) සුරුවන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q079",
    "moduleId": "lesson-05",
    "number": 79,
    "question": "What do you use when washing your hands?",
    "options": [
      "Water stored in a bucket (බාල්දියක ගබඩා කර ඇති ජලය)",
      "Running water and liquid soap (ගලා යන ජලය ස සබන්ඩ් දියර)",
      "Cold water only (සීතල ජලය පමණක්)",
      "Dry tissue paper (වියළි ටිෂූ කඩදාසි)"
    ],
    "correctIndex": 1,
    "explanation": "Running water and liquid soap (ගලා යන ජලය ස සබන්ඩ් දියර)",
    "kind": "mcq",
    "sinhalaText": "අත්ත ‍සේදී‍ම්දී ඔබ භාවිතා කරන්ඩ්‍න්ඩ් කුමක්ද?"
  },
  {
    "id": "lesson-05-q080",
    "moduleId": "lesson-05",
    "number": 80,
    "question": "What do you remove before washing your hands?",
    "options": [
      "Shoes and socks (සපත්තතු ස ‍ම්සේ)",
      "Rings and wristwatches (මුදු ස අත්ත ඔර‍ලෝසු)",
      "Glasses (කණ්ණාඩි)",
      "Face mask (මුඛ ආවරණය)"
    ],
    "correctIndex": 1,
    "explanation": "Rings and wristwatches (මුදු ස අත්ත ඔර‍ලෝසු)",
    "kind": "mcq",
    "sinhalaText": "අත්ත ‍සේදීමට ‍පර ඔබ ඉවත්ත කරන්ඩ්‍න්ඩ් ‍මානවාද?"
  },
  {
    "id": "lesson-05-q081",
    "moduleId": "lesson-05",
    "number": 81,
    "question": "Where are the places that easily get dirty during handwashing?",
    "options": [
      "Fingertips, between fingers, back of the hand, base of the thumb, wrists, etc. (ඇඟිලි තුඩු, ඇඟිලි අතර, අත්ත පිටුපස, ම පට ඇඟිල්‍ල් මුල ස මැණික් කටුව ආදිය)",
      "Shoulders and neck (උරහිසේ ස ‍බල්ල)",
      "Upper arms only (උඩු බාහු පමණි)",
      "Center of the palm only (අත්ත‍ල් මැද පමණි)"
    ],
    "correctIndex": 0,
    "explanation": "Fingertips, between fingers, back of the hand, base of the thumb, wrists, etc. (ඇඟිලි තුඩු, ඇඟිලි අතර,\nඅත්ත පිටුපස, ම පට ඇඟිල්‍ල් මුල ස මැණික් කටුව ආදිය)",
    "kind": "mcq",
    "sinhalaText": "අත්ත ‍සේදී‍ම්දී ප සු‍වන්ඩ් අපිරිසිදු වන (‍සේදීම මඟ ‍රන) සේථාන ‍මානවාද?"
  },
  {
    "id": "lesson-05-q082",
    "moduleId": "lesson-05",
    "number": 82,
    "question": "During handwashing, what do you do with the spaces between your fingers?",
    "options": [
      "Keep fingers pressed tightly together (ඇඟිලි තදින්ඩ් එකට තබා ගන්ඩ්න)",
      "Interlace your fingers and wash the spaces between them thoroughly (ඇඟිලි එකි‍නකට සම්බන්ඩ්ධ කර ඇඟිලි අතර ‍ ඳින්ඩ් ‍සේදිය යුතුය)",
      "Rinse only the fingertips (ඇඟිලි තුඩු පමණක් ‍සෝදා රින්ඩ්න)",
      "Wipe with a shared towel (‍පාදු තුවායකින්ඩ් පිස දමන්ඩ්න)"
    ],
    "correctIndex": 1,
    "explanation": "Interlace your fingers and wash the spaces between them thoroughly (ඇඟිලි එකි‍නකට සම්බන්ඩ්ධ කර ඇඟිලි අතර ‍ ඳින්ඩ් ‍සේදිය යුතුය)",
    "kind": "mcq",
    "sinhalaText": "අත්ත ‍සේදී‍ම්දී, ඇඟිලි අතර (spaces between your fingers) ‍සෝදන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-05-q083",
    "moduleId": "lesson-05",
    "number": 83,
    "question": "After handwashing, how do you dry your hands?",
    "options": [
      "Wipe them on your uniform (ඔ‍බ් නිල ඇඳු‍ම් පිස දමන්ඩ්න)",
      "Use a shared cloth towel (‍පාදු ‍රදි තුවායක් භාවිත කරන්ඩ්න)",
      "Wipe off the water with a paper towel and dry them well (Paper towel එකකින්ඩ් ජලය පිස දමා ‍ ඳින්ඩ් වියළාගත යුතුය)",
      "Shake water off onto the floor (ජලය බිමට ගසා දමන්ඩ්න)"
    ],
    "correctIndex": 2,
    "explanation": "Wipe off the water with a paper towel and dry them well (Paper towel එකකින්ඩ් ජලය පිස දමා ‍ ඳින්ඩ්වියළාගත යුතුය)",
    "kind": "mcq",
    "sinhalaText": "අත්ත ‍සේදී‍මන්ඩ් පසු, ඔ‍බ් අත්ත වියළා ගන්ඩ්‍න්ඩ් ‍ක‍සේද?"
  },
  {
    "id": "lesson-06-q001",
    "moduleId": "lesson-06",
    "number": 1,
    "question": "What is communication?",
    "options": [
      "Exchanging feelings and ideas with each other. (එකිනෙකාගේ හැඟීම් සහ අදහස් එකිනෙකාට සන්නිවේදනය කර බෙදා ගැනීමයි.)",
      "Writing medical prescriptions only (වෛද්‍ය බෙහෙත් වට්ටෝරු පමණක් ලිවීම)",
      "Giving orders without listening (සවන් නොදී අණ දීම)",
      "Keeping silent during care (සත්කාර කරන අතරතුර නිහඬව සිටීම)"
    ],
    "correctIndex": 0,
    "explanation": "Exchanging feelings and ideas with each other. (එකිනෙකාගේ හැඟීම් සහ අදහස් එකිනෙකාට සන්නිවේදනය කර බෙදා ගැනීමයි.)",
    "kind": "mcq",
    "sinhalaText": "සන්නිවේදනය යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q002",
    "moduleId": "lesson-06",
    "number": 2,
    "question": "Why is it necessary to acquire communication skills?",
    "options": [
      "To finish work as quickly as possible (හැකි ඉක්මනින් වැඩ අවසන් කිරීමට)",
      "Because it is a way to build a trusting relationship with the other person. (අනෙක් පුද්ගලයා සමඟ විශ්වාසදායක සම්බන්ධතාවයක් ගොඩනගාගැනීමේ ක්‍රමයක් වන නිසාය.)",
      "To avoid talking to care recipients (සත්කාර ලෙන්නනන්න සමඟ කතා කිරීවමන්න වැළකීමට)",
      "To replace all care records (සියලුම සත්කාර වාර්තා වෙනුවට)"
    ],
    "correctIndex": 1,
    "explanation": "Because it is a way to build a trusting relationship with the other person. (අනෙක් පුද්ගලයා සමඟ විශ්වාසදායක සම්බන්ධතාවයක් ගොඩනගා ගැනීමේ ක්‍රමයක් වන නිසාය.)",
    "kind": "mcq",
    "sinhalaText": "සන්නිවේදන කුසලතාවය ප්‍රගුණ කිරීම අවශ්‍ය වන්නේ ඇයි?"
  },
  {
    "id": "lesson-06-q003",
    "moduleId": "lesson-06",
    "number": 3,
    "question": "What are the methods for transmitting information?",
    "options": [
      "Verbal communication and non-verbal communication. (භාෂාමය සන්නිවේදනය සහ වාචික නොවන සන්නිවේදනය ඇත.)",
      "Phone calls and emails only (දුරකථන ඇමතුම් සහ ඊමේල් පමණි)",
      "Whispering and shouting (වකාඳුරමින්න කතා කිරීම සහ කෑගැසීම)",
      "Eye contact and handshakes only (ඇස් සම්බන්ධතාව සහ අතට අත දීම පමණි)"
    ],
    "correctIndex": 0,
    "explanation": "Verbal communication and non-verbal communication. (භාෂාමය සන්නිවේදනය සහ වාචික නොවන සන්නිවේදනය ඇත.)",
    "kind": "mcq",
    "sinhalaText": "තොරතුරු සම්ප්‍රේෂණය කිරීමේ ක්‍රම මොනවාද?"
  },
  {
    "id": "lesson-06-q004",
    "moduleId": "lesson-06",
    "number": 4,
    "question": "What is included in verbal communication?",
    "options": [
      "Speech, sign language, and writing. (කථනය, සංඥා භාෂාව සහ අකුරු ලිවීම වැනි දේ ඇත.)",
      "Crossing arms and leaning back (අත් බැඳගැනීම සහ පිටුපසට බර දීම)",
      "Sighing and yawning (සුසුම් වහළීම සහ ඈනුම් ඇරීම)",
      "Frowning and looking away (නළල රැළි කිරීම සහ වෙනතක ැලීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speech, sign language, and writing. (කථනය, සංඥා භාෂාව සහ අකුරු ලිවීම වැනි දේ ඇත.)",
    "kind": "mcq",
    "sinhalaText": "භාෂාමය සන්නිවේදනයට අයත් වන්නේ මොනවාද?"
  },
  {
    "id": "lesson-06-q005",
    "moduleId": "lesson-06",
    "number": 5,
    "question": "What is included in non-verbal communication?",
    "options": [
      "Spoken sentences and text messages (කතා කරන වාක්‍ය සහ කෙටි පණිවිඩ)",
      "Body language, gestures, facial expressions, etc. (ශරීර භාෂාව, අත් චලනය, මුහුණේ ප්‍රකාශය සහ අභිනයන් වැනි දේ ඇත.)",
      "Written care plans and reports (ලිඛිත සත්කාර සැලසුම් සහ වාර්තා)",
      "Reading aloud from a book (වපාතකින්න ශ්‍බ්ද නඟා කියවීම)"
    ],
    "correctIndex": 1,
    "explanation": "Body language, gestures, facial expressions, etc. (ශරීර භාෂාව, අත් චලනය, මුහුණේ ප්‍රකාශය සහ අභිනයන්වැනි දේ ඇත.)",
    "kind": "mcq",
    "sinhalaText": "වාචික නොවන සන්නිවේදනයට අයත් වන්නේ මොනවාද?"
  },
  {
    "id": "lesson-06-q006",
    "moduleId": "lesson-06",
    "number": 6,
    "question": "What is active listening (Keichou)?",
    "options": [
      "Listening attentively and accurately with an attitude of interest. (උනන්දුවෙන් සවන් දීමේ ආකල්පයක් ඇතිව, අවධානයෙන් සහ නිවැරදිව කතාවට සවන් දීමයි.)",
      "Interrupting to correct grammar immediately (ව්‍යාකරණ වහාම නිවැරදි කිරීමට කතාව මැදින් පැනීම)",
      "Checking your phone while someone speaks (යවමකු කතා කරන විට දුරකථනය පරීක්ෂා කිරීම)",
      "Changing the topic right away (එවිටම මාතෘකාව වෙනස් කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Listening attentively and accurately with an attitude of interest. (උනන්දුවෙන් සවන් දීමේ ආකල්පයක්ඇතිව, අවධානයෙන් සහ නිවැරදිව කතාවට සවන් දීමයි.)",
    "kind": "mcq",
    "sinhalaText": "සක්‍රීයව සවන් දීම (කෙයිචෝ) යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q007",
    "moduleId": "lesson-06",
    "number": 7,
    "question": "What is empathy (Kyoukan)?",
    "options": [
      "Feeling the other person's thoughts and emotions as your own. (අනෙක් පුද්ගලයාගේ අදහස් සහ හැඟීම් තමන්ටත් එම හැඟීම් ලෙස දැනීමයි.)",
      "Ignoring how the other person feels (අනෙක් පුද්ගලයාට දැවනන ආකාරය නොසලකා හැරීම)",
      "Judging their behavior strictly (ඔවුන්වේ හැසිරීම දැඩි ලෙස විශ්‍්චය කිරීම)",
      "Giving a one-word answer only (එක් වචනයක පිළිතුරක් පමණක් ලබා දීම)"
    ],
    "correctIndex": 0,
    "explanation": "Feeling the other person's thoughts and emotions as your own. (අනෙක් පුද්ගලයාගේ අදහස් සහ හැඟීම්තමන්ටත් එම හැඟීම් ලෙස දැනීමයි.)",
    "kind": "mcq",
    "sinhalaText": "සානුකම්පාව / අනුකම්පාව (කියෝකාන්න) යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q008",
    "moduleId": "lesson-06",
    "number": 8,
    "question": "What is acceptance (Juyou)?",
    "options": [
      "Accepting the other person's feelings and thoughts without rejecting or judging them. (අනෙක් පුද්ගලයාගේ හැඟීම් සහ අදහස් ප්‍රතික්වෂ්ප කිරීමක් හෝ විශ්‍්චය කිරීමක් නොකර පිළිගැනීමයි.)",
      "Arguing with the user whenever they disagree (පරිශීලකයා එකඟ නොවන සෑම විටම ඔවුන් සමඟ තර්ක කිරීම)",
      "Forcing the user to change their opinion (පරිශීලකයාට තම මතය වෙනස් කිරීමට බල කිරීම)",
      "Writing down opinions as objective facts (මත වාස්තවික කරුණු ලෙස ලියා තැබීම)"
    ],
    "correctIndex": 0,
    "explanation": "Accepting the other person's feelings and thoughts without rejecting or judging them. (අනෙක්පුද්ගලයාගේ හැඟීම් සහ අදහස් ප්‍රතික්වෂ්ප කිරීමක් හෝ විශ්‍්චය කිරීමක් නොකර පිළිගැනීමයි.)",
    "kind": "mcq",
    "sinhalaText": "පිළිගැනීම (ජුයෝ) යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q009",
    "moduleId": "lesson-06",
    "number": 9,
    "question": "What are the questioning techniques?",
    "options": [
      "Closed-ended questions and open-ended questions. (සංවෘත ප්‍රශ්‍්න සහ විවෘත ප්‍රශ්‍්න ඇත.)",
      "True/false and multiple-choice only (සත්‍ය/අසත්‍ය සහ බහුවරණ පමණි)",
      "Whispered and shouted questions (මුමුණමින්න සහ කෑගසා අසන ප්‍රශ්‍්න)",
      "Written and typed questions only (ලියන ලද සහ ටයිප් කළ ප්‍රශ්‍්න පමණි)"
    ],
    "correctIndex": 0,
    "explanation": "Closed-ended questions and open-ended questions. (සංවෘත ප්‍රශ්‍්න සහ විවෘත ප්‍රශ්‍්න ඇත.)",
    "kind": "mcq",
    "sinhalaText": "ප්‍රශ්‍්න කිරීමේ ක්‍රම මොනවාද?"
  },
  {
    "id": "lesson-06-q010",
    "moduleId": "lesson-06",
    "number": 10,
    "question": "What is a closed-ended question?",
    "options": [
      "A long essay question (දිගු රචනා ප්‍රශ්‍්නයක්)",
      "A question that can be answered simply with one word like \"yes\" or \"no\". (\"ඔේ\" හෝ \"නැහැ\" ලෙස අනෙක් පුද්ගලයාට එක් වචනයකින්න සරලවපිළිතුරු දිය හැකි ප්‍රශ්‍්නයකි.)",
      "A question with no possible answer (පිළිතුරක් නොමැති ප්‍රශ්‍්නයක්)",
      "A question asked only to medical doctors (වෛද්‍යවරුන්නවගන්න පමණක් අසන ප්‍රශ්‍්නයක්)"
    ],
    "correctIndex": 1,
    "explanation": "A question that can be answered simply with one word like \"yes\" or \"no\". (\"ඔේ\" හෝ \"නැහැ\" ලෙස අනෙක් පුද්ගලයාට එක් වචනයකින්න සරලව පිළිතුරු දිය හැකි ප්‍රශ්‍්නයකි.)",
    "kind": "mcq",
    "sinhalaText": "සංවෘත ප්‍රශ්‍්නයක් යනු කුමන ආකාරවේ ප්‍රශ්‍්නයක්ද?"
  },
  {
    "id": "lesson-06-q011",
    "moduleId": "lesson-06",
    "number": 11,
    "question": "What is an open-ended question?",
    "options": [
      "A question that allows the other person to answer freely, such as \"What do you want to do?\" or \"How do you think?\". (\"ඔබට කුමක්කිරීමට අවශ්‍යද?\" හෝ \"ඔබ සිතන්නවන්න වකවස්ද?\" ලෙස අනෙක් පුද්ගලයාට නිදහවස් පිළිතුරු දිය හැකි ප්‍රශ්‍්නයකි.)",
      "A question that only allows \"yes\" (\"ඔේ\" පමණක් පිළිතුරු ලෙස දිය හැකි ප්‍රශ්‍්නයක්)",
      "A question that only allows \"no\" (\"නැහැ\" පමණක් පිළිතුරු ලෙස දිය හැකි ප්‍රශ්‍්නයක්)",
      "A question asked in sign language only (සංඥා භාෂාවවන්න පමණක් අසන ප්‍රශ්‍්නයක්)"
    ],
    "correctIndex": 0,
    "explanation": "A question that allows the other person to answer freely, such as \"What do you want to do?\" or\n\"How do you think?\". (\"ඔබට කුමක් කිරීමට අවශ්‍යද?\" හෝ \"ඔබ සිතන්නවන්න වකවස්ද?\" ලෙස අනෙක් පුද්ගලයාට නිදහවස් පිළිතුරු දිය හැකි ප්‍රශ්‍්නයකි.)",
    "kind": "mcq",
    "sinhalaText": "විවෘත ප්‍රශ්‍්නයක් යනු කුමන ආකාරවේ ප්‍රශ්‍්නයක්ද?"
  },
  {
    "id": "lesson-06-q012",
    "moduleId": "lesson-06",
    "number": 12,
    "question": "What is repetition?",
    "options": [
      "The caregiver repeating the words spoken by the care recipient. (සේවාලාභියා පැවසූ වචන සත්කාරකයා විසින් නැවත පැවසීමයි.)",
      "Reading the same care plan ten times silently (එකම සත්කාර සැලැස්ම දස වරක් නිහඬව කියවීම)",
      "Asking the same question angrily (එකම ප්‍රශ්‍්නය කෝපවයන්න ඇසීම)",
      "Writing the date twice on a report (වාර්තාවක දිනය වදවරක් ලිවීම)"
    ],
    "correctIndex": 0,
    "explanation": "The caregiver repeating the words spoken by the care recipient. (සේවාලාභියා පැවසූ වචන සත්කාරකයාවිසින් නැවත පැවසීමයි.)",
    "kind": "mcq",
    "sinhalaText": "පුනරාවර්තනය යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q013",
    "moduleId": "lesson-06",
    "number": 13,
    "question": "What message can be conveyed by repeating?",
    "options": [
      "\"Please stop talking now.\" (\"දැන්න කතා කිරීම නවත්වන්නන.\")",
      "The message \"I am listening to your story.\" (\"මම ඔබේ කතාවට සවන් වදමින්න සිටිනවා\" යන පණිවිඩය ලබාදිය හැක.)",
      "\"I don't care about your feelings.\" (\"ඔබේ හැඟීම් ගැන මට කමක් නැහැ.\")",
      "\"You must answer in one word.\" (\"ඔබ එක් වචනයකින්න පිළිතුරු දිය යුතුයි.\")"
    ],
    "correctIndex": 1,
    "explanation": "The message \"I am listening to your story.\" (\"මම ඔබේ කතාවට සවන් වදමින්න සිටිනවා\" යන පණිවිඩය ලබාදිය හැක.)",
    "kind": "mcq",
    "sinhalaText": "නැවත පැවසීවමන්න කුමන පණිවිඩයක් ලබාදිය හැකිද?"
  },
  {
    "id": "lesson-06-q014",
    "moduleId": "lesson-06",
    "number": 14,
    "question": "What does the caregiver do when interacting with the care recipient?",
    "options": [
      "Adjusts to the same eye level. (ඇස් මටටම එකම මටටමකට සකස් කරගෙන සම්බන්ධ විය යුතුය.)",
      "Stands high above a seated user (වාඩි වී සිටින පරිශීලකයෙකුට ඉහළින්න උසින්න සිටගෙන සිටීම)",
      "Turns their back while speaking (කතා කරන අතරතුර පිටුපස හැරී සිටීම)",
      "Speaks from another room (වෙනත් කාමරයක සිට කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Adjusts to the same eye level. (ඇස් මටටම එකම මටටමකට සකස් කරගෙන සම්බන්ධ විය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරකයා සේවාලාභියා සමඟ සම්බන්ධ වන විට කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q015",
    "moduleId": "lesson-06",
    "number": 15,
    "question": "What happens if you don't match eye levels with the care recipient?",
    "options": [
      "The care recipient can easily find it difficult to understand that you are listening to their story. (කතාවට සවන් දෙන බව සේවාලාභියාට තේරුම් ගැනීමට අපහසු වේ.)",
      "The user's hearing automatically improves (පරිශීලකයාගේ ශ්‍රවණය ස්වයංක්‍රීයව වැඩි දියුණු වේ)",
      "Care records are no longer needed (සත්කාර වාර්තා තවදුරටත් අවශ්‍ය නොවේ)",
      "The user cannot see any objects (පරිශීලකයාට කිසිදු වස්තුවක් වපවනන්නවන්න නැත)"
    ],
    "correctIndex": 0,
    "explanation": "The care recipient can easily find it difficult to understand that you are listening to their story.\n(කතාවට සවන් දෙන බව සේවාලාභියාට තේරුම් ගැනීමට අපහසු වේ.)",
    "kind": "mcq",
    "sinhalaText": "ඇස් මටටම නොගැළපෙන ලෙස සිටියවහාත් කුමක් සිදුවේද?"
  },
  {
    "id": "lesson-06-q016",
    "moduleId": "lesson-06",
    "number": 16,
    "question": "In what tone of voice should you speak when talking to someone?",
    "options": [
      "Very fast and loud (ඉතා වේගවයන්න සහ ශ්‍බ්ද නඟා)",
      "Slowly, in a calm tone, with appropriate pauses. (වසමින්න, සන්නසුන්න ස්වරයකින්න සහ සුදුසු විරාම තෙමින්න කතා කළ යුතුය.)",
      "Whispering so low that no one hears (කිසිවවකුට නොඇවසන තරම් ඉතා වසමින්න මුමුණමින්න)",
      "In a harsh and impatient tone (රළු සහ නොඉවසිලිමත් ස්වරයකින්න)"
    ],
    "correctIndex": 1,
    "explanation": "Slowly, in a calm tone, with appropriate pauses. (වසමින්න, සන්නසුන්න ස්වරයකින්න සහ සුදුසු විරාම තෙමින්න කතාකළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "කතා කරන විට කුමන ආකාරවේ ස්වරයකින්න කතා කළ යුතුද?"
  },
  {
    "id": "lesson-06-q017",
    "moduleId": "lesson-06",
    "number": 17,
    "question": "What impression does facing each other when talking give?",
    "options": [
      "Shows respect and attention to the care recipient. (සේවාලාභියාට ගෞරවය සහ අවධානය පෙන්නවිය හැක.)",
      "Shows impatience and anger (නොඉවසිලිමත්කම සහ කෝපය පෙන්නවයි)",
      "Invades personal privacy (පෞද්ගලිකත්වය උල්ලංඝනය කරයි)",
      "Replaces verbal explanations (වාචික පැහැදිලි කිරීම් වෙනුවට යොදා ගැවන්න)"
    ],
    "correctIndex": 0,
    "explanation": "Shows respect and attention to the care recipient. (සේවාලාභියාට ගෞරවය සහ අවධානය පෙන්නවිය හැක.)",
    "kind": "mcq",
    "sinhalaText": "මුහුණට මුහුණලා කතා කිරීවමන්න කුමන හැඟීමක් ලබාදිය හැකිද?"
  },
  {
    "id": "lesson-06-q018",
    "moduleId": "lesson-06",
    "number": 18,
    "question": "How might crossing your arms look?",
    "options": [
      "Warm and welcoming (උණුසුම් සහ පිළිගන්නනා සුළු)",
      "It may look uninterested or indifferent. (උනන්දුවක් නැති සහ නොසැලකිලිමත් ආකාරයක් ලෙස වපිය හැක.)",
      "Attentive and empathetic (අවධානයෙන් යුතු සහ සානුකම්පිත)",
      "Respectful and humble (ගෞරවනීය සහ නිහතමානී)"
    ],
    "correctIndex": 1,
    "explanation": "It may look uninterested or indifferent. (උනන්දුවක් නැති සහ නොසැලකිලිමත් ආකාරයක් ලෙස වපිය හැක.)",
    "kind": "mcq",
    "sinhalaText": "අත් බැඳගෙන සිටීම වකවස් වපිය හැකිද?"
  },
  {
    "id": "lesson-06-q019",
    "moduleId": "lesson-06",
    "number": 19,
    "question": "How might crossing your legs look?",
    "options": [
      "It may look improper or disrespectful depending on the situation. (අවස්ථාව අනුව අවශ්‍ෝභන ලෙස හෝ අගෞරවනීය ලෙස වපිය හැක.)",
      "Always required during meals (ආහාර ගන්නනා විට සැමවිටම අවශ්‍ය වේ)",
      "The best way to show active listening (සක්‍රීය සවන්නදීම පෙන්නවීමට හොඳම ක්‍රමය)",
      "Equivalent to sign language (සංඥා භාෂාවට සමාන වේ)"
    ],
    "correctIndex": 0,
    "explanation": "It may look improper or disrespectful depending on the situation. (අවස්ථාව අනුව අවශ්‍ෝභන ලෙස හෝඅගෞරවනීය ලෙස වපිය හැක.)",
    "kind": "mcq",
    "sinhalaText": "කකුල් මාරු කර වාඩිවීම වකවස් වපිය හැකිද?"
  },
  {
    "id": "lesson-06-q020",
    "moduleId": "lesson-06",
    "number": 20,
    "question": "What should you be careful about regarding distance and body touch?",
    "options": [
      "Keep an appropriate distance and avoid excessive body touch. (සුදුසු දුරක් තබාගෙන, වැඩිපුර ශරීර ස්පර්ශ්‍ නොකිරීමට වගබලා ගත යුතුය.)",
      "Stand as far away as possible across the hall (ශ්‍ාලාවේ හැකිතාක් ඈතින්න සිටගෙන සිටීම)",
      "Touch the user constantly without asking (අවසර නොගෙන පරිශීලකයා නිරන්නතරවයන්න ස්පර්ශ්‍ කිරීම)",
      "Never touch the user even when assisting (සහාය දෙන විට පවා පරිශීලකයා කිසි විවටකත් ස්පර්ශ්‍ නොකිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Keep an appropriate distance and avoid excessive body touch. (සුදුසු දුරක් තබාගෙන, වැඩිපුර ශරීර ස්පර්ශ්‍\nනොකිරීමට වගබලා ගත යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "දුරස්ථභාවය සහ ශරීර ස්පර්ශ්‍ය සම්බන්ධවයන්න කුමක් ගැන සැලකිලිමත් විය යුතුද?"
  },
  {
    "id": "lesson-06-q021",
    "moduleId": "lesson-06",
    "number": 21,
    "question": "What should you be careful about when communicating while gently touching or supporting?",
    "options": [
      "Act so that the care recipient feels no discomfort or inconvenience. (සේවාලාභියාට කිසිදු අසහනයක් හෝ අපහසුතාවයක් ඇති නොවන ලෙස කටයුතු කළ යුතුය.)",
      "Grip firmly so the user cannot move (පරිශීලකයාට චලනය විය නොහැකි වන පරිදි තදින්න අල්ලා ගැනීම)",
      "Speak louder than normal (සාමානය ප්‍රමාණයට වඩා ශ්‍බ්ද නඟා කතා කිරීම)",
      "Look away toward the door (දොර දෙසට වෙනතක ැලීම)"
    ],
    "correctIndex": 0,
    "explanation": "Act so that the care recipient feels no discomfort or inconvenience. (සේවාලාභියාට කිසිදු අසහනයක් හෝඅපහසුතාවයක් ඇති නොවන ලෙස කටයුතු කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "අතින්න අල්ලාගෙන හෝ ළඟින්න සිට සන්නිවේදනය කරන විට කුමක් ගැන සැලකිලිමත් විය යුතුද?"
  },
  {
    "id": "lesson-06-q022",
    "moduleId": "lesson-06",
    "number": 22,
    "question": "How does leaning back posture look?",
    "options": [
      "It can look disrespectful. (ගෞරවයක් නොපෙන්නවන ආකාරයක් ලෙස වපිය හැක.)",
      "Warm and attentive (උණුසුම් සහ අවධානයෙන් යුතු)",
      "Encouraging for speech (කතා කිරීමට දිරිගන්නවන සුළු)",
      "Helpful for lip-reading (තොල් කියවීමට උපකාරී වන)"
    ],
    "correctIndex": 0,
    "explanation": "It can look disrespectful. (ගෞරවයක් නොපෙන්නවන ආකාරයක් ලෙස වපිය හැක.)",
    "kind": "mcq",
    "sinhalaText": "පිටුපසට බර දී වාඩි වී සිටින ඉරියේව වකවස් වපිය හැකිද?"
  },
  {
    "id": "lesson-06-q023",
    "moduleId": "lesson-06",
    "number": 23,
    "question": "What does the caregiver do to help the care recipient lead their own life?",
    "options": [
      "Makes all life choices for the care recipient (සේවාලාභියා වෙනුවවන්න සියලු ජීවන තීරණ ගියි)",
      "Supports the care recipient's decision-making ability. (සේවාලාභියාවේ තීරණ ගැනීමේ හැකියාවට සහාය වදයි.)",
      "Ignores the care recipient's preferences (සේවාලාභියාවේ කැමැත්ත නොසලකා හරියි)",
      "Restricts daily activities (වදික ක්‍රියාකාරකම් සීමා කරයි)"
    ],
    "correctIndex": 1,
    "explanation": "Supports the care recipient's decision-making ability. (සේවාලාභියාවේ තීරණ ගැනීමේ හැකියාවට සහාය වදයි.)",
    "kind": "mcq",
    "sinhalaText": "සේවාලාභියාට තමන්ට ගැළපෙන ආකාරවයන්න ජීවිතය ගත කිරීමට සත්කාරකයා කුමක් කරයිද?"
  },
  {
    "id": "lesson-06-q024",
    "moduleId": "lesson-06",
    "number": 24,
    "question": "How does the caregiver respond to what the care recipient has decided?",
    "options": [
      "Respects their choice and provides support so they can carry it out. (සේවාලාභියා තීරණය කළ දේ ක්‍රියාත්මක කරගත හැකි වන පරිදි,\nඔහුවේ/ඇයවේ තේරීමට ගරු කර සහය ලබා දිය යුතුය.)",
      "Persuades them to pick what the caregiver prefers (සත්කාරකයා කැමති දේ තෝරා ගැනීමට ඔවුන් පොළඹවයි)",
      "Delays helping until tomorrow (වහට වන තෙක් උදේ කිරීම ප්‍රමාද කරයි)",
      "Reports it as a mistake (එය වරදක් ලෙස වාර්තා කරයි)"
    ],
    "correctIndex": 0,
    "explanation": "Respects their choice and provides support so they can carry it out. (සේවාලාභියා තීරණය කළ වද්ක්‍රියාත්මක කරගත හැකි වන පරිදි, ඔහුවේ/ඇයවේ තේරීමට ගරු කර සහය ලබා දිය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "සේවාලාභියා තීරණය කළ වදය සම්බන්ධවයන්න සත්කාරකයා කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q025",
    "moduleId": "lesson-06",
    "number": 25,
    "question": "What kind of disability is visual impairment?",
    "options": [
      "Inability or difficulty in seeing with the eyes. (ඇස්වලින්න දැකීමට නොහැකි වීම හෝ ඇස්වලින්න දැකීමට අපහසු වීම වැනි ආබාධයකි.)",
      "Inability to hear sounds with the ears (කන්නවලින්න ශ්‍බ්ද ඇසීමට නොහැකි වීම)",
      "Difficulty swallowing food (ආහාර ගිලීමේ අපහසුතාව)",
      "Loss of sense of smell (ගඳ සුවඳ දැනීමේ හැකියාව නැති වීම)"
    ],
    "correctIndex": 0,
    "explanation": "Inability or difficulty in seeing with the eyes. (ඇස්වලින්න දැකීමට නොහැකි වීම හෝ ඇස්වලින්න දැකීමට අපහසුවීම වැනි ආබාධයකි.)",
    "kind": "mcq",
    "sinhalaText": "දෘෂයාබාධය යනු කුමන ආකාරවේ ආබාධයක්ද?"
  },
  {
    "id": "lesson-06-q026",
    "moduleId": "lesson-06",
    "number": 26,
    "question": "What should you keep in mind when communicating with a visually impaired person?",
    "options": [
      "Utilize non-visual information and other methods. (දෘශ්‍යමය නොවන අනෙකුත් තොරතුරු සහ ක්‍රම භාවිත කළ යුතුය.)",
      "Point silently without speaking (කතා නොකර නිහඬව ඇඟිල්වලන්න පෙන්නවීම)",
      "Use vague words like \"over there\" (\"අර පැත්තේ\" වැනි අපැහැදිලි වචන භාවිත කිරීම)",
      "Avoid saying your name (ඔබේ නම පැවසීවමන්න වැළකී සිටීම)"
    ],
    "correctIndex": 0,
    "explanation": "Utilize non-visual information and other methods. (දෘශ්‍යමය නොවන අනෙකුත් තොරතුරු සහ ක්‍රම භාවිත කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "දෘෂයාබාධයක් ඇති පුද්ගලයෙකු සමඟ සන්නිවේදනය කිරීමේදී කුමක් ගැන සැලකිලිමත් විය යුතුද?"
  },
  {
    "id": "lesson-06-q027",
    "moduleId": "lesson-06",
    "number": 27,
    "question": "How should you explain the location and characteristics of objects?",
    "options": [
      "Accurately and descriptively with words. (නිශ්‍්චිතව සහ විස්තරාත්මකව වචන වලින්න පැහැදිලි කළ යුතුය.)",
      "By nodding silently (නිහඬව හිස සැලීවමන්න)",
      "With a single word only (එක් වචනයකින්න පමණක්)",
      "After moving the object without telling (නොකියා වස්තුව වෙනත් තැනකට ගෙන ගිය පසු)"
    ],
    "correctIndex": 0,
    "explanation": "Accurately and descriptively with words. (නිශ්‍්චිතව සහ විස්තරාත්මකව වචන වලින්න පැහැදිලි කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "දේවල පිහිටීම සහ ලක්ෂණ ආදී දේ වකවස් පැහැදිලි කළ යුතුද?"
  },
  {
    "id": "lesson-06-q028",
    "moduleId": "lesson-06",
    "number": 28,
    "question": "What do you do when speaking to a visually impaired person?",
    "options": [
      "Always speak to them (use your voice) first. (පළමුව අනිවාර්යවයන්නම කතා කර (හඬ නගා) දැනුවත් කළ යුතුය.)",
      "Tap their shoulder silently from behind (පිටුපසින්න නිහඬව උරහිසට තටටු කිරීම)",
      "Wave your hand in front of them (ඔවුන් ඉදිරිපිට අත වැනීම)",
      "Wait for them to speak first (ඔවුන් පළමුව කතා කරන තෙක් බලා සිටීම)"
    ],
    "correctIndex": 0,
    "explanation": "Always speak to them (use your voice) first. (පළමුව අනිවාර්යවයන්නම කතා කර (හඬ නගා) දැනුවත් කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "දෘෂයාබාධයක් ඇති පුද්ගලයෙකුට කතා කරන විට කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q029",
    "moduleId": "lesson-06",
    "number": 29,
    "question": "What should you do when calling out to them?",
    "options": [
      "Speak to them after calling their name. (සේවාලාභියාවේ නම ඇමතීවමන්න පසුව කතා කළ යුතුය.)",
      "Call out \"Hey there\" without using their name (නම භාවිත නොකර \"වමන්නන\" යනුවවන්න ඇමතීම)",
      "Clap your hands instead of speaking (කතා කිරීම වෙනුවට අත්පුඩි ගැසීම)",
      "Speak only when leaving the room (කාමරවයන්න පිටව යන විට පමණක් කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speak to them after calling their name. (සේවාලාභියාවේ නම ඇමතීවමන්න පසුව කතා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "කතා කරන විට කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q030",
    "moduleId": "lesson-06",
    "number": 30,
    "question": "What should the caregiver do about their own name?",
    "options": [
      "It is also important to introduce your own name. (තමාවේ නම කුමක්දැයි හඳුන්නවා දීමද වැදගත්ය.)",
      "Keep your name secret (තම නම රහසක්ව තබා ගැනීම)",
      "Say only your job title (තම තනතුරු නාමය පමණක් පැවසීම)",
      "Introduce yourself only at the end of the shift (වැඩ මුරය අවසානවේ පමණක් තමාව හඳුන්නවා දීම)"
    ],
    "correctIndex": 0,
    "explanation": "It is also important to introduce your own name. (තමාවේ නම කුමක්දැයි හඳුන්නවා දීමද වැදගත්ය.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරකයා තම නම සම්බන්ධවයන්න කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q031",
    "moduleId": "lesson-06",
    "number": 31,
    "question": "What should you do when explaining locations or directions?",
    "options": [
      "Explain specifically, such as \"on your right side\" or \"in the direction where my voice is heard\". (\"ඔබේ දකුණු පැත්තේ\", \"මවේ කටහඬ ඇවසන දිශ්‍ාවට\" වැනි ලෙස නිශ්‍්චිතව පැහැදිලි කළ යුතුය.)",
      "Say \"it's right there\" while pointing (ඇඟිල්වලන්න පෙන්නවමින්න \"අන්නන එතන තිවයනවා\" යැයි පැවසීම)",
      "Use only technical map coordinates (තාක්ෂණික සිතියම් ඛේඩාංක පමණක් භාවිත කිරීම)",
      "Let them guess where it is (එය වකාවහ්දැයි අනුමාන කිරීමට ඉඩ දීම)"
    ],
    "correctIndex": 0,
    "explanation": "Explain specifically, such as \"on your right side\" or \"in the direction where my voice is heard\". (\"ඔබේදකුණු පැත්තේ\", \"මවේ කටහඬ ඇවසන දිශ්‍ාවට\" වැනි ලෙස නිශ්‍්චිතව පැහැදිලි කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "ස්ථානය හෝ දිශ්‍ාව පැහැදිලි කරන විට කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q032",
    "moduleId": "lesson-06",
    "number": 32,
    "question": "What method is used to convey the layout of food during meals?",
    "options": [
      "The \"clock position\" method. (\"ක්වලාක් වපාසිෂන්න\" නම් ක්‍රමය භාවිත කරයි.)",
      "The \"alphabetical\" method (අකාරාදී ක්‍රමය)",
      "The \"temperature\" method (උෂ්ණත්ව ක්‍රමය)",
      "The \"silent pointing\" method (නිහඬව පෙන්නවීමේ ක්‍රමය)"
    ],
    "correctIndex": 0,
    "explanation": "The \"clock position\" method. (\"ක්වලාක් වපාසිෂන්න\" නම් ක්‍රමය භාවිත කරයි.)",
    "kind": "mcq",
    "sinhalaText": "ආහාර ගන්නනා විට ආහාරවල පිහිටීම පැහැදිලි කිරීමට භාවිත කරන ක්‍රමය කුමක්ද?"
  },
  {
    "id": "lesson-06-q033",
    "moduleId": "lesson-06",
    "number": 33,
    "question": "What are the communication characteristics of hearing-impaired people?",
    "options": [
      "Feelings of loneliness and loss may increase due to lack of adequate hearing, and emotional support is needed. (ශ්‍බ්ද ප්‍රමාණවත් ලෙස ඇවසන්නවන්න නැති නිසා තිකම සහ අහිමිවීමේ හැඟීම වැඩි විය හැකි අතර මානසික සහයද අවශ්‍ය වේ.)",
      "They never feel lonely (ඔවුන්ට කිසි විවටකත් තිකමක් දැවනන්නවන්න නැත)",
      "They cannot understand written text (ඔවුන්ට ලිඛිත දේ තේරුම් ගත නොහැක)",
      "They do not need emotional support (ඔවුන්ට මානසික සහයක් අවශ්‍ය නොවේ)"
    ],
    "correctIndex": 0,
    "explanation": "Feelings of loneliness and loss may increase due to lack of adequate hearing, and emotional\nsupport is needed. (ශ්‍බ්ද ප්‍රමාණවත් ලෙස ඇවසන්නවන්න නැති නිසා තිකම සහ අහිමිවීමේ හැඟීම වැඩි විය හැකි අතර මානසික සහයද අවශ්‍ය වේ.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණාබාධයක් ඇති පුද්ගලයන්වේ සන්නිවේදනවේ ලක්ෂණය කුමක්ද?"
  },
  {
    "id": "lesson-06-q034",
    "moduleId": "lesson-06",
    "number": 34,
    "question": "From which direction should you speak to a hearing-impaired person?",
    "options": [
      "Speak from the front. (ඉදිරිපසින්න කතා කළ යුතුය.)",
      "Speak from behind their back (ඔවුන්වේ පිටුපසින්න කතා කිරීම)",
      "Speak from inside another room (වෙනත් කාමරයක සිට කතා කිරීම)",
      "Speak while walking away (ඈතට ඇවිද යන අතරතුර කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speak from the front. (ඉදිරිපසින්න කතා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණාබාධයක් ඇති පුද්ගලයෙකුට කුමන දිශ්‍ාවවන්න කතා කළ යුතුද?"
  },
  {
    "id": "lesson-06-q035",
    "moduleId": "lesson-06",
    "number": 35,
    "question": "If there is an ear that hears better, which side should you speak from?",
    "options": [
      "Speak near the ear on the side that hears better. (හොඳින් ඇවසන පැත්තේ කණ අසලින්න කතා කළ යුතුය.)",
      "Speak near the side with more hearing loss (ශ්‍රවණ හැකියාව අඩු පැත්තේ කණ අසලින්න කතා කිරීම)",
      "Cover both ears while speaking (කතා කරන අතරතුර කන්න දෙකම ආවරණය කිරීම)",
      "Speak into the back of the head (හිවස් පිටුපසට කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speak near the ear on the side that hears better. (හොඳින් ඇවසන පැත්තේ කණ අසලින්න කතා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "හොඳින් ඇවසන කණක් තිවබ් නම්, කුමන පැත්වතන්න කතා කළ යුතුද?"
  },
  {
    "id": "lesson-06-q036",
    "moduleId": "lesson-06",
    "number": 36,
    "question": "How should you speak to a hearing-impaired person?",
    "options": [
      "Speak slowly and clearly with a raised voice. (වසමින්න සහ පැහැදිලිව හඬ නගා කතා කළ යුතුය.)",
      "Mumble quickly with your mouth covered (මුව ආවරණය කරගෙන ඉක්මනින් මුමුණමින්න කතා කිරීම)",
      "Speak in fast slang (වේගවත් කථන භාෂාවවන්න කතා කිරීම)",
      "Turn away from light (ආලෝකවයන්න ඉවතට හැරී කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speak slowly and clearly with a raised voice. (වසමින්න සහ පැහැදිලිව හඬ නගා කතා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණාබාධයක් ඇති පුද්ගලයෙකුට වකවස් කතා කළ යුතුද?"
  },
  {
    "id": "lesson-06-q037",
    "moduleId": "lesson-06",
    "number": 37,
    "question": "Is it okay to make your voice too loud for a hearing-impaired person?",
    "options": [
      "Do not shout excessively beyond what is necessary. (අවශ්‍ය ප්‍රමාණයට වඩා අධික ලෙස කෑගසා කතා නොකළ යුතුය.)",
      "Yes, always yell at maximum volume (ඔේ, සැමවිටම උපරිම හඬින්න කෑගසන්නන)",
      "Yes, shout right next to the ear (ඔේ, කන අසලම කෑගසන්නන)",
      "Yes, whenever they do not reply immediately (ඔවුන් වහාම පිළිතුරු නොවදන සෑම විටම ඔේ)"
    ],
    "correctIndex": 0,
    "explanation": "Do not shout excessively beyond what is necessary. (අවශ්‍ය ප්‍රමාණයට වඩා අධික ලෙස කෑගසා කතානොකළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණාබාධයක් ඇති පුද්ගලයෙකුට අවශ්‍ය ප්‍රමාණයට වඩා ඉතා විශාල හඬකින්න කතා කළ හැකිද?"
  },
  {
    "id": "lesson-06-q038",
    "moduleId": "lesson-06",
    "number": 38,
    "question": "In what kind of place do you converse with a hearing-impaired person?",
    "options": [
      "Converse in as quiet a place with little noise as possible. (හැකිතාක් ශ්‍බ්දය අඩු නිහඬ ස්ථානයකදී කතා කළ යුතුය.)",
      "Next to a loud television or noisy hall (ඝෝෂාකාරී රූපවාහියක් හෝ ශ්‍බ්ද සහිත ශ්‍ාලාවක් අසල)",
      "In a crowded busy corridor (කාර්යබහුල වසනඟ ගැවවසන වකාරිඩෝවක)",
      "Next to running water machines (ශ්‍බ්ද නඟන යන්නර අසල)"
    ],
    "correctIndex": 0,
    "explanation": "Converse in as quiet a place with little noise as possible. (හැකිතාක් ශ්‍බ්දය අඩු නිහඬ ස්ථානයකදී කතා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණාබාධයක් ඇති පුද්ගලයෙකු සමඟ කුමන ස්ථානයකදී කතා කළ යුතුද?"
  },
  {
    "id": "lesson-06-q039",
    "moduleId": "lesson-06",
    "number": 39,
    "question": "What kind of communication is lip-reading (Dokuwa)?",
    "options": [
      "Communicating by watching and understanding mouth movements. (මුවවහි චලනයන්න බලා තේරුම් ගිමින්න සන්නිවේදනය කිරීමයි.)",
      "Communicating only by writing letters (ලිපි ලිවීවමන්න පමණක් සන්නිවේදනය කිරීම)",
      "Communicating through hearing aids only (ශ්‍රවණ ආධාරක මඟින්න පමණක් සන්නිවේදනය කිරීම)",
      "Reading a clock face for food (ආහාර සඳහා ඔරලෝසු මුහුණතක් කියවීම)"
    ],
    "correctIndex": 0,
    "explanation": "Communicating by watching and understanding mouth movements. (මුවවහි චලනයන්න බලා තේරුම්ගිමින්න සන්නිවේදනය කිරීමයි.)",
    "kind": "mcq",
    "sinhalaText": "තොල් කියවීම යනු කුමන ආකාරවේ සන්නිවේදනයක්ද?"
  },
  {
    "id": "lesson-06-q040",
    "moduleId": "lesson-06",
    "number": 40,
    "question": "What is used in writing communication (Hitsudan)?",
    "options": [
      "Communicating using paper, pens, or writing tools. (කඩදාසි, පෑන හෝ ලිවීමේ උපකරණ භාවිත කර සන්නිවේදනය කරයි.)",
      "Foot tapping and whistling (පාදවයන්න තටටු කිරීම සහ විසිල් ගැසීම)",
      "Crossing legs and arms (කකුල් සහ අත් හරස් කිරීම)",
      "Closing eyes while speaking (කතා කරන අතරතුර ඇස් වසා ගැනීම)"
    ],
    "correctIndex": 0,
    "explanation": "Communicating using paper, pens, or writing tools. (කඩදාසි, පෑන හෝ ලිවීමේ උපකරණ භාවිත කර සන්නිවේදනය කරයි.)",
    "kind": "mcq",
    "sinhalaText": "ලිඛිත සන්නිවේදනවේදී භාවිත කරන්නේ මොනවාද?"
  },
  {
    "id": "lesson-06-q041",
    "moduleId": "lesson-06",
    "number": 41,
    "question": "How do you convey meaning in sign language?",
    "options": [
      "Convey meaning by combining hand and finger movements with movements of the face and head. (අත් සහ ඇඟිලි චලනයන්න සමඟ මුහුණ සහ හිස වැනි කොටස්වල චලනයන්න එකතු කර අර්ථය සන්නිවේදනය කරයි.)",
      "By speaking very loudly without moving (චලනය නොවී ඉතා ශ්‍බ්ද නඟා කතා කිරීවමන්න)",
      "By writing long reports (දිගු වාර්තා ලිවීවමන්න)",
      "By standing behind the person (පුද්ගලයා පිටුපස සිටගෙන සිටීවමන්න)"
    ],
    "correctIndex": 0,
    "explanation": "Convey meaning by combining hand and finger movements with movements of the face and head.\n(අත් සහ ඇඟිලි චලනයන්න සමඟ මුහුණ සහ හිස වැනි කොටස්වල චලනයන්න එකතු කර අර්ථය සන්නිවේදනය කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සංඥා භාෂාවවන්න අර්ථය සන්නිවේදනය කරන්නේ වකවස්ද?"
  },
  {
    "id": "lesson-06-q042",
    "moduleId": "lesson-06",
    "number": 42,
    "question": "What kind of tool is a hearing aid?",
    "options": [
      "A device that collects sounds with a microphone, amplifies them, and delivers them to the ear. (මයික්‍රව නයක් මඟින්න ශ්‍බ්ද එකතු කර, ඒවාවිශාල කර කනට ලබාවදන උපකරණයකි.)",
      "A device that magnifies small print on paper (කඩදාසියක ඇති කුඩා අකුරු විශාල කරන උපකරණයක්)",
      "A board used to lift a user (පරිශීලකයෙකු එසවීමට භාවිත කරන පුවරුවක්)",
      "A thermometer for measuring fever (උණ මැනීමේ උෂ්ණත්වමානයක්)"
    ],
    "correctIndex": 0,
    "explanation": "A device that collects sounds with a microphone, amplifies them, and delivers them to the ear.\n(මයික්‍රව නයක් මඟින්න ශ්‍බ්ද එකතු කර, ඒවා විශාල කර කනට ලබාවදන උපකරණයකි.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණ ආධාරකය (hearing aid) යනු කුමන ආකාරවේ උපකරණයක්ද?"
  },
  {
    "id": "lesson-06-q043",
    "moduleId": "lesson-06",
    "number": 43,
    "question": "What kind of condition is aphasia?",
    "options": [
      "Reduced ability to understand spoken language, read and understand written text, speak, and write characters due to damage to the\nlanguage-related area of the brain. (මොළවේ භාෂාවට සම්බන්ධ ප්‍රදේශ්‍යට හානි වීම නිසා කතාව අසා තේරුම් ගැනීම, ලිවූ දේ කියවා තේරුම් ගැනීම,\nකතා කිරීම සහ අකුරු ලිවීම වැනි හැකියාවන්න අඩු වීමයි.)",
      "Temporary ringing in the ears after loud music (අධික සංගීතවයන්න පසු කන්නවල ඇතිවන තාවකාලික ශ්‍බ්දය)",
      "Difficulty tying shoelaces due to arthritis (ආතරයිටිස් නිසා සපත්තු වල්ස් ගැට ගැසීමේ අපහසුතාව)",
      "Sensitivity to bright sunlight (දීප්තිමත් හිරු එළියට සංවේදී වීම)"
    ],
    "correctIndex": 0,
    "explanation": "Reduced ability to understand spoken language, read and understand written text, speak, and write\ncharacters due to damage to the language-related area of the brain. (මොළවේ භාෂාවට සම්බන්ධ ප්‍රදේශ්‍යට හානි වීම නිසා කතාව අසා තේරුම්ගැනීම, ලිවූ දේ කියවා තේරුම් ගැනීම, කතා කිරීම සහ අකුරු ලිවීම වැනි හැකියාවන්න අඩු වීමයි.)",
    "kind": "mcq",
    "sinhalaText": "කථන ආබාධය (අපාෂියා / Aphasia) යනු කුමන තත්ත්වයක්ද?"
  },
  {
    "id": "lesson-06-q044",
    "moduleId": "lesson-06",
    "number": 44,
    "question": "How do you speak to someone with aphasia?",
    "options": [
      "Speak slowly and clearly using short and easy-to-understand words. (කෙටි සහ පහසුවවන්න තේරුම්ගත හැකි වචන භාවිත කර, වසමින්න සහ පැහැදිලිව කතා කළ යුතුය.)",
      "Speak rapidly with long complex sentences (දිගු සංකීර්ණ වාක්‍ය සහිතව ඉතා වේගවයන්න කතා කිරීම)",
      "Shout loudly from far away (ඈත සිට ඉතා ශ්‍බ්ද නඟා කෑගැසීම)",
      "Speak like scolding a child (කුඩා දරුවවකුට තරවටු කරන ලෙස කතා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speak slowly and clearly using short and easy-to-understand words. (කෙටි සහ පහසුවවන්න තේරුම්ගත හැකි වචන භාවිත කර, වසමින්න සහ පැහැදිලිව කතා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "අපාෂියා (Aphasia) ඇති පුද්ගලයෙකුට වකවස් කතා කළ යුතුද?"
  },
  {
    "id": "lesson-06-q045",
    "moduleId": "lesson-06",
    "number": 45,
    "question": "What do you use besides language when communicating with someone with aphasia?",
    "options": [
      "Pictures, photos, hand gestures, etc., can be used. (පින්නූර, ඡායාරූප, අත් චලනයන්න වැනි දේ භාවිත කළ හැක.)",
      "Loud sirens and bells (ශ්‍බ්ද නඟන සයිරන්න සහ සීනු)",
      "Confusing technical jargon (පටලැවවන තාක්ෂණික වචන)",
      "Turning off all lights (සියලුම විදුලි පහන්න නිවා දැමීම)"
    ],
    "correctIndex": 0,
    "explanation": "Pictures, photos, hand gestures, etc., can be used. (පින්නූර, ඡායාරූප, අත් චලනයන්න වැනි දේ භාවිත කළ හැක.)",
    "kind": "mcq",
    "sinhalaText": "අපාෂියා (Aphasia) ඇති පුද්ගලයෙකු සමඟ සන්නිවේදනවේදී භාෂාවට අමතරව කුමක් භාවිත කළ හැකිද?"
  },
  {
    "id": "lesson-06-q046",
    "moduleId": "lesson-06",
    "number": 46,
    "question": "What do you do when someone with aphasia makes a minor slip of the tongue?",
    "options": [
      "Be careful not to point out minor slips of the tongue. (සුළු වචන වැරදි කිරීම් පෙන්නවා නොදීමට වගබලා ගත යුතුය.)",
      "Correct every word immediately in front of others (අන්න අය ඉදිරිවේ සෑම වචනයක්ම වහාම නිවැරදි කිරීම)",
      "Laugh and repeat the mistake (සිනාසී එම වැරැද්ද නැවත පැවසීම)",
      "Walk away without responding (ප්‍රතිචාර නොදක්වා ඉවතට යාම)"
    ],
    "correctIndex": 0,
    "explanation": "Be careful not to point out minor slips of the tongue. (සුළු වචන වැරදි කිරීම් පෙන්නවා නොදීමට වගබලා ගත යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "අපාෂියා ඇති පුද්ගලයෙකු සුළු වචන වැරදි කිරීමක් කළ විට කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q047",
    "moduleId": "lesson-06",
    "number": 47,
    "question": "What kind of questions do you use for someone with aphasia?",
    "options": [
      "Use closed-ended questions that can be easily answered with \"yes/no\". (\"ඔේ/නැහැ\" ලෙස පහසුවවන්න පිළිතුරු දිය හැකි සංවෘත ප්‍රශ්‍්න භාවිත කළ යුතුය.)",
      "Ask multiple open-ended questions at once (එකවර විවෘත ප්‍රශ්‍්න කිහිපයක් ඇසීම)",
      "Ask tricky riddles (පැටලැවිලි සහිත ප්‍රවහ්ළිකා ඇසීම)",
      "Avoid asking any questions at all (කිසිදු ප්‍රශ්‍්නයක් නොඅසා සිටීම)"
    ],
    "correctIndex": 0,
    "explanation": "Use closed-ended questions that can be easily answered with \"yes/no\". (\"ඔේ/නැහැ\" ලෙස පහසුවවන්න පිළිතුරු දිය හැකි සංවෘත ප්‍රශ්‍්න භාවිත කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "අපාෂියා ඇති පුද්ගලයෙකුවගන්න කුමන ආකාරවේ ප්‍රශ්‍්න ඇසිය යුතුද?"
  },
  {
    "id": "lesson-06-q048",
    "moduleId": "lesson-06",
    "number": 48,
    "question": "What are the communication characteristics of people with dementia?",
    "options": [
      "The same conversation may happen repeatedly due to decreased cognitive function. (සංජානන හැකියාව අඩු වීම නිසා එකම සංවාදය නැවත නැවත සිදුවීමයි.)",
      "They never repeat a question (ඔවුන් කිසි විවටකත් ප්‍රශ්‍්නයක් නැවත අසන්නවන්න නැත)",
      "They lose hearing in both ears immediately (ඔවුන්ට කන්න දෙකම වහාම ඇවසන්නවන්න නැති වේ)",
      "They cannot feel emotions (ඔවුන්ට හැඟීම් දැවනන්නවන්න නැත)"
    ],
    "correctIndex": 0,
    "explanation": "The same conversation may happen repeatedly due to decreased cognitive function. (සංජානන හැකියාව අඩු වීම නිසා එකම සංවාදය නැවත නැවත සිදුවීමයි.)",
    "kind": "mcq",
    "sinhalaText": "ඩිවමන්නෂියා ඇති පුද්ගලයෙකුවේ සන්නිවේදනවේ ලක්ෂණය කුමක්ද?"
  },
  {
    "id": "lesson-06-q049",
    "moduleId": "lesson-06",
    "number": 49,
    "question": "What should you keep in mind when communicating with someone with dementia?",
    "options": [
      "Speak slowly, use easy-to-understand words, and deal with empathy without rejecting. (වසමින්න කතා කර, පහසුවවන්න තේරුම්ගත හැකි වචන භාවිත කර, ප්‍රතික්වෂ්ප නොකර සානුකම්පාවවන්න කටයුතු කළ යුතුය.)",
      "Reject their feelings and argue (ඔවුන්වේ හැඟීම් ප්‍රතික්වෂ්ප කර තර්ක කිරීම)",
      "Use difficult vocabulary (අසීරු වචන භාවිත කිරීම)",
      "Rush them to answer quickly (ඉක්මනින් පිළිතුරු දෙන ලෙස ඔවුන්ට බල කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Speak slowly, use easy-to-understand words, and deal with empathy without rejecting. (වසමින්න කතාකර, පහසුවවන්න තේරුම්ගත හැකි වචන භාවිත කර, ප්‍රතික්වෂ්ප නොකර සානුකම්පාවවන්න කටයුතු කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "ඩිවමන්නෂියා ඇති පුද්ගලයෙකු සමඟ සන්නිවේදනය කිරීමේදී කුමක් ගැන සැලකිලිමත් විය යුතුද?"
  },
  {
    "id": "lesson-06-q050",
    "moduleId": "lesson-06",
    "number": 50,
    "question": "Who do you coordinate with to provide care?",
    "options": [
      "Provided as a team, coordinating not only with care workers but also with medical staff and other professional groups. (සත්කාරක සේවකයන්න පමණක් නොව, වෛද්‍ය කාර්ය මණ්ඩලය ඇතුළු අනෙකුත් වෘත්තීය කේඩායම් සමඟ සම්ෙන්නීකරණය කර කේඩායමක් ලෙස සිදු කරයි.)",
      "By working alone without telling anyone (කිසිවවකුට නොපවසා තිවම වැඩ කිරීවමන්න)",
      "Only with cleaning staff (පිරිසිදු කිරීමේ සේවකයන්න සමඟ පමණක්)",
      "Only with outside visitors (පිටතින්න පැමිවණන අමුත්තන්න සමඟ පමණක්)"
    ],
    "correctIndex": 0,
    "explanation": "Provided as a team, coordinating not only with care workers but also with medical staff and other\nprofessional groups. (සත්කාරක සේවකයන්න පමණක් නොව, වෛද්‍ය කාර්ය මණ්ඩලය ඇතුළු අනෙකුත් වෘත්තීය කේඩායම් සමඟ සම්ෙන්නීකරණය කර කේඩායමක් ලෙස සිදු කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක සේවාව කා සමඟ සම්ෙන්නීකරණය කර සිදු කරන්නේද?"
  },
  {
    "id": "lesson-06-q051",
    "moduleId": "lesson-06",
    "number": 51,
    "question": "What is the purpose of sharing information as a team?",
    "options": [
      "To provide better care service to the care recipient. (සේවාලාභියාට වඩා හොඳ සත්කාරක සේවාවක් ලබා දීම සඳහාය.)",
      "To gossip about staff members (කාර්ය මේඩල සාමාජිකයන්න ගැන ඕපාදූප කතා කිරීමට)",
      "To reduce communication with doctors (වෛද්‍යවරුන්න සමඟ සන්නිවේදනය අඩු කිරීමට)",
      "To post updates publicly (යාවත්කාලීන කිරීම් ප්‍රසිද්ධිවේ පළ කිරීමට)"
    ],
    "correctIndex": 0,
    "explanation": "To provide better care service to the care recipient. (සේවාලාභියාට වඩා හොඳ සත්කාරක සේවාවක් ලබා දීම සඳහාය.)",
    "kind": "mcq",
    "sinhalaText": "කේඩායමක් ලෙස තොරතුරු බෙදාගැනීමේ අරමුණ කුමක්ද?"
  },
  {
    "id": "lesson-06-q052",
    "moduleId": "lesson-06",
    "number": 52,
    "question": "What kind of information do you share as a team?",
    "options": [
      "Share information regarding care contents and medical matters. (සේවාවේ අන්නතර්ගතය සහ වෛද්‍ය කටයුතු සම්බන්ධ තොරතුරු බෙදාගනී.)",
      "Personal bank details of caregivers (සත්කාරකයන්නවේ පෞද්ගලික ැංකු විස්තර)",
      "Unrelated private rumors (අදාළ නොවන පෞද්ගලික කටකතා)",
      "Social media passwords (සමාජ මාධය මුරපද)"
    ],
    "correctIndex": 0,
    "explanation": "Share information regarding care contents and medical matters. (සේවාවේ අන්නතර්ගතය සහ වෛද්‍ය කටයුතු සම්බන්ධ තොරතුරු බෙදාගනී.)",
    "kind": "mcq",
    "sinhalaText": "කේඩායමක් ලෙස කුමන ආකාරවේ තොරතුරු බෙදාගන්නවන්නද?"
  },
  {
    "id": "lesson-06-q053",
    "moduleId": "lesson-06",
    "number": 53,
    "question": "What methods are there for sharing information?",
    "options": [
      "Information sharing through records and information sharing through meetings. (වාර්තා මඟින්න තොරතුරු බෙදා ගැනීම සහ රැස්වීම් මඟින්න තොරතුරු බෙදාගැනීම ඇත.)",
      "Whispering in corridors only (වකාරිඩෝවල වකාඳුරමින්න පමණක්)",
      "Posting on social media (සමාජ මාධයවල පළ කිරීම)",
      "Guessing from memory without notes (සටහන් නොමැතිව මතකවයන්න අනුමාන කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Information sharing through records and information sharing through meetings. (වාර්තා මඟින්න තොරතුරුබෙදා ගැනීම සහ රැස්වීම් මඟින්න තොරතුරු බෙදාගැනීම ඇත.)",
    "kind": "mcq",
    "sinhalaText": "තොරතුරු බෙදාගැනීමේ ක්‍රම මොනවාද?"
  },
  {
    "id": "lesson-06-q054",
    "moduleId": "lesson-06",
    "number": 54,
    "question": "What is included in information sharing through records?",
    "options": [
      "Care plans, incident reports, and shift/handover notebooks. (සත්කාරක සැලැස්ම, සිද්ධි වාර්තා සහ මුර මාරු සටහන් පොත් වැනි දේ ඇත.)",
      "Personal diaries of visitors (අමුත්තන්නවේ පෞද්ගලික දිනපොත්)",
      "Grocery shopping receipts (සිල්ලර ඩු මිලදී ගැනීමේ රිසිටපත්)",
      "Unverified rumors (තහවුරු නොකළ කටකතා)"
    ],
    "correctIndex": 0,
    "explanation": "Care plans, incident reports, and shift/handover notebooks. (සත්කාරක සැලැස්ම, සිද්ධි වාර්තා සහ මුර මාරු සටහන් පොත් වැනි දේ ඇත.)",
    "kind": "mcq",
    "sinhalaText": "වාර්තා මඟින්න තොරතුරු බෙදාගැනීමට අයත් වන දේවල් මොනවාද?"
  },
  {
    "id": "lesson-06-q055",
    "moduleId": "lesson-06",
    "number": 55,
    "question": "What is information sharing through meetings?",
    "options": [
      "Sharing necessary information with the team during a meeting. (රැස්වීමකදී අවශ්‍ය තොරතුරු කේඩායම සමඟ බෙදා ගැනීමයි.)",
      "Holding a secret vote without care staff (සත්කාර කාර්ය මණ්ඩලය නොමැතිව රහස් ඡන්නදයක් පැවැත්වීම)",
      "Reading old newspapers together (පැරණි පුවත්පත් එකට කියවීම)",
      "Ignoring new care observations (නව සත්කාර නිරීක්ෂණ නොසලකා හැරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Sharing necessary information with the team during a meeting. (රැස්වීමකදී අවශ්‍ය තොරතුරු කේඩායම සමඟ බෙදා ගැනීමයි.)",
    "kind": "mcq",
    "sinhalaText": "රැස්වීම් මඟින්න තොරතුරු බෙදාගැනීම යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q056",
    "moduleId": "lesson-06",
    "number": 56,
    "question": "What is the significance of records in caregiving?",
    "options": [
      "To provide better care service. (වඩා හොඳ සත්කාරක සේවාවක් ලබා දීම සඳහාය.)",
      "To blame individual workers (ති සේවකයන්නට වදාස් පැවරීමට)",
      "To fill extra pages at month-end (මාසය අවසානවේ අමතර පිටු පිරවීමට)",
      "To avoid talking with colleagues (සගයන්න සමඟ කතා කිරීවමන්න වැළකීමට)"
    ],
    "correctIndex": 0,
    "explanation": "To provide better care service. (වඩා හොඳ සත්කාරක සේවාවක් ලබා දීම සඳහාය.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක සේවාවේදී වාර්තා තැබීමේ වැදගත්කම කුමක්ද?"
  },
  {
    "id": "lesson-06-q057",
    "moduleId": "lesson-06",
    "number": 57,
    "question": "How do records relate to the practice of team care?",
    "options": [
      "Records are necessary to successfully implement team care. (කේඩායම් සත්කාරය සාර්ථකව ක්‍රියාත්මක කිරීමට වාර්තා අවශ්‍ය වේ.)",
      "Team care works better without any records (කිසිදු වාර්තාවක් නොමැතිව කේඩායම් සත්කාරය වඩා හොඳින් ක්‍රියා කරයි)",
      "Records are only for external auditors (වාර්තා ාහිර විගණකවරුන්නට පමණි)",
      "Records replace team meetings (වාර්තා මඟින්න කේඩායම් රැස්වීම් ප්‍රතිස්ථාපනය කෙරේ)"
    ],
    "correctIndex": 0,
    "explanation": "Records are necessary to successfully implement team care. (කේඩායම් සත්කාරය සාර්ථකව ක්‍රියාත්මක කිරීමට වාර්තා අවශ්‍ය වේ.)",
    "kind": "mcq",
    "sinhalaText": "කේඩායම් සත්කාර සේවාව ක්‍රියාත්මක කිරීමට වාර්තා සම්බන්ධ වන්නේ වකවස්ද?"
  },
  {
    "id": "lesson-06-q058",
    "moduleId": "lesson-06",
    "number": 58,
    "question": "When do you write care records?",
    "options": [
      "Write them immediately while your memory is clear. (මතකය නිවැරදිව පවතින අවස්ථාවේදීම (වහාම) ලිවිය යුතුය.)",
      "A week later from memory (සතියකට පසු මතකවයන්න)",
      "Only when a user complains (පරිශීලකයෙකු පැමිණිලි කරන විට පමණක්)",
      "Before observing the user (පරිශීලකයා නිරීක්ෂණය කිරීමට පෙර)"
    ],
    "correctIndex": 0,
    "explanation": "Write them immediately while your memory is clear. (මතකය නිවැරදිව පවතින අවස්ථාවේදීම (වහාම) ලිවිය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක වාර්තා ලියන්නවන්න කවදාද?"
  },
  {
    "id": "lesson-06-q059",
    "moduleId": "lesson-06",
    "number": 59,
    "question": "How do you record the date and time in care records?",
    "options": [
      "Record the date and time accurately. (දිනය සහ වේලාව නිවැරදිව සටහන් කළ යුතුය.)",
      "Leave the time blank (වේලාව හිස්ව තෙන්නන)",
      "Write an approximate guess without checking (පරීක්ෂා නොකර දළ අනුමානයක් ලියන්නන)",
      "Write only the month name (මාසවේ නම පමණක් ලියන්නන)"
    ],
    "correctIndex": 0,
    "explanation": "Record the date and time accurately. (දිනය සහ වේලාව නිවැරදිව සටහන් කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක වාර්තාවල දිනය සහ වේලාව වකවස් සටහන් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q060",
    "moduleId": "lesson-06",
    "number": 60,
    "question": "What do you record in care records?",
    "options": [
      "Record actual facts/events. (සත්‍ය සිදුවීම් සටහන් කරයි.)",
      "Personal assumptions and guesses (පෞද්ගලික උපකල්පන සහ අනුමාන)",
      "Exaggerated stories (විශාල කර දැක්වූ කතා)",
      "Private jokes among staff (කාර්ය මණ්ඩලය අතර පෞද්ගලික විහිළු)"
    ],
    "correctIndex": 0,
    "explanation": "Record actual facts/events. (සත්‍ය සිදුවීම් සටහන් කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක වාර්තාවල සටහන් කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-06-q060-b",
    "moduleId": "lesson-06",
    "number": 60,
    "question": "What do you record in care records?",
    "options": [
      "Record actual facts/events. (සත්‍ය සිදුවීම් සටහන් කරයි.)",
      "Personal assumptions and guesses (පෞද්ගලික උපකල්පන සහ අනුමාන)",
      "Exaggerated stories (විශාල කර දැක්වූ කතා)",
      "Private jokes among staff (කාර්ය මණ්ඩලය අතර පෞද්ගලික විහිළු)"
    ],
    "correctIndex": 0,
    "explanation": "Record actual facts/events. (සත්‍ය සිදුවීම් සටහන් කරයි.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක වාර්තාවල සටහන් කරන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-06-q061",
    "moduleId": "lesson-06",
    "number": 61,
    "question": "What are subjective facts?",
    "options": [
      "What the care recipient saw, their experiences, complaints, etc. (සේවාලාභියා දුටු දේ, ඔහුවේ/ඇයවේ අත්දැකීම් සහ පැමිණිලි වැනි වද්ය.)",
      "Measured blood pressure and body temperature (මින ලද රුධිර පීඩනය සහ ශරීර උෂ්ණත්වය)",
      "Laboratory test numbers (රසායනාගාර පරීක්ෂණ අගයන්න)",
      "Clock time on the wall (බිත්තිවේ ඔරලෝසුවේ වේලාව)"
    ],
    "correctIndex": 0,
    "explanation": "What the care recipient saw, their experiences, complaints, etc. (සේවාලාභියා දුටු දේ, ඔහුවේ/ඇයවේඅත්දැකීම් සහ පැමිණිලි වැනි වද්ය.)",
    "kind": "mcq",
    "sinhalaText": "ආත්මීය කරුණු (subjective facts) යනු මොනවාද?"
  },
  {
    "id": "lesson-06-q062",
    "moduleId": "lesson-06",
    "number": 62,
    "question": "What are objective facts?",
    "options": [
      "What the caregiver observed, blood pressure, body temperature, test data, etc. (සත්කාරකයා නිරීක්ෂණය කළ දේ, රුධිර පීඩනය, ශරීර උෂ්ණත්වය සහ පරීක්ෂණ දත්ත වැනි වද්ය.)",
      "What the user dreamed about (පරිශීලකයා දුටු සිහින)",
      "A caregiver's personal hunch (සත්කාරකයාවේ පෞද්ගලික අනුමානය)",
      "Unspoken feelings (ප්‍රකාශ්‍ නොකළ හැඟීම්)"
    ],
    "correctIndex": 0,
    "explanation": "What the caregiver observed, blood pressure, body temperature, test data, etc. (සත්කාරකයානිරීක්ෂණය කළ දේ, රුධිර පීඩනය, ශරීර උෂ්ණත්වය සහ පරීක්ෂණ දත්ත වැනි වද්ය.)",
    "kind": "mcq",
    "sinhalaText": "වස්තු විෂය මූලික කරුණු (objective facts) යනු මොනවාද?"
  },
  {
    "id": "lesson-06-q063",
    "moduleId": "lesson-06",
    "number": 63,
    "question": "What kind of content should be written in records?",
    "options": [
      "Record clear content that can be understood at a single reading. (එකවර කියවීවමන්න තේරුම්ගත හැකි ආකාරවේ පැහැදිලි අන්නතර්ගතයක් වාර්තාකළ යුතුය.)",
      "Confusing abbreviations only (පැටලැවවන කෙටි වයදුම් පමණක්)",
      "Illegible rushed notes (කියවිය නොහැකි ඉක්මන්න සටහන්)",
      "Long irrelevant stories (අදාළ නොවන දිගු කතා)"
    ],
    "correctIndex": 0,
    "explanation": "Record clear content that can be understood at a single reading. (එකවර කියවීවමන්න තේරුම්ගත හැකිආකාරවේ පැහැදිලි අන්නතර්ගතයක් වාර්තා කළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "වාර්තාවල කුමන ආකාරවේ අන්නතර්ගතයක් ලිවිය යුතුද?"
  },
  {
    "id": "lesson-06-q064",
    "moduleId": "lesson-06",
    "number": 64,
    "question": "What should be made clear in records?",
    "options": [
      "Clearly write When, Where, Who, What, Why, and How. (කවදාද, වකාවහ්ද, කවුද, කුමක්ද, ඇයි සහ වකාවහාමද යන කරුණු පැහැදිලිව ලිවිය යුතුය.)",
      "Only the caregiver's name (සත්කාරකයාවේ නම පමණක්)",
      "Only the weather outside (පිටත කාලගුණය පමණක්)",
      "Only the meal menu (ආහාර වට්ටෝරුව පමණක්)"
    ],
    "correctIndex": 0,
    "explanation": "Clearly write When, Where, Who, What, Why, and How. (කවදාද, වකාවහ්ද, කවුද, කුමක්ද, ඇයි සහ වකාවහාමද යන කරුණු පැහැදිලිව ලිවිය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "වාර්තාවල කුමන කරුණු පැහැදිලිව ලිවිය යුතුද?"
  },
  {
    "id": "lesson-06-q065",
    "moduleId": "lesson-06",
    "number": 65,
    "question": "What must caregivers do regarding information management?",
    "options": [
      "Must pay strict and sufficient attention to information management. (තොරතුරු කළමනාකරණය සම්බන්ධවයන්න ප්‍රමාණවත් ලෙස දැඩිසැලකිල්ලක් දැක්විය යුතුය.)",
      "Leave notebooks open in public areas (සටහන් පොත් පොදු ස්ථානවල විවෘතව තැබීම)",
      "Share records with strangers (නාඳුනන අය සමඟ වාර්තා බෙදා ගැනීම)",
      "Treat privacy lightly (පෞද්ගලිකත්වය සැහැල්ලුවට ගැනීම)"
    ],
    "correctIndex": 0,
    "explanation": "Must pay strict and sufficient attention to information management. (තොරතුරු කළමනාකරණය සම්බන්ධවයන්න ප්‍රමාණවත් ලෙස දැඩි සැලකිල්ලක් දැක්විය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "සත්කාරක සේවකයන්න තොරතුරු කළමනාකරණය සම්බන්ධවයන්න කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q066",
    "moduleId": "lesson-06",
    "number": 66,
    "question": "Why is the protection of personal information and preservation of confidentiality strongly demanded?",
    "options": [
      "Strongly demanded as a professional ethic for workers. (වෘත්තිකයන්නවේ වෘත්තීය ආචාරධර්මයක් ලෙස දැඩි ලෙස අවප්ක්ෂා කරයි.)",
      "Optional depending on mood (මනෝභාවය අනුව විකල්ප වේ)",
      "Only for new trainees (නව පුහුණුලාභීන්නට පමණි)",
      "Only during night shifts (රාත්‍රී වැඩ මුරවලදී පමණි)"
    ],
    "correctIndex": 0,
    "explanation": "Strongly demanded as a professional ethic for workers. (වෘත්තිකයන්නවේ වෘත්තීය ආචාරධර්මයක් ලෙස දැඩිවලස අවප්ක්ෂා කරයි.)",
    "kind": "mcq",
    "sinhalaText": "පුද්ගලික තොරතුරු ආරක්ෂා කිරීම සහ රහසයභාවය පවත්වා ගැනීම කුමක් ලෙස අවප්ක්ෂා කරන්නේද?"
  },
  {
    "id": "lesson-06-q067",
    "moduleId": "lesson-06",
    "number": 67,
    "question": "What is required when sharing personal information?",
    "options": [
      "Obtaining the relevant consent from the care recipient. (සේවාලාභියාවගන්න ඊට අදාළ කැමැත්ත ලබා ගැනීම අවශ්‍ය වේ.)",
      "Asking a neighbor's permission (අසල්වැසියෙකුවේ අවසරය ඉල්ලීම)",
      "Posting online to see reactions (ප්‍රතිචාර ැලීමට අන්නතර්ජාලවේ පළ කිරීම)",
      "No consent is ever needed (කිසිදු කැමැත්තක් අවශ්‍ය නොවේ)"
    ],
    "correctIndex": 0,
    "explanation": "Obtaining the relevant consent from the care recipient. (සේවාලාභියාවගන්න ඊට අදාළ කැමැත්ත ලබා ගැනීම අවශ්‍ය වේ.)",
    "kind": "mcq",
    "sinhalaText": "පුද්ගලික තොරතුරු බෙදාගැනීමේදී අවශ්‍ය වන්නේ කුමක්ද?"
  },
  {
    "id": "lesson-06-q068",
    "moduleId": "lesson-06",
    "number": 68,
    "question": "What kind of things are considered personal information?",
    "options": [
      "Name, address, phone number, photos, etc. (නම, ලිපිනය, දුරකථන අංකය සහ ඡායාරූප වැනි වද්ය.)",
      "Public weather forecasts (ප්‍රසිද්ධ කාලගුණ අනාවැකි)",
      "General safety rules (සාමානය ආරක්ෂක නීති)",
      "Clock face directions (ඔරලෝසු මුහුණවත් දිශ්‍ාවන්න)"
    ],
    "correctIndex": 0,
    "explanation": "Name, address, phone number, photos, etc. (නම, ලිපිනය, දුරකථන අංකය සහ ඡායාරූප වැනි වද්ය.)",
    "kind": "mcq",
    "sinhalaText": "පුද්ගලික තොරතුරු ලෙස සැලවකන දේවල් මොනවාද?"
  },
  {
    "id": "lesson-06-q069",
    "moduleId": "lesson-06",
    "number": 69,
    "question": "What should you do outside the workplace to protect personal information?",
    "options": [
      "Do not talk about care recipients or workplace matters outside the workplace. (සේවා ස්ථානවයන්න පිටතදී සේවාලාභීන්න හෝ සේවා ස්ථානය සම්බන්ධ කරුණු ගැන කතා නොකළ යුතුය.)",
      "Discuss user health details at cafes (ආපනශ්‍ාලාවල පරිශීලකයන්වේ සෞඛය විස්තර සාකච්ඡා කිරීම)",
      "Share photos with friends (මිතුරන්න සමඟ ඡායාරූප බෙදා ගැනීම)",
      "Read care notebooks on public transport (පොදු ප්‍රවාහනවේදී සත්කාර සටහන් පොත් කියවීම)"
    ],
    "correctIndex": 0,
    "explanation": "Do not talk about care recipients or workplace matters outside the workplace. (සේවා ස්ථානවයන්න පිටතදීවස්වාලාභීන්න හෝ සේවා ස්ථානය සම්බන්ධ කරුණු ගැන කතා නොකළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "පුද්ගලික තොරතුරු ආරක්ෂා කිරීම සඳහා සේවා ස්ථානවයන්න පිටතදී කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q070",
    "moduleId": "lesson-06",
    "number": 70,
    "question": "What must not be done on the internet or SNS?",
    "options": [
      "Must not post information about care recipients or the workplace on the internet or SNS. (අන්නතර්ජාලය හෝ සමාජ මාධය වල සේවාලාභීන්න හෝ සේවා ස්ථානය සම්බන්ධ තොරතුරු පළ නොකළ යුතුය.)",
      "Watch training videos (පුහුණු වීඩියෝ නැරඹීම)",
      "Look up official care guidelines (නිල සත්කාර මාර්ගෝපදේශ්‍ වසවීම)",
      "Check exam schedules (විභාග කාලසටහන් පරීක්ෂා කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Must not post information about care recipients or the workplace on the internet or SNS.\n(අන්නතර්ජාලය හෝ සමාජ මාධය වල සේවාලාභීන්න හෝ සේවා ස්ථානය සම්බන්ධ තොරතුරු පළ නොකළ යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "අන්නතර්ජාලය හෝ සමාජ මාධය හරහා කුමක් නොකළ යුතුද?"
  },
  {
    "id": "lesson-06-q071",
    "moduleId": "lesson-06",
    "number": 71,
    "question": "What is consultation (Soudan)?",
    "options": [
      "Seeking advice and opinions from other staff members or experts when you have difficulty or do not know something. (අපහසුතාවයක්හෝ නොදන්නනා වදයක් ඇති විට වෙනත් සේවකයෙකුවගන්න හෝ විවශ්‍්ෂඥයෙකුවගන්න උපවදස් හා අදහස් ලබාගැනීමයි.)",
      "Hiding a problem from everyone (සැමවගන්නම ගැටලුවක් සඟවා තැබීම)",
      "Guessing without asking (නොඅසා අනුමාන කිරීම)",
      "Refusing help from specialists (විවශ්‍්ෂඥයන්නවේ උදේ ප්‍රතික්වෂ්ප කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Seeking advice and opinions from other staff members or experts when you have difficulty or do not\nknow something. (අපහසුතාවයක් හෝ නොදන්නනා වදයක් ඇති විට වෙනත් සේවකයෙකුවගන්න හෝ විවශ්‍්ෂඥයෙකුවගන්න උපවදස් හා අදහස් ලබාගැනීමයි.)",
    "kind": "mcq",
    "sinhalaText": "උපවදස් පැතීම (Consultation / Soudan) යනු කුමක්ද?"
  },
  {
    "id": "lesson-06-q072",
    "moduleId": "lesson-06",
    "number": 72,
    "question": "What should you do when you are troubled or worried?",
    "options": [
      "Do not make decisions alone; discuss with others and seek advice. (තිවම පමණක් තීරණ නොගෙන, අන්න අය සමඟ සාකච්ඡා කර උපවදස්ලබාගත යුතුය.)",
      "Keep it secret and ignore it (එය රහසක්ව තබා නොසලකා හැරීම)",
      "Blame the care recipient (සේවාලාභියාට වදාස් පැවරීම)",
      "Leave the workplace immediately without notice (දැනුම් දීමකින්න වතාරව වහාම සේවා ස්ථානවයන්න පිටව යාම)"
    ],
    "correctIndex": 0,
    "explanation": "Do not make decisions alone; discuss with others and seek advice. (තිවම පමණක් තීරණ නොගෙන,\nඅන්න අය සමඟ සාකච්ඡා කර උපවදස් ලබාගත යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "යම් ගැටලුවකදී කරදරයකට පත් වූ විට කුමක් කළ යුතුද?"
  },
  {
    "id": "lesson-06-q073",
    "moduleId": "lesson-06",
    "number": 73,
    "question": "What should be written clearly in a care record regarding time and facts?",
    "options": [
      "Accurate date and time along with actual facts/events (සත්‍ය සිදුවීම් සමඟ නිවැරදි දිනය සහ වේලාව)",
      "Personal assumptions and guesses (පෞද්ගලික උපකල්පන සහ අනුමාන)",
      "Unrelated private rumors (අදාළ නොවන පෞද්ගලික කටකතා)",
      "Information posted on SNS (SNS හි පළ කළ තොරතුරු)"
    ],
    "correctIndex": 0,
    "explanation": "Accurate date and time along with actual facts/events (සත්‍ය සිදුවීම් සමඟ නිවැරදි දිනය සහ වේලාව)",
    "kind": "mcq",
    "sinhalaText": "කාලය සහ කරුණු සම්බන්ධවයන්න සත්කාරක වාර්තාවක පැහැදිලිව ලිවිය යුත්තේ කුමක්ද?"
  },
  {
    "id": "lesson-06-q074",
    "moduleId": "lesson-06",
    "number": 74,
    "question": "Which of the following is an example of personal information that requires protection and consent before sharing?",
    "options": [
      "Name, address, phone number, and photos (නම, ලිපිනය, දුරකථන අංකය සහ ඡායාරූප)",
      "Daily menu board in a public cafeteria (පොදු ආපනශ්‍ාලාවක වදික ආහාර වමනුව)",
      "General handwashing instructions (සාමානය අත් වස්දීමේ උපවදස්)",
      "Care plan review schedule (සත්කාර සැලැස්ම සමාලෝචන කාලසටහන)"
    ],
    "correctIndex": 0,
    "explanation": "Name, address, phone number, and photos (නම, ලිපිනය, දුරකථන අංකය සහ ඡායාරූප",
    "kind": "mcq",
    "sinhalaText": "බෙදා ගැනීමට පෙර ආරක්ෂා කිරීම සහ කැමැත්ත අවශ්‍ය වන පුද්ගලික තොරතුරකට උදාහරණයක් පහත ඒවායින්න කුමක්ද?"
  },
  {
    "id": "lesson-07-q001",
    "moduleId": "lesson-07",
    "number": 1,
    "question": "It refers to a state of mind to positively do something :",
    "options": [
      "Emotions (හැඟීම් / Emotions)",
      "Will (කැමැත්ත / අධිෂ්ඨානය / Will)",
      "Mind (මනස / Mind)",
      "Stress (මානසික ආතතිය / Stress)"
    ],
    "correctIndex": 1,
    "explanation": "Will (කැමැත්ත / අධිෂ්ඨානය / Will)",
    "kind": "mcq",
    "sinhalaText": "ධනාත්මකව යමක් කිරීමට ඇති මානසික තත්ත්වය මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q002",
    "moduleId": "lesson-07",
    "number": 2,
    "question": "It refers to a state of strain in the mind and body :",
    "options": [
      "Emotions (හැඟීම් / Emotions)",
      "Will (කැමැත්ත / Will)",
      "Mind (මනස / Mind)",
      "Stress (මානසික ආතතිය / Stress)"
    ],
    "correctIndex": 3,
    "explanation": "Stress (මානසික ආතතිය / Stress)",
    "kind": "mcq",
    "sinhalaText": "මනසෙහි සහ ශරීරයෙහි ඇතිවන ආතතිමය/පීඩාකාරී තත්ත්වය මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q003",
    "moduleId": "lesson-07",
    "number": 3,
    "question": "The following are the causes of stress, EXCEPT :",
    "options": [
      "Noise (ශබ්දය / ඝෝෂාව / Noise)",
      "Temperature (උෂ්ණත්වය / Temperature)",
      "Over-eating (අධික මෙස ආහාර ගැනීම / Over-eating)",
      "Fatique (මතමහට්ටුව / Fatigue)"
    ],
    "correctIndex": 2,
    "explanation": "Over-eating (අධික මෙස ආහාර ගැනීම / Over-eating) (Noise, temperature extremes, and fatigue are\nphysical stressors; over-eating is typically a behavioral reaction/consequence rather than a primary environmental/physical cause in the\ntextbook list.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා මානසික ආතතියට (stress) හේතු වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q004",
    "moduleId": "lesson-07",
    "number": 4,
    "question": "The following are the process of memory, EXCEPT :",
    "options": [
      "Remember (මතක තබා ගැනීම / Remember)",
      "Memorization (මතකයට ඇතුළත් කර ගැනීම / Memorization)",
      "Retention (රඳවා තබා ගැනීම / Retention)",
      "Recall (නැවත සිහිපත් කිරීම / Recall)"
    ],
    "correctIndex": 0,
    "explanation": "Remember (මතක තබා ගැනීම / Remember) (The three stages of memory are Memorization/Encoding,\nRetention/Storage, and Recall/Retrieval.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා මතක ක්‍රියාවලියට (process of memory) අයත් වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q005",
    "moduleId": "lesson-07",
    "number": 5,
    "question": "A process of memory which is to memorize new things :",
    "options": [
      "Remember (මතක තබා ගැනීම / Remember)",
      "Memorization (මතකයට ඇතුළත් කර ගැනීම / Memorization)",
      "Retention (රඳවා තබා ගැනීම / Retention)",
      "Recall (නැවත සිහිපත් කිරීම / Recall)"
    ],
    "correctIndex": 1,
    "explanation": "Memorization (මතකයට ඇතුළත් කර ගැනීම / Memorization)",
    "kind": "mcq",
    "sinhalaText": "අලුත් දේවල් මතකයට ඇතුළත් කර ගැනීමේ මතක ක්‍රියාවලිය වන්නේ:"
  },
  {
    "id": "lesson-07-q006",
    "moduleId": "lesson-07",
    "number": 6,
    "question": "A process of memory which is to bring the information back into your mind :",
    "options": [
      "Remember (මතක තබා ගැනීම / Remember)",
      "Memorization (මතකයට ඇතුළත් කර ගැනීම / Memorization)",
      "Retention (රඳවා තබා ගැනීම / Retention)",
      "Recall (නැවත සිහිපත් කිරීම / Recall)"
    ],
    "correctIndex": 3,
    "explanation": "Recall (නැවත සිහිපත් කිරීම / Recall)",
    "kind": "mcq",
    "sinhalaText": "තොරතුරු නැවත ඔබේ මනසට ගෙන ඒමේ (සිහිපත් කිරීමේ) මතක ක්‍රියාවලිය වන්නේ:"
  },
  {
    "id": "lesson-07-q007",
    "moduleId": "lesson-07",
    "number": 7,
    "question": "A process of memory which is to retain the information :",
    "options": [
      "Remember (මතක තබා ගැනීම / Remember)",
      "Memorization (මතකයට ඇතුළත් කර ගැනීම / Memorization)",
      "Retention (රඳවා තබා ගැනීම / Retention)",
      "Recall (නැවත සිහිපත් කිරීම / Recall)"
    ],
    "correctIndex": 2,
    "explanation": "Retention (රඳවා තබා ගැනීම / Retention)",
    "kind": "mcq",
    "sinhalaText": "තොරතුරු මතකයේ රඳවා තබා ගැනීමේ ක්‍රියාවලිය වන්නේ:"
  },
  {
    "id": "lesson-07-q008",
    "moduleId": "lesson-07",
    "number": 8,
    "question": "Kinds of memory which is temporary memory:",
    "options": [
      "Long-term (දිගුකාලීන මතකය / Long-term)",
      "Procedural (ක්‍රියාපටිපාටික මතකය / Procedural)",
      "Short-term (කෙටිකාලීන මතකය / Short-term)",
      "Semantic (අර්ථකථන/දැනුම පිළිබඳ මතකය / Semantic)"
    ],
    "correctIndex": 2,
    "explanation": "Short-term (කෙටිකාලීන මතකය / Short-term)",
    "kind": "mcq",
    "sinhalaText": "තාවකාලික මතකය (temporary memory) වන මතක වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q009",
    "moduleId": "lesson-07",
    "number": 9,
    "question": "Kinds of memory which is retained for a long time :",
    "options": [
      "Long-term (දිගුකාලීන මතකය / Long-term)",
      "Procedural (ක්‍රියාපටිපාටික මතකය / Procedural)",
      "Short-term (කෙටිකාලීන මතකය / Short-term)",
      "Semantic (අර්ථකථන මතකය / Semantic)"
    ],
    "correctIndex": 0,
    "explanation": "Long-term (දිගුකාලීන මතකය / Long-term)",
    "kind": "mcq",
    "sinhalaText": "දිගු කාෙයක් රඳවා තබා ගන්නා මතක වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q010",
    "moduleId": "lesson-07",
    "number": 10,
    "question": "Kinds of long term memory which is memory of knowledge:",
    "options": [
      "Long-term (දිගුකාලීන / Long-term)",
      "Procedural (ක්‍රියාපටිපාටික / Procedural)",
      "Short-term (කෙටිකාලීන / Short-term)",
      "Semantic (අර්ථකථන මතකය / Semantic)"
    ],
    "correctIndex": 3,
    "explanation": "Semantic (අර්ථකථන මතකය / Semantic)",
    "kind": "mcq",
    "sinhalaText": "දැනුම පිළිබඳ මතකය (memory of knowledge) වන දිගුකාලීන මතක වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q011",
    "moduleId": "lesson-07",
    "number": 11,
    "question": "Kinds of long term memory which is memory of experience and specific events :",
    "options": [
      "Episodic (සිදුවීම් පිළිබඳ මතකය / Episodic)",
      "Procedural (ක්‍රියාපටිපාටික මතකය / Procedural)",
      "Short-term (කෙටිකාලීන මතකය / Short-term)",
      "Semantic (අර්ථකථන මතකය / Semantic)"
    ],
    "correctIndex": 0,
    "explanation": "Episodic (සිදුවීම් පිළිබඳ මතකය / Episodic)",
    "kind": "mcq",
    "sinhalaText": "අත්දැකීම් සහ විශේෂිත සිදුවීම් පිළිබඳ මතකය වන දිගුකාලීන මතක වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q012",
    "moduleId": "lesson-07",
    "number": 12,
    "question": "Kind of long term memory which is memory that is unconsciously remembered :",
    "options": [
      "Episodic (සිදුවීම් පිළිබඳ මතකය / Episodic)",
      "Procedural (ක්‍රියාපටිපාටික මතකය / Procedural)",
      "Priming (ප්‍රයිමින් මතකය / Priming)",
      "Semantic (අර්ථකථන මතකය / Semantic)"
    ],
    "correctIndex": 2,
    "explanation": "Priming (ප්‍රයිමින් මතකය / Priming)",
    "kind": "mcq",
    "sinhalaText": "අවිඥානිකව (නොදැනුවත්වම) මතක තබා ගන්නා දිගුකාලීන මතක වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q013",
    "moduleId": "lesson-07",
    "number": 13,
    "question": "Kinds of long term memory which is memory that one's body remembers:",
    "options": [
      "Episodic (සිදුවීම් පිළිබඳ මතකය / Episodic)",
      "Procedural (ක්‍රියාපටිපාටික මතකය / Procedural)",
      "Priming (ප්‍රයිමින් මතකය / Priming)",
      "Semantic (අර්ථකථන මතකය / Semantic)"
    ],
    "correctIndex": 1,
    "explanation": "Procedural (ක්‍රියාපටිපාටික මතකය / Procedural)",
    "kind": "mcq",
    "sinhalaText": "පුේගෙමයකුමේ ශරීරයට මතක තිමබන (පුරුදු/කුසෙතා) දිගුකාලීන මතක වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q014",
    "moduleId": "lesson-07",
    "number": 14,
    "question": "It refers to a state of mind in which a person wants to get something :",
    "options": [
      "Needs (අවශයතා / Needs)",
      "Safety (ආරක්ෂාව / Safety)",
      "Esteem (ආත්ම ගෞරවය / Esteem)",
      "Physiological (කායික / Physiological)"
    ],
    "correctIndex": 0,
    "explanation": "Needs (අවශයතා / Needs)",
    "kind": "mcq",
    "sinhalaText": "පුේගෙමයකුට යමක් බා ගැනීමට අවශය වන මානසික තත්ත්වය මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q015",
    "moduleId": "lesson-07",
    "number": 15,
    "question": "It is the indices that reflect the state the status of health and any unusual change :",
    "options": [
      "Homeostasis (සමස්ිතිය / Homeostasis)",
      "Vital Sign (ජීව ක්ෂණ / Vital Sign)",
      "Pulse (නාඩි / Pulse)",
      "Body Temperature (ශරීර උෂ්ණත්වය / Body Temperature)"
    ],
    "correctIndex": 1,
    "explanation": "Vital Sign (ජීව ක්ෂණ / Vital Sign)",
    "kind": "mcq",
    "sinhalaText": "සෞඛ්‍ය තත්ත්වය සහ ඕනෑම අසාමාන්‍ය වෙනසක් පිළිබිඹු කරන දර්ශක වන්නේ:"
  },
  {
    "id": "lesson-07-q016",
    "moduleId": "lesson-07",
    "number": 16,
    "question": "A biological system in the body that tries to maintain a constant change even if there is a change in the environment:",
    "options": [
      "Homeostasis (සමස්ිතිය / Homeostasis)",
      "Vital Sign (ජීව ක්ෂණ / Vital Sign)",
      "Pulse (නාඩි / Pulse)",
      "Body Temperature (ශරීර උෂ්ණත්වය / Body Temperature)"
    ],
    "correctIndex": 0,
    "explanation": "Homeostasis (සමස්ිතිය / Homeostasis)",
    "kind": "mcq",
    "sinhalaText": "පරිසරමේ වෙනසක් සිදු වුවද ශරීරයේ අභ්‍යන්තර තත්ත්වය නියතව පවත්වා ගැනීමට උත්සාහ කරන ජීව විදයාත්මක පේධතිය වන්නේ:"
  },
  {
    "id": "lesson-07-q017",
    "moduleId": "lesson-07",
    "number": 17,
    "question": "It is to take oxygen into the body and get rid of carbon dioxide :",
    "options": [
      "Homeostasis (සමස්ිතිය / Homeostasis)",
      "Breathing (හුස්ම ගැනීම / Breathing)",
      "Pulse (නාඩි / Pulse)",
      "Body Temperature (ශරීර උෂ්ණත්වය / Body Temperature)"
    ],
    "correctIndex": 1,
    "explanation": "Breathing (හුස්ම ගැනීම / Breathing)",
    "kind": "mcq",
    "sinhalaText": "ශරීරයට ඔක්සිජන් බා ගැනීම සහ කාබන් ඩමයාක්සයිඩ් පිට කිරීම වන්නේ:"
  },
  {
    "id": "lesson-07-q018",
    "moduleId": "lesson-07",
    "number": 18,
    "question": "It is higher during daytime and lower during night when you are asleep:",
    "options": [
      "Homeostasis (සමස්ිතිය / Homeostasis)",
      "Breathing (හුස්ම ගැනීම / Breathing)",
      "Pulse (නාඩි / Pulse)",
      "Body temperature (ශරීර උෂ්ණත්වය / Body temperature)"
    ],
    "correctIndex": 3,
    "explanation": "Body temperature (ශරීර උෂ්ණත්වය / Body temperature)",
    "kind": "mcq",
    "sinhalaText": "දිවා කාෙමේදී වැඩි වන අතර රාත්‍රිමේදී ඔබ නිදා සිටින විට අඩු වන්නේ:"
  },
  {
    "id": "lesson-07-q019",
    "moduleId": "lesson-07",
    "number": 19,
    "question": "It is the movement of blood through arteries caused by heartbeats :",
    "options": [
      "Homeostasis (සමස්ිතිය / Homeostasis)",
      "Breathing (හුස්ම ගැනීම / Breathing)",
      "Pulse (නාඩි / Pulse)",
      "Body Temperature (ශරීර උෂ්ණත්වය / Body Temperature)"
    ],
    "correctIndex": 2,
    "explanation": "Pulse (නාඩි / Pulse)",
    "kind": "mcq",
    "sinhalaText": "හෘද ස්පන්දනය නිසා ධමනි හරහා රුධිරය ගමන් කිරීමේ කම්පනය/චෙනය වන්නේ:"
  },
  {
    "id": "lesson-07-q020",
    "moduleId": "lesson-07",
    "number": 20,
    "question": "It is the force of blood sent from the heart pushing against the walls of blood vessels (arteries):",
    "options": [
      "Blood pressure (රුධිර පීඩනය / Blood pressure)",
      "Breathing (හුස්ම ගැනීම / Breathing)",
      "Pulse (නාඩි / Pulse)",
      "Body Temperature (ශරීර උෂ්ණත්වය / Body Temperature)"
    ],
    "correctIndex": 0,
    "explanation": "Blood pressure (රුධිර පීඩනය / Blood pressure)",
    "kind": "mcq",
    "sinhalaText": "හදවමත් සිට යවන රුධිරය රුධිර නාෙ (ධමනි) බිත්ති මත ඇති කරන පීඩනය/බෙය වන්නේ:"
  },
  {
    "id": "lesson-07-q021",
    "moduleId": "lesson-07",
    "number": 21,
    "question": "Acts unconsciously and regulate the functions of internal organs :",
    "options": [
      "Nervous System (ස්නායු පේධතිය / Nervous System)",
      "Autonomic Nerves (ස්වයංසාධක ස්නායු / Autonomic Nerves)",
      "Skeletal System (අස්ි පේධතිය / Skeletal System)",
      "Muscular System (මාංශ මේශි පේධතිය / Muscular System)"
    ],
    "correctIndex": 1,
    "explanation": "Autonomic Nerves (ස්වයංසාධක ස්නායු / Autonomic Nerves)",
    "kind": "mcq",
    "sinhalaText": "අවිඥානිකව (ඉමබ්ම) ක්‍රියා කරමින් අභ්‍යන්තර අවයවවෙ ක්‍රියාකාරිත්වය නියාමනය කරන්නේ:"
  },
  {
    "id": "lesson-07-q022",
    "moduleId": "lesson-07",
    "number": 22,
    "question": "It relays information between the central nervous system and the organs of the body:",
    "options": [
      "Nervous System (ස්නායු පේධතිය / Nervous System)",
      "Autonomic Nerves (ස්වයංසාධක ස්නායු / Autonomic Nerves)",
      "Central Nerves (මධයම ස්නායු / Central Nerves)",
      "Peripheral Nerves (පර්යන්ත ස්නායු / Peripheral Nerves)"
    ],
    "correctIndex": 3,
    "explanation": "Peripheral Nerves (පර්යන්ත ස්නායු / Peripheral Nerves)",
    "kind": "mcq",
    "sinhalaText": "මධයම ස්නායු පේධතිය සහ ශරීරයේ අවයව අතර තොරතුරු හුවමාරු කරන්නේ:"
  },
  {
    "id": "lesson-07-q023",
    "moduleId": "lesson-07",
    "number": 23,
    "question": "It acts when the person is tense such as when the person is active or feeling anxiety, anger, stress, etc..:",
    "options": [
      "Sympathetic Nerves (අනුමේගී ස්නායු / Sympathetic Nerves)",
      "Autonomic Nerves (ස්වයංසාධක ස්නායු / Autonomic Nerves)",
      "Parasympathetic Nerves (ප්‍රතයානුමේගී ස්නායු / Parasympathetic Nerves)",
      "Peripheral Nerves (පර්යන්ත ස්නායු / Peripheral Nerves)"
    ],
    "correctIndex": 0,
    "explanation": "Sympathetic Nerves (අනුමේගී ස්නායු / Sympathetic Nerves)",
    "kind": "mcq",
    "sinhalaText": "පුේගෙමයකු ක්‍රියාශීලීව සිටින විට හෝ කාංසාව, කෝපය, ආතතිය ආදිය දැමනන විට ක්‍රියා කරන්නේ:"
  },
  {
    "id": "lesson-07-q024",
    "moduleId": "lesson-07",
    "number": 24,
    "question": "The following are the major functions of skeletal system, EXCEPT :",
    "options": [
      "To protect the internal organs (අභ්‍යන්තර අවයව ආරක්ෂා කිරීම)",
      "To support the body (ශරීරයට ආධාර වීම)",
      "Maintenance of posture (ඉරියේ පවත්වා ගැනීම)",
      "Store calcium (කැල්සියම් ගබඩා කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Maintenance of posture (ඉරියේ පවත්වා ගැනීම) (In care textbooks, maintenance of posture is listed as\na primary function of the muscular system, while support, protection of organs, movement/locomotion, blood cell production, and\ncalcium storage belong to the skeletal system.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා අස්ි පේධතිමේ (skeletal system) ප්‍රධාන කාර්යයන් වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q025",
    "moduleId": "lesson-07",
    "number": 25,
    "question": "The following are the major functions of muscular system, EXCEPT :",
    "options": [
      "To protect the internal organs (අභ්‍යන්තර අවයව ආරක්ෂා කිරීම)",
      "Locomotion (සංචරණය / චෙනය වීම)",
      "Maintenance of posture (ඉරියේ පවත්වා ගැනීම)",
      "Formation of internal organs (අභ්‍යන්තර අවයව සෑදීම)"
    ],
    "correctIndex": 3,
    "explanation": "Formation of internal organs (අභ්‍යන්තර අවයව සෑදීම)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා මාංශ මේශි පේධතිමේ (muscular system) ප්‍රධාන කාර්යයන් වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q026",
    "moduleId": "lesson-07",
    "number": 26,
    "question": "The following are true about sympathetic nerves, EXCEPT :",
    "options": [
      "Pulse rate increases (නාඩි මේගය වැඩි මේ)",
      "Blood pressure goes up (රුධිර පීඩනය ඉහළ යයි)",
      "Peripheral blood vessels dilate (පර්යන්ත රුධිර නාෙ ප්‍රසාරණය මේ)",
      "Pupils dialate (ඇමස් කළු ඉංගිරියාව විශාෙ මේ)"
    ],
    "correctIndex": 2,
    "explanation": "Peripheral blood vessels dilate (පර්යන්ත රුධිර නාෙ ප්‍රසාරණය මේ) (Under sympathetic nerve\nstimulation, peripheral blood vessels constrict, not dilate.)",
    "kind": "mcq",
    "sinhalaText": "අනුමේගී ස්නායු (sympathetic nerves) පිළිබඳව පහත කරුණු සතය වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q027",
    "moduleId": "lesson-07",
    "number": 27,
    "question": "Carries oxygen, nutrients, waste products, etc... which is circulated throughout the body through blood and lymph vessels :",
    "options": [
      "Cardiovascular System (හෘද වාහිනී පේධතිය / Cardiovascular System)",
      "Respiratory System (ශ්වසන පේධතිය / Respiratory System)",
      "Digestive System (ආහාර ජීර්ණ පේධතිය / Digestive System)",
      "Urinary System (මුත්‍රා පේධතිය / Urinary System)"
    ],
    "correctIndex": 0,
    "explanation": "Cardiovascular System (හෘද වාහිනී පේධතිය / Cardiovascular System)",
    "kind": "mcq",
    "sinhalaText": "රුධිර සහ වසා නාෙ හරහා ශරීරය පුරා සංසරණය මවමින් ඔක්සිජන්, පෝෂය පදාර්ථ, අපද්‍රවය ආදිය රැගෙන යන්නේ:"
  },
  {
    "id": "lesson-07-q028",
    "moduleId": "lesson-07",
    "number": 28,
    "question": "It keeps contracting and relaxing and pushes the blood continuously like a pump :",
    "options": [
      "Lungs (පෙනහළු / Lungs)",
      "Brain (මොළය / Brain)",
      "Blood vessels (රුධිර නාෙ / Blood vessels)",
      "Heart (හදවත / Heart)"
    ],
    "correctIndex": 3,
    "explanation": "Heart (හදවත / Heart)",
    "kind": "mcq",
    "sinhalaText": "අඛ්‍ණ්ඩව සංකෝචනය මවමින් සහ ඉහිල් මවමින් මපාම්පයක් මෙන් රුධිරය තල්ලු කරන්නේ:"
  },
  {
    "id": "lesson-07-q029",
    "moduleId": "lesson-07",
    "number": 29,
    "question": "Blood vessels that carry blood that contains a lot of oxygen from the heart to the rest of the body :",
    "options": [
      "Arteries (ධමනි / Arteries)",
      "Veins (ශිරා / Veins)",
      "Capillaries (මක්ශනාලිකා / Capillaries)",
      "Blood vessels (රුධිර නාෙ / Blood vessels)"
    ],
    "correctIndex": 0,
    "explanation": "Arteries (ධමනි / Arteries)",
    "kind": "mcq",
    "sinhalaText": "ඔක්සිජන් බහුෙ රුධිරය හදවමත් සිට ශරීරයේ අනෙකුත් කොටස් මවත ගෙන යන රුධිර නාෙ වන්නේ:"
  },
  {
    "id": "lesson-07-q030",
    "moduleId": "lesson-07",
    "number": 30,
    "question": "Are branches of blood vessels between arteries and veins :",
    "options": [
      "Arteries (ධමනි / Arteries)",
      "Veins (ශිරා / Veins)",
      "Capillaries (මක්ශනාලිකා / Capillaries)",
      "Blood vessels (රුධිර නාෙ / Blood vessels)"
    ],
    "correctIndex": 2,
    "explanation": "Capillaries (මක්ශනාලිකා / Capillaries)",
    "kind": "mcq",
    "sinhalaText": "ධමනි සහ ශිරා අතර පවතින සියුම් රුධිර නාෙ ශාඛ්‍ා වන්නේ:"
  },
  {
    "id": "lesson-07-q031",
    "moduleId": "lesson-07",
    "number": 31,
    "question": "Digests and absorbs food, takes in necessary nutrients, and excretes the waste products as faces:",
    "options": [
      "Cardiovascular system (හෘද වාහිනී පේධතිය)",
      "Respiratory system (ශ්වසන පේධතිය)",
      "Digestive system (ආහාර ජීර්ණ පේධතිය)",
      "Urinary system (මුත්‍රා පේධතිය)"
    ],
    "correctIndex": 2,
    "explanation": "Digestive system (ආහාර ජීර්ණ පේධතිය)",
    "kind": "mcq",
    "sinhalaText": "ආහාර ජීර්ණය කර අවශෝෂණය කර ගනිමින්, අවශය පෝෂය පදාර්ථ බාගෙන අපද්‍රවය මළපහ මෙස බැහැර කරන්නේ:"
  },
  {
    "id": "lesson-07-q032",
    "moduleId": "lesson-07",
    "number": 32,
    "question": "Peristalsis begins when the food is sent to the",
    "options": [
      "Rectum (ගුද මාර්ගය / Rectum)",
      "Anus (ගුදය / Anus)",
      "Esophagus (ග්‍රසනිකාව / Esophagus)",
      "Stomach (ආමාශය / Stomach)"
    ],
    "correctIndex": 2,
    "explanation": "Esophagus (ග්‍රසනිකාව / Esophagus)",
    "kind": "mcq",
    "sinhalaText": "ආහාර [මෙම අවයවයට] යැවූ විට ක්‍රමාකුංචනය (Peristalsis) ආරම්භ්‍ වේ:"
  },
  {
    "id": "lesson-07-q033",
    "moduleId": "lesson-07",
    "number": 33,
    "question": "The circulation of blood from the heart to the lungs and back to the heart is called ......:",
    "options": [
      "Systemic Circulation (පේධතිගත සංසරණය / Systemic Circulation)",
      "Pulmonary Circulation (පුේුසීය සංසරණය / Pulmonary Circulation)",
      "Inferior Circulation (අධර සංසරණය / Inferior Circulation)",
      "Superior Circulation (උත්තර සංසරණය / Superior Circulation)"
    ],
    "correctIndex": 1,
    "explanation": "Pulmonary Circulation (පුේුසීය සංසරණය / Pulmonary Circulation)",
    "kind": "mcq",
    "sinhalaText": "හදවමත් සිට පෙනහළු මවතට සහ නැවත හදවතට රුධිරය සංසරණය වීම හඳුන්වන්නේ:"
  },
  {
    "id": "lesson-07-q034",
    "moduleId": "lesson-07",
    "number": 34,
    "question": "Urine is formed in the",
    "options": [
      "Bladder (මුත්‍රාශය / Bladder)",
      "Uretha (මුත්‍රා මාර්ගය / Urethra)",
      "Ureter (මුත්‍රා වාහිනිය / Ureter)",
      "Kidney (වකුගඩුව / Kidney)"
    ],
    "correctIndex": 3,
    "explanation": "Kidney (වකුගඩුව / Kidney)",
    "kind": "mcq",
    "sinhalaText": "මුත්‍රා නිපදවනු බන්නේ මෙහිදීය:"
  },
  {
    "id": "lesson-07-q035",
    "moduleId": "lesson-07",
    "number": 35,
    "question": "The following are the activities that enhances immunity, EXCEPT :",
    "options": [
      "Shortage of sleep (නින්ද මදිකම / Shortage of sleep)",
      "Laughing a lot (හොඳින් සිනාසීම / Laughing a lot)",
      "Moderate exercise (මධයස්ථ වයායාම / Moderate exercise)",
      "Keeping the body warm (ශරීරය උණුසුම්ව තබා ගැනීම / Keeping the body warm)"
    ],
    "correctIndex": 0,
    "explanation": "Shortage of sleep (නින්ද මදිකම / Shortage of sleep)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ප්‍රතිශක්තිය (immunity) වැඩි දියුණු කරන ක්‍රියාකාරකම් වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q036",
    "moduleId": "lesson-07",
    "number": 36,
    "question": "The following are the positive effects of good quality sleep. EXCEP:",
    "options": [
      "Increased immunity (ප්‍රතිශක්තිය වැඩි වීම)",
      "Relief of stress (මානසික ආතතිය දුරු වීම)",
      "Keeping the body warm (ශරීරය උණුසුම්ව තබා ගැනීම)",
      "Consolidation of memories (මතකයන් තහවුරු වීම / Consolidation of memories)"
    ],
    "correctIndex": 2,
    "explanation": "Keeping the body warm (ශරීරය උණුසුම්ව තබා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "හොඳ ගුණාත්මක නින්දක ධනාත්මක බෙපෑම් පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q037",
    "moduleId": "lesson-07",
    "number": 37,
    "question": "The following are the characteristics of Non - REM sleep, EXCEPT :",
    "options": [
      "The brain is in state of resting (මොළය විමේකී තත්ත්වයක පවතී)",
      "Shallow sleep (නොගැඹුරු නින්ද / Shallow sleep)",
      "Deep sleep (ගැඹුරු නින්ද / Deep sleep)",
      "You do not have dreams (ඔබට සිහින නොමපමන්)"
    ],
    "correctIndex": 1,
    "explanation": "Shallow sleep (නොගැඹුරු නින්ද / Shallow sleep) (In care exam definitions, Non-REM sleep is\ncharacterized as deep sleep where the brain rests and dreams do not occur, whereas REM sleep is light/shallow sleep where dreaming\noccurs.)",
    "kind": "mcq",
    "sinhalaText": "Non-REM නින්මේ ක්ෂණ පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q038",
    "moduleId": "lesson-07",
    "number": 38,
    "question": "It is caused by the fact that they are no longer able to do what they could do before :",
    "options": [
      "Sense of loss (අහිමි වීමේ හැඟීම / Sense of loss)",
      "Helplessness (අසරණභ්‍ාවය / Helplessness)",
      "Stress (මානසික ආතතිය / Stress)",
      "Anxiety and frustration (කාංසාව සහ කෙකිරීම / Anxiety and frustration)"
    ],
    "correctIndex": 0,
    "explanation": "Sense of loss (අහිමි වීමේ හැඟීම / Sense of loss)",
    "kind": "mcq",
    "sinhalaText": "පෙර කළ හැකිව තිබූ මේ තවදුරටත් කිරීමට නොහැකි වීම නිසා ඇතිවන්නේ:"
  },
  {
    "id": "lesson-07-q039",
    "moduleId": "lesson-07",
    "number": 39,
    "question": "The following are the physical changes due to aging, EXCEPT :",
    "options": [
      "Vascular walls become thinner (රුධිර නාෙ බිත්ති තුනී මේ)",
      "Hearing ability decreases (ශ්‍රවණ හැකියාව අඩු මේ)",
      "Respiratory function decreases (ශ්වසන ක්‍රියාකාරිත්වය අඩු මේ)",
      "Ability to taste reduces (රස දැනීමේ හැකියාව අඩු මේ)"
    ],
    "correctIndex": 0,
    "explanation": "Vascular walls become thinner (රුධිර නාෙ බිත්ති තුනී මේ) (With aging, arterial/vascular walls become\nthicker, stiffer, and lose elasticity rather than becoming thinner.)",
    "kind": "mcq",
    "sinhalaText": "වයසට යාම නිසා ඇතිවන ශාරීරික වෙනස්කම් පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q040",
    "moduleId": "lesson-07",
    "number": 40,
    "question": "The following are the symptoms frequently found in elderly people, EXCEPT :",
    "options": [
      "Tuberculosis (ක්ෂය රෝගය / Tuberculosis)",
      "Insomnia (නින්ද නොයාම / Insomnia)",
      "Fever (උණ / Fever)",
      "Dehydration (විජලනය / Dehydration)"
    ],
    "correctIndex": 0,
    "explanation": "Tuberculosis (ක්ෂය රෝගය / Tuberculosis) (Tuberculosis is a specific infectious disease, whereas\ninsomnia, fever, and dehydration are common general symptoms/conditions in the elderly.)",
    "kind": "mcq",
    "sinhalaText": "වැඩිහිටි පුේගෙයින් තුළ බහුෙව දක්නට ැමබන රෝග ක්ෂණ පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q041",
    "moduleId": "lesson-07",
    "number": 41,
    "question": "It refers to a state where there is lower than normal amount of fluid in the body:",
    "options": [
      "Fluid balance (තරල සමතුලිතතාවය / Fluid balance)",
      "Dehydration (විජලනය / Dehydration)",
      "Diarrhea (පාචනය / Diarrhea)",
      "Fever (උණ / Fever)"
    ],
    "correctIndex": 1,
    "explanation": "Dehydration (විජලනය / Dehydration)",
    "kind": "mcq",
    "sinhalaText": "ශරීරයේ සාමාන්‍ය ප්‍රමාණයට වඩා අඩු තරල ප්‍රමාණයක් ඇති තත්ත්වය මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q041-b",
    "moduleId": "lesson-07",
    "number": 41,
    "question": "It refers to a state where there is lower than normal amount of fluid in the body:",
    "options": [
      "Fluid balance (තරල සමතුලිතතාවය / Fluid balance)",
      "Dehydration (විජලනය / Dehydration)",
      "Diarrhea (පාචනය / Diarrhea)",
      "Fever (උණ / Fever)"
    ],
    "correctIndex": 1,
    "explanation": "Dehydration (විජලනය / Dehydration)",
    "kind": "mcq",
    "sinhalaText": "ශරීරයේ සාමාන්‍ය ප්‍රමාණයට වඩා අඩු තරල ප්‍රමාණයක් ඇති තත්ත්වය මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q042",
    "moduleId": "lesson-07",
    "number": 42,
    "question": "When you have [blank] your body temperature is higher than normal :",
    "options": [
      "Fluid balance (තරල සමතුලිතතාවය / Fluid balance)",
      "Dehydration (විජලනය / Dehydration)",
      "Diarrhea (පාචනය / Diarrhea)",
      "Fever (උණ / Fever)"
    ],
    "correctIndex": 3,
    "explanation": "Fever (උණ / Fever)",
    "kind": "mcq",
    "sinhalaText": "ඔබට [හිස්තැන] ඇති විට ඔබේ ශරීර උෂ්ණත්වය සාමාන්‍ය ප්‍රමාණයට වඩා වැඩි වේ:"
  },
  {
    "id": "lesson-07-q043",
    "moduleId": "lesson-07",
    "number": 43,
    "question": "It refers to a build up excess fluid in the body due to the reduced functions of internal organs and loss of muscle strength :",
    "options": [
      "Edema (ශෝථය / ඉදිමීම / Edema)",
      "Dehydration (විජලනය / Dehydration)",
      "Diarrhea (පාචනය / Diarrhea)",
      "Fever (උණ / Fever)"
    ],
    "correctIndex": 0,
    "explanation": "Edema (ශෝථය / ඉදිමීම / Edema)",
    "kind": "mcq",
    "sinhalaText": "අභ්‍යන්තර අවයවවෙ ක්‍රියාකාරිත්වය අඩු වීම සහ මාංශ මේශි ශක්තිය නැති වීම නිසා ශරීරයේ අතිරික්ත තරල එකතු වීම (ඉදිමීම) මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q044",
    "moduleId": "lesson-07",
    "number": 44,
    "question": "It is caused by clogged blood vessels and others :",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Cerebrovascular disease (මස්තිෂ්ක වාහිනී රෝග / Cerebrovascular disease)",
      "High blood pressure (අධි රුධිර පීඩනය / High blood pressure)"
    ],
    "correctIndex": 1,
    "explanation": "Heart disease (හෘද රෝග / Heart disease)",
    "kind": "mcq",
    "sinhalaText": "රුධිර නාෙ අවහිර වීම ආදිය නිසා ඇතිවන්නේ:"
  },
  {
    "id": "lesson-07-q045",
    "moduleId": "lesson-07",
    "number": 45,
    "question": "It refers to disorders of the brain blood vessels :",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Cerebrovascular disease (මස්තිෂ්ක වාහිනී රෝග / Cerebrovascular disease)",
      "High blood pressure (අධි රුධිර පීඩනය / High blood pressure)"
    ],
    "correctIndex": 2,
    "explanation": "Cerebrovascular disease (මස්තිෂ්ක වාහිනී රෝග / Cerebrovascular disease)",
    "kind": "mcq",
    "sinhalaText": "මොළමේ රුධිර නාෙවෙ ඇතිවන ආබාධ මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-07-q046",
    "moduleId": "lesson-07",
    "number": 46,
    "question": "It is when the blood pressure is too high:",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Cerebrovascular disease (මස්තිෂ්ක වාහිනී රෝග / Cerebrovascular disease)",
      "High blood pressure (අධි රුධිර පීඩනය / High blood pressure)"
    ],
    "correctIndex": 0,
    "explanation": "Hypertension (අධි රුධිර පීඩනය / Hypertension) (Note: \"High blood pressure\" is the everyday phrase,\nwhile \"Hypertension\" is the formal medical term.)",
    "kind": "mcq",
    "sinhalaText": "රුධිර පීඩනය අධික මෙස ඉහළ යන තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q047",
    "moduleId": "lesson-07",
    "number": 47,
    "question": "It is caused by pathogens entering the lungs :",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Aspiration Pneumonia (ආශ්වාස නියුමෝනියාව / Aspiration Pneumonia)",
      "Pneumonia (නියුමෝනියාව / Pneumonia)"
    ],
    "correctIndex": 3,
    "explanation": "Pneumonia (නියුමෝනියාව / Pneumonia)",
    "kind": "mcq",
    "sinhalaText": "රෝගකාරක (pathogens) පෙනහළුවෙට ඇතුළු වීම නිසා ඇතිවන්නේ:"
  },
  {
    "id": "lesson-07-q048",
    "moduleId": "lesson-07",
    "number": 48,
    "question": "It is caused by bacteria mistakenly entering the trachea and / or bronchial tube with food and saliva :",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Aspiration pneumonia (ආශ්වාස නියුමෝනියාව / Aspiration pneumonia)",
      "Pneumonia (නියුමෝනියාව / Pneumonia)"
    ],
    "correctIndex": 2,
    "explanation": "Aspiration pneumonia (ආශ්වාස නියුමෝනියාව / Aspiration pneumonia)",
    "kind": "mcq",
    "sinhalaText": "ආහාර සහ කෙළ සමඟ බැක්ීරියා වැරදීමකින් ශ්වාසනාෙයට සහ/හෝ ශ්වාසනාලිකාවට ඇතුළු වීම නිසා ඇතිවන්නේ:"
  },
  {
    "id": "lesson-07-q049",
    "moduleId": "lesson-07",
    "number": 49,
    "question": "It is a disease of metabolic disorder :",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Diabetes mellitus (දියවැඩියාව / Diabetes mellitus)",
      "Osteoporosis (ඔස්ටියෝමපාරෝසිස් / අස්ි දිරායාම / Osteoporosis)"
    ],
    "correctIndex": 2,
    "explanation": "Diabetes mellitus (දියවැඩියාව / Diabetes mellitus)",
    "kind": "mcq",
    "sinhalaText": "පරිවෘත්තීය ආබාධයක් (metabolic disorder) නිසා ඇතිවන රෝගය වන්නේ:"
  },
  {
    "id": "lesson-07-q050",
    "moduleId": "lesson-07",
    "number": 50,
    "question": "It is a disease in which the risk of a broken bone increases due to low bone mass :",
    "options": [
      "Hypertension (අධි රුධිර පීඩනය / Hypertension)",
      "Heart disease (හෘද රෝග / Heart disease)",
      "Diabetes mellitus (දියවැඩියාව / Diabetes mellitus)",
      "Osteoporosis (ඔස්ටියෝමපාරෝසිස් / Osteoporosis)"
    ],
    "correctIndex": 3,
    "explanation": "Osteoporosis (ඔස්ටියෝමපාරෝසිස් / Osteoporosis)",
    "kind": "mcq",
    "sinhalaText": "අස්ි ස්කන්ධය අඩු වීම නිසා අස්ි බිඳීමේ අවදානම වැඩි වන රෝගය වන්නේ:"
  },
  {
    "id": "lesson-07-q051",
    "moduleId": "lesson-07",
    "number": 51,
    "question": "The following are the types of disabilities, EXCEPT :",
    "options": [
      "Social disability (සමාජීය ආබාධිතභ්‍ාවය / Social disability)",
      "Physical disability (ශාරීරික ආබාධිතභ්‍ාවය / Physical disability)",
      "Visual impairment (දෘශය ආබාධිතභ්‍ාවය / Visual impairment)",
      "Hearing Disorder (ශ්‍රවණ ආබාධය / Hearing Disorder)"
    ],
    "correctIndex": 0,
    "explanation": "Social disability (සමාජීය ආබාධිතභ්‍ාවය / Social disability)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ආබාධිතභ්‍ාවමේ (disabilities) වර්ග වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q052",
    "moduleId": "lesson-07",
    "number": 52,
    "question": "It is a state in which a person has damaged limbs / trunk due to disease / accident is having difficulties in daily living and social life :",
    "options": [
      "Social disability (සමාජීය ආබාධිතභ්‍ාවය / Social disability)",
      "Physical disability (ශාරීරික ආබාධිතභ්‍ාවය / Physical disability)",
      "Visual impairment (දෘශය ආබාධිතභ්‍ාවය / Visual impairment)",
      "Hearing disorder (ශ්‍රවණ ආබාධය / Hearing disorder)"
    ],
    "correctIndex": 1,
    "explanation": "Physical disability (ශාරීරික ආබාධිතභ්‍ාවය / Physical disability)",
    "kind": "mcq",
    "sinhalaText": "රෝගයක් හෝ අනතුරක් හේතුවෙන් අත් පා හෝ කඳට හානි සිදු වූ පුේගෙමයකුට එදිනෙදා ජීවිතමේ සහ සමාජ ජීවිතමේ අපහසුතා ඇති වන තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q053",
    "moduleId": "lesson-07",
    "number": 53,
    "question": "The following are symptoms of visual impairment, EXCЕРТ :",
    "options": [
      "Scotoma central (මධයම දෘශය ක්මෂ්ත්‍රමේ අන්ධ ස්ථානය / Scotoma central)",
      "Narrowing of visual field (දෘශය ක්මෂ්ත්‍රය පු වීම / Narrowing of visual field)",
      "Retinopathy (දෘෂ්ටි විතාන රෝගය / Retinopathy)",
      "Hemispatial neglect (අර්ධ අවකාශ නොසෙකා හැරීම / Hemispatial neglect)"
    ],
    "correctIndex": 3,
    "explanation": "Hemispatial neglect (අර්ධ අවකාශ නොසෙකා හැරීම / Hemispatial neglect) (Hemispatial neglect is a\nhigher-order neurological/attentional disorder—often linked to brain injury—rather than an eye/visual impairment symptom itself.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා දෘශය ආබාධිතභ්‍ාවමේ (visual impairment) රෝග ක්ෂණ වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q054",
    "moduleId": "lesson-07",
    "number": 54,
    "question": "It is the partial inability to hear:",
    "options": [
      "Retinopathy (දෘෂ්ටි විතාන රෝගය / Retinopathy)",
      "Hypacusia (ශ්‍රවණ ඌනතාව / Hypacusia)",
      "Hyperglycemia (අධි රුධිර සීනි මට්ටටම / Hyperglycemia)",
      "Cyanosis (සයනෝසිස් / සම නිල් පැහැ වීම / Cyanosis)"
    ],
    "correctIndex": 1,
    "explanation": "Hypacusia (ශ්‍රවණ ඌනතාව / Hypacusia)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ වශයෙන් ඇසීමේ නොහැකියාව (partial inability to hear) වන්නේ:"
  },
  {
    "id": "lesson-07-q055",
    "moduleId": "lesson-07",
    "number": 55,
    "question": "The following are the means of communication with a hearing disorders, EXCEPT :",
    "options": [
      "Sign language (සංඥා භ්‍ාෂාව / Sign language)",
      "Writing (ලිවීම / Writing)",
      "Speech/lip reading (කථනය / තොල් කියවීම / Speech/lip reading)",
      "Repetition (පුනරාවර්තනය / Repetition)"
    ],
    "correctIndex": 3,
    "explanation": "Repetition (පුනරාවර්තනය / Repetition) (Sign language, writing, and lip-reading are communication\nmethods for hearing impairment, whereas repetition is a listening/confirmation technique.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණ ආබාධ ඇති අය සමඟ සන්නිමේදනය කිරීමේ මාධය පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q056",
    "moduleId": "lesson-07",
    "number": 56,
    "question": "It is a state in which a person has difficulty communication using speech due to damage to the language center of the cerebrum :",
    "options": [
      "Speech disability (කථන ආබාධිතභ්‍ාවය / Speech disability)",
      "Language disorder (භ්‍ාෂා ආබාධය / Language disorder)",
      "Visual impairment (දෘශය ආබාධිතභ්‍ාවය / Visual impairment)",
      "Hearing disorder (ශ්‍රවණ ආබාධය / Hearing disorder)"
    ],
    "correctIndex": 1,
    "explanation": "Language disorder (භ්‍ාෂා ආබාධය / Language disorder) (In standard care exam terminology, cerebral\nlanguage-center damage is categorized under language disorder / aphasia, distinct from peripheral vocal/speech motor issues.)",
    "kind": "mcq",
    "sinhalaText": "මස්තිෂ්කමේ (cerebrum) භ්‍ාෂා මධයස්ථානයට සිදුවන හානිය නිසා කථනය භ්‍ාවිත කර සන්නිමේදනය කිරීමේ අපහසුතාව ඇති තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q057",
    "moduleId": "lesson-07",
    "number": 57,
    "question": "It is implanted in the chest due to problem with pulse :",
    "options": [
      "Pacemaker (මේස්මම්කර් / Pacemaker)",
      "Stoma (ස්ටෝමා / Stoma)",
      "Dialysis (ඩයලිසිස් / Dialysis)",
      "Inhaler (ඉන්මහ්ෙර් / Inhaler)"
    ],
    "correctIndex": 0,
    "explanation": "Pacemaker (මේස්මම්කර් / Pacemaker)",
    "kind": "mcq",
    "sinhalaText": "නාඩි/හෘද ස්පන්දන ගැටලුවක් හේතුවෙන් පපුව ප්‍රමේශමේ සවි කරන උපකරණය වන්නේ:"
  },
  {
    "id": "lesson-07-q058",
    "moduleId": "lesson-07",
    "number": 58,
    "question": "It is used for persons with respiratory organ malfunction:",
    "options": [
      "Pacemaker (මේස්මම්කර් / Pacemaker)",
      "Stoma (ස්ටෝමා / Stoma)",
      "Dialysis (ඩයලිසිස් / Dialysis)",
      "Oxygen inhaler / Concentrator (ඔක්සිජන් ආශ්වාසකය / සාන්ද්‍රකය / Oxygen inhaler / Concentrator)"
    ],
    "correctIndex": 3,
    "explanation": "Oxygen inhaler / Concentrator (ඔක්සිජන් ආශ්වාසකය / සාන්ද්‍රකය / Oxygen inhaler / Concentrator)",
    "kind": "mcq",
    "sinhalaText": "ශ්වසන ඉන්ියයන්මේ ක්‍රියාකාරී දෝෂ ඇති පුේගෙයින් සඳහා භ්‍ාවිත කරන්නේ:"
  },
  {
    "id": "lesson-07-q059",
    "moduleId": "lesson-07",
    "number": 59,
    "question": "The following are the points of nursing care who undergoes dialysis, EXCEPT :",
    "options": [
      "The user should take a bath, hour after dialysis (ඩයලිසිස් කිරීමමන් පැයකට පසු පරිශීෙකයා ස්නානය කළ යුතුය)",
      "The user should not carry anything heavy using the arm where the dialysis shunt is placed. (ඩයලිසිස් ෂන්ට්ට / shunt සවි කර ඇති අත භ්‍ාවිත කර බර කිසිවක් නොඉසිලිය යුතුය.)",
      "The user should take only limited amount of salt and liquid (පරිශීෙකයා සීමිත ලුණු සහ ද්‍රව ප්‍රමාණයක් පමණක් ගත යුතුය)",
      "The user should not take a bath on the day of dialysis (ඩයලිසිස් කරන දිනමේ පරිශීෙකයා ස්නානය නොකළ යුතුය)"
    ],
    "correctIndex": 0,
    "explanation": "The user should take a bath, hour after dialysis (ඩයලිසිස් කිරීමමන් පැයකට පසු පරිශීෙකයා ස්නානය කළ යුතුය) (Option d states the standard care rule—not bathing on the day of dialysis—whereas a contradicts it.)",
    "kind": "mcq",
    "sinhalaText": "ඩයලිසිස් (dialysis) ප්‍රතිකාරය බන අමයකුමේ හෙද සත්කාර කරුණු පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q060",
    "moduleId": "lesson-07",
    "number": 60,
    "question": "It is surgically made on the abdomen to divert the flow of waste out of the body :",
    "options": [
      "Pacemaker (මේස්මම්කර් / Pacemaker)",
      "Stoma (ස්ටෝමා / Stoma)",
      "Dialysis (ඩයලිසිස් / Dialysis)",
      "Inhaler (ඉන්මහ්ෙර් / Inhaler)"
    ],
    "correctIndex": 1,
    "explanation": "Stoma (ස්ටෝමා / Stoma)",
    "kind": "mcq",
    "sinhalaText": "අපද්‍රවය ශරීරයෙන් පිටතට යොමු කිරීම සඳහා උදරමේ ශෙයකර්මයක් මඟින් සාදනු බන්නේ:"
  },
  {
    "id": "lesson-07-q061",
    "moduleId": "lesson-07",
    "number": 61,
    "question": "Is a state in which a person is suffering from mental function disorder :",
    "options": [
      "Intellectual disability (බුේධිමය ආබාධිතභ්‍ාවය / Intellectual disability)",
      "Mental disability (මානසික ආබාධිතභ්‍ාවය / Mental disability)",
      "Social disability (සමාජීය ආබාධිතභ්‍ාවය / Social disability)",
      "Dementia (ඩිමමන්ශියා / Dementia)"
    ],
    "correctIndex": 1,
    "explanation": "Mental disability (මානසික ආබාධිතභ්‍ාවය / Mental disability)",
    "kind": "mcq",
    "sinhalaText": "පුේගෙමයකු මානසික ක්‍රියාකාරී ආබාධයකින් (mental function disorder) පීඩා විඳින තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q062",
    "moduleId": "lesson-07",
    "number": 62,
    "question": "The following are the symptoms of mental disability, EXCEPT :",
    "options": [
      "Delusion (මුළාව / Delusion)",
      "Stress (මානසික ආතතිය / Stress)",
      "Depressive state (විෂාද තත්ත්වය / Depressive state)",
      "Manic state (උන්මාද තත්ත්වය / Manic state)"
    ],
    "correctIndex": 1,
    "explanation": "Stress (මානසික ආතතිය / Stress)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා මානසික ආබාධිතභ්‍ාවමේ (mental disability) රෝග ක්ෂණ වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q063",
    "moduleId": "lesson-07",
    "number": 63,
    "question": "It is a state of getting dispirited, speaking little, and being highly depressed:",
    "options": [
      "Delusion (මුළාව / Delusion)",
      "Stress (මානසික ආතතිය / Stress)",
      "Depressive state (විෂාද තත්ත්වය / Depressive state)",
      "Manic state (උන්මාද තත්ත්වය / Manic state)"
    ],
    "correctIndex": 2,
    "explanation": "Depressive state (විෂාද තත්ත්වය / Depressive state)",
    "kind": "mcq",
    "sinhalaText": "කෙකිරීමට පත්වීම, ඉතා අඩුවෙන් කතා කිරීම සහ දැඩි මෙස මානසිකව වැී සිීමේ තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q064",
    "moduleId": "lesson-07",
    "number": 64,
    "question": "It is a state of being abnormally exhilarated and open - minded, :",
    "options": [
      "Delusion (මුළාව / Delusion)",
      "Stress (මානසික ආතතිය / Stress)",
      "Depressive state (විෂාද තත්ත්වය / Depressive state)",
      "Manic state (උන්මාද තත්ත්වය / Manic state)"
    ],
    "correctIndex": 3,
    "explanation": "Manic state (උන්මාද තත්ත්වය / Manic state)",
    "kind": "mcq",
    "sinhalaText": "අසාමාන්‍ය මෙස උේදාමයට පත්වීම සහ විවෘතව හැසිරීමේ තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q065",
    "moduleId": "lesson-07",
    "number": 65,
    "question": "It is a state when auditory hallucinations and delusions occur :",
    "options": [
      "Delusion (මුළාව / Delusion)",
      "Stress (මානසික ආතතිය / Stress)",
      "Depressive state (විෂාද තත්ත්වය / Depressive state)",
      "Manic state (උන්මාද තත්ත්වය / Manic state)"
    ],
    "correctIndex": 0,
    "explanation": "Delusion (මුළාව / Delusion) (In this PDF's choice list for Q65, a is the intended selection among the\ngiven options.)",
    "kind": "mcq",
    "sinhalaText": "ශ්‍රවණ මායාවන් (auditory hallucinations) සහ මුළාවන් (delusions) ඇති වන තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q066",
    "moduleId": "lesson-07",
    "number": 66,
    "question": "One of the four major lobes of the cerebrum which is the sense of taste, judgment, understanding, etc..:",
    "options": [
      "Frontal lobe (ාට කණ්ඩිකාව / Frontal lobe)",
      "Parietal lobe (පාර්ශ්වක කණ්ඩිකාව / Parietal lobe)",
      "Occipital lobe (පශ්චාත් කණ්ඩිකාව / Occipital lobe)",
      "Temporal lobe (ශංඛ්‍ක කණ්ඩිකාව / Temporal lobe)"
    ],
    "correctIndex": 0,
    "explanation": "Frontal lobe (ාට කණ්ඩිකාව / Frontal lobe) (Note: Judgment and understanding are frontal lobe\nfunctions, while taste/somatosensory perception involves the parietal lobe.)",
    "kind": "mcq",
    "sinhalaText": "මස්තිෂ්කමේ ප්‍රධාන කොටස් (lobes) හතරෙන් එකක් වන අතර රස දැනීම, විනිශ්චය, අවබෝධය ආදියට සම්බන්ධ කොටස වන්නේ:"
  },
  {
    "id": "lesson-07-q067",
    "moduleId": "lesson-07",
    "number": 67,
    "question": "One of the four major lobes of the cerebrum which is the eyesight, etc...:",
    "options": [
      "Frontal lobe (ාට කණ්ඩිකාව / Frontal lobe)",
      "Parietal lobe (පාර්ශ්වක කණ්ඩිකාව / Parietal lobe)",
      "Occipital lobe (පශ්චාත් කණ්ඩිකාව / Occipital lobe)",
      "Temporal lobe (ශංඛ්‍ක කණ්ඩිකාව / Temporal lobe)"
    ],
    "correctIndex": 2,
    "explanation": "Occipital lobe (පශ්චාත් කණ්ඩිකාව / Occipital lobe)",
    "kind": "mcq",
    "sinhalaText": "මස්තිෂ්කමේ ප්‍රධාන කොටස් හතරෙන් එකක් වන අතර පෙනීම (eyesight) ආදියට සම්බන්ධ කොටස වන්නේ:"
  },
  {
    "id": "lesson-07-q068",
    "moduleId": "lesson-07",
    "number": 68,
    "question": "One of the four major lobes of the cerebrum which is the auditory sense, understanding of language, knowledge, memory, etc...:",
    "options": [
      "Frontal lobe (ාට කණ්ඩිකාව / Frontal lobe)",
      "Parietal lobe (පාර්ශ්වක කණ්ඩිකාව / Parietal lobe)",
      "Occipital lobe (පශ්චාත් කණ්ඩිකාව / Occipital lobe)",
      "Temporal lobe (ශංඛ්‍ක කණ්ඩිකාව / Temporal lobe)"
    ],
    "correctIndex": 3,
    "explanation": "Temporal lobe (ශංඛ්‍ක කණ්ඩිකාව / Temporal lobe)",
    "kind": "mcq",
    "sinhalaText": "මස්තිෂ්කමේ ප්‍රධාන කොටස් හතරෙන් එකක් වන අතර ශ්‍රවණ ඉන්ිය, භ්‍ාෂාව තේරුම් ගැනීම, දැනුම, මතකය ආදියට සම්බන්ධ කොටස වන්නේ:"
  },
  {
    "id": "lesson-07-q069",
    "moduleId": "lesson-07",
    "number": 69,
    "question": "The following are the cognitive functions, EXCEPT :",
    "options": [
      "Language (භ්‍ාෂාව / Language)",
      "Memory (මතකය / Memory)",
      "Perception (සංජානනය / Perception)",
      "Sleep (නින්ද / Sleep)"
    ],
    "correctIndex": 3,
    "explanation": "Sleep (නින්ද / Sleep)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා සංජානන ක්‍රියාකාරකම් (cognitive functions) වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q070",
    "moduleId": "lesson-07",
    "number": 70,
    "question": "One of the cognitive functions which is to speak and understand :",
    "options": [
      "Language (භ්‍ාෂාව / Language)",
      "Memory (මතකය / Memory)",
      "Perception (සංජානනය / Perception)",
      "Sleep (නින්ද / Sleep)"
    ],
    "correctIndex": 0,
    "explanation": "Language (භ්‍ාෂාව / Language)",
    "kind": "mcq",
    "sinhalaText": "කතා කිරීම සහ තේරුම් ගැනීම වන සංජානන ක්‍රියාකාරකම්වලින් එකක් වන්නේ:"
  },
  {
    "id": "lesson-07-q071",
    "moduleId": "lesson-07",
    "number": 71,
    "question": "The following are the forgetfulness associated with aging. EXCEPT :",
    "options": [
      "Forgetfulness causes difficulties in life (අමතක වීම ජීවිතමේ අපහසුතා ඇති කරයි)",
      "Aware of forgetfulness (අමතක වීම ගැන දැනුවත් වීම)",
      "Forgetfulness does not progress (අමතක වීම ප්‍රගතිශීලීව වැඩි නොමේ)",
      "Forgetting the part of the experience (අත්දැකීමේ කොටසක් පමණක් අමතක වීම)"
    ],
    "correctIndex": 0,
    "explanation": "Forgetfulness causes difficulties in life (අමතක වීම ජීවිතමේ අපහසුතා ඇති කරයි) (Normal age-related\nforgetfulness generally does not cause major life disruption, whereas dementia-related memory impairment does.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා වයසට යාම හා සම්බන්ධ අමතක වීම් (forgetfulness associated with aging) වේ. මේවා හැර:"
  },
  {
    "id": "lesson-07-q072",
    "moduleId": "lesson-07",
    "number": 72,
    "question": "The following are the forgetfulness associated with dementia, EXCEPT :",
    "options": [
      "Forgetfulness causes no difficulties in life (අමතක වීමමන් ජීවිතමේ කිසිදු අපහසුතාවයක් ඇති නොමේ)",
      "Not aware of forgetfulness (අමතක වීම ගැන දැනුවත් නොවීම)",
      "Forgetfulness does progress (අමතක වීම වර්ධනය/ප්‍රගතිශීලී මේ)",
      "Forgetting the whole experience (සම්ූර්ණ අත්දැකීමම අමතක වීම)"
    ],
    "correctIndex": 0,
    "explanation": "Forgetfulness causes no difficulties in life (අමතක වීමමන් ජීවිතමේ කිසිදු අපහසුතාවයක් ඇති නොමේ)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ඩිමමන්ශියා (dementia) හා සම්බන්ධ අමතක වීම් වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q073",
    "moduleId": "lesson-07",
    "number": 73,
    "question": "One of the main causative diseases, symptoms, etc.. of dementia in which the brain shrinks and senile plaques appear :",
    "options": [
      "Frontotemporal dementia (මරාන්මටාමටම්පෝරල් ඩිමමන්ශියා / Frontotemporal dementia)",
      "Dementia with lewy bodies (මෙවි මබාඩි ඩිමමන්ශියා / Dementia with lewy bodies)",
      "Dementia of Alzheimer's type (ඇල්සයිමර් වර්ගමේ ඩිමමන්ශියා / Dementia of Alzheimer's type)",
      "Vascular dementia (සනාෙ ඩිමමන්ශියා / Vascular dementia)"
    ],
    "correctIndex": 2,
    "explanation": "Dementia of Alzheimer's type (ඇල්සයිමර් වර්ගමේ ඩිමමන්ශියා / Dementia of Alzheimer's type)",
    "kind": "mcq",
    "sinhalaText": "මොළය හැකිළී senile plaques ඇති වන, ඩිමමන්ශියා රෝගය ඇති කරන ප්‍රධාන රෝගවලින් එකක් වන්නේ:"
  },
  {
    "id": "lesson-07-q074",
    "moduleId": "lesson-07",
    "number": 74,
    "question": "One of the main causative diseases, symptoms, etc... of dementia in which lewy bodies appear and the occipital lobe shrinks :",
    "options": [
      "Frontotemporal dementia (මරාන්මටාමටම්පෝරල් ඩිමමන්ශියා / Frontotemporal dementia)",
      "Dementia with lewy bodies (මෙවි මබාඩි ඩිමමන්ශියා / Dementia with lewy bodies)",
      "Dementia of Alzheimer's type (ඇල්සයිමර් වර්ගමේ ඩිමමන්ශියා / Dementia of Alzheimer's type)",
      "Vascular dementia (සනාෙ ඩිමමන්ශියා / Vascular dementia)"
    ],
    "correctIndex": 1,
    "explanation": "Dementia with lewy bodies (මෙවි මබාඩි ඩිමමන්ශියා / Dementia with lewy bodies)",
    "kind": "mcq",
    "sinhalaText": "මෙවි මබාඩි (lewy bodies) ඇති වන සහ පශ්චාත් කණ්ඩිකාව (occipital lobe) හැකිමළන ඩිමමන්ශියා රෝග වර්ගය වන්නේ:"
  },
  {
    "id": "lesson-07-q075",
    "moduleId": "lesson-07",
    "number": 75,
    "question": "The following are the main symptoms of frontotemporal dementia, EXCEPT :",
    "options": [
      "Change in personality (පෞරුෂත්වමේ වෙනස්වීම / Change in personality)",
      "Patterned activities (රටාගත ක්‍රියාකාරකම් / Patterned activities)",
      "Excitement / Aggressiveness (උේදීපනය / ආක්‍රමණශීලී බව / Excitement / Aggressiveness)",
      "Screams while sleeping (නිදා සිටින විට කෑගැසීම / Screams while sleeping)"
    ],
    "correctIndex": 3,
    "explanation": "Screams while sleeping (නිදා සිටින විට කෑගැසීම / Screams while sleeping)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා මරාන්මටාමටම්පෝරල් ඩිමමන්ශියා (frontotemporal dementia) හි ප්‍රධාන රෝග ක්ෂණ වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q076",
    "moduleId": "lesson-07",
    "number": 76,
    "question": "The following are the main symptoms of Dementia of the Alzheimer's type, EXCEPT:",
    "options": [
      "Starts with memory impairment (මතක ශක්තිය හීන වීමමන් ආරම්භ්‍ මේ)",
      "Progresses in stages (අදියරෙන් අදියර වර්ධනය මේ)",
      "Often in good mood (බොහෝ විට හොඳ මනෝභ්‍ාවයකින් සිී)",
      "Onset is slow (ආරම්භ්‍ය මසමින් සිදු මේ)"
    ],
    "correctIndex": 2,
    "explanation": "Often in good mood (බොහෝ විට හොඳ මනෝභ්‍ාවයකින් සිී)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ඇල්සයිමර් වර්ගමේ ඩිමමන්ශියා (Dementia of the Alzheimer's type) හි ප්‍රධාන රෝග ක්ෂණ වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q077",
    "moduleId": "lesson-07",
    "number": 77,
    "question": "The following are the care symptoms of dementia, EXCEPT :",
    "options": [
      "Executive function disorder (විධායක ක්‍රියාකාරී ආබාධය / Executive function disorder)",
      "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
      "Memory impairment (මතක ශක්තිය හීන වීම / Memory impairment)",
      "Anxiety / Frustration (කාංසාව / කෙකිරීම / Anxiety / Frustration)"
    ],
    "correctIndex": 3,
    "explanation": "Anxiety / Frustration (කාංසාව / කෙකිරීම / Anxiety / Frustration) (Anxiety/frustration is a BPSD\nbehavioral/psychological symptom, whereas memory impairment, cognitive/orientation impairment, and executive function disorder are\ncore symptoms.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ඩිමමන්ශියා හි මූලික/සත්කාර රෝග ක්ෂණ (core symptoms) වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q078",
    "moduleId": "lesson-07",
    "number": 78,
    "question": "The following are the behavioral and psychological symptoms of dementia, EXCEPT :",
    "options": [
      "Wandering (අරමුණකින් මතාරව ඇවිදීම / Wandering)",
      "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
      "Hallucinations / delusions (මායාවන් / මුළාවන් / Hallucinations / delusions)",
      "Anxiety / Frustration (කාංසාව / කෙකිරීම / Anxiety / Frustration)"
    ],
    "correctIndex": 1,
    "explanation": "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ඩිමමන්ශියා හි චර්යාත්මක සහ මනෝවිදයාත්මක රෝග ක්ෂණ (BPSD) වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q079",
    "moduleId": "lesson-07",
    "number": 79,
    "question": "One of the core symptoms of dementia that refers to a disorder that makes it impossible to recognize time, place and people :",
    "options": [
      "Memory impairment (මතක ශක්තිය හීන වීම / Memory impairment)",
      "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
      "Executive function disorder (විධායක ක්‍රියාකාරී ආබාධය / Executive function disorder)",
      "Comprehension disorder / judgment impairment (අවබෝධ ආබාධය / විනිශ්චය දුර්වෙතාව / Comprehension disorder / judgment\nimpairment)"
    ],
    "correctIndex": 1,
    "explanation": "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
    "kind": "mcq",
    "sinhalaText": "කාෙය, ස්ථානය සහ පුේගෙයන් හඳුනා ගැනීමට නොහැකි වන ආබාධයක් පෙන්නුම් කරන ඩිමමන්ශියා හි මූලික රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q080",
    "moduleId": "lesson-07",
    "number": 80,
    "question": "One of the core symptoms of dementia that refers to a disorder that makes it impossible to remember new facts and information:",
    "options": [
      "Memory impairment (මතක ශක්තිය හීන වීම / Memory impairment)",
      "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
      "Executive function disorder (විධායක ක්‍රියාකාරී ආබාධය / Executive function disorder)",
      "Comprehension disorder / judgment impairment (අවබෝධ ආබාධය / විනිශ්චය දුර්වෙතාව / Comprehension disorder / judgment\nimpairment)"
    ],
    "correctIndex": 0,
    "explanation": "Memory impairment (මතක ශක්තිය හීන වීම / Memory impairment)",
    "kind": "mcq",
    "sinhalaText": "නව කරුණු සහ තොරතුරු මතක තබා ගැනීමට නොහැකි වන ආබාධයක් පෙන්නුම් කරන ඩිමමන්ශියා හි මූලික රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q081",
    "moduleId": "lesson-07",
    "number": 81,
    "question": "One of the core symptoms of dementia in which a person cannot remember procedures and becomes unable to carry out various activities :",
    "options": [
      "Memory impairment (මතක ශක්තිය හීන වීම / Memory impairment)",
      "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
      "Executive function disorder (විධායක ක්‍රියාකාරී ආබාධය / Executive function disorder)",
      "Comprehension disorder / judgment impairment (අවබෝධ ආබාධය / විනිශ්චය දුර්වෙතාව / Comprehension disorder / judgment\nimpairment)"
    ],
    "correctIndex": 2,
    "explanation": "Executive function disorder (විධායක ක්‍රියාකාරී ආබාධය / Executive function disorder)",
    "kind": "mcq",
    "sinhalaText": "පුේගෙමයකුට ක්‍රියා පටිපාටි මතක තබා ගත නොහැකි වී විවිධ ක්‍රියාකාරකම් සිදු කිරීමට නොහැකි වන ඩිමමන්ශියා හි මූලික රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q082",
    "moduleId": "lesson-07",
    "number": 82,
    "question": "One of the behavioral symptoms of dementia in which the behavior of roaming around for some purpose :",
    "options": [
      "Excitement / aggressive behavior (උේදීපනය / ආක්‍රමණශීලී චර්යාව / Excitement / aggressive behavior)",
      "Wandering (ඇවිදීම / Wandering)",
      "Anxiety / frustration (කාංසාව / කෙකිරීම / Anxiety / frustration)",
      "Hallucinations / delusions (මායාවන් / මුළාවන් / Hallucinations / delusions)"
    ],
    "correctIndex": 1,
    "explanation": "Wandering (ඇවිදීම / Wandering)",
    "kind": "mcq",
    "sinhalaText": "යම් අරමුණක් ඇතිව එහා මමහා ඇවිදීමේ චර්යාව පෙන්නුම් කරන ඩිමමන්ශියා හි චර්යාත්මක රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q083",
    "moduleId": "lesson-07",
    "number": 83,
    "question": "One of the behavioral symptoms of dementia that are caused by the person's anxious feelings, as he / she does not understand what other",
    "options": [
      "Excitement / aggressive behavior (උේදීපනය / ආක්‍රමණශීලී චර්යාව / Excitement / aggressive behavior)",
      "Wandering (ඇවිදීම / Wandering)",
      "Anxiety / Frustration (කාංසාව / කෙකිරීම / Anxiety / Frustration)",
      "Hallucinations / delusions (මායාවන් / මුළාවන් / Hallucinations / delusions)"
    ],
    "correctIndex": 2,
    "explanation": "Anxiety / Frustration (කාංසාව / කෙකිරීම / Anxiety / Frustration)",
    "kind": "mcq",
    "sinhalaText": "අන් අය තමාට කරන්නේ කුමක්දැයි තේරුම් නොගැනීම නිසා ඇතිවන කාංසා සහගත හැඟීම් හේතුවෙන් ඇතිවන ඩිමමන්ශියා හි රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q084",
    "moduleId": "lesson-07",
    "number": 84,
    "question": "One of the psychological symptoms of dementia that refers to a state in which a person feels something that does not actually exist :",
    "options": [
      "Delusion (මුළාව / Delusion)",
      "Wandering (ඇවිදීම / Wandering)",
      "Anxiety / frustration (කාංසාව / කෙකිරීම / Anxiety / frustration)",
      "Hallucinations (මායාවන් / Hallucinations)"
    ],
    "correctIndex": 3,
    "explanation": "Hallucinations (මායාවන් / Hallucinations)",
    "kind": "mcq",
    "sinhalaText": "යථාර්ථමේදී නොපවතින මදයක් පුේගෙමයකුට දැමනන/මපමනන තත්ත්වයක් පෙන්නුම් කරන ඩිමමන්ශියා හි මනෝවිදයාත්මක රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q085",
    "moduleId": "lesson-07",
    "number": 85,
    "question": "One of the psychological symptoms of dementia that refers to a state in which a person believes something that is not real :",
    "options": [
      "Delusion (මුළාව / Delusion)",
      "Wandering (ඇවිදීම / Wandering)",
      "Anxiety / frustration (කාංසාව / කෙකිරීම / Anxiety / frustration)",
      "Hallucinations (මායාවන් / Hallucinations)"
    ],
    "correctIndex": 0,
    "explanation": "Delusion (මුළාව / Delusion)",
    "kind": "mcq",
    "sinhalaText": "සතය නොවන මදයක් පුේගෙමයකු විශ්වාස කරන තත්ත්වයක් පෙන්නුම් කරන ඩිමමන්ශියා හි මනෝවිදයාත්මක රෝග ක්ෂණයකි:"
  },
  {
    "id": "lesson-07-q086",
    "moduleId": "lesson-07",
    "number": 86,
    "question": "What is true about maslow's hierarchy of needs :",
    "options": [
      "Self-esteem includes the need for water, food, breathing and homeostasis (ආත්ම ගෞරවයට ජෙය, ආහාර, හුස්ම ගැනීම සහ සමස්ිතිය අවශය මේ)",
      "The basic psychological needs include the full use of talents, capabilities and potentialities (මූලික මනෝවිදයාත්මක අවශයතාවෙට දක්ෂතා,\nහැකියාවන් සහ විභ්‍වතාවන් සම්ූර්ණයෙන් භ්‍ාවිත කිරීම ඇතුළත් මේ)",
      "Love and belonging are needed to avoid problems such as sadness, depression and anxiety it is important to be loved and accepted\nby other people (දුක, විෂාදය සහ කාංසාව වැනි ගැටලු වළක්වා ගැනීමට ආදරය සහ අයිතිය අවශය වන අතර අන් අයගෙන් ආදරය සහ පිළිගැනීම ැබීම වැදගත් මේ)",
      "Financial security, Safety against accidents and injury, health and wellness, finding a job and having a house that can withstand\nstorm all belongs to self - actualization (මූෙය ආරක්ෂාව, අනතුරු සහ තුවාෙවලින් ආරක්ෂාව, සෞඛ්‍යය, රැකියාවක් සොයා ගැනීම සහ කුණාුවකට ඔමරාත්තු දෙන නිවසක් තිබීම ස්වයං සාක්ෂාත් කර ගැනීමට අයත් මේ)"
    ],
    "correctIndex": 2,
    "explanation": "Love and belonging are needed to avoid problems such as sadness, depression and anxiety it is\nimportant to be loved and accepted by other people (දුක, විෂාදය සහ කාංසාව වැනි ගැටලු වළක්වා ගැනීමට ආදරය සහ අයිතිය අවශය වන අතර අන්අයගෙන් ආදරය සහ පිළිගැනීම ැබීම වැදගත් මේ)",
    "kind": "mcq",
    "sinhalaText": "මැස්මෙෝමේ අවශයතා ධූරාවලිය (Maslow's hierarchy of needs) පිළිබඳව සතය වන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-07-q087",
    "moduleId": "lesson-07",
    "number": 87,
    "question": "What is the function of the kidney :",
    "options": [
      "It breaks down food chemically and mechanically (එය ආහාර රසායනිකව සහ යාන්ත්‍රිකව බිඳ දමයි)",
      "It serves as the body's temporary storage or tank of urine (එය ශරීරයේ මුත්‍රා තාවකාලිකව ගබඩා කරන ටැංකියක් මෙස ක්‍රියා කරයි)",
      "It is the muscle that pumps the blood received from the veins into the arteries throughout the body (එය ශිරාවලින් ැමබන රුධිරය ශරීරය පුරා ධමනිවෙට මපාම්ප කරන මාංශ මේශියයි)",
      "It filters unnecessary things in the blood. Removes wastes, controls the body's fluid balance and passes waste as urine (එය රුධිරමේඇති අනවශය මේ පෙරයි. අපද්‍රවය ඉවත් කරයි, ශරීරයේ තරල සමතුලිතතාවය පාෙනය කරයි සහ අපද්‍රවය මුත්‍රා මෙස පිට කරයි)"
    ],
    "correctIndex": 3,
    "explanation": "It filters unnecessary things in the blood. Removes wastes, controls the body's fluid balance and\npasses waste as urine (එය රුධිරමේ ඇති අනවශය මේ පෙරයි. අපද්‍රවය ඉවත් කරයි, ශරීරයේ තරල සමතුලිතතාවය පාෙනය කරයි සහ අපද්‍රවය මුත්‍රා මෙස පිට කරයි)",
    "kind": "mcq",
    "sinhalaText": "වකුගඩුමේ (kidney) කාර්යය කුමක්ද:"
  },
  {
    "id": "lesson-07-q088",
    "moduleId": "lesson-07",
    "number": 88,
    "question": "What is true related to rest and sleep :",
    "options": [
      "Sleep is essential for the mind and body (නින්ද මනසට සහ ශරීරයට අතයවශය මේ)",
      "The length of sleep is more important than depth (නින්මේ ගැඹුරට වඩා නින්මේ දිග වැදගත් මේ)",
      "REM sleep is a deep sleep where the brain is sleeping (REM නින්ද යනු මොළය නිදා සිටින ගැඹුරු නින්දකි)",
      "Non - REM sleep is close of being awake where the brain is not sleeping (Non-REM නින්ද යනු මොළය නිදා නොසිටින අවදි වීමට ආසන්න තත්ත්වයකි)"
    ],
    "correctIndex": 0,
    "explanation": "Sleep is essential for the mind and body (නින්ද මනසට සහ ශරීරයට අතයවශය මේ)",
    "kind": "mcq",
    "sinhalaText": "විමේකය සහ නින්ද සම්බන්ධයෙන් සතය වන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-07-q089",
    "moduleId": "lesson-07",
    "number": 89,
    "question": "In measuring the user's body temperature, which of the following is NOT correct :",
    "options": [
      "Place the tip of the thermometer on the user's armpit (උෂ්ණත්වමානමේ කෙළවර පරිශීෙකයාමේ කිහිල්මල් / armpit තබන්න)",
      "$35^{\\circ}\\text{C}$ is the normal body temperature for the elderly (වැඩිහිටියන්මේ සාමාන්‍ය ශරීර උෂ්ණත්වය $35^{\\circ}\\text{C}$ මේ)",
      "Measure the body temperature in ears, mouth, rectum, armpit (කන්, මුඛ්‍ය, ගුද මාර්ගය, කිහිල්ෙ යන ස්ථානවලින් ශරීර උෂ්ණත්වය මැනිය හැක)",
      "Take the body temperature from the affected side for users with hemiplegia (අර්ධ අංශභ්‍ාගය / hemiplegia ඇති පරිශීෙකයන් සඳහා ආබාධිත පැත්මතන් ශරීර උෂ්ණත්වය බා ගන්න)"
    ],
    "correctIndex": 1,
    "explanation": "$35^{\\circ}\\text{C}$ is the normal body temperature for the elderly (වැඩිහිටියන්මේ සාමාන්‍ය ශරීර උෂ්ණත්වය $35^{\\circ}\\text{C}$ මේ) ($35^{\\circ}\\text{C}$ is abnormally low/hypothermic; normal body temperature is roughly around\n$36^{\\circ}\\text{C}$–$37^{\\circ}\\text{C}$.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීෙකයාමේ ශරීර උෂ්ණත්වය මැනීමේදී, පහත සඳහන් ඒවායින් නිවැරදි නොවන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-07-q090",
    "moduleId": "lesson-07",
    "number": 90,
    "question": "Which of the following is correct about pulse rate :",
    "options": [
      "Below 60 beats per minutes is called tachycardia (මිනිත්තුවකට වාර 60ට අඩු වීම ටැකිකාඩියා / tachycardia මෙස හැඳින්වේ)",
      "Consistently above 100 beats per minute is bradycordia (නිරන්තරයෙන් මිනිත්තුවකට වාර 100ට වඩා වැඩි වීම බ්‍රැඩිකාඩියා / bradycardia මේ)",
      "Between 60 and 100 beats per minute is the normal resting heart rate or pulse rate in most of the adults (බොහෝ වැඩිහිටියන්මේසාමාන්‍ය විමේකී හෘද ස්පන්දන මේගය හෝ නාඩි මේගය මිනිත්තුවකට වාර 60ත් 100ත් අතර මේ)",
      "Between 80 and 120 beats per minute is the normal resting heart rate or pulse rate in most of the adults (බොහෝ වැඩිහිටියන්මේසාමාන්‍ය විමේකී නාඩි මේගය මිනිත්තුවකට වාර 80ත් 120ත් අතර මේ)"
    ],
    "correctIndex": 2,
    "explanation": "Between 60 and 100 beats per minute is the normal resting heart rate or pulse rate in most of the\nadults (බොහෝ වැඩිහිටියන්මේ සාමාන්‍ය විමේකී හෘද ස්පන්දන මේගය හෝ නාඩි මේගය මිනිත්තුවකට වාර 60ත් 100ත් අතර මේ)",
    "kind": "mcq",
    "sinhalaText": "නාඩි මේගය (pulse rate) පිළිබඳව පහත ඒවායින් නිවැරදි වන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-07-q091",
    "moduleId": "lesson-07",
    "number": 91,
    "question": "The following is true about 1CF (international classification of functioning, Disability and health) EXCEPT :",
    "options": [
      "It regards disability as people's health, characteristics instead on negative factors (සෘණාත්මක සාධක වෙනුවට ආබාධිතභ්‍ාවය පුේගෙයන්මේසෞඛ්‍ය ක්ෂණයක් මෙස සෙකයි)",
      "It is a classification of human functioning and disability for the understanding of a person's condition (පුේගෙමයකුමේ තත්ත්වය තේරුම්ගැනීම සඳහා මානව ක්‍රියාකාරිත්වය සහ ආබාධිතභ්‍ාවය පිළිබඳ වර්ගීකරණයකි)",
      "It doesn't consider the function of people with disabilities from a braad [perspective — truncated in PDF] (ආබාධ සහිත පුේගෙයන්මේක්‍රියාකාරිත්වය පුළුල් දෘෂ්ටිකෝණයකින් නොසෙකයි — PDF හි කැපී ඇත)"
    ],
    "correctIndex": 2,
    "explanation": "It doesn't consider the function of people with disabilities from a braad [perspective] (ආබාධ සහිත පුේගෙයන්මේ ක්‍රියාකාරිත්වය පුළුල් දෘෂ්ටිකෝණයකින් නොසෙකයි — ICF actually takes a comprehensive/broad bio-psycho-social view.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් කරුණ ICF (ක්‍රියාකාරිත්වය, ආබාධිතභ්‍ාවය සහ සෞඛ්‍යය පිළිබඳ ජාතයන්තර වර්ගීකරණය) පිළිබඳව සතය වේ, මෙය හැර:"
  },
  {
    "id": "lesson-07-q092",
    "moduleId": "lesson-07",
    "number": 92,
    "question": "The following are the core symptoms of dementia, EXCEPT :",
    "options": [
      "Memory impairment (මතක ශක්තිය හීන වීම / Memory impairment)",
      "Cognitive impairment (සංජානන දුර්වෙතාව / Cognitive impairment)",
      "Wondering (ඇවිදීම / Wandering — PDF හි Wondering මෙස ඇත)"
    ],
    "correctIndex": 2,
    "explanation": "Wondering (ඇවිදීම / Wandering) (Wandering is a BPSD symptom, not a core symptom.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ඩිමමන්ශියා හි මූලික රෝග ක්ෂණ (core symptoms) වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q093",
    "moduleId": "lesson-07",
    "number": 93,
    "question": "Which is the unappropriated nursing care of people with dementia:",
    "options": [
      "Think from the user standpoint (පරිශීෙකයාමේ දෘෂ්ටිකෝණයෙන් සිතීම)",
      "Change the user stay in user's room for a short time (පරිශීෙකයා කෙටි කාෙයක් සඳහා කාමරමේ රැඳී සිීම නිතර වෙනස් කිරීම)",
      "Understand the life of the user (පරිශීෙකයාමේ ජීවිතය තේරුම් ගැනීම)"
    ],
    "correctIndex": 1,
    "explanation": "Change the user stay in user's room for a short time (පරිශීෙකයා කෙටි කාෙයක් සඳහා කාමරමේ රැඳී සිීම වෙනස් කිරීම) (Frequent unannounced environment/room changes cause confusion and anxiety for people with dementia.)",
    "kind": "mcq",
    "sinhalaText": "ඩිමමන්ශියා ඇති පුේගෙයන් සඳහා සුදුසු නොවන හෙද සත්කාරය කුමක්ද:"
  },
  {
    "id": "lesson-07-q094",
    "moduleId": "lesson-07",
    "number": 94,
    "question": "The following are the complications of diabetes mellitus EXCEPT :",
    "options": [
      "Neurotic disorder (ස්නායු ආබාධය / Neuropathy — PDF හි Neurotic disorder මෙස ඇත)",
      "Kidney disorder (වකුගඩු ආබාධය / Nephropathy)",
      "Lung disorder (පෙනහළු ආබාධය / Lung disorder)"
    ],
    "correctIndex": 2,
    "explanation": "Lung disorder (පෙනහළු ආබාධය / Lung disorder) (The classic three major diabetes complications\ntaught in care exams are neuropathy/nerve, nephropathy/kidney, and retinopathy/eye disorders.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා දියවැඩියා රෝගමේ (diabetes mellitus) සංකූෙතා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q095",
    "moduleId": "lesson-07",
    "number": 95,
    "question": "The following are the points of nursing care related to constipation EXCEPT :",
    "options": [
      "The user take dietary fibers and engage in moderate exercise (පරිශීෙකයා ආහාරමය තන්තු බා ගැනීම සහ මධයස්ථ වයායාමවෙ මයදීම)",
      "Have a habit to sit on the toilet after each meal (සෑම ආහාර මේෙකටම පසු වැසිකිළිමේ වාඩි වීමේ පුරුේද ඇති කර ගැනීම)",
      "Message the abdomen with reverse [direction — truncated in PDF] (උදරය ප්‍රතිවිරුේධ දිශාවට සම්බාහනය කිරීම — PDF හි කැපී ඇත)"
    ],
    "correctIndex": 2,
    "explanation": "Message the abdomen with reverse [direction] (උදරය ප්‍රතිවිරුේධ දිශාවට සම්බාහනය කිරීම — Abdominal\nmassage should follow the clockwise direction of the large intestine, not reverse.)",
    "kind": "mcq",
    "sinhalaText": "මෙබේධය (constipation) සම්බන්ධ හෙද සත්කාර කරුණු පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q096",
    "moduleId": "lesson-07",
    "number": 96,
    "question": "The following are the appropriate places to measure pulse rate EXCEPT :",
    "options": [
      "Brachial artery (බ්‍රාකියල් ධමනිය / Brachial artery)",
      "Radial artery (මර්ඩියල් ධමනිය / Radial artery)",
      "Temporal artery (මටම්පරල් ධමනිය / Temporal artery)",
      "Palm artery (අත්මල් ධමනිය / Palm artery)"
    ],
    "correctIndex": 3,
    "explanation": "Palm artery (අත්මල් ධමනිය / Palm artery)",
    "kind": "mcq",
    "sinhalaText": "නාඩි මේගය (pulse rate) මැනීමට සුදුසු ස්ථාන පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-07-q097",
    "moduleId": "lesson-07",
    "number": 97,
    "question": "What is the appropriate breathing of an adult :",
    "options": [
      "10-12 times per hour (පැයකට වාර 10–12ක්)",
      "14-16 times per second (තත්පරයකට වාර 14–16ක්)",
      "12-18 times per minute (මිනිත්තුවකට වාර 12–18ක්)",
      "14-16 times per minute (මිනිත්තුවකට වාර 14–16ක්)"
    ],
    "correctIndex": 2,
    "explanation": "12-18 times per minute (මිනිත්තුවකට වාර 12–18ක්) (Normal adult respiratory rate is generally 12–20\nbreaths/minute, with 12–18/min as the standard textbook range here.)",
    "kind": "mcq",
    "sinhalaText": "වැඩිහිටියෙකුමේ සුදුසු ශ්වසන මේගය (breathing rate) කුමක්ද:"
  },
  {
    "id": "lesson-07-q098",
    "moduleId": "lesson-07",
    "number": 98,
    "question": "It is a thin layer of tissue that lines the fundus of the eye, it project image :",
    "options": [
      "Optic nerve (දෘෂ්ටික ස්නායුව / Optic nerve)",
      "Crystalline lens (ස්ඵටික කාචය / Crystalline lens)",
      "Retina (දෘෂ්ටි විතානය / Retina)"
    ],
    "correctIndex": 2,
    "explanation": "Retina (දෘෂ්ටි විතානය / Retina)",
    "kind": "mcq",
    "sinhalaText": "ඇමස් පසුපස/අභ්‍යන්තර පෘෂ්ඨය ආවරණය කරන සහ ප්‍රතිබිම්බය ප්‍රක්මෂ්පණය කරන තුනී පටක ස්ථරය වන්නේ:"
  },
  {
    "id": "lesson-07-q099",
    "moduleId": "lesson-07",
    "number": 99,
    "question": "In Maslow's hierarchy it is refers to needs to sustain life :",
    "options": [
      "Safety needs (ආරක්ෂක අවශයතා / Safety needs)",
      "Self-Actualization needs (ස්වයං සාක්ෂාත් කර ගැනීමේ අවශයතා / Self-Actualization needs)",
      "Physiological need (කායික අවශයතා / Physiological need)"
    ],
    "correctIndex": 2,
    "explanation": "Physiological need (කායික අවශයතා / Physiological need)",
    "kind": "mcq",
    "sinhalaText": "මැස්මෙෝමේ ධූරාවලිමේදී ජීවිතය පවත්වා ගැනීමට ඇති අවශයතා (needs to sustain life) මෙස හැඳින්මවන්නේ:"
  },
  {
    "id": "lesson-07-q100",
    "moduleId": "lesson-07",
    "number": 100,
    "question": "It is the state of blood pressure when the heart is contracting :",
    "options": [
      "Systolic blood pressure (සිස්ටලික රුධිර පීඩනය / Systolic blood pressure)",
      "Diastolic blood pressure (ඩයස්ටලික රුධිර පීඩනය / Diastolic blood pressure)",
      "Blood pressure (රුධිර පීඩනය / Blood pressure)"
    ],
    "correctIndex": 0,
    "explanation": "Systolic blood pressure (සිස්ටලික රුධිර පීඩනය / Systolic blood pressure)",
    "kind": "mcq",
    "sinhalaText": "හදවත සංකෝචනය වන විට පවතින රුධිර පීඩන තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q101",
    "moduleId": "lesson-07",
    "number": 101,
    "question": "It is the lowest blood pressure and when the heart is relaxing :",
    "options": [
      "Diastolic blood pressure (ඩයස්ටලික රුධිර පීඩනය / Diastolic blood pressure)",
      "Systolic blood pressure (සිස්ටලික රුධිර පීඩනය / Systolic blood pressure)",
      "Blood pressure (රුධිර පීඩනය / Blood pressure)"
    ],
    "correctIndex": 0,
    "explanation": "Diastolic blood pressure (ඩයස්ටලික රුධිර පීඩනය / Diastolic blood pressure)",
    "kind": "mcq",
    "sinhalaText": "හදවත ලිහිල් වන (relaxing) විට පවතින අඩුම රුධිර පීඩන තත්ත්වය වන්නේ:"
  },
  {
    "id": "lesson-07-q102",
    "moduleId": "lesson-07",
    "number": 102,
    "question": "It is gather information from the rest of the body analyze and make judgment :",
    "options": [
      "Central nerves (මධයම ස්නායු / Central nerves)",
      "Brain (මොළය / Brain)",
      "Heart (හදවත / Heart)",
      "Peripheral nerves (පර්යන්ත ස්නායු / Peripheral nerves)"
    ],
    "correctIndex": 1,
    "explanation": "Brain (මොළය / Brain)",
    "kind": "mcq",
    "sinhalaText": "ශරීරයේ අනෙකුත් කොටස්වලින් තොරතුරු රැස් කර, විශ්මල්ෂණය කර, තීරණ ගන්නේ:"
  },
  {
    "id": "lesson-08-q001",
    "moduleId": "lesson-08",
    "number": 1,
    "question": "When going up the stairs with a cane the care worker SHOULD?",
    "options": [
      "Stands one step below behind the user (පරිශීලකයාට පිටුපසින් එක් පඩියක් පහළින් සිටියි)",
      "Stands next to the healthy side of the user (පරිශීලකයාගේ නිරෝගී පැත්තට යාබදව සිටියි)",
      "Stands in front of the user (පරිශීලකයා ඉදිරිපිට සිටියි)"
    ],
    "correctIndex": 0,
    "explanation": "Stands one step below behind the user (පරිශීලකයාට පිටුපසින් එක් පඩියක්පහළින් සිටියි) (When ascending stairs, standing one step behind/below helps support the user safely if they lose\nbalance backward.)",
    "kind": "mcq",
    "sinhalaText": "වේවැලකින් (cane) පඩිපෙළ නඟින විට සත්කාර සේවකයා කළ යුත්තේ කුමක්ද?"
  },
  {
    "id": "lesson-08-q002",
    "moduleId": "lesson-08",
    "number": 2,
    "question": "As a response to constipation of the user, the care worker SHOULD?",
    "options": [
      "Massage the abdomen downward (උදරය පහළට සම්බාහනය කිරීම)",
      "Massage the abdomen clockwise (උදරය දක්ෂිණාවර්තව / clockwise සම්බාහනය කිරීම)",
      "Massage the abdomen upward (උදරය ඉහළට සම්බාහනය කිරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Massage the abdomen clockwise (උදරය දක්ෂිණාවර්තව සම්බාහනය කිරීම)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාගේ මලබද්ධයට (constipation) ප්‍රතිචාරයක් ලෙස, සත්කාර සේවකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-08-q003",
    "moduleId": "lesson-08",
    "number": 3,
    "question": "When changing a hemiplegic user to lateral position, the care worker SHOULD?",
    "options": [
      "Keep the user's body in sitting position (පරිශීලකයාගේ ශරීරය වාඩි වී සිටින ඉරියව්වෙන් තබා ගැනීම)",
      "Keep the user's healthy side down (පරිශීලකයාගේ නිරෝගී පැත්ත යටට සිටින සේ තැබීම)",
      "Keep the user's unhealthy side down (පරිශීලකයාගේ ආබාධිත/අසනීප පැත්ත යටට සිටින සේ තැබීම)"
    ],
    "correctIndex": 2,
    "explanation": "Keep the user's unhealthy side down (පරිශීලකයාගේ ආබාධිත පැත්ත යටට සිටින සේ තැබීම) (Turning toward the affected/unhealthy side—with proper pillow support to avoid pressure—\nallows the caregiver to face/communicate with the user and keeps the unaffected side free/accessible.)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ අංශභාගය (hemiplegic) ඇති පරිශීලකයෙකු පැත්තකට හරවන (lateral position) ඉරියව්වට මාරු කරන විට, සත්කාර සේවකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-08-q004",
    "moduleId": "lesson-08",
    "number": 4,
    "question": "Appropriate way to take the user's back off the bed to prevent pressure ulcer?",
    "options": [
      "Fowler (ෆවුලර් ඉරියව්ව / Fowler)",
      "Senuki (සෙනුකි — පිට යටින් අත යවා/කුෂන් භාවිතයෙන් පිට ඉහළට ඔසවා වාතාශ්‍රය/පීඩනය අඩු කිරීම / Senuki)",
      "Knee buckling (දණහිසේ නැමීම / Knee buckling)"
    ],
    "correctIndex": 1,
    "explanation": "Senuki (සෙනුකි / Senuki)",
    "kind": "mcq",
    "sinhalaText": "තෙරපුම් තුවාල (pressure ulcer) වැළැක්වීම සඳහා පරිශීලකයාගේ පිට ඇඳෙන් ඉවතට/ඉහළට ගැනීමේ සුදුසු ක්‍රමය:"
  },
  {
    "id": "lesson-08-q005",
    "moduleId": "lesson-08",
    "number": 5,
    "question": "When transferring a client, the nurse aide should be supported by his?",
    "options": [
      "Back (පිට / Back)",
      "Shoulder (උරහිස / Shoulder)",
      "Legs (පාද / Legs)"
    ],
    "correctIndex": 2,
    "explanation": "Legs (පාද / Legs)",
    "kind": "mcq",
    "sinhalaText": "සේවාදායකයෙකු මාරු කරන (transferring) විට, හෙද සහායකයා ආධාර ලබා ගත යුත්තේ තම:"
  },
  {
    "id": "lesson-08-q006",
    "moduleId": "lesson-08",
    "number": 6,
    "question": "In walking, the care worker stands next to the affected side of the user :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්) (Supporting from the affected/weak side provides stability where\nthe user lacks strength.)",
    "kind": "mcq",
    "sinhalaText": "ඇවිදීමේදී, සත්කාර සේවකයා පරිශීලකයාගේ ආබාධිත පැත්තට (affected side) යාබදව සිටියි:"
  },
  {
    "id": "lesson-08-q007",
    "moduleId": "lesson-08",
    "number": 7,
    "question": "When transferring from bed to a wheelchair shall be placed on the healthy side of the user :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්)",
    "kind": "mcq",
    "sinhalaText": "ඇඳෙන් රෝද පුටුවකට මාරු කරන විට [රෝද පුටුව] පරිශීලකයාගේ නිරෝගී පැත්තේ (healthy side) තැබිය යුතුය:"
  },
  {
    "id": "lesson-08-q008",
    "moduleId": "lesson-08",
    "number": 8,
    "question": "It is recommended to change user's position once every 4hrs to prevent bedsore :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (Standard pressure-injury prevention typically recommends\nturning/repositioning more frequently—commonly about every 2 hours—and assessing individual skin/mobility\nneeds rather than waiting a full 4 hours.)",
    "kind": "mcq",
    "sinhalaText": "ඇඳ තුවාල (bedsore) වැළැක්වීම සඳහා සෑම පැය 4කට වරක් පරිශීලකයාගේ ඉරියව්ව වෙනස් කිරීම නිර්දේශ කෙරේ:"
  },
  {
    "id": "lesson-08-q009",
    "moduleId": "lesson-08",
    "number": 9,
    "question": "Care worker shall stand aside and half a step ahead of his visually handicapped user, and the user grabs the elbow",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්)",
    "kind": "mcq",
    "sinhalaText": "දෘශය ආබාධිත පරිශීලකයාට පවසකින් සහ අඩි පියවරක් ඉදිරියෙන් සත්කාර සේවකයා සිටින අතර, පරිශීලකයා සත්කාර සේවකයාවේ වැලමිට (elbow) අල්ලා ගනියි:"
  },
  {
    "id": "lesson-08-q010",
    "moduleId": "lesson-08",
    "number": 10,
    "question": "When giving a dry bath to user, the care worker must wipe the user's body from the center toward the periphery :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (Standard wiping direction for limbs/body cleansing moves from\nperipheral ends—such as fingers/toes—toward the center/heart to support venous return, while washing the\nface follows a specific sequence.)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාට වියළි සේනානයක් (dry bath) ලබා දෙන විට, සත්කාර සේවකයා පරිශීලකයාගේ ශරීරය මැද සිට පර්යන්තය\n(කෙළවරවල්) දෙසට පිස දැමිය යුතුය:"
  },
  {
    "id": "lesson-08-q011",
    "moduleId": "lesson-08",
    "number": 11,
    "question": "In three motion walking in the cane, the legs are put out in order of (1) cane, (2) healthy, (3) [affected side —",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (In classic 3-point/3-motion cane gait for hemiplegia, the\nsequence is typically: (1) Cane, (2) Affected/weak leg, (3) Unaffected/healthy leg.)",
    "kind": "mcq",
    "sinhalaText": "වේවැලකින් කරන තුන්-පියවර ඇවිදීමේදී (three motion walking), පාද තබන පිළිවවළ වන්නේ (1) වේවැල, (2) නිරෝගීපාදය, (3) [ආබාධිත පාදය — PDF හි කැපී ඇත]"
  },
  {
    "id": "lesson-08-q012",
    "moduleId": "lesson-08",
    "number": 12,
    "question": "When transferring from bed to a wheelchair, the care worker stands on the affected side of the user and protects",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්)",
    "kind": "mcq",
    "sinhalaText": "ඇඳෙන් රෝද පුටුවකට මාරු කරන විට, සත්කාර සේවකයා පරිශීලකයාගේ ආබාධිත පැත්තේ සිටගෙන ආබාධිත දණහිස ආරක්ෂා කරයි:"
  },
  {
    "id": "lesson-08-q013",
    "moduleId": "lesson-08",
    "number": 13,
    "question": "When changing hemiplegic user's position to the lateral position, the care worker shall keep the user's healthy side",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (Matches Q03: the affected/unhealthy side is placed down with\nproper support so the unaffected side stays free and accessible.)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ අංශභාග පරිශීලකයෙකුවේ ඉරියව්ව පැත්තකට හරවන ඉරියව්වට වෙනස් කරන විට, සත්කාර සේවකයා පරිශීලකයාගේනිරෝගී පැත්ත යටට තබා ගත යුතුය:"
  },
  {
    "id": "lesson-08-q014",
    "moduleId": "lesson-08",
    "number": 14,
    "question": "When assisting a user with hemiplegia to put on a shirt, put the sleeve on the healthy side first, then the sleeve on the affected side:",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) — Dressing rule (着脱の原則): Put clothes ON the affected side first (患側から着る); take clothes OFF the healthy side first (健側から脱ぐ).",
    "kind": "source-mcq",
    "sinhalaText": "අංශභාගය ඇති පරිශීලකයෙකුට ඇඳුමක් අන්දන විට, පළමුව නිරෝගී පැත්තේ අත් බාහුව දමා පසුව ආබාධිත පැත්තේ අත් බාහුව දැමිය යුතුය:"
  },
  {
    "id": "lesson-08-q015",
    "moduleId": "lesson-08",
    "number": 15,
    "question": "When walking with a cane using the 3-point gait, the proper order is (1) cane, (2) healthy side, (3) affected side:",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) — Standard 3-point cane gait sequence is: (1) Cane → (2) Affected leg → (3) Healthy leg (සැරයටිය → ආබාධිත පාදය → නිරෝගී පාදය).",
    "kind": "source-mcq",
    "sinhalaText": "සැරයටියක් සමඟ තුන්-ලක්ෂ්‍ය ගමනේදී (3-point gait) නිවැරදි අනුපිළිවෙළ වන්නේ (1) සැරයටිය, (2) නිරෝගී පැත්ත, (3) ආබාධිත පැත්තයි:"
  },
  {
    "id": "lesson-08-q016",
    "moduleId": "lesson-08",
    "number": 16,
    "question": "Which of the following is NOT correct when assisting a user in a wheelchair?\nරෝද පුටුවක සිටින පරිශීලකයෙකුට සහාය වන විට පහත සඳහන් ක්‍රියා අතරින් නිවැරදි නොවන්නේ කුමක්ද?",
    "options": [
      "Confirm the user's physical condition (පරිශීලකයාගේ ශාරීරික තත්ත්වය තහවුරු කිරීම)",
      "Place the user's feet on the footplates (පරිශීලකයාගේ පාද පාද තැබීමේ තහඩු මත තැබීම)",
      "Make sure the user's hands are on the driving wheels (පරිශීලකයාගේ අත් රෝද කරකවන රිම් මත තැබීම)",
      "Release the brake, tell the user the wheelchair is about to move, and then start pushing (තිරිංගය නිදහස් කර රෝද පුටුව චලනය කරන බව පරිශීලකයාට දන්වා පසුව තල්ලු කිරීම ආරම්භ කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "The user's hands must be kept clear of the driving wheels/hand rims while the wheelchair is being pushed, to prevent finger or hand injury. (රෝද පුටුව තල්ලු කරන විට පරිශීලකයාගේ ඇඟිලි හෝ අත් තුවාල වීම වැළැක්වීමට ඒවා රෝද කරකවන රිම්වලින් ඈත් කර තැබිය යුතුය.)",
    "kind": "mcq",
    "sinhalaText": "[PDF හි කොටසක් කැපී ඇත]"
  },
  {
    "id": "lesson-08-q017",
    "moduleId": "lesson-08",
    "number": 17,
    "question": "The following are types of abuse EXCEPT:\nපහත සඳහන් දෑ අපයෝජන වර්ග වේ. ඒවාට අයත් නොවන්නේ කුමක්ද?",
    "options": [
      "Leaving a person who needs nursing care without necessary care (neglect) (සත්කාර අවශ්‍ය පුද්ගලයෙකුට අවශ්‍ය සත්කාර නොදී අත්හැර දැමීම – නොසලකා හැරීම)",
      "Obtaining economic benefits from the user (පරිශීලකයාගෙන් ආර්ථික ප්‍රතිලාභ ලබාගැනීම)",
      "Administering excessive psychotropic medication (අධික මානසික බලපෑම් ඇති කරන ඖෂධ ලබාදීම)",
      "Using insulting words that cause psychological trauma to the user (පරිශීලකයාට මානසික පීඩාවක් ඇති කරන අපහාසාත්මක වචන භාවිත කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Excessive psychotropic medication is classified as medication-related abuse/physical restraint in this question set, while neglect, economic abuse and psychological abuse are the other three listed abuse types. (මෙම ප්‍රශ්න මාලාවේ අධික psychotropic ඖෂධ ලබාදීම ඖෂධ සම්බන්ධ අපයෝජනයක්/ශාරීරික සීමා කිරීමක් ලෙස වෙන් කරයි. අනෙක් විකල්ප නොසලකා හැරීම, ආර්ථික අපයෝජනය සහ මානසික අපයෝජනය වේ.)",
    "kind": "mcq",
    "sinhalaText": "[PDF හි කොටසක් කැපී ඇත]"
  },
  {
    "id": "lesson-08-q018",
    "moduleId": "lesson-08",
    "number": 18,
    "question": "The following are adverse effects of physical restraint EXCEPT:\nශාරීරික සීමා කිරීම් (physical restraint) නිසා ඇති විය හැකි අහිතකර බලපෑම් අතරට අයත් නොවන්නේ කුමක්ද?",
    "options": [
      "Discomfort or pain (අසහනය හෝ වේදනාව)",
      "Reduced physical function and muscle atrophy (ශාරීරික ක්‍රියාකාරිත්වය අඩුවීම සහ මාංශපේශී ක්ෂය වීම)",
      "Muscle weakening caused by restricting walking to prevent falls (වැටීම් වැළැක්වීම සඳහා ඇවිදීම සීමා කිරීමෙන් මාංශපේශී දුර්වල වීම)",
      "Increased physical abilities and reduced symptoms of dementia (ශාරීරික හැකියානේ වැඩිවීම සහ ඩිමෙන්ශියා රෝග ලක්ෂණ අඩුවීම)"
    ],
    "correctIndex": 3,
    "explanation": "Physical restraint can cause pain, loss of physical function and muscle weakening. It does not increase physical abilities or reduce dementia symptoms. (ශාරීරික සීමා කිරීම් නිසා වේදනාව, ශාරීරික ක්‍රියාකාරිත්වය අහිමි වීම සහ මාංශපේශී දුර්වල වීම ඇති විය හැක. එයින් ශාරීරික හැකියානේ වැඩිවීමක් හෝ ඩිමෙන්ශියා ලක්ෂණ අඩුවීමක් සිදු නොවේ.)",
    "kind": "mcq",
    "sinhalaText": "[PDF හි කොටසක් කැපී ඇත]"
  },
  {
    "id": "lesson-08-q019",
    "moduleId": "lesson-08",
    "number": 19,
    "question": "In the two step walking with the a cane, the legs are put in order of (1) cane and healthy, (2) affected side:",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (In 2-point/2-step cane gait for hemiplegia, the cane and\naffected/weak leg move together first, followed by the unaffected/strong leg.)",
    "kind": "mcq",
    "sinhalaText": "වේවැලකින් කරන වද-පියවර ඇවිදීමේදී (two step walking), පාද තබන පිළිවවළ වන්නේ (1) වේවැල සහ නිරෝගී පාදය,\n(2) ආබාධිත පාදය:"
  },
  {
    "id": "lesson-08-q020",
    "moduleId": "lesson-08",
    "number": 20,
    "question": "When transferring from bed to a wheelchair, the user holds the arm support with the hand on the healthy side :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (The user's hand on the healthy side typically holds a sturdy bed\nrail, table, or caregiver support rather than pulling on a movable wheelchair armrest.)",
    "kind": "mcq",
    "sinhalaText": "ඇඳෙන් රෝද පුටුවකට මාරු කරන විට, පරිශීලකයා නිරෝගී පැත්තේ අතින් අත්වාරුව (arm support) අල්ලා ගනියි:"
  },
  {
    "id": "lesson-08-q021",
    "moduleId": "lesson-08",
    "number": 21,
    "question": "The semi-sitting position (fowler position) on the bed, put a cushion under the knee of the user to prevent slipping",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්) (Raising the knee/thigh support slightly helps reduce sliding\ndown toward the foot of the bed.)",
    "kind": "mcq",
    "sinhalaText": "ඇඳ මත අර්ධ වශයෙන් වාඩි වී සිටින ඉරියව්වේදී (fowler position), පාද පැත්තට ලිසේසා යාම වැළැක්වීම සඳහාපරිශීලකයාගේ දණහිස යටින් කුෂන් එකක් තබයි:"
  },
  {
    "id": "lesson-08-q022",
    "moduleId": "lesson-08",
    "number": 22,
    "question": "To prevent aspiration, the head of the user shall be bent slightly forward :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්) (A slight chin-tuck / slight forward head flexion protects the\nairway during swallowing.)",
    "kind": "mcq",
    "sinhalaText": "ආහාර/ද්‍රව ශේවාසනාලයට යාම (aspiration) වැළැක්වීම සඳහා, පරිශීලකයාගේ හිස තරමක් ඉදිරියට නැමිය යුතුය:"
  },
  {
    "id": "lesson-08-q023",
    "moduleId": "lesson-08",
    "number": 23,
    "question": "When wearing the outwear in dressing care, the care worker shall pass the sleeves on the affected side of the user",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්)",
    "kind": "mcq",
    "sinhalaText": "ඇඳුම් ඇන්දවීමේ සත්කාරවේදී පිටතින් අඳින ඇඳුමක් (outwear) අන්දවන විට, සත්කාර සේවකයා පළමුව පරිශීලකයාගේආබාධිත පැත්තේ අත් බාහුව අන්දවා පසුව නිරෝගී පැත්තේ අත් බාහුව අන්දවයි:"
  },
  {
    "id": "lesson-08-q024",
    "moduleId": "lesson-08",
    "number": 24,
    "question": "Post meal oral care does not reduce the number of a bacteria in the oral cavity, so it cannot prevent aspiration",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 1,
    "explanation": "No (නැත) (Oral care after meals removes food residue and reduces oral\nbacteria, helping prevent aspiration pneumonia.)",
    "kind": "mcq",
    "sinhalaText": "ආහාර ගැනීවමන් පසු මුඛ සත්කාරය (Post meal oral care) මුඛ කුහරවේ බැක්ීරියා ප්‍රමාණය අඩු නොකරන බැවින් එයට ආශේවාස නියුමෝනියාව (aspiration pneumonia) වැළැක්විය නොහැක:"
  },
  {
    "id": "lesson-08-q025",
    "moduleId": "lesson-08",
    "number": 25,
    "question": "A hemiplegic user shall enter the bathtub from the healthy side :",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ අංශභාග පරිශීලකයෙකු නිරෝගී පැත්වතන් නාන තටාකයට (bathtub) ඇතුළු විය යුතුය:"
  },
  {
    "id": "lesson-08-q026",
    "moduleId": "lesson-08",
    "number": 26,
    "question": "In wheelchair assistance, care worker shall push the wheelchair forward in the ascent of the slope:",
    "options": [
      "Yes (ඔව්)",
      "No (නැත)"
    ],
    "correctIndex": 0,
    "explanation": "Yes (ඔව්)",
    "kind": "mcq",
    "sinhalaText": "රෝද පුටු සහාවේදී, බෑවුමකින් ඉහළට (ascent of the slope) යන විට සත්කාර සේවකයා රෝද පුටුව ඉදිරියට තල්ු කළ යුතුය:"
  },
  {
    "id": "lesson-08-q027",
    "moduleId": "lesson-08",
    "number": 27,
    "question": "Appropriate way to take user's back off the bed to prevent pressure ulcer :",
    "options": [
      "Fowler (ෆවුලර් / Fowler)",
      "Senuki (සෙනුකි / Senuki)",
      "Knee bucking (දණහිසේ නැමීම / Knee bucking)"
    ],
    "correctIndex": 1,
    "explanation": "Senuki (සෙනුකි / Senuki)",
    "kind": "mcq",
    "sinhalaText": "තෙරපුම් තුවාල (pressure ulcer) වැළැක්වීම සඳහා පරිශීලකයාගේ පිට ඇඳෙන් ඉවතට ගැනීමේ සුදුසු ක්‍රමය:"
  },
  {
    "id": "lesson-08-q028",
    "moduleId": "lesson-08",
    "number": 28,
    "question": "It serves to remove waste products from the body :",
    "options": [
      "Sweating (දහඩිය දැමීම / Sweating)",
      "Excretion (බැහැර කිරීම / Excretion)",
      "Bathing (සේනානය කිරීම / Bathing)"
    ],
    "correctIndex": 1,
    "explanation": "Excretion (බැහැර කිරීම / Excretion)",
    "kind": "mcq",
    "sinhalaText": "එය ශරීරයෙන් අපද්‍රවය ඉවත් කිරීමට උපකාරී වේ:"
  },
  {
    "id": "lesson-08-q029",
    "moduleId": "lesson-08",
    "number": 29,
    "question": "Appropriate equipment you need in assisting oral care :",
    "options": [
      "Tooth ette / mouth wash (ටූත් එට් / මුඛ සේදුම් දියර / Tooth ette / mouth wash)",
      "Tooth paste (දන්තාවල්ප / Tooth paste)",
      "Tooth brush (දත් බුරුසුව / Tooth brush)"
    ],
    "correctIndex": 2,
    "explanation": "Tooth brush (දත් බුරුසුව / Tooth brush) (Or a) Tooth ette / mouth wash\ndepending on whether basic toothbrushing or sponge/mouthwash care is tested; in standard caregiver oral care\nquestions, c Tooth brush is the primary answer.)",
    "kind": "mcq",
    "sinhalaText": "මුඛ සත්කාරයට (oral care) සහාය වීමේදී ඔබට අවශය සුදුසු උපකරණය:"
  },
  {
    "id": "lesson-08-q030",
    "moduleId": "lesson-08",
    "number": 30,
    "question": "When transferring a client, the nurse should be supported by his :",
    "options": [
      "Back (පිට / Back)",
      "Shoulder (උරහිස / Shoulder)",
      "Legs (පාද / Legs)"
    ],
    "correctIndex": 2,
    "explanation": "Legs (පාද / Legs)",
    "kind": "mcq",
    "sinhalaText": "සේවාදායකයෙකු මාරු කරන විට, වහදිය/සහායකයා ආධාර ලබා ගත යුත්තේ තම:"
  },
  {
    "id": "lesson-08-q031",
    "moduleId": "lesson-08",
    "number": 31,
    "question": "When helping a client recovering from a stroke to walk, the nurse aide should :",
    "options": [
      "Assist with a wheelchair (රෝද පුටුවකින් සහාය වීම)",
      "Assist behind the client (සේවාදායකයා පිටුපසින් සහාය වීම)",
      "Assist on the client's weak side (සේවාදායකයාගේ දුර්වල/ආබාධිත පැත්වතන් සහාය වීම)"
    ],
    "correctIndex": 2,
    "explanation": "Assist on the client's weak side (සේවාදායකයාගේ දුර්වල පැත්වතන් සහාය වීම)",
    "kind": "mcq",
    "sinhalaText": "ආඝාතයෙන් (stroke) සුවය ලබමින් සිටින සේවාදායකයෙකුට ඇවිදීමට උදේ කරන විට, හෙද සහායකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-08-q032",
    "moduleId": "lesson-08",
    "number": 32,
    "question": "What is the appropriate measurement of urinary output,",
    "options": [
      "300ml (මිලිලීටර් 300 / 300ml)",
      "1 quart (1 ක්වාට් / 1 quart)",
      "200L (ලීටර් 200 / 200L)"
    ],
    "correctIndex": 0,
    "explanation": "300ml (මිලිලීටර් 300 / 300ml) (A typical single voiding volume is roughly\naround 200–400 ml, making 300 ml the realistic voiding measurement here.)",
    "kind": "mcq",
    "sinhalaText": "මුත්‍රා පිටවීමේ සුදුසු මිනුම කුමක්ද,"
  },
  {
    "id": "lesson-08-q033",
    "moduleId": "lesson-08",
    "number": 33,
    "question": "What is the most comfortable position for a client with a respiratory problem :",
    "options": [
      "Prone (මුනින් අතට වැතිර සිීම / Prone)",
      "Fowler's (ෆවුලර් ඉරියව්ව / Fowler's)",
      "Supine (උඩුබැලි අතට වැතිර සිීම / Supine)"
    ],
    "correctIndex": 1,
    "explanation": "Fowler's (ෆවුලර් ඉරියව්ව / Fowler's)",
    "kind": "mcq",
    "sinhalaText": "ශේවසන ගැටුවක් (respiratory problem) ඇති සේවාදායකයෙකුට වඩාත් පහසු ඉරියව්ව කුමක්ද:"
  },
  {
    "id": "lesson-08-q034",
    "moduleId": "lesson-08",
    "number": 34,
    "question": "Which is the appropriate statement when assisting a user with right hemiplegia while eating :",
    "options": [
      "Sit on the right side standing (දකුණු පැත්තේ සිටගෙන සිීම)",
      "Sit on the left side standing (වම් පැත්තේ සිටගෙන සිීම)",
      "Sit on the left side sitting (වම් පැත්තේ වාඩි වී සිීම)"
    ],
    "correctIndex": 2,
    "explanation": "Sit on the left side sitting (වම් පැත්තේ වාඩි වී සිීම) (Sitting at eye level on\nthe unaffected/left side allows comfortable face-to-face meal assistance without looking down from a standing\nheight.)",
    "kind": "mcq",
    "sinhalaText": "දකුණු අර්ධ අංශභාගය (right hemiplegia) ඇති පරිශීලකයෙකුට ආහාර ගැනීමේදී සහාය වන විට සුදුසු ප්‍රකාශය කුමක්ද:"
  },
  {
    "id": "lesson-08-q035",
    "moduleId": "lesson-08",
    "number": 35,
    "question": "What is the appropriate way of supporting or assisting a right hemiplegic patient while putting on or",
    "options": [
      "Give the patient full support (රෝගියාට සම්ූර්ණ සහාය ලබා දීම)",
      "Tell the patient to put on clothes by himself or herself (තමන් විසින්ම ඇඳුම් අඳින ලෙස රෝගියාට පැවසීම)",
      "When putting off clothes, put first the right side through the sleeve (ඇඳුම් ගලවන විට, පළමුව දකුණුපැත්ත අත් බාහුව හරහා දැමීම)",
      "When putting on clothes, start with the affected side followed by the unaffected side (ඇඳුම් අඳින විට,\nආබාධිත පැත්වතන් ආරම්භ කර ඉන්පසු නිරෝගී පැත්වතන් සිදු කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "When putting on clothes, start with the affected side followed by\nthe unaffected side (ඇඳුම් අඳින විට, ආබාධිත පැත්වතන් ආරම්භ කර ඉන්පසු නිරෝගී පැත්වතන් සිදු කිරීම)",
    "kind": "mcq",
    "sinhalaText": "දකුණු අර්ධ අංශභාගය (right hemiplegic) ඇති රෝගියෙකුට/පරිශීලකයෙකුට ඇඳුම් ඇන්දවීමේදී හෝ මාරු කිරීමේදී සහාය වීමේ සුදුසු ක්‍රමය කුමක්ද:"
  },
  {
    "id": "lesson-08-q036",
    "moduleId": "lesson-08",
    "number": 36,
    "question": "In assisting the user from bed to wheelchair, which of the following is NOT correct :",
    "options": [
      "Confirm the user's physical condition (පරිශීලකයාගේ ශාරීරික තත්ත්වය තහවුරු කිරීම)",
      "Place the wheelchair beside the unaffected side of the user and activate the brake (රෝද පුටුව පරිශීලකයාගේ නිරෝගී පැත්තට යාබදව තබා තිරිංගය / brake ක්‍රියාත්මක කිරීම)",
      "Adjust the height of the bed so the user can sit on the edge of the bed with legs down (පරිශීලකයාට කකුල් පහළට දමා ඇඳේ කෙළරේ වාඩි විය හැකි වන පරිදි ඇඳේ උස සකසේ කිරීම)",
      "Make the user hold the wheelchair's armrest on the far side using the hand of the affected side\n(ආබාධිත පැත්තේ අත භාවිත කර දුරින් ඇති රෝද පුටුවේ අත්වාරුව අල්ලා ගැනීමට පරිශීලකයාට සැලැසේවීම)"
    ],
    "correctIndex": 3,
    "explanation": "Make the user hold the wheelchair's armrest on the far side using\nthe hand of the affected side (ආබාධිත පැත්තේ අත භාවිත කර දුරින් ඇති රෝද පුටුවේ අත්වාරුව අල්ලා ගැනීමට පරිශීලකයාට සැලැසේවීම)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයා ඇඳෙන් රෝද පුටුවකට මාරු කිරීමේදී සහාය වීම සම්බන්ධයෙන්, පහත සඳහන් ඒවායින් නිවැරදි නනොවන්නන්කුමක්ද:"
  },
  {
    "id": "lesson-08-q037",
    "moduleId": "lesson-08",
    "number": 37,
    "question": "What is the appropriate in changing clothes for physically handicapped user :",
    "options": [
      "Wearing on clothes from the good side to the bad side (හොඳ පැත්තේ සිට ආබාධිත පැත්තට ඇඳුම් ඇඳීම)",
      "For left hemiplegic user, putting on clothes, from right side (වම් අර්ධ අංශභාග පරිශීලකයෙකු සඳහා,\nදකුණු පැත්වතන් ඇඳුම් ඇඳීම)",
      "Taking off clothes from the good side followed by the bad side (හොඳ පැත්වතන් පළමුව සහ ඉන්පසුආබාධිත පැත්වතන් ඇඳුම් ගැලවීම)",
      "For right hemiplegic user, taking off clothes from the right side (දකුණු අර්ධ අංශභාග පරිශීලකයෙකුසඳහා, දකුණු පැත්වතන් ඇඳුම් ගැලවීම)"
    ],
    "correctIndex": 2,
    "explanation": "Taking off clothes from the good side followed by the bad side\n(හොඳ පැත්වතන් පළමුව සහ ඉන්පසු ආබාධිත පැත්වතන් ඇඳුම් ගැලවීම)",
    "kind": "mcq",
    "sinhalaText": "ශාරීරික ආබාධිත පරිශීලකයෙකුවේ ඇඳුම් මාරු කිරීමේදී සුදුසු ක්‍රමය කුමක්ද:"
  },
  {
    "id": "lesson-08-q038",
    "moduleId": "lesson-08",
    "number": 38,
    "question": "Which of the following is NOT correct in assisting user in a wheelchair :",
    "options": [
      "Confirm the user's physical condition (පරිශීලකයාගේ ශාරීරික තත්ත්වය තහවුරු කිරීම)",
      "Place the user's feet on the footplates (පරිශීලකයාගේ පාද පාද තැබීමේ පුවරු මත / footplates තැබීම)",
      "Make sure that the hand of the user should be on the driving wheels (පරිශීලකයාගේ අත රෝද කරකවන රෝද / driving wheels මත තිබිය යුතු බව තහවුරු කිරීම)",
      "Deactivate the brake and tell the user that the wheelchair will be moving, then start pushing it\n(තිරිංගය නිදහසේ කර රෝද පුටුව චලනය වන බව පරිශීලකයාට පවසා, ඉන්පසු එය තල්ු කිරීම ආරම්භ කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Make sure that the hand of the user should be on the driving\nwheels (පරිශීලකයාගේ අත රෝද කරකවන රෝද මත තිබිය යුතු බව තහවුරු කිරීම) (Keeping hands on the\nwheel rims while the caregiver pushes risks finger/hand injury.)",
    "kind": "mcq",
    "sinhalaText": "රෝද පුටුවක සිටින පරිශීලකයෙකුට සහාය වීමේදී පහත සඳහන් ඒවායින් නිවැරදි නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q039",
    "moduleId": "lesson-08",
    "number": 39,
    "question": "In meal assistance the following are correct. EXCEPT :",
    "options": [
      "Being careful in every meal by checking if the user has an allergy (පරිශීලකයාට අසාත්මිකතාවයක් /\nallergy තිවේදැයි පරීක්ෂා කරමින් සෑම ආහාර වේලකදීම සැලකිලිමත් වීම)",
      "Not letting the user drink liquid before meals because he / she might loss appetite (කෑම රුචිය අඩු විය හැකි බැවින් ආහාර ගැනීමට පෙර ද්‍රව පානය කිරීමට පරිශීලකයාට ඉඩ නොදීම)",
      "Standing while assisting that will make the user's chin be lifted up and may increase the risk of a\naspiration (සහාය දෙන අතරතුර සිටගෙන සිීවමන් පරිශීලකයාගේ නිකට ඉහළට එසවී ආශේවාස වීමේ / aspiration\nඅවදානම වැඩි විය හැක)",
      "Cooking small bites, paste or pureed food, it will make it easy those who have difficulty in\nswallowing to eat (කුඩා කැබලි, වේසේට් හෝ මෘදු පල්ප ආහාර පිසීවමන් ගිලීමේ අපහසුතා ඇති අයට ආහාර ගැනීම පහසු වේ)"
    ],
    "correctIndex": 1,
    "explanation": "Not letting the user drink liquid before meals because he / she\nmight loss appetite (කෑම රුචිය අඩු විය හැකි බැවින් ආහාර ගැනීමට පෙර ද්‍රව පානය කිරීමට පරිශීලකයාට ඉඩ නොදීම) (Sipping a little water/liquid before/during meals can help moisten the mouth/throat; note also\nthat option c describes an incorrect posture—standing/chin up—which is flagged as an aspiration\nrisk.)",
    "kind": "mcq",
    "sinhalaText": "ආහාර ගැනීමේ සහාවේදී පහත කරුණු නිවැරදි වේ, නේවො හැර:"
  },
  {
    "id": "lesson-08-q040",
    "moduleId": "lesson-08",
    "number": 40,
    "question": "Which of the following is NOT correct in using the wheelchair :",
    "options": [
      "Deactivate the brake when no one is using it (කිසිවවකු එය භාවිත නොකරන විට තිරිංගය / brake නිදහසේකිරීම)",
      "Raise the footplates when entering or exiting the chair (පුටුවට ඇතුළු වන විට හෝ ඉන් බසින විට\nfootplates ඉහළට එසවීම)",
      "Go down the slope with the wheelchair facing backwards for the user, especially [truncated in PDF]\n(බෑවුමකින් පහළට යන විට රෝද පුටුව පිටුපසට හරවා ගෙන යාම)",
      "Make sure that all of the parts of the wheelchair are in good condition including the tire, air\npressure and brake (ටයරය, වායු පීඩනය සහ තිරිංග ඇතුළුව රෝද පුටුවේ සියුම කොටසේ හොඳ තත්ත්වේ ඇතිබව තහවුරු කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "Deactivate the brake when no one is using it (කිසිවවකු එය භාවිත නොකරන විට තිරිංගය නිදහසේ කිරීම) (Brakes should be locked/engaged when stationary or when no one\nis pushing/using it so it does not roll away.)",
    "kind": "mcq",
    "sinhalaText": "රෝද පුටුව භාවිත කිරීමේදී පහත සඳහන් ඒවායින් නිවැරදි නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q041",
    "moduleId": "lesson-08",
    "number": 41,
    "question": "Choose the best answer, what is appropriate in assisting a user in defection :",
    "options": [
      "Use a diaper (ඩයපර් භාවිත කිරීම)",
      "Assume forward bent position during defecation (මළපහ කරන අතරතුර තරමක් ඉදිරියට නැමුණු ඉරියව්වක්ගැනීම)",
      "Open the windows or door during elimination for some fresh air (බැහැර කරන අතරතුර නැවුම් වාතය සඳහා ජවනල් හෝ දොර විවෘත කිරීම)",
      "Cleaning the genital area from back to front and cleaning the area thoroughly (ලිංගික ප්‍රදේශය පිටුපස සිට ඉදිරියට පිරිසිදු කිරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Assume forward bent position during defecation (මළපහ කරන අතරතුර තරමක් ඉදිරියට නැමුණු ඉරියව්වක් ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "මළපහ කිරීමේදී (defecation) පරිශීලකයෙකුට සහාය වීමේදී සුදුසුම දේ වන හොඳම පිළිතුර තෝරන්න:"
  },
  {
    "id": "lesson-08-q042",
    "moduleId": "lesson-08",
    "number": 42,
    "question": "Which is NOT an appropriate practice in assisting a user in defecation:",
    "options": [
      "Use disposable gloves and apron (ඉවත දැමිය හැකි අත්වැසුම් සහ ඒප්‍රන් භාවිත කිරීම)",
      "Stick to the user's defecation routine (පරිශීලකයාගේ මළපහ කිරීමේ දදනික රටාවට අනුකූල වීම)",
      "Stay beside the user to support the user's elimination (පරිශීලකයාගේ බැහැර කිරීමට සහාය වීම සඳහාපරිශීලකයා අසල රැඳී සිීම)",
      "Confirm if the user is in stable sitting position while seated on the toilet bowl and let him hold the\nhandrail (වකාමඩ් එවක් / toilet bowl වාඩි වී සිටින විට පරිශීලකයා සේථාවර වාඩි වීමේ ඉරියව්වක සිීදැයි තහවුරු කර අත්වැර / handrail අල්ලා ගැනීමට සැලැසේවීම)"
    ],
    "correctIndex": 2,
    "explanation": "Stay beside the user to support the user's elimination\n(පරිශීලකයාගේ බැහැර කිරීමට සහාය වීම සඳහා පරිශීලකයා අසල රැඳී සිීම) (When the user can sit safely on\ntheir own, respecting privacy by stepping out/giving privacy while remaining nearby/within call is\nstandard care practice.)",
    "kind": "mcq",
    "sinhalaText": "මළපහ කිරීමේදී පරිශීලකයෙකුට සහාය වීමේදී සුදුසු පිළිවවතක් නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q043",
    "moduleId": "lesson-08",
    "number": 43,
    "question": "In descending stairs, while using a cane or assisting device, what is NOT appropriate :",
    "options": [
      "Check the physical condition of the user (පරිශීලකයාගේ ශාරීරික තත්ත්වය පරීක්ෂා කිරීම)",
      "Follow this order in going down the stairs with can; Cane, foot of the unaffected side then the\naffected side (වේවැල සමඟ පඩිවපවළන් පහළට බසින විට මෙම පිළිවවළ අනුගමනය කිරීම: වේවැල, නිරෝගීපැත්තේ පාදය, ඉන්පසු ආබාධිත පැත්තේ පාදය)",
      "Make sure to hold your cane with your strong hand and grab the hand rail with the other (ඔවේශක්තිමත් අතින් වේවැල අල්ලාගෙන අනෙක් අතින් අත්වැර අල්ලා ගැනීමට වගබලා ගැනීම)",
      "The care worker should stand one step lower and in front of the user at the affected side and\nshould support the upper body of the user (සත්කාර සේවකයා ආබාධිත පැත්තේ පරිශීලකයාට ඉදිරියෙන් එක්පඩියක් පහළින් සිටගෙන පරිශීලකයාගේ ඉහළ ශරීරයට සහාය විය යුතුය)"
    ],
    "correctIndex": 1,
    "explanation": "Follow this order in going down the stairs with can; Cane, foot of\nthe unaffected side then the affected side (වේවැල සමඟ පඩිවපවළන් පහළට බසින විට මෙම පිළිවවළ අනුගමනය කිරීම: වේවැල, නිරෝගී පැත්තේ පාදය, ඉන්පසු ආබාධිත පැත්තේ පාදය) (When going down stairs, the\ncane and weaker/affected leg step down first to take the load, followed by the stronger/unaffected\nleg.)",
    "kind": "mcq",
    "sinhalaText": "වේවැලක් හෝ සහායක උපකරණයක් භාවිත කරමින් පඩිපෙළකින් පහළට බසින විට, සුදුසු නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q044",
    "moduleId": "lesson-08",
    "number": 44,
    "question": "In ascending stairs, while using a cane or assisting device, what is NOT appropriate :",
    "options": [
      "Check the physical condition of the user (පරිශීලකයාගේ ශාරීරික තත්ත්වය පරීක්ෂා කිරීම)",
      "In ascending stairs with a cane, follow this order; cane, foot of the unaffected side, then the\naffected side (වේවැල සමඟ පඩිවපවළන් ඉහළට නඟින විට මෙම පිළිවවළ අනුගමනය කිරීම: වේවැල, නිරෝගීපැත්තේ පාදය, ඉන්පසු ආබාධිත පැත්තේ පාදය)",
      "Make sure to hold your cane with your strong hand and grab the hand rail with the other (ඔවේශක්තිමත් අතින් වේවැල අල්ලාගෙන අනෙක් අතින් අත්වැර අල්ලා ගැනීමට වගබලා ගැනීම)",
      "The care worker should stand one step higher and in front of the user at the unaffected side and\nshould support the upper or lower body of the user if needed (සත්කාර සේවකයා නිරෝගී පැත්තේපරිශීලකයාට ඉදිරියෙන් එක් පඩියක් ඉහළින් සිටගෙන අවශය නම් ඉහළ හෝ පහළ ශරීරයට සහාය විය යුතුය)"
    ],
    "correctIndex": 3,
    "explanation": "The care worker should stand one step higher and in front of the\nuser at the unaffected side and should support the upper or lower body of the user if needed (සත්කාර සේවකයා නිරෝගී පැත්තේ පරිශීලකයාට ඉදිරියෙන් එක් පඩියක් ඉහළින් සිටගෙන සහාය වීම) (When going up\nstairs, the caregiver stands slightly behind/below to catch a backward slip and supports the affected\nside, while going down uses standing one step below in front to prevent a forward fall.)",
    "kind": "mcq",
    "sinhalaText": "වේවැලක් හෝ සහායක උපකරණයක් භාවිත කරමින් පඩිපෙළකින් ඉහළට නඟින විට, සුදුසු නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q045",
    "moduleId": "lesson-08",
    "number": 45,
    "question": "Which of the following is not appropriate in grooming assistance :",
    "options": [
      "The caregiver choose a comfortable outfit of the user for the day (එදිනට පරිශීලකයාට ගැළපෙන පහසුඇඳුමක් සත්කාරකයා විසින් තෝරා ගැනීම)",
      "Assisting the user only when the he / she is unable to do it by herself / himself (පරිශීලකයාට තනිවම කිරීමට නොහැකි අසේථාවලදී පමණක් සහාය වීම)",
      "For visually impaired, explaining the design of materials to be used in grooming and letting them\ntouch those materials (දෘශය ආබාධිත අය සඳහා, භාවිත කරන ද්‍රවයවල සැලැසේම/හැඩය පැහැදිලි කර ඒවා සේපර්ශ කිරීමට ඉඩ දීම)",
      "Inform the user before helping in bathing, washing etc... they might feel that the caregiver is\ninvading their privacy consider how they feel them not to feel embarrassed (සේනානය, සේදීම ආදියට උදේකිරීමට පෙර පරිශීලකයාට දැනුම් දීම)"
    ],
    "correctIndex": 0,
    "explanation": "The caregiver choose a comfortable outfit of the user for the day\n(එදිනට පරිශීලකයාට ගැළපෙන පහසු ඇඳුමක් සත්කාරකයා විසින් තෝරා ගැනීම) (Self-selection/choice allows\nthe user to choose their own outfit rather than the caregiver deciding unilaterally.)",
    "kind": "mcq",
    "sinhalaText": "පෞද්ගලික පෙනුම සහ සැරසීමේ සහාවේදී (grooming assistance) සුදුසු නනොවන්නන් පහත ඒවායින් කුමක්ද:"
  },
  {
    "id": "lesson-08-q046",
    "moduleId": "lesson-08",
    "number": 46,
    "question": "In assisting on a moving wheelchair which of the following is NOT correct :",
    "options": [
      "Place the user's feet on the footplates (පරිශීලකයාගේ පාද footplates මත තැබීම)",
      "Check the user's physical condition (පරිශීලකයාගේ ශාරීරික තත්ත්වය පරීක්ෂා කිරීම)",
      "Tell the user that they will go up before going up on a step (පඩියකින් ඉහළට යාමට පෙර ඉහළට යන බව පරිශීලකයාට පැවසීම)",
      "Tell the user that you will press the tipping bar with your foot before going down the slope\n(බෑවුමකින් පහළට යාමට පෙර පාදයෙන් tipping bar එක පාගන බව පරිශීලකයාට පැවසීම)"
    ],
    "correctIndex": 3,
    "explanation": "Tell the user that you will press the tipping bar with your foot\nbefore going down the slope (බෑවුමකින් පහළට යාමට පෙර පාදයෙන් tipping bar එක පාගන බව පරිශීලකයාට පැවසීම) (The tipping bar/lever is pressed with the foot to lift the front casters over a step/curb, not to\ngo down a smooth slope.)",
    "kind": "mcq",
    "sinhalaText": "රෝද පුටුවක ගමන් කරන විට සහාය වීමේදී පහත සඳහන් ඒවායින් නිවැරදි නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q047",
    "moduleId": "lesson-08",
    "number": 47,
    "question": "Which one of the following is correct in anatomical body positions :",
    "options": [
      "Face and upper body facing down as supine position (මුහුණ සහ ඉහළ ශරීරය පහළට යොමු වූ ඉරියව්ව\nsupine position ලෙස)",
      "Face and upper body should be facing up, lying on the back known as prone position (පිට මත වැතිරීමුහුණ සහ ඉහළ ශරීරය ඉහළට යොමු වීම prone position ලෙස)",
      "Body is on the left lateral recumbent position where the individual is lying on their right side\n(පුද්ගලයා දකුණු පැත්තට වැතිර සිටින විට left lateral recumbent position ලෙස)",
      "Feet on the floor and sitting on the edge of the bed known as end - sitting position (පාද බිම තබා ඇඳේකෙළරේ වාඩි වී සිීම end-sitting position ලෙස හැඳින්වේ)"
    ],
    "correctIndex": 3,
    "explanation": "Feet on the floor and sitting on the edge of the bed known as end\n- sitting position (පාද බිම තබා ඇඳේ කෙළරේ වාඩි වී සිීම end-sitting position ලෙස හැඳින්වේ)",
    "kind": "mcq",
    "sinhalaText": "ශරීර ඉරියව් (anatomical body positions) සම්බන්ධයෙන් පහත ඒවායින් නිවැරදි වන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-08-q048",
    "moduleId": "lesson-08",
    "number": 48,
    "question": "This is the most stable posture or position:",
    "options": [
      "Comfortable supine position (පහසු උඩුබැලි ඉරියව්ව / Comfortable supine position)",
      "Lateral position (පැති ඉරියව්ව / Lateral position)",
      "Fowler's position (ෆවුලර් ඉරියව්ව / Fowler's position)",
      "Prone position (මුනින් අතට වැතිර සිීම / Prone position)"
    ],
    "correctIndex": 0,
    "explanation": "Comfortable supine position (පහසු උඩුබැලි ඉරියව්ව / Comfortable\nsupine position) (Lying flat/supine distributes body weight across a wide surface area on the bed.)",
    "kind": "mcq",
    "sinhalaText": "මෙය වඩාත්ම සේථාවර ඉරියව්ව හෝ පිහිීමයි:"
  },
  {
    "id": "lesson-08-q049",
    "moduleId": "lesson-08",
    "number": 49,
    "question": "Nursing care related to getting up EXCEPT :",
    "options": [
      "Adjust the height of the bed (ඇඳේ උස සකසේ කිරීම)",
      "Assist the user to lateral position (පරිශීලකයා පැති ඉරියව්වට / lateral position ගැනීමට සහාය වීම)",
      "Move the head of the user to edge of bed (පරිශීලකයාගේ හිස ඇඳේ කෙළවරට ගෙන යාම)"
    ],
    "correctIndex": 2,
    "explanation": "Move the head of the user to edge of bed (පරිශීලකයාගේ හිස ඇඳේකෙළවරට ගෙන යාම) (When sitting up from bed, legs/hips swing to the edge of the bed; moving the\nhead to the edge can risk falling off.)",
    "kind": "mcq",
    "sinhalaText": "නැගිීමට (getting up) අදාළ හෙද සත්කාරය, නේවො හැර:"
  },
  {
    "id": "lesson-08-q050",
    "moduleId": "lesson-08",
    "number": 50,
    "question": "It refers to a sudden giving way of the knee while assuming a standing position which can cause fails",
    "options": [
      "Sitting position (වාඩි වී සිටින ඉරියව්ව / Sitting position)",
      "Knee backing (දණහිසේ නැමීම / Knee buckling)",
      "Standing position (සිටගෙන සිටින ඉරියව්ව / Standing position)"
    ],
    "correctIndex": 1,
    "explanation": "Knee backing (දණහිසේ නැමීම / Knee buckling)",
    "kind": "mcq",
    "sinhalaText": "සිටගෙන සිටින ඉරියව්වට පැමිවණන විට දණහිස හදිසිවේම නැමී/වැී යාවමන් වැීම් (falls) ඇති විය හැකි තත්ත්වය මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-08-q051",
    "moduleId": "lesson-08",
    "number": 51,
    "question": "Nursing care related to transfer from bed to a wheelchair, EXCEPT :",
    "options": [
      "Adjust the height of the bed (ඇඳේ උස සකසේ කිරීම)",
      "Place the wheelchair beside the affected side (රෝද පුටුව ආබාධිත පැත්තට යාබදව තැබීම)",
      "Have the user hold the armrest of the unaffected side (නිරෝගී පැත්තේ අත්වාරුව අල්ලා ගැනීමට පරිශීලකයාට සැලැසේවීම)"
    ],
    "correctIndex": 1,
    "explanation": "Place the wheelchair beside the affected side (රෝද පුටුව ආබාධිත පැත්තට යාබදව තැබීම)",
    "kind": "mcq",
    "sinhalaText": "ඇඳෙන් රෝද පුටුවකට මාරු කිරීමට (transfer from bed to a wheelchair) අදාළ හෙද සත්කාරය, නේවො හැර:"
  },
  {
    "id": "lesson-08-q052",
    "moduleId": "lesson-08",
    "number": 52,
    "question": "Nursing care related to walking for a user with hemiplegia :",
    "options": [
      "Cane - the affected side - the unaffected side (වේවැල - ආබාධිත පැත්ත - නිරෝගී පැත්ත)",
      "Cane - the unaffected side - the affected side (වේවැල - නිරෝගී පැත්ත - ආබාධිත පැත්ත)",
      "The affected side - cane - the unaffected side (ආබාධිත පැත්ත - වේවැල - නිරෝගී පැත්ත)",
      "The unaffected side cane - the affected side (නිරෝගී පැත්ත - වේවැල - ආබාධිත පැත්ත)"
    ],
    "correctIndex": 0,
    "explanation": "Cane - the affected side - the unaffected side (වේවැල - ආබාධිත පැත්ත - නිරෝගී පැත්ත)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ අංශභාගය (hemiplegia) ඇති පරිශීලකයෙකුවේ ඇවිදීමට අදාළ හෙද සත්කාරය:"
  },
  {
    "id": "lesson-08-q053",
    "moduleId": "lesson-08",
    "number": 53,
    "question": "The nursing care related to going up the stairs :",
    "options": [
      "Cane - foot of unaffected side - foot of affected side (වේවැල - නිරෝගී පැත්තේ පාදය - ආබාධිත පැත්තේපාදය)",
      "Cane-foot of affected side - foot of unaffected side (වේවැල - ආබාධිත පැත්තේ පාදය - නිරෝගී පැත්තේපාදය)",
      "Foot of unaffected side - cane - foot of affected side (නිරෝගී පැත්තේ පාදය - වේවැල - ආබාධිත පැත්තේපාදය)",
      "Foot of affected side - cane - foot of unaffected side (ආබාධිත පැත්තේ පාදය - වේවැල - නිරෝගී පැත්තේපාදය)"
    ],
    "correctIndex": 2,
    "explanation": "Foot of unaffected side - cane - foot of affected side (නිරෝගීපැත්තේ පාදය - වේවැල - ආබාධිත පැත්තේ පාදය) (When stepping up stairs, the stronger/unaffected leg\nsteps up onto the higher step first, followed by the cane and affected leg.)",
    "kind": "mcq",
    "sinhalaText": "පඩිවපවළන් ඉහළට නැඟීමට අදාළ හෙද සත්කාරය:"
  },
  {
    "id": "lesson-08-q054",
    "moduleId": "lesson-08",
    "number": 54,
    "question": "It is the device that is more stable as the supporting area is bigger :",
    "options": [
      "Cane (වේවැල / Cane)",
      "Quad cane (පාද හතවර් වේවැල / Quad cane)",
      "Walker (වෝකර් / Walker)"
    ],
    "correctIndex": 2,
    "explanation": "Walker (වෝකර් / Walker)",
    "kind": "mcq",
    "sinhalaText": "ආධාරක ප්‍රදේශය විශාල බැවින් වඩාත් සේථාවර වන උපකරණය වන්නේ:"
  },
  {
    "id": "lesson-08-q055",
    "moduleId": "lesson-08",
    "number": 55,
    "question": "It is use when the body weight cannot be supported sufficiently on the affected side :",
    "options": [
      "Quad cane (පාද හතවර් වේවැල / Quad cane)",
      "Lift (ලිෆේට් / Lift)",
      "Walker (වෝකර් / Walker)",
      "Cane (වේවැල / Cane)"
    ],
    "correctIndex": 0,
    "explanation": "Quad cane (පාද හතවර් වේවැල / Quad cane) / c) Walker (වෝකර් /\nWalker) (A quad cane provides broader base support than a single cane when unilateral weight-\nbearing stability is limited; a is the specific cane variant in the list.)",
    "kind": "mcq",
    "sinhalaText": "ආබාධිත පැත්තේ ශරීරවේ බර ප්‍රමාණවත් ලෙස දරා ගත නොහැකි විට භාවිත කරන්නේ:"
  },
  {
    "id": "lesson-08-q056",
    "moduleId": "lesson-08",
    "number": 56,
    "question": "It is light weight and very user friendly :",
    "options": [
      "Quad cane (Quad cane)",
      "T.cane (T-වේවැල / T.cane)",
      "Lift (Lift)",
      "Wheelchair (Wheelchair)"
    ],
    "correctIndex": 1,
    "explanation": "T.cane (T-වේවැල / T.cane)",
    "kind": "mcq",
    "sinhalaText": "එය බරින් අඩු (light weight) වන අතර භාවිත කරන්නාට ඉතා පහසුය:"
  },
  {
    "id": "lesson-08-q057",
    "moduleId": "lesson-08",
    "number": 57,
    "question": "In walking, the care worker stands :",
    "options": [
      "In front of the user (පරිශීලකයා ඉදිරිපිට)",
      "Next to the affected side (ආබාධිත පැත්තට යාබදව)",
      "Next to the unaffected side (නිරෝගී පැත්තට යාබදව)"
    ],
    "correctIndex": 1,
    "explanation": "Next to the affected side (ආබාධිත පැත්තට යාබදව)",
    "kind": "mcq",
    "sinhalaText": "ඇවිදීමේදී, සත්කාර සේවකයා සිටගෙන සිටින්නේ:"
  },
  {
    "id": "lesson-08-q058",
    "moduleId": "lesson-08",
    "number": 58,
    "question": "Choose the appropriate time in changing user's position:",
    "options": [
      "Once every 6 hours (සෑම පැය 6කට වරක්)",
      "Once every 2 hours (සෑම පැය 2කට වරක්)",
      "Once every 4 hours (සෑම පැය 4කට වරක්)"
    ],
    "correctIndex": 1,
    "explanation": "Once every 2 hours (සෑම පැය 2කට වරක්)",
    "kind": "mcq",
    "sinhalaText": "පරිශීලකයාගේ ඉරියව්ව වෙනස් කිරීමට සුදුසු කාලය තෝරන්න:"
  },
  {
    "id": "lesson-08-q059",
    "moduleId": "lesson-08",
    "number": 59,
    "question": "In meal assistance of a hemiplegic user, the care worker should :",
    "options": [
      "Sits on the healthy side of the user (පරිශීලකයාගේ නිරෝගී පැත්තේ වාඩි වී සිීම)",
      "Stands of [at] the back of the user (පරිශීලකයාගේ පිටුපසින් සිටගෙන සිීම)",
      "Stands on the unaffected side (නිරෝගී පැත්තේ සිටගෙන සිීම)",
      "Sits on the affected side (ආබාධිත පැත්තේ වාඩි වී සිීම)"
    ],
    "correctIndex": 0,
    "explanation": "Sits on the healthy side of the user (පරිශීලකයාගේ නිරෝගී පැත්තේවාඩි වී සිීම)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ අංශභාග පරිශීලකයෙකුට ආහාර ගැනීමේදී සහාය වන විට, සත්කාර සේවකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-08-q060",
    "moduleId": "lesson-08",
    "number": 60,
    "question": "In 3 - motion walking with a cane, what is the appropriate order :",
    "options": [
      "Cane affected side - unaffected side (වේවැල - ආබාධිත පැත්ත - නිරෝගී පැත්ත)",
      "Cane the affected side - unaffected side (වේවැල - ආබාධිත පැත්ත - නිරෝගී පැත්ත)",
      "Cane - the unaffected side - affected side (වේවැල - නිරෝගී පැත්ත - ආබාධිත පැත්ත)",
      "Cane unaffected side - affected side (වේවැල - නිරෝගී පැත්ත - ආබාධිත පැත්ත)"
    ],
    "correctIndex": 0,
    "explanation": "Cane affected side - unaffected side (වේවැල - ආබාධිත පැත්ත -\nනිරෝගී පැත්ත)",
    "kind": "mcq",
    "sinhalaText": "වේවැලකින් කරන 3-පියවර ඇවිදීමේදී (3-motion walking), සුදුසු පිළිවවළ කුමක්ද:"
  },
  {
    "id": "lesson-08-q061",
    "moduleId": "lesson-08",
    "number": 61,
    "question": "When going up the stairs with a cane the care worker should:",
    "options": [
      "Stands one step below behind the user (පරිශීලකයාට පිටුපසින් එක් පඩියක් පහළින් සිටියි)",
      "Stands next to the healthy side of the user (පරිශීලකයාගේ නිරෝගී පැත්තට යාබදව සිටියි)",
      "Stands next to the affected side of the user (පරිශීලකයාගේ ආබාධිත පැත්තට යාබදව සිටියි)",
      "Stands in front of the user (පරිශීලකයා ඉදිරිපිට සිටියි)"
    ],
    "correctIndex": 0,
    "explanation": "Stands one step below behind the user (පරිශීලකයාට පිටුපසින් එක්පඩියක් පහළින් සිටියි)",
    "kind": "mcq",
    "sinhalaText": "වේවැලකින් පඩිපෙළ නඟින විට සත්කාර සේවකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-08-q062",
    "moduleId": "lesson-08",
    "number": 62,
    "question": "When changing a hemiplegic user to lateral position, the care worker should :",
    "options": [
      "Keep the user's body in sitting position (පරිශීලකයාගේ ශරීරය වාඩි වී සිටින ඉරියව්වෙන් තබා ගැනීම)",
      "Keep the user's healthy side down (පරිශීලකයාගේ නිරෝගී පැත්ත යටට තබා ගැනීම)",
      "Keep the user's unhealthy side down (පරිශීලකයාගේ ආබාධිත/අසනීප පැත්ත යටට තබා ගැනීම)"
    ],
    "correctIndex": 2,
    "explanation": "Keep the user's unhealthy side down (පරිශීලකයාගේ ආබාධිත පැත්ත යටට තබා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "අර්ධ අංශභාග පරිශීලකයෙකු පැත්තකට හරවන ඉරියව්වට වෙනස් කරන විට, සත්කාර සේවකයා කළ යුත්තේ:"
  },
  {
    "id": "lesson-08-q063",
    "moduleId": "lesson-08",
    "number": 63,
    "question": "It is one of the joy of life :",
    "options": [
      "Eating (ආහාර ගැනීම / Eating)",
      "Meal (ආහාර වේල / Meal)",
      "Food (ආහාර / Food)"
    ],
    "correctIndex": 0,
    "explanation": "Eating (ආහාර ගැනීම / Eating)",
    "kind": "mcq",
    "sinhalaText": "එය ජීවිතවේ එක් සතුටකි:"
  },
  {
    "id": "lesson-08-q064",
    "moduleId": "lesson-08",
    "number": 64,
    "question": "Pre- oral care is good for :",
    "options": [
      "Removing saliva excretion (කෙළ ස්‍රාවය ඉවත් කිරීමට)",
      "Decreasing [saliva/dryness — truncated in PDF] (අඩු කිරීමට)",
      "Promoting [saliva secretion / appetite — truncated in PDF] (ප්‍රවර්ධනය කිරීමට)",
      "Balancing [oral moisture/function — truncated in PDF] (සමතුලිත කිරීමට)"
    ],
    "correctIndex": 2,
    "explanation": "Promoting [saliva secretion / swallowing readiness] (ප්‍රවර්ධනය කිරීමට — Pre-oral care helps moisten the mouth and stimulate saliva/swallowing before meals.)",
    "kind": "mcq",
    "sinhalaText": "ආහාර ගැනීමට පෙර මුඛ සත්කාරය (Pre-oral care) හොඳ වන්නේ:"
  },
  {
    "id": "lesson-08-q065",
    "moduleId": "lesson-08",
    "number": 65,
    "question": "Which of the following shows the proper sequence of cleaning the face :",
    "options": [
      "Forehead nose eyes cheeks jaw Mouth (නළල → නාසය → ඇසේ → කම්මුල් → හකු → මුඛය)",
      "[Truncated in PDF: Jaw ... Mouth] (PDF හි කොටසක් කැපී ඇත)",
      "Eyes [Truncated in PDF: eye ... Mouth Jaw ... Nose ... Forehead ... Cheeks] (PDF හි කොටසක් කැපීඇත)",
      "Eyes Nose Cheeks Forehead Nose Mouth Forehead Cheeks Jaw (PDF හි කොටසක් කැපී ඇත)"
    ],
    "correctIndex": 0,
    "explanation": "Forehead nose eyes cheeks jaw Mouth (නළල → නාසය → ඇසේ →\nකම්මුල් → හකු → මුඛය — Note: options b–d in the PDF contain garbled/truncated word strings.)",
    "kind": "mcq",
    "sinhalaText": "මුහුණ පිරිසිදු කිරීමේ නිවැරදි අනුපිළිවවළ පහත ඒවායින් පෙන්නුම් කරන්නේ කුමක්ද:"
  },
  {
    "id": "lesson-08-q066",
    "moduleId": "lesson-08",
    "number": 66,
    "question": "Which one is NOT correct in bathing assistance :",
    "options": [
      "For right hemiplegic user, enter the bathtub with the left side (දකුණු අර්ධ අංශභාග පරිශීලකයෙකු සඳහා,\nවම් පැත්වතන් නාන තටාකයට ඇතුළු වීම)",
      "Considering the possible embarrassment of the user, put towel into his / her private part\n(පරිශීලකයාට ඇති විය හැකි ලැජ්ජාව සලකා, ඔහුගේ/ඇයගේ පෞද්ගලික අවයව මත තුවායක් තැබීම)",
      "For hemiplegic user, enter the bath tub with the affected side (අර්ධ අංශභාග පරිශීලකයෙකු සඳහා,\nආබාධිත පැත්වතන් නාන තටාකයට ඇතුළු වීම)",
      "Let the user drink water before and after taking a bath rehydration is important (සේනානය කිරීමට පෙර සහ පසු පරිශීලකයාට ජලය පානය කිරීමට ඉඩ දීම; නැවත තරල ලබා ගැනීම වැදගත්ය)"
    ],
    "correctIndex": 2,
    "explanation": "For hemiplegic user, enter the bath tub with the affected side (අර්ධ අංශභාග පරිශීලකයෙකු සඳහා, ආබාධිත පැත්වතන් නාන තටාකයට ඇතුළු වීම)",
    "kind": "mcq",
    "sinhalaText": "සේනාන සහාවේදී (bathing assistance) නිවැරදි නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q067",
    "moduleId": "lesson-08",
    "number": 67,
    "question": "Which of the following is NOT correct in oral care :",
    "options": [
      "It is effective in the prevention of aspiration pneumonia (එය ආශේවාස නියුමෝනියාව වැළැක්වීමට ඵලදායීවේ)",
      "The care giver should lift the chin of the user and gently brush all the teeth surface and tongue\n(සත්කාරකයා පරිශීලකයාගේ නිකට ඉහළට ඔසවා සියු දත් මතුපිට සහ දිව මෘදුව මදිනු ලැවේ)",
      "To prevent the spread of germs, the care giver should use a clean disposable gloves when\nbrushing the user's teeth (විෂබීජ පැතිරීම වැළැක්වීම සඳහා, පරිශීලකයාගේ දත් මදින විට පිරිසිදු ඉවත දැමිය හැකිඅත්වැසුම් භාවිත කළ යුතුය)",
      "To prevent damaging the user's teeth or gum and to avoid exerting greater amount of force, hold\nthe tooth brush like you are holding a penal [pen] (පරිශීලකයාගේ දත් හෝ විදුරුමසට හානි වීම වැළැක්වීමට සහ අධික බලයක් වයදීම වැළැක්වීමට, පෑනක් අල්ලා ගන්නා ආකාරයට දත් බුරුසුව අල්ලා ගන්න)"
    ],
    "correctIndex": 1,
    "explanation": "The care giver should lift the chin of the user and gently brush all\nthe teeth surface and tongue (සත්කාරකයා පරිශීලකයාගේ නිකට ඉහළට ඔසවා දත් සහ දිව මැදීම) (Lifting the\nchin tilts the head back and opens the airway toward the lungs, increasing aspiration risk during oral\ncare.)",
    "kind": "mcq",
    "sinhalaText": "මුඛ සත්කාරවේදී (oral care) පහත සඳහන් ඒවායින් නිවැරදි නනොවන්නන් කුමක්ද:"
  },
  {
    "id": "lesson-08-q068",
    "moduleId": "lesson-08",
    "number": 68,
    "question": "Which statement does NOT follow the official guidance for preparing a user for bathing?\nපරිශීලකයෙකු නෑවීමට සූදානම් කිරීම පිළිබඳ නිල මාර්ගෝපදේශයට අනුකූල නොවන ප්‍රකාශය කුමක්ද?",
    "options": [
      "Give the user liquids only after the bath, without ensuring hydration before bathing (නෑවීමට පෙර ප්‍රමාණවත් දියර ලබාදීම තහවුරු නොකර, නෑවීමෙන් පසුව පමණක් දියර ලබාදීම)",
      "Consider and protect the user's feeling of embarrassment and privacy (පරිශීලකයාගේ ලැජ්ජාව සහ පෞද්ගලිකත්වය සැලකිල්ලට ගෙන ආරක්ෂා කිරීම)",
      "Avoid bathing about one hour before or after meals (ආහාර ගැනීමට පැයකට පමණ පෙර හෝ පසු නෑවීමෙන් වැළකීම)",
      "Reduce the temperature difference between the dressing room and the bathroom (ඇඳුම් මාරු කරන කාමරය සහ නාන කාමරය අතර උෂ්ණත්ව වෙනස අඩු කිරීම)"
    ],
    "correctIndex": 0,
    "explanation": "The official MHLW study text says to ensure the user is hydrated BEFORE bathing to prevent dehydration. It also advises avoiding bathing about one hour before or after meals, protecting privacy, and reducing room-temperature differences. The option has therefore been clarified as 'only after' to make the incorrect practice unambiguous. (විජලනය වැළැක්වීම සඳහා නෑවීමට පෙරම ප්‍රමාණවත් දියර ලබා ඇති බව තහවුරු කළ යුතු බව MHLW නිල පෙළ සඳහන් කරයි. ආහාර වේලකට පැයකට පෙර හෝ පසු නෑවීමෙන් වැළකීම, පෞද්ගලිකත්වය රැකීම සහ කාමර අතර උෂ්ණත්ව වෙනස අඩු කිරීමද නිර්දේශ කරයි. එබැවින් වැරදි ක්‍රියාව පැහැදිලි කිරීමට 'පසුව පමණක්' ලෙස විකල්පය නිවැරදි කර ඇත.)",
    "kind": "mcq",
    "sinhalaText": "සේනාන සහාවේදී සුදුසු නනොවන්නන් කුමක්දැයි තෝරන්න:"
  },
  {
    "id": "lesson-09-q020",
    "moduleId": "lesson-09",
    "number": 20,
    "question": "The following are the kinds of routes of infection, EXCEPT:",
    "options": [
      "Body fluids (ශරීර තරල / Body fluids)",
      "Droplet infection (ද්‍රව බිඳිති ආසාදනය / Droplet infection)",
      "Airborne (වාතය මගින් බෝවීම / Airborne)",
      "Contagious infection (ස්පර්ශ/සම්බන්ධතා ආසාදනය / Contagious infection)"
    ],
    "correctIndex": 0,
    "explanation": "Body fluids (ශරීර තරල / Body fluids) (Body fluids are a source of infection, whereas droplet, airborne,\nand contact/contagious are routes of transmission.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ආසාදන මාර්ග (routes of infection) වර්ග වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q021",
    "moduleId": "lesson-09",
    "number": 21,
    "question": "The following are the points to prevent lower back pain, EXCEPT:",
    "options": [
      "Use body mechanics (ශරීර යාන්ත්‍ර විද්‍යාව / body mechanics භාවිත කිරීම)",
      "Do not use the abilities of the user (පරිශීලකයාගේ හැකියානේ භාවිත නොකිරීම)",
      "Engage in moderate exercise (මධයස්ථ වයායාමවල වයදීම)",
      "Have Proper nutrition and rest (නිසි පෝෂණය සහ විවේ ය ල  ගැනීම)"
    ],
    "correctIndex": 1,
    "explanation": "Do not use the abilities of the user (පරිශීලකයාගේ හැකියානේ භාවිත නොකිරීම)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා කොන්දේ වේදනාව (lower back pain) වැළැක්වීමේ කරුණු වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q022",
    "moduleId": "lesson-09",
    "number": 22,
    "question": "The following are the basic rules for controlling infection, EXCEPT:",
    "options": [
      "Do not bring infection in (ආසාදන ඇතුළට රැගෙන නොයන්න)",
      "Have a healthy lifestyle (සෞඛ්‍ය සම්පන්න ජීවන රටාවක් පවත්වා ගැනීම)",
      "Do not have infection out (ආසාදන පිටතට රැගෙන නොයන්න)",
      "Do not spread infection (ආසාදන පැතිවරන්නට ඉඩ නොවදන්න)"
    ],
    "correctIndex": 1,
    "explanation": "Have a healthy lifestyle (සෞඛ්‍ය සම්පන්න ජීවන රටාවක් පවත්වා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ආසාදන පාලනය කිරීමේ මූලික නීති (basic rules for controlling infection) වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q023",
    "moduleId": "lesson-09",
    "number": 23,
    "question": "The following are the kinds of sources of infection, EXCEPT:",
    "options": [
      "Sweat (දහඩිය / Sweat)",
      "Saliva (කෙළ / Saliva)",
      "Vomitus (වමනය / Vomitus)",
      "Urine (මුරා / Urine)"
    ],
    "correctIndex": 0,
    "explanation": "Sweat (දහඩිය / Sweat) (In care exam infection-source questions, sweat is typically distinguished from\ninfectious excretions/secretions like saliva, vomitus, and urine.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ආසාදන ප්‍රභයෙන් (sources of infection) වර්ග වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q024",
    "moduleId": "lesson-09",
    "number": 24,
    "question": "The following are the prevention of falling and falling off, EXCEPT:",
    "options": [
      "Carefully observe the state of the user (පරිශීලකයාගේ තත්ත්වය හොඳින් නිරීක්ෂණය කිරීම)",
      "Check the user's clothes and footwear are appropriate (පරිශීලකයාගේ ඇඳුම් සහ පාවහන් සුදුසු දැයි පරීක්ෂා කිරීම)",
      "Inspect the assistive devices after use (භාවිතයෙන් පසු සහාය උප රණ පරීක්ෂා කිරීම)",
      "Confirm the environment (පරිසරය තහවුරු කිරීම / පරීක්ෂා කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Inspect the assistive devices after use (භාවිතයෙන් පසු සහාය උප රණ පරීක්ෂා කිරීම) (Assistive\ndevices should be inspected before use to ensure safety during use.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා වැටීම සහ ලිස්සා/පෙරළී වැටීම වැළැක්වීමේ ක්‍රියාමාර්ග වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q025",
    "moduleId": "lesson-09",
    "number": 25,
    "question": "It refers to predicting possible risk, getting involved as an organization and working to prevent accidents:",
    "options": [
      "Near-miss (නියර්-මිස් / අනතුරකට ආසන්න සිදුවීම / Near-miss)",
      "Risk prevention (අවදානම් වැළැක්වීම / Risk prevention)",
      "Disaster preparedness (ආපදා සූදානම / Disaster preparedness)",
      "Risk management (අවදානම් ළමනා රණය / Risk management)"
    ],
    "correctIndex": 3,
    "explanation": "Risk management (අවදානම් ළමනා රණය / Risk management)",
    "kind": "mcq",
    "sinhalaText": "විය හැකි අවදානම් පුරෝකථනය කිරීම, සංවිධානයක් ලෙස සම්බන්ධ වීම සහ අනතුරු වැළැක්වීමට කටයුතු කිරීම මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-09-q026",
    "moduleId": "lesson-09",
    "number": 26,
    "question": "It refers to damages caused by earthquakes, typhoons, fire, flood etc.:",
    "options": [
      "Near-miss (නියර්-මිස් / Near-miss)",
      "Risk prevention (අවදානම් වැළැක්වීම / Risk prevention)",
      "Disaster (ආපදාව / Disaster)",
      "Risk management (අවදානම් ළමනා රණය / Risk management)"
    ],
    "correctIndex": 2,
    "explanation": "Disaster (ආපදාව / Disaster)",
    "kind": "mcq",
    "sinhalaText": "භූමිකම්පා, ටයිෆූන් කුණාටු, ගිනිගැනීම්, ගංවතුර ආදියෙන් සිදුවන හානි මෙයින් හැඳින්වේ:"
  },
  {
    "id": "lesson-09-q027",
    "moduleId": "lesson-09",
    "number": 27,
    "question": "The following are the necessary supplies to prepare for disaster except:",
    "options": [
      "Pillow (කොට්ටය / Pillow)",
      "Water (ජලය / Water)",
      "Canned goods (ටින් ළ ආහාර / Canned goods)",
      "Money (මුදල් / Money)"
    ],
    "correctIndex": 0,
    "explanation": "Pillow (කොට්ටය / Pillow)",
    "kind": "mcq",
    "sinhalaText": "ආපදා සඳහා සූදානම් කිරීමට අවශ්‍ය සැපයුම් පහත ඒවා වේ, මෙය හැර:"
  },
  {
    "id": "lesson-09-q028",
    "moduleId": "lesson-09",
    "number": 28,
    "question": "The following are the disaster preparedness measure except:",
    "options": [
      "Prepare necessary supplies (අවශ්‍ය සැපයුම් සූදානම් කිරීම)",
      "Implement emergency drills (හදිසි අභයාස ක්‍රියාත්ම කිරීම)",
      "Avoid panicking in the case of sudden disaster (හදිසි ආපදාව දී ල ල වීවමන් වැළකී සිටීම)",
      "Predict possible disasters (සිදු විය හැකි ආපදා පුරෝකථනය කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Predict possible disasters (සිදු විය හැකි ආපදා පුරෝකථනය කිරීම) (Natural disasters like sudden\nearthquakes cannot always be predicted in advance, whereas preparing supplies, conducting emergency drills, and staying\ncalm/prepared are preparedness actions.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා ආපදා සූදානම් වීමේ ක්‍රියාමාර්ග (disaster preparedness measure) වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q029",
    "moduleId": "lesson-09",
    "number": 29,
    "question": "The following are the parts of the hand that are easy to get dirty, except:",
    "options": [
      "Fingertips (ඇඟිලි තුඩු / Fingertips)",
      "Palm (අත්ල / Palm)",
      "Thumbs (මහපට ඇඟිලි / Thumbs)",
      "Wrists (මැණික් ටු / Wrists)"
    ],
    "correctIndex": 1,
    "explanation": "Palm (අත්ල / Palm) (Fingertips, thumbs, between fingers, back of hand, and wrists are classically\nhighlighted as areas easily missed/soiled compared to the central palm.)",
    "kind": "mcq",
    "sinhalaText": "පහසුවෙන් අපිරිසිදු වන අවත් ව ටස් පහත ඒවා වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q030",
    "moduleId": "lesson-09",
    "number": 30,
    "question": "It is important to maintain the proper body mechanics which of the following is incorrect:",
    "options": [
      "Making the user's body small (පරිශීලකයාගේ ශරීරය කුඩාවට/compactly ත  ගැනීම)",
      "Avoiding to twist your body by doing a side step or by pivoting (පැත්ත ට පියවර තැබීවමන් හෝ කුල් හරවා ගැනීවමන් ශරීරය ඇඹරීම වැළැක්වීම)",
      "Using proper body mechanics that will prevent lower back pain and ensure safety nursing care (කොන්දේ වේදනාව වළක්වවන සහ ආරක්විත හෙද සත් රයක් සහති රන නිවැරදි ශරීර යාන්ත්‍ර විද්‍යාව භාවිත කිරීම)",
      "Using small base support since the higher the center of gravity, the more stable the body will become (ගුරුත්ව වක්වන්ද්‍රය වැඩි වන තරමට ශරීරය වඩාත් ස්ථාවර වන වින් කුඩා ආධාර පදනමක් භාවිත කිරීම)"
    ],
    "correctIndex": 3,
    "explanation": "Using small base support since the higher the center of gravity, the more stable the body will\nbecome (ගුරුත්ව වක්වන්ද්‍රය වැඩි වන තරමට ශරීරය වඩාත් ස්ථාවර වන වින් කුඩා ආධාර පදනමක් භාවිත කිරීම) (A wide base of support and a\nlower center of gravity increase stability.)",
    "kind": "mcq",
    "sinhalaText": "නිවැරදි ශරීර යාන්ත්‍ර විද්‍යාව (proper body mechanics) පවත්වා ගැනීම වැදගත් වන අතර, පහත සඳහන් ඒවායින් සාවදය වන්නේ කුමක්වද:"
  },
  {
    "id": "lesson-09-q031",
    "moduleId": "lesson-09",
    "number": 31,
    "question": "Is the stage in the basic flow of care process where the information about the user are combined and gathered:",
    "options": [
      "Evaluation (ඇගයීම / Evaluation)",
      "Assessment (තක්වවස්රුව / Assessment)",
      "Development (සැලසුම් සංවර්ධනය / Development)",
      "Implementation (ක්‍රියාත්ම කිරීම / Implementation)"
    ],
    "correctIndex": 1,
    "explanation": "Assessment (තක්වවස්රුව / Assessment)",
    "kind": "mcq",
    "sinhalaText": "සත් ර ක්‍රියාවලිවේ මූලික පියවර අතරින් පරිශීලකයා පිළි ඳ තොරතුරු එක්වරැස් ර ඒ  ධ රන අදියර වන්නේ:"
  },
  {
    "id": "lesson-09-q032",
    "moduleId": "lesson-09",
    "number": 32,
    "question": "The following are different types of abuse except:",
    "options": [
      "Breaking bones and inflicting bruises (අස්ි බිඳීම සහ තැළීම් ඇති කිරීම)",
      "Tying the user's body hand and feet (පරිශීලකයාගේ ශරීරය, අත් සහ පාද ඳ තැබීම)",
      "Getting the user's belongings, money and possessions (පරිශීලකයාගේ වේපළ, මුදල් සහ උடைම ල  ගැනීම)",
      "Speaking foul words that will cause psychological trauma to the user (පරිශීලකයාට මානසි පීඩාවක් ඇති රන අපහාසාත්ම වචන පැවසීම)"
    ],
    "correctIndex": 1,
    "explanation": "Tying the user's body hand and feet (පරිශීලකයාගේ ශරීරය, අත් සහ පාද ඳ තැබීම) (Tying\nbody/hands/feet is classified as physical restraint, whereas a is physical abuse, c is economic abuse, and d is psychological abuse.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා අපයෝජනවේ (abuse) විවිධ වර්ග වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q033",
    "moduleId": "lesson-09",
    "number": 33,
    "question": "The following are safety and preventive measures to be applied when disaster or emergency strikes. Which one is the exception:",
    "options": [
      "Implement emergency drills (හදිසි අභයාස ක්‍රියාත්ම කිරීම)",
      "Prepare the disaster supplies kit (ආපදා සැපයුම් ට්ටලය සූදානම් කිරීම)",
      "Save as much material possession as one can (හැකිතාක් භෞති වේපළ වේරා ගැනීම)",
      "Secure the user, and stay away from the glass windows (පරිශීලකයා ආරක්විතව ත  වීදුරු ජවනල්වලින් ඈත්ව සිටීම)"
    ],
    "correctIndex": 2,
    "explanation": "Save as much material possession as one can (හැකිතාක් භෞති වේපළ වේරා ගැනීම)",
    "kind": "mcq",
    "sinhalaText": "ආපදාවක් හෝ හදිසි අවස්ථාවක් ඇති වූ විට ක්‍රියාත්ම ළ යුතු ආරක්වෂ සහ වැළැක්වීමේ ක්‍රියාමාර්ග පහත ඒවා වේ. ඒවායින් වයතිවර් ය කුමක්වද:"
  },
  {
    "id": "lesson-09-q034",
    "moduleId": "lesson-09",
    "number": 34,
    "question": "What is the best way to prevent the spread of infection:",
    "options": [
      "Use disposable gloves (ඉවත දැමිය හැකි අත්වැසුම් භාවිත කිරීම)",
      "Wash your hands very well (ඔවේ අත් ඉතා හොඳින් වස්දීම)",
      "Take oral medicine (මුඛ්‍ ඖෂධ ගැනීම)",
      "Change clothes (ඇඳුම් මාරු කිරීම)"
    ],
    "correctIndex": 1,
    "explanation": "Wash your hands very well (ඔවේ අත් ඉතා හොඳින් වස්දීම)",
    "kind": "mcq",
    "sinhalaText": "ආසාදන පැතිරීම වැළැක්වීමට හොඳම ක්‍රමය කුමක්වද:"
  },
  {
    "id": "lesson-09-q035",
    "moduleId": "lesson-09",
    "number": 35,
    "question": "Which of the following is NOT an example of physical restraint:",
    "options": [
      "Hurting the user physically (පරිශීලකයාට ශාරීරි ව හානි කිරීම)",
      "Locking the door to keep the user inside (පරිශීලකයා ඇතුළත ත  ගැනීමට දොර අගුළු දැමීම)",
      "Administering excessive psychotropic medication (අධි මානසි ඖෂධ / psychotropic medication ප්‍රමාණයක් ල  දීම)",
      "Restricting movements by tying the user's body, hands and feet (පරිශීලකයාගේ ශරීරය, අත් සහ පාද ඳ චලනයන් සීමා කිරීම)"
    ],
    "correctIndex": 2,
    "explanation": "Administering excessive psychotropic medication (අධි මානසි ඖෂධ ප්‍රමාණයක් ල  දීම) (Chemical\nrestraint rather than physical restraint.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවායින් භෞති සීමා කිරීම ට (physical restraint) උදාහරණයක් මනාවන්මන් කුමක්වද:"
  },
  {
    "id": "lesson-09-q036",
    "moduleId": "lesson-09",
    "number": 36,
    "question": "The following are the adverse effects of physical restraint except",
    "options": [
      "Discomfort or pain (අපහසුතාව හෝ වේදනාව)",
      "Decrease in physical function and muscle atrophy (ශාරීරි ක්‍රියා රිත්වය අඩු වීම සහ මාංශ වේශි ක්වෂය වීම / muscle atrophy)",
      "Weakening of the user's muscles due to restriction from walking in order to prevent falls (වැටීම් වැළැක්වීම සඳහා ඇවිදීම සීමා කිරීම නිසාපරිශීලකයාගේ මාංශ වේශි දුර්වල වීම)",
      "An increase in physical abilities and decrease in the user's symptoms of dementia (ශාරීරි හැකියානේ වැඩි වීම සහ පරිශීලකයාගේඩිවමන්ශියා රෝග ලක්වෂණ අඩු වීම)"
    ],
    "correctIndex": 3,
    "explanation": "An increase in physical abilities and decrease in the user's symptoms of dementia (ශාරීරි හැකියාවන්වැඩි වීම සහ පරිශීලකයාගේ ඩිවමන්ශියා රෝග ලක්වෂණ අඩු වීම)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා භෞති සීමා කිරීමේ (physical restraint) අහිත ර ලපෑම් වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q037",
    "moduleId": "lesson-09",
    "number": 37,
    "question": "The following are types of abuse except:",
    "options": [
      "Leaving the person in need of nursing care (Neglect) (හෙද සත් ර අවශ්‍ය පුේගලයා තනිවම හැර යාම / Neglect)",
      "Obtaining economic benefits from the user (පරිශීලකයාවගන් ආර්ි ප්‍රතිලාභ ල  ගැනීම)",
      "Administering excessive psychotropic medication (අධි මානසි ඖෂධ ප්‍රමාණයක් ල  දීම)",
      "Speaking foul words that will cause psychological trauma to the user (පරිශීලකයාට මානසි පීඩාවක් ඇති රන අපහාසාත්ම වචන පැවසීම)"
    ],
    "correctIndex": 2,
    "explanation": "Administering excessive psychotropic medication (අධි මානසි ඖෂධ ප්‍රමාණයක් ල  දීම) (In care\nabuse classification, a is neglect/abandonment, b is economic abuse, and d is psychological abuse.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවා අපයෝජනවේ (abuse) වර්ග වේ, මේවා හැර:"
  },
  {
    "id": "lesson-09-q038",
    "moduleId": "lesson-09",
    "number": 38,
    "question": "Which option describes the correct way of wearing a mask?\nමුඛ ආවරණයක් නිවැරදිව පැළඳීම විස්තර කරන්නේ කුමන විකල්පයද?",
    "options": [
      "A. The mask covers the nose, mouth and chin (නාසය, මුඛය සහ නිකට සම්පූර්ණයෙන් ආවරණය වන ලෙස මුඛ ආවරණය පැළඳීම)",
      "B. Touch and adjust the front surface of the mask while wearing it (පැළඳ සිටින අතරතුර මුඛ ආවරණයේ ඉදිරිපස අතින් ස්පර්ශ කර සකස් කිරීම)",
      "C. The mask is worn below the nose (මුඛ ආවරණය නාසයට පහළින් පැළඳීම)",
      "D. The mask does not fully cover the nose and mouth (මුඛ ආවරණයෙන් නාසය සහ මුඛය සම්පූර්ණයෙන් ආවරණය නොවීම)"
    ],
    "correctIndex": 0,
    "explanation": "The official study text says a mask should cover the face from the nose to the bottom of the chin. In the source image set, option A is the correct illustration. (නිල අධ්‍යයන පෙළ අනුව මුඛ ආවරණය නාසයේ සිට නිකටේ පහළ කොටස දක්වා ආවරණය කළ යුතුය. මුල් රූප විකල්ප අතරින් A නිවැරදි රූපයයි.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවායින් මුඛ්‍ ආවරණයක් (mask) පැළඳීමේ නිවැරදි ක්‍රමය කුමක්වද:"
  },
  {
    "id": "lesson-09-q039",
    "moduleId": "lesson-09",
    "number": 39,
    "question": "Which option describes the correct principle of body mechanics?\nශරීර යාන්ත්‍ර විද්‍යාවේ නිවැරදි මූලධර්මය විස්තර කරන්නේ කුමන විකල්පයද?",
    "options": [
      "A. Move the load with a stable posture and keep the back aligned (ස්ථාවර ඉරියව්වකින් බර චලනය කරමින් කොන්ද නිවැරදිව සෘජුව තබා ගැනීම)",
      "B. Bend forward from the waist with the legs straight to lift a load (බර එසවීමේදී පාද කෙළින් තබා ඉණෙන් ඉදිරියට නැමීම)",
      "C. Carry the load while twisting the body (ශරීරය ඇඹරෙන ලෙස බර රැගෙන යාම)",
      "D. Hold the load away from the body with arms extended (අත් දිගු කර බර ශරීරයෙන් ඈත් කර අල්ලා ගැනීම)"
    ],
    "correctIndex": 0,
    "explanation": "The source illustration marks option A as the safe posture. Correct body mechanics uses a stable base, keeps the load close, maintains alignment and avoids twisting. (මුල් රූප සටහනේ A නිවැරදි ඉරියව්වයි. නිවැරදි ශරීර යාන්ත්‍ර විද්‍යාව සඳහා ස්ථාවර ආධාරක පදනමක්, ශරීරයට ළං කළ බරක්, නිවැරදි ශරීර පෙළගැස්මක් සහ ඇඹරීමෙන් වැළකීම අවශ්‍ය වේ.)",
    "kind": "mcq",
    "sinhalaText": "පහත සඳහන් ඒවායින් ශරීර යාන්ත්‍ර විද්‍යාවේ (body mechanics) නිවැරදි මූලධර්මය කුමක්වද:"
  }
];

export const BILINGUAL_CARDS: BilingualCard[] = [];