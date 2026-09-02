/* SAMISHA cache reset worker: intentionally does not cache app files. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  // Network-first/no-cache behavior prevents stale or missing-file references.
  event.respondWith(fetch(event.request));
});
