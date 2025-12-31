
let inputArr = [10, 12, 14, 2, 4, 6, 8, 16];
let elem = 12;

function ElementSortedArrayBrute(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1
}
let outPut = ElementSortedArrayBrute(inputArr, elem)
console.log(outPut)

function ElementSortedArrayBetter(arr, val) {
    // find break point using mid
    // rotate both part
    // rotate full array 
    // find value using mid, left, right 
}
// let outPut1 = ElementSortedArrayBetter(inputArr, elem)
// console.log(outPut1)