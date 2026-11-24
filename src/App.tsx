import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { AchievementToast } from './components/AchievementToast';
import { Header, type AppView } from './components/Header';
import { OfflineBanner } from './components/PWAInstallButton';
import type { PracticeSessionConfig } from './components/QuizPractice';
import { useStudyStore } from './hooks/useStudyStore';
import {
  getPaperById,
  getQuestionByGlobalNumber,
  INDEXED_QUESTIONS,
} from './utils/papers';
import { soundEngine } from './utils/sound';
import type { PracticeMode } from './utils/storage';

const Dashboard = lazy(() => import('./components/Dashboard').then((m) => ({ default: m.Dashboard })));
const PaperLibrary = lazy(() => import('./components/PaperLibrary').then((m) => ({ default: m.PaperLibrary })));
const AchievementsView = lazy(() => import('./components/AchievementsView').then((m) => ({ default: m.AchievementsView })));
const QuizPractice = lazy(() => import('./components/QuizPractice').then((m) => ({ default: m.QuizPractice })));
const SettingsView = lazy(() => import('./components/SettingsView').then((m) => ({ default: m.SettingsView })));

export function App() {
  const {
    state,
    metrics,
    achievements,
    effectiveStreak,
    activeToast,
    dismissToast,
    recordAnswer,
    recordPaperCompletion,
    setPaperLastIndex,
    toggleBookmark,
    updateSettings,
    reloadFromStorage,
    resetProgress,
  } = useStudyStore();

  const [activeView, setActiveView] = useState<AppView>('dashboard');
  const [returnView, setReturnView] = useState<Exclude<AppView, 'practice'>>('dashboard');
  const [practiceSession, setPracticeSession] = useState<PracticeSessionConfig | null>(null);

  // Register resilient offline Service Worker
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    const base = new URL('./', window.location.href);
    const isSecure =
      window.location.protocol === 'https:' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';
    if (!isSecure) return;

    navigator.serviceWorker
      .register(new URL('sw.js', base), { updateViaCache: 'none' })
      .then((reg) => {
        reg.update().catch(() => {});
      })
      .catch((err) => {
        console.warn('Service worker registration skipped:', err);
      });
  }, []);

  const unlockedBadgeCount = achievements.filter((a) => a.unlocked).length;

  const handleToggleSound = useCallback(() => {
    const next = !state.settings.soundEnabled;
    soundEngine.setEnabled(next);
    updateSettings({ soundEnabled: next });
    if (next) soundEngine.playTap();
  }, [state.settings.soundEnabled, updateSettings]);

  const handleCycleTheme = useCallback(() => {
    const currentlyDark = document.documentElement.classList.contains('dark');
    updateSettings({ theme: currentlyDark ? 'light' : 'dark' });
  }, [updateSettings]);

  const handleToggleBilingualLayout = useCallback(() => {
    updateSettings({
      bilingualLayout:
        state.settings.bilingualLayout === 'stacked' ? 'side-by-side' : 'stacked',
    });
  }, [state.settings.bilingualLayout, updateSettings]);

  const startPaper = useCallback(
    (paperId: string, mode?: PracticeMode, startIndex = 0) => {
      const paper = getPaperById(paperId);
      setReturnView(activeView === 'practice' ? 'library' : activeView);
      setPracticeSession({
        id: `${paper.id}-${Date.now()}`,
        title: paper.title,
        questions: paper.questions,
        initialIndex: startIndex,
        initialMode: mode ?? state.settings.defaultMode,
        paperId: paper.id,
      });
      setActiveView('practice');
    },
    [activeView, state.settings.defaultMode]
  );

  const startWeakReview = useCallback(() => {
    const weakQuestions = INDEXED_QUESTIONS.filter(
      (q) => state.answers[q.id] && !state.answers[q.id].isCorrect
    );
    if (weakQuestions.length === 0) return;
    setReturnView('dashboard');
    setPracticeSession({
      id: `weak-${Date.now()}`,
      title: 'Weak Questions',
      questions: weakQuestions,
      initialIndex: 0,
      initialMode: 'study',
    });
    setActiveView('practice');
  }, [state.answers]);

  const startBookmarksReview = useCallback(() => {
    const bookmarkedQuestions = INDEXED_QUESTIONS.filter((q) =>
      state.bookmarks.includes(q.id)
    );
    if (bookmarkedQuestions.length === 0) return;
    setReturnView('dashboard');
    setPracticeSession({
      id: `bookmarks-${Date.now()}`,
      title: 'Saved Questions',
      questions: bookmarkedQuestions,
      initialIndex: 0,
      initialMode: 'study',
    });
    setActiveView('practice');
  }, [state.bookmarks]);

  const startUnansweredReview = useCallback(() => {
    const remaining = INDEXED_QUESTIONS.filter((q) => !state.answers[q.id]);
    if (remaining.length === 0) return;
    setReturnView('dashboard');
    setPracticeSession({
      id: `unanswered-${Date.now()}`,
      title: 'Remaining Questions',
      questions: remaining,
      initialIndex: 0,
      initialMode: 'study',
    });
    setActiveView('practice');
  }, [state.answers]);

  const jumpToQuestion = useCallback(
    (globalNumber: number) => {
      const target = getQuestionByGlobalNumber(globalNumber);
      if (!target) return;
      const paper = getPaperById(target.paperId);
      setReturnView('dashboard');
      setPracticeSession({
        id: `jump-${target.id}-${Date.now()}`,
        title: paper.title,
        questions: paper.questions,
        initialIndex: target.indexInPaper,
        initialMode: 'study',
        paperId: paper.id,
      });
      setActiveView('practice');
    },
    []
  );

  return (
    <div className="min-h-dvh w-full bg-[#EDF0F6] dark:bg-[#060911] sm:flex sm:justify-center sm:py-4">
      {/* Mobile-Only Viewport Shell (full-bleed on phones, sleek 430px portrait shell on desktop) */}
      <div className="relative flex min-h-dvh w-full max-w-[430px] flex-col overflow-x-hidden bg-[#F6F7FB] text-[#131A2C] dark:bg-[#0B101B] dark:text-[#F1F5FB] sm:min-h-[calc(100dvh-2rem)] sm:rounded-[34px] sm:border sm:border-[#DCE3F0] sm:shadow-[0_24px_64px_rgba(19,26,44,0.14)] dark:sm:border-[#1E2A42] dark:sm:shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
        <OfflineBanner />

        <AchievementToast
          achievement={activeToast}
          onDismiss={dismissToast}
          onViewBadges={() => setActiveView('achievements')}
        />

        <Header
          activeView={activeView}
          onNavigate={(view) => setActiveView(view)}
          soundEnabled={state.settings.soundEnabled}
          onToggleSound={handleToggleSound}
          theme={state.settings.theme}
          onCycleTheme={handleCycleTheme}
          unlockedBadgeCount={unlockedBadgeCount}
        />

        <div className="flex-1">
          <Suspense fallback={<div className="px-4 py-10 text-center text-sm text-slate-500" role="status">Loading study section…</div>}>
          {activeView === 'dashboard' && (
            <Dashboard
              answers={state.answers}
              bookmarks={state.bookmarks}
              paperProgress={state.paperProgress}
              metrics={metrics}
              effectiveStreak={effectiveStreak}
              defaultMode={state.settings.defaultMode}
              onStartPaper={startPaper}
              onStartWeakReview={startWeakReview}
              onStartBookmarksReview={startBookmarksReview}
              onStartUnansweredReview={startUnansweredReview}
              onJumpToQuestion={jumpToQuestion}
              onOpenPapers={() => setActiveView('library')}
            />
          )}

          {activeView === 'library' && (
            <PaperLibrary
              answers={state.answers}
              paperProgress={state.paperProgress}
              onStartPaper={startPaper}
            />
          )}

          {activeView === 'achievements' && (
            <AchievementsView
              achievements={achievements}
              effectiveStreak={effectiveStreak}
              bestStreak={state.streak.longest}
              bestConsecutiveCorrect={state.streak.bestConsecutiveCorrect}
            />
          )}

          {activeView === 'settings' && (
            <SettingsView
              settings={state.settings}
              onUpdateSettings={updateSettings}
              onReloadFromStorage={reloadFromStorage}
              onResetProgress={resetProgress}
            />
          )}

          {activeView === 'practice' && practiceSession && (
            <QuizPractice
              key={practiceSession.id}
              session={practiceSession}
              persistedAnswers={state.answers}
              bookmarks={state.bookmarks}
              bilingualLayout={state.settings.bilingualLayout}
              soundEnabled={state.settings.soundEnabled}
              autoAdvance={state.settings.autoAdvance}
              onToggleSound={handleToggleSound}
              onToggleBilingualLayout={handleToggleBilingualLayout}
              onRecordAnswer={recordAnswer}
              onRecordPaperCompletion={recordPaperCompletion}
              onSetPaperLastIndex={setPaperLastIndex}
              onToggleBookmark={toggleBookmark}
              onExit={() => setActiveView(returnView)}
            />
          )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
