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
    if (!this.head) {
      this.head = node;
      return this;
    }
    // If nodes exist
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  // Insert to the head
  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
    return this;
  }

  includes(value) {
    // Not sure if this is needed but works w/o it
    // let node = new Node(value);

    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value === value) {
        return true;
      }
    // Updates the current node?
    // currentNode.next = node;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    // Still not sure if I need this but works w/o it
    // let node = new Node();

    let currentNode = this.head;
    let string = "";
    while (currentNode) {
      string += `{${currentNode.value}}` + " -> ";
      currentNode = currentNode.next;
    }
    return `"${string}NULL"`;
  }

}

// let list = new LinkedList()

// console.log(list);

module.exports = LinkedList;
