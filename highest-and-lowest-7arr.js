// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!


// METHOD #1 - USING MATH.MIN() AND MATH.MAX()
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// METHOD #2 - USING SORT()
function highAndLow(numbers) {
  const arr = numbers.split(" ").sort((a, b) => b - a);
  return `${arr[0]} ${arr[arr.length - 1]}`;
}



console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
