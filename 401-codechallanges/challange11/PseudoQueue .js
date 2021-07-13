"use strict";
const Stack = require("./Stack");

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
  }
  enqueue(value) {
    this.back.push(value);
  }

  dequeue() {
    if (this.front.peek()) {
      this.front.pop();
    } else {
      while (this.back.peek()) {
        // console.log("this.back.pop()", this.back.pop());
        this.front.push(this.back.pop());
      }
      this.front.pop();
    }
  }

  tostring() {
    let str = "";
    let currentNode1 = this.back.top;
    let currentNode2 = this.front.top;

    while (currentNode1) {
      str = str + `[${currentNode1.value}] ->`;
      currentNode1 = currentNode1.next;
    }

    while (currentNode2) {
      str = str + `[${currentNode2.value}] ->`;
      currentNode2 = currentNode2.next;
    }
    return str;
  }
}

module.exports = PseudoQueue;
