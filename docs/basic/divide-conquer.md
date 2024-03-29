# 分治策略

分治策略的概括：递归地求解一个问题，在每层递归中应用如下三个步骤：

- 分解（Divide）：将问题划分为一些子问题，子问题的形式与原问题一样，只是规模更小
- 解决（Conquer）：递归地求解出子问题，如果子问题的规模足够小，则停止递归，直接求解
- 合并（Combine）：将子问题的解组合为原问题的解


## 递归式的算法复杂度推导

- 代入法：使用数学归纳法证明
- 递归树法：将递归式转化为递归树，节点表示不同层次产生的递归代价，然后采用边界和技术来求解递归式
- 主方法：可以直接求解形式如 `T(n) = aT(n/b) + f(n)` 的公式的解

## 典型使用了分治策略求解的问题

- 归并排序算法：最经典的实现 `merge-sort.js`
- 最大子数组问题
- 矩阵乘法 Strassen 算法
- ...

# 参考

- 算法导论（第三版）
