var lengthOfLastWord = function (s) {
	const arr = s.trim().split(/\s+/); // trim is needed to remove leading or trailing spaces
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
