# Quick Sort

### Overview of what quick sort does

***
![quickSort()](./img/quickSort().jpeg)

Quick sort is a recursive function that sorts an array using a pivot as a reference to sort the array. This `quicksort()` method has two helper function; `partition()` and `swap()` The pivot tends to be the last item of the array. In this case, 15 is the last item so in the first call of quickSort(), the function will compare 15 to all of the items in the array. In `partition()`, we assign i to -1 and j to 0 to keep track of index positioning. If a j is less than the pivot, i will increase by 1 and will trigger the `swap()` function to swap those index position values. 
Once through the first call, it will break out of the loop and swap pivot points. Then the function will call again with different/updated values and perform the function of the left side and then the right until the array is sorted.

### Pseudocode

```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

### Sample Array: `[8, 4, 23, 42, 16, 15]`

### quickSort() Process

***
```javascript
function quickSort(arr, left, right) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
}
```

### partition() Process

***
```javascript
function partition(arr, left, right) {
  let pivot = arr[right];
  let i = (left - 1);

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return (i + 1);
}
```

### swap() Process

***
```javascript
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```

### Efficency

- O(n^2)

### Resources

- [Guru99 - QuickSort Algorithm in JavaScript](https://www.guru99.com/quicksort-in-javascript.html)
- [Quick Sort in 4 minutes](https://www.youtube.com/watch?v=Hoixgm4-P4M)  
- [Quick Sort | GeeksforGeeks](https://www.youtube.com/watch?v=PgBzjlCcFvc)
- [Javascript Freecodecamp Algorithm #34: Implement Quick Sort](https://www.youtube.com/watch?v=P6XGSKO2RzI)
