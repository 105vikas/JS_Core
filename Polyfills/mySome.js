// ✅ Topic: Mysome

let newSome = [2, 4, 6, 7].some((i) => i % 2 == 2)
console.log("Some verify that condition or not", newSome)

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true
        }
    }
    return false
}
let newMySome = [2, 4, 6, 7].mySome((i) => i % 2 == 2)
console.log("My Some verify that condition or not", newMySome)