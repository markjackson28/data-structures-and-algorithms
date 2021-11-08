'use strict';

const Queue = require('../lib/queue');
const util = require('util');

describe('Queue', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue).toBeDefined();
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next).toBeNull();
    // console.log(util.inspect(queue, false, null, true));
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3)
    expect(queue).toBeDefined();
    expect(queue.rear.value).toEqual(3);
    // console.log(util.inspect(queue.rear, false, null, true));
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3)
    queue.dequeue();
    expect(queue).toBeDefined();
    expect(queue.front.value).toEqual(2);
    // console.log(util.inspect(queue, false, null, true));
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3)
    expect(queue).toBeDefined();
    let peek = queue.peek();
    expect(peek).toEqual(1);
    // console.log(util.inspect(peek, false, null, true));

  });
  
  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    let isEmptyTest = queue.isEmpty();
    expect(isEmptyTest).toBeTruthy();

  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    // WIP

  });

});
