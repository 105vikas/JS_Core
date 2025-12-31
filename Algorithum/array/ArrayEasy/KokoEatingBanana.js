let piles = [30, 11, 23, 4, 20]
let h = 5

function KokoEatBrute(pl, hour) {       //T (maxElementOfArr*n)
    let maxBananaPerHour = 0;
    let eatenPerH = 0;
    for (let i = 0; i < pl.length; i++) {
        if (maxBananaPerHour < pl[i]) {
            maxBananaPerHour = pl[i]
        }

    }
    let takenHours = Infinity;
    while (takenHours > hour && eatenPerH <= maxBananaPerHour) {
        takenHours = 0
        eatenPerH += 1
        for (let i = 0; i < pl.length; i++) {
            takenHours += Math.ceil(pl[i] / eatenPerH)
        }
    }
    return eatenPerH
}

let outPut = KokoEatBrute(piles, h)
console.log(outPut)