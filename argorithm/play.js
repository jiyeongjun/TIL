const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
//const readFileSyncAddress = "backjun/input.txt"; // vscode Test

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const log = console.log;

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      [this.values[parentIdx], this.values[idx]] = [element, parent];
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    } else return 0;
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) leftChild = this.values[leftChildIdx];
      if (leftChild > element) swap = leftChildIdx;

      if (rightChildIdx < length) rightChild = this.values[rightChildIdx];
      if (
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
      )
        swap = rightChildIdx;

      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [this.values[swap], element];
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
const res = [];

for (const el of input.slice(1)) {
  el || res.push(heap.extractMax());
  heap.insert(el);
}

log(res.join("\n"));
