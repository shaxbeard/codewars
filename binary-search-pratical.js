// // LINEAR SEARCH SOLUTION WITH FOR LOOP - SEARCH THE ENTIRE ARRAY
// function linearSearch(arr, item) {
//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       index = i;
//     }
//   }
//   return index;
// }

// console.log(linearSearch([2, 6, 7, 90, 103], 90), 3);

// LINEAR SEARCH SOLUTION WITH FOR LOOP - STOP SEARCHING WHEN YOU FIND A MATCH
// function linearSearch(arr, item) {
//   // let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([2, 6, 7, 90, 103], 90), 3);

// BINARY SEARCH SOLUTION #1
// function binarySearch(arr, item) {
//   var min = 0;
//   var max = arr.length - 1;
//   var middle;

//   while (min <= max) {
//     middle = Math.floor((min + max) / 2);

//     if (arr[middle] === item) {
//       return middle;
//     } else {
//       if (arr[middle] < item) {
//         min = middle + 1;
//       } else {
//         max = middle - 1;
//       }
//     }
//   }
//   return -1;
// }

// David Malan's pseudocode step #1 for Binary Search
//if "target" is in the middle
// return target
//Else if target < middle
// search the left half
//Else if target > middle
// search the right half

// function binarySearch(arr, item) {
//   // min, max, and middle indexes
//   let min = 0;
//   let max = arr.length - 1;
//   let middle;

//   //while min <= max do the binary searching
//   while (min <= max) {
//     // calculate the middle index - WHERE DOES THIS GO?
//     middle = Math.floor((min + max) / 2);
//     // if the middle IS the item, return the index
//     if (arr[middle] === item) {
//       return middle;
//     }
//     // else, adjust the min or the max
//     if (arr[middle] < item) {
//       min = middle + 1;
//     } else {
//       max = middle - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([2, 6, 64, 90, 103, 200], 90), 3);

// LEON'S SOLUTION
// function binarySearch(nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   while (left < right) {
//     let mid = left + Math.floor((right - left + 1) / 2);
//     if (target < nums[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid;
//     }
//   }
//   return nums[left] === target ? left : -1;
// }

// console.log(binarySearch([2, 6, 64, 90, 103, 200], 90), 3);
