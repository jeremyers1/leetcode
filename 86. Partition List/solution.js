/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * CTCI2.4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

class ListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

function partition(head, x) {
	// create two lists, adding elements to one or the other as we go
	let frontHead = new ListNode();
	let backHead = new ListNode();
	let frontList = frontHead;
	let backList = backHead;
	let current = head;
	while (current) {
		if (current.data < x) {
			frontList.next = current;
			frontList = frontList.next;
		} else {
			backList.next = current;
			backList = backList.next;
		}
		current = current.next;
	}
	// then combine two lists while skipping initial null data values
	frontList.next = backHead.next;
	backList.next = null;
	return frontHead.next;
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

let f = new ListNode(2);
let e = new ListNode(5, f);
let d = new ListNode(2, e);
let c = new ListNode(3, d);
let b = new ListNode(4, c);
let a = new ListNode(1, b);

printList(a);
partition(a, 3);
printList(a);

/*
 [1,4,3,2,5,2], 3 = [1,2,2,4,3,5]
 [2,1], 2 = [1,2]
 [3,5,8,5,10,2,1], 5 = [3,1,2,10,5,5,8] (One of many possible solutions)
*/
