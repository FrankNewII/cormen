export default class SearchTree {

    insert(key, val) {
        if (!this._root) {
            return this._root = this._createVertex(key, val );
        } else {
            let vertex = this._root;
            let lastVtx = vertex;
            do {

                if (vertex.key > key ) {
                    lastVtx = vertex;
                    vertex = vertex.left;

                } else {
                    lastVtx = vertex;
                    vertex = vertex.right;
                }

            } while(vertex);

            vertex = this._createVertex(key, val, lastVtx);

            if (lastVtx.key > key ) {
                lastVtx.left = vertex;
            } else {
                lastVtx.right = vertex;
            }

            return vertex;
        }


    }

    search(key) {
        let vertex = this._root;

        do {

            if (vertex.key === key ) {
                return vertex;
            } else {
                if (vertex.key > key ) {
                    vertex = vertex.left;
                } else {
                    vertex = vertex.right;
                }
            }

        } while(vertex);
    }

    delete(vertex) {
        let parent = vertex.parent;

        if ( !vertex.right && !vertex.left ) { //child-free
            if ( parent ) {
                if (parent.left === vertex) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
        } else if (!vertex.right || !vertex.left ) { //child
            let child = vertex.right || vertex.left;

            if (parent.left === vertex ) {
                parent.left = child;
            } else {
                parent.right = child;
            }

            child.parent = parent;
        } else { //children
            let next = this.successor(vertex);
            vertex.key = next.key;
            vertex.val = next.val;

            this.delete(next);
        }
    }

    minimum(vertex) {
        vertex = vertex || this._root;

        while (vertex) {
            if (vertex.left === null ) {
                return vertex;
            }

            vertex = vertex.left;
        }
    }

    maximum(vertex) {
        vertex = vertex || this._root;

        while (vertex) {
            if (vertex.right === null ) {
                return vertex;
            }

            vertex = vertex.right;
        }
    }

    predecessor(vertex) {
        if (vertex.left !== null ) {
            return this.maximum(vertex.left);
        }

        let next = vertex.parent;

        while(next !== null && vertex === next.left ) {
            vertex = next;
            next = next.parent;
        }

        return next;
    }

    successor(vertex) {
        if (vertex.right !== null ) {
            return this.minimum(vertex.right);
        }

        let next = vertex.parent;

        while(next !== null && vertex === next.right ) {
            vertex = next;
            next = next.parent;
        }

        return next;
    }


    inOrdered(vertex, fn) {
        if ( this._root ) {
            if (vertex) {
                this.inOrdered(vertex.left, fn);
                fn(vertex.key);
                this.inOrdered(vertex.right, fn);
            }
        }
    }

    postOrdered(vertex, fn) {
        if ( this._root ) {
            if (vertex) {
                this.inOrdered(vertex.left, fn);
                this.inOrdered(vertex.right, fn);
                fn(vertex.key);
            }
        }
    }

    preOrdered(vertex, fn) {
        if ( this._root ) {
            if (vertex) {
                fn(vertex.key);
                this.inOrdered(vertex.left, fn);
                this.inOrdered(vertex.right, fn);
            }
        }
    }

    _createVertex(key, val, p) {
        return {parent: p || null, left: null, right: null, key, val };
    }
}
