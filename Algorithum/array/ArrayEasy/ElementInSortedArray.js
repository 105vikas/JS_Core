// find an element in a sorted array // arr: [2,4,6,8,10,12,14], element: 12

let inputArr = [2, 4, 6, 8, 10, 12, 14];
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



function ElementSortedArrayBetterRecursion(arr, element) {
    function getElement(array, left, right) {
        let mid = Math.round((left + right) / 2)
        if (left > right) {
            return -1;
        }
        if (element === array[mid]) {
            return mid;
        } else if (array[mid] > element) {
            right = mid - 1;
            return getElement(arr, left, right)
        } else {
            left = mid + 1;
            return getElement(arr, left, right)
        }
    }
    return getElement(arr, 0, arr.length)
}
let outPut1 = ElementSortedArrayBetterRecursion(inputArr, elem);
console.log(outPut1)



function ElementSortedArrayBetter(array, element, left, right) {
    while (left < right) {
        let mid = Math.round((left + right) / 2)
        if (element === array[mid]) {
            return mid;
        } else if (array[mid] > element) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1
}
let outPut2 = ElementSortedArrayBetter(inputArr, elem, 0, inputArr.length - 1);
console.log(outPut2)