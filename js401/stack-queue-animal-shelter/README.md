# Stacks Queues Animal Shelter

# Challenge Summary
- First-in, First out Animal Shelter.

- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.
- Implement the following methods:
  - enqueue
    - Arguments: animal
      - `animal` can be either a dog or a cat object.
  - dequeue
    - Arguments: pref
      - `pref` can be either `"dog"` or `"cat"`
    - Return: either a dog or a cat, based on preference.
      - If `pref` is not `"dog"` or `"cat"` then return null.

## Approach & Efficiency
My approach was to reference what I had done in the linked lists but for some reason I had to change the functions to reference an array. Once I did that, I was able to understand how to apply the functions to the two stacks. Some of the logic was a bit of guessing and messing around but I believe I got it to work. Still may need to come back to this to understand it more.

## Solution
- run `npm test`
