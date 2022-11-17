/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 * Challenge: Could you do it in O(N) time and O(1) space?
 * CTCI2.6
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
 * @return {boolean}
 */

/* Possible Approaches
1. Use an incremental hashmap and then check to make sure all items (except the center on odd length lists) are even ... EXCEPT ... aabbcc would return true ... so this won't work
2. Put items into a queue/stack array - then pop() end and shift() front as long as they agree. 
3. Convert list to Doubly-linked list, then start at front and end and compare toward middle
4. Use two pointers (fast and slow) to find center of list ... then work from start and end toward middle (but how to get .prev on second half of list?)
Only #3 and #4 use O(1) additional space
*/

class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

class DLListNode extends ListNode {
	constructor(val, next = null, prev = null) {
		super(val, next);
		this.prev = prev;
	}
}

/* as a function??? would this work to "extend" ListNode function???
function DLListNode(val, next = null, prev = null) {
  ListNode(val, next);
  this.prev = prev;
}
*/

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

function isPalindrome(head) {
	// Simplest Approach
	/*  let arr=[];
  while (head){
      arr.push(head.val);
      head=head.next;
      }
  return arr.slice().reverse().join()==arr.join() ? true : false; */

	// Array approach
	/* 	let valuesFound = [];
	while (head) {
		valuesFound.push(head.val);
		head = head.next;
	}

	// Check if the list of values are a palindrome
	let left = 0;
	let right = valuesFound.length - 1;
	while (left <= right) {
		if (valuesFound[left] !== valuesFound[right]) {
			return false;
		}
		left++, right--;
	}

	return true; */

	// 2 String Approach
	let string1 = '',
		string2 = '';
	let node = head;

	while (node != null) {
		string1 = `${string1}${node.val}`;
		string2 = `${node.val}${string2}`;
		node = node.next;
	}
	return string1 === string2;

	/* Approach #4 - This is the only one that uses O(n) time and O(1) additional space
  
  let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	// use while loop to point all .next to the previous list element
	let prev = slow;
	let temp;
	slow = slow.next;
	prev.next = null;
	while (slow) {
		temp = slow.next; // set current .next into temp to use for progessing to next element
		slow.next = prev; // now set current .next to previous element
		prev = slow; // and set previous to current for use on next loop
		slow = temp; // now progress to next element ... essentially this is slow = slow.next
	}

	// reset fast to head and slow to end of list and work way toward center
	fast = head;
	slow = prev;
	while (slow) {
		if (fast.val !== slow.val) {
			return false;
		} else {
			fast = fast.next;
			slow = slow.next;
		}
	}
	return true; */
}

let palindrome = [1, 2, 2, 1];
let head = createList(palindrome);
printList(head);
console.log(isPalindrome(head));

/*
[1,2,2,1] = true
[1,2] = false
[1,2,3,2,1] = true
*/
