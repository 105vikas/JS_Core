// ✅ Topic: Mymap

let mapData = [1, 2, 3, 4, 5, 6, 7, 8]
let myMapdataVal = mapData.map((val) => val * 2)
console.log(myMapdataVal, "DATA")

Array.prototype.myMap = function (callback) {
    let outPut = []
    for (let i = 0; i < this.length; i++) {
        outPut.push(callback(this[i], i))
    }
    return outPut
}
console.log(mapData, "Array before myMap")
let myMapdata = mapData.myMap((val, i) => i * 2)
console.log(myMapdata, "Array After myMap")

