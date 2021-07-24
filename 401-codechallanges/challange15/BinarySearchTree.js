"use strict";

const Node = require("./node");
class BinarySearchTree {
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

  add(value) {
    let node = new Node(value);
    let currentNode = this.root;
    if (this.root == null) {
      this.root = node;
    } else {
      while (currentNode) {
        if (currentNode.value > value && currentNode.left == null) {
          currentNode.left = node;

          break;
        } else if (currentNode.value < value && currentNode.right == null) {
          currentNode.right = node;

          break;
        } else if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          currentNode = currentNode.right;
        }
      }
    }
  }
  contain(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      } else if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
