export default class Queue {

    constructor() {
        this._queue = [];
    }

    isEmpty() {
        return !this._queue.length;
    }

    enqueue(val) {
        this._queue.push(val);
    }

    dequeue() {

        return this._queue.shift();
    }
}
