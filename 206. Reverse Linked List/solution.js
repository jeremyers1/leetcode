/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * Challenge: A linked list can be reversed either iteratively or recursively. Could you implement both?
 * CTCI2.9
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

function reverseList(head) {
	// simplest solution
	/*
  while (head) { 
    [head.next, reversed, head] = [reversed, head, head.next];
  }
    return reversed;
  */

	// recursive solution
	/* End of the list
if(!node) {
  return prev;
}

// Swappity swappy
const next = node.next;
node.next = prev;

// The node will be next, the prev will be node
  return reverseList(next, node); */

	// submitted solution
	let current = head;
	let temp, prev;

	while (current) {
		temp = current.next; // set current .next into temp to use for proggessing to next element
		current.next = prev; // now set current .next to previous element
		prev = current; // and set previous to current for use on next loop
		current = temp; // now progress to next element ... essentially this is slow = slow.next
	}

	return prev;
}

let arrayList = [1, 2, 3, 4, 5];
let head = createList(arrayList);
printList(head);
let reversed = reverseList(head);
printList(reversed);

/*
[1,2,3,4,5] = [5,4,3,2,1]
[1,2] = [2,1]
[] = []
*/
