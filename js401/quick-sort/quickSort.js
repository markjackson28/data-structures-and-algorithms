'use strict';

// Pseudo Code
// ALGORITHM QuickSort(arr, left, right)
//     if left < right
//         // Partition the array by setting the position of the pivot value
//         DEFINE position <-- Partition(arr, left, right)
//         // Sort the left
//         QuickSort(arr, left, position - 1)
//         // Sort the right
//         QuickSort(arr, position + 1, right)

// ALGORITHM Partition(arr, left, right)
//     // set a pivot value as a point of reference
//     DEFINE pivot <-- arr[right]
//     // create a variable to track the largest index of numbers lower than the defined pivot
//     DEFINE low <-- left - 1
//     for i <- left to right do
//         if arr[i] <= pivot
//             low++
//             Swap(arr, i, low)

//      // place the value of the pivot location in the middle.
//      // all numbers smaller than the pivot are on the left, larger on the right.
//      Swap(arr, right, low + 1)
//     // return the pivot index point
//      return low + 1

// ALGORITHM Swap(arr, i, low)
//     DEFINE temp;
//     temp <-- arr[i]
//     arr[i] <-- arr[low]
//     arr[low] <-- temp

let arr = [8, 4, 23, 42, 16, 15];

function quickSort(arr, leftIndex, rightIndex) {
  console.log('qs', arr, leftIndex, rightIndex);
  let index;
  if (arr.length > 1) {
    index = partition(arr, leftIndex, rightIndex); //index returned from partition
    if (leftIndex < index - 1) { //more elements on the left side of the pivot
      quickSort(arr, leftIndex, index - 1);
    }
    if (index < rightIndex) { //more elements on the right side of the pivot
      quickSort(arr, index, rightIndex);
    }
  }
  return arr;
}

function partition(arr, leftIndex, rightIndex) {
  console.log('par', arr, leftIndex, rightIndex);
  let pivot = arr[Math.floor((rightIndex + leftIndex) / 2)], //middle element
    i = leftIndex, //leftIndex pointer
    j = rightIndex; //right pointer
    console.log('middle', pivot)
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j); //swapping two elements
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, leftIndex, rightIndex) {
  console.log('swap', arr, leftIndex, rightIndex);
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}

let test = quickSort(arr, 0, arr.length - 1);
console.log(test); 

module.exports = quickSort;
