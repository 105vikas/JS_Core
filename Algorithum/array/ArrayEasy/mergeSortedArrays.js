let arr1 = [1, 2, 3]
let arr2 = [2, 5, 6];

function mergeTwoArrBruteForce(ar1, ar2) {     //T(n+m) S(n)
    let outArr = [];
    let k = 0;
    let j = 0;
    while (k < ar1.length && j < ar2.length) {
        if (ar1[j] > ar2[k]) {
            outArr.push(ar2[k])
            k++;
        } else {
            outArr.push(ar1[j]);
            j++;
        }
    }
    while (k < ar1.length) {
        outArr.push(ar2[k])
        k++;
    }
    while (j < ar2.length) {
        outArr.push(ar1[j]);
        j++;
    }
    return outArr
}
// let output = mergeTwoArrBruteForce(arr1, arr2);
// console.log(output)


// https://leetcode.com/problems/merge-sorted-array/description/
// let arr1 = [1, 2, ,3,0,0] // not working for [1, 2, 3,0,0,0]
// let arr2 = [2, 5, 6];
function mergeTwoArrBetter(ar1, ar2) {      //T(n*n+m) S(1)
    let i = 0;      // 4
    let j = 0;      // 1
    while (j < ar2.length && i < ar1.length) {
        if (ar1[i] <= ar2[j]) {
            i++;
        } else {
            for (let k = ar1.length; k > i; k--) {
                ar1[k] = ar1[k - 1]
            }
            ar1[i] = ar2[j];
            j++;
            i++;
        }
    }
    while (j < ar2.length) {
        ar1[ar1.length] = ar2[j]
        j++;
    }
    return ar1;
}

let output1 = mergeTwoArrBetter(arr1, arr2);
console.log(output1)


// Two pointer Approach

// let arr1 = [1, 2, ,3] 
// let arr2 = [2, 5, 6];
// ->[1,2,2] [3,5,6]