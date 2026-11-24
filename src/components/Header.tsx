import React from 'react';
import {
  Award,
  BookOpen,
  Home,
  Moon,
  Settings,
  Sun,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { soundEngine } from '../utils/sound';
import type { ThemePreference } from '../utils/storage';

export type AppView = 'dashboard' | 'library' | 'achievements' | 'settings' | 'practice';

interface HeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: ThemePreference;
  onCycleTheme: () => void;
  unlockedBadgeCount: number;
}

const TAB_ITEMS: Array<{
  id: Exclude<AppView, 'practice'>;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: 'dashboard', label: 'Home', Icon: Home },
  { id: 'library', label: 'Papers', Icon: BookOpen },
  { id: 'achievements', label: 'Badges', Icon: Award },
  { id: 'settings', label: 'Settings', Icon: Settings },
];

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  soundEnabled,
  onToggleSound,
  theme,
  onCycleTheme,
  unlockedBadgeCount,
}) => {
  const isDarkEffective =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (activeView === 'practice') {
    return null;
  }

  return (
    <>
      {/* Compact mobile top bar (56px, respects 15% sticky budget) */}
      <header className="sticky top-0 z-30 border-b border-[#E6EAF2] bg-white/90 pt-safe backdrop-blur-md dark:border-[#1E293E] dark:bg-[#0F1625]/90">
        <div className="flex h-14 items-center justify-between gap-2 px-4">
          <button
            type="button"
            onClick={() => {
              soundEngine.playTap();
              onNavigate('dashboard');
            }}
            className="flex min-h-[44px] items-center gap-2 whitespace-nowrap text-left"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#1D4ED8] text-xs font-extrabold tracking-tight text-white dark:bg-[#5B8BFF] dark:text-[#0B101B]">
              JP
            </span>
            <span className="text-[17px] font-extrabold tracking-tight text-[#131A2C] dark:text-[#F1F5FB]">
              Caregiver<span className="text-[#1D4ED8] dark:text-[#7FA4FF]">JP</span>
            </span>
          </button>

          <div className="flex shrink-0 items-center gap-1">
            <PWAInstallButton variant="compact" />
            <button
              type="button"
              onClick={onToggleSound}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-[#475569] transition active:scale-95 hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-[#1B253A]"
              aria-label={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
              title={soundEnabled ? 'Sound On' : 'Sound Muted'}
            >
              {soundEnabled ? (
                <Volume2 className="h-[19px] w-[19px] text-[#1D4ED8] dark:text-[#7FA4FF]" />
              ) : (
                <VolumeX className="h-[19px] w-[19px]" />
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                soundEngine.playTap();
                onCycleTheme();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-[#475569] transition active:scale-95 hover:bg-slate-100 dark:text-[#94A3B8] dark:hover:bg-[#1B253A]"
              aria-label="Toggle light or dark theme"
              title="Toggle appearance"
            >
              {isDarkEffective ? (
                <Sun className="h-[19px] w-[19px] text-amber-400" />
              ) : (
                <Moon className="h-[19px] w-[19px]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Thumb-friendly Fixed Bottom Tab Bar */}
      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[430px] border-t border-[#E6EAF2] bg-white/95 pb-safe pt-1.5 backdrop-blur-md dark:border-[#1E293E] dark:bg-[#0F1625]/95"
      >
        <div className="grid grid-cols-4 items-center px-2">
          {TAB_ITEMS.map(({ id, label, Icon }) => {
            const active = activeView === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  soundEngine.playTap();
                  onNavigate(id);
                }}
                aria-current={active ? 'page' : undefined}
                className={`relative flex min-h-[50px] flex-col items-center justify-center gap-0.5 rounded-xl px-1 transition active:scale-95 ${
                  active
                    ? 'text-[#1D4ED8] dark:text-[#7FA4FF]'
                    : 'text-[#64748B] hover:text-[#131A2C] dark:text-[#8A99B3] dark:hover:text-[#F1F5FB]'
                }`}
              >
                <Icon className={`h-[21px] w-[21px] ${active ? 'stroke-[2.3]' : 'stroke-[1.9]'}`} />
                <span className="whitespace-nowrap text-[11px] font-semibold tracking-tight">
                  {label}
                  {id === 'achievements' && unlockedBadgeCount > 0 ? ` (${unlockedBadgeCount})` : ''}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
