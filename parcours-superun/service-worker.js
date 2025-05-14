self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mission-run-cache').then(cache => {
      return cache.addAll([
        'index.html', 'style.css', 'script.js', 'manifest.json', 'logo.png'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});