const CACHE_NAME = "trenazhery-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",

  /* меню */
  "./manifest.json",
  "./icon.png",

  /* тренажёры (ВАЖНО: все твои пути) */
  "./apps/reading/alfavit.html",
  "./apps/reading/chitalka.html",
  "./apps/reading/lavina.html",
  "./apps/reading/nitki.html",
  "./apps/reading/pereverton.html",
  "./apps/reading/pytal.html",
  "./apps/reading/raduga.html",
  "./apps/reading/slogi.html",
  "./apps/reading/stolby.html",
  "./apps/reading/tablitsy.html",

  "./apps/math/domiky.html",
  "./apps/math/magia.html",
  "./apps/math/primery.html",
  "./apps/math/tochki.html",

  "./apps/other/doska.html",
  "./apps/other/labyrint.html",
  "./apps/other/chto_izmenilos.html"
];

/* INSTALL */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

/* ACTIVATE */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

/* FETCH (ОФФЛАЙН ЛОГИКА) */
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      }).catch(() => {
        return caches.match("./index.html");
      });
    })
  );
});
