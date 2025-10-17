// ✅ Topic: Myconcat

let str1 = "vikas"
let str2 = "yadav"

let outPut = str1.concat(str2);
console.log("Concat verify that condition or not: ", outPut)

String.prototype.myConcat = function (string2) {
    let outPutString = this
    for (let i = 0; i < string2.length; i++) {
        outPutString = outPutString + string2.charAt(i)
    }
    return outPutString
}
let MyOutPut = str1.myConcat(str2);
console.log("MyConcat verify that condition or not: ", MyOutPut)