import LinkedList from "./LinkedList";


export default class HashTable {

    constructor(size, hashFn) {
        this._table = Array(size);

        this._hashFn = hashFn || function (v) {
            let sum = 0;
            let len = v.length;

            while(--len) {
                sum += v.charCodeAt(len);
            }

            return sum % size;
        }
    }

    insert(key, val) {
        let hashedKey = this._hashFn(key);
        let list = this._table[hashedKey] || new LinkedList;

        list.insert(key, val);
        this._table[hashedKey] = list;
    }

    search(key) {
        let hashedKey = this._hashFn(key);
        let list = this._table[hashedKey];

        if(list) {
            return list.search(key);
        }
    }

    delete(key) {
        let hashedKey = this._hashFn(key);
        let list = this._table[hashedKey];

        if(list) {
            return list.delete(key);
        }
    }
}
