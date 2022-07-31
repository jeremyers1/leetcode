var convert = function (s, numRows) {
	/* 	if (numRows === 1) return s;
	let str = [...s];
	let zz = [];
	for (let i = 0; i < s.length; ) {
		//full "columns"
		let letterCount = 0;
		let sub = [];
		while (letterCount < numRows) {
			sub.push(str[i + letterCount]);
			letterCount++;
		}
		zz.push(sub);
		i += letterCount;

		// one letter "columns"
		let index = numRows - 2;
		for (let j = 0; j < numRows - 2; j++) {
			let sub = [];
			sub[index] = str[i];
			zz.push(sub);
			index--;
			i++;
		}
	}

	// convert zz back to string
	console.log(zz);
	let zzStr = [];
	for (let w = 0; w < zz[0].length; w++) {
		for (let h = 0; h < zz.length; h++) {
			if (zz[h][w]) zzStr.push(zz[h][w]);
		}
	}
	console.log(zzStr);
	return zzStr.join(''); */

	// MINE WORKED, but here are some alternative solutions from others:

	/* 	let res = '';
	if (numRows == 1 || s.length <= numRows) return s;
	let k = 0;
	for (let i = 0; i < numRows; i++) {
		let flag = 0;
		for (let j = i; j < s.length; ) {
			res += s[j];
			if (flag == 0) {
				k = i;
				flag = 1;
			} else {
				k = numRows - i - 1;
				flag = 0;
			}
			if (k == numRows - 1) {
				k = 0;
			}

			j = j + 2 * (numRows - 1 - k);
		}
	}
	return res; */

	/* 	if (numRows === 1) {
		return s;
	}
	let arr = [];
	let arr_index = 0;
	let arr_sign = 1;
	for (let i = 0; i < numRows; i++) {
		arr.push([]);
	}
	s.split('').forEach((x, i) => {
		arr[arr_index].push(x);
		if (arr_index === arr.length - 1) {
			arr_sign = -1;
		}
		if (!arr_index) {
			arr_sign = 1;
		}
		arr_index += arr_sign;
	});
	return arr.map(x => x.join('')).join(''); */

	let result = [];
	let row = 0;
	let goingUp = false;
	for (let i = 0; i < s.length; i++) {
		result[row] = (result[row] || '') + s[i]; // append letter to active row
		if (goingUp) {
			row--;
			if (row === 0) goingUp = false; // reverse direction if goingUp and reaching top
		} else {
			row++;
			if (row === numRows - 1) goingUp = true; // reverse direction after reaching bottom
		}
	}
	return result.join('');
};

const str = 'A';
const rows = 1;
const answer = 'A';
if (convert(str, rows) === answer) console.log('Success!');

/* 
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows.

-----------------------------------------------

"PAYPALISHIRING", 3 = "PAHNAPLSIIGYIR"
"PAYPALISHIRING", 4 = "PINALSIGYAHRPI"
"A", 1 = "A"
*/
