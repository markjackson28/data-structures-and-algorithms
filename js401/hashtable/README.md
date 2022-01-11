# Hashtables

'Hash Tables are a data structure that allow you to create a list of paired values. You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.'

## Challenge

Implement a Hashtable Class with the following methods:

- add
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get
  - Arguments: key
  - Returns: Value associated with that key in the table
- contains
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- hash
  - Arguments: key
  - Returns: Index in the collection for that key

## Efficiency

Space: O(n)  
Search: O(1)

## Resources
- [JavaScript Hash Table – Associative Array Hashing in JS](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/)
- [Data Structures: Hash Tables](https://www.youtube.com/watch?v=shs0KM3wKv8)
