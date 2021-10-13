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

  it('should insert a new node to the head', () => {
    let list = new LinkedList();
    let initialValue = 'Oreo';
    list.insert(initialValue);
    // console.log('Inside insert:', list);
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Gibby';
    list.insert(newValue);
    // console.log('Inside new list:', list);
    expect(list.head.value).toEqual(newValue);
  });

  it('should check to see if node exist', () => {
    let list = new LinkedList();
    let initialValue = 'Oreo';
    list.insert(initialValue);

    let newValue = 'Octane';
    list.append(newValue);

    // console.log('inside made list', list);

    let falseVal = 'Gibby';

    // console.log('inside boolean: should be false:', list.includes(falseVal));
    expect(list.includes(falseVal)).toBeFalsy();
    // console.log('inside boolean should be true:', list.includes(newValue));
    expect(list.includes(newValue)).toBeTruthy();
  });

  it('should return the values into a string', () => {
    let list = new LinkedList();
    let initialValue = 'Oreo';
    list.insert(initialValue);
    let secondValue = 'Octane';
    list.append(secondValue);
    // console.log('inside string', list); 
    // list.toString();
    let stringTest = list.toString();
    // console.log('toString test output:', stringTest);

    expect.stringContaining(stringTest);
  });

});
