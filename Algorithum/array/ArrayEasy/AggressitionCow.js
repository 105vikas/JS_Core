let distance = [0, 3, 4, 7, 9, 10]

function canWePlace(arr, dis, cows) {
    countCow = 1;
    last = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - last >= dis) {
            countCow++;
            last = arr[i];
        }
    }
    if (countCow >= cows) {
        return true;
    } else {
        return false;
    }
}

function AggregationCowBrutte(arr, cows) {
    let dis = arr.sort((a, b) => a - b);
    let max = dis[arr.length - 1]
    for (let i = 0; i <= max; i++) {
        if (canWePlace(arr, i, cows) === true) {
            continue;
        } else {
            return i - 1;
        }
    }
}
let outPut = AggregationCowBrutte(distance, 4)
console.log(outPut)

function AggregationCowBetter(arr, cows) {
    let disArr = arr.sort((a, b) => a - b);
    let low = 1;
    let heigh = disArr[arr.length - 1];
    while (low <= heigh) {
        let mid = Math.floor((low + heigh) / 2);
        if (canWePlace(arr, mid, cows) === true) {
            low = mid + 1;
        } else {
            heigh = mid - 1;
        }
    }
    return heigh;
}
let outPut1 = AggregationCowBetter(distance, 4)
console.log(outPut1)