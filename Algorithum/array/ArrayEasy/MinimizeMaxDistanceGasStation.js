function minDistanceBrute(station, moreStation) {
    let n = station.length;
    let howMany = new Array(n - 1).fill(0);
    for (let gasStation = 0; gasStation < moreStation; gasStation++) {
        let maxSection = -1, maxInd = -1;
        for (let i = 0; i < n - 1; i++) {
            let diff = station[i + 1] - station[i];
            let sectionLen = diff / (howMany[i] + 1);
            if (sectionLen > maxSection) {
                maxSection = sectionLen;
                maxInd = i;
            }
        }
        howMany[maxInd]++;
    }
    let maxAns = -1;
    for (let i = 0; i < n - 1; i++) {
        let diff = (station[i + 1] - station[i]);
        let sectionLen = diff / (howMany[i] + 1);
        maxAns = Math.max(maxAns, sectionLen);
    }
    return maxAns;
}

let output = minDistanceBrute([1, 13, 17, 23], 5)
console.log(output)


function minDistanceBeter(station, moreStation) {
    // const maxHeap = new MaxHeap();
}

let output1 = minDistanceBeter([1, 13, 17, 23], 5)
console.log(output1)