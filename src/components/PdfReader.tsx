import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import type { PaperMeta } from '../types';

interface PdfReaderProps {
  papers: PaperMeta[];
  selectedPaperId: string | null;
  onSelectPaper: (id: string) => void;
}

export const PdfReader: React.FC<PdfReaderProps> = ({
  papers,
  selectedPaperId,
  onSelectPaper,
}) => {
  const activePaper =
    papers.find((p) => p.id === selectedPaperId) ?? papers[0] ?? null;

  if (!activePaper) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-sm text-slate-600">
          No PDF papers are currently available in the archive.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left paper switcher */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200">
            <h1 className="text-base font-semibold text-slate-900">
              Original Paper Archive
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Select a document to inspect or download
            </p>
          </div>
          <div className="divide-y divide-slate-100 max-h-[680px] overflow-y-auto">
            {papers.map((paper) => {
              const isSelected = paper.id === activePaper.id;
              return (
                <button
                  key={paper.id}
                  type="button"
                  onClick={() => onSelectPaper(paper.id)}
                  className={`w-full text-left px-5 py-3.5 transition-colors cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? 'bg-sky-50/70 text-slate-900'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <FileText
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isSelected ? 'text-[#0284C7]' : 'text-slate-400'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium truncate">
                      {paper.title}
                    </div>
                    <div className="text-xs text-slate-500 font-mono-tabular mt-0.5">
                      {paper.lessonCode}
                      {paper.pageCount !== null ? ` · ${paper.pageCount}p` : ''}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right document viewport */}
        <section className="lg:col-span-8 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-xs text-slate-500 font-mono-tabular">
                {activePaper.lessonCode} · {activePaper.language}
                {activePaper.pageCount !== null
                  ? ` · ${activePaper.pageCount} pages`
                  : ''}
              </div>
              <h2 className="text-lg font-semibold text-slate-900 truncate mt-0.5">
                {activePaper.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={activePaper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                Open Raw PDF
              </a>
              <a
                href={activePaper.downloadUrl}
                download={activePaper.filename}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                Download
              </a>
            </div>
          </div>

          <div className="bg-slate-100 h-[720px] w-full">
            <iframe
              key={activePaper.id}
              src={activePaper.pdfUrl}
              title={activePaper.title}
              className="w-full h-full border-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
