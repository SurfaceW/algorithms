排序算法有很多，下表就可以把经典的 10 种排序算法列出：

图片摘录自知乎专栏：https://www.zhihu.com/question/23148377/answer/714596562?hb_wx_block=0

![](https://tva1.sinaimg.cn/large/006y8mN6ly1g6mb8jppi4j30k00c60uc.jpg)

基础推论性质的，可以参考经典《算法导论》里面对排序算法的讲解。

## 归纳

个人觉得，万变不离其宗，排序算法的一些核心点在于：

- 排序的基本思想：插入和交换（冒泡、选择、插入）
- 分组、分治：大化小，子问题合并解决大问题，降低时间复杂度
- 利用辅助数据结构降低操作复杂度来换取低时间复杂度（快排、桶、堆）
- 时空权衡：用空间复杂度降低时间复杂度（桶排序、计数排序、归并排序）
- 多线程：利用多核增加排序算力

## 应用

不同的场景，对症下药，使用不同的排序方法，这个一定要根据数据的特点和时间空间的权衡之后来设计，记得《编程珠玑》里面有讲到对数据特点的识别之后，通过针对问题特点设计的算法，能够将排序算法复杂度巧妙地降至 $O(n)$ 这种级别。

实战里面有一些可以参考，比如针对 Webkit 中 Array.prototype.sort 的 C++ 实现：

原文摘自：https://stackoverflow.com/questions/234683/javascript-array-sort-implementation

```
I've just had a look at the WebKit (Chrome, Safari …) source. Depending on the type of array, different sort methods are used:

Numeric arrays (or arrays of primitive type) are sorted using the C++ standard library function std::qsort which implements some variation of quicksort (usually introsort).

Contiguous arrays of non-numeric type are stringified and sorted using mergesort, if available (to obtain a stable sorting) or qsort if no merge sort is available.

For other types (non-contiguous arrays and presumably for associative arrays) WebKit uses either selection sort (which they call “min” sort) or, in some cases, it sorts via an AVL tree.
```

核心思想也是：**对症下药** 😁

## 前端

排序算法其实要吸收的是思想，前端（UI）工作场景里面，使用排序算法的场景非常少，因为原则上数据类型的排序交给后端数据库层实现，前端原则上不用关系数据层的排序。毕竟排序工作给底层实现更为合理（底层编译语言，密集 CPU 场景适用）。

即便是对于 Node.js 而言排序层也建议移交给更底层的 C++ 库去实现排序算法。

## 深入

> 一些值得深入去研究和思考的点

- 原理上，我们最好要去理解为什么归并排序、快速排序能够从数学上证明其复杂度能够到 $O(nlg(n))$？
- 一些快速排序的变种算法为什么是主流的选择，比如上文提到的 `introsort`？


## 小结

排序算法，是算法领域的最基础知识，里面也可以看到非常多的研究和智慧，有时候觉得「越是基础的东西，学问越深」，简单背后蕴藏着复杂。
