let input = [6, 5, 4, 3, 2, 1]

function insersitionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        j = i;
        while (arr[j - 1] > arr[j] && j >= 0) {
            let threedVal = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = threedVal;
            j--;
        }
    }
    return arr;
}
let output = insersitionSort(input)
console.log(output)
