'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashtable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  add(key, value) {
    // calculate the has of key 
    let hash = this.hash(key);
    // console.log('hash', hash)
    // check if there is a value
    if (!this.map[hash]) { this.map[hash] = new LinkedList(); }
    // assume there is a LL
    // create my entry
    let entry = { [key]: value } // Zork:3 -> "zork":3 // value of Node
    // add to LL
    this.map[hash].add(entry);
  }
  get(key) {
    let hash = this.hash(key);
    if (this.map[hash] === undefined) {
      return 'Key does not exist';
    }
    return this.map[hash];
  }
  contains(key) {
    let hash = this.hash(key);
    if (this.map[hash]) return true;
    else return false;
  }
  hash(key) {
    // with the key, find every ASCII value for each i in the string
    return key.split('').reduce((prev, curr) => {
      return prev + curr.charCodeAt(0)
    }, 0) * 599 % this.size;

    // add up all the ascii values
    // multiply by a prime number 
    // modulo against the size of your hashmap
    // return the index
  }
}

let myhash = new Hashtable(100);
// console.log(myhash);
// myhash.add('Octane', 'Speed Runner');
// myhash.add('Gibby', 'On demand cover');
// myhash.add('Valk', 'Jetpack');
// myhash.add('Bloodhound', 'Scanner');

// let getHash = myhash.contains('Octane');

// console.log(testString.toLowerCase());

// let hashSet = new Set([1, 2, 'butt', 4]);
// console.log('**', hashSet.has(3));
// console.log('***', hashSet);

module.exports = Hashtable;
