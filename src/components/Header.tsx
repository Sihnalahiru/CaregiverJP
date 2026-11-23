import React from 'react';

export type AppView = 'library' | 'practice' | 'bilingual' | 'reader';

interface HeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
  onStartPractice: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  onStartPractice,
}) => {
  const navItems: { id: AppView; label: string }[] = [
    { id: 'library', label: 'Paper Library' },
    { id: 'practice', label: 'Practice Quiz' },
    { id: 'bilingual', label: 'Bilingual Q&A' },
    { id: 'reader', label: 'PDF Reader' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => onNavigate('library')}
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7]"
        >
          HiCare
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0284C7] ${
                  isActive
                    ? 'text-[#0284C7] border-[#0284C7]'
                    : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onStartPractice}
            className="px-4 py-2 text-sm font-semibold text-white bg-[#0284C7] rounded-lg hover:bg-[#0369A1] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284C7]"
          >
            Start Practice
          </button>
        </div>
      </div>

      {/* Mobile navigation strip */}
      <nav
        aria-label="Mobile navigation"
        className="flex md:hidden items-center gap-4 px-6 pb-3 overflow-x-auto"
      >
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`py-1 text-xs font-medium whitespace-nowrap shrink-0 border-b-2 transition-colors ${
                isActive
                  ? 'text-[#0284C7] border-[#0284C7]'
                  : 'text-slate-600 border-transparent hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
