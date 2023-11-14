//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

setTimeout(() => console.log("Timeout"), 0)

function fib(index) {
  return new Promise((resolve, reject) => {
    if (index === 0 || index === 1) return resolve(index)
    setImmediate(() => {
      Promise.all([fib(index - 1), fib(index - 2)]).then(([fib1, fib2]) =>
        resolve(fib1 + fib2)
      )
    })
  })
}

//Heap out of memory
fib(11).then((res) => console.log(res))
