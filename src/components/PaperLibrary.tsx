import React, { useMemo, useState } from 'react';
import { CheckSquare, Download, FileText, Search } from 'lucide-react';
import type { PaperCategory, PaperMeta } from '../types';

interface PaperLibraryProps {
  papers: PaperMeta[];
  loading: boolean;
  error: string | null;
  onOpenReader: (paperId: string) => void;
  onOpenQuiz: (moduleId: string) => void;
}

type CategoryFilter = 'All' | PaperCategory;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(0)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
}

export const PaperLibrary: React.FC<PaperLibraryProps> = ({
  papers,
  loading,
  error,
  onOpenReader,
  onOpenQuiz,
}) => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [query, setQuery] = useState('');

  const categories: CategoryFilter[] = [
    'All',
    'MCQ Exam',
    'Bilingual Q&A',
    'Caregiver Guide',
  ];

  const filteredPapers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return papers.filter((paper) => {
      const matchesCategory = filter === 'All' || paper.category === filter;
      const matchesQuery =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.description.toLowerCase().includes(q) ||
        paper.lessonCode.toLowerCase().includes(q) ||
        paper.filename.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [papers, filter, query]);

  const totalPages = useMemo(
    () => papers.reduce((sum, p) => sum + (p.pageCount ?? 0), 0),
    [papers]
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      {/* Editorial Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-200 pb-10">
        <div className="lg:col-span-8 space-y-4">
          <p className="text-sm font-medium text-[#0284C7]">
            SSW Nursing Care Study Portal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-2xl [text-wrap:balance]">
            Study original SSW caregiver papers, practice MCQs, and review bilingual Q&amp;A notes.
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Every paper in the HiCare archive is indexed directly from the original documents. Read full PDFs side-by-side, test your recall on timed-free MCQ modules, or study English and Sinhala concepts together.
          </p>
        </div>

        {/* Quantitative summary row */}
        <div className="lg:col-span-4 grid grid-cols-3 gap-4 bg-white border border-slate-200 rounded-xl p-5">
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono-tabular">
              {papers.length || 9}
            </div>
            <div className="text-xs text-slate-500 mt-1">Original PDFs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono-tabular">
              {totalPages || '—'}
            </div>
            <div className="text-xs text-slate-500 mt-1">Total Pages</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 font-mono-tabular">
              100
            </div>
            <div className="text-xs text-slate-500 mt-1">Practice MCQs</div>
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter papers by type"
          className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto"
        >
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(cat)}
                className={`px-3 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Papers' : cat}
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
            placeholder="Search papers or topics..."
            aria-label="Search papers"
            className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7]"
          />
        </div>
      </section>

      {/* States */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 animate-pulse"
            >
              <div className="h-3 w-28 bg-slate-200 rounded" />
              <div className="h-5 w-3/4 bg-slate-200 rounded" />
              <div className="h-12 w-full bg-slate-100 rounded" />
              <div className="h-9 w-1/2 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-white border border-red-200 rounded-xl p-6 text-sm text-red-700">
          {error}
        </div>
      ) : filteredPapers.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center space-y-2">
          <p className="text-base font-semibold text-slate-900">No matching papers found</p>
          <p className="text-sm text-slate-600">
            Try clearing your search query or switching to All Papers.
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <article
              key={paper.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between gap-6 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                {/* Unboxed metadata line */}
                <div className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-mono-tabular">
                  <span className="font-medium text-slate-700">{paper.lessonCode}</span>
                  <span aria-hidden="true">·</span>
                  <span>{paper.category}</span>
                  {paper.pageCount !== null && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{paper.pageCount} pages</span>
                    </>
                  )}
                  <span aria-hidden="true">·</span>
                  <span>{formatBytes(paper.sizeBytes)}</span>
                </div>

                <h2 className="text-lg font-semibold text-slate-900 leading-snug">
                  {paper.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {paper.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenReader(paper.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    Read PDF
                  </button>

                  {paper.quizModuleId && (
                    <button
                      type="button"
                      onClick={() => onOpenQuiz(paper.quizModuleId!)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <CheckSquare className="w-3.5 h-3.5" aria-hidden="true" />
                      Practice
                    </button>
                  )}

                </div>

                <a
                  href={paper.downloadUrl}
                  download={paper.filename}
                  title={`Download ${paper.filename}`}
                  aria-label={`Download ${paper.title}`}
                  className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};
