'use strict';

const Node = require('./node');
const BT = require('./binaryTree');
const util = require('util');

/*
Create a Binary Search Tree class
This class should be an extension of the 
Binary Tree Class, with the following additional methods:

***Add***
    Arguments: value
    Return: nothing
    Adds a new node with that value in the correct location in the binary search tree.

****Contains***
    Argument: value
    Returns: boolean indicating whether or not the value is in the tree at least once.
*/

class BinarySearchTree extends BT {

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    };
    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (value === current.value) {
        return this;
      };
      if (value < current.value) addSide('left');
      else addSide('right');
    }
    // _add(root);
    // set node var to root
    // check if root is null, if yes then make a new node and return
    // create recursion method _add
    // check value < left 
    // if no node then create node
    // otherwise, if node.left is not null, recursively call _add(node.left)
    // check value >= right 
    // if no node then create
    // otherwise, if node.left is not null, recursively call _add(node.right)
    // otherwise return null
    // FINALLY! kick it all off by calling the function _add() w/ node -> _add(node)
  };

  contain(value) {
    // console.log(value);
    // console.log(this.root);

    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        // Found the element!
        return true;
      } else if (value < current.value) {
        // Go Left as data is smaller than parent
        current = current.left;
      } else {
        // Go right as data is greater than parent
        current = current.right;
      }
    }
    return false;

    //iterative
    // set current variable to root
    // this is a bST so we can compare current, left, and right to the value 
    // and return if equal
    // loop until current is null
    // return false if no value
    //recursive
    //grab root
    //create _contains recursive fn
    //compare values and call _contains depending on <, >, =
    //call _contains(root)
  }

};

// Test
// let tree = new BinarySearchTree();

// tree.add(10);
// tree.add(4);
// tree.add(4);
// tree.add(12);
// tree.add(2);
// console.log(util.inspect(tree, false, null, true));
// let test = tree.contain(3);
// console.log(test);


module.exports = BinarySearchTree;
