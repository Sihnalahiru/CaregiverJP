interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
}

/**
 * Cloudflare Worker entry point for the Vite-built static PWA.
 * Static files, PDFs, and app assets are served by the Workers Assets binding.
 */
export default {
  fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};
