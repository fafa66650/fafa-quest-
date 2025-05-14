
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vieux-port').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/scripts/script.js',
        '/manifest.json',
        '/assets/logo.png'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
