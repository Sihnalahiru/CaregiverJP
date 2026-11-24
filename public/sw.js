const CACHE_PREFIX = 'caregiverjp-static-v4';
const FONT_CACHE = 'caregiverjp-fonts-v1';
const APP_SHELL = ['./', './index.html', './manifest.webmanifest', './papers-manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_PREFIX)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith('caregiverjp-static-') && key !== CACHE_PREFIX)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET') return;

  // Cache Google Fonts so Sinhala glyph shaping remains available after the
  // first successful online load. Keep this separate from the app shell cache.
  const isGoogleFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (isGoogleFont) {
    event.respondWith(
      fetch(request).then(async (response) => {
        if (response.ok) {
          await caches.open(FONT_CACHE).then((cache) => cache.put(request, response.clone()));
        }
        return response;
      }).catch(async () => {
        const cached = await caches.open(FONT_CACHE).then((cache) => cache.match(request));
        return cached || Response.error();
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Network-first prevents an older cached app bundle from masking a new deployment.
  event.respondWith(
    fetch(request).then(async (response) => {
      if (response.ok && (response.type === 'basic' || response.type === 'cors')) {
        const copy = response.clone();
        await caches.open(CACHE_PREFIX).then((cache) => cache.put(request, copy));
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }
      return Response.error();
    })
  );
});
