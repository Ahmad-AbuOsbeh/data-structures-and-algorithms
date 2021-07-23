"use strict";
const Node = require("./node");

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    }
    this.top = node;
  }

  pop() {
    if (this.top) {
      let currentNode = this.top;
      let popedValue = this.top.value;
      this.top = currentNode.next;
      return popedValue;
    } else {
      return null;
    }
  }

  peek() {
    let peek;
    if (this.top) {
      peek = this.top.value;
      return peek;
    } else {
      return null;
    }
  }

  isEmpty() {
    if (this.top) {
      return "full stack";
    } else {
      return "empty stack";
    }
  }
}

module.exports = Stack;
