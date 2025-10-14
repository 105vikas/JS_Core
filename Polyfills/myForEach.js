// ✅ Topic: Myforeach
[2, 3, 4, 5, 6, 7, 8].forEach((val, i) => {
    console.log(val, i)
});

Array.prototype.Myforeach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
};

[2, 3, 4, 5, 6, 7, 8].forEach((val, i) => {
    console.log(val, i)
});