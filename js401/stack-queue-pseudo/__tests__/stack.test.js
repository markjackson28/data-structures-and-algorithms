'use strict';

const Stack = require('../lib/stack');
const util = require('util');

describe('Stack', () => {

  it('should push into a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack).toBeDefined();
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
    // console.log(util.inspect(stack.top.next, false, null, true));
    // console.log(util.inspect(newList.next.value, false, null, true));

  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3)
    expect(stack).toBeDefined();
    expect(stack.top.value).toEqual(3);
    // console.log(util.inspect(stack.top, false, null, true));
    // console.log(util.inspect(newList.next.value, false, null, true));
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3)
    stack.pop();
    expect(stack).toBeDefined();
    expect(stack.top.value).toEqual(2);
    // console.log(util.inspect(stack.top, false, null, true));
    // console.log(util.inspect(newList.next.value, false, null, true));
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3)
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
    // console.log(util.inspect(stack.top, false, null, true));
  });
  
  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3)
    expect(stack).toBeDefined();
    let peek = stack.peek();
    expect(peek).toEqual(3);
    // console.log(util.inspect(peek, false, null, true));
  });

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    let isEmptyTest = stack.isEmpty();
    expect(isEmptyTest).toBeTruthy();
    // console.log(util.inspect(isEmptyTest, false, null, true));
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    // WIP

  });


});
