var lengthOfLongestSubstring = function (s) {
	/* Completely failed on this attempt, let me try a differnt approach
  let testArr = [s[0]];
	let answer = 1;
	let longestAnswer = 1;
	for (let i = 1; i < s.length; i++) {
		console.log(testArr);
		for (let j = i + 1; j < s.length; j++) {
			if (testArr.indexOf(s[j]) === -1) {
				testArr.push(s[j]);
				answer = testArr.length;
				if (answer > longestAnswer) longestAnswer = answer;
			} else {
				testArr = [];
			}
		}
	}
	return longestAnswer;

  */
	/* Doesn't work either ... because it doesn't check inner letters, so abbbba returns 5
	let longest = 0;
	for (let i = 0; i < s.length; i++) {
		let distance = 0;
		startLetter = s[i];
		for (let j = i + 1; j < s.length; j++) {
			if (s[j] === startLetter) {
				distance = j - i;
				break;
			} else {
				distance++;
			}
		}
		if (distance > longest) longest = distance;

	}
	return longest;
	*/


	/* MY WORKING SOLUTION
	let testArr = [];
	let arrlen = 0;
	let answer = 0;
	for (let i = 0; i < s.length; i++) {
		// start with first letter in s and add it new subarray
		testArr.push(s[i]);
		console.log('starting with ' + s[i]);
		console.log(testArr);
		// go to next letter
		for (let j = i + 1; j < s.length; j++) {
			// if next letter is different than any other letter in subarray, add it
			if (testArr.indexOf(s[j]) === -1) {
				testArr.push(s[j]);
				console.log('found a new letter ' + s[j] + ' so adding it to array');
				console.log(testArr);
			} else {
				// when you find a repeated letter, calculate length of subarray
				arrlen = testArr.length;
				if (arrlen > answer) answer = arrlen;
				console.log('found repeated letter ' + s[j] + ' so arrlen is ' + arrlen + ' and answer is now ' + answer);
				// then reset testArr and start over with next letter in s
				testArr = [];
				break;
			}
		}
		// at end of j loop, calculate length of array and reset arr
		arrlen = testArr.length;
		if (arrlen > answer) answer = arrlen;
		console.log('end of j loop so arrlen is ' + arrlen + ' and answer is now ' + answer);
		// then reset testArr and start over with next letter in s
		testArr = [];
	}
	return answer;
*/


	// OTHER SOLUTIONS FOUND ON LEETCODE
	// USING SET() ... I WAS NOT AWARE OF SET() UNTIL SEEING THIS SOLUTION ... 

	const set = new Set();
	// let streak = 0, max = !!s.length, head;
	// I don't understand why he sets max to a boolean(true) to begin with ... that's just confusing
	// removing the !! sets max to s.length, which is too long, so why not just 0?
	let streak = 0, max = 0, head;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        while (set.has(c)) {
            set.delete(s[head]);
            head++;
            streak--;
        }

        if (head === undefined) head = i;
        set.add(c);
        streak++;
        if (streak > max) max = streak;
        console.log(i, c, set, head, s[head], streak, max)
    }
    
	return max;
	
};

let str = 'dvdf';
console.log(lengthOfLongestSubstring(str));

/*
"abbbbba" = 2
"abcabcbb" = 3
"bbbbb" = 1
"pwwkew" = 3 wke
"" = 0
"aab" = 2
"dvdf" = 3 vdf
"abcdebfg" = 6 cdebfg
*/
