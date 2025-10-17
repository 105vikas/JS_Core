// ✅ Topic: Myindexof

let newIndexof = [2, 4, 6, 7, 7].indexOf(7)
console.log("Indexof verify that condition or not", newIndexof)

Array.prototype.myIndexOf = function (callback) {
    let outputArray = -1
    for (let i = 0; i < this.length; i++) {
        if (callback === this[i]) {
            return i
        }
    }
    return outputArray
}
let newMyIndexof = [2, 4, 6, 7, 7].myIndexOf(7)
console.log("My Indexof verify that condition or not", newMyIndexof)

