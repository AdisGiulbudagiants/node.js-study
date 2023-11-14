import { EventEmitter } from "events"

const myEmitter = new EventEmitter()

const timoutListenerFn = (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds!`)
}

//Слушателей можно добавлять либо с помощью addListeners либо on
myEmitter.on("timeout", timoutListenerFn)

setTimeout(() => myEmitter.emit("timeout", 1), 1000)
setTimeout(() => myEmitter.emit("timeout", 2), 2000)

/**Однократная реакция на событие
 * Для этого есть метод once
 */

myEmitter.once("singleEvent", () => {
  console.log("Single event occurred!")
})

// Здесь мы не увидим второго вывода в консоль,
// потому что здесь мы воспользовались методом once
setTimeout(() => myEmitter.emit("singleEvent"), 500)
setTimeout(() => myEmitter.emit("singleEvent"), 1500)

/**Отключение слушателья для события
 * Для этого есть метод off либо removeListener
 */

setTimeout(() => myEmitter.off("timeout", timoutListenerFn), 3000)
setTimeout(() => myEmitter.emit("timeout", 4), 4000)
