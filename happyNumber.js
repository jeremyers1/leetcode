let bool;
var isHappy = function (n) {
	// every number comes back down to single digit eventually
	// Only 1 and 7 will result in a happy number, so all others are false
	if (n === 1 || n === 7) {
		return true;
	} else if (n <= 9) {
		return false;
	}

	// get individual digits
	const arr = [];
	while (n > 9) {
		arr.push(n % 10);
		n = Math.floor(n / 10);
	}
	arr.push(n);

	// square and add
	let newN = 0;
	for (let i = 0; i < arr.length; i++) {
		newN += arr[i] * arr[i];
	}

	return isHappy(newN);
};

const num = 19;
console.log(isHappy(num));

/*
19 = true;
2 = false
1 = true
7 = true
*/
