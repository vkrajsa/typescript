class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - j - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

function sorterFn(data: number[]): number[] {
  const collection = data;
  const length = collection.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (collection[j] > collection[j + 1]) {
        const leftHand = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = leftHand;
      }
    }
  }
  return collection;
}

const unsortedData = [4, 3, 2, 1];
const sorter = new Sorter(unsortedData);
sorter.sort();
console.log(sorterFn(unsortedData));

console.log(sorter.collection);
