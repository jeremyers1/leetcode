/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * CTCI2.2
 * 
 * GREAT explanation found here: 
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C%2B%2B-or-Easy-Two-Pointer-Solution-w-Explanation
 *
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
 * @param {number} n
 * @return {ListNode}
 */

// class is preferred
class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function removeNthFromEnd(head, n) {
	if (!head.next && n === 1) return head.next;

	let [slow, fast] = [head, head];

	while (n > 0) {
		fast = fast.next;
		n--;
	}

	/* this means n was equal to the number of elements on the list and we
need to delete the head */
	if (!fast) return slow.next;

	// due to the while loop above, slow reaches n when fast reaches the end of the list
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	// now remove the nth element from the list
	slow.next = slow.next.next;

	return head;
}

function printList(head) {
	let current = head;
	while (current) {
		console.log(current.val);
		current = current.next;
	}
}

let e = new ListNode(5);
let d = new ListNode(4, e);
let c = new ListNode(3, d);
let b = new ListNode(2, c);
let a = new ListNode(1, b);

printList(a);
console.log('is element removed?');
removeNthFromEnd(a, 2);
printList(a);

/**
 * [1,2,3,4,5], 2 = [1,2,3,5]
 * [1], 1 = [];
 * [1,2], 1 = [1]
 */
