var myAtoi = function (s) {
	// this has got to be cheating... but it was accepted
	// ... but I guess I didn't actually folllow the 6-step instructions...
	// ... but others submitted similar answers and posted them
	/* const num = parseInt(s);
	if (!num) return 0;
	else if (num > 2147483647) return 2147483647;
	else if (num < -2147483648) return -2147483648;
	return num; */

	// someone else's method: ... they didn't follow the six steps either, but used RegEx
	/*   return Math.max(-2147483648, Math.min(2147483647, +s.trim().replace(/^((-|\+)?[0-9]+)[^0-9]*.*$/, "$1") || 0)); */

	/* this one seems to do a better job following the six steps */
	const max = 2 ** 31 - 1;
	const min = -(2 ** 31);
	s = s.trim();

	const hasSign = s[0] === '-' || s[0] === '+';
	const isNegative = s[0] === '-';

	let result = 0;
	let i = hasSign ? 1 : 0;

	while (s[i] && s[i] >= '0' && s[i] <= '9') {
		result = result * 10 + Number(s[i]);
		i++;
	}

	if (isNegative) result = -result;
	if (result > max) return max;
	if (result < min) return min;
	return result;
};

let str = '-91283472332 ';
console.log(myAtoi(str));

/*
42 = 42
-42 = -42
4193 with words = 4193
-91283472332 = -2147483648
*

/** Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits. */
