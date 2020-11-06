importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');


const CACHE_NAME = 'Football-data';
const urlCache = [
    '/',
    '/index.html',
    '/css/materialize.css',
    '/css/materialize.min.css',
    '/css/style.css',
    '/js/materialize.js',
    '/js/materialize.min.js',
    '/nav.js',
    '/script.js',
    '/js/api.js',
    '/js/db.js',
    '/pages/nav.html',
    '/pages/cl.html',
    '/pages/el.html',
    '/pages/fl.html',
    '/pages/gl.html',
    '/pages/nl.html',
    '/pages/sl.html',
    '/pages/save.html',
    '/pages/pertandingan.html',
    '/pages/detail-team.html',
    '/img/ball-64px.png',
    '/img/ball-128px.png',
    '/img/ball-512px.png',
    '/img/icons/favorite.svg',
    '/manifest.json',
    'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
]

if (workbox) {
    console.log('workbox berhasil dimuat');
} else {
    console.log('workbox gagal dimuat');
}

workbox.precaching.precacheAndRoute(urlCache, {ignoreUrlParametersMatching: [/.*/]});

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'pages'
    })
)

self.addEventListener('fetch', e => {
    const base_url = 'https://api.football-data.org/v2/';

    if (e.request.url.indexOf(base_url) > -1) {
        e.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return fetch(e.request).then(response => {
                    cache.put(e.request.url, response.clone());
                    return response;
                })
            })
        )
    } else {
        e.respondWith(
            caches.match(e.request, { ignoreSearch: true }).then(response => {
                return response || fetch(e.request);
            })
        )
    }
})

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName != CACHE_NAME) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})

self.addEventListener('push', e => {
    let body = null;
    if (e.data) {
        body = e.data.text();
    } else {
        body = 'gakada payload';
    }

    const options = {
        body: body,
        icon: '/img/ball-64px.png',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    }

    e.waitUntil(
        self.registration.showNotification('Push Notif', options)
    )
})