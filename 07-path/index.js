const { log } = require("console")
const path = require("path")

const filePath = "/Users/Adis/Desktop/node.js/07-path/index.js"
const textFilePath = "/Users/Adis/Desktop/file.txt"
const relativePath = "./node/movie.mov"
const directoryPath = "./node/subfolder"

console.log(path.isAbsolute(filePath)) //true
console.log(path.isAbsolute(relativePath)) //false

console.log(path.basename(filePath)) //index.js
console.log(path.basename(directoryPath)) //subfolder

console.log(path.dirname(filePath)) // /Users/Adis/Desktop/node.js/07-path
console.log(path.dirname(directoryPath)) // ./node

console.log(path.resolve(relativePath)) // \Users\Adis\Desktop\node.js\node\movie.mov

console.log(path.extname(textFilePath)) // .txt
console.log(path.extname(relativePath)) // .mov
console.log(path.extname(directoryPath)) // Возвращает пустую строку ''

console.log(path.parse(filePath)) /**Возвращает объект:
{
  root: '/',
  dir: '/Users/Adis/Desktop/node.js/07-path',
  base: 'index.js',
  ext: '.js',
  name: 'index'
} */

const parsedPath = path.parse(filePath)
console.log(filePath) ///Users/Adis/Desktop/node.js/07-path/index.js
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`)) //\Users\Adis\Desktop\node.js\07-path\renamed-index.mjs
