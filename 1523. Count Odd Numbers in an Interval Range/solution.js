var countOdds = function(low, high) {
   if (low % 2 === 0 && high % 2 === 0) return (high - low) / 2;
   else return Math.floor((high - low) / 2) + 1;

  // refactor into ternary and really don't need BOTH high and low to be even if you use Math.floor on both... 
  // countOdds = (high, low) => (low % 2 === 0 && high % 2 === 0) ? (high - low) / 2 : Math.floor((high - low) / 2) + 1;

};

const h = 13;
const l = 8;
console.log(countOdds(l, h));

/*
Given two non-negative integers low and high. Return the count of odd numbers
between low and high (inclusive).
7,3 = 3
10,8 = 1
*/