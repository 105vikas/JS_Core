let piles = [10, 11, 23, 4, 20]
let h = 23

function KokoEatBrute(pl, hour) {       //T (maxElementOfArr*n)
    let answ = 0;
    let maxBanPiles = -1;
    for (let i = 0; i < pl.length; i++) {
        if (maxBanPiles > pl[i]) {
            maxBanPiles = pl[i];
        }
    }

    for (let i = 0; i < maxBanPiles; i++) {
        let sum = 0;
        for (let i = 0; i < pl.length; i++) {
            sum += pl[i];
        }
        if (sum > 0 && targeHours <= sum && sum > min) {
            answ = i;
        }
    }
    return answ;
}

let outPut = KokoEatBrute(piles, h)
console.log(outPut)