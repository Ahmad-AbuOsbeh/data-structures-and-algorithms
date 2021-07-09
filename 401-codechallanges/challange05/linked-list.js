"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    // if (!this.head) {
    //   this.head = node;
    //   // console.log("this.head.next", this.head.next);
    // }
    // node.next = this.head;
    // this.head = node;
    // console.log("this.head.next", this.head.next);

    // console.log("this.head", this.head);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  includes(v) {
    // console.log('hello from includes');
    // if (value) {
    //   return 'empty linked list';
    // }
    let currentNode = this.head;

    while (currentNode) {
      // console.log('hellooo from whileee');
      // console.log('currentNode.value', currentNode.value);
      // console.log('v', v);

      if (v == currentNode.value) {
        // console.log('hello from iffffffffffff');

        return true;
      } else {
        // console.log('currentNode.next', currentNode.next.next.next);
        currentNode = currentNode.next;
      }
    }
    // console.log('hellooooo afttr while');
    return false;
  }

  tostring() {
    let str = "";
    let currentNode = this.head;
    // console.log('this.head from tostring', this.head);
    while (currentNode) {
      str = str + `{${currentNode.value}} ->`;

      currentNode = currentNode.next;
    }
    str = str + `NULL`;

    return str;
  }

  kthFromEnd(k) {
    if (!this.head) {
      return "empty linked list";
    } else {
      let total = 0;
      let currentNode = this.head;
      while (currentNode.next) {
        total++;
        currentNode = currentNode.next;
      }
      if (k > total) {
        return "the required index is larger than the content of  linkedlist";
      }

      if (k < 0) {
        return "empty linked list";
      }

      let rquiredNode = total - k;
      let counter = 0;
      currentNode = this.head;
      while (currentNode.next) {
        counter++;
        currentNode = currentNode.next;
        if (counter == rquiredNode) {
          return currentNode.value;
        }
      }
    }
  }
}

module.exports = LinkedList;
