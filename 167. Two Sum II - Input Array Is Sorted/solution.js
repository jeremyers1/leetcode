var twoSum = function (numbers, target) {
	/* The following solution worked, except for REALLY LONG arrays with the two numbers being the last two arrays ... then it timed out
  for (let i = 0; i < numbers.length - 1; i++){
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i+1, j+1]
    }
  } */
	/* The following works for some arrays, but not for problems like [1,0,1], 2, because it return the first array item twice = [1,1]
 	for (let i = 0; i < numbers.length; i++) {
		let second = target - numbers[i];
		if (numbers.indexOf(second) === -1) {
			while (numbers[i] === numbers[i + 1]) i++;
		} else {
			return [i + 1, numbers.indexOf(second) + 1];
		}
	} */

  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
    else if (numbers[right] > target - numbers[left]) right--;
    else if (numbers[left] < target - numbers[right]) left++;
  }
};

const nums = [2, 7, 11, 15];
const tar = 9;
console.log(twoSum(nums, tar));

/* 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

[2,7,11,15], 9 = [1,2]
[2,3,4], 6 = [1,3]
[-1,0], -1 = [1,2]
[0,0,3,4], 0 = [1,2];

 */
