// --------------------1.Array Push 
let arr = [1, 2, 3, 4, 5]
// arr.push(6)
// console.log(arr)

Array.prototype.myPush = function (num) { // Time: O(1), Space: O(1)
    let defineArr = this;
    let length = defineArr.length;
    defineArr[length] = num;
    return this.length;
}
// arr.myPush(7)
// console.log(arr)


// --------------------2. Array Pop 
let arrPush = [1, 2, 3, 4, 5]
// let value = arrPush.pop()
// console.log(value, arrPush)

Array.prototype.myPop = function () {   // Time: O(1), Space: O(1)
    let length = this.length;
    let lastVal = this[length - 1];
    this.length = length - 1
    return lastVal;
}
// let myValue = arrPush.myPop()
// console.log(myValue, arrPush)


// --------------------3. Array shift 
let arrShift = [1, 2, 3, 4, 5];
// let shiftVal = arrShift.shift();
// console.log(shiftVal, arrShift)

Array.prototype.myShift = function () {     // Time: O(n), Space: O(1)
    let val = this[0];
    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1]
    }
    this.length--;
    return val;
}
// let myShiftVal = arrShift.myShift();
// console.log(myShiftVal, arrShift)


// --------------------4. Array unShift 
let arrUnshift = [3, 4, 5, 6];
// let lengthUnshift = arrUnshift.unshift(0, 1, 2);
// console.log(lengthUnshift, arrUnshift)

Array.prototype.myUnShift = function (...arg) {  // Time: O(n+m), Space: O(1)
    let length = this.length;
    let argLength = arg.length;

    for (let i = length - 1; i >= 0; i--) {
        this[i + argLength] = this[i];
    }
    for (let i = 0; i < argLength; i++) {
        this[i] = arg[i]
    }
    return this.length;
}
// let lengthMyUnShift = arrUnshift.myUnShift(0, 1, 2);
// console.log(lengthMyUnShift, arrUnshift)


// --------------------5. Array Concat 
let arrCc1 = [1, 2, 3];
let arrCc2 = [4, 5, 6];
// let arrConcat = arrCc1.concat(arrCc2);
// console.log(arrConcat)

Array.prototype.myConcat = function (arr) {     // Time: O(n+m), Space: O(n+m)
    let outPutArr = [];
    let length = this.length;
    for (let i = 0; i < length; i++) {
        outPutArr[i] = this[i]
    }
    let j = 0;
    for (let i = length; i < length + arr.length; i++) {
        outPutArr[i] = arr[j]
        j++;
    }
    return outPutArr;
}
// let arrmyConcat = arrCc1.myConcat(arrCc2);
// console.log(arrmyConcat)


// --------------------6. Array Length
let arrLength = [1, 2, 3, 4, 5]
// let length = arrLength.length;
// console.log(length)
Array.prototype.myLength = function () {
    let obj = {}
    let len = 0;
    while (this[len]) {
        len++;
    }
    obj.myLength = len;
    return obj
}
// let myLength = arrLength.myLength();
// console.log(myLength)


// --------------------7. Array sort
let arrSort = [4, 7, 4, 1, 8, 6]
// let arrSorted = arr.sort();
// console.log(arrSorted, "arrSorted")
Array.prototype.mySort = function () { // use merge sort
    let arr = this;
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let theredVar = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = theredVar
            }
        }
    }
    return this
}
// let arrmySorted = arr.mySort();
// console.log(arrmySorted, "arrSorted")


// --------------------8. Array includes
let arrIncl = [4, 3, 2, 1]
// let arrIncludes = arrIncl.includes(0)
// console.log(arrIncludes)

Array.prototype.myIncludes = function (num) {   // T(n) S(1)
    for (let i = 0; i < this.length; i++) {
        if (num === this[i]) {
            return true;
        }
    }
    return false
}
// let arrMyIncludes = arrIncl.myIncludes(4)
// console.log(arrMyIncludes)


// --------------------9. Array slice
let arrSli = [4, 3, 2, 1]
// let arrSlice = arrSli.slice(1, 2)
// console.log(arrSlice)

Array.prototype.mySlice = function (sIdx, eIdx) {   // T(n) S(n)
    let outArr = [];
    if (this.length <= sIdx) {
        return outArr
    }
    if (this.length < eIdx || !eIdx) {
        eIdx = this.length
    }

    for (let i = sIdx; i < eIdx; i++) {
        outArr.push(this[i]);
    }
    return outArr
}
// let arrMySlice = arrSli.mySlice(1, 2)
// console.log(arrMySlice)


// --------------------10. Object Keys
let objKeys = { 1: 3, 2: 4, 3: 5 }
let key = Object.keys(objKeys)
console.log(key)
Object.prototype.myKeys = function (obj) {
    let keys = []
    console.log(obj)
    return keys
}
let myKeys = Object.myKeys(objKeys)
console.log(myKeys)


// --------------------11. Object Value
let objVal = { 3: 3, 4: 4, 5: 5 }
let value = Object.values(objVal)
console.log(value)
Object.prototype.myValue = function (obj) {
    let values = []
    console.log(obj)
    return values
}
let myVal = Object.myValue(objKeys)
console.log(myVal)


// --------------------12. Object Entries
let objEntries = { 3: 3, 4: 4, 5: 5 }
let entries = Object.entries(objEntries)
console.log(entries)
Object.prototype.myEntries = function (obj) {
    let entries = []
    console.log(obj)
    return entries
}
let myEnt = Object.myEntries(objKeys)
console.log(myEnt)
