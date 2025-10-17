// ✅ Topic: Myfilter

let newFilter = [2, 4, 6, 7].filter((i) => i % 2 == 1)
console.log("Filter verify that condition or not", newFilter)

Array.prototype.myFilter = function (callback) {
    let outputArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            outputArray.push(this[i])
        }
    }
    return outputArray
}
let newMyFilter = [2, 4, 6, 7].myFilter((i) => i % 2 == 1)
console.log("My Filter verify that condition or not", newMyFilter)