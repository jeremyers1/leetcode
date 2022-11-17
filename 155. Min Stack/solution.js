/**
 * 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

CTCI3.2 Stack Min
 */

/**
 * @constructor
 */
var MinStack = function () {
	this.minStack = [];
	this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.minStack.push(val);

	if (this.min.length === 0) {
		this.min.push(val);
	} else if (val <= this.min[this.min.length - 1]) {
		this.min.push(val);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	if (this.top() === this.min[this.min.length - 1]) {
		this.min.pop();
	}

	this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.minStack[this.minStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2

// REWRITE AS A CLASS

class MinStack2 {
	constructor() {
		this.minStack = [];
		this.min = [];
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		this.minStack.push(val);

		if (this.min.length === 0) {
			this.min.push(val);
		} else if (val <= this.min[this.min.length - 1]) {
			this.min.push(val);
		}
	}

	/**
	 * @return {void}
	 */
	pop() {
		if (this.top() === this.min[this.min.length - 1]) {
			this.min.pop();
		}

		this.minStack.pop();
	}

	/**
	 * @return {number}
	 */
	top() {
		return this.minStack[this.minStack.length - 1];
	}

	/**
	 * @return {number}
	 */
	getMin() {
		return this.min[this.min.length - 1];
	}
}

let minStack2 = new MinStack2();
minStack2.push(-2);
minStack2.push(0);
minStack2.push(-3);
console.log(minStack2.getMin()); // return -3
minStack2.pop();
console.log(minStack2.top()); // return 0
console.log(minStack2.getMin()); // return -2
