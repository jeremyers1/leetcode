/*
 * replace spaces in a string with %20
 */

function urlify(s) {
	return s.trim().split(' ').join('%20');
}

const urlString = 'Mr John Smith    ';
console.log(urlify(urlString));
