var longestCommonPrefix = function (strs) {
	if (strs.length <= 1 || strs[0] === "") return strs[0] || "";

	/* for loops approach 
  // outer loop iterates through first word 
  for (let i = 0; i < strs[0].length; i++) {
      // inner loop compares letters of first word with each successive word
      for (let j = 1; j < strs.length; j++) {
          if (strs[0][i] != strs[j][i]) { // when match fails, returns slice of first word 
              return strs[0].slice(0,i); // could also use .substr(0,1) as below
          }
      }
  }
  return strs[0]; // returns first word if all words match
  */

	/* every() method approach */
	let i = 0;
	// while all words have the same character at position i, increment i
	while (strs[0][i] && strs.every((word) => word[i] === strs[0][i])) i++;

	// prefix is the substring from the beginning to the last successfully checked i
	return strs[0].substr(0, i); // could also use .slice(0,1) as above
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/*
["flower","flow","flight"] = "fl"
["dog","racecar","car"] = ""
["",""] = ""
*/
