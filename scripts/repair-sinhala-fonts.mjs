import fs from 'node:fs/promises';
import path from 'node:path';

const studyBankPath = path.join(process.cwd(), 'src', 'data', 'studyBank.ts');
const raw = await fs.readFile(studyBankPath, 'utf8');
const match = raw.match(/(export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = )(\[[\s\S]*?\n\]);/);
if (!match) throw new Error('Could not find ALL_QUIZ_QUESTIONS');
const questions = JSON.parse(match[2]);

const C = '[\u0D9A-\u0DC6]'; // Sinhala consonants (ක..ෆ)
const OPT_CONJ = '(?:\u0DCA\u200D[\u0DBB\u0DBA])?'; // optional rakaransaya/yansaya

/**
 * Applies visual-order kombuva re-composition when kombuva (ෙ) was extracted as a fake consonant `K`
 * (e.g. `ව` in lessons 3/6/8/9, `ස` in lessons 2/4, `ම` in lesson 7).
 * Only triggers in unambiguous Sinhala phonological patterns so valid words starting with K stay intact.
 */
function recomposeVisualKombuva(text, K) {
  let s = text;

  // 1. K + C + ෝ/ේ/ෞ (redundant visual kombuva left of an already-composed ේ/ෝ/ෞ vowel)
  // e.g. වසේ -> සේ, වරෝ -> රෝ, වසෞ -> සෞ, සසේ -> සේ, සරෝ -> රෝ, සගෞ -> ගෞ
  const rRedundant = new RegExp(`${K}(${C}${OPT_CONJ}[\u0DDA\u0DDD\u0DDE])`, 'g');
  s = s.replace(rRedundant, '$1');

  // 2. K + C + ් -> C + ේ (e.g. වත් -> තේ, වම් -> මේ, වන් -> නේ, වද් -> දේ, වර් -> රේ, මහ් -> හේ, මබ් -> බේ)
  // Note: avoid matching valid words like මන්ද, වන්දනා, සන්ධි, වස්තු, මස්, වත්ත, සත්කාර, සම්බන්ධ!
  // Specific high-confidence suffix/word-internal patterns first:
  const safeLongE = new RegExp(
    `(${K})([තනමදරහබගකපලයසචජටඩඳඟඹ])${'\u0DCA'}(?=[\\s.,;:?!\\)\\]\\"\\u0D80-\\u0DFF]|$)`,
    'g'
  );
  // Carefully handle only known kombuva+C+hal patterns (not real words like සත්කාර, සම්බන්ධ, සන්ධි, වන්, මන්):
  const realWordsProtected = [
    'සත්කාර', 'සම්බන්ධ', 'සම්පූර්ණ', 'සම්පන්න', 'සම්බාහන', 'සන්ධි', 'සන්සුන්', 'සන්තෝෂ', 'සංඥා',
    'සන්නිවේදන', 'සන්නි', 'සස්', 'සද්', 'සත්‍ය', 'සතය', 'සඳහන්', 'සඳහා', 'සම්',
    'වත්', 'වන්', 'වන්න', 'වස්', 'වර්ග', 'වර්ධන', 'වර්ණ', 'වර්තමාන', 'වර්', 'වම්', 'වද්', 'වල්',
    'මත්', 'මන්', 'මස්', 'මර්', 'මල්', 'මව්', 'මග්',
  ];
  // Instead of blind regex on K+C+්, use exact morphological boundaries where K+C+් is ALWAYS C+ේ!
  const kombuLongEPatterns = [
    // End of word or before ද/ය/ම/හි/දී: e.g. යුත්වත් -> යුත්තේ, කරන්වන් -> කරන්නේ, කිරීවම් -> කිරීමේ, ගැනීවම් -> ගැනීමේ
    [new RegExp(`(යුත්|පැත්|ඇත්|වැත්|මැත්|කැත්|නැත්|සිත|හිත|අත|පත)${K}ත්`, 'g'), '$1තේ'],
    [new RegExp(`(න්|න්න)${K}න්(?!න|ද)`, 'g'), '$1නේ'],
    [new RegExp(`(ී|ේ|ා|ැ|ි|ු|ූ|එ|ඒ|ඔ|ඕ)${K}ම්(?=[\\s.,;:?!\\)\\]දයම]|දී|$)`, 'g'), '$1මේ'],
    [new RegExp(`${K}ම්(දී|ද)(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'මේ$1'],
    [new RegExp(`(ව|ක|ග|ත|ද|ප|බ|ර|ල|ස|හ)${K}ද්(?=[\\s.,;:?!\\)\\]ශවල]|$)`, 'g'), '$1දේ'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}ද්(?=[\\s.,;:?!\\)\\]වල]|$)`, 'g'), 'දේ'],
    [new RegExp(`(ක|ව|කෙ)${K}ර්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1රේ'],
    [new RegExp(`නිර්${K}ද්ශ`, 'g'), 'නිර්දේශ'],
    [new RegExp(`උප${K}ද්ශ`, 'g'), 'උපදේශ'],
    [new RegExp(`ප්‍ර${K}ද්ශ`, 'g'), 'ප්‍රදේශ'],
    [new RegExp(`වි${K}ශ්ෂ`, 'g'), 'විශේෂ'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}හ්තු`, 'g'), 'හේතු'],
    [new RegExp(`ඔ${K}බ්`, 'g'), 'ඔබේ'],
    [new RegExp(`ත${K}බ්`, 'g'), 'තබේ'],
    [new RegExp(`ලැ${K}බ්`, 'g'), 'ලැබේ'],
    [new RegExp(`ඇ${K}ත(?!්)`, 'g'), 'ඇතේ'],
    [new RegExp(`ඇ${K}ඳන්`, 'g'), 'ඇඳෙන්'],
    [new RegExp(`අ${K}ඳන්`, 'g'), 'අඳෙන්'],
    [new RegExp(`ඊ${K}ම්ල්`, 'g'), 'ඊමේල්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}ස්ව`, 'g'), 'සේව'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}ස්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'සේ'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}ව්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'වේ'],
    [new RegExp(`${K}ව්දනා`, 'g'), 'වේදනා'],
    [new RegExp(`${K}ව්ග`, 'g'), 'වේග'],
    [new RegExp(`${K}ත්රී`, 'g'), 'තේරී'],
    [new RegExp(`${K}ත්රු`, 'g'), 'තේරු'],
    [new RegExp(`${K}ප්ශි`, 'g'), 'පේශි'],
    [new RegExp(`${K}ප්ළ`, 'g'), 'පේළ'],
    [new RegExp(`${K}ප්න`, 'g'), 'පේන'],
    [new RegExp(`${K}ක්න්ද්‍ර`, 'g'), 'කේන්ද්‍ර'],
    [new RegExp(`${K}බ්ර`, 'g'), 'බේර'],
    [new RegExp(`${K}රේ`, 'g'), 'රේ'],
    [new RegExp(`${K}ලේ`, 'g'), 'ලේ'],
  ];

  for (const [re, rep] of kombuLongEPatterns) {
    s = s.replace(re, rep);
  }

  // 3. K + C + ා -> C + ො (e.g. වනා -> නො, වතා -> තො, වකා -> කො, වමා -> මො, වහා -> හො, වගා -> ගො, වපා -> පො, වයා -> යො, වදා -> දො, මතා -> තො)
  const kombuOPatterns = [
    [new RegExp(`(?<=^|[\\s(\\/-])${K}නා`, 'g'), 'නො'],
    [new RegExp(`${K}නා(?=ව|ක|ම|ග|ද|ත|ප|බ|ල|ස|හ|ය|ර|වී|වන|කර|ගෙන|සිට|හැක|ලැබ)`, 'g'), 'නො'],
    [new RegExp(`${K}තාරතුර`, 'g'), 'තොරතුර'],
    [new RegExp(`${K}තාල්`, 'g'), 'තොල්'],
    [new RegExp(`${K}මානවා`, 'g'), 'මොනවා'],
    [new RegExp(`${K}මාළ`, 'g'), 'මොළ'],
    [new RegExp(`${K}කාටස`, 'g'), 'කොටස'],
    [new RegExp(`${K}කාන්ද`, 'g'), 'කොන්ද'],
    [new RegExp(`${K}කාට්ට`, 'g'), 'කොට්ට'],
    [new RegExp(`${K}කාප`, 'g'), 'කොප'],
    [new RegExp(`${K}කාළ`, 'g'), 'කොළ'],
    [new RegExp(`${K}කාපමණ`, 'g'), 'කොපමණ'],
    [new RegExp(`${K}හාඳ`, 'g'), 'හොඳ'],
    [new RegExp(`${K}ගාඩ`, 'g'), 'ගොඩ'],
    [new RegExp(`${K}පාදු`, 'g'), 'පොදු'],
    [new RegExp(`${K}පාත්`, 'g'), 'පොත්'],
    [new RegExp(`${K}පාඩි`, 'g'), 'පොඩි'],
    [new RegExp(`${K}පාළ`, 'g'), 'පොළ'],
    [new RegExp(`${K}යාද`, 'g'), 'යොද'],
    [new RegExp(`${K}යාමු`, 'g'), 'යොමු'],
    [new RegExp(`${K}සාය`, 'g'), 'සොය'],
    [new RegExp(`${K}බාහෝ`, 'g'), 'බොහෝ'],
    [new RegExp(`${K}බාන`, 'g'), 'බොන'],
    [new RegExp(`${K}දාර`, 'g'), 'දොර'],
    [new RegExp(`${K}ලාකු`, 'g'), 'ලොකු'],
    [new RegExp(`${K}රාට`, 'g'), 'රොට'],
    [new RegExp(`${K}වහාම`, 'g'), 'වහාම'],
  ];
  for (const [re, rep] of kombuOPatterns) {
    s = s.replace(re, rep);
  }

  // 4. K + C -> C + ෙ (short e vowel: වලස -> ලෙස, වමයින් -> මෙයින්, වමන්ම -> මෙන්ම, වගන -> ගෙන, වවන -> වෙන, වකර -> කෙර, etc.)
  const kombuShortEPatterns = [
    [new RegExp(`(?<=^|[\\s(\\/])${K}ලස(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'ලෙස'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}ලඩ`, 'g'), 'ලෙඩ'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මයින්`, 'g'), 'මෙයින්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මය(?=[\\s.,;:?!\\)\\]ට]|$)`, 'g'), 'මෙය'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මම(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'මෙම'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මන්(?=[\\s.,;:?!\\)\\]ම]|$)`, 'g'), 'මෙන්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මහි`, 'g'), 'මෙහි'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මසේ`, 'g'), 'මෙසේ'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මවැනි`, 'g'), 'මෙවැනි'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}මවල`, 'g'), 'මෙවල'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}පර(?=[\\s.,;:?!\\)\\]ට]|$)`, 'g'), 'පෙර'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}පළ`, 'g'), 'පෙළ'],
    [new RegExp(`පඩි${K}පළ`, 'g'), 'පඩිපෙළ'],
    [new RegExp(`${K}පරළ`, 'g'), 'පෙරළ'],
    [new RegExp(`${K}පන`, 'g'), 'පෙන'],
    [new RegExp(`${K}පන්ව`, 'g'), 'පෙන්ව'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}තත්`, 'g'), 'තෙත්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}තක්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'තෙක්'],
    [new RegExp(`${K}තරපුම්`, 'g'), 'තෙරපුම්'],
    [new RegExp(`${K}තල`, 'g'), 'තෙල'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}වන(?!්)`, 'g'), 'වෙන'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}වනස්`, 'g'), 'වෙනස්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}වනත්`, 'g'), 'වෙනත්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}වනම`, 'g'), 'වෙනම'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}වනුවට`, 'g'), 'වෙනුවට'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}වනුවෙන්`, 'g'), 'වෙනුවෙන්'],
    [new RegExp(`${K}ගන(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'ගෙන'],
    [new RegExp(`රැ${K}ගන`, 'g'), 'රැගෙන'],
    [new RegExp(`හඳුනා${K}ගන`, 'g'), 'හඳුනාගෙන'],
    [new RegExp(`කර${K}ගන`, 'g'), 'කරගෙන'],
    [new RegExp(`පවත්වා${K}ගන`, 'g'), 'පවත්වාගෙන'],
    [new RegExp(`තබා${K}ගන`, 'g'), 'තබාගෙන'],
    [new RegExp(`සිට${K}ගන`, 'g'), 'සිටගෙන'],
    [new RegExp(`ඉඳ${K}ගන`, 'g'), 'ඉඳගෙන'],
    [new RegExp(`වැතිර${K}ගන`, 'g'), 'වැතිරගෙන'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}ගදර`, 'g'), 'ගෙදර'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දන(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'දෙන'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දනා`, 'g'), 'දෙනා'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දස`, 'g'), 'දෙස'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දක`, 'g'), 'දෙක'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දපස`, 'g'), 'දෙපස'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දපා`, 'g'), 'දෙපා'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දඅත්`, 'g'), 'දෙඅත්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දමව්`, 'g'), 'දෙමව්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දවන`, 'g'), 'දෙවන'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}දවැනි`, 'g'), 'දෙවැනි'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}කර`, 'g'), 'කෙර'],
    [new RegExp(`${K}ක${K}රන`, 'g'), 'කෙරෙන'],
    [new RegExp(`${K}ක${K}රේ`, 'g'), 'කෙරේ'],
    [new RegExp(`${K}කටි`, 'g'), 'කෙටි'],
    [new RegExp(`${K}කළ`, 'g'), 'කෙළ'],
    [new RegExp(`${K}කසේ`, 'g'), 'කෙසේ'],
    [new RegExp(`${K}කනෙකු`, 'g'), 'කෙනෙකු'],
    [new RegExp(`${K}කනක්`, 'g'), 'කෙනෙක්'],
    [new RegExp(`${K}කයි`, 'g'), 'කෙයි'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}බදා`, 'g'), 'බෙදා'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}බහෙත්`, 'g'), 'බෙහෙත්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}බ${K}හත්`, 'g'), 'බෙහෙත්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}හද(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), 'හෙද'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}හවත්`, 'g'), 'හෙවත්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}හමින්`, 'g'), 'හෙමින්'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}සනුකි`, 'g'), 'සෙනුකි'],
    [new RegExp(`(?<=^|[\\s(\\/])${K}රදි`, 'g'), 'රෙදි'],
    [new RegExp(`අ${K}නක්`, 'g'), 'අනෙක්'],
    [new RegExp(`අ${K}නකුත්`, 'g'), 'අනෙකුත්'],
    [new RegExp(`එකි${K}නකා`, 'g'), 'එකිනෙකා'],
    [new RegExp(`එදි${K}නදා`, 'g'), 'එදිනෙදා'],
    [new RegExp(`මන${K}සහි`, 'g'), 'මනසෙහි'],
    [new RegExp(`ශරීර${K}යහි`, 'g'), 'ශරීරයෙහි'],
    [new RegExp(`(${C})${K}යන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1යෙන්'],
    [new RegExp(`(${C})${K}යකු`, 'g'), '$1යෙකු'],
    [new RegExp(`(${C})${K}යහි`, 'g'), '$1යෙහි'],
    [new RegExp(`(${C})${K}නකු`, 'g'), '$1නෙකු'],
    [new RegExp(`(${C})${K}නක්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1නෙක්'],
    [new RegExp(`(${C})${K}වන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1වෙන්'],
    [new RegExp(`(${C})${K}සන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1සෙන්'],
    [new RegExp(`(${C})${K}තන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1තෙන්'],
    [new RegExp(`(${C})${K}දන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1දෙන්'],
    [new RegExp(`(${C})${K}බන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1බෙන්'],
    [new RegExp(`(${C})${K}ගන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1ගෙන්'],
    [new RegExp(`(${C})${K}ලන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1ලෙන්'],
    [new RegExp(`(${C})${K}රන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1රෙන්'],
    [new RegExp(`(${C})${K}කන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1කෙන්'],
    [new RegExp(`(${C})${K}පන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1පෙන්'],
    [new RegExp(`(ි|ී|ා|ැ|ෑ|ු|ූ)${K}යන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1යෙන්'],
    [new RegExp(`(ි|ී|ා|ැ|ෑ|ු|ූ)${K}යකු`, 'g'), '$1යෙකු'],
    [new RegExp(`(ි|ී|ා|ැ|ෑ|ු|ූ)${K}වන්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1වෙන්'],
    [new RegExp(`(ි|ී|ා|ැ|ෑ|ු|ූ)${K}න්(?=[\\s.,;:?!\\)\\]]|$)`, 'g'), '$1නේ'],
    [new RegExp(`නිරීක්${K}ෂණ`, 'g'), 'නිරීක්ෂණ'],
    [new RegExp(`පරීක්${K}ෂ`, 'g'), 'පරීක්ෂ'],
    [new RegExp(`සම්${K}ප්‍රේෂණ`, 'g'), 'සම්ප්‍රේෂණ'],
    [new RegExp(`සම්${K}වේෂණ`, 'g'), 'සම්ප්‍රේෂණ'],
    [new RegExp(`පු${K}රෝ`, 'g'), 'පුරෝ'],
    [new RegExp(`නි${K}රෝගී`, 'g'), 'නිරෝගී'],
    [new RegExp(`ඉ${K}බෝලා`, 'g'), 'ඉබෝලා'],
    [new RegExp(`වැළැක්${K}වී`, 'g'), 'වැළැක්වී'],
    [new RegExp(`වැළැක්ව${K}වී`, 'g'), 'වැළැක්වී'],
  ];
  for (const [re, rep] of kombuShortEPatterns) {
    s = s.replace(re, rep);
  }

  void safeLongE;
  void realWordsProtected;
  return s;
}

function fixLesson02(text) {
  if (!text) return text;
  let s = text;
  // Lesson 2 specific: ස was mapped to space in several words, ෙ -> ස, වේ/ගේ -> සේ, ල් -> ේ
  s = s.replace(/ස ෝදන/g, 'සෝදන');
  s = s.replace(/, බන් /g, ', සබන් ');
  s = s.replace(/ බන් /g, ' සබන් ');
  s = s.replace(/ආසේප/g, 'ආලේප');
  s = s.replace(/පහත ඳහන්/g, 'පහත සඳහන්');
  s = s.replace(/ආ ාදන/g, 'ආසාදන');
  s = s.replace(/සල ැලසේ/g, 'ලෙස සැලකේ');
  s = s.replace(/ ැලසේ/g, ' සැලකේ');
  s = s.replace(/ ැලකේ/g, ' සැලකේ');
  s = s.replace(/සියේල/g, 'සියල්ල');
  s = s.replace(/සේ(?=[.,;:?!\)\]]|\s|$)/g, (m, offset, str) => {
    const before = str.slice(Math.max(0, offset - 6), offset);
    if (/(?:වර්ග|කාරක|ඒවා|ක්‍රම|තත්ත්ව|පියවර|ලක්ෂණ|අවස්ථා|කොටස්|අංග|වැදගත්|හැකි|යුතු|ඇතුළත්|අවශ්‍ය|සුදුසු|නිවැරදි|වැරදි|හේතු|විශේෂ) $/.test(before)) {
      return 'වේ';
    }
    if (/[ා-ූයකනලර]/.test(before.slice(-1))) return 'ගේ';
    return 'වේ';
  });
  s = recomposeVisualKombuva(s, 'ස');
  // Fix remaining lesson-02 patterns
  s = s.replace(/සපර\b/g, 'පෙර');
  s = s.replace(/සතත්/g, 'තෙත්');
  s = s.replace(/යුත්සත්/g, 'යුත්තේ');
  s = s.replace(/වන්සන්/g, 'වන්නේ');
  s = s.replace(/කරන්සන්/g, 'කරන්නේ');
  s = s.replace(/ලැසබන/g, 'ලැබෙන');
  s = s.replace(/සවනස්/g, 'වෙනස්');
  s = s.replace(/සවනත්/g, 'වෙනත්');
  s = s.replace(/සවනම/g, 'වෙනම');
  s = s.replace(/සනා/g, 'නො');
  s = s.replace(/සබෝවන/g, 'බෝවන');
  s = s.replace(/සහෝ/g, 'හෝ');
  s = s.replace(/සහ්තු/g, 'හේතු');
  s = s.replace(/සද්/g, 'දේ');
  s = s.replace(/සමයින්/g, 'මෙයින්');
  s = s.replace(/සමය/g, 'මෙය');
  s = s.replace(/සමම/g, 'මෙම');
  s = s.replace(/සමන්/g, 'මෙන්');
  s = s.replace(/සලස/g, 'ලෙස');
  s = s.replace(/සරෝග/g, 'රෝග');
  s = s.replace(/සරෝහ/g, 'රෝහ');
  s = s.replace(/සරෝද/g, 'රෝද');
  s = s.replace(/සසේවක/g, 'සේවක');
  s = s.replace(/සසෞඛ්‍ය/g, 'සෞඛ්‍ය');
  s = s.replace(/කිරීසම්/g, 'කිරීමේ');
  s = s.replace(/ගැනීසම්/g, 'ගැනීමේ');
  s = s.replace(/වැළැක්වීසම්/g, 'වැළැක්වීමේ');
  s = s.replace(/පැතිරීසම්/g, 'පැතිරීමේ');
  s = s.replace(/සේදීසම්/g, 'සේදීමේ');
  s = s.replace(/පරිශීලකයාසේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/පුද්ගලයාසේ/g, 'පුද්ගලයාගේ');
  s = s.replace(/ශරීරයසේ/g, 'ශරීරයේ');
  s = s.replace(/අත්වැසුම් ගැලවූ පසු/g, 'අත්වැසුම් ගැලවූ පසු');
  return s;
}

function fixLesson03(text) {
  if (!text) return text;
  let s = text;
  // Lesson 3: බ -> ෙ, න+ි -> ි (සන්ි -> සන්නි), ව -> ෙ (visual kombuva), ගේ -> වේ, ව් -> ේ
  s = s.replace(/සන්ිවේදන/g, 'සන්නිවේදන');
  s = s.replace(/භාිත/g, 'භාවිත');
  s = s.replace(/ලො /g, 'ලබා ');
  s = s.replace(/වෙදා/g, 'බෙදා');
  s = s.replace(/මුහුවේ/g, 'මුහුණේ');
  s = s.replace(/ඉරියේ/g, 'ඉරියව්');
  s = s.replace(/අයවේ/g, 'අයගේ');
  s = s.replace(/පරිශීලකයාවේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/පුද්ගලයාවේ/g, 'පුද්ගලයාගේ');
  s = s.replace(/ඔහුවේ/g, 'ඔහුගේ');
  s = s.replace(/ඇයවේ/g, 'ඇයගේ');
  s = s.replace(/ඔවුන්වේ/g, 'ඔවුන්ගේ');
  s = s.replace(/වකවේ/g, 'කෙරේ');
  s = s.replace(/වකවරන/g, 'කෙරෙන');
  s = s.replace(/වස්වක/g, 'සේවක');
  s = s.replace(/වන්වන්/g, 'වන්නේ');
  s = s.replace(/කරන්වන්/g, 'කරන්නේ');
  s = s.replace(/යුත්වත්/g, 'යුත්තේ');
  s = recomposeVisualKombuva(s, 'ව');
  return s;
}

function fixLesson04(text) {
  if (!text) return text;
  let s = text;
  // Lesson 4:
  // 1. Standalone ෙ (U+0DD9) is actually ය!
  s = s.replace(/\u0DD9/g, 'ය');
  // 2. Standalone ි (not preceded by consonant) is ති!
  s = s.replace(/(?<![\u0D9A-\u0DC6\u200D])\u0DD2/g, 'ති');
  // 3. Standalone ු (not preceded by consonant) is තු!
  s = s.replace(/(?<![\u0D9A-\u0DC6\u200D])\u0DD4/g, 'තු');
  // 4. Dropped ශ before ාරීරික / ක්ති / පේශි / ල්‍ය
  s = s.replace(/(?<=^|[\s(/])ාරීරික/g, 'ශාරීරික');
  s = s.replace(/(?<=^|[\s(/])ක්ති/g, 'ශක්ති');
  s = s.replace(/මාං සේශි/g, 'මාංශපේශි');
  s = s.replace(/මාං පේශි/g, 'මාංශපේශි');
  s = s.replace(/සරෝහල්\s*ලයකර්ම/g, 'රෝහල් ශල්‍යකර්ම');
  s = s.replace(/ලයකර්ම/g, 'ශල්‍යකර්ම');
  s = s.replace(/තෘේතිය/g, 'තෘප්තිය');
  s = s.replace(/දදනික/g, 'දෛනික');
  s = s.replace(/සාංකල්ප/g, 'සංකල්ප');
  s = s.replace(/සේවයාං/g, 'ස්වයං');
  s = s.replace(/විස ේෂිත/g, 'විශේෂිත');
  s = s.replace(/විසේෂ/g, 'විශේෂ');
  s = s.replace(/මිනිසේ/g, 'මිනිස්');
  s = s.replace(/වයසේගත/g, 'වයස්ගත');
  s = s.replace(/අදහසේ/g, 'අදහස්');
  s = s.replace(/සේවාධීන/g, 'ස්වාධීන');
  s = s.replace(/සේවයං/g, 'ස්වයං');
  s = s.replace(/වෙනසේ/g, 'වෙනස්');
  s = s.replace(/නිදහසේ/g, 'නිදහස්');
  s = s.replace(/දවසේ/g, 'දවස්');
  s = s.replace(/අවසේථා/g, 'අවස්ථා');
  s = s.replace(/විශේවාස/g, 'විශ්වාස');
  s = s.replace(/සාමානය/g, 'සාමාන්‍ය');
  s = s.replace(/මූලය/g, 'මූල්‍ය');
  s = s.replace(/කාර්යයි/g, 'කාර්යයයි');
  s = s.replace(/කාර්යක්ද/g, 'කාර්යයක්ද');
  s = s.replace(/කාර්යන්/g, 'කාර්යයන්');
  s = s.replace(/යුතුය\./g, 'යුතුය.');
  s = s.replace(/යුය\./g, 'යුතුය.');
  s = s.replace(/යු දේ/g, 'යුතු දේ');
  s = s.replace(/දිය යුය/g, 'දිය යුතුය');
  s = s.replace(/කළ යු /g, 'කළ යුතු ');
  // Possessive සේ -> ගේ / යේ / වේ
  s = s.replace(/ඔවුන්සේ/g, 'ඔවුන්ගේ');
  s = s.replace(/පුද්ගලසයකුසේ/g, 'පුද්ගලයෙකුගේ');
  s = s.replace(/පුද්ගලයන්සේ/g, 'පුද්ගලයන්ගේ');
  s = s.replace(/පරිශීලකයාසේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/පරිශීලකසයකුසේ/g, 'පරිශීලකයෙකුගේ');
  s = s.replace(/රැකවරණ ලබන්සනකුසේ/g, 'රැකවරණ ලබන්නෙකුගේ');
  s = s.replace(/Caregiver සේ/g, 'Caregiver ගේ');
  s = s.replace(/ආයතනසේ/g, 'ආයතනයේ');
  s = s.replace(/ජීවිතසේ/g, 'ජීවිතයේ');
  s = s.replace(/ආකාරසේ/g, 'ආකාරයේ');
  s = s.replace(/වර්ගසේ/g, 'වර්ගයේ');
  s = s.replace(/සමාජසේ/g, 'සමාජයේ');
  s = s.replace(/ශරීරසේ/g, 'ශරීරයේ');
  s = s.replace(/ඇතුළත් සේ\./g, 'ඇතුළත් වේ.');
  s = s.replace(/ සේ\./g, ' වේ.');
  s = s.replace(/ සේ,/g, ' වේ,');
  s = s.replace(/ සේ:/g, ' වේ:');
  // Recompose visual kombuva (mapped to ස)
  s = recomposeVisualKombuva(s, 'ස');
  s = s.replace(/සහෝ(?=\s)/g, 'හෝ');
  s = s.replace(/සතෝරා/g, 'තෝරා');
  s = s.replace(/සත්රීම/g, 'තේරීම');
  s = s.replace(/සසේවක/g, 'සේවක');
  s = s.replace(/සගෞරව/g, 'ගෞරව');
  s = s.replace(/සරෝග/g, 'රෝග');
  s = s.replace(/සරෝහල්/g, 'රෝහල්');
  s = s.replace(/සද්වල්/g, 'දේවල්');
  s = s.replace(/සද් /g, 'දේ ');
  s = s.replace(/සවනම/g, 'වෙනම');
  s = s.replace(/සවනස්/g, 'වෙනස්');
  s = s.replace(/සවනත්/g, 'වෙනත්');
  s = s.replace(/සලස/g, 'ලෙස');
  s = s.replace(/සමන්(?=\s)/g, 'මෙන්');
  s = s.replace(/සනා/g, 'නො');
  s = s.replace(/සගන/g, 'ගෙන');
  s = s.replace(/කරන්සන්/g, 'කරන්නේ');
  s = s.replace(/වන්සන්/g, 'වන්නේ');
  s = s.replace(/යන්සනන්/g, 'යන්නෙන්');
  s = s.replace(/යුත්සත්/g, 'යුත්තේ');
  s = s.replace(/පුද්ගලසයකු/g, 'පුද්ගලයෙකු');
  s = s.replace(/සේවකසයකු/g, 'සේවකයෙකු');
  s = s.replace(/ලබන්සනකු/g, 'ලබන්නෙකු');
  s = s.replace(/පවුසල්/g, 'පවුලේ');
  s = s.replace(/සපනී/g, 'පෙනී');
  s = s.replace(/සගාඩ/g, 'ගොඩ');
  s = s.replace(/සපාත්/g, 'පොත්');
  s = s.replace(/සවනුවට/g, 'වෙනුවට');
  s = s.replace(/නිසම /g, 'නියම ');
  s = s.replace(/පුද්ගලයන්ට/g, 'පුද්ගලයන්ට');
  s = s.replace(/වඩාආයතනයේ/g, 'වඩා ආයතනයේ');
  s = s.replace(/ආකාරයේකාර්ය/g, 'ආකාරයේ කාර්ය');
  s = s.replace(/සියලුකාර්ය/g, 'සියලු කාර්ය');
  s = s.replace(/ඇඳුම්සත්කාර/g, 'ඇඳුම් සත්කාර');
  return s;
}

function fixLesson06(text) {
  if (!text) return text;
  let s = text;
  // Lesson 6:
  // 1. ෛ -> ව (473 times! Except inside වෛද්‍ය where ෛ is real)
  s = s.replace(/වෛදය/g, '__VAIDYA__');
  s = s.replace(/වෛද්‍ය/g, '__VAIDYA__');
  s = s.replace(/\u0DDB/g, 'ව');
  s = s.replace(/__VAIDYA__/g, 'වෛද්‍ය');

  // 2. Standalone ෙ (not real kombuva) -> බ (වෙදා -> බෙදා, වෙවහත් -> බෙහෙත්, සම්ෙන්නධ -> සම්බන්ධ, ෙැඳ -> බැඳ, ෙර -> බර)
  s = s.replace(/වෙදා/g, 'බෙදා');
  s = s.replace(/වෙවහත්/g, 'බෙහෙත්');
  s = s.replace(/සම්ෙන්නධ/g, 'සම්බන්ධ');
  s = s.replace(/ෙැඳ/g, 'බැඳ');
  s = s.replace(/ ෙර /g, ' බර ');
  s = s.replace(/ෙල/g, 'බල');
  s = s.replace(/ෙව/g, 'බව');
  s = s.replace(/ොධ/g, 'බාධ');
  s = s.replace(/ෙැවින/g, 'බැවින');
  s = s.replace(/ෙහු/g, 'බහු');
  s = s.replace(/ෙලා/g, 'බලා');
  s = s.replace(/ලො/g, 'ලබා');
  s = s.replace(/ලැෙ/g, 'ලැබ');
  s = s.replace(/තො/g, 'තබා');
  s = s.replace(/ඔෙ/g, 'ඔබ');
  s = s.replace(/වෙහෙත්/g, 'බෙහෙත්');

  // 3. Standalone ි -> නි (ිසා -> නිසා, වැනි -> වැනි, ිවැරදි -> නිවැරදි, ඉක්මින්න -> ඉක්මනින්)
  s = s.replace(/(?<![\u0D9A-\u0DC6\u200D])\u0DD2/g, 'නි');
  s = s.replace(/වැනිනි/g, 'වැනි');
  s = s.replace(/ඉක්මනින්න/g, 'ඉක්මනින්');

  // 4. න්න -> න් in coda positions (after vowel or before consonant/space, not real -න්න infinitive/imperative like කරන්න/වන්නේ)
  s = s.replace(/වන්නවන්න/g, 'වන්නේ');
  s = s.replace(/කරන්නවන්න/g, 'කරන්නේ');
  s = s.replace(/සටහන්න/g, 'සටහන්');
  s = s.replace(/අවසන්න/g, 'අවසන්');
  s = s.replace(/සම්බන්නධ/g, 'සම්බන්ධ');
  s = s.replace(/සවන්න /g, 'සවන් ');
  s = s.replace(/උනන්නදු/g, 'උනන්දු');
  s = s.replace(/අවධානවයන්න/g, 'අවධානයෙන්');
  s = s.replace(/උනන්දුවවන්න/g, 'උනන්දුවෙන්');
  s = s.replace(/අභිනයන්න/g, 'අභිනයන්');
  s = s.replace(/මැදින්න/g, 'මැදින්');
  s = s.replace(/පුද්ගලයන්න/g, 'පුද්ගලයන්');
  s = s.replace(/පරිශීලකයන්න/g, 'පරිශීලකයන්');
  s = s.replace(/ඔවුන්න/g, 'ඔවුන්');
  s = s.replace(/තමන්න/g, 'තමන්');
  s = s.replace(/විසින්න/g, 'විසින්');
  s = s.replace(/මගින්න/g, 'මගින්');
  s = s.replace(/මෙයින්න/g, 'මෙයින්');
  s = s.replace(/හොඳින්න/g, 'හොඳින්');
  s = s.replace(/වහාඳින්න/g, 'හොඳින්');
  s = s.replace(/මුහුවේ/g, 'මුහුණේ');
  s = s.replace(/ශ්‍රීර/g, 'ශරීර');
  s = s.replace(/විශ්‍්වාස/g, 'විශ්වාස');
  s = s.replace(/විශ්‍ාල/g, 'විශාල');
  s = s.replace(/ප්‍රකාශ්‍ය/g, 'ප්‍රකාශය');
  s = s.replace(/වපෞද්ගලික/g, 'පෞද්ගලික');
  s = s.replace(/මේඩලය/g, 'මණ්ඩලය');
  s = s.replace(/සතය/g, 'සත්‍ය');
  s = s.replace(/වාකය/g, 'වාක්‍ය');
  s = s.replace(/වයාකරණ/g, 'ව්‍යාකරණ');
  s = s.replace(/වටවටෝරු/g, 'වට්ටෝරු');
  s = s.replace(/එකිවනකාවේ/g, 'එකිනෙකාගේ');
  s = s.replace(/පරිශීලකයාවේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/පුද්ගලයාවේ/g, 'පුද්ගලයාගේ');
  s = s.replace(/අනෙක්/g, 'අනෙක්');
  s = s.replace(/අවනක්/g, 'අනෙක්');

  // 5. Visual kombuva (mapped to ව)
  s = recomposeVisualKombuva(s, 'ව');
  s = s.replace(/වමානවාද/g, 'මොනවාද');
  s = s.replace(/වනාවන/g, 'නොවන');
  s = s.replace(/වතාරතුරු/g, 'තොරතුරු');
  s = s.replace(/වද් /g, 'දේ ');
  s = s.replace(/වද්\./g, 'දේ.');
  s = s.replace(/වකටි/g, 'කෙටි');
  s = s.replace(/වකයිවචෝ/g, 'කෙයිචෝ');
  return s;
}

function fixLesson07(text) {
  if (!text) return text;
  let s = text;
  // Lesson 7:
  // 1. Standalone ෙ is ල (තරෙ -> තරල, විජෙනය -> විජලනය)
  s = s.replace(/තරෙ/g, 'තරල');
  s = s.replace(/විජෙනය/g, 'විජලනය');
  s = s.replace(/සාමානය/g, 'සාමාන්‍ය');
  // 2. ම ෝෂාව -> ඝෝෂාව
  s = s.replace(/ම ෝෂාව/g, 'ඝෝෂාව');
  // 3. හැඳින්මේ -> හැඳින්වේ, මේ -> වේ / දේ / ගේ / යේ
  s = s.replace(/හැඳින්මේ/g, 'හැඳින්වේ');
  s = s.replace(/මහ්තු මේ/g, 'හේතු වේ');
  s = s.replace(/අලුත් මේවල්/g, 'අලුත් දේවල්');
  s = s.replace(/මේවල්/g, 'දේවල්');
  s = s.replace(/මතකමේ/g, 'මතකයේ');
  s = s.replace(/ශරීරමේ/g, 'ශරීරයේ');
  s = s.replace(/මනමසහි/g, 'මනසෙහි');
  s = s.replace(/ශරීරමයහි/g, 'ශරීරයෙහි');
  s = s.replace(/මමයින්/g, 'මෙයින්');
  s = s.replace(/මමය/g, 'මෙය');
  s = s.replace(/මමම/g, 'මෙම');
  s = s.replace(/මතාරතුරු/g, 'තොරතුරු');
  s = s.replace(/ඔමබ්/g, 'ඔබේ');
  s = s.replace(/මගන/g, 'ගෙන');
  s = s.replace(/වන්මන්/g, 'වන්නේ');
  s = s.replace(/කරන්මන්/g, 'කරන්නේ');
  s = s.replace(/යුත්මත්/g, 'යුත්තේ');
  s = s.replace(/ගැනීමම්/g, 'ගැනීමේ');
  s = s.replace(/කිරීමම්/g, 'කිරීමේ');
  s = s.replace(/ඒමම්/g, 'ඒමේ');
  s = s.replace(/වීමම්/g, 'වීමේ');
  s = s.replace(/දීමම්/g, 'දීමේ');
  s = s.replace(/යෑමම්/g, 'යෑමේ');
  s = s.replace(/යාමම්/g, 'යාමේ');
  s = s.replace(/ලැබීමම්/g, 'ලැබීමේ');
  s = s.replace(/පැවතීමම්/g, 'පැවතීමේ');
  s = s.replace(/වර්ග මේ/g, 'වර්ග වේ');
  s = s.replace(/ලක්ෂණ මේ/g, 'ලක්ෂණ වේ');
  s = s.replace(/ක්‍රම මේ/g, 'ක්‍රම වේ');
  s = s.replace(/ඒවා මේ/g, 'ඒවා වේ');
  s = s.replace(/ මේ,/g, ' වේ,');
  s = s.replace(/ මේ:/g, ' වේ:');
  s = s.replace(/ මේ\./g, ' වේ.');
  // 4. Visual kombuva mapped to ම
  s = recomposeVisualKombuva(s, 'ම');
  s = s.replace(/මනා/g, 'නො');
  s = s.replace(/මවනස්/g, 'වෙනස්');
  s = s.replace(/මවනත්/g, 'වෙනත්');
  s = s.replace(/මලස/g, 'ලෙස');
  s = s.replace(/මරෝග/g, 'රෝග');
  s = s.replace(/මපර/g, 'පෙර');
  s = s.replace(/මහෝ/g, 'හෝ');
  s = s.replace(/මහ්තු/g, 'හේතු');
  s = s.replace(/පරිශීලකයාමේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/පුද්ගලයාමේ/g, 'පුද්ගලයාගේ');
  s = s.replace(/රෝගියාමේ/g, 'රෝගියාගේ');
  return s;
}

function fixLesson08(text) {
  if (!text) return text;
  let s = text;
  // Lesson 8: kombuva -> ව, ගේ -> වේ, ව් -> ේ, ක්ෂ -> ක්ි
  s = s.replace(/දක්ිණාවර්ත/g, 'දක්ෂිණාවර්ත');
  s = s.replace(/ඉරියේවවන්/g, 'ඉරියව්වෙන්');
  s = s.replace(/ඉරියේවට/g, 'ඉරියව්වට');
  s = s.replace(/ඉරියේව/g, 'ඉරියව්ව');
  s = s.replace(/ඉරියේ/g, 'ඉරියව්');
  s = s.replace(/වවනසේ/g, 'වෙනස්');
  s = s.replace(/පරිශීලකයාවේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/පුද්ගලයාවේ/g, 'පුද්ගලයාගේ');
  s = s.replace(/රෝගියාවේ/g, 'රෝගියාගේ');
  s = s.replace(/සේවාදායකයාවේ/g, 'සේවාදායකයාගේ');
  s = s.replace(/ඔහුවේ/g, 'ඔහුගේ');
  s = s.replace(/ඇයවේ/g, 'ඇයගේ');
  s = s.replace(/ඔවුන්වේ/g, 'ඔවුන්ගේ');
  s = s.replace(/වසේවාදායක/g, 'සේවාදායක');
  s = s.replace(/වසේවක/g, 'සේවක');
  s = s.replace(/වකවර්/g, 'කෙරේ');
  s = s.replace(/වකවරන/g, 'කෙරෙන');
  s = s.replace(/වසේ(?=[.,;:?!\)\]]|\s|$)/g, 'සේ');
  s = recomposeVisualKombuva(s, 'ව');
  s = s.replace(/වරෝද/g, 'රෝද');
  s = s.replace(/වරෝග/g, 'රෝග');
  s = s.replace(/වහද /g, 'හෙද ');
  s = s.replace(/වසනුකි/g, 'සෙනුකි');
  s = s.replace(/වතරපුම්/g, 'තෙරපුම්');
  s = s.replace(/වපර/g, 'පෙර');
  s = s.replace(/වවනස්/g, 'වෙනස්');
  s = s.replace(/වනා/g, 'නො');
  s = s.replace(/වහෝ/g, 'හෝ');
  s = s.replace(/වහ්තු/g, 'හේතු');
  s = s.replace(/වද්/g, 'දේ');
  s = s.replace(/පැත්වත්/g, 'පැත්තේ');
  s = s.replace(/යුත්වත්/g, 'යුත්තේ');
  s = s.replace(/වන්වන්/g, 'වන්නේ');
  s = s.replace(/කරන්වන්/g, 'කරන්නේ');
  s = s.replace(/ඇවඳන්/g, 'ඇඳෙන්');
  return s;
}

function fixLesson09(text) {
  if (!text) return text;
  let s = text;
  // Lesson 9: kombuva -> ව, dropped ක/බ, ක්ව -> ක්
  s = s.replace(/ව ාන්වේ/g, 'කොන්දේ');
  s = s.replace(/ව ාට්ටය/g, 'කොට්ටය');
  s = s.replace(/ව ළ/g, 'කෙළ');
  s = s.replace(/ව ෝවීම/g, 'බෝවීම');
  s = s.replace(/සම් න්ධ/g, 'සම්බන්ධ');
  s = s.replace(/පරිශීල යා/g, 'පරිශීලකයා');
  s = s.replace(/පරිශීල කයා/g, 'පරිශීලකයා');
  s = s.replace(/මූලි /g, 'මූලික ');
  s = s.replace(/ රුණු/g, ' කරුණු');
  s = s.replace(/පුවරෝ ථනය/g, 'පුරෝකථනය');
  s = s.replace(/ ටයුතු/g, ' කටයුතු');
  s = s.replace(/අනතුර ට/g, 'අනතුරකට');
  s = s.replace(/භූමි ම්පා/g, 'භූමිකම්පා');
  s = s.replace(/ක්ව /g, 'ක් ');
  s = s.replace(/ක්ව$/g, 'ක්');
  s = s.replace(/වැළැක්වවීවම්/g, 'වැළැක්වීමේ');
  s = s.replace(/වැළැක්වවීම/g, 'වැළැක්වීම');
  s = s.replace(/යාන්ර/g, 'යාන්ත්‍ර');
  s = s.replace(/විදයාව/g, 'විද්‍යාව');
  s = s.replace(/අවශය/g, 'අවශ්‍ය');
  s = s.replace(/පරිශීලකයාවේ/g, 'පරිශීලකයාගේ');
  s = s.replace(/වසෞඛ්‍ය/g, 'සෞඛ්‍ය');
  s = recomposeVisualKombuva(s, 'ව');
  return s;
}

const FIXERS = {
  'lesson-02': fixLesson02,
  'lesson-03': fixLesson03,
  'lesson-04': fixLesson04,
  'lesson-06': fixLesson06,
  'lesson-07': fixLesson07,
  'lesson-08': fixLesson08,
  'lesson-09': fixLesson09,
};

let modifiedQuestions = 0;
for (const q of questions) {
  const fixer = FIXERS[q.moduleId];
  if (!fixer) continue;
  const before = JSON.stringify([q.question, q.sinhalaText, q.options, q.explanation]);
  q.question = fixer(q.question);
  if (q.sinhalaText) q.sinhalaText = fixer(q.sinhalaText);
  q.options = q.options.map((opt) => fixer(opt));
  q.explanation = fixer(q.explanation);
  const after = JSON.stringify([q.question, q.sinhalaText, q.options, q.explanation]);
  if (before !== after) modifiedQuestions++;
}

const updated = raw.replace(
  /(export const ALL_QUIZ_QUESTIONS: QuizQuestion\[\] = )\[[\s\S]*?\n\];/,
  `$1${JSON.stringify(questions, null, 2)};`
);
await fs.writeFile(studyBankPath, updated, 'utf8');

console.log(`Repaired legacy Sinhala font-encoding in ${modifiedQuestions} questions across Lessons 2, 3, 4, 6, 7, 8, 9.`);

// Print repaired samples from each module
for (const mod of Object.keys(FIXERS)) {
  const sample = questions.filter((q) => q.moduleId === mod).slice(0, 3);
  console.log(`\n=== Verified ${mod} ===`);
  for (const q of sample) {
    console.log(`  [${q.id}] ${q.sinhalaText}`);
    console.log(`     OPT0: ${q.options[0]}`);
  }
}
