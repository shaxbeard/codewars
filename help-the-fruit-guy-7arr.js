// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. 
// He wants to replace all the rotten pieces of fruit with fresh ones. 
// For example, given ["apple","rottenBanana","apple"] the replaced array should be 
// ["apple","banana","apple"]. 

// Your task is to implement a method that accepts an array of strings containing fruits 
// should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).The rotten fruit name will be in this camelcase (rottenFruit).The returned array should be in lowercase.


// METHOD 1 - USING TWO STRING METHODS
function removeRotten(bagOfFruits){
    if (!bagOfFruits) return [];
    return  bagOfFruits.map(fruit => fruit.startsWith("rotten") ? fruit.slice(6).toLowerCase() : fruit);
}
// # NOTE - THE "OR" SYNTAX DOES NOT WORK IN THIS CASE - WHY?
//   return bagOfFruits.map(fruit => fruit.startsWith("rotten") ? fruit.slice(6).toLowerCase() : fruit) || [];

// METHOD 2 - USING OBVIOUS METHOD THAT SHOULD BE MY  DEFAULT FOR EDITING STRINGS
// function removeRotten(arr){
//     return arr ? arr.map(x=>x.replace("rotten", "").toLowerCase()) : [] ;
// }

console.log(removeRotten(["apple","rottenBanana","apple"]), ["apple", "banana", "apple"])
console.log(removeRotten([]), []);
console.log(removeRotten(null), []);