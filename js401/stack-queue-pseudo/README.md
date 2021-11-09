# Stacks and Queues

# Challenge Summary
- Implement a Queue using two Stacks.

- Create a new class called pseudo queue.
  - Do not use an existing Queue.
  - Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
  - Internally, utilize 2 Stack instances to create and manage the queue
- Methods:
  - enqueue
    - Arguments: value
    - Inserts value into the PseudoQueue, using a first-in, first-out approach.
  - dequeue
    - Arguments: none
    - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Approach & Efficiency
My approach was to reference what I had done in the linked lists but for some reason I had to change the functions to reference an array. Once I did that, I was able to understand how to apply the functions to the two stacks. Some of the logic was a bit of guessing and messing around but I believe I got it to work. Still may need to come back to this to understand it more.

## Solution
- run `npm test`
