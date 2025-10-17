// ✅ Topic: Myevery

let newEvery = [2, 4, 6, 7].every((i) => i % 2 == 0)
console.log("Every verify that condition or not", newEvery)

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false
        }
    }
    return true
}
let newMyEvery = [2, 4, 6, 7].myEvery((i) => i % 2 == 0)
console.log("My Every verify that condition or not", newMyEvery)