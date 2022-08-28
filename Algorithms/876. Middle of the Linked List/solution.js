// I'm not sure how to create a linked list in Javascript...

var middleNode = function (head) {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
};

let head = [1, 2, 3, 4, 5];
console.log(middleNode(head));

/* 
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

head = [1,2,3,4,5]
Output: [3,4,5]

[1,2,3,4,5,6]
Output: [4,5,6]
 */
