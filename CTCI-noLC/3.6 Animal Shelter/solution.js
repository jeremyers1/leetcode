/**
 * An animal shelter, which holds only cats and dogs, operates on a FIFO basis.
 * People must either adopt the "oldest" animal in the shelter, or they can choose the "oldest" cat or dog.
 * Emplement enqueue, dequeueAny, dequeueDog, DequeueCat using any built-in LinkedList Data Structure
 */

/* class Animal {
	constructor(type, name) {
		this.type = type;
		this.name = name;
	}
} */

class AnimalShelter {
	constructor() {
		this.queue = [];
	}

	enqueue(x) {
		this.queue.push(x);
	}

	dequeueAny() {
		let popQueue = [];
		while (this.queue.length > 0) {
			popQueue.push(this.queue.pop());
		}
		let ret = popQueue.pop();

		while (popQueue.length > 0) {
			this.queue.push(popQueue.pop());
		}
		return ret;
	}

	dequeueCat() {
		let index;
		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i].type === 'cat') {
				index = i;
				break;
			}
			return 'No more cats available!';
		}

		let popQueue = [];
		while (this.queue.length > index) {
			popQueue.push(this.queue.pop());
		}
		let ret = popQueue.pop();

		while (popQueue.length > 0) {
			this.queue.push(popQueue.pop());
		}
		return ret;
	}

	dequeueDog() {
		let index;
		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i].type === 'dog') {
				index = i;
				break;
			}
			return 'No more dogs available!';
		}

		let popQueue = [];
		while (this.queue.length > index) {
			popQueue.push(this.queue.pop());
		}
		let ret = popQueue.pop();

		while (popQueue.length > 0) {
			this.queue.push(popQueue.pop());
		}
		return ret;
	}
}

/* TESTS */
var a = new AnimalShelter();
a.enqueue({ type: 'dog', name: 'machi' });
a.enqueue({ type: 'dog', name: 'daisy' });
a.enqueue({ type: 'cat', name: 'peanuts' });
a.enqueue({ type: 'dog', name: 'miso' });
a.enqueue({ type: 'cat', name: 'dada' });
a.enqueue({ type: 'cat', name: 'xiaoxiao' });
console.log(a);
console.log(a.dequeueAny(), 'dog machi');

console.log(a.dequeueCat(), 'cat peanuts');

console.log(a.dequeueAny(), 'dog daisy');

console.log(a.dequeueAny(), 'dog miso');

console.log(a.dequeueAny(), 'dog miso');

console.log(a.dequeueDog());

// Test cases for CTCI 3.6 from a friend, but I didn't implement tests...
/* test("givenSomeCatsAndEarlierDogsThenAllDogsDequeueBeforeCats", async function() {
  let shelter = new index.AnimalShelter()
  let start = 4
  let howMany = 5
  let end = start + howMany 

  // enqueue some cats first
  for(let i=start; i<end; i++) {
    let ct = new index.Cat(i)
    shelter.enqueue(ct)
  }
  // enqueue and dequeue one earlier dog
  let index1 = 0
  let index2 = 2
  shelter.enqueue(new index.Dog(index1))
  shelter.enqueue(new index.Dog(index2))
  let fo = shelter.dequeueAny()
  expect(fo.data).toBe(index1)
  fo = shelter.dequeueAny()
  expect(fo.data).toBe(index2)
  fo = shelter.dequeueAny()
  expect(fo.constructor).toBe(index.Cat)
  expect(fo.data).toBe(start)
  
  // expect(co.constructor).toBe(Dog)
});

test("givenOneCatAndOneDogTheEarlierIsDequeued", async function() {
  // better would be to also check that an earlier cat dequeues first
  // currently we can't know that dogs don't automatically dequeue first 
  let shelter = new index.AnimalShelter()
  let catId = 13

  // enqueue a cat
  let ct = new index.Cat(catId)
  shelter.enqueue(ct)
  // enqueue an earlier dog
  let dgIndx = catId - 4
  let dg = new index.Dog(dgIndx)
  shelter.enqueue(dg)

  expect(shelter.size).toBe(2)

  let fo = shelter.dequeueAny()
  
  expect(shelter.size).toBe(1)
  expect(fo.data).toBe(dgIndx)
});

test("givenSomeCatsAndAnEarlierDogThenDequeueAnyReturnsTheDog", async function() {
  let shelter = new index.AnimalShelter()
  let start = 3
  let howMany = 5
  let end = start + howMany 

  // enqueue the cats first
  for(let i=start; i<end; i++) {
    let ct = new index.Cat(i)
    shelter.enqueue(ct)
  }
  // enqueue the earlier dog
  let dgIndx = -10
  let dg = new index.Dog(dgIndx)
  shelter.enqueue(dg)

  let fo = shelter.dequeueAny()
  expect(fo.data).toBe(dgIndx)
});

test("given5DogsWhen2AreDequeuedThenSizeIs3", async function() {
  let shelter = new index.AnimalShelter()
  let howMany = 5
  
  expect(shelter.isEmpty).toBe(true)
  expect(shelter.size).toBe(0)
    
  for(let i=0; i<howMany; i++) {
    let dg = new index.Dog(i)
    shelter.enqueue(dg)
  }
  expect(shelter.isEmpty).toBe(false)
  expect(shelter.size).toBe(howMany)

  shelter.dequeueDog()
  shelter.dequeueDog()
  expect(shelter.isEmpty).toBe(false)
  expect(shelter.size).toBe(howMany-2)

});

test("given5DogsThenShelterSizeIs5", async function() {
  let shelter = new index.AnimalShelter()
  let howMany = 5
  
  expect(shelter.isEmpty).toBe(true)
  expect(shelter.size).toBe(0)
  
  for(let i=0; i<howMany; i++) {
    let dg = new index.Dog(i)
    shelter.enqueue(dg)
  }
  expect(shelter.isEmpty).toBe(false)
  expect(shelter.size).toBe(howMany)
  
});

test("givenOneDogThenDequeueReturnsExpectedDog", async function() {
  let shelter = new index.AnimalShelter()
  let idVal = 0
  let dg = new index.Dog(idVal)
  shelter.enqueue(dg)
  
  let dqd0 = shelter.dequeueDog()
  expect(dqd0.data).toBe(idVal)


  idVal = 13
  dg = new index.Dog(idVal)
  shelter.enqueue(dg)
  let dqd13 = shelter.dequeueDog()
  expect(dqd13.data).toBe(idVal)  


  idVal = -22
  dg = new index.Dog(idVal)
  shelter.enqueue(dg)
  
  let next = shelter.dequeueDog()
  expect(next.data).toBe(idVal)    
});

test("givenQueueOfDogsThenTheyAreDequeuedFIFO", async function() {
  let shelter = new index.AnimalShelter()
  let start = 16
  let howMany = 6
  let end = start + howMany 
  
  for(let i=start; i<end; i++) {
    let dg = new index.Dog(i)
    shelter.enqueue(dg)
  }
  
  for(let j=start; j<end; j++) {
    let dqd = shelter.dequeueDog()
    expect(dqd.data).toBe(j)
  }

}); */
