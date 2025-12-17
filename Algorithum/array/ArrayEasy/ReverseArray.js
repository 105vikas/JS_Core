let inputArr = [3, 4, 5, 6, 7, 8];

function reverseArray(arr) {        // T(n) S(1)
    let length = arr.length
    for (let i = 0; i < Math.round(length / 2); i++) {
        let theredVal = arr[length - 1 - i];
        arr[length - 1 - i] = arr[i]
        arr[i] = theredVal;
    }
}

reverseArray(inputArr)
console.log(inputArr)