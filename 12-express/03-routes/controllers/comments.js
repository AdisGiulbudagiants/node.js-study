function getCommentsHandler(req, res) {
  res.send("Get comments route")
}
function getSingleCommentHandler(req, res) {
  res.send(`Get comment route. CommentID: ${req.params.commentId}`)
}
function postCommentsHandler(req, res) {
  res.send("Post comments route")
}
function deleteSingleCommentHandler(req, res) {
  res.send(`Delete comment route.CommentID: ${req.params.commentId}`)
}

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteSingleCommentHandler,
}
