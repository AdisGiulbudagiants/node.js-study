import EventEmitter from "events"

class Post extends EventEmitter {
  constructor(author, text) {
    super()
    this.author = author
    this.text = text
    this.likesQty = 0
    this.on("likePost", (username) => {
      console.log(`${username} liked your post`)
    })
    this.on("error", (err) => {
      console.error(err)
    })
  }

  like(username) {
    if (!username) {
      return this.emit("error", new Error("No username in the like request!"))
    }
    this.likesQty++
    this.emit("likePost", username)
  }
}

const myPost = new Post("Adis", "Hello")

// console.log(myPost.author)
// console.log(myPost.text)
// console.log(myPost.likesQty)
myPost.like("Adis")
setTimeout(() => myPost.like(), 1000)
setTimeout(() => myPost.like("Ararat"), 2000)
// console.log(myPost.likesQty)
