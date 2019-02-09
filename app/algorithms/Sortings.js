import {Heap} from '../data-structures/Heap'

class Sorter {
    constructor() {
        throw new Error({
            section: 'sorting',
            code: 1
        });

    }

    /*static mergeSort(arr, start, to ) {

        if ( start === undefined ) {
            start = 0;
            to = arr.length - 1;
        }

        if ( to - start > 1 ) {
            let idx = Math.floor((to - start) / 2 );

            Sorter.mergeSort(arr, start, idx );
            Sorter.mergeSort(arr, idx + 1, to );
            Sorter._mergeSortUnite(arr, start, to, idx);
        }

        return arr;
    }

    static _mergeSortUnite(arr, start, divideIdx, to) {
        for (let i = start; i < divideIdx; i++ ) {
            let v1 = arr[i];
            let id2 = divideIdx;

            while(arr[id2] < v1 && id2 <= to ) id2++;


        }
    }*/


    static quickSort(arr, startPos, toPos) {
        if (startPos === undefined) {
            startPos = 0;
            toPos = arr.length - 1;
        }

        if (startPos < toPos) {
            let divideIdx = Sorter._quickSortPortion(arr, startPos, toPos);
            Sorter.quickSort(arr, startPos, divideIdx);
            Sorter.quickSort(arr, divideIdx + 1, toPos);
        }
    }

    static _quickSortPortion(arr, startPos, toPos) {
        let currentValue = arr[startPos];

        let startIdx = startPos - 1;
        let lastIdx = toPos + 1;


        while (true) {

            do {
                lastIdx--;
            } while (arr[lastIdx] > currentValue);

            do {
                startIdx++;
            } while (arr[startIdx] < currentValue);

            if (arr[startIdx] > arr[lastIdx]) {

                if (lastIdx <= startIdx) {
                    return startIdx - 1;
                }

                let oldVal = arr[startIdx];

                arr[startIdx] = arr[lastIdx];

                arr[lastIdx] = oldVal;

            } else {
                return startIdx;
            }
        }
    }

    static heapSort(arr) {
        let heap = new Heap(arr);
        let sortedArr = [];

        while (heap.size) {
            sortedArr.unshift(heap.extractMax());
        }

        return sortedArr;
    }
}
