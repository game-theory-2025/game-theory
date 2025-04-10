export class PayoffTuple {
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