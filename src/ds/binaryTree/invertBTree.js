/**
 * 完全二叉树翻转
 * @from https://leetcode-cn.com/problems/invert-binary-tree/
 * @param {*} root 
 * @returns 
 */
var invertTree = function (root) {
  function switchNode(leftIndex, rightIndex) {
    var left = root[leftIndex];
    if (root[leftIndex] === undefined || root[rightIndex] === undefined) return; 
    root[leftIndex] = root[rightIndex] || 0;
    root[rightIndex] = left || 0;
    if (!!root[leftIndex] || !!root[rightIndex]) {
      switchNode(leftIndex * 2 + 1, rightIndex * 2 + 2);
      switchNode(rightIndex * 2 + 1, leftIndex * 2 + 2);
    }
  }
  if (root.length >= 2) {
    switchNode(1, 2);
  }
  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
