'use strict';

// To display full object
const util = require('util');

class Stack {
  constructor() {
    this.length = 0;
  }

  push(value) {
    if (value) {
      this[this.length++] = value;
    }
  }

  pop() {
    if (!this.length) {
      throw new Error;
    }
    let item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return item;
  }

  peek() {
    if (!this.length) {
      throw new Error
    }
    return this[this.length - 1];
  }

  isEmpty() {
    if (this.length === 0) {
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
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());
// console.log(stack.peek());
// console.log(util.inspect(stack, false, null, true));
// console.log(JSON.stringify(stack));


module.exports = Stack;
