// ✅ Topic: Myfind
// Description: Add examples and notes related to Myfind here.

let newFind = [2, 4, 6, 7].find((i) => i % 2 == 0)
console.log("Find verify that condition or not", newFind)

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i]
        }
    }
}
let newMyFind = [2, 4, 6, 7].myFind((i) => i % 2 == 0)
console.log("My Find verify that condition or not", newMyFind)