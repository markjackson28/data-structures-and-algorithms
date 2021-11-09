'use strict';

// To display full object
const util = require('util');

// Importing node class for use
const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    // New Node
    let node = new Node(value);

    if (!this.rear) {
      this.rear = node;
      this.front = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  // Dont think this works properly
  dequeue() {
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    let current = this.front;
    if (current === null) {
      return 'empty sauce queue';
    } else {
      return current.value;
    }
  }

  isEmpty() {
    let current = this.front;
    if (current === null) {
      return true;
    } else {
      return false;
    }
  }

}


// Testing
// let queue = new Queue();
// enqueue Test
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// dequeue Test
// queue.dequeue(3);
// queue.dequeue(2);
// queue.dequeue(1);
// console.log(queue.isEmpty());
// console.log(queue.peek());
// console.log(util.inspect(queue, false, null, true));
// console.log(JSON.stringify(queue));


module.exports = Queue;
