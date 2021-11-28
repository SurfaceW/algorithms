# 二叉树

二叉树在网上的 [文章](https://en.wikipedia.org/wiki/Binary_tree) 非常多，这里就精简地说一下二叉树的最重要的特征：

## 完全二叉树

> 摘要自维基百科

* The number of nodes $n$ in a full binary tree is at least $2h+1$ and at most $2^{h+1}-1 $, where $h$ is the **height** of the tree. A tree consisting of only a root node has a height of 0.
* The number of leaf nodes $l$ in a perfect binary tree, is $l = (n + 1) / 2$ because the number of non-leaf (a.k.a. internal) nodes $n - l = \sum_{k=0}^{\log_2(l)-1} 2^k = 2^{\log_2(l)} - 1 = l - 1$.
* This means that a full binary tree with $l$ leaves has $n = 2l - 1$ nodes.
* In a *balanced* full binary tree, $h = \lceil \log_2(l)\rceil + 1 = \lceil \log_2((n + 1) / 2)\rceil + 1 = \lceil \log_2(n + 1)\rceil$
* In a '''perfect''' full binary tree, $l = 2^{h}$ thus $n = 2^{h+1} - 1$.
* The number of null links (i.e., absent children of the nodes) in a binary tree of ''n'' nodes is (''n''+1).
* The number of internal nodes in a '''complete''' binary tree of ''n'' nodes is $\lfloor n/2\rfloor $.
* For any non-empty binary tree with ''n''<sub>0</sub> leaf nodes and ''n''<sub>2</sub> nodes of degree 2, ''n''<sub>0</sub> = ''n''<sub>2</sub> + 1.

> 对于 Array 这种类型有特殊化。

- 具体的节点 $i$，其左子节点 $2i+1$，右子节点为 $2i+2$

