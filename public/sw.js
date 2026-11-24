const APP_CACHE = "caregiverjp-app-v2026-11-24";
const FONT_CACHE = "caregiverjp-fonts-v1";
const RUNTIME_CACHE = "caregiverjp-runtime-v1";
const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/app-icon.svg",
  "./icons/apple-touch-icon.png",
  "./icons/pwa-192x192.png",
  "./icons/pwa-512x512.png",
  "./icons/pwa-maskable-512x512.png",
  "./papers-manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);
    // Keep installation resilient if an optional manifest is absent on a host.
    await Promise.all(PRECACHE_ASSETS.map(async (asset) => {
      try { await cache.add(asset); } catch (error) {
        if (asset === "./" || asset === "./index.html" || asset === "./manifest.webmanifest") throw error;
        console.warn("Optional precache asset unavailable:", asset, error);
      }
    }));
  })());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith("caregiverjp-") &&
        ![APP_CACHE, FONT_CACHE, RUNTIME_CACHE].includes(key))
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (url.origin !== self.location.origin && !isFont) return;

  if (isFont) {
    event.respondWith((async () => {
      const cache = await caches.open(FONT_CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        return cached || new Response("", { status: 503, statusText: "Font unavailable offline" });
      }
    })());
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          const cache = await caches.open(APP_CACHE);
          await cache.put("./index.html", response.clone());
        }
        return response;
      } catch {
        return (await caches.match("./index.html")) ||
          new Response("Offline", { status: 503, statusText: "Offline" });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok && response.type === "basic") {
        const cache = await caches.open(RUNTIME_CACHE);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      return new Response("Offline", { status: 503, statusText: "Offline" });
    }
  })());
});
