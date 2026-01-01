function sqrtBrute(num) {
    for (let i = 0; i < num / 2; i++) { // T(n) S(1)
        if (i * i === num) {
            return num
        };
    }
    return -1;
}

let outPut = sqrtBrute(25)
console.log(outPut)

function sqrtBetter(num) {                  // T(logn) S(1)
    function innerFun(number, str, end) {
        if (str > end) {
            return -1;
        }
        mid = Math.floor((str + end) / 2)
        let sqrOFNum = mid * mid;
        if (sqrOFNum === number) {
            return number;
        } else if (sqrOFNum > number) {
            return innerFun(number, str, mid - 1)
        } else if (sqrOFNum < number) {
            return innerFun(number, mid + 1, end)
        }
    }
    return innerFun(num, 0, Math.floor(num / 2))
}

let outPut1 = sqrtBetter(25)
console.log(outPut1)


