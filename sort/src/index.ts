import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([4, 3, 2, 1]);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// TODO : linked list is not done, follow the tutorial

// const charactersCollection = new CharactersCollection("xxasadaaa");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-20);
linkedList.add(-10);
linkedList.add(100);
linkedList.add(5000);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
