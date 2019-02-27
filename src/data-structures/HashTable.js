import LinkedList from "./LinkedList";
import HashFunctions from "../algorithms/HashFunctions";


export default class HashTable {

    constructor(size, hashFn) {
        this._table = Array(size);

        this._hashFn = hashFn || HashFunctions.universalHashing(size);
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
