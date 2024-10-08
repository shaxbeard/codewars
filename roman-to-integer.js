// 13. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.


// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// DEMO
// Input: s = "MCMXCIV"
// Output: 1994

// This is an example of a very specific MECHANISM with 2 pointers. 
// We ALWAYS want the pointers to be at positions i and i + 1
// So we should just use ONE INDEX so that the pointers are always incremented together
// But we can use the variables "current" and "next" for more clarity

// cur = s[i]
// next = s[i + 1]
// "MCMXCIV"
//  c       
//   n   


// BUT, we also have to map the int value for each Roman letter
//     'I': 1,
//     'V': 5,
//     'X': 10,
//     'L': 50,
//     'C': 100,
//     'D': 500,
//     'M': 1000

// We can ADD THE MAPPING to the two variables that we tied to the same index
// cur = numMap[s[i]]
// next = numMap[s[i + 1]]
// "MCMXCIV"
//  c       
//   n  

// Now we directly access the int value of each pair of Roman letters using cur and next


var romanToInt = function(s) {
      const numMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = numMap[s[i]];
        const next = numMap[s[i + 1]];

        if (cur < next) { // Look for pairs of nums where the left num < right num
            result += next - cur;
            i++; // increment an extra time to get past the pair of nums
        } else {
            result += cur;
        }
    }
    return result;
};

console.log(romanToInt("III"), 3);
console.log(romanToInt("LVIII"), 58);
console.log(romanToInt("MCMXCIV"), 1994);


