import React, { useEffect, useMemo, useState } from 'react';
import { Bookmark, Eye, EyeOff, Search } from 'lucide-react';
import { BILINGUAL_CARDS } from '../data/studyBank';

interface BilingualStudyProps {
  selectedSourceId: string;
  onSelectSource: (sourceId: string) => void;
}

const BOOKMARK_STORAGE_KEY = 'hicare_bilingual_bookmarks_v1';

export const BilingualStudy: React.FC<BilingualStudyProps> = ({
  selectedSourceId,
  onSelectSource,
}) => {
  const [query, setQuery] = useState('');
  const [studyMode, setStudyMode] = useState<'all' | 'flashcard'>('all');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(bookmarks));
    } catch {
      // Ignore storage quota errors
    }
  }, [bookmarks]);

  const sources = [
    { id: 'all', label: 'All Study Sets' },
    { id: 'exam-q1', label: 'Exam Questions 01' },
    { id: 'exam-q2', label: 'Exam Questions 02' },
    { id: 'exam-q3', label: 'Exam Questions 03' },
  ];

  const filteredCards = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BILINGUAL_CARDS.filter((card) => {
      const matchesSource =
        selectedSourceId === 'all' || card.sourceId === selectedSourceId;
      const matchesBookmark =
        !showBookmarksOnly || bookmarks.includes(card.id);
      const matchesQuery =
        !q ||
        card.questionEn.toLowerCase().includes(q) ||
        card.answerEn.toLowerCase().includes(q) ||
        card.sinhalaText.toLowerCase().includes(q) ||
        card.topic.toLowerCase().includes(q);
      return matchesSource && matchesBookmark && matchesQuery;
    });
  }, [selectedSourceId, showBookmarksOnly, bookmarks, query]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
      <section className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Bilingual Study Guide (English &amp; සිංහල)
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Review SSW caregiving definitions, clinical procedures, and Sinhala explanations extracted from Exam Questions 01–03.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => setStudyMode('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  studyMode === 'all'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Show Answers
              </button>
              <button
                type="button"
                onClick={() => {
                  setStudyMode('flashcard');
                  setRevealedIds({});
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  studyMode === 'flashcard'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Flashcard Recall
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowBookmarksOnly((v) => !v)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                showBookmarksOnly
                  ? 'bg-sky-50 border-[#0284C7] text-[#0284C7]'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
              Saved ({bookmarks.length})
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-100">
          <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
            {sources.map((src) => {
              const active = selectedSourceId === src.id;
              return (
                <button
                  key={src.id}
                  type="button"
                  onClick={() => onSelectSource(src.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {src.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search English or සිංහල..."
              aria-label="Search bilingual study cards"
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7]"
            />
          </div>
        </div>
      </section>

      {filteredCards.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
          <p className="text-base font-semibold text-slate-900">
            No matching study cards
          </p>
          <p className="text-sm text-slate-600">
            Try clearing your search filter or showing all cards.
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCards.map((card) => {
            const isBookmarked = bookmarks.includes(card.id);
            const isRevealed = studyMode === 'all' || Boolean(revealedIds[card.id]);

            return (
              <article
                key={card.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs text-slate-500 font-mono-tabular">
                      {card.sourceTitle} · {card.topic}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleBookmark(card.id)}
                      aria-label={
                        isBookmarked ? 'Remove bookmark' : 'Save card for review'
                      }
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        isBookmarked
                          ? 'text-[#0284C7] bg-sky-50'
                          : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Bookmark
                        className="w-4 h-4"
                        fill={isBookmarked ? 'currentColor' : 'none'}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <h2 className="text-base font-semibold text-slate-900 leading-snug">
                    {card.questionEn}
                  </h2>

                  {isRevealed ? (
                    <div className="space-y-3 pt-2 border-t border-slate-100">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {card.answerEn}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg">
                        {card.sinhalaText}
                      </p>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => toggleReveal(card.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0284C7] bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                        Reveal Answer &amp; සිංහල
                      </button>
                    </div>
                  )}
                </div>

                {studyMode === 'flashcard' && isRevealed && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => toggleReveal(card.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      <EyeOff className="w-3.5 h-3.5" aria-hidden="true" />
                      Hide Answer
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
};
