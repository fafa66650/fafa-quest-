self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fafa-maillol').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './script.js',
        './config.js',
        './logo.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});