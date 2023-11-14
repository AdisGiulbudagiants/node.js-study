//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/**В предыдущих реализациях мы высчитывали числа Фибоначи с конца и потому у нас возникала рекурсия.
 *В этой реализации мы начинаем с начала.
 */

function info(text) {
  console.log(text, performance.now().toFixed(2))
}

info("Program start")

setTimeout(() => info("Timeout"), 0)

function fib(n) {
  if (n === 0 || n === 1) return n

  let fib1 = 0
  let fib2 = 1
  let sum

  for (let i = 1; i < n; i++) {
    sum = fib1 + fib2
    fib1 = fib2
    fib2 = sum
  }
  return sum
}

/**Эта функция имеет линейную сложность и мы просто проходимся по всем элементам этой последовательности. */

console.log(fib(1000))

info("Program end")
