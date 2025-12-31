let nums = [2, 7, 11, 15]
let target = 9

function findTwoSumBrute(arr, target) {
    let idxArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                idxArr[0] = i;
                idxArr[1] = j;
                return idxArr
            }
        }
    }
    return -1
}
// let outPut = findTwoSumBrute(nums, target)
// console.log(outPut)


function findTwoSumBetter(arr, target) {
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        let findVal = target - arr[i]

        if (hash[findVal] >= 0) {
            return [i, hash[findVal]]
        } else {
            hash[arr[i]] = i
        }
    }
}
// let outPut1 = findTwoSumBetter(nums, target)
// console.log(outPut1)


function findTwoSumOptimal(arr, target) {

}
let outPut2 = findTwoSumOptimal(nums, target)
console.log(outPut2)