let input = [15, 2, 7, 1, 9, 18]

function mergeArray(arr, low, mid, high) {  //T nlogn s:(n)
    let outPut = [];
    let i = low;
    let j = mid + 1;
    while (i <= mid && j <= high) {
        if (arr[i] <= arr[j]) {
            outPut.push(arr[i])
            i++;
        } else {
            outPut.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        outPut.push(arr[i])
        i++;
    }
    while (j <= high) {
        outPut.push(arr[j]);
        j++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = outPut[i - low]
    }
}


function mergeSort(arr, low, high) {
    if (low === high) {
        return;
    }
    let mid = Math.floor((low + high) / 2)
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    mergeArray(arr, low, mid, high)
}
let output = mergeSort(input, 0, input.length - 1)
console.log(input)
