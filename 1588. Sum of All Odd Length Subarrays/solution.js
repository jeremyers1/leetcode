var sumOddLengthSubarrays = function (arr) {
	// first all single digit subarrays
	let total = 0;
	// go through array
	for (let i = 0; i < arr.length; i++) {
		//generate all sub arrays
		for (let j = i; j < arr.length; j += 2) {
			for (let k = i; k <= j; k++) total += arr[k];
		}
	}
  return total; 

	/* An alternative method is to figure out how many times each number will
appear in all the various arrays, and then mutltiply the number by that frequency.

Outer array numbers appear less freqently than inner numbers, in the amount of 
1/2 of N for even-N arrays and 1/2 + .5 for odd-N arrays, and so on for the others
So a frequency equation for an array of N length is this:
Math.floor((((i + 1) * (N - i))+ 1) / 2);

But honestly, the math on this is SOOO confusing, the nested for loops is better for humans ... and a bit faster?

	let N = arr.length;
	for (let i = 0; i < N; i++) {
		total += arr[i] * Math.floor(((i + 1) * (N - i) + 1) / 2);
	}

	return total;
  */
};

const arr = [1, 2, 3, 4];
console.log(sumOddLengthSubarrays(arr));

/* Given an array of positive integers arr, return the sum of all possible
odd-length subarrays of arr.
[1,4,2,5,3] = 58
[1,2] = 3
[1,2,3] = 12
[1,2,3,4] = 10 + 6 + 9 = 25
[10,11,12] = 66
*/
