
let Input = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
let arr = [1, 2, 3, 4, 6, 7]    // nlogn+n+n
let target = 10

function ThreeSumBrute(arr) {
    let newSet = new Set([])
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) === 10) {
                    output.push([arr[i], arr[j], arr[k]])
                    output.sort((a, b) => a - b)
                    console.log(output)
                    newSet.add(output[0])
                }
            }
        }
    }
    return newSet
}
// let output = ThreeSumBrute(Input)
// console.log(output)

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

function ThreeSumOptimal(num) {
    let nums = num.sort((a, b) => a - b)
    let outPut = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            i++;
        }
        let j = i + 1; k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                outPut.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }

    }
    return outPut;
};

let outPut2 = ThreeSumOptimal(Input);
console.log(outPut2)