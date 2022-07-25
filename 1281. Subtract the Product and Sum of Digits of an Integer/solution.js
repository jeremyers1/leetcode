var subtractProductAndSum = function(n) {
  const arr = n.toString().split('');
  const add = arr.reduce((a, b) => Number(a) + Number(b));
  const mult = arr.reduce((a, b) => Number(a) * Number(b));
  // Instead of two .reduce() calls, we could use one for loop, updating both add and mult with each pass
  return mult - add;
};

const num = 234;
console.log(subtractProductAndSum(num));

/*
234 = 15
4421 = 21
*/