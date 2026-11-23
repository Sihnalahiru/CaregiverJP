import { useEffect, useState } from 'react';
import { Header, type AppView } from './components/Header';
import { PaperLibrary } from './components/PaperLibrary';
import { QuizPractice } from './components/QuizPractice';
import { PdfReader } from './components/PdfReader';
import type { PaperMeta } from './types';

export function App() {
  const [activeView, setActiveView] = useState<AppView>('library');
  const [papers, setPapers] = useState<PaperMeta[]>([]);
  const [loadingPapers, setLoadingPapers] = useState(true);
  const [papersError, setPapersError] = useState<string | null>(null);

  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string>('lesson-01');

  useEffect(() => {
    let cancelled = false;
    async function fetchPapers() {
      try {
        setLoadingPapers(true);
        const res = await fetch('/api/papers');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = (await res.json()) as PaperMeta[];
        if (!cancelled) {
          setPapers(data);
          if (data.length > 0) {
            setSelectedPaperId(data[0].id);
          }
          setPapersError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setPapersError(
            err instanceof Error ? err.message : 'Failed to load papers'
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingPapers(false);
        }
      }
    }
    fetchPapers();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleOpenReader = (paperId: string) => {
    setSelectedPaperId(paperId);
    setActiveView('reader');
  };

  const handleOpenQuiz = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setActiveView('practice');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Header
        activeView={activeView}
        onNavigate={setActiveView}
        onStartPractice={() => setActiveView('practice')}
      />

      <main className="flex-1">
        {activeView === 'library' && (
          <PaperLibrary
            papers={papers}
            loading={loadingPapers}
            error={papersError}
            onOpenReader={handleOpenReader}
            onOpenQuiz={handleOpenQuiz}
          />
        )}

        {activeView === 'practice' && (
          <QuizPractice
            selectedModuleId={selectedModuleId}
            onSelectModule={setSelectedModuleId}
          />
        )}

        {activeView === 'reader' && (
          <PdfReader
            papers={papers}
            selectedPaperId={selectedPaperId}
            onSelectPaper={setSelectedPaperId}
          />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>HiCare · SSW Nursing Care Study Portal</span>
          <span>Original PDF Papers sourced from data/originalpapers</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
