'use strict';

// Importing node class for use
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Appending to the head
  append(value) {
    let node = new Node(value);

    // If list is empty
    if(!this.head) {
      this.head = node;
      return this;
    }
    // If nodes exist
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
}

module.exports = LinkedList;
