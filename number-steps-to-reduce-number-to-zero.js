// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Input - one integer - positive only?, no integer-strings?, no funny business?
// Return  - the number of steps to reduce the input integer to zero - if even, divide by 2; if odd, subtract 1

// Example 1:
// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

// WHILE num is greater than zero
// if num is even, divide by 2
// else (if num is odd), substract 1
// EITHE WAY, count the change to num as a "step"

// function numberOfSteps(num) {
//   let steps = 0;
//   while (num > 0) {
//     num % 2 === 0 ? (num /= 2) : num--;
//     steps++;
//   }
//   return steps;
// }

// USING BITWISE
function numberOfSteps(num) {
  let steps = 0;
  while (num > 0) {
    num & 1 ? num-- : (num >>= 1);
    steps++;
  }
  return steps;
}
console.log(numberOfSteps(14), 6);

// USING BITWISE AND RECURSION
// const numberOfSteps = (num, steps = 0) =>
//   num === 0 ? steps : numberOfSteps(num & 1 ? num - 1 : num >> 1, ++steps);

// console.log(numberOfSteps(14), 6);
