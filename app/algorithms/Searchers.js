import {Sortings} from '../algorithms/Sortings'

export class Searchers {

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

    static orderStatic(arr, i, startPos, toPos ) {
        if (startPos === toPos ) {
            return arr[toPos];
        }

        let dividerIdx = Sortings._quickSortRandomizedPortion(arr, startPos, toPos );
        let realDividerIdx = dividerIdx - startPos + 1;

        if (i <= realDividerIdx) {
            return Searchers.orderStatic(arr, i, startPos, dividerIdx );
        } else {
            return Searchers.orderStatic(arr, i, dividerIdx + 1, toPos );
        }
    }
}
