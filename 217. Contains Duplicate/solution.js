/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * CTCI1.1
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	// in my tests, this one was the fastest and uses the least space
	const Found = new Map();
	Found.set(nums[0], true);
	for (let i = 1; i < nums.length; i++) {
		if (!Found.has(nums[i])) Found.set(nums[i], true);
		else return true;
	}
	return false;

	// using object
	/* 	const Found = {};
	Found[nums[0]] = true;
	for (let i = 1; i < nums.length; i++) {
		if (!Found[nums[i]]) Found[nums[i]] = true;
		else return true;
	}
	return false; */

	// Another interesting approach from someone else, but slower than my map approach above
	/* nums.sort((a, b) => {
		return b - a;
	});
	for (let i = 0; i <= nums.length; i++) {
		if (nums[i] === nums[i + 1]) return true;
	}
	return false; */

	// Another interesting approach from someone else, but slower than my map approach above
	//	return nums.length >= 2 && new Set(nums).size !== nums.length;
};

const numArray = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(numArray));

/*
[1,2,3,1] = true
[1,2,3,4] = false
[1,1,1,3,3,4,3,2,4,2] = true
 */
