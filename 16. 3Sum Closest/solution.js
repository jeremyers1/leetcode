var threeSumClosest = function (nums, target) {
	// solution works, except for REALLY LONG arrays, then it times out... which is excpected with 3 for loops ...
	let uniq = [...new Set(nums)];
	if (uniq.length === 1) return uniq[0] * 3;

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
	return ans;
};

const numbers = [0, 1, 2];
const target = 3;
console.log(threeSumClosest(numbers, target));

/*
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
[-1,2,1,-4], 1 = 2
[0,0,0], 1 = 0
[0,1,2], 3 = 3
[1,1,1,0],-100 = 2
*/
