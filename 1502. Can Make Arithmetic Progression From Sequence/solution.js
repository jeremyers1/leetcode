var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);
  let test = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++){
    if (arr[i + 1] - arr[i] != test) return false;
  }
  return true;
}; 

// Note: this challenge could be more fun if other arithmetic operators could be used ... +,-,*,/,

const arr = [3, 5, 1];
  console.log(canMakeArithmeticProgression(arr));

/*
[3,5,1] = true
[1,2,4] = false
*/