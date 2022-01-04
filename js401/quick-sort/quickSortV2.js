'use strict';

// let arr = [8, 4, 23, 42, 16, 15];

/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          left --> Starting index,
          right --> Ending index
 */
function quickSort(arr, left, right) {
  // console.log(arr, low, rightigh)
  if (left < right) {

    // position is partitioning index, arr[p] is now at right place 
    let position = partition(arr, left, right);

    // Separately sort elements before partition and after partition
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, left, right) {

  // pivot
  let pivot = arr[right];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = (left - 1);

  for (let j = left; j <= right - 1; j++) {

    // If current element is smaller 
    // than the pivot
    if (arr[j] < pivot) {

      // Increment index of 
      // smaller element
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return (i + 1);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// let test = quickSort(arr, 0, arr.length - 1);
// console.log(test);

module.exports = quickSort;
