let inputStr = "A man, a plan, a canal: Panama"

function checkPalindrom(str) {
    str = str.toLowerCase();
    let strSimple = str.replace(/[^a-zA-Z0-9]/g, '');
    console.log(strSimple)
    for (let i = 0; i < strSimple.length; i++) {
        if (strSimple[i] !== strSimple[strSimple.length - 1 - i]) {
            return false
        }
    }
    return true
}

let outPut = checkPalindrom(inputStr)
console.log(outPut)