export class Heap {
    constructor(arr, i, parent) {
        this.arr = arr;

        if( !i ) {
            i = 0;


            this.value = arr[i];
            this.commonParams = {i, size: arr.length};

            this.left = new Heap(arr, this.i, this);
            this.right = new Heap(arr, this.i, this);

            this.left._build();
            this.right._build();
        } else {
            this.i = i;
            this.value = arr[++this.i];

            this.parent = parent;
        }

    }

    _build() {
        this.left = new Heap(this.arr, this.i, this);
        this.right = new Heap(this.arr, this.i, this);
    }

    _heapify() {
        return Math.floor(i / 2);
    }

    extractMin() {
        this.commonParams.size--;

        return this.value;
    }
}

export class PriorityQueue extends Heap {
    extractMax() {
        this.commonParams.size--;

        return this.value;
    }
}
