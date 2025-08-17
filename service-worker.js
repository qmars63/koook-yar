self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("kook-yar").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "manifest.json",
        "assets/images/logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});