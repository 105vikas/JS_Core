let inputVal = [1, 2]

var rotateBruteForce = function (nums, k) {     // T(n*M) S(1)
    if (k > nums.length) k = k % nums.length
    while (k > 0) {
        let lastVal = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1]
        }
        nums[0] = lastVal;
        k--;
    }
};
// rotateBruteForce(inputVal, 3)
// console.log(inputVal)

var rotateOptimal = function (nums, k) {             // T(3n) S(1)
    if (nums.length === 1 || nums.length === 0) {
        return nums
    }
    if (k > nums.length) {
        k = k % nums.length
    }
    for (let i = 0; i < Math.round(nums.length / 2); i++) {
        let theredVal = nums[nums.length - 1 - i]
        nums[nums.length - 1 - i] = nums[i]
        nums[i] = theredVal
    }
    for (let i = 0; i < Math.round(k / 2); i++) {
        let theredVal = nums[k - 1 - i]
        nums[k - 1 - i] = nums[i]
        nums[i] = theredVal
    }
    for (let i = 0; i < Math.round((nums.length - k) / 2); i++) {
        let theredVal = nums[nums.length - 1 - i]
        nums[nums.length - 1 - i] = nums[k + i]
        nums[k + i] = theredVal
    }
};

rotateOptimal(inputVal, 3)
console.log(inputVal)