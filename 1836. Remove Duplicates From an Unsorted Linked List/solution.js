/*
 * Remove duplicates from an unsorted linked list
 * PREMIUM Leetcode Only
 * CTCI2.1
 */

class ListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

function removeDups(listHead) {
	const dups = {};
	let current = listHead;
	let previous = null;
	while (current) {
		if (!dups[current.data]) {
			dups[current.data] = current.data;
			previous = current;
		} else {
			previous.next = current.next;
		}
		current = current.next;
	}
}

function printList(listHead) {
	let current = listHead;
	while (current) {
		console.log(current.data);
		current = current.next;
	}
}

let d = new ListNode('d');
let c = new ListNode('c', d);
let b = new ListNode('b', c);
let a = new ListNode('a', b);

printList(a);

let e = new ListNode('a');
d.next = e;
let f = new ListNode('b');
e.next = f;

console.log('run 2');
printList(a);

console.log('run 3');
removeDups(a);
printList(a);
