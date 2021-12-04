# Paxos 算法

外部文章比较多了，理解可以直接阅读：

- [图解 Paxios 算法](https://xie.infoq.cn/article/e53cbcd0e723e3a6ce4be3b8c)


分布式算法主要解决的问题：**去中心化节点之间的共识问题**。

关键算法过程

- 建立：提议者（Proposer）、决策者（Acceptor）以及学习者（Lerner），用一个节点带身份的方式去处理共识问题
  - 提议者给出需要去中心化保持一致性的值
  - 决策者一般为大部分节点，负责接收 Propsoer 的提案，并和提议者做响应交互
  - 学习者一般为挂起或者处于故障恢复等特殊状态的节点，只接收 Accept 的值
- 一个共识达成分为两个阶段，即两轮 RPC
  - 第一阶段 
    - Prepare，提议者向所有决策节点广播 ++n 的序列，也可以附带需要 Commit 的内容
    - Acceptor 接收到 n 后
      - 如果 n 大于之前接受到的所有 Prepare 请求的编号，则返回 Promise() 响应，并承诺将不会接收编号小于 n 的提案。如果有提案被 Chosen 的话，Promise() 响应还应包含前一次提案编号和对应的值。
      - 否则（即 n 小于等于 Acceptor 之前收到的最大编号）忽略，但常常会回复一个拒绝响应。
  - 第二阶段
    - Propose，当 Proposer 收到超过半数的 Promise() 回应之后，Proposer 向多数派的 Acceptor 发起 Accept(n, value) 请求并带上提案编号和值。
    - Accept，网络中的 Acceptor 节点收到 Accept() 请求，在这期间如果 Acceptor 没有对比 n 更大的编号另行 Promise，则接受该提案。

关键策略：

- Acceptor 和 Propsoer 需要知道各自节点的全貌
- 中心化的全局计数器生成自增序列 n，这个序列用于判断前序后序
- 广播或不可少（有通信成本，也是后续算法优化的点）
- 半数以上相同达成一致基础
- 可能会形成活锁，因此需要超时判定策略，比如使用随机超时策略


## MultiPaxos 算法

Paxos 多副本机制。

Multi Paxos 对 Basic Paxos 的核心改进是增加了“选主”的过程，提案节点会通过定时轮询（心跳），确定当前网络中的所有节点里是否存在有一个主提案节点，一旦没有发现主节点存在，节点就会在心跳超时后使用 Basic Paxos 中定义的准备、批准的两轮网络交互过程，向所有其他节点广播自己希望竞选主节点的请求，希望整个分布式系统对“由我作为主节点”这件事情协商达成一致共识，如果得到了决策节点中多数派的批准，便宣告竞选成功。当选主完成之后，除非主节点失联之后发起重新竞选，否则从此往后，就只有主节点本身才能够提出提案。

摘自：[凤凰架构 - MultPaxos 篇](http://icyfenix.cn/distribution/consensus/raft.html)


## Raft 算法

参考：[Raft 算法浅析](https://zhuanlan.zhihu.com/p/32052223)

- 引入选举机制，将决策者由多个变为一个（这本质上是一个共识问题）
- 选举机制只需要执行一次 Paxios 过程

> 选举过程本质上是 Paxos 过程。

Raft将系统中的角色分为领导者（Leader）、跟从者（Follower）和候选人（Candidate）：

- Leader：接受客户端请求，并向Follower同步请求日志，当日志同步到大多数节点上后告诉Follower提交日志。
- Follower：接受并持久化Leader同步的日志，在Leader告之日志可以提交之后，提交日志。
- Candidate：Leader选举过程中的临时角色。

Raft要求系统在任意时刻最多只有一个Leader，正常工作期间只有Leader和Followers。Follower 只响应其他服务器的请求。如果Follower超时没有收到Leader的消息，它会成为一个Candidate并且开始一次Leader选举。收到大多数服务器投票的Candidate会成为新的Leader。Leader在宕机之前会一直保持Leader的状态。
