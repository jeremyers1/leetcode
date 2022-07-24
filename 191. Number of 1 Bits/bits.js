var hammingWeight = function (n) {
	const str = n.toString(2).match(/1/g);
	if (str) return str.length;
	else return 0;
};

const num = 00000000000000000000000000000000;
console.log(hammingWeight(num));

/*
00000000000000000000000000001011 = 3
00000000000000000000000010000000 = 1
11111111111111111111111111111101 = 31
00000000000000000000000000000000 = 0
*/
