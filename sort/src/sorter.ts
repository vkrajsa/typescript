// INSTRUCTIONS ON HOW TO BE ELIGIBLE TO BE SORTING
// for Sorter to sort things you need 3 things to give us
// length , compare method, swap method...
// if you gives us this you are eligible to use this Sorter algorithm

interface Sortable {
  length: number;
  // the name of argument doesnt have to be anything...its just for readability
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // we promise when child classes from sorter will provide these methods
  //
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
