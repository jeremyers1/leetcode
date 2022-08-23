var moveZeroes = function (nums) {
	/*   let end = nums.length;
  for (let i = 0; i < end;) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      end--;
    } 
    if (nums[i] != 0) {
      i++;
    }
  }
  return nums; */

	// Alternative Approach
	let nonZero = 0;
	// filling in non zero characters
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			nums[nonZero] = nums[i];
			nonZero += 1;
		}
	}

	// filling in zeroes
	for (let i = nonZero; i < nums.length; i++) {
		nums[i] = 0;
	}
	return nums;
};

const numbers = [0, 0, 1];
console.log(moveZeroes(numbers));

/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

[0,1,0,3,12] = [1,3,12,0,0]
[0] = [0]
[0,0,1] = [1,0,0]
*/
