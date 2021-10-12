'use strict';

const LinkedList = require('../lib/linkedList');

describe('Linked list', () => {

  it('should test the head to be null', () => {
    let list = new LinkedList();
    // console.log('Linked List:', list);
    expect(list.head).toBeNull;
  });

  it('should append to the linked list', () => {
    let list = new LinkedList();
    let initialValue = 'Oreo';
    list.append(initialValue);
    // console.log('Inside append test:', list);
    expect(list.head.value).toEqual(initialValue);

    // Adding another value to see if it appends
    let newValue = 'Octane';
    list.append(newValue);
    // console.log('Inside append test: ', list);
    expect(list.head.next.value).toEqual(newValue);
  });

  

});
