'use strict';

const Node = require('./node');
const util = require('util');

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  };

  // val - Left - Right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  preOrder() {

    let results = [];
    // use _walk() 'underscore' to let other developers 
    //know that this function is recursive 
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  // Left - val - right
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  inOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers 
    //know that this function is recursive 
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  };

  // Left - right - val
  // Time - O(n) where n is the number of nodes
  // Space - O(h) where h is the height of the tree
  postOrder() {
    let results = [];
    // use _walk() 'underscore' to let other developers 
    //know that this function is recursive 
    let _walk = (node) => {
      // get value of node
      // recursively go into tree
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  };

  max() {
    // uses function to put data into an arr
    let data = this.inOrder();

    // console.log(data);
    // if (data === '[]') {
    //   console.log('Empty Tree');
    // }

    // starts maxVal at index 0
    let maxVal = data[0];
    // loops through the data
    for (let i = 1; i < data.length; i++) {
      // if the index value is greater than maxVal, reassign and return
      if (data[i] > maxVal) {
        maxVal = data[i];
      }
    }
    return maxVal;
  }

  breadthFirst() {
    // Checking for nodes
    if (!this.root) { throw new Error('No Nodes in This Tree') }
    // create empty arr for results and queue
    let results = [];
    let queue = [];
    // set the starting/current point to the root
    let current = this.root;
    // pushing the current to the queue
    queue.push(current);
    // start the traversal with a while there is a length
    while (queue.length) {
      // assigning current to shifted val
      current = queue.shift();
      // pushing that node val to the results arr
      results.push(current.value);
      // if truthy, push curr.left into queue
      if (current.left) queue.push(current.left);
      // if truthy, push curr.right into queue
      if (current.right) queue.push(current.right);
    }
    return results;
  }

  fizzBuzzTree() {
    if (this.root === null) { 
      throw new Error('No Nodes in This Tree');
    }
    // if (this.root === null) { 
    //   console.log('No Node in This Tree'); 
    //   return; 
    // }
    let queue = [];
    let results = [];
    let fizzBuzzRes = [];
    let current = this.root;
    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      results.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    // console.log(results);
    // for (let i = 0; i < results.length; i++) {
    //   console.log('***', i);
    //   if ((i % 3) === 0 && (i % 5) === 0) {
    //     fizzBuzzRes.push("FizzBuzz");
    //   } else if ((i % 3) === 0) {
    //     fizzBuzzRes.push("Fizz");
    //   } else if ((i % 5) === 0) {
    //     fizzBuzzRes.push("Buzz");
    //   } else {
    //     fizzBuzzRes.push(i);
    //   }
    // }
    for (let i of results) {
      if ((i % 3) === 0 && (i % 5) === 0) {
        fizzBuzzRes.push("FizzBuzz");
      } else if ((i % 3) === 0) {
        fizzBuzzRes.push("Fizz");
      } else if ((i % 5) === 0) {
        fizzBuzzRes.push("Buzz");
      } else {
        fizzBuzzRes.push(i);
      }
    }
    return fizzBuzzRes;
  }
};

let one = new Node(15);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

// left
one.left = two;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
// right
one.right = three;
three.left = four;
three.right = five;

let tree = new BinaryTree(one);
// let emptyTree = new BinaryTree();
let test = tree.fizzBuzzTree();
// let result = tree.max();
// console.log(result);
// let bfRes = [1, 2, 3, 6, 4, 5, 7, 8 , 9];
// console.log(util.inspect(test, false, null, true));
console.log(JSON.stringify(test));
// console.log(test);

module.exports = BinaryTree;
