const fs = require("fs")
const dns = require("dns")

function info(text) {
  console.log(text, performance.now().toFixed(2))
}

console.log("Program start")

//Close events
fs.writeFile("./test.txt", "Hello Node.js", () => info("File written"))

//Promises
Promise.resolve().then(() => info("Promise 1"))

//nextTick
process.nextTick(() => info("Next Tick 1"))

//setImmediate
setImmediate(() => info("Immediate 1"))

//Timouts
setTimeout(() => info("Timeout 1"), 0)
setTimeout(() => {
  process.nextTick(() => info("Next Tick 2"))
  info("Timeout 2")
}, 100)

//Intervals
let intervalCount = 0
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`)
  if (intervalCount === 2) clearInterval(intervalId)
}, 50)

//Input / Output events
dns.lookup("localhost", (err, address, family) => {
  info("DNS 1 localhost")
  Promise.resolve().then(() => info("Promise 2"))
  process.nextTick(() => info("Next Tick 3"))
})

console.log("Program end")
