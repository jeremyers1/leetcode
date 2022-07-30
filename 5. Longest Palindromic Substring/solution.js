var longestPalindrome = function (s) {
	/*
	// WHAT A MESS!!! LOL
  // doesn't work anyway... 
	let testArr = [];
	let revArr = [];
	let answer = '';

	// use a loop to add first letter to an array
	for (let i = 0; i < s.length; i++) {
		testArr.push(s[i]);
		console.log('starting i loop', testArr);
		// use a new loop to check next letter
		for (let j = i + 1; j < s.length; j++) {
			// if next letter is not in the array, then add it to the array and start this second loop again
			if (testArr.indexOf(s[j]) === -1) {
				testArr.push(s[j]);
				console.log('Found a new letter and added it', testArr);
			} else {
				// if next letter is in the array, add it
				testArr.push(s[j]);
				console.log('Found a repeated letter and added it', testArr);
				// then reverse the array and see if the original array and the reversed array are equal
				// NOTE: can't just reverse the array, because arrays are passed by reference
				for (let z = testArr.length - 1; z >= 0; z--) {
					revArr.push(testArr[z]);
				} // end z loop
				console.log('testing array against reversed array', testArr, revArr);
				// NOTE: you can't simply compare arrays, so convert to string first
				if (revArr.toString() === testArr.toString()) {
					// if equal, test array length against answer length
					console.log(testArr.length, answer.length);
					if (testArr.length > answer.length) {
						// if longer, create new answer string
						answer = testArr.join('');
						console.log('answer is now ', answer);
					}
				}
				// if reversed array not equal, clear both arrays and start over on initial loop
				testArr = [];
				revArr = [];
				break;
			} // end else
		} // end j loop
		testArr = [];
		revArr = [];
		console.log('At end of J loop', testArr);
	} // end i loop
	return answer;
  */

	// NEW ATTEMPT - worked, but REALLY REALLY SLOW... my solution took 5 seconds on Leetcode
	let answer = '';
	let ansLength = 0;
	// reverse the original string
	let revS = s.split('').reverse().join('');

	if (revS === s) return s;
	// then start creating substrings
	for (let i = 0; i < s.length; i++) {
		let end = i + 1;
		let subString = '';
		// if substring is found in BOTH strings
		while (s.includes(s.slice(i, end)) && revS.includes(s.slice(i, end)) && end <= s.length) {
			console.log(i, end);
			console.log('checking if ' + s.slice(i, end) + ' is in both strings');
			// must check if substring is actually a palindrome
			let palindrome = s.slice(i, end).split('').reverse().join('');
			console.log(palindrome, s.slice(i, end));
			if (palindrome === s.slice(i, end)) {
				subString = s.slice(i, end);
			}
			end++;
		}
		// if length is longer than answer, save substring as answer
		if (subString.length > ansLength) {
			answer = subString;
			ansLength = subString.length;
		}
	}
	return answer;
};

const str = 'abba';
console.log(longestPalindrome(str));

/*
"babad" = 3, either bab or aba
"cbbd" = 2, bb
"cgfabbagfc" = abba
"bb" = bb
"a" = a
"aacabdkacaa" = aca
"lphntrsqudccteewsdmpjmgmfnxegawjclzobpnxdrvxeygafiwyqsvsecictqkmiqvrdjajfngvlhdezdpqpzjjzbhoyggrbkuzeocrpzqishvfairdvvabopyubfisxbrgnlughbrzunitwowvnsqhdtnkotitgxwzjhbgltksorygpdberdgzgvogrvwluhixfbrfhliedjylxuspjpitwlhdkneonreqrueqphirmgxtqumllqropaefddplspkrtkbmuvwkyryworojlvwzdlacuoqzokrmcgmwkopsbqjjkaoqjqbrderwzmhbhfgwvrjakyfeqcbtvlcgbsxkngymxyievihiskdmmppmmdksihiveiyxmygnkxsbgclvtbcqefykajrvwgfhbhmzwredrbqjqoakjjqbspokwmgcmrkozqoucaldzwvljorowyrykwvumbktrkpslpddfeaporqllmuqtxgmrihpqeurqernoenkdhlwtipjpsuxlyjdeilhfrbfxihulwvrgovgzgdrebdpgyrosktlgbhjzwxgtitokntdhqsnvwowtinuzrbhgulngrbxsifbuypobavvdriafvhsiqzprcoezukbrggyohbzjjzpqpdzedhlvgnfjajdrvqimkqtcicesvsqywifagyexvrdxnpbozlcjwagexnfmgmjpmdsweetccduqsrtnhpl"
*/
