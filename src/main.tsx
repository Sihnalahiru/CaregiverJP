import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AppErrorBoundary } from './components/AppErrorBoundary';

function showStartupError(title: string, detail: string) {
  const root = document.getElementById('root');
  if (!root || root.childElementCount > 0) return;
  const panel = document.createElement('main');
  panel.style.cssText = 'min-height:100vh;padding:32px 20px;display:grid;place-items:center;background:#F9F9F9;color:#222248;font-family:system-ui,sans-serif';
  const section = document.createElement('section');
  section.style.cssText = 'width:100%;max-width:560px;padding:24px;border:1px solid #E4EDF8;border-radius:20px;background:#fff';
  const heading = document.createElement('h1');
  heading.textContent = title;
  heading.style.cssText = 'font-size:22px;font-weight:800';
  const message = document.createElement('p');
  message.textContent = 'The app script started but could not finish loading. Your saved study data has not been changed.';
  message.style.cssText = 'margin-top:12px;font-size:14px;line-height:1.6';
  const pre = document.createElement('pre');
  pre.textContent = detail;
  pre.style.cssText = 'margin-top:16px;padding:12px;overflow-wrap:anywhere;white-space:pre-wrap;border-radius:12px;background:#F5F7FC;font-size:12px';
  section.append(heading, message, pre);
  panel.append(section);
  root.replaceChildren(panel);
}

window.addEventListener('error', (event) => {
  if (!event.error) return;
  console.error('CaregiverJP startup error:', event.error);
  showStartupError('CaregiverJP could not start', event.error?.stack || event.message || 'Unknown JavaScript error');
});

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const detail = reason instanceof Error ? reason.stack || reason.message : String(reason);
  console.error('CaregiverJP unhandled rejection:', reason);
  showStartupError('CaregiverJP startup task failed', detail);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary><App /></AppErrorBoundary>
  </StrictMode>
);
