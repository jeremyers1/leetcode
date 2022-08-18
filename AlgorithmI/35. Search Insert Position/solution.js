var searchInsert = function (nums, target) {
	// these two lines avoid search altogether
	if (nums[0] >= target) return 0;
	if (nums[nums.length - 1] < target) return nums.length;

	/* The following works, but it is not binary search O(log n)
	if (nums.indexOf(target) > -1) return nums.indexOf(target);
	else {
		return nums.findIndex(num => num > target);
	} */
	let left = 0;
	let right = nums.length - 1;
	let mid;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) return mid;
		else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return left;
};

const numbers = [1, 3];
const tar = 2;
console.log(searchInsert(numbers, tar));

/* 
Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

[1,3,5,6], 5 = 2
[1,3,5,6], 2 = 1
[1,3,5,6], 4 = 2
[1,3,5,6], 7 = 4
[1], 1 = 0;
[1,3], 2 = 1
 */
