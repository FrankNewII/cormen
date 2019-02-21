export default class Stack {

    constructor() {
        this._stack = [];
    }

    isEmpty() {
        return !this._stack.length;
    }

    push(val) {
        this._stack.push(val);
    }

    pop() {
        return this._stack.pop();
    }
}
