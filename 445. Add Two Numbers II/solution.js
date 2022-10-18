/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * EXTRA: Could you solve it without reversing the input lists?
 * CTCI2.5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function createList(arr) {
	let head, temp;
	for (let i = arr.length - 1; i >= 0; i--) {
		if (!head) {
			head = new ListNode(arr[i]);
		} else {
			temp = new ListNode(arr[i]);
			temp.next = head;
			head = temp;
		}
	}
	return head;
}

function printList(head) {
	let current = head;
	let list = [];
	while (current) {
		list.push(current.val);
		current = current.next;
	}
	console.log(list);
}

function listToStack(list) {
	let stack = [];
	while (list) {
		stack.push(list.val);
		list = list.next;
	}
	return stack;
}

/* The following worked (with functions above), but performed poorly on Leetcode 
function addTwoNumbers(l1, l2) {
	// put in stacks
	let l1stack = listToStack(l1);
	let l2stack = listToStack(l2);
	console.log(l1stack, l2stack);

	// add from top of stack
	let sum = 0;
	let carry = 0;
	let l3array = [];

	while (l1stack.length > 0 || l2stack.length > 0 || sum > 0) {
		if (l1stack.length > 0) {
			sum += l1stack.pop();
		}

		if (l2stack.length > 0) {
			sum += l2stack.pop();
		}

		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		}
		l3array.unshift(sum);
		sum = carry;
		carry = 0;
	}

	return createList(l3array);
} */

// alternate solution from https://leetcode.com/problems/add-two-numbers-ii/discuss/367026/Javascript-O(n)-solution-using-stack.
// very similar to mine, but fewer steps
function addTwoNumbers(l1, l2) {
	let stack1 = [];
	let stack2 = [];
	while (l1) {
		stack1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		stack2.push(l2.val);
		l2 = l2.next;
	}
	let l3 = new ListNode(0);
	while (stack1.length || stack2.length) {
		let sum = 0;
		if (stack1.length) sum += stack1.pop();
		if (stack2.length) sum += stack2.pop();
		sum += l3.val;
		l3.val = sum % 10;
		let head = new ListNode(Math.floor(sum / 10));
		head.next = l3;
		l3 = head;
	}
	return l3.val === 0 ? l3.next : l3;
}

let l1array = [7, 2, 4, 3];
let l2array = [5, 6, 4];
let l1 = createList(l1array);
let l2 = createList(l2array);
printList(l1);
printList(l2);
printList(addTwoNumbers(l1, l2));

/* 
l1 = [7,2,4,3], l2 = [5,6,4] => [7,8,0,7]
l1 = [2,4,3], l2 = [5,6,4] =>  [8,0,7]
*/
