import { mergeSort } from './mergeSort';
import { mergeInsertionSort } from './mergeInsertionSort';
import { PayoffTuple } from './PayoffTuple';

export class Game {
  constructor(matrix1, matrix2) {
    this.originalMatrix1 = matrix1;
    this.originalMatrix2 = matrix2;
    this.matrix1 = this._cloneMatrix(matrix1);
    this.matrix2 = this._cloneMatrix(matrix2);
    this.simplificationSteps = [];
  }

  _cloneMatrix(matrix) {
    return matrix.map(row => [...row]);
  }

  createNormalForm() {
    return this.matrix1.map((row, i) =>
      row.map((_, j) => new PayoffTuple(this.matrix1[i][j], this.matrix2[i][j]))
    );
  }

  flattenNormalForm() {
    return this.createNormalForm().flat();
  }

  simplifyGame() {
    this.simplificationSteps = [{
      matrix1: this._cloneMatrix(this.matrix1),
      matrix2: this._cloneMatrix(this.matrix2),
      action: null
    }];

    let changed = true;
    while (changed) {
      changed = false;

      // Eliminate strictly dominated rows for player 1
      for (let i = 0; i < this.matrix1.length; i++) {
        for (let j = 0; j < this.matrix1.length; j++) {
          if (i !== j && this._dominates(this.matrix1[j], this.matrix1[i])) {
            this.matrix1.splice(i, 1);
            this.matrix2.splice(i, 1);
            this.simplificationSteps.push({
              matrix1: this._cloneMatrix(this.matrix1),
              matrix2: this._cloneMatrix(this.matrix2),
              action: { type: 'row', index: i }
            });
            changed = true;
            break;
          }
        }
        if (changed) break;
      }

      if (changed) continue;

      // Eliminate strictly dominated columns for player 2
      const trans1 = this._transpose(this.matrix1);
      const trans2 = this._transpose(this.matrix2);

      for (let i = 0; i < trans2.length; i++) {
        for (let j = 0; j < trans2.length; j++) {
          if (i !== j && this._dominates(trans2[j], trans2[i])) {
            for (let row = 0; row < this.matrix1.length; row++) {
              this.matrix1[row].splice(i, 1);
              this.matrix2[row].splice(i, 1);
            }
            this.simplificationSteps.push({
              matrix1: this._cloneMatrix(this.matrix1),
              matrix2: this._cloneMatrix(this.matrix2),
              action: { type: 'col', index: i }
            });
            changed = true;
            break;
          }
        }
        if (changed) break;
      }
    }
  }

  _transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }

  _dominates(a, b) {
    let strictlyBetter = false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) return false;
      if (a[i] > b[i]) strictlyBetter = true;
    }
    return strictlyBetter;
  }

  process(sortMethod) {
    this.normalForm = this.createNormalForm();
    this.payoffTuples = this.flattenNormalForm();
    try {
      const sortFunction = sortMethod === 'merge_sort' ? mergeSort : mergeInsertionSort;
      const [sortedPayoffTuples, comparisons] = sortFunction(this.payoffTuples, PayoffTuple.compare);
      return [`Game is strictly competitive! (${comparisons} comparisons)`, sortedPayoffTuples];
    } catch (e) {
      return [`Game is not strictly competitive! \n${e.message}`, null];
    }
  }
}