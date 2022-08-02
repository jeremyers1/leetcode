var isMatch = function (s, p) {
	/*	if (p === '.*') return true;
	else if (s.length === 1 && p === '.') return true;
	else if (p.includes('*')) {
		let arr = p.split(/(\*)/).filter(element => element);
		let flag = false;
		console.log(arr);
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] === '*') {
				console.log('found * at ', i);
        if (s.includes(arr[i - 1])) flag = true;
        else return false;
				console.log(flag);
			}
		}
		return flag;
	}
  return false;
  */
	/* I cheated and looked because I had no idea how to proceed ... RegEx is fun!
  I found the following beautiful solution, but did not submit it as an answer, because I didn't find one on my own 
  */

	const pattern = new RegExp('^' + p + '$'); // ^ means start of string, $ means end of the string, these are to prevent certain pattern that match a part of the string to be returned as true.
	return pattern.test(s);
};

let str = 'mississippi';
let reg = 'mis*is*p*.';
console.log(isMatch(str, reg));

/*
aa, a = false
aa, a* = true
ab, .* = true
"mississippi", "mis*is*p*." = false
*/
