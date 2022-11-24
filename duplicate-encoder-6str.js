// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "("
// if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.

// Ignore capitalization when determining if a character is a duplicate.

//input - string, uppercase and lowercase, numbers? no, special characters-> yes, spaces->yes
//return open paren ( if the character appears just once, return ) if the character appears 1+ in the str,
// ignore case!!

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncoder(str) {
  //to ignore case, convert toLowerCase at the start
  //determine if each character is unique or duplicate
  //To loop over each character in this string for the comparison, I need to convert to array
  //TEST -> if indexOf each char === lastIndexOf each char -> (  : )
  /* *************************** */
  /* *************************** */
  /* *************************** */
  // //THIS SOLUTION USES TWO COPIES OF THE PARAMETER
  // const lowerArr = str.toLowerCase();
  // const strLower = str.toLowerCase();
  // return lowerArr
  //   .split("")
  //   .map(l => (strLower.indexOf(l) === strLower.lastIndexOf(l) ? "(" : ")"))
  //   .join("");

  /* *************************** */
  /* *************************** */
  /* *************************** */

  //THIS IS THE BEST QUADRATIC SOLUTION
  return str
    .toLowerCase()
    .split("")
    .map((l, i, a) => (a.indexOf(l) === a.lastIndexOf(l) ? "(" : ")"))
    .join("");
}

console.log(duplicateEncoder("din"), "(((");
console.log(duplicateEncoder("recede"), "()()()");
console.log(duplicateEncoder("Success"), ")())())");
