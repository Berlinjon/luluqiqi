const CACHE_NAME = 'english-listening-v21';
const OFFLINE_ASSETS = [
  './index.html',
  './src/course-data.js',
  './manifest.webmanifest',
  './assets/concepts/primary-screen-concept.png',
  './assets/illustrations/generated/cat-sleeping.png',
  './assets/illustrations/generated/dog-running.png',
  './assets/illustrations/generated/bird-flying.png',
  './assets/illustrations/generated/fish-swimming.png',
  './assets/illustrations/generated/cat-on-bed.png',
  './assets/illustrations/generated/dog-under-table.png',
  './assets/illustrations/generated/rabbit-in-box.png',
  './assets/illustrations/generated/bag-next-chair.png',
  './assets/illustrations/generated/blue-bag.png',
  './assets/illustrations/generated/open-door.png',
  './assets/illustrations/generated/close-window.png',
  './assets/illustrations/generated/yellow-sun.png',
  './assets/illustrations/generated/green-tree.png',
  './assets/illustrations/generated/child-rain.png',
  './assets/illustrations/generated/child-snow.png',
  './assets/illustrations/generated/apple-red.png',
  './assets/illustrations/generated/kite-wind.png',
  './assets/illustrations/generated/boy-eats-cake.png',
  './assets/illustrations/generated/brushing-teeth.png',
  './assets/illustrations/generated/girl-drinks-milk.png',
  './assets/illustrations/generated/count-stars.png',
  './assets/illustrations/generated/red-ball.png',
  './assets/illustrations/generated/banana-yellow.png',
  './assets/illustrations/generated/dad-cooking.png',
  './assets/illustrations/generated/girl-reading.png',
  './assets/illustrations/generated/boy-running.png',
  './assets/illustrations/generated/washing-hands.png',
  './assets/illustrations/generated/wear-hat.png',
  './assets/illustrations/generated/red-ball-small.png',
  './assets/illustrations/generated/blue-bag-big.png',
  './assets/illustrations/generated/green-tree-tall.png',
  './assets/illustrations/generated/yellow-sun-bright.png',
  './assets/illustrations/generated/banana-long-yellow.png',
  './assets/illustrations/generated/apple-red-round.png',
  './assets/illustrations/generated/snow-white.png',
  './assets/illustrations/generated/cake-sweet.png',
  './assets/illustrations/generated/milk-white-cup.png',
  './assets/illustrations/generated/fish-blue.png',
  './assets/illustrations/generated/weather-raining.png',
  './assets/illustrations/generated/star-yellow.png',
  './assets/illustrations/generated/bag-next-ball.png',
  './assets/illustrations/generated/bag-beside-chair.png',
  './assets/illustrations/generated/tree-outside-green.png',
  './assets/illustrations/generated/door-beside-window.png',
  './assets/illustrations/generated/cat-blue-bed.png',
  './assets/illustrations/generated/cat-sits-on-bed.png',
  './assets/illustrations/generated/dog-below-table.png',
  './assets/illustrations/generated/rabbit-sits-in-box.png',
  './assets/illustrations/generated/bird-near-cloud.png',
  './assets/illustrations/generated/apple-in-basket.png',
  './assets/illustrations/generated/banana-on-table.png',
  './assets/illustrations/generated/cake-on-plate.png',
  './assets/illustrations/generated/child-stands-rain.png',
  './assets/illustrations/generated/fish-swims-water.png',
  './assets/illustrations/generated/child-stands-snow.png',
  './assets/illustrations/generated/kite-flies-wind.png',
  './assets/illustrations/generated/star-in-sky.png',
  './assets/illustrations/generated/bag-near-chair.png',
  './assets/illustrations/generated/weather-snowing.png',
  './assets/illustrations/generated/weather-windy.png',
  './assets/illustrations/generated/sun-bright-weather.png',
  './assets/illustrations/generated/stars-in-sky.png',
  './assets/illustrations/generated/bird-in-sky.png',
  './assets/illustrations/generated/tree-tall-weather.png',
  './assets/illustrations/generated/snow-cold.png',
  './assets/illustrations/generated/fish-in-water-weather.png',
  './assets/illustrations/generated/dog-under-sun.png',
  './assets/illustrations/generated/cloud-near-bird.png',
  './assets/illustrations/generated/child-has-umbrella.png',
  './assets/illustrations/generated/kite-high.png',
  './assets/illustrations/generated/rain-wet.png',
  './assets/illustrations/generated/sun-hot.png',
  './assets/illustrations/generated/tree-outside-weather.png',
  './audio/sentences/the-cat-is-sleeping.wav',
  './audio/sentences/the-dog-is-running.wav',
  './audio/sentences/the-bird-is-flying.wav',
  './audio/sentences/the-fish-is-swimming.wav',
  './audio/sentences/the-cat-is-on-the-bed.wav',
  './audio/sentences/the-dog-is-under-the-table.wav',
  './audio/sentences/the-rabbit-is-in-the-box.wav',
  './audio/sentences/the-bag-is-next-to-the-chair.wav',
  './audio/sentences/the-bird-is-near-the-cloud.wav',
  './audio/sentences/the-fish-is-in-the-water.wav',
  './audio/sentences/the-cat-is-quiet.wav',
  './audio/sentences/the-dog-is-fast.wav',
  './audio/sentences/the-bird-is-small.wav',
  './audio/sentences/the-fish-is-blue.wav',
  './audio/sentences/the-animal-is-sleeping.wav',
  './audio/sentences/the-apple-is-red.wav',
  './audio/sentences/the-banana-is-yellow.wav',
  './audio/sentences/the-girl-drinks-milk.wav',
  './audio/sentences/the-boy-eats-cake.wav',
  './audio/sentences/dad-is-cooking.wav',
  './audio/sentences/the-cake-is-on-the-plate.wav',
  './audio/sentences/the-apple-is-in-the-basket.wav',
  './audio/sentences/the-milk-is-white.wav',
  './audio/sentences/the-banana-is-on-the-table.wav',
  './audio/sentences/the-food-is-hot.wav',
  './audio/sentences/she-wants-milk.wav',
  './audio/sentences/he-wants-cake.wav',
  './audio/sentences/the-red-fruit-is-an-apple.wav',
  './audio/sentences/the-yellow-fruit-is-a-banana.wav',
  './audio/sentences/the-family-cooks-dinner.wav',
  './audio/sentences/the-boy-is-running.wav',
  './audio/sentences/the-girl-is-reading.wav',
  './audio/sentences/she-is-brushing-her-teeth.wav',
  './audio/sentences/he-is-washing-his-hands.wav',
  './audio/sentences/open-the-door.wav',
  './audio/sentences/close-the-window.wav',
  './audio/sentences/put-on-the-hat.wav',
  './audio/sentences/the-child-plays-in-the-rain.wav',
  './audio/sentences/the-child-touches-the-snow.wav',
  './audio/sentences/the-kite-is-in-the-wind.wav',
  './audio/sentences/count-the-stars.wav',
  './audio/sentences/the-ball-is-red.wav',
  './audio/sentences/the-bag-is-blue.wav',
  './audio/sentences/the-tree-is-green.wav',
  './audio/sentences/the-sun-is-yellow.wav',
  './audio/sentences/the-red-ball-is-small.wav',
  './audio/sentences/the-blue-bag-is-big.wav',
  './audio/sentences/the-green-tree-is-tall.wav',
  './audio/sentences/the-yellow-sun-is-bright.wav',
  './audio/sentences/the-apple-is-red-and-round.wav',
  './audio/sentences/the-banana-is-long-and-yellow.wav',
  './audio/sentences/the-snow-is-white.wav',
  './audio/sentences/the-star-is-yellow.wav',
  './audio/sentences/the-cake-is-sweet.wav',
  './audio/sentences/the-bag-is-next-to-the-ball.wav',
  './audio/sentences/the-green-tree-is-outside.wav',
  './audio/sentences/the-white-milk-is-in-the-cup.wav',
  './audio/sentences/the-cat-is-on-a-blue-bed.wav',
  './audio/sentences/the-cat-sits-on-the-bed.wav',
  './audio/sentences/the-dog-is-below-the-table.wav',
  './audio/sentences/the-rabbit-sits-in-the-box.wav',
  './audio/sentences/the-bag-is-beside-the-chair.wav',
  './audio/sentences/the-apple-sits-in-the-basket.wav',
  './audio/sentences/the-banana-sits-on-the-table.wav',
  './audio/sentences/the-cake-sits-on-the-plate.wav',
  './audio/sentences/the-bird-flies-near-the-cloud.wav',
  './audio/sentences/the-fish-swims-in-the-water.wav',
  './audio/sentences/the-kite-flies-in-the-wind.wav',
  './audio/sentences/the-child-stands-in-the-rain.wav',
  './audio/sentences/the-child-stands-in-the-snow.wav',
  './audio/sentences/the-star-is-in-the-sky.wav',
  './audio/sentences/the-bag-is-near-the-chair.wav',
  './audio/sentences/the-door-is-beside-the-window.wav',
  './audio/sentences/it-is-raining.wav',
  './audio/sentences/it-is-snowing.wav',
  './audio/sentences/it-is-windy.wav',
  './audio/sentences/the-sun-is-bright.wav',
  './audio/sentences/the-tree-is-tall.wav',
  './audio/sentences/the-bird-is-in-the-sky.wav',
  './audio/sentences/the-fish-is-in-water.wav',
  './audio/sentences/the-cloud-is-near-the-bird.wav',
  './audio/sentences/the-child-has-an-umbrella.wav',
  './audio/sentences/the-kite-is-high.wav',
  './audio/sentences/the-stars-are-in-the-sky.wav',
  './audio/sentences/the-snow-is-cold.wav',
  './audio/sentences/the-rain-is-wet.wav',
  './audio/sentences/the-sun-is-hot.wav',
  './audio/sentences/the-tree-is-outside.wav',
  './icons/icon-192-v2.png',
  './icons/icon-512-v2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(OFFLINE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => key === CACHE_NAME ? Promise.resolve() : caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const shouldRefreshFirst =
    request.mode === 'navigate' ||
    (isSameOrigin && (
      url.pathname.endsWith('/english-listening-app/') ||
      url.pathname.endsWith('/english-listening-app/index.html') ||
      url.pathname.endsWith('/english-listening-app/src/course-data.js')
    ));

  event.respondWith(
    shouldRefreshFirst ? networkFirst(request) : cacheFirst(request)
  );
});

function cacheFirst(request) {
  return caches.match(request).then(cached => {
    if (cached) return cached;
    return fetchAndCache(request);
  });
}

function networkFirst(request) {
  return fetchAndCache(request).catch(() =>
    caches.match(request).then(cached =>
      cached || caches.match('./index.html')
    )
  );
}

function fetchAndCache(request) {
  return fetch(request).then(response => {
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    return response;
  });
}
