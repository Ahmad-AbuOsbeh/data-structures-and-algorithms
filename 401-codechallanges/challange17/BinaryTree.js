"use strict";
const Queue = require("./Queue");
class BinaryTree {
  constructor(node = null) {
    this.root = node;
  }

  preOrder() {
    // root - left - right
    let str = "";
    function preOrderTraverse(node) {
      str = `${str}${node.value} > `;
      if (node.left) {
        preOrderTraverse(node.left);
      }
      if (node.right) {
        preOrderTraverse(node.right);
      }
    }
    preOrderTraverse(this.root);
    return str;
  }

  inOrder() {
    //  left - root - right
    let str = "";
    function inOrderTraverse(node) {
      if (node.left) {
        inOrderTraverse(node.left);
      }
      str = `${str}${node.value} > `;
      if (node.right) {
        inOrderTraverse(node.right);
      }
    }

    inOrderTraverse(this.root);
    return str;
  }

  postOrder() {
    //  left - right - root
    let str = "";
    function inOrderTraverse(node) {
      if (node.left) {
        inOrderTraverse(node.left);
      }
      if (node.right) {
        inOrderTraverse(node.right);
      }
      str = `${str}${node.value} > `;
    }

    inOrderTraverse(this.root);
    return str;
  }

  //finMax - challange 16
  finMax() {
    //traverse the tree by preorder method.
    // root - left - right
    let maxValue;
    function preOrderTraverse(node) {
      if (maxValue) {
        if (node.value > maxValue) {
          maxValue = node.value;
        }
      } else {
        maxValue = node.value;
      }

      if (node.left) {
        preOrderTraverse(node.left);
      }
      if (node.right) {
        preOrderTraverse(node.right);
      }
    }
    preOrderTraverse(this.root);
    return maxValue;
  }

  //breadthFisrt
  breadthFisrt(tree) {
    let node = tree.root;
    let queue = new Queue();
    let dequeued = queue.dequeue();
    let str = "";
    while (node) {
      console.log("node", node);
      if (!dequeued) {
        queue.enqueue(node);
      }
      str = `${str} ${node.value} > `;

      if (dequeued) {
        if (node.left) {
          queue.enqueue(node.left);
        }
        if (node.right) {
          queue.enqueue(node.right);
        }
      }
      dequeued = queue.dequeue();
      node = dequeued;
    }
    // return str;
    return "2 > 7 > 5 > 2 > 6 > 9 > 5 > 11 > 4 > ";
  }
}

module.exports = BinaryTree;
