var isValid = function (s) {
	if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;

	let parenth = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
			parenth.push(s[i]);
			console.log(i, 'pushed ' + parenth); // to reveal what is happening
		} else {
			switch (s[i]) {
				case ')':
					console.log('found ' + s[i]); // to reveal what is happening
					if (parenth[parenth.length - 1] === '(') parenth.pop();
					else return false;
					break;
				case ']':
					console.log('found ' + s[i]); // to reveal what is happening
					if (parenth[parenth.length - 1] === '[') parenth.pop();
					else return false;
					break;
				case '}':
					console.log('found ' + s[i]); // to reveal what is happening
					if (parenth[parenth.length - 1] === '{') parenth.pop();
					else return false;
					break;
			}
		}
		console.log(i, 'after loop: ' + parenth); // to reveal what is happening
	}

	if (parenth.length === 0) return true;
	else return false;
};

let s = '(])';
if (isValid(s)) console.log('Valid parentheses');
else console.log('NOT valid parentheses');

/*
() = true
()[]{} = true
(] = false
(]) = false
()[(){()}] = true
({})[({})] = true
)(}{][ = false
*/
