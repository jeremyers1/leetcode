// I don't know how to create a linked list in Javascript, so this solution works on LeetCode, but not in VSCode

var removeNthFromEnd = function (head, n) {
	if (!head?.next && n === 1) return head.next;

	let [slow, fast] = [head, head];

	while (n > 0) {
		fast = fast.next;
		n--;
	}

	/* this means n was equal to the number of elements on the list and we
  need to delete the head */
	if (!fast) return slow.next;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	slow.next = slow.next.next;

	return head;
};

const head = [];
const nth = 2;
console.log(removeNthFromEnd(head, nth));

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

const head = [1,2,3,4,5], n = 2
Output: [1, 2, 3, 5]

head = [1], n = 1
Output: []

head = [1,2], n = 1
Output: [1] */
