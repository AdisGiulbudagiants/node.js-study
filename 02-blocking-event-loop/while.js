let isRunning = true

setTimeout(() => (isRunning = false), 10)
process.nextTick(() => console.log("Next Tick"))

//Этот цикл выполняется в главном потоке, и пока он выполняется цикл событий не может обрабатывать другие события.
while (isRunning) {
  console.log("While loop is running")
}
