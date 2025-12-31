let val = 15;

function sumOfNBrute(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum;
}
let outPut = sumOfNBrute(val)
console.log(outPut)

function sumOf_N_Numbers(num) { //T(1) S(1)
    return (num * (num + 1)) / 2
}

let outPut1 = sumOf_N_Numbers(val)
console.log(outPut1)