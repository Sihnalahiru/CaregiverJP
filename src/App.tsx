import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { Header, type AppView } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { PaperLibrary } from './components/PaperLibrary';
import { QuizPractice } from './components/QuizPractice';

export function App() {
  const [activeView, setActiveView] = useState<AppView>('dashboard');
  const [selectedPaperSetId, setSelectedPaperSetId] = useState('cbt-paper-01');

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    const base = new URL('./', window.location.href);
    if (window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
      navigator.serviceWorker.register(new URL('sw.js', base), { updateViaCache: 'none' }).then((registration) => registration.update()).catch((error) => console.error('Service worker registration failed:', error));
    }
  }, []);

  const exportBackup = () => {
    const payload = { app: 'CaregiverJP', version: 1, exportedAt: new Date().toISOString(), data: Object.fromEntries(Object.keys(localStorage).filter((key) => key.startsWith('caregiverjp.')).map((key) => [key, localStorage.getItem(key)])) };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `caregiverjp-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };
  const importBackup = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (parsed?.app !== 'CaregiverJP' || parsed?.version !== 1 || !parsed?.data || typeof parsed.data !== 'object') throw new Error('This is not a valid CaregiverJP backup file.');
      if (!window.confirm('Import this backup? Matching CaregiverJP local data will be replaced.')) return;
      for (const [key, value] of Object.entries(parsed.data)) if (key.startsWith('caregiverjp.') && (typeof value === 'string' || value === null)) value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value);
      window.location.reload();
    } catch (error) { window.alert(error instanceof Error ? error.message : 'Backup import failed.'); }
    finally { event.target.value = ''; }
  };
  const startPaper = (paperSetId: string) => { setSelectedPaperSetId(paperSetId); setActiveView('practice'); };

  return <div className="flex min-h-screen flex-col bg-[#F9F9F9] text-[#222248]">
    <Header activeView={activeView} onNavigate={setActiveView} />
    <main className="flex-1">
      {activeView === 'dashboard' && <Dashboard onStartQuiz={() => setActiveView('library')} />}
      {activeView === 'library' && <PaperLibrary onStartQuiz={startPaper} />}
      {activeView === 'practice' && <QuizPractice key={selectedPaperSetId} paperSetId={selectedPaperSetId} onExit={() => setActiveView('library')} />}
    </main>
    <footer className="mt-8 border-t border-[#E4EDF8] bg-white pb-20 sm:pb-0"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6"><span>CaregiverJP · Your personal study companion</span><div className="flex items-center gap-4"><button type="button" onClick={exportBackup} className="underline underline-offset-2">Export backup</button><label className="cursor-pointer underline underline-offset-2">Import backup<input type="file" accept="application/json,.json" onChange={importBackup} className="hidden" /></label></div></div></footer>
  </div>;
}
export default App;
