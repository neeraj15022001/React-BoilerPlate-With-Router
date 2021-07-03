const cacheName = "sample-cache"
const resourcesToPrecache = [
    "/",
    "index.html",
    "static/css/",
    "static/js"

]
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll(resourcesToPrecache))
        .catch(err => console.log("Failed to Precache", err))
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(
        console.log("Activate Event")
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.requests)
        .then(cachedResponse => cachedResponse || fetch(event.requests))
        .catch(err => console.log("fetch failed", err))
    );
    event.waitUntil(
        
    );
});