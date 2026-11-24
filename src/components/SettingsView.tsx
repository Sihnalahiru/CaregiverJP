import React, { useState } from 'react';
import {
  Download,
  Monitor,
  Moon,
  RotateCcw,
  Sun,
  Upload,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { soundEngine } from '../utils/sound';
import {
  createBackupPayload,
  restoreBackupPayload,
  type AppSettings,
  type BilingualLayout,
  type PracticeMode,
  type ThemePreference,
} from '../utils/storage';

interface SettingsViewProps {
  settings: AppSettings;
  onUpdateSettings: (patch: Partial<AppSettings>) => void;
  onReloadFromStorage: () => void;
  onResetProgress: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onUpdateSettings,
  onReloadFromStorage,
  onResetProgress,
}) => {
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const handleExport = () => {
    soundEngine.playTap();
    const payload = createBackupPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `caregiverjp-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatusMessage({ type: 'success', text: 'Backup exported to your device.' });
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const { restoredKeys } = restoreBackupPayload(text);
      onReloadFromStorage();
      soundEngine.playCorrect();
      setStatusMessage({
        type: 'success',
        text: `Restored ${restoredKeys} saved record groups successfully.`,
      });
    } catch (err) {
      soundEngine.playWrong();
      setStatusMessage({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to import backup file.',
      });
    } finally {
      e.target.value = '';
    }
  };

  const themes: Array<{ id: ThemePreference; label: string; Icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'system', label: 'Auto', Icon: Monitor },
    { id: 'light', label: 'Light', Icon: Sun },
    { id: 'dark', label: 'Dark', Icon: Moon },
  ];

  return (
    <div className="animate-fade-slide space-y-5 px-4 pb-24 pt-4">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight text-[#131A2C] dark:text-[#F1F5FB]">
          Settings
        </h1>
        <p className="mt-0.5 text-xs text-[#5A647B] dark:text-[#94A3B8]">
          Preferences, sound, offline PWA install, and local backups
        </p>
      </div>

      {/* Sound & Feedback */}
      <section className="rounded-3xl border border-[#E6EAF2] bg-white p-4 dark:border-[#23304A] dark:bg-[#131B2C]">
        <h2 className="text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">Sound &amp; Audio</h2>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#1D4ED8] dark:bg-[#1E2E52] dark:text-[#7FA4FF]">
              {settings.soundEnabled ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5" />
              )}
            </span>
            <div>
              <p className="text-sm font-semibold text-[#131A2C] dark:text-[#F1F5FB]">
                Sound Effects
              </p>
              <p className="text-xs text-[#5A647B] dark:text-[#94A3B8]">
                Tap ticks, chimes, and achievement fanfare
              </p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={settings.soundEnabled}
            onClick={() => {
              const next = !settings.soundEnabled;
              soundEngine.setEnabled(next);
              onUpdateSettings({ soundEnabled: next });
              if (next) soundEngine.playCorrect();
            }}
            className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors ${
              settings.soundEnabled
                ? 'bg-[#1D4ED8] dark:bg-[#5B8BFF]'
                : 'bg-slate-200 dark:bg-slate-700'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-xs transition-transform ${
                settings.soundEnabled ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </section>

      {/* Appearance & Study Display */}
      <section className="space-y-4 rounded-3xl border border-[#E6EAF2] bg-white p-4 dark:border-[#23304A] dark:bg-[#131B2C]">
        <div>
          <h2 className="text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">Appearance</h2>
          <div className="mt-2.5 grid grid-cols-3 gap-1.5 rounded-2xl bg-[#EAEFF6] p-1 dark:bg-[#0D1422]">
            {themes.map(({ id, label, Icon }) => {
              const active = settings.theme === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    onUpdateSettings({ theme: id });
                  }}
                  className={`flex min-h-[40px] items-center justify-center gap-1.5 rounded-xl text-xs font-semibold transition ${
                    active
                      ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                      : 'text-[#5A647B] dark:text-[#94A3B8]'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#EEF2F7] pt-4 dark:border-[#1E2A42]">
          <h2 className="text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
            Default Practice Mode
          </h2>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5 rounded-2xl bg-[#EAEFF6] p-1 dark:bg-[#0D1422]">
            {(
              [
                { id: 'study', label: 'Study (Instant Answer)' },
                { id: 'exam', label: 'Timed Exam (CBT)' },
              ] as Array<{ id: PracticeMode; label: string }>
            ).map((opt) => {
              const active = settings.defaultMode === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    onUpdateSettings({ defaultMode: opt.id });
                  }}
                  className={`min-h-[40px] rounded-xl px-2 text-xs font-semibold transition ${
                    active
                      ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                      : 'text-[#5A647B] dark:text-[#94A3B8]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#EEF2F7] pt-4 dark:border-[#1E2A42]">
          <h2 className="text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
            English + සිංහල Layout
          </h2>
          <div className="mt-2.5 grid grid-cols-2 gap-1.5 rounded-2xl bg-[#EAEFF6] p-1 dark:bg-[#0D1422]">
            {(
              [
                { id: 'stacked', label: 'Stacked' },
                { id: 'side-by-side', label: 'Side-by-side' },
              ] as Array<{ id: BilingualLayout; label: string }>
            ).map((opt) => {
              const active = settings.bilingualLayout === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    onUpdateSettings({ bilingualLayout: opt.id });
                  }}
                  className={`min-h-[40px] rounded-xl px-2 text-xs font-semibold transition ${
                    active
                      ? 'bg-white text-[#131A2C] shadow-xs dark:bg-[#22304D] dark:text-[#F1F5FB]'
                      : 'text-[#5A647B] dark:text-[#94A3B8]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[#EEF2F7] pt-4 dark:border-[#1E2A42]">
          <div>
            <p className="text-sm font-semibold text-[#131A2C] dark:text-[#F1F5FB]">
              Auto-Next in Exam Mode
            </p>
            <p className="text-xs text-[#5A647B] dark:text-[#94A3B8]">
              Advance automatically after choosing an option
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={settings.autoAdvance}
            onClick={() => {
              soundEngine.playTap();
              onUpdateSettings({ autoAdvance: !settings.autoAdvance });
            }}
            className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors ${
              settings.autoAdvance
                ? 'bg-[#1D4ED8] dark:bg-[#5B8BFF]'
                : 'bg-slate-200 dark:bg-slate-700'
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-xs transition-transform ${
                settings.autoAdvance ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </section>

      {/* Install PWA */}
      <section className="space-y-2">
        <PWAInstallButton variant="card" />
      </section>

      {/* Local Data & Backup */}
      <section className="space-y-3 rounded-3xl border border-[#E6EAF2] bg-white p-4 dark:border-[#23304A] dark:bg-[#131B2C]">
        <div>
          <h2 className="text-sm font-bold text-[#131A2C] dark:text-[#F1F5FB]">
            Study Data &amp; Backup
          </h2>
          <p className="mt-0.5 text-xs text-[#5A647B] dark:text-[#94A3B8]">
            Saved locally on this device so app updates never wipe your history.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleExport}
            className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#DCE3F0] bg-[#F8FAFC] px-3 text-xs font-bold text-[#131A2C] transition active:scale-[0.98] dark:border-[#2B3B5C] dark:bg-[#1A253B] dark:text-[#F1F5FB]"
          >
            <Download className="h-4 w-4" />
            <span>Export JSON</span>
          </button>
          <label className="flex min-h-[44px] cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#DCE3F0] bg-[#F8FAFC] px-3 text-xs font-bold text-[#131A2C] transition active:scale-[0.98] dark:border-[#2B3B5C] dark:bg-[#1A253B] dark:text-[#F1F5FB]">
            <Upload className="h-4 w-4" />
            <span>Import JSON</span>
            <input
              type="file"
              accept="application/json,.json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>

        {statusMessage && (
          <p
            className={`text-xs font-semibold ${
              statusMessage.type === 'success'
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-[#C83254] dark:text-[#FB7185]'
            }`}
          >
            {statusMessage.text}
          </p>
        )}

        <div className="border-t border-[#EEF2F7] pt-3 dark:border-[#1E2A42]">
          <button
            type="button"
            onClick={() => {
              soundEngine.playTap();
              setConfirmReset(true);
            }}
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-rose-200 bg-rose-50/70 px-4 text-xs font-bold text-[#C83254] transition active:scale-[0.98] dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-[#FB7185]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Study Progress</span>
          </button>
        </div>
      </section>

      {/* In-app Reset Confirmation Bottom Sheet */}
      {confirmReset && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setConfirmReset(false)}
        >
          <div
            className="animate-sheet-up w-full max-w-[400px] rounded-3xl border border-[#E6EAF2] bg-white p-5 shadow-xl dark:border-[#23304A] dark:bg-[#131B2C]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
            <h3 className="text-base font-bold text-[#131A2C] dark:text-[#F1F5FB]">
              Reset all study progress?
            </h3>
            <p className="mt-1.5 text-xs leading-5 text-[#5A647B] dark:text-[#94A3B8]">
              This clears answered questions, streaks, bookmarks, and achievements on this device. Export a backup first if you want to keep a copy.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="min-h-[44px] rounded-xl bg-[#EEF2F7] text-sm font-semibold text-[#131A2C] dark:bg-[#1E2A42] dark:text-[#F1F5FB]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setConfirmReset(false);
                  setStatusMessage({ type: 'success', text: 'Study progress has been reset.' });
                }}
                className="min-h-[44px] rounded-xl bg-[#C83254] text-sm font-semibold text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
