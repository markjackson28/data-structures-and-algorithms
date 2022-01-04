'use strict';

const quickSort = require('../quickSortV2');

let testArr = [8, 4, 23, 42, 16, 15];
let correctOrder = [4, 8, 15, 16, 23, 42];
let failTest = [8, 4, 23, 42, 16, 15]

describe('Quick Sort Function', () => {
  
  it('should correctly sort the array', () => {
    let test = quickSort(testArr, 0, testArr.length - 1);
    expect(test).toBeDefined();
    expect(test).toEqual(correctOrder);
  });

  it('should not equal the same array', () => {
    let test = quickSort(testArr, 0, testArr.length - 1);
    expect(test).not.toBe(failTest);
  });

})
