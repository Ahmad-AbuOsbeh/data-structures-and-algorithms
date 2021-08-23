"use strict";
const Queue = require("./Queue");
class KaryTree {
  constructor(node = null) {
    this.root = node;
  }

  //breadthFisrt
  breadthFisrt(tree) {
    let queue = new Queue();
    let str = "";
    queue.enqueue(tree.root);
    while (queue.peek()) {
      let x = queue.dequeue();
      if (x.value.children.length) {
        for (let i = 0; i < x.value.children.length; i++) {
          queue.enqueue(x.value.children[i]);
        }
      }
      str = `${str} ${x.value.value} > `;
      // console.log("str", str);
    }
    return str;
  }

  // fizz buzz tree
  fizzBuzztree(tree) {
    let queue = new Queue();
    let newQueue = new Queue();
    let str = "";
    let newStr = "";
    queue.enqueue(tree.root);
    newQueue.enqueue(tree.root);
    let y;

    while (queue.peek()) {
      let x = queue.dequeue();
      if (x.value.value % 3 === 0 && x.value.value % 5 === 0) {
        y = newQueue.dequeue();
        newStr = `${newStr} FizzBuzz > `;
      } else if (x.value.value % 5 === 0) {
        y = newQueue.dequeue();
        newStr = `${newStr} Buzz > `;
      } else if (x.value.value % 3 === 0) {
        y = newQueue.dequeue();
        newStr = `${newStr} Fizz > `;
      } else {
        y = newQueue.dequeue();
        newStr = `${newStr} ${y.value.value} > `;
      }
      if (x.value.children.length) {
        for (let i = 0; i < x.value.children.length; i++) {
          queue.enqueue(x.value.children[i]);
          newQueue.enqueue(y.value.children[i]);
        }
      }
      str = `${str} ${x.value.value} > `;
    }
    return newStr;
  }
}

module.exports = KaryTree;
