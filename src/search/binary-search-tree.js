const { get } = require('lodash');

class BinarySearchTree {
  constructor(treeData = []) {
    this.root = null;
    treeData.forEach((item) => {
      if (!this.root) {
        this.root = {
          // value
          v: item,
          // left-child-node
          l: null,
          // right-child-node
          r: null,
          // parent-node
          // 空间换时间策略，当然也可以不要这个属性每一次都做一个独立查询 findParent() 实现
          p: null,
        };
        return;
      }
      this.insert(this.root, item);
    });
  }

  insert(root, item) {
    if (root.v === item) return;
    if (item > root.v) {
      if (root.r) {
        this.insert(root.r, item);
      } else {
        root.r = { v: item, l: null, r: null, p: root };
      }
    } else {
      if (root.l) {
        this.insert(root.l, item);
      } else {
        root.l = { v: item, l: null, r: null, p: root };
      }
    }
  }

  find(item, root) {
    if (!root) root = this.root;
    if (root.v === item) {
      return root;
    }
    if (item > root.v && root.r) {
      return this.find(item, root.r);
    } else if (item < root.v && root.l) {
      return this.find(item, root.l);
    }
    return null;
  }

  findParent(item, root) {
    if (!root) root = this.root;
    if (root.v === item) {
      return null;
    } else if (get(root, 'l.v', '') === item
      || get(root, 'r.v', '' === item)
    ) {
      return root;
    }
    if (item > root.v && root.r) {
      return this.findParent(item, root.r);
    } else if (item < root.v && root.l) {
      return this.findParent(item, root.l);
    }
    return null;
  }

  findSubTreeMinNode(root) {
    if (root.l) return this.findSubTreeMinNode(root.l);
    return root;
  }

  remove(item, root) {
    let isRoot = false;
    if (!root) {
      root = this.root;
      isRoot = true;
    }
    if (item === root.v) {
      if (!root.l && !root.r) {
        // 如果根节点为叶子节点，直接置空
        if (isRoot) {
          this.root = null;
          return;
        }
        if (get(root, 'p.l.v') === root.v) {
          root.p.l = null;
        } else {
          root.p.r = null;
        }
      } else if (root.l && root.r) {
        // 如果根节点有左右节点，将右子树中最小节点作为根节点
        const minNode = this.findSubTreeMinNode(root.r);
        minNode.p.l = null;
        if (isRoot) {
          this.root = minNode;
        } else {
          if (root.p.l.v === item) {
            root.p.l = minNode;
          } else {
            root.p.r = minNode;
          }
        }
      } else {
        // 如果只有一个节点，则直接删除嫁接到父节点上
        if (isRoot) {
          this.root = root.l || root.r;
        } else {
          if (get(root, 'p.l.v') === item) {
            root.p.l = root.l || root.r;
          } else {
            root.p.r = root.l || root.r;
          }
        }
      }
    } else if (item > root.v) {
      this.remove(item, root.r);
    } else {
      this.remove(item, root.l);
    }
  }

  getRoot() {
    return this.root;
  }

  // 前中后序遍历
  // 前序遍历：根结点 ---> 左子树 ---> 右子树
  // 中序遍历：左子树 ---> 根结点 ---> 右子树
  // 后序遍历：左子树 ---> 右子树 ---> 根结点

  traverseF(root) {
    console.log(root.v);
    if (root.l) {
      this.traverseF(root.l);
    }
    if (root.r) {
      this.traverseF(root.r);
    }
  }

  // 中序遍历：输出顺序数组
  traverseM(root) {
    if (root.l) {
      this.traverseM(root.l);
    }
    console.log(root.v);
    if (root.r) {
      this.traverseM(root.r);
    }
  }

  traverseB(root) {
    if (root.l) {
      this.traverseB(root.l);
    }
    if (root.r) {
      this.traverseB(root.r);
    }
    console.log(root.v);
  }
}


const demoSearchTree = new BinarySearchTree([21, 5, 7, 9, 16, 2, 31, 66, 18, 97, 34]);
demoSearchTree.remove(34);
demoSearchTree.remove(5);
// console.log(demoSearchTree.find(5));
demoSearchTree.traverseM(demoSearchTree.root);

/**
 * traverser test
 */
// const demoSearchTree = new BinarySearchTree([]);
// const demoRoot = {
//   v: 1,
//   l: {
//     v: 2,
//     l: { v: 4 },
//     r: { v: 5, l: { v: 7 }, r: { v: 8 } }
//   },
//   r: {
//     v: 3,
//     l: { v: 6 }
//   }
// };
// demoSearchTree.traverseF(demoRoot);
// demoSearchTree.traverseM(demoRoot);
// demoSearchTree.traverseB(demoRoot);
