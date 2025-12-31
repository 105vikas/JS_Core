let compressString = "aaabbbbcccccccd"

function compressBrute(str) {       //T(n*n) S(1)
    let outStr = ""
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        if (outStr.charAt(outStr.length - 2) !== str[i]) {
            for (let j = 0; j < str.length; j++) {
                if (str.charAt(i) === str.charAt(j)) {
                    count++;
                }
            }
            outStr = outStr + str.charAt(i)
            outStr = outStr + count
        }
    }
    return outStr
}
// let outPut = compressBrute(compressString);
// console.log(outPut)


function compressBetter(str) {       //T(n) S(1)
    let outStr = ""
    let count = 1;
    for (let j = 0; j < str.length; j++) {
        if (str.charAt(j) === str.charAt(j + 1)) {
            count++;
        } else {
            outStr = outStr + str.charAt(j)
            outStr = outStr + count
            count = 1
        }
    }
    outStr = outStr + str.charAt(str.length - 1)
    outStr = outStr + count
    return outStr
}

// let outPut1 = compressBetter(compressString);
// console.log(outPut1)


var compress = function (str) {
    let count = 1;
    let lengthOfArr = 0;
    let idx = 0;
    if (str.length === 1) {
        str.push("1")
        return 2
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] === str[j + 1]) {
            count++;
        } else {
            ++idx;
            str[idx] = count;
            lengthOfArr += 2
            count = 1;
            idx++
        }
    }
    return lengthOfArr
};
let input = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
let outPut = compress(input)
console.log(outPut, input)