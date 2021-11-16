'use strict';

const Node = require('../util/node');
const BT = require('../util/binarySearchTree');
const util = require('util');

describe('Binary Search Tree Traversal', () => {

  it('should add a node to the BST', () => {
    let tree = new BT();
    tree.add(3);
    tree.add(5);
    // console.log(util.inspect(tree.root, false, null, true));
    expect(tree).toBeDefined();
    expect(tree.root.value).toEqual(3);
    expect(tree.root.right.value).toEqual(5);
    expect(tree.root.left).toBeNull;
  });

  it('should seach for a value within the BST and return a bool', () => {
    let tree = new BT();
    tree.add(3);
    tree.add(5);
    tree.add(10);
    tree.add(9);
    let truthy = tree.contain(9);
    let falsy = tree.contain(11);
    expect(truthy).toBeTruthy();
    expect(falsy).toBeFalsy();
  });

});
