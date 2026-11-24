interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

interface PaperMeta {
  id: string;
  filename: string;
  title: string;
  category: 'MCQ Exam' | 'Bilingual Q&A' | 'Caregiver Guide';
  lessonCode: string;
  language: string;
  sizeBytes: number;
  pageCount: number | null;
  description: string;
  pdfUrl: string;
  downloadUrl: string;
  quizModuleId?: string;
  bilingualSourceId?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });

async function getPapers(request: Request, env: Env): Promise<PaperMeta[]> {
  const manifestUrl = new URL('/papers-manifest.json', request.url);
  const response = await env.ASSETS.fetch(new Request(manifestUrl, {
    headers: { Accept: 'application/json' },
  }));
  if (!response.ok) throw new Error(`Paper manifest asset returned HTTP ${response.status}`);
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    throw new Error('Paper manifest asset is missing or is not JSON');
  }
  return (await response.json()) as PaperMeta[];
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/health') {
      return json({ status: 'ok', service: 'caregiverjp-worker' });
    }

    if (url.pathname === '/api/papers' && request.method === 'GET') {
      try {
        const papers = await getPapers(request, env);
        return json(papers);
      } catch (error) {
        console.error('Paper catalog error:', error);
        return json({
          error: 'Unable to load paper catalog',
          detail: error instanceof Error ? error.message : 'Unknown asset error',
        }, 500);
      }
    }

    const pdfMatch = url.pathname.match(/^\/api\/papers\/([^/]+)\/pdf$/);
    if (pdfMatch && (request.method === 'GET' || request.method === 'HEAD')) {
      try {
        const id = decodeURIComponent(pdfMatch[1]);
        const papers = await getPapers(request, env);
        const paper = papers.find((item) => item.id === id);
        if (!paper) return json({ error: 'Paper not found' }, 404);

        const assetUrl = new URL(`/papers/${encodeURIComponent(paper.filename)}`, request.url);
        const assetRequest = new Request(assetUrl, {\n          method: request.method,\n          headers: request.headers,\n        });
        const assetResponse = await env.ASSETS.fetch(assetRequest);
        if (!assetResponse.ok) {
          return json({ error: 'PDF asset not found', filename: paper.filename }, 404);
        }

        const headers = new Headers(assetResponse.headers);
        headers.set('Content-Type', 'application/pdf');
        headers.set('Content-Disposition',
          `${url.searchParams.get('download') === '1' ? 'attachment' : 'inline'}; filename*=UTF-8''${encodeURIComponent(paper.filename)}`);
        headers.set('X-Content-Type-Options', 'nosniff');
        headers.set('Cache-Control', 'public, max-age=3600');
        return new Response(assetResponse.body, {
          status: assetResponse.status,
          statusText: assetResponse.statusText,
          headers,
        });
      } catch (error) {
        console.error('PDF delivery error:', error);
        return json({
          error: 'Unable to serve PDF',
          detail: error instanceof Error ? error.message : 'Unknown asset error',
        }, 500);
      }
    }

    if (url.pathname.startsWith('/api/')) {
      return json({ error: 'API route not found' }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};
