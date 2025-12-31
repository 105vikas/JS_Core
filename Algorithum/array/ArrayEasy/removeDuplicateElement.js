let inputArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
function removeDuplicateEleFromSorted(arr) {    //T(2n) S(n)
    let outPut = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            outPut.push(arr[i])
        }
    }
    outPut.push(arr[arr.length - 1])
    arr.length = outPut.length
    for (let i = 0; i < outPut.length; i++) {
        arr[i] = outPut[i]
    }
    return outPut;
}
// let outPut = removeDuplicateEleFromSorted(inputArr)
// console.log(outPut, inputArr)


// better-> store it in stack then copy stack to on array


[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
function removeDuplicateEleFromSortedOptimise(arr) {   //T(n) S(1)
    let i = 0;              //1
    for (j = 1; j < arr.length; j++) {      //5
        if (arr[j] !== arr[i]) {        // 2 != 1
            ++i;                //2
            arr[i] = arr[j]     //1=2
        }
    }
    arr.length = i + 1
}
let outPut1 = removeDuplicateEleFromSortedOptimise(inputArr)
console.log(outPut1, inputArr)