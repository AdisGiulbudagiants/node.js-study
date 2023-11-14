const myName = "Adis"
const myHobbies = ["swimming", "boxing", "cycling"]
const myFavoriteNumber = 77

console.log("Text from the multiple-exports CommonJS module")

/**Здесь без разницы как экспортировать */
module.exports.myName = myName
exports.myHobbies = myHobbies
exports.myFavoriteNumber = myFavoriteNumber
