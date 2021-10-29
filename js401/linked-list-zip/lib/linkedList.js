'use strict';

const util = require('util');

// Importing node class for use
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertHead(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  // Help from Ayrat
  addBefore(value, newValue) {
    let node = new Node(newValue);
    let currentNode = this.head;
    let previousNode;
    // console.log(currentNode);

    while (currentNode !== null) {
      if (currentNode.value === value) {
        node.next = currentNode;
        previousNode.next = node;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  // Help from Ayrat
  addAfter(value, newValue) {
    // Add error handling
    let node = new Node(newValue);
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // Help from Ayrat
  kthFromEnd(k) {
    let arr = [];
    let currentNode = this.head;
    arr.push(currentNode.value);

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }
    let index = arr.length - k;
    if (index >= 1) {
      return arr[index - 1];
    } else {
      return `Exception`;
    }
  }

  // Help from Audrey TA
  LLZ(l1, l2) {

    // Creating new LL
    let l3 = new LinkedList();
    // Setting current to heads of each list
    l3.current = l3.head;
    l1.current = l1.head;
    l2.current = l2.head;

    // if both are equal lists
    // else if l2 is shorter than l1
    // else if l1 is shorter than l2
    while (l1.current !== null || l2.current !== null) {
      if (l1.current !== null && l2.current !== null) {
        l3.append(l1.current.value);
        l3.append(l2.current.value);
        l1.current = l1.current.next;
        l2.current = l2.current.next;
      } else if (l1.current !== null && l2.current === null) {
        l3.append(l1.current.value);
        l1.current = l1.current.next;
      } else if (l1.current === null && l2.current !== null) {
        l3.append(l2.current.value);
        l2.current = l2.current.next;
      }
    }
    return l3.head;
  }

  toString() {
    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `{${currentNode.value}}` + " -> ";
      currentNode = currentNode.next;
    }
    return `"${string}NULL"`;
  }

}

// Testing
// let list1 = new LinkedList();
// let list2 = new LinkedList();
// let list3 = new LinkedList();
// list.insertHead(1);
// list.append(3);
// list.append(8);
// list.append(2);
// list.addBefore(3, 10);
// list.addBefore(3, 4);
// list.addAfter(10, 7);
// console.log('Truthy: ', list.kthFromEnd(2));
// console.log('Falsy: ', list.kthFromEnd(100));
// list1.append(1);
// list1.append(3);
// list1.append(2);
// list2.append(5);
// list2.append(9);
// list2.append(4);
// console.log(list1.toString());
// console.log(list2.toString());
// let zipList = list3.LLZ(list1, list2);
// console.log(util.inspect(zipList, false, null, true));
// console.log(zipList);


module.exports = LinkedList;
