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
  repeatedTerm(string) {
      let stringSplit = string.toLowerCase().split(" ");
      // hashset for storing words
      let hashSet = new Hashtable(stringSplit.length);
      // console.log(hashSet)

      // store the words of string in hashset
      for (let i = 0; i < stringSplit.length; i++) {
        // console.log(i)
        // if word exists return
        if (hashSet.contains(stringSplit[i])) {
          return stringSplit[i];
        }
        // insert new word to set
        hashSet.add(stringSplit[i]);
      }
      return 'No Repetition';
  }
}

let myhash = new Hashtable(100);
// myhash.add('Octane', 'Speed Runner');
// myhash.add('Gibby', 'On demand cover');
// myhash.add('Valk', 'Jetpack');
// myhash.add('Bloodhound', 'Scanner');

// let getHash = myhash.contains('Octane');
let testString = 'Once upon a time, there was a brave princess who...';
let testString2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way - in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
let testString3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn\'t know what I was doing in New York...';
console.log(myhash.repeatedTerm(testString))
console.log(myhash.repeatedTerm(testString2));
console.log(myhash.repeatedTerm(testString3));

// console.log(testString.toLowerCase());

// let hashSet = new Set([1, 2, 'butt', 4]);
// console.log('**', hashSet.has(3));
// console.log('***', hashSet);

module.exports = Hashtable;
