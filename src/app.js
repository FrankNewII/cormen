import {algorithms} from "./algorithms/index";
import {dataStructures} from "./data-structures/index";

/**
 * Algorithms
 * */

console.group('Algorithms');

let heapsSortedArr = algorithms.Sorter.heapSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);
let quickSortedArr = algorithms.Sorter.quickSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);
let insertSortedArr = algorithms.Sorter.insertionSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);
let digitalSort = algorithms.Sorter.radixSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);
let countingSort = algorithms.Sorter.countingSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);
let randomizedQuickSort = algorithms.Sorter.randomizedQuickSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);
let bucketSort = algorithms.Sorter.bucketSort([43, 32, 3, 2, 3, 4, 53, 5, 43, 45, 7, 7, 66, 4545, 67, 445, 3, 345, 5]);


console.group('Sorts');
console.log('heapsSortedArr', heapsSortedArr);
console.log('digitalSort', digitalSort);
console.log('countingSort', countingSort);
console.log('insertSortedArr', insertSortedArr);
console.log('quickSortedArr', quickSortedArr);
console.log('bucketSort', bucketSort);
console.log('randomizedQuickSort', randomizedQuickSort);
console.groupEnd();

console.group('Numeric');
console.log('random fr. 5 to 100', algorithms.Numbers.random(5, 100));

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



let heap = new dataStructures.Heap([1,2,3,4,5,6,7,8,9]);

console.group('Heap');
console.log(heap);
console.log(heap.extractHighest());
console.log(heap.extractHighest());
console.log(heap.extractHighest());
console.log(heap);

console.groupEnd();



let hashTable = new dataStructures.HashTable(5);

hashTable.insert('a', 10);
hashTable.insert('b', 20);
hashTable.insert('c', 30);

console.group('HashTable');
console.log(hashTable);
console.log(hashTable.search('a'));
console.log(hashTable.search('b'));
console.log(hashTable.search('c'));
console.log(hashTable);

console.groupEnd();






let hashTable_OpenAddress = new dataStructures.HashTable_OpenAddress_DoubleHashing(10);

hashTable_OpenAddress.insert('a', 10);
hashTable_OpenAddress.insert('b', 20);
hashTable_OpenAddress.insert('c', 20);
hashTable_OpenAddress.insert('d', 201);
hashTable_OpenAddress.insert('e', 30);

console.group('HashTable_OpenAddress');
console.log(hashTable_OpenAddress);
console.log(hashTable_OpenAddress.search('a'));
console.log(hashTable_OpenAddress.search('b'));
console.log(hashTable_OpenAddress.search('c'));
console.log(hashTable_OpenAddress.search('d'));
console.log(hashTable_OpenAddress);

console.groupEnd();





let searchTree = new dataStructures.SearchTree();

searchTree.insert(15, 15);
searchTree.insert(5, 5);
searchTree.insert(3, 3);
searchTree.insert(12, 12);
searchTree.insert(10, 10);
searchTree.insert(13, 13);
searchTree.insert(6, 6);
searchTree.insert(7, 7);
searchTree.insert(16, 16);
searchTree.insert(20, 20);
searchTree.insert(18, 18);
searchTree.insert(23, 23);

console.group('SearchTree');
console.log(searchTree);
console.log(searchTree.search(15));
console.log(searchTree.search(23));
console.log(searchTree.search(16));
console.log(searchTree.search(3));
console.log('successor', searchTree.successor(searchTree.search(20)));
console.log('predecessor', searchTree.predecessor(searchTree.search(7)));
console.log(searchTree.minimum());
console.log(searchTree.maximum());

let inOrder = [];
searchTree.inOrdered(searchTree._root, v => inOrder.push(v));

console.log(inOrder);

inOrder.length = 0;
searchTree.delete(searchTree.search(5));
searchTree.inOrdered(searchTree._root, v => inOrder.push(v));
console.log(inOrder);

inOrder.length = 0;
searchTree.delete(searchTree.search(15));
searchTree.inOrdered(searchTree._root, v => inOrder.push(v));
console.log(inOrder);

console.groupEnd();
console.groupEnd();






let rbSearchTree = new dataStructures.RedBlackTree();

rbSearchTree.insert(15, 15);
rbSearchTree.insert(5, 5);
rbSearchTree.insert(3, 3);

console.group('RedBlackTree');
console.log(rbSearchTree);
console.log(rbSearchTree.search(15));
console.log(rbSearchTree.search(5));
console.log('successor', rbSearchTree.successor(rbSearchTree.search(5)));
console.log('predecessor', rbSearchTree.predecessor(rbSearchTree.search(5)));
console.log(rbSearchTree.minimum());
console.log(rbSearchTree.maximum());

console.groupEnd();
console.groupEnd();

















console.groupEnd();
