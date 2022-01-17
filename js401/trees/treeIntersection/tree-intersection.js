'use strict';

// From Lecture!!!
let Hashtable = require('../../hashtable/hashtable');
let tree1 = require('./tree1');
let tree2 = require('./tree2');

function tree_intersection(tree1, tree2) {
  let hashTable = new Hashtable(1024);
  let common_values = [];
  // first add the first tree to the hashmap
  _add_to_map(tree1.root, hashTable);
  // console.log(JSON.stringify(hashTable))
  // then run 2nd tree against first
  _find_common_values(tree2.root, hashTable, common_values);
  
  return common_values;
}

function _add_to_map(node, hashTable) {
  if (!node) return;
  hashTable.add(node.value.toString(), true);
  if (node.left) _add_to_map(node.left, hashTable);
  if (node.right) _add_to_map(node.right, hashTable);
}

function _find_common_values(node, hashTable, arr) {
  if (!node) return;
  let check = hashTable.get(node.value.toString()); // returns true or undefined
  // console.log(check);
  if (check) { arr.push(node.value) }
  if (node.left) _find_common_values(node.left, hashTable, arr);
  if (node.right) _find_common_values(node.right, hashTable, arr);
}

console.log(tree_intersection(tree1, tree2));
