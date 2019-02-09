export class Heap {
    constructor(arr) {
        this._heap = arr.map(v => v);
        this._build();
    }

    _heapify(currentIdx) {
        let leftVertexId;
        let rightVertexId;
        let largestVertexId;
        let temp;

        while(1)
        {
            leftVertexId = 2 * currentIdx + 1;
            rightVertexId = 2 * currentIdx + 2;
            largestVertexId = currentIdx;

            if (this._heap[leftVertexId] && leftVertexId < this.heapSize && this._heap[leftVertexId] > this._heap[largestVertexId])
            {
                largestVertexId = leftVertexId;
            }

            if (this._heap[rightVertexId] && rightVertexId < this.heapSize && this._heap[rightVertexId] > this._heap[largestVertexId])
            {
                largestVertexId = rightVertexId;
            }

            if (largestVertexId === currentIdx)
            {
                break;
            }

            temp = this._heap[currentIdx];
            this._heap[currentIdx] = this._heap[largestVertexId];
            this._heap[largestVertexId] = temp;
            currentIdx = largestVertexId;
        }

    }

    _build() {
        for (let i = Math.floor(this.heapSize / 2 ); i >= 0; i--)
        {
            this._heapify(i);
        }
    }

    extractMax() {
        let maxVal = this._heap[0];
        this._heap[0] = this._heap[this.heapSize - 1];
        this._heap.length = this.heapSize - 1;
        this._heapify(0);

        return maxVal;
    }

    get heapSize() {
        return this._heap.length ;
    }
}
