/**
 * 
You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity.

Implement the DinnerPlates class:

DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks capacity.
void push(int val) Pushes the given integer val into the leftmost stack with a size less than capacity.
int pop() Returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns -1 if all the stacks are empty.
int popAtStack(int index) Returns the value at the top of the stack with the given index and removes it from that stack or returns -1 if the stack with that given index is empty.

CTCI3.3
 */

/**
 * @param {number} capacity
 */
var DinnerPlates = function (capacity) {
	this.stack = [];
	this.capacity = capacity;
	this.full = true;
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
	/* 	// console.log('stacks: ' + this.stack.length);
	for (let i = 0; i < this.stack.length; i++) {
		if (this.stack[i].length === this.capacity) {
			//     console.log('stack ' + i + ' is full.');
		} else if (this.stack[i].length < this.capacity) {
			//     console.log('stack ' + i + ' is not full so adding ' + val + ' to stack.');
			this.stack[i].push(val);
			return;
		}
	}
	this.stack.push([val]); */
	while (this.stack[this.stack.length - 1] === null) {
		this.stack.pop();
	}

	if (this.full) {
		this.stack.push(val);
		return;
	} else {
		for (let i = 0; i < this.stack.length; i++) {
			if (!this.stack[i]) {
				this.stack[i] = val;
				break;
			} else if (i === this.stack.length - 1) {
				this.stack.push(val);
				this.full = true;
				return;
			}
		}
	}

	// TODO: check if all stacks are full now ...
	// with boolean check, requires iteration through entire stack
	// can I just keep count of # of plates and see if it matches stack.length / capacity?
	for (let i = 0; i < this.stack.length; i++) {
		if (!this.stack[i]) return; // remains !this.full
	}
	this.full = true; // reached end of loop so this.full
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
	/* 	let temp = -1;
	if (this.stack === undefined || this.stack.length < 1) {
		//temp = -1;
	} else if (this.stack[this.stack.length - 1].length > 0) {
		temp = this.stack[this.stack.length - 1].pop();
	} else {
		for (let i = this.stack.length - 2; i >= 0; i--) {
			if (this.stack[i].length > 0) {
				temp = this.stack[i].pop();
				break;
			} else if (this.stack[i] === undefined) {
				//temp = -1;
				break;
			}
		}
	}

	if (this.stack[this.stack.length - 1] === undefined || this.stack[this.stack.length - 1].length < 1) {
		this.stack = this.stack.slice(0, this.stack.length - 1);
	}

	console.log(temp);
	return temp; */

	while (this.stack[this.stack.length - 1] === null) {
		this.stack.pop();
	}

	let temp = -1;
	if (this.stack.length < 1) {
		temp = -1;
	} else {
		temp = this.stack.pop();
	}

	console.log(temp); // not needed for Leetcode
	return temp;
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
	/* 	if (!this.stack[index] || this.stack[index].length === 0) return -1;

	let temp = this.stack[index].pop();

	if (this.stack[this.stack.length - 1].length === 0) {
		this.stack = this.stack.slice(0, this.stack.length - 1);
	}
	console.log(temp);
	return temp; */

	// check if this is the end stack, if so, just pop()

	while (this.stack[this.stack.length - 1] === null) {
		this.stack.pop();
	}

	let temp = -1;
	let stackIndexTop = index * this.capacity + this.capacity - 1;
	let stackIndexBottom = index * this.capacity;

	if (stackIndexTop > this.stack.length) {
		console.log(temp); // not needed for LeetCode
		return temp;
	} else if (stackIndexTop === this.stack.length - 1) {
		temp = this.stack.pop();
		console.log(temp); // not needed for LeetCode
		return temp;
	}

	for (let i = stackIndexTop; i >= stackIndexBottom; i--) {
		if (this.stack[i]) {
			temp = this.stack[i];
			this.stack[i] = null;
			this.full = false;
			break;
		}
	}
	console.log(temp); // not needed for Leetcode
	return temp;
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */

/* Works: 1/15
let D = new DinnerPlates(2); // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5); // The stacks are now:  2  4
//                                 1  3  5
//                                 ﹈ ﹈ ﹈
console.log(D);
D.popAtStack(0); // Returns 2.  The stacks are now:     4
//                                                   1  3  5
//                                                   ﹈ ﹈ ﹈
D.push(20); // The stacks are now: 20  4
//                                  1  3  5
//                                  ﹈ ﹈ ﹈
D.push(21); // The stacks are now: 20  4 21
//                                  1  3  5
//                                  ﹈ ﹈ ﹈
console.log(D);
D.popAtStack(0); // Returns 20.  The stacks are now:     4 21
//                                                    1  3  5
//                                                    ﹈ ﹈ ﹈
D.popAtStack(2); // Returns 21.  The stacks are now:     4
//                                                    1  3  5
//                                                    ﹈ ﹈ ﹈
console.log(D);
D.pop(); // Returns 5.  The stacks are now:      4
//                                    							       1  3
//                                            						 ﹈ ﹈
D.pop(); // Returns 4.  The stacks are now:   1  3
//                                                         ﹈ ﹈
D.pop(); // Returns 3.  The stacks are now:   1
//                                                         ﹈
console.log(D);
D.pop(); // Returns 1.  There are now no stacks.
D.pop(); // Returns -1.  There are still no stacks.
*/

/* works 9/15  
let D = new DinnerPlates(2);
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);
console.log(D);
D.popAtStack(0);
console.log(D);
D.push(20);
D.push(21);
console.log(D);
D.popAtStack(1);
console.log(D);
D.popAtStack(1);
console.log(D);
D.pop();
D.pop();
D.pop();
D.pop();
D.pop();
*/

/* Works:
let D = new DinnerPlates(1);
D.push(1);
D.push(2);
D.push(3);
console.log(D);
D.popAtStack(1);
D.pop();
D.pop(); */

/* Works: 13/15 
let D = new DinnerPlates(2);
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(7);
console.log(D);
D.popAtStack(8);
console.log(D);
D.push(20);
D.push(21);
console.log(D);
D.popAtStack(0);
D.popAtStack(2);
console.log(D);
D.pop();
D.pop();
D.pop();
D.pop();
D.pop();
*/

/* Works 14/15
let D = new DinnerPlates(2);
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);
console.log(D);
D.popAtStack(1);
D.popAtStack(1);
D.popAtStack(0);
console.log(D);
D.pop();
D.pop();
console.log(D);
D.pop();
console.log(D);
D.pop();
D.pop();
*/

/* With Old code Leetcode time limit is exceed when there are 100,000 .push followed by 100,000 .pop ... probably due to splice() */

let D = new DinnerPlates(2);
D.push(472);
D.push(106);
D.push(497);
D.push(498);
D.push(73);
D.push(115);
D.push(437);
D.push(461);
console.log(D);
D.popAtStack(3); // 461
D.popAtStack(3); // 437
console.log(D);
D.popAtStack(1); // 498
console.log(D);
D.popAtStack(3); // -1
console.log(D);
D.popAtStack(0); // 106
console.log(D);
D.popAtStack(2); //115
D.popAtStack(2); // 73
console.log(D);
D.popAtStack(1); // 497
console.log(D);
D.popAtStack(1); // -1
console.log(D);
D.popAtStack(3); // -1
console.log(D);
console.log('here');
D.push(197);
console.log(D);
D.push(239);
D.push(129);
D.push(449);
D.push(460);
D.push(240);
D.push(386);
D.push(343);
console.log(D);
D.pop(); // 343
D.pop(); // 386
D.pop(); // 240
D.pop(); // 460
D.pop(); // 449
D.pop(); // 129
D.pop(); // 239
D.pop(); // 197
D.pop(); // 472
D.pop(); // -1
