var CACHE_NAME = "app-cache-v1"
var urlsToCache = []

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    })
  )
})
