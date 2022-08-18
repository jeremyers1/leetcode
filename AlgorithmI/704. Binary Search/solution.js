var search = function (nums, target) {
	// return nums.indexOf(target);
	// the above obvsiously works, but since it's called binary search, I doubt this is what they want ...

	//   ITERATIVE Approach
	let low = 0;
	let high = nums.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (nums[mid] === target) return mid;
		else if (nums[mid] > target) high = mid - 1;
		else low = mid + 1;
	}
	return -1;

	// Recursive Approach
	// given this particular function, you can't actually use recursion, because the function has to receive low and high elements of nums array
};

const numbers = [-1, 0, 3, 5, 9, 12];
const tar = 4;
console.log(search(numbers, tar));

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

[-1,0,3,5,9,12], 9 = 4
[-1,0,3,5,9,12], 2 = -1
[5], 5 = 0

*/
