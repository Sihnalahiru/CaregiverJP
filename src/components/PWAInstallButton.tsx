import React, { useState } from 'react';
import { Download, Share, PlusSquare, X, WifiOff } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { soundEngine } from '../utils/sound';

interface PWAInstallButtonProps {
  variant?: 'compact' | 'card';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'compact' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    if (variant === 'card') {
      return (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3.5 text-sm text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
          <p className="font-semibold">App Installed</p>
          <p className="mt-0.5 text-xs text-emerald-700 dark:text-emerald-300/90">
            Running in standalone mode with full offline support for all 555 questions.
          </p>
        </div>
      );
    }
    return null;
  }

  const handleInstallClick = async () => {
    soundEngine.playTap();
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  const canTrigger = isInstallable || isIOS;
  if (!canTrigger) {
    if (variant === 'card') {
      return (
        <div className="rounded-2xl border border-[#E6EAF2] bg-white px-4 py-3.5 text-sm dark:border-[#23304A] dark:bg-[#131B2C]">
          <p className="font-semibold text-[#131A2C] dark:text-[#F1F5FB]">Offline PWA Ready</p>
          <p className="mt-0.5 text-xs leading-5 text-[#5A647B] dark:text-[#94A3B8]">
            Use your mobile browser menu (&ldquo;Add to Home Screen&rdquo; or &ldquo;Install App&rdquo;) to launch full-screen offline.
          </p>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      {variant === 'compact' ? (
        <button
          type="button"
          onClick={handleInstallClick}
          className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl bg-[#1D4ED8] px-3 py-1.5 text-xs font-semibold text-white transition active:scale-95 hover:bg-[#1E40AF] dark:bg-[#5B8BFF] dark:text-[#0B101B]"
          aria-label="Install app"
        >
          <Download className="h-3.5 w-3.5" />
          <span>Install</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleInstallClick}
          className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.98] hover:bg-[#1E40AF] dark:bg-[#5B8BFF] dark:text-[#0B101B]"
        >
          <Download className="h-4 w-4" />
          <span>{isIOS ? 'Install on iPhone / iPad' : 'Install CaregiverJP App'}</span>
        </button>
      )}

      {showIOSGuide && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ios-install-title"
          onClick={() => setShowIOSGuide(false)}
        >
          <div
            className="animate-sheet-up w-full max-w-[400px] rounded-3xl border border-[#E6EAF2] bg-white p-5 pb-6 shadow-xl dark:border-[#23304A] dark:bg-[#131B2C]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3
                  id="ios-install-title"
                  className="text-base font-bold text-[#131A2C] dark:text-[#F1F5FB]"
                >
                  Install on iPhone / iPad
                </h3>
                <p className="mt-1 text-xs text-[#5A647B] dark:text-[#94A3B8]">
                  Add CaregiverJP to your home screen for full-screen offline study.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#5A647B] hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-slate-800"
                aria-label="Close install instructions"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ol className="mt-4 space-y-3 text-sm text-[#131A2C] dark:text-[#E2E8F0]">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#1D4ED8] dark:bg-[#1E2B4A] dark:text-[#8FB0FF]">
                  <Share className="h-4 w-4" />
                </span>
                <span>
                  Tap the <strong>Share</strong> icon in Safari&apos;s bottom toolbar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#1D4ED8] dark:bg-[#1E2B4A] dark:text-[#8FB0FF]">
                  <PlusSquare className="h-4 w-4" />
                </span>
                <span>
                  Scroll down and tap <strong>Add to Home Screen</strong>, then tap <strong>Add</strong>.
                </span>
              </li>
            </ol>

            <button
              type="button"
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 min-h-[44px] w-full rounded-xl bg-[#131A2C] py-2.5 text-sm font-semibold text-white transition active:scale-[0.98] dark:bg-[#5B8BFF] dark:text-[#0B101B]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const OfflineBanner: React.FC = () => {
  const isOnline = useOnlineStatus();
  if (isOnline) return null;

  return (
    <div
      role="status"
      className="flex items-center justify-center gap-2 border-b border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/60 dark:text-amber-200"
    >
      <WifiOff className="h-3.5 w-3.5 shrink-0" />
      <span>Offline Mode — All 555 questions &amp; progress saved locally</span>
    </div>
  );
};
