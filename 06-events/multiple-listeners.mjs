import { EventEmitter } from "events"

const myEmitter = new EventEmitter()

/**Несколько слушателей для myEmitter
 *
 *  По умолчанию вы можете привязать 10 разных слушателей к одному и тому же emitter
 */

myEmitter.on("myEvent", () => {
  console.log("First event listener")
})

myEmitter.on("myEvent", () => {
  console.log("Second event listener")
})

myEmitter.on("otherEvent", () => {
  console.log("Other event")
})

/**Если вам необходимо увеличить количество слушателей на один emitter,
 * то для этого есть функция setMaxListeners
 */

myEmitter.setMaxListeners(25)

console.log(myEmitter.getMaxListeners())

/**Также можно посмотреть список событий,
 * которые уже зарегистрированы для определенного emitter */
console.log(myEmitter.eventNames())

setTimeout(() => myEmitter.emit("myEvent"), 1000)
