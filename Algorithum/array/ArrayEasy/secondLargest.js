// let arr = [-1, -2, -3, -4]// not correct ouput
let arr = [0, 35, 56, 7, 22, 1, 5] // Expected output: largest: 10,secondLargestElement: NaN

function secondLargestElementBrut(arr) {
    arr = arr.sort((a, b) => a - b);
    let largest = arr[arr.length - 1];
    let secondLar = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== largest) {
            secondLar = arr[i]
            break;
        }
    }
    return { largest, secondLar }
}
let outPut1 = secondLargestElementBrut(arr)
console.log(outPut1)



function secondLargestElementBetter(arr) {
    let largest = -1;
    let secLar = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secLar && arr[i] !== largest) {
            secLar = arr[i]
        }
    }
    return { largest, secLar }
}
let outPut2 = secondLargestElementBetter(arr)
console.log(outPut2)




function secondLargestElement(arr) {
    if (arr.length <= 0) {
        return;
    }
    let largestElem = {
        largest: arr[0],        //  16
        secondLargestElement: null      // 13
    }
    if (arr.length === 1) {
        return largestElem;
    }
    for (let i = 1; i < arr.length; i++) {      //1

        // console.log(-1 > null)  // false
        // console.log(1 > null)  // true
        // console.log(-1 > undefined)  // true

        if (arr[i] > largestElem.largest) {             //  13>16
            largestElem.secondLargestElement = largestElem.largest
            largestElem.largest = arr[i]
        } else if (arr[i] > largestElem.secondLargestElement) {       //13>12
            largestElem.secondLargestElement = arr[i]
        }
    }
    return largestElem;
}
let outPut = secondLargestElement(arr)
console.log(outPut)