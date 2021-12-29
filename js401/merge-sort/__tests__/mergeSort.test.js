'use strict';

const mergeSort = require('../mergeSort');

let testArr = [8, 4, 23, 42, 16, 15];
let correctOrder = [4, 8, 15, 16, 23, 42];
let failTest = [8, 4, 23, 42, 16, 15]

describe('Merge Sort Function', () => {
  
  it('should correctly sort the array', () => {
    let test = mergeSort(testArr);
    expect(test).toBeDefined();
    expect(test).toEqual(correctOrder);
  });

  it('should not equal the same array', () => {
    let test = mergeSort(testArr);
    expect(test).not.toBe(failTest);
  })

})
