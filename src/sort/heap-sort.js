const { switchIndex } = require('../utils/lang');

function maxHeapify(data, index) {
  // it has the sub node
  if (2 * index > data.length - 1) {
    return;
  }
  const root = data[index];
  const left = data[2 * index];
  const right = data[2 * index + 1] || 0;
  const max = Math.max(root, left, right);
  if (max === left) {
    switchIndex(data, index * 2, index);
    maxHeapify(data, index * 2);
  } else if (max === right) {
    switchIndex(data, index * 2 + 1, index);
    maxHeapify(data, index * 2 + 1);
  }
}

function buildMaxHeap(data = []) {
  const halfLength = Math.floor((data.length - 1) / 2);
  for (let i = halfLength; i > 0; i--) {
    maxHeapify(data, i);
  }
  return data;
}

function heapSort(data = []) {
  const heap = buildMaxHeap(['x', ...data]);
  const heapLength = data.length;
  console.log('build heap', heap);
  const result = [];
  for (let i = heapLength; i >= 1; i--) {
    switchIndex(heap, 1, i);
    result.push(heap.pop());
    maxHeapify(heap, 1);
  }
  return result;
}

// console.log(heapSort([2, 4, 5, 6, 8, 12, 3, 6, 9]));
console.log(heapSort([5, 3, 17, 10, 84, 19, 6, 22, 9]));

