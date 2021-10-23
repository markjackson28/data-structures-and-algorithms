'use strict';

const LinkedList = require('../lib/linkedList');

describe('Linked list', () => {

  it('should add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    list.insertBack('d');
    console.log(list);
    console.log(list.toString())
  });
  
});
