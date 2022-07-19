var findMedianSortedArrays = function (nums1, nums2) {
	let merged = nums1.concat(nums2);
	let sorted = merged.sort((a, b) => a - b);
	if (sorted.length % 2 === 1) {
		let median = (sorted.length - 1) / 2;
		return sorted[median];
	} else {
		let median =
			(sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2;
		return median;
	}
};

console.log(findMedianSortedArrays([1, 3], [2]));

/* 
[1, 3], [2] = 2
[1, 2], [3, 4] = 2.5

*/
