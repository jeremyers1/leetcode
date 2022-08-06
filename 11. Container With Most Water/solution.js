var maxArea = function (height) {
	/* Worked, but times out at LeetCode on the giant array (takes > 10 seconds)
	let volume = 0;
  let largest = 0;
  for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let lowest = Math.min(height[i], height[j]);
			volume = lowest * (j - i);
			if (volume > largest) largest = volume;
		}
	}
	return largest;
  */

	let width = height.length - 1;
	let side = 0;
	let volume = side * width;
	console.log(volume);

	for (let i = 0; i < width; ) {
		if (Math.min(height[i], height[width]) * (width - i) > volume) {
			volume = Math.min(height[i], height[width]) * (width - i);
		}
		if (height[i] <= height[width]) i++;
		else width--;
	}
	return volume;

	//found this beautiful solution online, similar to mine, but much prettier

	/* let ans = 0,
		i = 0,
		j = height.length - 1;
	while (i < j) {
		ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i));
		height[i] <= height[j] ? i++ : j--;
	}
	return ans; */
};

const container = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(maxArea(container));

/* [1,1] = 1
[1,8,6,2,5,4,8,3,7] = (8-->7 = 7*7) 49
[3,9,3,4,7,2,12,6] = (9-->12 = 9*5) 45
[3,9,3,4,10,2,7,9] = (9 --> 9 = 9*6) 54 
[10,9,8,7,6,5,4,3,2,1] = () 25
*/
