
let Input = [1, 2, 4, 3, 6, 7]
let arr = [1, 2, 3, 4, 6, 7]    // nlogn+n+n
let target = 10

function ThreeSumBrute(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) === 10) {
                    output.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    return output
}
let output = ThreeSumBrute(Input)
console.log(output)

//arr[i] + arr[j]=-arr[k] = -2
// how we find that this now dubplicate
function ThreeSumBetter(arr) {
    let hash = {}
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (hash[-(arr[i] + arr[j])] >= 0) {
                k = -(arr[i] + arr[j])
                if (arr[i] !== k && arr[j] !== k && arr[i] !== arr[j]) {
                    output.push([arr[i], arr[j], k])
                }
            }
            hash[arr[j]] = (hash[arr[j]] || 0) + 1
        }
        hash = {}

    }
    return output
}
// let output1 = ThreeSumBetter(numsSum)
// console.log(output1)