let inputArr = [3, 2, 1, 5, 4]  // false or true

function CheckSorted(arr) {
    if (arr.length === 0) {
        return
    }
    if (arr.length === 1) {
        return true
    }
    let findOrder = arr[0] > arr[1] ? "dec" : "acend"
    for (let i = 0; i < arr.length - 1; i++) {
        if (findOrder === "acend" && arr[i] < arr[i + 1]) {
        } else if (findOrder === "dec" && arr[i] > arr[i + 1]) {
        } else {
            return false;
        }
    }
    return true
}
// let outPut = CheckSorted(inputArr)
// console.log(outPut)


function CheckSortedRotated(arr) {
    if (arr.length === 0) {
        return
    }
    if (arr.length === 1) {
        return true
    }
    let findOrder = arr[0] > arr[1] ? "dec" : "acend"
    let breakPoint;
    for (let i = 0; i < arr.length - 1; i++) {
        if (findOrder === "acend" && arr[i] < arr[i + 1]) {
        } else if (findOrder === "dec" && arr[i] > arr[i + 1]) {
        } else {
            if (arr[i] === arr[i + 1]) {
                return false
            }
            breakPoint = i;
            break;
        }
    }
    if (!breakPoint) {
        return true;
    }
    for (let i = 0; i < Math.round(breakPoint / 2); i++) {
        let thereVar = arr[i]
        arr[i] = arr[breakPoint - i]
        arr[breakPoint - i] = thereVar;
    }
    for (let i = 1; i < Math.round((arr.length - breakPoint) / 2); i++) {
        let thereVar = arr[breakPoint + i]
        arr[breakPoint + i] = arr[arr.length - i]
        arr[arr.length - i] = thereVar;
    }
    findOrder = arr[0] > arr[1] ? "dec" : "acend"
    for (let i = 0; i < arr.length - 1; i++) {
        if (findOrder === "acend" && arr[i] < arr[i + 1]) {
        } else if (findOrder === "dec" && arr[i] > arr[i + 1]) {
        } else {
            return false
        }
    }
    return true
}
let outPut1 = CheckSortedRotated(inputArr)
console.log(outPut1)

//[0,1,2,3,6,5,4]