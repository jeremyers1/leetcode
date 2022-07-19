var romanToInt = function (s) {
	let digit = (l) => {
		if (l === "I") return 1;
		else if (l === "V") return 5;
		else if (l === "X") return 10;
		else if (l === "L") return 50;
		else if (l === "C") return 100;
		else if (l === "D") return 500;
		else if (l === "M") return 1000;
	};

	let num = 0;
	const romanArray = s.split("");

	for (let i = 0; i < romanArray.length; i++) {
		if (digit(romanArray[i]) < digit(romanArray[i + 1])) {
			num += digit(romanArray[i + 1]) - digit(romanArray[i]);
			i++;
		} else {
			num += digit(romanArray[i]);
		}
	}

	return num;
};

console.log(romanToInt("III"));

/*
"III" = 3
"LVIII" = 58
"MCMXCIV" = 1994
*/
