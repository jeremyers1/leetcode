var searchInsert = function (nums, target) {
	if (nums[0] > target) return 0;
	if (nums[nums.length - 1] < target) return nums.length;

	if (nums.indexOf(target) > -1) return nums.indexOf(target);
	else {
		return nums.findIndex(num => num > target);
	}
};

/* Wow, I made this difficult. LOL
check out this other solution from someone else:

var searchInsert = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= target) return i;
	}
	return nums.length;
};

*/

const arr = [1, 3, 5, 6];
const search = 2;
console.log(searchInsert(arr, search));

/*
[1,3,5,6], 5 = 2
[1,3,5,6], 2 = 1
[1,3,5,6], 7 = 4
*/
