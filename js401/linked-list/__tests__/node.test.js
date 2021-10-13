'use strict';

const Node = require('../lib/node');

describe('Node Test', () => {

  it('should test the node contructor', () => {
    let value = 'Oreo';
    let node = new Node(value);
    // console.log('Node Sauce:', node);
    // console.log('Node Next:', node.next);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
   
})
