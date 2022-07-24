var reverseWords = function (s) {
  // this reverses ... I was supposed to leave words in place...
  // return s.split('').reverse().join('');
  let arr = s.split(' ');

/* this works
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('').reverse().join('');
  }

  return arr.join(' ');

    */
  // using .map(), and you don't need the split above
  //  return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");

  // So will this work?
  // return s.split(" ").forEach(word => word.split("").reverse().join("")).join(" ");
  // No. It doesn't. Why not? B/C while .forEach() does something with each element, it doesn't return anything
  // to get .forEach() to work, do this (which is now basically just a for loop... )
  let i = 0;
  arr.forEach(word => {
    arr[i] = word.split('').reverse().join('');
    i++
  });
  return arr.join(' ');

};


const str = "Let's take LeetCode contest";
console.log(reverseWords(str));

/*
"Let's take LeetCode contest" = "s'teL ekat edoCteeL tsetnoc"
"God Ding" = "doG gniD"
*/