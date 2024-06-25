class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if (this.queue.length < this.limit) {
      this.queue.push(item)
    } else {
      throw new Error("Queue is full")
    }
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift()
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0]
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    return this.queue.length === 0
  }

  // return true if queue is full, otherwise false
  isFull() {
    return this.queue.length === this.limit

  }

  // return number of items in queue
  size() {
    return this.queue.length
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {
    // if (!this.queue.includes(target)) {
    //   return -1
    // not necessary - indexOf - will return -1 by default if not present
  
    return this.queue.indexOf(target)

  }

  // print contents of queue: do not return the queue itself!
  print() {
    this.queue.forEach((element)=> console.log(element))
    
  }
}

if (require.main === module) {
  // add your own tests in here
  const queue = new Queue()
  const emptyque = new Queue()

  for (i = 1; i <= 10; i++) {
    queue.enqueue(i)
  }
  console.log(queue)
  // queue.enqueue(11)

  // console.log("")
  // console.log("testing dequeue")
  // console.log(queue.dequeue())
  // console.log(queue)
  // console.log(emptyque.dequeue())

  console.log("")
  console.log("testing peek")
  console.log(queue)
  console.log(queue.peek())
  console.log(queue)
  console.log(emptyque.peek())

  console.log("")
  console.log("testing isempty")
  console.log(queue.isEmpty())
  console.log(emptyque.isEmpty())

  console.log("")
  console.log("testing isFull")
  console.log(queue.isFull())
  console.log(emptyque.isFull())

  console.log("")
  console.log("testing search")
  console.log(queue.search(5))
  console.log(queue.search(1))
  console.log(queue.search(14))

  console.log("")
  console.log("testing print")
  queue.print()
  
}

module.exports = Queue;
