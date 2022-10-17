/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Example: [2,4,3] (342) + [5,6,4] (465) = [7,0,8] (807)
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

/* my first attempt does not work for large numbers due to size limits on math operations
function convertToNum(list) {
	let num = [];
	let current = list;
	while (current) {
		num.unshift(current.val);
		current = current.next;
	}
	console.log(num);
	return parseInt(num.join(''));
}

function addTwoNumbers(l1, l2) {
	// convert linked lists to a number and add
	let added = convertToNum(l1) + convertToNum(l2);
	console.log(added);
	// use modulo to create new list
	let l3 = new ListNode(added % 10);
	added = Math.floor(added * 0.1);
	//console.log(added);
	let tail = l3;
	while (added > 0) {
		let temp = new ListNode(added % 10);
		tail.next = temp;
		tail = temp;
		added = Math.floor(added * 0.1);
	}
	return l3;
}
*/
// NOTE: Don't need to reverse, add, then re-reverse.
// The first numbers in the list are in 1s position, 2nd in 10s, etc. So just add (and carry 1 if needed)
// then push number to start of added list in first position, which is the 1s position
function addTwoNumbers(l1, l2) {
	let l3 = new ListNode(0);
	let head = l3;
	let sum = 0;
	let carry = 0;

	while (l1 || l2 || sum > 0) {
		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}
		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		}

		head.next = new ListNode(sum);
		head = head.next;

		sum = carry;
		carry = 0;
	}
	return l3.next;
}

let l1array = [7, 2, 4, 3];
let l2array = [5, 6, 4];
let l1 = createList(l1array);
let l2 = createList(l2array);
printList(l1);
printList(l2);
printList(addTwoNumbers(l1, l2));

/*
l1 = [2,4,3], l2 = [5,6,4] => [7,0,8]
l1 = [0], l2 = [0] => [0]
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] => [8,9,9,9,0,0,0,1]
l1 = [2,4,9], l2 = [5,6,4,9] => [7,0,4,0,1]
l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], l2 = [5,6,4] => [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] *** doesn't work with mine. Number is too large for modulo
 */
