import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([-1, 54, 4, 3, 2, 1]);
numbersCollection.sort();
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("xazzzzxxasadaaa");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-20);
linkedList.add(-10);
linkedList.add(100);
linkedList.add(5000);
linkedList.add(500);
linkedList.sort();
linkedList.print();
