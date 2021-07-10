"use strict";
const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.front) {
      // this.front = this.back;
      this.front.next = node.value;
      this.back = node;

      // this.front.next = node;
      // node.next = this.front;
      // this.front = node;
    } else {
      // this.back = null;
      this.back = node;
      this.front = this.back;
      // this.front = node;
    }
  }

  dequeue() {
    if (this.front) {
      let lastNode = this.front;
      let popedNode = lastNode.value;
      this.front = lastNode.next;

      return popedNode;
    } else {
      return "empty queue";
    }
  }

  peek() {
    let peek;
    if (this.front) {
      peek = this.front.value;
      return peek;
    } else {
      return "empty queue";
    }
  }

  isEmpty() {
    if (this.front) {
      return "full queue";
    } else {
      return "empty queue";
    }
  }
}

module.exports = Queue;
