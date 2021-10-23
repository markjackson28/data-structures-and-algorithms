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
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  addBefore() {
    // still need to work on
  }

  addAfter() {
    // still need to work on
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
list.insertHead(1);
list.append(2);
list.append(3);
list.addBefore(3, 10);

console.log(list.toString());

module.exports = LinkedList;
