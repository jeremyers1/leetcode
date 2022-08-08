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

	/* Another approach:
  let res = "";
  while (num > 0) {
    if (num >= 1000) {
      res += "M";
      num -= 1000;
    }else if (num >= 900) {
      res += "CM";
      num -= 900;
    }else if (num >= 500) {
      res += "D";
      num -= 500;
    }else if (num >= 400) {
      res += "CD";
      num -= 400;
    }else if (num >= 100) {
      res += "C";
      num -= 100;
    }else if (num >= 90) {
      res += "XC";
      num -= 90;
    }else if (num >= 50) {
      res += "L";
      num -= 50;
    }else if (num >= 40) {
      res += "XL";
      num -= 40;
    }else if (num >= 10) {
      res += "X";
      num -= 10;
    }else if (num >= 9) {
      res += "IX";
      num -= 9;
    }else if (num >= 5) {
      res += "V";
      num -= 5;
    }else if (num >= 4) {
      res += "IV";
      num -= 4;
    }else if (num >= 1) {
      res += "I";
      num -= 1;
    }
  }
    return res;
  */

	/* I LOVE this one ... very similar to mine, but much more elegant
    //create the list..
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    //return solution with this procedure...
    return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];
  */
};

const number = 58;
console.log(intToRoman(number));

/*
3 = III, 
58 = LVIII
1994 = MCMXCIV
*/
