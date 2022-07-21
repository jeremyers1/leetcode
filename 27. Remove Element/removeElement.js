var removeElement = function (nums, val) {
	// nearly identical to 26. Remove Duplicates from Sorted Array
	for (let i = nums.length - 1; i >= 0; i--) {
		// Upon checking other solutions, the for loop would work in positive iteration also,
		// but then you have to go backwards 1 with i-- when a val is found, so my solution is easier to understand
		if (nums[i] === val) {
			nums.splice(i, 1);
		}
	}
	return nums.length;
};

const arr = [3, 2, 2, 3];
const num = 2;
console.log(removeElement(arr, num));

/*
[3,2,2,3], 3 = 2;
[0,1,2,2,3,0,4,2], 2 = 5
*/
