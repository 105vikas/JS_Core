let input = [15, 2, 7, 1, 9, 18]

function mergeSortedArr(arr, low, high) {   // T: nlogn, s: (1)
    let pivot = low;
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] <= arr[pivot] && i <= high) {
            i++;
        }
        while (arr[j] > arr[pivot] && j >= low) {
            j--;
        }
        if (i < j) {
            let theredVal = arr[i];
            arr[i] = arr[j];
            arr[j] = theredVal;
        }
    }
    let theredVal = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = theredVal;
    return j;
}

function mergeSortedInDec(arr, low, high) {   // T: nlogn, s: (1)
    let pivot = low;
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i] >= arr[pivot] && i <= high) {
            i++;
        }
        while (arr[j] < arr[pivot] && j >= low) {
            j--;
        }
        if (i < j) {
            let theredVal = arr[i];
            arr[i] = arr[j];
            arr[j] = theredVal;
        }
    }
    let theredVal = arr[pivot];
    arr[pivot] = arr[j];
    arr[j] = theredVal;
    return j;
}


function quickSort(arr, low, high) {
    if (low > high) {
        return;
    }
    let partitionIdx = mergeSortedInDec(arr, low, high)
    quickSort(arr, low, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, high)
}


const outPut = quickSort(input, 0, input.length - 1);
console.log(input)