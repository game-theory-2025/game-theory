// src/mergeSort.js
export function mergeSort(items, compare) {
    let comparisons = 0;
  
    function merge(left, right) {
      let sortedList = [];
      let i = 0;
      let j = 0;
  
      while (i < left.length && j < right.length) {
        comparisons++;
        if (compare(left[i], right[j]) <= 0) {
          sortedList.push(left[i]);
          i++;
        } else {
          sortedList.push(right[j]);
          j++;
        }
      }
  
      sortedList = sortedList.concat(left.slice(i), right.slice(j));
      return [sortedList, comparisons];
    }
  
    if (items.length <= 1) {
      return [items, comparisons];
    }
  
    const mid = Math.floor(items.length / 2);
    const [left, leftComps] = mergeSort(items.slice(0, mid), compare);
    const [right, rightComps] = mergeSort(items.slice(mid), compare);
    comparisons += leftComps + rightComps;
  
    return merge(left, right);
  }