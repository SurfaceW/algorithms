/**
 * 完全二叉树翻转
 * @from https://leetcode-cn.com/problems/invert-binary-tree/
 * @param {*} root 
 * @returns 
 */
var invertTree = function (root) {
  function switchNode(leftIndex, rightIndex) {
    var left = root[leftIndex];
    // avoid empty value slot
    if (root[leftIndex] === undefined || root[rightIndex] === undefined) return; 
    root[leftIndex] = root[rightIndex] || 0;
    root[rightIndex] = left || 0;
    if (!!root[leftIndex] || !!root[rightIndex]) {
      // warning: 交换的节点要注意是左左与右右，左右和右左进行交换
      switchNode(leftIndex * 2 + 1, rightIndex * 2 + 2);
      switchNode(rightIndex * 2 + 1, leftIndex * 2 + 2);
    }
  }
  if (root.length >= 2) {
    switchNode(1, 2);
  }
  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])); // [4, 7, 3, 9, 6, 3, 1]
console.log(invertTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // [1, 3, 2, 7, 6, 5, 4, 15, 14, 13, 12, 11, 10, 9, 8]
