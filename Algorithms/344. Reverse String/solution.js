var reverseString = function (s) {
 // return s.reverse(); // clearly this works, but not what Leetcode wants...
  
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};

const str = ["h","e","l","l","o"];
console.log(reverseString(str));

/* 
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

["h","e","l","l","o"] = ["o","l","l","e","h"]

["H","a","n","n","a","h"] = ["h","a","n","n","a","H"]
 */
