var longestPalindrome = function (s) {
	//use a loop to add first letter to an array
	// use a new loop to check next letter ...
	// if next letter is not in the array, then add it to the array and start this second loop again
	// if next letter is in the array, add it
	// then reverse the array and see if the original array and the reversed array are equal
	// if so, count array length and test against answer length
	// if longer, create answer string
	// if not, stop with this loop, clear all arrays and start over on initial loop
	// return answer string
};

const str = 'babad';
console.log(longestPalindrome(str));

/*
"babad" = 3, either bab or aba
"cbbd" = 2, bb
*/
