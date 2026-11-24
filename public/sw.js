const CACHE_PREFIX = 'caregiverjp-static-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './papers-manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_PREFIX).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('caregiverjp-') && key !== CACHE_PREFIX).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  // Navigations: use the network when available, then the cached app shell.
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_PREFIX).then((cache) => cache.put('./index.html', copy));
      }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  // Static assets and PDFs are cached after first successful visit.
  event.respondWith(caches.match(request).then((cached) => {
    if (cached) return cached;
    return fetch(request).then((response) => {
      if (response.ok && (response.type === 'basic' || response.type === 'cors')) {
        const copy = response.clone();
        caches.open(CACHE_PREFIX).then((cache) => cache.put(request, copy));
      }
      return response;
    });
  }));
});
