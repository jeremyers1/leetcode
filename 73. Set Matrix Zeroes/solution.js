/*
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 * Time: My solution is slow, but most other submitted solutions used extra space with additional arrays, sets, or maps. Mine is "in place" as required.
 * So, my time is: O(2R) + O(2C) + O(3RC) = O(5RC) = O(RC) = R(N)
 * CTCI1.8
 */

var setZeroes = function (matrix) {
	// first just check if row and column headers have a 0 (avoids turning ALL cells to 0)
	let rowHeaderZero = false;
	let colHeaderZero = false;
	for (let r = 0; r < matrix.length; r++) {
		if (matrix[r][0] === 0) {
			rowHeaderZero = true;
			break;
		}
	}
	for (let c = 0; c < matrix[0].length; c++) {
		if (matrix[0][c] === 0) {
			colHeaderZero = true;
			break;
		}
	}

	// iterate to find zeros and set row and column header to x
	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[0].length; c++) {
			if (matrix[r][c] === 0) {
				matrix[r][0] = 'x';
				matrix[0][c] = 'x';
			}
		}
	}

	// iterate through row headers to set rows to 0
	for (let r = 1; r < matrix.length; r++) {
		if (matrix[r][0] === 'x') {
			for (let c = 0; c < matrix[0].length; c++) {
				matrix[r][c] = 0;
			}
		}
	}

	// iterate through column header to set columns to 0
	for (let c = 1; c < matrix[0].length; c++) {
		if (matrix[0][c] === 'x') {
			for (let r = 0; r < matrix.length; r++) {
				matrix[r][c] = 0;
			}
		}
	}

	// change x's to 0
	if (rowHeaderZero) {
		for (let r = 0; r < matrix.length; r++) {
			matrix[r][0] = 0;
		}
	}

	if (colHeaderZero) {
		for (let c = 0; c < matrix[0].length; c++) {
			matrix[0][c] = 0;
		}
	}

	return matrix;
};

const mat = [
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5],
];
console.log(setZeroes(mat));

/*
[[1,1,1],[1,0,1],[1,1,1]] = [[1,0,1],[0,0,0],[1,0,1]]
[[0,1,2,0],[3,4,5,2],[1,3,1,5]] = [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
[[0,1,2,0],[3,4,5,2],[1,3,1,5]] = [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
[[0,1,2,0],[3,4,5,2],[1,3,1,5]] = [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
[[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]] = [[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
*/
