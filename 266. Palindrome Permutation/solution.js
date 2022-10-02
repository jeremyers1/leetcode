/*
 * PREMIUM ONLY (so I wasn't able to look at the exact question)
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * Time: populate object: O(N) + loop through object: O(N) = O(2N) = O(N)
 * CTCI1.4
 */

function isPalindromPermutation(s) {
	// spaces don't matter, so strip out or ignore spaces
	let numOccurences = {};
	for (let i = 0; i < s.length; i++) {
		if (s[i] != ' ') {
			numOccurences[s[i]] = numOccurences[s[i]] + 1 || 1;
		}
	}

	console.log(numOccurences);

	// in even-length string, all letters will have a even number of occurences; in odd-length, only one occurence will be odd
	/* 	if (count % 2 === 0) {
		console.log('even');
		for (let key in numOccurences) {
			if (numOccurences[key] % 2 != 0) {
				return false;
			}
		}
	} else {
		console.log('odd');
		let oneOdd = 0;
		for (let key in numOccurences) {
			if (numOccurences[key] % 2 != 0) {
				oneOdd++;
				if (oneOdd > 1) return false;
			}
		}
	} */

	let count = 0;
	for (let v of Object.values(numOccurences)) {
		if (v % 2 === 1) count++;
		if (count > 1) return false;
	}

	return true;
}

let str = 'tact coa';
console.log(isPalindromPermutation(str));

/* 
tact coa = true (taco cat OR atca cta)
*/
