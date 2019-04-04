var CACHE_NAME="my-site-cache-v1";
var urlsToCache=[
  '/',
  './index.html',
  './src/App.js',
  './src/App.css',
  '/src/index.js',
  '/img_192.png',
  '/img_512.png'
];


self.addEventListener('install',function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    }
    )
  );
});

self.addEventListener('fetch',function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      //cache hit -return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    }
    )
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['my-site-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(CACHE_NAME) {
      return Promise.all(
        CACHE_NAME.map(function(CACHE_NAME) {
        if (cacheWhitelist.indexOf(CACHE_NAME) === -1) {
          return caches.delete(CACHE_NAME);
        }
        })
      );
    })
  );
});