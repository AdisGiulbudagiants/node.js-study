const express = require("express")
const {
  getUsersHandler,
  getSingleUserHandler,
  postUsersHandler,
} = require("../controllers/users")

const route = express.Router()

route.get("/", getUsersHandler)
route.post("/", postUsersHandler)
route.get("/:userId", getSingleUserHandler)

module.exports = route
