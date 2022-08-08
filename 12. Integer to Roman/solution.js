var intToRoman = function (num) {
	const M = ['', 'M', 'MM', 'MMM'];
	const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
	const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
	const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
	numStr = num.toString().split('');

	if (numStr.length == 4) {
		return M[numStr[0]] + C[numStr[1]] + X[numStr[2]] + I[numStr[3]];
	}

	if (numStr.length == 3) {
		return C[numStr[0]] + X[numStr[1]] + I[numStr[2]];
	}

	if (numStr.length == 2) {
		return X[numStr[0]] + I[numStr[1]];
	}

	return I[numStr[0]];
};

const number = 58;
console.log(intToRoman(number));

/*
3 = III, 
58 = LVIII
1994 = MCMXCIV
*/
