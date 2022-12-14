// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Input is an array with numbers - integers, decimals, no numbers as string
// Output is the single unique number
// Methods - set, indexOf?
// Brute force - nested loop

// FOR() SOLUTION -- FASTEST PERFORMANCE
// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[arr.length - 1]) {
//       if (arr[i] !== arr[i + 1]) {
//         return arr[i];
//       } else {
//         return arr[arr.length - 1];
//       }
//     }
//   }
// }

// INDEX OF() - 92% SLOWER THAN FOR()
// function findUniq(arr) {
//   for (let n of arr) {
//     if (arr.indexOf(n) === arr.lastIndexOf(n)) {
//       return n;
//     }
//   }
// }

// THIS WAS MY ATTEMPT AT A FOR() LOOP SOLUTION - CANNOT HANDLE BOTH [1,0,0] AND [0,1,0] ??
// The for() solution solves this issue by comparing the LAST element in the array not the second # Why does this work better?
// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       if (i === 0) {
//         return arr[i];
//       } else {
//         return arr[i + 1];
//       }
//     }
//   }
// }

// console.log(findUniq([1, 0, 0]), 1);
// console.log(findUniq([0, 1, 0]), 1);
// console.log(findUniq([0, 0, 1]), 1);
// console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
// console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55);
// console.log(findUniq([2, 1, 1, 1, 1, 1]), 2);
// console.log(findUniq([1, 1, 1, 1, 1, 2]), 2);
