let numsMaxSubArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]


function MaxSubArrSumBrute(arr) { // T(n^3) S(1)
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            sum = 0;
            for (let j = i; j <= k; j++) {
                sum = sum + arr[j]
            }
            if (sum > maxSum) {
                maxSum = sum
            }
        }
    }
    return maxSum
}
// let outPut2 = MaxSubArrSumBrute(numsMaxSubArr)
// console.log(outPut2)


function MaxSubArrSumBetter(arr) { // T(n^2) S(1)
    let sum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum = sum + arr[j]
            if (maxSum < sum) {
                maxSum = sum;
            }
            if (sum < 0) {
                sum = 0
            }
        }
    }
    return maxSum
}
// let outPut = MaxSubArrSumBetter(numsMaxSubArr)
// console.log(outPut)


//kadane's Algorithum
function MaxSubArrSumOptimal(arr) {     // T(n) S(1)
    let outPut = [];
    let idxStart = 0;
    let idxEnd = 0;
    let sum = 0;
    let maxSum = arr[0];
    for (let j = 0; j < arr.length; j++) {
        sum = sum + arr[j]
        if (maxSum < sum) {
            idxEnd = j
            maxSum = sum;
        }
        if (sum < 0) {
            idxStart = j + 1;
            sum = 0
        }
    }
    for (let i = idxStart; i <= idxEnd; i++) {
        outPut.push(arr[i])
    }
    return { maxSum, outPut }
}

let outPut1 = MaxSubArrSumOptimal(numsMaxSubArr)
console.log(outPut1)