let inputStr = "dummyString";

function reverseArray(str) {        // T(n) S(1)
    let outPutStr = ""
    let length = str.length
    for (let i = length - 1; i >= 0; i--) {
        outPutStr += str[i]
    }
    return outPutStr
}

let outPut = reverseArray(inputStr)
console.log(outPut)