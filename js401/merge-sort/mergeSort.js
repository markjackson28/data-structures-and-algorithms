'use strict';

function mergeSort(arr) {
  // declaring n as the arr length
  const n = arr.length;

  // if the length is greater than one -> condition -> else, return the arr
  if (n > 1) {
    // splitting the arr in half
    let middle = Math.floor(n / 2);
    // console.log('1, middle', middle);
    // slice the arr at 0 index until middle index
    let left = arr.slice(0, middle);
    // console.log('MS left', left);
    // slice the arr at middle 
    let right = arr.slice(middle);
    // console.log('MS right', right);

    // calling mergeSort per side to keep sorting the arr
    mergeSort(left)
    // console.log('4, mergsort left', left);
    mergeSort(right)
    // console.log('5, mergesort right', right);
    // calling the helper function to merge the arr's back together
    merge(left, right, arr);
    // console.log('6, last merge', left, right, arr);
    // console.log('6, last merge', arr);
  }
  return arr;
}

// Helper function to merge the arrays
function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  // console.log('left',left, 'right', right, 'arr', arr);

  // comparing left and right
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i = i + 1;
    } else {
      arr[k] = right[j];
      j = j + 1;
    }
    k = k + 1;
  }
  if (i < left.length) {
    arr[k] = left[i];
    i = i + 1;
    k = k + 1;
  } else if (j < right.length) {
    arr[k] = right[j];
    j = j + 1;
    k = k + 1;
  }
}

// let testArr = [8, 4, 23, 42, 16, 15];

// console.log(mergeSort(testArr));

module.exports = mergeSort;
