"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
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
  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      console.log("this.head.next", this.head.next);
    }
    node.next = this.head;
    this.head = node;
    console.log("this.head.next", this.head.next);

    console.log("this.head", this.head);
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

  checkPalindrome(list) {
    let currentNode = list.head;
    // let reversedLinkedlist = new LinkedList();
    while (currentNode.next) {
      console.log("currentNode.value", currentNode.value);
      // reversedLinkedlist.insert(currentNode.value);

      currentNode = currentNode.next;
      console.log("currentNode.next", currentNode.next);
    }
    return "hello from palindrome";
  }
}

module.exports = LinkedList;
