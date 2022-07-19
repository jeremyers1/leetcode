var isPalindrome = function (x) {
	if (x < 0) return false;

	const xArray = x.toString().split("");
	const xRev = xArray.reverse();

	let end = xArray.length - 1;
	for (let i = 0; i < Math.floor(xArray.length / 2); i++) {
		if (xArray[i] != xRev[end]) return false;
		end--;
	}
	return true;
};

console.log(isPalindrome(121));

/*
121 = true;
-121 = false; 
10 = false;
*/
