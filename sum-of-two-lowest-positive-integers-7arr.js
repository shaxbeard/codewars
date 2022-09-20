// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// function sumTwoSmallestNumbers(numbers) {
//   return numbers.sort((a, b) => a - b).reduce((a, b, i) => (i < 2 ? a + b : a));
// }
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
