var threeSumClosest = function (nums, target) {
	// solution works, except for REALLY LONG arrays, then it times out... which is excpected with 3 for loops ...

	// quickly solve easy arrays
	if (nums.length === 3) return nums[0] + nums[1] + nums[2];

	let uniq = [...new Set(nums)];
	if (uniq.length === 1) return uniq[0] * 3;

	/* 
	let ans = 0;
	let diff = 10000;
	for (let first = 0; first < nums.length - 2; first++) {
		for (let second = first + 1; second < nums.length - 1; second++) {
			for (let third = second + 1; third < nums.length; third++) {
				console.log(nums[first], nums[second], nums[third]);
				let prevDiff = Math.abs(nums[first] + nums[second] + nums[third] - target);
				console.log('prevdiff: ' + prevDiff);
				if (prevDiff === 0) return nums[first] + nums[second] + nums[third];
				else {
					if (prevDiff < diff) {
						console.log(prevDiff + ' < ' + diff);
						diff = prevDiff;
						ans = nums[first] + nums[second] + nums[third];
					}
				}
			}
		}
	}
	return ans; */

	/*
	nums.sort((a, b) => a - b);
	console.log(nums);
	let closest = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= target) {
			closest = i;
			console.log('closests changed to index of ' + i);
			break;
		}
	}

	if (closest === 0) return nums[0] + nums[1] + nums[2];
  if (closest === nums.length - 1) return nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3]; */

	// finally gave up and got help
	// liked this solution the most: https://leetcode.com/problems/3sum-closest/discuss/2137805/javascript-Solution

	// use for loop for longer arrays
	let closest = Infinity;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		let a = i + 1;
		let b = nums.length - 1;
		while (a < b) {
			let sum = nums[i] + nums[a] + nums[b];
			if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
			sum < target ? a++ : b--;
		}
	}
	return closest;
};

const numbers = [-570, 458, -609, 731, -361, 775, -512, 14, 935, 232, -389, 914, -365];
const target = -500;
console.log(threeSumClosest(numbers, target));

/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
[-1,2,1,-4], 1 = 2
[0,0,0], 1 = 0
[0,1,2], 3 = 3
[1,1,1,0],-100 = 2
[-570,458,-609,731,-361,775,-512,14,935,232,-389,914,-365], 500 = 495 (775, -512, 232)
[-570,458,-609,731,-361,775,-512,14,935,232,-389,914,-365], -500 = -501 (-570, 458, -389)
*/
