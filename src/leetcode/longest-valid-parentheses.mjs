/**
 * @param {string} s
 * @return {number}
 * @from https://leetcode-cn.com/problems/longest-valid-parentheses/solution/dai-ma-fei-chang-jian-ji-zhu-shi-xiang-x-y5rc/
 */
var longestValidParentheses = function (s) {
  let stack = [];
  // dp[i] 的定义：记录以 s[i-1] 结尾的最长合法括号子串长度
  let dp = new Array(s.length + 1).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      // 遇到左括号，记录索引
      stack.push(i);
      // 左括号不可能是合法括号子串的结尾
      dp[i + 1] = 0;
    } else {
      if (stack.length) {
        // 配对的左括号对应索引
        let leftIndex = stack.pop();
        // 以这个右括号结尾的最长子串长度
        let len = 1 + i - leftIndex + dp[leftIndex];
        dp[i + 1] = len;
      } else {
        // 没有配对的左括号
        dp[i + 1] = 0;
      }
    }
  }
  // 计算最长子串的长度
  let res = Math.max(...dp);
  return res;
};

const tc1 = '()()()';
const tc2 = '()(())(())()';
const tc3 = '(())(()())())))(()()())()()()()()';
const tc4 = '))()()(()';
const tc5 = '((()))';
const tc6 = '(((((';
const tc7 = '())))))()()))))';
const tc8 = '()()((())()())(())))))))()()()';
const tc9 = ")()())";
const tc10 = '((((()()()))()()()((())()()))';
const tc11 = '(((()()()))()()()((())()()))';
const tc12 = '';

console.log(longestValidParentheses(tc10));
