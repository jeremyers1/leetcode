var reverseWords = function (s) {
	/* works, but not what LeetCode wants... since it is in two-pointer Algorithm challenge
  let arr = s.split(' ');
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' '); */

	let string = '';
	for (let i = 0; i < s.length; i++) {
		// copy word until a space is found or end of line
		let word = '';
		while (s[i] != ' ' && i < s.length) {
			word += s[i];
			i++;
		}
		// reverse word in place
		let rev = word.split('');
		let start = 0;
		let end = rev.length - 1;
		while (start < end) {
			[rev[start], rev[end]] = [rev[end], rev[start]];
			start++;
			end--;
		}
		word = rev.join('');
		string += word;
		if (s[i] === ' ') string += s[i];
	}
	return string;
};

const str = "Let's take LeetCode contest";
console.log(reverseWords(str));

/*
"Let's take LeetCode contest" = "s'teL ekat edoCteeL tsetnoc"
"God Ding" = "doG gniD"
*/
