const CACHE_VERSION = 'v4';
const SHELL_CACHE = `ssw-care-shell-${CACHE_VERSION}`;
const ASSET_CACHE = `ssw-care-assets-${CACHE_VERSION}`;
const FONT_CACHE = `ssw-care-fonts-${CACHE_VERSION}`;

const PRECACHE_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.svg',
  './icons/apple-touch-icon.png',
  './icons/pwa-192x192.png',
  './icons/pwa-512x512.png',
  './icons/pwa-maskable-512x512.png',
  './papers-manifest.json',
];

const STATIC_EXT_RE = /\.(?:js|css|png|jpg|jpeg|webp|svg|woff2?|ico|json)$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) =>
        Promise.allSettled(PRECACHE_SHELL.map((url) => cache.add(url)))
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const validCaches = new Set([SHELL_CACHE, ASSET_CACHE, FONT_CACHE]);
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (key) =>
                (key.startsWith('ssw-care-') || key.startsWith('caregiverjp-')) &&
                !validCaches.has(key)
            )
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Cache-first for Google Fonts (Noto Sans Sinhala, Plus Jakarta Sans, JetBrains Mono)
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    event.respondWith(
      caches.open(FONT_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response.ok || response.type === 'opaque') {
            cache.put(request, response.clone());
          }
          return response;
        } catch {
          return cached || Response.error();
        }
      })
    );
    return;
  }

  // Only handle same-origin requests beyond fonts
  if (url.origin !== self.location.origin) return;

  // Navigation requests (HTML): Network-first with clean offline shell fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            const cache = await caches.open(SHELL_CACHE);
            cache.put('./index.html', response.clone());
          }
          return response;
        })
        .catch(async () => {
          const cached =
            (await caches.match(request)) || (await caches.match('./index.html'));
          return cached || Response.error();
        })
    );
    return;
  }

  // Static app shell, hashed assets, and repository images: Cache-first with background refresh for non-hashed files
  if (STATIC_EXT_RE.test(url.pathname) || url.pathname.includes('/assets/')) {
    event.respondWith(
      caches.open(ASSET_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const response = await fetch(request);
          if (response.ok && (response.type === 'basic' || response.type === 'cors')) {
            cache.put(request, response.clone());
          }
          return response;
        } catch {
          return Response.error();
        }
      })
    );
    return;
  }

  // Fallback: Network-first with cache fallback
  event.respondWith(
    fetch(request)
      .then(async (response) => {
        if (response.ok && response.type === 'basic') {
          const cache = await caches.open(SHELL_CACHE);
          cache.put(request, response.clone());
        }
        return response;
      })
      .catch(async () => (await caches.match(request)) || Response.error())
  );
});
