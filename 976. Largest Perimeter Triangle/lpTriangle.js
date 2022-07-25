var largestPerimeter = function(nums) {
  // find 3 largest numbers
  nums.sort((a, b) => b-a);
  // make sure 2 of them are greater than or equal to the third
  for (let i = 0; i < nums.length - 2; i++){
    if (nums[i+1] + nums[i + 2] > nums[i]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }

  return 0;
};


const arr = [2,1,2];
console.log(largestPerimeter(arr));


/*
[2,1,2] = 5
[1,2,1] = 0
*/