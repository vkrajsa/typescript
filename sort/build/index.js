"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-1, 54, 4, 3, 2, 1]);
numbersCollection.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("xazzzzxxasadaaa");
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(-20);
linkedList.add(-10);
linkedList.add(100);
linkedList.add(5000);
linkedList.add(500);
linkedList.sort();
linkedList.print();
