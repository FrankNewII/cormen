export default class SearchTree {

    insert(key, val) {
        if (!this._root) {
            this._root = this._createVertex(key, val );
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

    delete(key) {

    }

    minimum() {
        let vertex = this._root;

        while (vertex) {
            if (vertex.left === null ) {
                return vertex;
            }

            vertex = vertex.left;
        }
    }

    maximum() {
        let vertex = this._root;

        while (vertex) {
            if (vertex.right === null ) {
                return vertex;
            }

            vertex = vertex.right;
        }
    }

    predecessor(k) {

    }

    successor(k) {

    }


    inordered(x) {
        if ( this._root ) {
            if (x) {
                this.inordered(x.left);
                console.log(x.key);
                this.inordered(x.right);
            }
        }
    }

    _createVertex(key, val, p) {
        return {parent: p || null, left: null, right: null, key, val };
    }
}
