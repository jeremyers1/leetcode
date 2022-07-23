var lengthOfLastWord = function (s) {
  const arr = s.trim().split(/\s+/); // trim is needed to remove leading or trailing spaces
  // also, .split(' ') works for the purpose of this challenge because of .trim, 
  // but it leaves numerous empty array elements inside the arr
	console.log(arr);
	return arr[arr.length - 1].length;
};

const str = '   fly me   to   the moon  ';
console.log(lengthOfLastWord(str));

/*
"Hello World" = 5
"   fly me   to   the moon  " = 4
"luffy is still joyboy" = 6
*/

/* here is an intersting approach:
it starts at the end of the string and searches for spaces
When if DOESN'T find a space, it has found the last word. 
Then it counts backward through word until it finds another space
Then returns count

const lengthOfLastWord = function (s) {
	let res = 0;
	let flag = false;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === ' ') {
			if (flag === true) {
				return res;
			}
		} else {
			flag = true;
			res++;
		}
	}
	return res;
};

*/
