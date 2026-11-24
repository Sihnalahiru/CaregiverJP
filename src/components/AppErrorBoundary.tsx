import React from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; message: string; }

export class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message || 'An unexpected app error occurred.' };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('CaregiverJP render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <main style={{minHeight:'100vh',padding:'32px 20px',display:'grid',placeItems:'center',background:'#F9F9F9',fontFamily:'system-ui,sans-serif',color:'#222248'}}>
        <section style={{width:'100%',maxWidth:520,padding:24,border:'1px solid #E4EDF8',borderRadius:24,background:'#fff'}}>
          <h1 style={{fontSize:24,fontWeight:800}}>CaregiverJP could not load this screen</h1>
          <p style={{marginTop:12,fontSize:14,lineHeight:1.6}}>Your study data has not been changed. Please reload the app. If this message remains, share the technical detail below.</p>
          <pre style={{marginTop:16,padding:12,overflowWrap:'anywhere',whiteSpace:'pre-wrap',borderRadius:12,background:'#F5F7FC',fontSize:12}}>{this.state.message}</pre>
          <button onClick={() => window.location.reload()} style={{marginTop:18,minHeight:44,padding:'0 18px',borderRadius:12,background:'#1132D9',color:'#fff',fontWeight:700}}>Reload app</button>
        </section>
      </main>;
    }
    return this.props.children;
  }
}
