import { NumbersCollection } from "./NumbersCollection";

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

// I am going to work on function and not a class...since react is all about functional programming
function sorterFn(collection: number[] | string) {
  const length = collection.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      // this works only for collection of numbers
      // TYPE GUARD
      if (collection instanceof Array) {
        if (collection[j] > collection[j + 1]) {
          const leftHand = collection[j];
          collection[j] = collection[j + 1];
          collection[j + 1] = leftHand;
        }
      }
    }
  }
  return collection;
}
