import Heap from '../data-structures/Heap'

export default class PriorityQueue extends Heap {

    constructor(arr) {
        super(arr);
    }

    _getComparedValue(idx) {
        return this._heap[idx].priority;
    }
}
