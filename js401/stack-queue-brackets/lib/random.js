'use strict';

function Node(data, next) {
  this.data = data;
  this.next = next;
} 

function merge(l1, l2) {
  
  let l3 = new LinkedList();
  l3.current = l3.head;
  l1.current = l1.head;
  l2.current = l2.head;

  while (l1.current !== null || l2.current !== null) {
    // equal sizes
    if (l1.current !== null && l2.current !== null) {
      l3.insertHead(l1.current.value);
      l3.insertHead(l2.current.value);
      l1.current = l1.current.next;
      l2.current = l2.current.next; 
    } else if (l1.current !== null && l2.current === null) {
      l3.insertHead(l1.current.value);
      l1.current = l1.current.next;
    } else if (l1.current === null && l2.current !== null) {
      l3.insertHead(l2.current.value);
      l2.current = l2.current.next;
    } 
  }
  
  return l3.head;

}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 

let newList = merge(L1, L2); 

console.log(newList)
