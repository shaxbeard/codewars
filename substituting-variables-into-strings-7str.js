// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:
// solution(5) // should return "Value is 00005"

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

function solution(value) {
  return `Value is ${String(value).padStart(5, 0)}`;
}

console.log(solution(5));
