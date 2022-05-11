"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
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
exports.Sorter = Sorter;
// I am going to work on function and not a class...since react is all about functional programming
function sorterFn(collection) {
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
