var arraySign = function (nums) {
	if (nums.some(num => num === 0)) return 0;
	const num = nums.reduce((a, b) => a * b);
	if (num > 0) return 1;
	else if (num < 0) return -1;

	// as a ternary:
	// return (nums.reduce((a, b) => a * b) > 0) ? 1 : -1;

	// Note: This could become a problem with large numbers.
	// So you could check sign of each number before multipling, and then just multiply 1 and -1
	// or forget muliplying, and just do a count of positive and negative numbers. if odd, then negative.
	/*
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] < 0) count++;
       if (nums[i] === 0) return 0;
   }
    
    if (count % 2 === 1) return -1;
    return 1;
    */
};

const arr = [-1, -2, -3, -4, 3, 2, 1];
console.log(arraySign(arr));

/*
[-1,-2,-3,-4,3,2,1] = 1
[1,5,0,2,-3] = 0
[-1,1,-1,1,-1] = -1
*/
