// EXERCISE https://www.typescript-training.com/course/fundamentals-v3/15-dict-map-filter-reduce/

const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
};

interface Dict<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict

function mapDict<T>(items: Dict<T>, callback: (item: T, name: any) => void): Dict<T> {
  const newDictionary = {};

  for (const item in items) {
    newDictionary[item] = callback(items[item], item);
  }
  return newDictionary;
}

const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 10 * fruit.mass,
  name,
}));

// Array.prototype.filter, but for Dict

function filterDict<T>(items: Dict<T>, callback: (item: T) => boolean): Dict<T> {
  const dictionary: Dict<T> = {};

  for (const item in items) {
    if (callback(items[item])) {
      dictionary[item] = items[item];
    }
  }
  return dictionary;
}

const redFruits = filterDict(fruits, fruit => fruit.color === "red");
// Array.prototype.reduce, but for Dict
function reduceDict(...args: any[]): any {}

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// So T counts that you will define type dynamiclly when you create instance
new ArrayOfAnything<string>(["a", "b", "c"]);
// This is type inference on Generics...
new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

type StringArray = Array<string>;

// WE LINKED INPUT AND OUTPUT TOGETHER
// IF IT GETS ARRAY OF STRINGS, FN WILL KNOW RETURN MUST BE STRING TOO
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

function printAnything<ThisCanBeAnthing>(arr: ThisCanBeAnthing[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
// Dont use inference
// printAnything(["a", "b", "c"]);
//  this is better practice...

printAnything<string>(["a", "b", "c"]);

// Genric Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

// if there wasnt Printable interface, it wouldnt know if print method will exicts on the Type passed into the function
// here you tell the function that whatever we pass has to have Printable ... so its ok
// this is called constraint
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
