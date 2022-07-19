var twoSum = function (nums, target) {
	let first = 0;
	let last = nums.length - 1;
	while (nums[first] + nums[last] !== target) {
		first++;
		if (first === last) {
			last--;
			first = 0;
		}
	}
	return [first, last];

	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = 1; j < nums.length; j++) {
			if (i === j) continue;
			else if (nums[i] + nums[j] === target) return [i, j];
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9));

/*
{2,7,11,15}, 9
[0,1]

{3,2,4}, 6
[1,2]

{3,3}, 6
[0,1]

{2,5,5,11}, 10
[1,2]
*/
