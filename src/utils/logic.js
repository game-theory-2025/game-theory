// src/logic.js
import { mergeSort } from './mergeSort';
import { mergeInsertionSort } from './mergeInsertionSort';

class PayoffTuple {
  constructor(u1, u2) {
    this.u1 = u1;
    this.u2 = u2;
  }

  toString() {
    return `(${this.u1}, ${this.u2})`;
  }

  static compare(a, b) {
    if (a.u1 < b.u1) {
      if (a.u2 > b.u2) {
        return -1;
      }
      throw new Error(`Items ${a.toString()} and ${b.toString()} are not comparable.`);
    } else if (a.u1 > b.u1) {
      if (a.u2 < b.u2) {
        return 1;
      }
      throw new Error(`Items ${a.toString()} and ${b.toString()} are not comparable.`);
    } else {
      if (a.u2 === b.u2) {
        return 0;
      }
      throw new Error(`Items ${a.toString()} and ${b.toString()} are not comparable.`);
    }
  }
}

export function processMatrices(matrix1, matrix2, sortMethod) {
  const normalForm = matrix1.map((row, i) =>
    row.map((_, j) => new PayoffTuple(matrix1[i][j], matrix2[i][j]))
  );

  const payoffTuples = normalForm.flat();

  try {
    const sortFunction = sortMethod === 'merge_sort' ? mergeSort : mergeInsertionSort;
    const [sortedPayoffTuples, comparisons] = sortFunction(payoffTuples, PayoffTuple.compare);
    return [`Game is strictly competitive! (${comparisons} comparisons)`, sortedPayoffTuples];
  } catch (e) {
    return [`Game is not strictly competitive! \n${e.message}`, null];
  }
}