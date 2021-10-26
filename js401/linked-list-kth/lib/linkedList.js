'use strict';

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

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      arr.push(currentNode.value);
    }
    let index = arr.length -k;
    if (index >= 1) {
      return arr[index-1];
    } else {
      return `Exception`;
    }
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
// let list = new LinkedList();
// list.insertHead(1);
// list.append(3);
// list.append(8);
// list.append(2);
// list.addBefore(3, 10);
// list.addBefore(3, 4);
// list.addAfter(10, 7);
// console.log('Truthy: ', list.kthFromEnd(2));
// console.log('Falsy: ', list.kthFromEnd(100));
// console.log(list.toString());


module.exports = LinkedList;
