var reverse = function (x) {
	let sign = 1;
	if (x < 0) sign = -1;
	const num = Number(Math.abs(x).toString().split('').reverse().join('')) * sign;
	if (num > 2147483647 || num < -2147483648) return 0;
	else return num;
};

/* alternative
const n = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
return (n > - Math.pow(2, 31) && n < Math.pow(2, 31) - 1) ? n : 0;
  */

let int = 1534236469;
console.log(reverse(int));

/* 
123=321
-123 = -321
120 = 21
1534236469 = 0; // > 32-bit returns not allowed
*/
