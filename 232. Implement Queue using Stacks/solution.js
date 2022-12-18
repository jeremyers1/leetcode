/**
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

CTCI3.4

*/

var MyQueue = function () {
	this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	let popQueue = [];
	while (this.queue.length > 0) {
		popQueue.push(this.queue.pop());
	}
	let ret = popQueue.pop();

	while (popQueue.length > 0) {
		this.queue.push(popQueue.pop());
	}
	return ret;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.queue.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj);
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.pop());
console.log(obj);
console.log(obj.empty());
