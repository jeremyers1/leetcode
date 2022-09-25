/*
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 * For example, if s = "abcde", then it will be "bcdea" after one shift.
 *
 */

var rotateString = function (s, goal) {
	// brute force - works, but VERY SLOW
	/* 	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < goal.length; j++) {
			if (s[i] === goal[j]) {
				let goalShift = goal.slice(j) + goal.slice(0, j);
				if (s === goalShift) return true;
			}
		}
	}
  return false;
   */

	// could speed it up with only one loop and slice every time
/* 	for (let i = 0; i < s.length; i++) {
		let goalShift = s.slice(i) + s.slice(0, i);
		if (goal === goalShift) return true;
	}
	return false; */

	// GENIUS solution from another Leetcode user:
  if (s.length != goal.length) return false;
	const s1 = s + s;
	return s1.includes(goal);
};

const string = 'abcde';
const strGoal = 'abced';
console.log(rotateString(string, strGoal));

/*
s = "abcde", goal = "cdeab" = true
s = "abcde", goal = "abced" = false
*/
