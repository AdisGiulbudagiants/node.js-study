function getUsersHandler(req, res) {
  res.send("Get users route")
}
function getSingleUserHandler(req, res) {
  res.send(`Get user route. UserID:: ${req.params.userId}`)
}
function postUsersHandler(req, res) {
  res.send("Post users route")
}

module.exports = { getUsersHandler, getSingleUserHandler, postUsersHandler }
