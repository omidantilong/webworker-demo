// A message from the main thread to the worker will be sent with a request param
// Messages sent from the worker back to the main will be sent with a response param
// This is just my own implementation as it helps to keep the direction clear

onmessage = (event) => {
  const request = event.data.request
  console.log("request", event)
  switch (request) {
    case "ping":
      console.log(event.data)
      break
    case "timeoutProcess":
      setTimeout(() => {
        postMessage({
          response: "timeoutDone",
        })
      }, 2000)

      break
    case "countProcess":
      let a = 0
      let b = 0
      while (true) {
        a++
        if (a === 100000000) {
          a = 0
          b++
          postMessage({
            response: "countDone",
            count: b,
          })
        }
        if (b === 100) {
          break
        }
      }
  }
  return
}
