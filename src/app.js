import { algorithms } from "./algorithms/index";
import { dataStructures } from "./data-structures/index";

let heapsSortedArr = algorithms.Sorter.heapSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let quickSortedArr = algorithms.Sorter.quickSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);
let insertSortedArr = algorithms.Sorter.insertionSort([43,32,3,2,3,4,53,5,43,45,7,7,66,4545,67,445,3,345,5]);

let stack = new dataStructures.Stack();
let queue = new dataStructures.Queue();

console.group('Stack');
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

console.group('Sortings');
console.log('heapsSortedArr', heapsSortedArr);
console.log('insertSortedArr', insertSortedArr);
console.log('quickSortedArr', quickSortedArr);
console.groupEnd();
