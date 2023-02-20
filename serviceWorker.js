const hydraCache = "hydra-base-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/js/hydra-synth"
  // "/images/coffee1.jpg",
  // "/images/coffee2.jpg",
  // "/images/coffee3.jpg",
  // "/images/coffee4.jpg",
  // "/images/coffee5.jpg",
  // "/images/coffee6.jpg",
  // "/images/coffee7.jpg",
  // "/images/coffee8.jpg",
  // "/images/coffee9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(hydraCache).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
