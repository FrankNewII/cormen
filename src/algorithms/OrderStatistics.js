import {Sorter} from './Sorter'

export class OrderStatistics {

    static minMax(arr) {
        let min, max;
        min = max = arr[0];

        for (let i = 0; i <= arr.length; i = i + 2) {

            if (arr[i] !== undefined) {

                if (arr[i] > arr[i - 1]) {
                    if (max < arr[i]) {
                        max = arr[i];
                    }

                    if (min > arr[i - 1]) {
                        min = arr[i - 1];
                    }
                } else {
                    if (max < arr[i - 1]) {
                        max = arr[i - 1];
                    }

                    if (min > arr[i]) {
                        min = arr[i];
                    }
                }

            } else {
                if (arr[i - 1] > max) {
                    max = arr[i - 1];
                }

                if (arr[i - 1] < min) {
                    min = arr[i - 1];
                }
            }

        }

        return {min, max};
    }

    static randomized(arr, i, startPos, toPos ) {
        if (startPos === toPos ) {
            return arr[toPos];
        }

        let dividerIdx = Sorter._quickSortRandomizedPortion(arr, startPos, toPos );
        let realDividerIdx = dividerIdx - startPos + 1;

        if (i <= realDividerIdx) {
            return OrderStatistics.randomized(arr, i, startPos, dividerIdx );
        } else {
            return OrderStatistics.randomized(arr, i, dividerIdx + 1, toPos );
        }
    }

    static BFPRT(arr, i) {
        arr = arr.map(v => v);
        let sortedArr = [];

        let counter = 6;
        let currentI = -1;
        arr.forEach( v => {
            counter++;

            if (counter < 6) {
                sortedArr[currentI].push(v);
            } else {
                counter = 1;
                currentI++;
                sortedArr.push([v]);
            }
        });

        let medians = [];

        sortedArr.forEach( v => {
            medians.push( OrderStatistics.median(Sorter.insertionSort(v)) );
        } );


        let medianOfMedians = OrderStatistics.median( Sorter.insertionSort(medians) );

        let k = Sortings._quickSortPortion(arr, 0, arr.length - 1, medianOfMedians);

        if (i === k ) {
            return arr[k];
        } else {

            let nArr = arr.filter( ( v, idx ) => {
                if ( i > k ) {
                    return k >= idx;
                } else {
                    return k <= idx;
                }
            });

            i = i > k ? i - k : i;

            return OrderStatistics.BFPRT(nArr, i);
        }
    }

    static median(arr) {
        let len = arr.length;

        return arr[ len % 2 ? Math.floor(len / 2 ) : len / 2 - 1 ]
    }
}
