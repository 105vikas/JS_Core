let input = [15, 2, 7, 1, 9, 18]

function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let threedVar = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = threedVar
            }
        }
    }
    return arr;
}
let output = bubbleSort(input)
console.log(output)
