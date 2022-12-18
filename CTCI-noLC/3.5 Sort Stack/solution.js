/**
 * Write a program to sort a stack such that the smallest items are on top.
 * You can use a tempoary stack, but may not copy the elements into any other data structure (such as an array).
 * Use push, pop, peek, and isEmpty
 */

class Stack {
	constructor() {
		this.stack = [];
	}

	push(x) {
		if (this.stack.length === 0) {
			this.stack.push(x);
			return;
		}

		let temp = [];
		while (this.stack[this.stack.length - 1] < x) {
			temp.push(this.stack.pop());
		}
		this.stack.push(x);
		while (temp.length > 0) {
			this.stack.push(temp.pop());
		}
	}

	pop() {
		return this.stack.pop();
	}

	isEmpty() {
		return this.stack.length === 0;
	}
}

/* TEST */
var s = new Stack();
s.push(99);
s.push(4);
s.push(1);
s.push(6);
s.push(8);
s.push(10);
s.push(22);
s.push(3);
s.push(72);

while (!s.isEmpty()) {
	console.log(s.pop());
}

// Test cases for CTCI 3.5 from a friend online (but I have not implemented tests)
/* test("givenInputsWithEqualValueThenQueueIsCorrectlySorted", async function() {
  let ss = new index.SortedStack();
  const test1 = [1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5]
  const inputs = [4, 5, 2, 4, 4, 2, 5, 3, 4, 1, 2]
  inputs.forEach( x => ss.push(x))

  test1.forEach( tester => {
    expect(tester).toBe(ss.pop())
  })

});

test("givenSomeInsertsThenSizeIsCorrect", async function() {
  let testRuns = [
    [1],
    [40,20],
    [7,13,6],
    [2,5,7,8],
    [5,10,15,20,25],
    [1,40,20,7,13,6,2,5,7,8,5,10,15,20,25]
  ]
  
  testRuns.forEach( tst => {
    let ss = new index.SortedStack();
    tst.forEach( x => ss.push(x))
    expect(ss.size).toBe(tst.length)
  })
});

test("givenAnEmptyStackThenSizeIsZeroAndQueueIsEmpty", async function() {
  let ss = new index.SortedStack();
  expect(ss.isEmpty()).toBe(true)
  expect(ss.size).toBe(0)
});

test("givenMixedInputsThenQueueAscends", async function() {
  let ss = new index.SortedStack();
  const inputs = [1, 3, 5, 4, 2]
  inputs.forEach( x => ss.push(x))

  const test1 = [1, 2, 3, 4, 5]

  test1.forEach( tester => {
    let popd = ss.pop()
    expect(tester).toBe(popd)
  })

});

test("givenDescendingInputThenQueueAscends", async function() {
  let ss = new index.SortedStack();
  const test1 = [1, 2, 3, 4, 5]
  const inputs = [5, 2, 3, 4, 1]
  inputs.forEach( x => ss.push(x))

  test1.forEach( tester => {
    expect(tester).toBe(ss.pop())
  })
});

test("givenAscendingInputsThenQueueIsSorted", async function() {
  let ss = new index.SortedStack();
  const test1 = [1, 2, 3, 4, 5]
  const inputs = [1, 2, 3, 4, 5]
  inputs.forEach( x => ss.push(x))

  test1.forEach( tester => {
    expect(tester).toBe(ss.pop())
  })
}); */
