export default class LinkedList {

    insert(key, val) {
        this._head = {
            key,
            val,
            next: this._head || null,
            prev: null
        };

        if (this._head.next ) {
            this._head.next.prev = this._head;
        }
    }

    search(key) {
        let item = this._head;

        do {
            if (item) {
                if (item.key === key) {
                    return item;
                }

                item = item.next;
            }

        } while(item);

    }

    delete(key) {
        let item = this.search(key);

        let next = item.next;
        let prev = item.prev;

        if (next) next.prev = prev;
        if (prev) prev.next = next;
    }
}
