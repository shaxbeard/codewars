// Given an array of integers as strings and numbers,
//return the sum of the array values as if all were numbers.

// Return your answer as a number.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

function sumMix(x) {
  return x.map(Number).reduce((total, item) => total + item, 0);
}

console.log(sumMix([1, 2, "3", "4"]));
