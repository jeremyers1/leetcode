var solution = function (isBadVersion) {
	return function (n) {
		/*     //Iterative Approach - O(n)
    let first = 1; 
    let last = n;
    while (first <= last) {
      if (isBadVersion(first)) return first;
      else first++;
    } */

		// Binary Approach - O(logn)
		let first = 1;
		let last = n;
		let version = -1;
		while (first <= last) {
			let mid = Math.floor((first + last) / 2);
			if (isBadVersion(mid)) {
				//isBadVersion returns TRUE if bad
				version = mid;
				last = mid - 1;
			} else first = mid + 1;
		}
		return version;
	};
};

/* 
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. 
Implement a function to find the first bad version. You should minimize the number of calls to the API.

1 <= bad <= n <= 231 - 1


n = 5, bad = 4 = Output: 4
n = 1, bad = 1 = Output: 1
*/
