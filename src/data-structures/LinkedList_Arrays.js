import Stack from './Stack';

export class LinkedList_Arrays {

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
            this._lastAddedKey = this._prev[lastIdx] = emptyKey;
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
        this._vals[k] = undefined;
        this._next[k] = undefined;
        this._prev[k] = undefined;

        if (this._prev[k + 1] !== undefined) {
            this._prev[k + 1] = this._prev[k - 1];
        }

        if (this._next[k - 1] !== undefined) {
            this._next[k - 1] = this._next[k + 1];
        }

    }
}
