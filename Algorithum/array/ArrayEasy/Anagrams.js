let str1 = "rat";
let str2 = "car";

function checkAnagramBruteForce(st1, st2) {     // T(n) s(n)
    if (st1.length !== st2.length) {
        return false;
    }
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < st1.length; i++) {
        arr1.push(st1.charAt(i))
    }
    for (let i = 0; i < st2.length; i++) {
        arr2.push(st2.charAt(i))
    }
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}
// let outPut1 = checkAnagramBruteForce(str1, str2);
// console.log(outPut1)

function checkAnagramOptimise(st1, st2) {   // T(n) s(n)
    if (st1.length !== st2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < st1.length; i++) {
        let char = st1.charAt(i)
        obj1[char] = (obj1[char] || 0) + 1;
    }
    for (let i = 0; i < st2.length; i++) {
        let char = st2.charAt(i);
        obj2[char] = (obj2[char] || 0) + 1;
    }

    Object.keys(obj1).forEach(key => {
        if (obj1[key] !== obj2[key]) {
            console.log("ldskfja")
            return false;           // it ruturning but why after that it returning true
        }
    })
    return true
}

let outPut = checkAnagramOptimise(str1, str2);
console.log(outPut)