import React from 'react';
import { BookOpen, Home, Sparkles } from 'lucide-react';
export type AppView = 'dashboard' | 'library' | 'practice';
interface HeaderProps { activeView: AppView; onNavigate: (view: AppView) => void; }
export const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  const items = [{ id: 'dashboard' as const, label: 'Home', Icon: Home }, { id: 'library' as const, label: 'Papers', Icon: BookOpen }];
  return <>
    <header className="sticky top-0 z-30 border-b border-[#E4EDF8] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <button type="button" onClick={() => onNavigate('dashboard')} className="flex items-center gap-2.5 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#1132D9] text-white shadow-[0_6px_16px_rgba(17,50,217,.22)]"><Sparkles className="h-5 w-5" /></span>
          <span><span className="block text-[17px] font-extrabold tracking-tight text-[#222248]">Caregiver<span className="text-[#3A58F5]">JP</span></span><span className="block text-[9px] font-bold uppercase tracking-[.18em] text-[#9CA5B8]">Study companion</span></span>
        </button>
        <nav aria-label="Main navigation" className="hidden items-center gap-2 sm:flex">{items.map(({id,label,Icon}) => <button key={id} type="button" onClick={() => onNavigate(id)} aria-current={activeView===id?'page':undefined} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold transition ${activeView===id?'bg-[#EAF0FF] text-[#1132D9]':'text-[#747E99] hover:bg-[#F5F7FC] hover:text-[#222248]'}`}><Icon className="h-4 w-4"/>{label}</button>)}</nav>
        <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#FFF3C7] text-sm font-extrabold text-[#222248] sm:flex">JP</div>
      </div>
    </header>
    {activeView !== 'practice' && <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E4EDF8] bg-white/95 px-8 pb-[max(env(safe-area-inset-bottom),10px)] pt-2 backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around">{items.map(({id,label,Icon})=><button key={id} type="button" onClick={() => onNavigate(id)} aria-current={activeView===id?'page':undefined} className={`flex min-w-20 flex-col items-center gap-1 rounded-xl px-4 py-1.5 text-[10px] font-bold ${activeView===id?'text-[#1132D9]':'text-[#9CA5B8]'}`}><span className={`flex h-8 w-12 items-center justify-center rounded-full ${activeView===id?'bg-[#EAF0FF]':'bg-transparent'}`}><Icon className="h-[18px] w-[18px]"/></span>{label}</button>)}</div>
    </nav>}
  </>;
};
