import Heap from '../data-structures/Heap'
import Numbers from "./Numbers";

export default class Sorter {
    constructor() {
        throw new Error({
            section: 'algorithms',
            type: 'sorting',
            code: 1
        });

    }


    static mergeSort(arr, from, to) {

        if (from === undefined) {
            from = 0;
            to = arr.length - 1;
        }

        if (arr.length > 1 && to - from >= 1) {

            let divide = Math.floor((to - from) / 2);

            Sorter.mergeSort(arr, from, from + divide);
            Sorter.mergeSort(arr, from + divide + 1, to);
            Sorter._mergeSortMerge(arr, from, from + divide, from + divide + 1, to);
        }

        return arr;
    }

    static _mergeSortMerge(arr, from, to, from2, to2) {
        let tmpArr = [];
        let i = from, i2 = from2, i3 = 0;

        while(i <= to && i2 <= to2 ) {
            let a = arr[i],
                b = arr[i2];

            if (a > b) {
                tmpArr[i3++] = b;
                i2++;
            } else if (b > a ) {
                tmpArr[i3++] = a;
                i++;
            } else {
                tmpArr[i3++] = a;
                tmpArr[i3++] = b;
                i++; i2++;
            }
        }

        while(i <= to ) {
            tmpArr[i3++] = arr[i++];
        }

        while(i2 <= to2 ) {
            tmpArr[i3++] = arr[i2++];
        }

        tmpArr.forEach( (v, i) => arr[i + from] = v);
    }

    static countingSort(arr) {
        let countingObj = {};

        arr.forEach(v => countingObj[v] = (countingObj[v] || 0) + 1);

        let countedDigits = Object.keys(countingObj);

        let sortedArr = new Array(arr.length);

        for (let i = 1; i < countedDigits.length; i++) {
            let key = countedDigits[i];
            countingObj[key] = countingObj[key] + countingObj[countedDigits[i - 1]];
        }

        arr.reduceRight((a, v) => {
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

                    arr.splice(i2, 0, arr.splice(i, 1)[0]);
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

            if (startPos < divideIdx - 1) {
                Sorter.quickSort(arr, startPos, divideIdx - 1);
            }

            if (divideIdx < toPos) {
                Sorter.quickSort(arr, divideIdx, toPos);
            }
        }

        return arr;
    }

    static _quickSortPortion(arr, startPos, toPos, currentValue) {
        currentValue = currentValue || arr[startPos];

        let i = startPos,
            j = toPos;

        while (i <= j) {
            while (arr[i] < currentValue) {
                i++;
            }
            while (arr[j] > currentValue) {
                j--;
            }
            if (i <= j) {
                let oldVal = arr[j];
                arr[j] = arr[i];
                arr[i] = oldVal;
                i++;
                j--;
            }
        }
        return i;
    }

    static randomizedQuickSort(arr, startPos, toPos) {
        if (startPos === undefined) {
            startPos = 0;
            toPos = arr.length - 1;
        }

        if (startPos < toPos) {
            let divideIdx = Sorter._quickSortRandomizedPortion(arr, startPos, toPos);
            Sorter.quickSort(arr, startPos, divideIdx);
            Sorter.quickSort(arr, divideIdx + 1, toPos);
        }

        return arr;
    }

    static _quickSortRandomizedPortion(arr, startPos, toPos) {
        let randomIdx = Math.round(Numbers.random(startPos, toPos));
        let startVal = arr[randomIdx];
        arr[randomIdx] = arr[startPos];
        arr[startPos] = startVal;

        return Sorter._quickSortPortion(arr, startPos, toPos);

    }

    static heapSort(arr) {
        let heap = new Heap(arr);
        let sortedArr = [];

        while (heap.heapSize) {
            sortedArr.unshift(heap.extractHighest());
        }

        return sortedArr;
    }

    static radixSort(arr, getNumbFn) {
        let columnsSort = JSON.parse(JSON.stringify((new Array(10)).fill([])));
        let sorted = false;
        let cycleTimes = 0;

        while (!sorted) {
            let sortedDigits = 0;

            arr = arr.filter(v => {
                let str = (getNumbFn && getNumbFn(v).toString()) || v.toString();
                let strDigit = str.charAt(str.length - 1 - cycleTimes);

                if (strDigit) {
                    sortedDigits++;
                    columnsSort[+strDigit].push(v);
                    return false;
                } else {
                    return true;
                }
            });

            columnsSort.forEach((numbers, i, columnsSort) => {
                columnsSort[i] = numbers.filter(number => {
                    arr.push(number);
                    return false;
                });
            });

            if (sortedDigits > 1) {
                cycleTimes++;
            } else {
                sorted = true;
            }
        }

        return arr;
    }

    static bucketSort(arr) {
        let n = arr.length;
        let sortableObj = {};

        arr = arr.filter(v => {
            let k = Math.floor(v * n);
            if (sortableObj[k] || (sortableObj[k] = [])) {
                sortableObj[k].push(v);
            }

            return false;
        });

        let keys = Object.keys(sortableObj);

        keys.forEach(v => arr.push(...Sorter.insertionSort(sortableObj[v])));

        return arr;
    }
}
