var removeDuplicates = function (nums) {
	for (let i = nums.length - 1; i > 0; i--) {
		if (nums[i] === nums[i - 1]) {
			nums.splice(i, 1); // if you use splice and iterate incrementally, it skips some elements because they were shifted into what you already checked
		}
	}
	return nums.length;

	/* The following solution worked perfect, but was not accepted by LeetCode. Why?
  Because they wanted the duplicates removed IN-PLACE with no extra memory allocated for another array
  BTTDB - probably with splice?

  const filtered = [];
  filtered.push(nums[0]);

  for (let i = 1; i < nums.length; i++){
    if (filtered.indexOf(nums[i]) === -1) {
      filtered.push(nums[i]);
    }
  }
	return filtered.length;
  */
};

let arr = [1, 1, 2];
console.log(removeDuplicates(arr));

/* 
[1,1,2] = 2;
[0,0,1,1,1,2,2,3,3,4] = 5
*/
