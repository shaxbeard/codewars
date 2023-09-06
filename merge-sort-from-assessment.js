function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let left = array.slice(0, middleIndex);
  let right = array.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
