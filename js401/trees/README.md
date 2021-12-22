# Trees

# Challenge Summary

## FizzBuzz
- Write a function called fizz buzz tree
- Arguments: k-ary tree
- Return: new k-ary tree
- Determine whether or not the value of each node is divisible by 3, 5 or both. Create a new tree with the same structure as the original, but the values modified as follows:
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, simply turn the number into a String.

## Breath-first Traversal
- Write a function called breadth first
- Arguments: tree
- Return: list of all values in the tree, in the order they were encountered

- Node
  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Binary Tree
  - Create a Binary Tree class
    - Define a method for each of the depth first traversals:
      - pre order
      - in order
      - post order which returns an array of the values, ordered appropriately.
  - Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Binary Search Tree
  - Create a Binary Search Tree class
    - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
    - Add
      - Arguments: value
      - Return: nothing
      - Adds a new node with that value in the correct location in the binary search tree.
    - Contains
      - Argument: value
      - Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
On paper, trees makes sense to me but when it comes to writing the code, it got a bit confusing to me. I still need a bit of practice with these. I did find how to do them through resources. I did console out what was happening within the functions but still need to work on them.

Resources:
- [Add](https://www.digitalocean.com/community/tutorials/js-binary-search-trees)
- [Search](https://www.tutorialspoint.com/Searching-for-values-in-an-Javascript-Binary-Search-Tree)
- [BFT](https://dev.to/edwardcashmere/binary-tree-part-3-breadth-first-search-javascript-and-python-21k1)
- [For of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Remainder '%'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

## Solution
- run `npm test`
