import { config } from "dotenv"
config()

// //Импортируется весь модуль включая default export
// import * as dotenv from "dotenv"
// console.log(dotenv)
// dotenv.config()

console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_URL)
