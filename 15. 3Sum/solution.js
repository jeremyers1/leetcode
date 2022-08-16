var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	let ans = [];
	// start with nums first, second, and last
	for (let first = 0; first < nums.length - 2; first++) {
		let second = first + 1;
		let last = nums.length - 1;
		// while second < last, try to find zero sums
		while (second < last) {
			// since first is the smallest number, if first+second+last < 0, then second++
			if (nums[first] + nums[second] + nums[last] < 0) second++;
			// else if first+second+last > 0 then last--
			else if (nums[first] + nums[second] + nums[last] > 0) last--;
			// else they equal 0, so push result AND second++ and last--
			else {
				// but how to avoid duplicate entries? use filter method below... from https://stackoverflow.com/questions/44014799/javascript-how-to-remove-duplicate-arrays-inside-array-of-arrays
				// but my method doesn't doesn't work for LONG arrays with all 0s..
				ans.push([nums[first], nums[second], nums[last]]);
				// since array is sorted, we don't need to check duplicates
				while (nums[first] === nums[first + 1]) first++;
				while (nums[second] === nums[second + 1]) second++;
				while (nums[last] === nums[last - 1]) last--;
				second++;
				last--;
			}
		}
	}
	// filter method
	return ans;
};

let number = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(number));

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
[-1,0,1,2,-1,-4] = [[-1,-1,2],[-1,0,1]]
[0,1,1] = []
[0,0,0] = [[0,0,0]]
[0,1,-1] = [[0,1,-1]]

[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.......VERY LONG] = [[0,0,0]]

received GREAT help from here: https://leetcode.com/problems/3sum/discuss/2414590/javascript-solution
*/
