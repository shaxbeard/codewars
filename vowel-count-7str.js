// return the number (count) of vowels in a given string
//Parameters - a,e.i,o,u -> ++ , no uppercase, no numbers
//Return - the total number of vowels
//desired result
// 'abracadabra' => 5
// 'oolong' => 3
// 'talented' => 3'
//pseudo
//array # done
//loop (reduce?)
//conditional - ++ if charCodeAt (neede?) = a||e||i||o||u

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

const vowels = ["a", "e", "i", "o", "u"];

// REGEX - FASTEST @ 4.5 million ops/s
// function getCount(str) {
//   let vowelsArr = str.match(/[aeiou]/gi);
//   return !vowelsArr ? 0 : vowelsArr.length;
// }

// NESTED FOR LOOPS - 5% SLOWER THAN REGEX
// function getCount(str) {
//   let total = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         total++;
//       }
//     }
//   }
//   return total;
// }

// SPLIT().FOR EACH() WITH INCLUDES() - 40% SLOWER THAN REGEX BUT FASTER THAN FOR-OF
// function getCount(str) {
//   let total = 0;
//   str.split("").forEach(letter => vowels.includes(letter) && total++);
//   return total;
// }

// FOR-OF LOOP WITH INCLUDES() - 45% SLOWER THAN REGEX - 5% SLOWER THAN SPLIT().FOREACH() !!!
// function getCount(str) {
//   let total = 0;
//   for (letter of str) {
//     if (vowels.includes(letter)) {
//       total++;
//     }
//   }
//   return total;
// }

// SHORTENED VERSION OF ABOVE
// function getCount(str) {
//   let total = 0;
//   for (letter of str) {
//     vowels.includes(letter) && total++;
//   }
//   return total;
// }

// // Wow! I had to use total++ inside of the forEach() EVEN INSIDE OF REDUCE

// NESTED FOR EACH LOOPS
//   let total = 0;
//   function getCount(str) {
//   str.split("").forEach(letter => {
//     vowels.forEach(vowel => vowel === letter && total++);
//   });
//   return total;
// }
//}

// REDUCE WITH INCLUDES()
// function getCount(str) {
//   let total = 0;
//   return str.split("").reduce((counter, letter) => {
//     vowels.includes(letter) && counter++;
//     return counter;
//   }, 0);
// }

console.log(getCount("abracadabra"), 5);
console.log(getCount("talented"), 3);
console.log(getCount("abcdefghijklmnopqrstuvwxyz"), 5);
console.log(getCount("bbb"), 0);
