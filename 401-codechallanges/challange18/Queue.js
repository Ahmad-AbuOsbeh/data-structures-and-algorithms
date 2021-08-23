"use strict";
const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(value) {
    let node = new Node(value);

    if (this.front) {
      this.back.next = node;
      this.back = node;
      this.length++;
    } else {
      this.back = node;
      this.front = this.back;
      this.length++;
    }
    return value;
  }

  dequeue() {
    if (this.front) {
      let lastNode = this.front;
      let popedNode = lastNode;
      this.front = this.front.next;
      this.length--;
      // console.log("popedNode", popedNode);
      return popedNode;
    } else {
      return null;
    }
  }

  peek() {
    let peek;
    if (this.front) {
      peek = this.front.value;
      return peek;
    } else {
      return null;
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
