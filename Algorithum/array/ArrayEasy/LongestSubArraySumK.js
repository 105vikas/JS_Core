let inputArr = [1, -1, 0]
let K = 2;

function longestSubArrBrute(arr, target) {
    let maxLength = -1;
    let longestSubArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum = sum + arr[k]
                if (sum > target) {
                    i++;
                    j = i;
                    break;
                }
                if (sum === target && (k - i + 1) > maxLength) {
                    maxLength = k - i + 1;
                    longestSubArr = []
                    for (let z = i; z <= k; z++) {
                        longestSubArr.push(arr[z])
                    }
                    i++;
                    j = i;
                    break;
                }
            }
        }
    }
    return longestSubArr
}
// let outPut = longestSubArrBrute(inputArr, K)
// console.log(outPut)


function longestSubArrBetter(arr, target) {
    let maxLength = -1;
    let longestSubArr = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum = sum + arr[j]
            if (sum > target) {
                break;
            }
            if (sum === target && (j - i + 1) > maxLength) {
                maxLength = j - i + 1;
                longestSubArr = []
                for (let z = i; z <= j; z++) {
                    longestSubArr.push(arr[z])
                }
                break;
            }
        }
    }
    return longestSubArr
}
// let outPut1 = longestSubArrBetter(inputArr, K)
// console.log(outPut1)

function longestSubArrOptimal(arr, target) {
    let numberOfSubArrTime = 0;
    let maxLength = -1;
    const hash = new Map();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        console.log(hash.get(sum - target), sum, target)
        if (sum === target) {
            maxLength = i + 1;
            numberOfSubArrTime++
        } else if (hash.get(sum - target) >= 0) {
            maxLength = i - hash.get(sum - target)
            numberOfSubArrTime++
        }
        hash.set(sum, i);
    }
    console.log(hash)
    return { maxLength, numberOfSubArrTime };
}
let outPut2 = longestSubArrOptimal(inputArr, K)
console.log(outPut2)