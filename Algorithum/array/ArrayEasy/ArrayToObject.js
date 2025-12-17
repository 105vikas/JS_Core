let arr = [4, 5, 6, 7]

function ArrayToObject(array) {  // T(n) S(n)
    let arrObject = {};
    let randomVal = 10;
    for (let i = 0; i < array.length; i++) {
        arrObject[array[i]] = randomVal
        randomVal += 1
    }
    return arrObject
}

let output = ArrayToObject(arr);
console.log(output)