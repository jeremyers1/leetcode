var mySqrt = function (x) {
	if (x === 1) return 1;

	let end = Math.floor(x / 2);
	while (end * end > x) {
		let temp = Math.floor(end / 2);
		if (temp * temp > x) {
			end = temp;
		} else {
			end--;
		}
	}
	return end; 
};

let num = 81;
console.log(mySqrt(num));

/* according to LeetCode, this is faster... but why?

    let num = 46340; // taking highest possible sqrt of max Int
    if(num*num < x) return num;
    while(num*num > x) {
        num = Math.floor(num/2);
    }
    while( (num+1)*(num+1) <= x) {
        num += 1;
    }
    return num;

  */

/* Decimal is truncated...
4 = 2
8 = 2
0 = 0
1 = 1
*/
