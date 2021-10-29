'use strict';

const LinkedList = require('../lib/linkedList');
const util = require('util');

describe('Linked list', () => {

  it('should zip two linked list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let zipList = new LinkedList();
    list1.append(3);
    list1.append(8);
    list1.append(2);
    list2.append(5);
    list2.append(9);
    list2.append(4);
    let newList = zipList.LLZ(list1, list2);

    expect(newList).toBeDefined();
    expect(newList.value).toEqual(3);
    expect(newList.next.value).toEqual(5);
    // console.log(util.inspect(newList, false, null, true));
    // console.log(util.inspect(newList.next.value, false, null, true));

  });

  it('should take in shorter lists and append the rest', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let zipList = new LinkedList();
    list1.append(1);
    list1.append(3);
    list2.append(5);
    list2.append(9);
    list2.append(4);
    let newList = zipList.LLZ(list1, list2);
    // console.log(util.inspect(newList, false, null, true));
    expect(newList).toBeDefined();
  });

});
