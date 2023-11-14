const { myName, myHobbies, myFavoriteNumber } = require("./multiple-exports")
/**При вызове функции require, Node.js полностью выполняет укзанный файл Javascript
 * И если в нем есть какие-то выводы в терминал, то Вы их увидите при выполнении файла.
 */

const greetingFn = require("./my-modules/single-export")
/**В данном случае функция require просто возвращает функцию
 * и мы ее можем присвить абсолютно любой переменной */

// const greetingFn = require("/Users/Adis/Desktop/node.js/03-commonjs-modules/single-export.js")
/**Это абсолютный путь к файлу, но писать абсолютные пути к файлу не рекомендуется */

const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require("./export-and-import")

/**Импорты из multuple-exports */
console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

myHobbies.push("climbing")

/**Импорты из single-export */
console.log(greetingFn)
greetingFn(myName)

/**Импорты из exports-and-imports */
console.log(myOtherName)
console.log(myFriendsName)
console.log(myGreatHobbies)
