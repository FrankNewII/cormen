import Stack from './Stack';

export default class LinkedList_Arrays {

    constructor(val) {
        this._vals = [val];
        this._next = [undefined];
        this._prev = [undefined];
        this._lastAddedKey = 0;
        this._emptyPlacesStack = new Stack;
    }

    insert(val) {
        if (this._emptyPlacesStack.isEmpty()) {
            let lastIdx = this._lastAddedKey;

            this._vals.push(val);
            this._next.push(lastIdx);
            this._prev.push(undefined);
            this._lastAddedKey = this._prev[lastIdx] = this._vals.length - 1;
        } else {
            let lastIdx = this._lastAddedKey;
            let emptyKey = this._emptyPlacesStack.pop();

            this._vals[emptyKey] = val;
            this._next[emptyKey] = lastIdx;
            this._prev[emptyKey] = undefined;
            this._lastAddedKey = this._next[lastIdx] = emptyKey;
        }

    }

    search(k) {
        return this._vals[k] !== undefined ? {
            val: this._vals[k],
            next: this._next[k],
            prev: this._prev[k]
        } : undefined;
    }

    delete(k) {
        this._emptyPlacesStack.push(k);


        if (this._prev[k] ) this._next[this._prev[k]] = this._next[k];
        if (this._next[k] ) this._prev[this._next[k]] = this._prev[k];

        this._vals[k] = undefined;
        this._next[k] = undefined;
        this._prev[k] = undefined;

    }
}
