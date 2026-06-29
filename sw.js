const CACHE_NAME = 'garden-root-shell-v6';
const OFFLINE_ASSETS = [
  './index.html',
  './apps.html',
  './garden.html',
  './garden-app/index.html',
  './garden-app/luludaka.html',
  './english-listening-app/index.html',
  './english-listening-app/src/course-data.js',
  './english-listening-app/manifest.webmanifest',
  './english-listening-app/sw.js',
  './yuwen-app/index.html',
  './yuwen-app/manifest.webmanifest',
  './yuwen-app/sw.js',
  './english-listening-app/assets/concepts/primary-screen-concept.png',
  './manifest.webmanifest',
  './icons/icon-192-v2.png',
  './icons/icon-512-v2.png',
  './icons/apple-touch-icon-v2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => key === CACHE_NAME ? Promise.resolve() : caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if(request.method !== 'GET') return;

  if(request.mode === 'navigate'){
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./garden-app/index.html', copy));
        return response;
      }).catch(() => caches.match('./garden-app/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if(cached) return cached;
      return fetch(request).then(response => {
        if(!response || response.status !== 200 || response.type !== 'basic') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      });
    })
  );
});
