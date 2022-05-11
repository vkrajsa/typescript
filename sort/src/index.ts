import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([4, 3, 2, 1]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
