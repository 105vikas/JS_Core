let input = [5, 4, 3, 2, 1, 0]

function selectionShort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let miniumVal = arr[i]
        let miniumValIndx = -1;
        for (let j = i + 1; j < length; j++) {
            if (miniumVal > arr[j]) {
                miniumVal = arr[j];
                miniumValIndx = j
            }
        }
        if (miniumValIndx >= 0) {
            if (arr[i] > arr[miniumValIndx]) {
                arr[i] = arr[i] + arr[miniumValIndx];
                arr[miniumValIndx] = arr[i] - arr[miniumValIndx];
                arr[i] = arr[i] - arr[miniumValIndx];
            }
        }

    }
    return arr;
}
let output = selectionShort(input)
console.log(output)
