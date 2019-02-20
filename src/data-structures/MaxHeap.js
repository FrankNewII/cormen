import {Heap} from '../data-structures/Heap'

export class MaxHeap extends Heap {

    constructor(arr) {
        super(arr);
    }

    _heapCompareVals(idx, smallestIdx) {
        return this._getComparedValue(idx) && idx < this.heapSize
            && this._getComparedValue(idx) < this._getComparedValue(smallestIdx);
    }
}