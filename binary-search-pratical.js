// LINEAR SEARCH SOLUTION WITH FOR LOOP
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

// BINARY SEARCH SOLUTION
function binarySearch(arr, item) {
  var min = 0;
  var max = arr.length - 1;
  var guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (arr[guess] === item) {
      return guess;
    } else {
      if (arr[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return -1;
}

console.log(binarySearch([2, 6, 64, 90, 103, 200], 90), 3);