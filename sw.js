const CACHE = “japan26-v3”;
const ASSETS = [“index.html”, “style.css”, “script.js”, “manifest.json”, “icon-192.svg”, “icon-512.svg”];

self.addEventListener(“install”, e => {
e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener(“activate”, e => {
e.waitUntil(
caches.keys()
.then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
.then(() => self.clients.claim())
);
});

self.addEventListener(“fetch”, e => {
const url = new URL(e.request.url);
// Network-first for Google Fonts so they update; cache-first for our own files
if (url.hostname.includes(“fonts.g”)) {
e.respondWith(
fetch(e.request)
.then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; })
.catch(() => caches.match(e.request))
);
} else {
e.respondWith(
caches.match(e.request)
.then(cached => cached || fetch(e.request)
.then(res => { if(res.ok){ caches.open(CACHE).then(c => c.put(e.request, res.clone())); } return res; })
.catch(() => caches.match(“index.html”))
)
);
}
});