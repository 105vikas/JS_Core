var findMedianSortedArrays = function (nums1, nums2, k) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1, k)
    }
    let n1 = nums1.length, n2 = nums2.length;
    let low = Math.max(0, k - n2), high = Math.min(k, n1);

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor(k - cut1);

        let l1 = (cut1 === 0) ? -Infinity : nums1[cut1 - 1];
        let l2 = (cut2 === 0) ? -Infinity : nums2[cut2 - 1];
        let r1 = (cut1 === n1) ? Infinity : nums1[cut1];
        let r2 = (cut2 === n2) ? Infinity : nums2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2)
        } else if (l1 > r2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
};
let output = findMedianSortedArrays([2, 3, 4, 5], [52, 3, 7, 8, 9], 8);
console.log(output)