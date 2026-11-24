import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  computeStudyMetrics,
  evaluateAchievements,
  type EvaluatedAchievement,
} from '../utils/achievements';
import { soundEngine } from '../utils/sound';
import {
  clearStudyProgressOnly,
  computeEffectiveStreak,
  DEFAULT_STREAK,
  loadPersistedState,
  saveAchievements,
  saveAnswers,
  saveBookmarks,
  savePaperProgress,
  saveSettings,
  saveStreak,
  updateStreakOnAnswer,
  type AnswerRecord,
  type AppSettings,
  type PaperProgressRecord,
  type PersistedState,
} from '../utils/storage';

export function useStudyStore() {
  const [state, setState] = useState<PersistedState>(() => loadPersistedState());
  const [toastQueue, setToastQueue] = useState<EvaluatedAchievement[]>([]);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync sound engine with persisted setting
  useEffect(() => {
    soundEngine.setEnabled(state.settings.soundEnabled);
  }, [state.settings.soundEnabled]);

  // Sync light/dark theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const shouldBeDark =
        state.settings.theme === 'dark' ||
        (state.settings.theme === 'system' && mq.matches);
      root.classList.toggle('dark', shouldBeDark);
    };

    applyTheme();
    mq.addEventListener('change', applyTheme);
    return () => mq.removeEventListener('change', applyTheme);
  }, [state.settings.theme]);

  // Auto-dismiss active achievement toast after 4.2s
  useEffect(() => {
    if (toastQueue.length === 0) return;
    toastTimerRef.current = setTimeout(() => {
      setToastQueue((prev) => prev.slice(1));
    }, 4200);
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, [toastQueue]);

  const dismissToast = useCallback(() => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastQueue((prev) => prev.slice(1));
  }, []);

  const metrics = useMemo(
    () =>
      computeStudyMetrics(
        state.answers,
        state.bookmarks,
        state.paperProgress,
        state.streak
      ),
    [state.answers, state.bookmarks, state.paperProgress, state.streak]
  );

  const { list: achievements } = useMemo(
    () => evaluateAchievements(metrics, state.achievements),
    [metrics, state.achievements]
  );

  const effectiveStreak = useMemo(
    () => computeEffectiveStreak(state.streak),
    [state.streak]
  );

  const checkAndPersistAchievements = useCallback(
    (
      nextAnswers: Record<string, AnswerRecord>,
      nextBookmarks: string[],
      nextPaperProgress: Record<string, PaperProgressRecord>,
      nextStreak: PersistedState['streak'],
      currentUnlocked: Record<string, number>
    ): Record<string, number> => {
      const nextMetrics = computeStudyMetrics(
        nextAnswers,
        nextBookmarks,
        nextPaperProgress,
        nextStreak
      );
      const { newlyUnlocked } = evaluateAchievements(nextMetrics, currentUnlocked);
      if (newlyUnlocked.length === 0) return currentUnlocked;

      const now = Date.now();
      const updatedMap = { ...currentUnlocked };
      for (const badge of newlyUnlocked) {
        updatedMap[badge.id] = now;
      }
      saveAchievements(updatedMap);
      soundEngine.playAchievement();
      setToastQueue((prev) => [...prev, ...newlyUnlocked]);
      return updatedMap;
    },
    []
  );

  const recordAnswer = useCallback(
    (
      questionId: string,
      selectedIndex: number,
      isCorrect: boolean,
      paperId?: string,
      indexInPaper?: number
    ) => {
      setState((prev) => {
        const existing = prev.answers[questionId];
        const nextAnswers: Record<string, AnswerRecord> = {
          ...prev.answers,
          [questionId]: {
            selectedIndex,
            isCorrect,
            attempts: (existing?.attempts ?? 0) + 1,
            updatedAt: Date.now(),
          },
        };
        saveAnswers(nextAnswers);

        const nextStreak = updateStreakOnAnswer(prev.streak, isCorrect);
        saveStreak(nextStreak);

        let nextPaperProgress = prev.paperProgress;
        if (paperId !== undefined && indexInPaper !== undefined) {
          const prevPaper = prev.paperProgress[paperId] ?? {
            lastIndex: 0,
            completedCount: 0,
            bestScore: 0,
          };
          nextPaperProgress = {
            ...prev.paperProgress,
            [paperId]: {
              ...prevPaper,
              lastIndex: indexInPaper,
            },
          };
          savePaperProgress(nextPaperProgress);
        }

        const nextAchievements = checkAndPersistAchievements(
          nextAnswers,
          prev.bookmarks,
          nextPaperProgress,
          nextStreak,
          prev.achievements
        );

        return {
          ...prev,
          answers: nextAnswers,
          streak: nextStreak,
          paperProgress: nextPaperProgress,
          achievements: nextAchievements,
        };
      });
    },
    [checkAndPersistAchievements]
  );

  const recordPaperCompletion = useCallback(
    (paperId: string, scorePercent: number, zeroSkip: boolean) => {
      setState((prev) => {
        const prevPaper = prev.paperProgress[paperId] ?? {
          lastIndex: 0,
          completedCount: 0,
          bestScore: 0,
        };
        const nextPaperProgress: Record<string, PaperProgressRecord> = {
          ...prev.paperProgress,
          [paperId]: {
            ...prevPaper,
            completedCount: prevPaper.completedCount + 1,
            bestScore: Math.max(prevPaper.bestScore, scorePercent),
            lastCompletedAt: Date.now(),
            zeroSkipCompleted: prevPaper.zeroSkipCompleted || zeroSkip,
          },
        };
        savePaperProgress(nextPaperProgress);

        const nextAchievements = checkAndPersistAchievements(
          prev.answers,
          prev.bookmarks,
          nextPaperProgress,
          prev.streak,
          prev.achievements
        );

        return {
          ...prev,
          paperProgress: nextPaperProgress,
          achievements: nextAchievements,
        };
      });
    },
    [checkAndPersistAchievements]
  );

  const setPaperLastIndex = useCallback((paperId: string, lastIndex: number) => {
    setState((prev) => {
      const prevPaper = prev.paperProgress[paperId] ?? {
        lastIndex: 0,
        completedCount: 0,
        bestScore: 0,
      };
      if (prevPaper.lastIndex === lastIndex) return prev;
      const nextPaperProgress: Record<string, PaperProgressRecord> = {
        ...prev.paperProgress,
        [paperId]: {
          ...prevPaper,
          lastIndex,
        },
      };
      savePaperProgress(nextPaperProgress);
      return { ...prev, paperProgress: nextPaperProgress };
    });
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setState((prev) => {
      const exists = prev.bookmarks.includes(questionId);
      const nextBookmarks = exists
        ? prev.bookmarks.filter((id) => id !== questionId)
        : [...prev.bookmarks, questionId];
      saveBookmarks(nextBookmarks);
      return { ...prev, bookmarks: nextBookmarks };
    });
  }, []);

  const updateSettings = useCallback((patch: Partial<AppSettings>) => {
    setState((prev) => {
      const nextSettings: AppSettings = { ...prev.settings, ...patch };
      saveSettings(nextSettings);
      return { ...prev, settings: nextSettings };
    });
  }, []);

  const reloadFromStorage = useCallback(() => {
    setState(loadPersistedState());
  }, []);

  const resetProgress = useCallback(() => {
    clearStudyProgressOnly();
    setState((prev) => ({
      ...prev,
      answers: {},
      bookmarks: [],
      paperProgress: {},
      streak: DEFAULT_STREAK,
      achievements: {},
    }));
  }, []);

  return {
    state,
    metrics,
    achievements,
    effectiveStreak,
    activeToast: toastQueue[0] ?? null,
    dismissToast,
    recordAnswer,
    recordPaperCompletion,
    setPaperLastIndex,
    toggleBookmark,
    updateSettings,
    reloadFromStorage,
    resetProgress,
  };
}
