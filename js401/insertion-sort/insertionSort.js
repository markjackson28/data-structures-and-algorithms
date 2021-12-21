'use strict';

// sudo code
// InsertionSort(int[] arr)

// FOR i = 1 to arr.length

//   int j <-- i - 1
//   int temp <-- arr[i]

//   WHILE j >= 0 AND temp < arr[j]
//     arr[j + 1] <-- arr[j]
//     j <-- j - 1

//   arr[j + 1] <-- temp

let testArr = [8, 4, 23, 42, 16, 15];

let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    // this keeps track of the index before i
    let j = i - 1;

    // this loop shifts the elements to the right
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    // this inserts the unsorted element to the correct position
    arr[j + 1] = current;
  }
}

insertionSort(testArr);

console.log(testArr);
