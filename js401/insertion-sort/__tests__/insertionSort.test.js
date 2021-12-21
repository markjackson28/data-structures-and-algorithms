'use strict';

const insertionSort = require('../insertionSort');

let testArr = [8, 4, 23, 42, 16, 15];
let correctOrder = [4, 8, 15, 16, 23, 42];
let failTest = [8, 4, 23, 42, 16, 15]

describe('Insertion Sort Function', () => {
  
  it('should correctly sort the array', () => {
    let test = insertionSort(testArr);
    expect(test).toBeDefined();
    expect(test).toEqual(correctOrder);
  });

  it('should not equal the same array', () => {
    let test = insertionSort(testArr);
    expect(test).not.toBe(failTest);
  })

})
