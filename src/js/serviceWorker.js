var CACHE_NAME = "party-cache-v1"
var urlsToCache = ["/", "/styles/style.css", "/app.js", "/app.webWorker.js"]

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    })
  )
})
