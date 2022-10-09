/*
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * Time Complexity: O(N). The first loop only loops through ~1/2 of N due to J updating with I. The second loop only loops through ~1/2 of N due to J being only half of N.
 * CTCI1.7
 */
var rotate = function (matrix) {
	/* Logic
  [0, 0] -> [0, 2] a
  [0, 1] -> [1, 2] b
  [0, 2] -> [2, 2] c

  [1, 0] -> [0, 1] 
  [1, 1] -> [1, 1] e 
  [1, 2] -> [2, 1] 

  [2, 0] -> [0, 0] a'
  [2, 1] -> [1, 0] b'
  [2, 2] -> [2, 0] c'
  -----------------
 Notice that the pattern reverses. a is the reverse of a', and so on. 
 So if we take it in two steps:

   col1      col2      col3
  [0, 0] -> [0, 0] -> [0, 2] a 
  [0, 1] -> [1, 0] -> [1, 2] b
  [0, 2] -> [2, 0] -> [2, 2] c

  [1, 0] -> [0, 1] 
  [1, 1] -> [1, 1] e 
  [1, 2] -> [2, 1] 

  [2, 0] -> [0, 2] -> [0, 0] a'
  [2, 1] -> [1, 2] -> [1, 0] b'
  [2, 2] -> [2, 2] -> [2, 0] c'

  So, we do col2 transposition first
  Then we do col3 swap (a with a', etc) while avoiding middle row(s)
  */
	console.log(matrix);
	let N = matrix.length;
	let count = 0;
	//Do transposition first
	for (let i = 0; i < N; i++) {
		// make j=i so we don't undo previous work
		for (let j = i; j < N; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
			count++;
		}
	}

	//Then swap while avoiding middle row(s)
	/* 	for (let i = 0; i < N; i++) {
		// only do half to avoid middle columns
		for (let j = 0; j < Math.floor(N / 2); j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[i][N - 1 - j];
			matrix[i][N - 1 - j] = temp;
			count++;
		} */

	console.log(matrix);
	// BETTER: reverse each row:
	for (let i = 0; i < N; i++) {
		// only do half to avoid middle columns
		matrix[i].reverse();
		count++;
	}

	console.log(count);
	return matrix;
};

const mat = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
];
console.log(rotate(mat));

/*
[[1,2,3],[4,5,6],[7,8,9]] = [[7,4,1],[8,5,2],[9,6,3]]
[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/
