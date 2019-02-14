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

    static countingSort(arr) {
        let countingObj = {};

        arr.forEach(v => countingObj[v] = (countingObj[v] || 0) + 1 );

        let countedDigits = Object.keys(countingObj);

        let sortedArr = new Array(arr.length);

        for( let i = 1; i < countedDigits.length; i++ ) {
            var key = countedDigits[i];
            countingObj[key] = countingObj[key] + countingObj[countedDigits[i - 1]];
        }

        arr.reduceRight( (a, v) => {
            sortedArr[countingObj[v] - 1] = v;
            --countingObj[v];
        }, 0);

        return sortedArr;
    }

    static insertionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];

            for (let i2 = 0; i2 <= i && i > 0; i2++) {
                 let compareVal = arr[i2];

                 if (compareVal >= val || i === i2) {

                    arr.splice(i2, 0, ...arr.splice(i, 1));
                    break;
                 }
            }
        }

        return arr;
    }

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

        while (heap.heapSize) {
            sortedArr.unshift(heap.extractMax());
        }

        return sortedArr;
    }
}
