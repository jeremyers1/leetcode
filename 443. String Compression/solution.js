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
	let strObj = {};
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
	return str.length;
}

const charArray = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(stringCompression(charArray));

/* 
["a", "a", "b", "b", "c", "c", "c"] = 6(["a", "2", "b", "2", "c", "3"])
["a"] = 1(["a"])
["a","b","b","b","b","b","b","b","b","b","b","b","b"] = 4 (["a","b","1","2"]) 
["a","a","b","b","c","c","c"] = 6 (["a","2","b","2","c","3"])
*/
