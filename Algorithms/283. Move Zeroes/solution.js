var moveZeroes = function (nums) {
  let end = nums.length;
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
  return nums;
};

const numbers = [0, 0,1];
console.log(moveZeroes(numbers));

/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

[0,1,0,3,12] = [1,3,12,0,0]
[0] = [0]
[0,0,1] = [1,0,0]
*/
