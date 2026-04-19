const CACHE = ‘japan-planner-v3’;
const ASSETS = [
‘./japan-itinerary.html’,
‘./manifest.json’,
‘./icon-192.svg’,
‘./icon-512.svg’
];

self.addEventListener(‘install’, e => {
e.waitUntil(
caches.open(CACHE)
.then(cache => cache.addAll(ASSETS).catch(() => {}))
.then(() => self.skipWaiting())
);
});

self.addEventListener(‘activate’, e => {
e.waitUntil(
caches.keys()
.then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
.then(() => self.clients.claim())
);
});

self.addEventListener(‘fetch’, e => {
const url = new URL(e.request.url);
const isFont = url.hostname.includes(‘fonts.g’);

if (isFont) {
e.respondWith(
fetch(e.request)
.then(res => {
const clone = res.clone();
caches.open(CACHE).then(c => c.put(e.request, clone));
return res;
})
.catch(() => caches.match(e.request))
);
} else {
e.respondWith(
caches.match(e.request)
.then(cached => cached || fetch(e.request)
.then(res => {
if (res.ok) {
const clone = res.clone();
caches.open(CACHE).then(c => c.put(e.request, clone));
}
return res;
})
)
.catch(() => caches.match(’./index.html’))
);
}
});
