"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([4, 3, 2, 1]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// TODO : linked list is not done, follow the tutorial
// const charactersCollection = new CharactersCollection("xxasadaaa");
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(-20);
linkedList.add(-10);
linkedList.add(100);
linkedList.add(5000);
// CREATE A WAY TO CALL collection.sort()
// probably we need to extend Sorter method to be used by other class as well and extend it somehow..
const sorter = new sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
