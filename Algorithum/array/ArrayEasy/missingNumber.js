let inputArr = [9, 6, 4, 2, 3, 5, 7, 0, 1]

function missingNumberBrute(arr) {     // T(n*n) s(1)
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            return i
        }
    }
    return -1
}
let outpu = missingNumberBrute(inputArr);
console.log(outpu)



function missingNumberBruteForce(arr) {     // T(nlogn+n) s(1)
    let missingElement = -1;
    arr.sort((a, b) => a - b);
    for (let i = 0; i <= arr.length; i++) {
        if (i !== arr[i]) {
            missingElement = i
        }
    }
    return missingElement
}
// let output = missingNumberBruteForce(inputArr);
// console.log(output)


function missingNumberBetter(arr) {         // T(2n) S(n)
    let obj = {};
    let missingNumber = -1;
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    for (let i = 0; i <= arr.length; i++) {
        if (!obj[i]) {
            missingNumber = i;
            break;
        }
    }
    return missingNumber
}
let output1 = missingNumberBetter(inputArr);
console.log(output1)


function missingNumberOptimise(arr) {
    let sumOfAllDigit = (arr.length * (arr.length + 1)) / 2         // it may exide the largest value so use xor 
    let sumOfInput = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfInput += arr[i]
    }
    return sumOfAllDigit - sumOfInput
}
let output2 = missingNumberOptimise(inputArr);




// also solve using hash & we can do with using XOR method 1^1=0, 0^4=4