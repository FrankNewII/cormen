export class LinkedList {

    constructor(val) {
        this._head = {
            val,
            next: null,
            prev: null
        };
    }

    insert(val) {
        this._head = {
            val,
            next: this._head,
            prev: null
        };

        this._head.next.prev = this._head;
    }

    search(k) {
        let item = this._head;

        while(k--) {
            item = item.next;

            if (!item) {
                return undefined;
            }
        }

        return item ? item : undefined;
    }

    delete(k) {
        let item = this.search(k);
        console.log(item);
        let next = item.next;
        let prev = item.prev;

        if (next) next.prev = prev;
        if (prev) prev.next = next;

        if (k === 0) {
            this._head = next;
        }

    }
}
