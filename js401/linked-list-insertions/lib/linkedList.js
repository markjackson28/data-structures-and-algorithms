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

  addAfter(value, newValue) {
    // Add error handling
    let node = new Node(newValue);
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        node.next = currentNode;
        currentNode.next = node;
        return;
      } 
      currentNode = currentNode.next;
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

let list = new LinkedList();
// list.insertHead(1);
// list.append(2);
// list.append(3);
// list.addBefore(3, 10);
list.addBefore(3, 4);

console.log(list);

module.exports = LinkedList;
