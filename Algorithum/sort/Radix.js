let inputArr = [333, 45, 67, 8, 89, 111, 3435]

function maxNumber(inputArr) {
    let maxNumber = inputArr[0];
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > maxNumber) {
            maxNumber = inputArr[i]
        }
    }
    return maxNumber
}

function countingSort(arr, digit) {
    let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let newCountedArr = [];
    for (let i = 0; i < arr.length; i++) {
        let digitVal = (Math.round((arr[i] * 10) / digit)) % 10;
        temp[digitVal] = (temp[digitVal] || 0) + 1
    }
    for (let i = 1; i < 10; i++) {
        temp[i] = temp[i - 1] + temp[i]
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        let digitVal = (Math.round((arr[i] * 10) / digit)) % 10;
        newCountedArr[temp[digitVal] - 1] = arr[i]
        temp[digitVal] = temp[digitVal] - 1
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = newCountedArr[i]
    }
}

function radixSort(inputArr) {
    let maxValue = maxNumber(inputArr)
    for (let i = 10; Math.round(maxValue / i) > 0; i = i * 10) {
        countingSort(inputArr, i)
    }
    return inputArr
}

let outPut = radixSort(inputArr);
console.log(outPut)