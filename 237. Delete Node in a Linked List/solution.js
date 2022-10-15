/**
 * There is a singly-linked list head and we want to delete a node node in it.
 * You are given the node to be deleted node. You will not be given access to the first node of head.
 * All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
 * Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
 *
 * The value of the given node should not exist in the linked list.
 * The number of nodes in the linked list should decrease by one.
 * All the values before node should be in the same order.
 * All the values after node should be in the same order.
 *
 * CTCI2.3: 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

class ListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

function printList(head) {
	let current = head;
	let list = [];
	while (current) {
		list.push(current.data);
		current = current.next;
	}
	console.log(list);
}

function deleteNode(node) {
	/* 	let current = a;
	let previous = null;
	while (current && current.data != node) {
		previous = current;
		current = current.next;
	}
	previous.next = current.next; */

	node.data = node.next.data;
	node.next = node.next.next;
}

let d = new ListNode(9);
let c = new ListNode(1, d);
let b = new ListNode(5, c);
let a = new ListNode(4, b);

printList(a);
deleteNode(b);
printList(a);

/**
 * [4,5,1,9], 5 = [4,1,9]
 * [4,5,1,9], 1 = [4,5,9]
 */
