const CACHE_PREFIX = 'caregiverjp-static-v2';
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
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Network-first prevents an older cached app bundle from masking a new deployment.
  event.respondWith(
    fetch(request).then((response) => {
      if (response.ok && (response.type === 'basic' || response.type === 'cors')) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE_PREFIX).then((cache) => cache.put(request, copy)));
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
