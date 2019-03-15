import HashFunctions from "../algorithms/HashFunctions";


export default class HashTable_OpenAddress_DoubleHashing {

    constructor(size, hashFn, hashFn2) {
        this._table = Array(size);

        this._size = size;
        this._hashFn = hashFn || HashFunctions.division.bind(null, size);
        this._hashFn2 = hashFn2 || HashFunctions.multiplication.bind(null, size);
    }

    insert(key, val) {

        let i = 0;

        while (i <= this._size ) {
            let hashedKey = this.generateKey(key, i);

            if (this._table[hashedKey] === undefined) {
                this._table[hashedKey] = {key, val};
                return i;
            }

            i++;
        }

        throw  new Error({
            section: 'data-structures',
            type: 'hash-table',
            code: 2,
            msg: 'overflow table'
        });
    }

    search(key) {
        let i = 0;

        while (i <= this._size ) {
            let hashedKey = this.generateKey(key, i);

            if (this._table[hashedKey] !== undefined) {
                if (this._table[hashedKey].key === key ) {
                    return this._table[hashedKey].val;
                } else {
                    i++;
                }
            } else {
                return;
            }
        }
    }


    generateKey(k, i) {
        return ( this._hashFn(k) + i * this._hashFn2(k) ) % this._size;
    }
}
