/*
 * Remove duplicates from an unsorted linked list
 * PREMIUM Leetcode Only - on this problem, it is for ALL duplicates ... so if 3 is on there twice, BOTH 3s get removed
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

	/* Removes 2nd++ duplicates, but not first
	 let previous = null;
	 while (current) {
		if (!dups[current.data]) {
			dups[current.data] = current.data;
			previous = current;
		} else {
			previous.next = current.next;
		}
		current = current.next;
	} */


	while (current) {
		dups[current.data] ? dups[current.data]++ : (dups[current.data] = 1);
		current = current.next;
	}

	// reset current
	current = listHead;
	let previous = new ListNode(0, current);
	// find new head
	while (current) {
		if (dups[current.data] === 1) {
			head = current;
			break;
		}
		previous = current;
		current = current.next;
	}

	// now move on from new head to find other duplicates
	while (current) {
		if (dups[current.data] > 1) {
			previous.next = current.next;
		} else {
			previous = current;
		}
		current = current.next;
	}
	return head;
}

function printList(listHead) {
	let current = listHead;
	let print = [];
	while (current) {
		print.push(current.data);
		current = current.next;
	}
	console.log(print);
}

let f = new ListNode('b');
let e = new ListNode('a', f);
let d = new ListNode('d', e);
let c = new ListNode('c', d);
let b = new ListNode('b', c);
let a = new ListNode('a', b);

printList(a);

console.log('remove dups?');
// printList(removeDups(a));
printList(removeDups(a));
