// First, a simpler version of merging two arrays, then below it, the Leetcode version of the question

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(
  mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]),
  [0, 3, 4, 4, 6, 30, 31]
);

// function mergeSortedArrays(array1, array2) {
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;

//   while (array1Item !== undefined || array2Item !== undefined) {
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = array1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = array2[j];
//       j++;
//     }
//   }
//   return mergedArray;
// }

// console.log(
//   mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]),
//   [0, 3, 4, 4, 6, 30, 31]
// );

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// function merge(nums1, m, nums2, n) {
//   let p1 = m - 1; // pointer for nums1
//   let p2 = n - 1; // pointer for nums2
//   let p = m + n - 1; // pointer for merged array

//   while (p1 >= 0 && p2 >= 0) {
//     if (nums1[p1] > nums2[p2]) {
//       nums1[p] = nums1[p1];
//       p1--;
//     } else {
//       nums1[p] = nums2[p2];
//       p2--;
//     }
//     p--;
//   }

//   // If there are any remaining elements in nums2, copy them to nums1
//   while (p2 >= 0) {
//     nums1[p] = nums2[p2];
//     p2--;
//     p--;
//   }
// }

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;

// merge(nums1, m, nums2, n);
// console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
