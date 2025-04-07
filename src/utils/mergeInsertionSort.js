// src/mergeInsertionSort.js
function jacobsthalSequence(n) {
    const seq = [1, 3];
    while (seq[seq.length - 1] < n) {
      seq.push(seq[seq.length - 2] * 2 + seq[seq.length - 1]);
    }
    return seq;
  }
  
  function buildInsertionOrder(n) {
    if (n <= 0) {
      return [];
    }
    const jSeq = jacobsthalSequence(n);
    const order = [];
    let prev = 0;
    for (const j of jSeq) {
      order.push(...Array.from({ length: j - prev }, (_, i) => prev + 1 + i).reverse());
      prev = j;
    }
    return order.filter((x) => x - 1 < n).map((x) => x - 1);
  }
  
  export function mergeInsertionSort(arr, compare) {
    let comparisons = 0;
  
    function binaryInsert(arr, val, end) {
      let left = 0;
      let right = end;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        comparisons++;
        if (compare(arr[mid], val) < 0) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      arr.splice(left, 0, val);
    }
  
    if (arr.length <= 1) {
      return [arr, comparisons];
    }
  
    const pairs = [];
    let unpaired = null;
    for (let i = 0; i < arr.length - 1; i += 2) {
      comparisons++;
      const a = arr[i];
      const b = arr[i + 1];
      if (compare(b, a) < 0) {
        pairs.push([a, b]);
      } else {
        pairs.push([b, a]);
      }
    }
    if (arr.length % 2 === 1) {
      unpaired = arr[arr.length - 1];
    }
  
    let subComps = 0;
    let sortedPairs = pairs;
    if (pairs.length > 1) {
      [sortedPairs, subComps] = mergeInsertionSort(pairs, (a, b) => compare(a[0], b[0]));
      comparisons += subComps;
    }
  
    const mainChain = sortedPairs.map((p) => p[0]);
    const bElements = sortedPairs.map((p) => p[1]);
    if (unpaired) {
      bElements.push(unpaired);
    }
  
    const insertionOrder = buildInsertionOrder(bElements.length);
  
    for (const bIdx of insertionOrder) {
      const b = bElements[bIdx];
      const limit = bIdx < pairs.length ? mainChain.indexOf(pairs[bIdx][0]) : mainChain.length;
      binaryInsert(mainChain, b, limit);
    }
  
    return [mainChain, comparisons];
  }