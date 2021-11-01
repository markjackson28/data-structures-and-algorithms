'use strict';

// To display full object
const util = require('util');

// Importing node class for use
const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    // New Node
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    let current = this.top;
    if (current === null) {
      return 'empty sauce container';
    } else {
      return current.value;
    }
  }

  isEmpty() {
    if (stack.top === null) {
      return true;
    } else {
      return false;
    }
  }

}


// Testing
let stack = new Stack();
// Push Test
// stack.push(1);
// stack.push(2);
// stack.push(3);
// Pop Test
// stack.pop(3);
// stack.pop(2);
// stack.pop(1);
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(util.inspect(stack, false, null, true));
// console.log(JSON.stringify(stack));


module.exports = Stack;
