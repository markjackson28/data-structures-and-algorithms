'use strict';

const PseudoQueue = require('../lib/sqp');
const util = require('util');

describe('Queue', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue).toBeDefined();
    expect(queue.s1.length).toEqual(1);
    // console.log(util.inspect(queue, false, null, true));
  });

  it('Can pop correct value and push into stack 2', () => {
    let queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    queue.dequeue(20);
    expect(queue).toBeDefined();
    expect(queue.s1.length).toEqual(0);
    expect(queue.s2.length).toEqual(3);
    expect(queue.s2[2]).toEqual(15);
    // console.log(util.inspect(queue.s2[1], false, null, true));
  });

});



