let nums = [2, 2, 1, 1, 1, 2, 3]
// length/2

function AppearsN2Brute(arr) {      //T(n^2) S(1)
    let n = Math.floor(arr.length / 2)
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > n) {
            return arr[i]
        }
    }
    return -1
}
// let outPut = AppearsN2Brute(nums)
// console.log(outPut)


function AppearsN2Better(arr) {  //T(n) S(n)
    let n = Math.floor(arr.length / 2)
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
        if (hash[arr[i]] > n) {
            return arr[i]
        }
    }
}

// let outPut1 = AppearsN2Better(nums)
// console.log(outPut1)


// Moore's Voting Algorithum
function AppearsN2Optimal(arr) {
    let number = arr[0];
    let vote = 1;
    for (let i = 0; i < arr.length; i++) {
        if (vote === 0) {
            number = arr[i]
        }
        if (arr[i] === number) {
            vote++
        } else {
            vote--;
        }
    }
    return number;
}

let outPut2 = AppearsN2Optimal(nums)
console.log(outPut2)