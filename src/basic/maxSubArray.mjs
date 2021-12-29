/**
 * 连续子数组的最大和
 * @see https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * 经典的动态规划问题
 */

const sumList = [];

export function getMaxSubArray(arr = []) {
  sumList[0] = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    sumList[i + 1] = Math.max(sumList[i] + arr[i + 1], arr[i + 1]);
  }
  let maxNumber = sumList[0];
  sumList.forEach(i => {
    if (i >= maxNumber) {
      maxNumber = i;
    }
  });
  return maxNumber;
}

console.log(getMaxSubArray([1, 2, 3, 4])); // 10
console.log(getMaxSubArray([1, 2, 3, 4, -12, 18, -13, 12, 13])); // 30

/**
 * 当然，本题目也可以使用
 * - 暴力解法：遍历所有情形 O(n^2)
 * - 分治策略：分解 + 合并比大小，算法复杂度 O(nlgn)
 */
