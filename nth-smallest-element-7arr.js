// Task
// Given an array/ of integers, find the Nth smallest element in the array.

// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2

//params - minimum of 3 items, integers (pos, neg, zero), CAN REPEAT
// return - nth smalles number

function nthSmallest(arr, n) {
  //sort the array from smallest to largest
  //selecte the nth item from this sorted array
  return arr.sort((a, b) => a - b)[n - 1];
}

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2);
