var sortedSquares = function (nums) {
	// Very simple to do with built-in JS methods, but Leetcode wants 2 pointers ... which JS doesn't use ... so, I'll use the JS methods. Ha!
	/* 	let sqArr = [];
	nums.forEach(num => sqArr.push(num * num));
  return sqArr.sort((a, b) => a - b); */

	// Alternative 1-line option:
	return nums.map(item => item * item).sort((a, b) => a - b);
};

const numbers = [-4, -1, 0, 3, 10];
console.log(sortedSquares(numbers));

/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
[-4,-1,0,3,10] = [0,1,9,16,100]
[-7,-3,2,3,11] = [4,9,9,49,121]
*/
