function merge(r1 = [], r2 = []) {
  const result = [];
  for (let i = 0; i < r1.length; i+= 1) {
    while(r2[0] < r1[i]) {
      result.push(r2.shift());
    }
    result.push(r1[i]);
  }
  return [...result, ...r2];
}

function mergeSort(stack1 = [], stack2 = []) {
  let r1 = stack1;
  let r2 = stack2;
  let cursor = 0;
  if (stack1.length > 1) {
    cursor = Math.floor(stack1.length / 2);
    r1 = mergeSort(stack1.slice(cursor), stack1.slice(0, cursor));
  }
  if (stack2.length > 1) {
    cursor = Math.floor(stack2.length / 2);
    r2 = mergeSort(stack2.slice(cursor), stack2.slice(0, cursor));
  }
  return merge(r1, r2);
}

console.log(mergeSort([2, 3, 8, 4, 9], [1, 6, 4, 21, 33, 75]));
