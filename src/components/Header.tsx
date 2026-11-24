import React from 'react';
export type AppView = 'dashboard' | 'library' | 'practice';
interface HeaderProps { activeView: AppView; onNavigate: (view: AppView) => void; }
export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const items: { id: AppView; label: string }[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'library', label: 'Paper Library' },
  ];
  return <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"><button type="button" onClick={() => onNavigate('dashboard')} className="shrink-0 text-xl font-bold tracking-tight text-slate-900">HiCare</button><nav aria-label="Main navigation" className="flex items-center gap-5 sm:gap-7">{items.map((item) => <button key={item.id} type="button" onClick={() => onNavigate(item.id)} aria-current={activeView === item.id ? 'page' : undefined} className={`border-b-2 py-2 text-sm font-medium transition ${activeView === item.id ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-600 hover:text-slate-950'}`}>{item.label}</button>)}</nav></div></header>;
};
