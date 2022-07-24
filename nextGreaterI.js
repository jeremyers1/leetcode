var nextGreaterElement = function (nums1, nums2) {
	const ans = [];
	for (let i = 0; i < nums1.length; i++) {
		let index = nums2.indexOf(nums1[i]);
		let temp = 0;
		for (let j = index; j < nums2.length; j++) {
			if (nums2[j] > nums1[i]) {
				ans.push(nums2[j]);
				temp = nums2[j];
				break;
			}
		}
		if (temp === 0) ans.push(-1);
	}
	return ans;
};

const arr1 = [4, 1, 2];
const arr2 = [1, 3, 4, 2];
console.log(nextGreaterElement(arr1, arr2));

/*
[4,1,2], [1,3,4,2] = [-1,3,-1]
[2,4], [1,2,3,4] = [3, -1]
*/
