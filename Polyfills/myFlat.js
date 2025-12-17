// ✅ Topic: Myflat

let newFlat = [2, [4, 6, 7]].flat()
console.log("Flat verify that condition or not", newFlat)

Array.prototype.myFlat = function () {
    let outputArray = [];
    function flatArray(array) {
        for (let i = 0; i < array.length; i++) {
            if (!Array.isArray(array[i])) {
                outputArray.push(array[i])
            } else {
                flatArray(array[i])
            }
        }
    }
    flatArray(this)
    return outputArray;

}
let newMyFlat = [2, [4, 6, [7]]].myFlat()
console.log("My Flat verify that condition or not", newMyFlat)