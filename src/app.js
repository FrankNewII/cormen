import { algorithms } from "./algorithms/index";
import { dataStructures } from "./data-structures/index";

/**
 * Algorithms
 * */

console.group('Algorithms');

let heapsSortedArr = algorithms.Sorter.heapSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let quickSortedArr = algorithms.Sorter.quickSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let insertSortedArr = algorithms.Sorter.insertionSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let digitalSort = algorithms.Sorter.radixSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let countingSort = algorithms.Sorter.countingSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let randomizedQuickSort = algorithms.Sorter.randomizedQuickSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let bucketSort = algorithms.Sorter.bucketSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);



console.group('Sorts');
console.log('heapsSortedArr', heapsSortedArr);
console.log('digitalSort', digitalSort);
console.log('countingSort', countingSort);
console.log('insertSortedArr', insertSortedArr);
console.log('quickSortedArr', quickSortedArr);
console.log('bucketSort', bucketSort);
console.log('randomizedQuickSort', randomizedQuickSort);
console.groupEnd();

console.groupEnd();



/**
 * DataStructures
 * */


console.group('DataStructures');
console.group('Stack');

let stack = new dataStructures.Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.isEmpty());
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
console.groupEnd();

let queue = new dataStructures.Queue();

console.group('Queue');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
console.groupEnd();

let linkedList = new dataStructures.LinkedList();

linkedList.insert(0, 1);
linkedList.insert(1, 2);
linkedList.insert(2, 3);

console.group('LinkedList');
console.log(linkedList);
console.log(linkedList.search(2));
console.log(linkedList.search(1));
console.log(linkedList.search(0));
console.log(linkedList.delete(1));
console.log(linkedList);

console.groupEnd();

let hashTable = new dataStructures.HashTable(5);

hashTable.insert('artem',  10);
hashTable.insert('den',  20);
hashTable.insert('ben',  30);

console.group('HashTable');
console.log(hashTable);
console.log(hashTable.search('artem'));
console.log(hashTable.search('den'));
console.log(hashTable.search('ben' ));
console.log(hashTable);

console.groupEnd();

console.groupEnd();
