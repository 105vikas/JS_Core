// ✅ Topic: Myreduce

let newReduce = [3, 2, 3, 4, 5, 6, 7].reduce((accumulator, currentValue) => accumulator + currentValue, 10)
console.log(newReduce, "New Reduced")

Array.prototype.myReduce = function (callback, currentValue) {
    let totalSum = currentValue;
    for (let i = 0; i < this.length; i++) {
        totalSum = callback(this[i], totalSum)
    }
    return totalSum;
}

let newMyReduce = [3, 2, 3, 4, 5, 6, 7].myReduce((accumulator, currentValue) => accumulator + currentValue, 10)
console.log(newMyReduce, "New My Reduce")