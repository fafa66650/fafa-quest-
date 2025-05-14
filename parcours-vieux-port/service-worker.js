self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("vieux-port-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/config.js",
        "/manifest.json"
      ]);
    })
  );
});
