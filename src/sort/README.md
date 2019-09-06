# Sort

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g6px26ybcfj316q0jcdi3.jpg)

# Heap sort

1. `Heap` 尤其是（二叉堆）是一种经典的数据结构，对堆操作的时间复杂度都能够能够将线性 $O(n)$ 降低到 $O(lg(n))$  之上。
2. 最大堆、最小堆是两种有序的堆结构，可以用于排序算法（堆排序）以及构造优先级队列之上。
3. 在最大堆的构造，从非叶子节点开始，对子树进行 *MAX_HEAPIFY* 操作。

# Merge sort

1. 归并排序算法最关键是用空间复杂度换取时间复杂度，适合磁盘上的排序
2. 归并排序算法用的是分治策略，递归将数组分割 => 合并

# Quick sort

1. 经典排序算法，本质上交换类型的排序
2. 算法通过每一次运算出一个 key 值在数组中的确定位置，然后分划为两个子问题在递归做交换，以提升时间效率

# Combine the sort algorithms together

对快速排序算法优化的选择：

- key 值（pivot）的选择算法，保证值大小适中（可采样）避免 nlg(n) 的复杂度
- 混合排序算法，Introsort 结合 heapsort / quicksort 的思路

From wiki: https://en.wikipedia.org/wiki/Introsort

```javascript
procedure sort(A : array):
    let maxdepth = ⌊log(length(A))⌋ × 2
    introsort(A, maxdepth)

procedure introsort(A, maxdepth):
    n ← length(A)
    if n ≤ 1:
        return  // base case
    else if maxdepth = 0:
        heapsort(A)
    else:
        // quick sort
        // assume this function does pivot selection, p is the final position of the pivot
        p ← partition(A)  
        introsort(A[0:p-1], maxdepth - 1)
        introsort(A[p+1:n], maxdepth - 1)
```


