/*
 * Given an array of characters chars, compress it using the following algorithm:
 *
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 *
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
 * Note that group lengths that are 10 or longer will be split into multiple characters in chars.
 *
 * After you are done modifying the input array, return the new length of the array.
 *
 * You must write an algorithm that uses only constant extra space.
 *
 * ***** Mine works perfect in VSCode, but is not accepted by Leetcode... Probably has something to do with the last requrement of using only constant extra space
 * Time:
 * CTCI1.6
 */

function stringCompression(chars) {
	/* 	let strObj = {};
	for (let i = 0; i < chars.length; i++) {
		strObj[chars[i]] = strObj[chars[i]] + 1 || 1;
	}
	let str = '';
	for (let key in strObj) {
		if (strObj[key] > 1) {
			str += key;
			str += strObj[key];
		} else {
			str += key;
		}
	}
	console.log(str);
	chars = str.split('');
	console.log(chars);
	return str.length; */

	// New attempt.
	// once again, works perfectly here, but is not accepted by LeetCode
	let s = '';
	for (let i = 0; i < chars.length; i++) {
		s += chars[i];
		if (chars[i + 1]) {
			if (chars[i] === chars[i + 1]) {
				i++;
				let count = 2;
				while (chars[i] === chars[i + 1] && i < chars.length) {
					count++;
					i++;
				}
				s += count;
			}
		}
	}
	// mine was:
	// chars = s.split('');
	chars.splice(0, chars.length, ...s.split('')); // used from other solution below. AND I added the proper return (which wasn't needed by leetcode... )
	return chars.length;

	// This was someone else's solution:
	// Very similar to my second approach above, except for the method used to re-create the chars array (I just assigned using split(). They used splice)
	// Also, they didn't return anything???? But it was accepted????
	/* 	let out = '';
	let count = 1;

	if (chars.length > 1) {
		for (let i = 0; i < chars.length; i++) {
			let curr = chars[i];
			let next = chars[i + 1];
			if (curr === next) {
				count++;
			} else {
				if (count > 1) {
					out += curr + String(count);
					count = 1;
				} else {
					out += curr;
				}
			}
		}

		chars.splice(0, chars.length, ...out.split(''));
	} */
}

const charArray = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(stringCompression(charArray));

/* 
["a", "a", "b", "b", "c", "c", "c"] = 6(["a", "2", "b", "2", "c", "3"])
["a"] = 1(["a"])
["a","b","b","b","b","b","b","b","b","b","b","b","b"] = 4 (["a","b","1","2"]) 
["a","a","b","b","c","c","c"] = 6 (["a","2","b","2","c","3"])
*/
