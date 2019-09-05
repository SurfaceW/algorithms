var arr = [5, 4, 6, 8, 3, 7];

function switchEle(arr, c1, c2) {
  const temp = arr[c1];
  arr[c1] = arr[c2];
  arr[c2] = temp; 
}

function quickSort(left, right) {
  if (left > right) return;
  const temp = arr[left];
  let i = left;
  let j = right;
  while(i !== j) {
    while (arr[j] >= temp && i < j) {
      j--;
    }
    while (arr[i] <= temp && i < j) {
      i++;
    }
    if (i < j) {
      switchEle(arr, i, j);
    }
  }
  arr[left] = arr[j];
  arr[i] = temp;
  quickSort(left, i - 1);
  quickSort(i + 1, right);
}

quickSort(0, 5);
console.log(arr);
