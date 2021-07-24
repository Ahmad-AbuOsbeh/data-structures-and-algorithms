"use strict";

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
}

module.exports = BinaryTree;
