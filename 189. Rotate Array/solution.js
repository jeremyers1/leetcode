var rotate = function (nums, k) {
	// the following works, but Leetcode timeout on VERY LONG nums array
	/*   for (let i = 0; i < k; i++){
    let temp = nums[nums.length - 1];
    nums.pop();
    nums.unshift(temp);
  }
  return nums; */

	// this works here, but not on leetcode... why not?
	// because I'm not supposed to return anything. I'm supposed to modify nums in place
	/* 	let temp = nums.slice(nums.length - k);
  return temp.concat(nums.slice(0, nums.length - k)); */
	k %= nums.length;
	let temp = nums.splice(nums.length - k, k);
	nums.unshift(...temp);
	console.log(nums);
};

const numbers = [1, 2];
const steps = 5;
rotate(numbers, steps);

/* 
Given an array, rotate the array to the right by k steps, where k is non-negative.

[1,2,3,4,5,6,7], 3 = [5,6,7,1,2,3,4]

[-1,-100,3,99], 2 = [3,99,-1,-100]

// this sort of array is what modulo is needed for... 
[1,2], 5 = [2,1]
*/
