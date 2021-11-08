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
    - Extracts a value from the PseudoQueue, using a first-in, first-out approach.h

## Approach & Efficiency
My approach was to reference what I had done in the linked lists. It was somewhat fimiliar but I still need a bit more clarification and how some of them work. The flow is to basically just point and transverse through the stack or queue and return what you are looking for. There is a bit of assigning and reassigning of values.

## Solution
- run `npm test`
