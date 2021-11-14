'use strict';

// To display full object
const util = require('util');

const Stack = require('./stack');

class PseudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    let newStack = this.s1;
    newStack.push(value);
  }

  dequeue() {
    while (this.s1.length !== 0) {
      let top = this.s1.pop();
      this.s2.push(top);
    }
    return this.s2.pop();
  }

}

// let queue = new PseudoQueue();
// queue.enqueue(20);
// queue.enqueue(15);
// queue.enqueue(10);
// queue.enqueue(5);
// queue.dequeue(20);
// console.log(util.inspect(queue, false, null, true));

module.exports = PseudoQueue;
