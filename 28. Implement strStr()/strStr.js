
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  return haystack.indexOf(needle);
};


 const str1 = "hello";
 const str2 = "ll";
 console.log(strStr(str1, str2));

/*
hello, ll = 2
aaaaa, bba = -1
*/