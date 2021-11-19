'use strict';

// To display full object
const util = require('util');

class AnimalShelter {
  constructor() {
    this.shelter = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(animal) {
    this.shelter[this.rear] = animal;
    this.rear++;
  }

  dequeue(pref) {
    this.shelter[this.front] = pref;
    delete this.shelter[this.front];
    this.front++;
    if (pref !== 'dog') {
      return null;
    } else
      return pref;
  }

}


// Testing
let queue = new AnimalShelter();
// enqueue Test
queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('cat');
// dequeue Test
// queue.dequeue('dog');
// queue.dequeue('cat');
// queue.dequeue(1);
// console.log(queue.isEmpty());
// console.log(queue.peek());
console.log(util.inspect(queue, false, null, true));
// console.log(JSON.stringify(queue));


module.exports = AnimalShelter;
