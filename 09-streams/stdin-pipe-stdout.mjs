import { Transform } from "stream"
import fs from "fs"

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCase = chunk.toString().toUpperCase()
    cb(null, upperCase)
  },
})

const reverseStream = new Transform({
  //Это сокращенный вариант написания
  transform(chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split("")
    const lastChar = arrayOfChars.pop()
    const reversed = arrayOfChars.reverse().concat(lastChar).join("")
    cb(null, reversed)
  },
})

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout)

// //Pipe to file
// const filePath = "./files/stdin-dump.txt"
// const writeStream = fs.createWriteStream(filePath)
// process.stdin.pipe(writeStream)

// //Pipe to stdout
// process.stdin.pipe(process.stdout)
