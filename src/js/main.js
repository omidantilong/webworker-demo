// src/main.js
import _ from "./includes/lodash"
import "promise-polyfill/src/polyfill"
import "whatwg-fetch"

export default () => {
  const $ = document.querySelector.bind(document)
  const messageWindow = $(".log")

  const log = (message) => {
    messageWindow.insertAdjacentHTML("beforeEnd", `<div>${message}</div>`)
    messageWindow.scrollTop = messageWindow.scrollHeight
  }

  const clear = () => {
    messageWindow.innerHTML = ""
  }

  const countUp = () => {
    let a = 0
    let b = 0
    while (true) {
      a++
      if (a === 100000000) {
        a = 0
        b++
        log(`countDone ${b}`)
      }
      if (b === 100) {
        log(`countDone ${b}`)

        break
      }
    }
  }

  document.addEventListener("click", (event) => {
    const element = event.target
    if (element.tagName === "BUTTON") {
      const action = element.getAttribute("data-action")
      clear()

      if (action === "mainThread") {
        countUp()
      } else {
        worker.postMessage({
          request: action,
        })
      }
    }
  })

  const worker = new Worker("/app.webWorker.js")
  worker.onmessage = (event) => {
    const response = event.data.response
    console.log("response", event)

    switch (response) {
      case "timeoutDone":
        log(response)
        break
      case "countDone":
        log(`${response} ${event.data.count}`)
        break
    }
  }

  //App.init(runtime)
}
