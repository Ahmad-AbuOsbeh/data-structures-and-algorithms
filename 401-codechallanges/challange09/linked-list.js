"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    // if (this.head) {
    //   node.next = this.head;
    // }
    // this.head = node;
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

  insertBefore(value, addValue) {
    const node = new Node(addValue);
    let currentNode = this.head;
    if (currentNode.value == value) {
      node.next = currentNode;
      this.head = node;
      return;
    }
    while (currentNode) {
      if (currentNode.next.value == value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }

      currentNode = currentNode.next;
    }
  }
  insertAfter(value, addValue) {
    let node = new Node(addValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value == value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return;
      }
      currentNode = currentNode.next;
    }
  }
  includes(v) {
    let currentNode = this.head;

    while (currentNode) {
      if (v == currentNode.value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  tostring() {
    let str = "";
    let currentNode = this.head;
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

  checkPalindrome() {
    let newLL = new LinkedList();
    let firstNode = newLL.head;
    let node;
    let currentNode = this.head;

    while (currentNode) {
      if (newLL.head == null) {
        node = new Node(currentNode.value);
        newLL.head = node;
      } else {
        firstNode = newLL.head;
        node = new Node(currentNode.value);
        node.next = firstNode;
        newLL.head = node;
      }
      currentNode = currentNode.next;
    }
    currentNode = this.head;
    firstNode = newLL.head;
    let result;
    while (currentNode) {
      if (currentNode.value == firstNode.value) {
        result = true;
      } else {
        result = false;
        break;
      }
      firstNode = firstNode.next;
      currentNode = currentNode.next;
    }
    // console.log("input list", this.tostring());
    // console.log("new list", newLL.tostring());

    return result;
  }
}

module.exports = LinkedList;
