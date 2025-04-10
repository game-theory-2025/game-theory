
import { mergeSort } from './mergeSort';
import { mergeInsertionSort } from './mergeInsertionSort';
import { PayoffTuple } from './PayoffTuple';

export class Game {
  constructor(matrix1, matrix2) {
    this.matrix1 = matrix1;
    this.matrix2 = matrix2;
    this.normalForm = this.createNormalForm();
    this.payoffTuples = this.flattenNormalForm();
  }

  createNormalForm() {
    return this.matrix1.map((row, i) =>
      row.map((_, j) => new PayoffTuple(this.matrix1[i][j], this.matrix2[i][j]))
    );
  }

  flattenNormalForm() {
    return this.normalForm.flat();
  }

  process(sortMethod) {
    try {
      const sortFunction = sortMethod === 'merge_sort' ? mergeSort : mergeInsertionSort;
      const [sortedPayoffTuples, comparisons] = sortFunction(this.payoffTuples, PayoffTuple.compare);
      return [`Game is strictly competitive! (${comparisons} comparisons)`, sortedPayoffTuples];
    } catch (e) {
      return [`Game is not strictly competitive! \n${e.message}`, null];
    }
  }
}