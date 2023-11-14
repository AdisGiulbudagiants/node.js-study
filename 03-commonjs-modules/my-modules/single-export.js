/**В этом файле мы добавим только один экспорт
 * То есть мы перезапишем значение module.exports
 */

function greeting(name) {
  console.log("Hello", name)
}

// console.log(__filename)

module.exports = greeting

/**При таком присвоении module.exports остается пустым объектом {} */
// exports = greeting
