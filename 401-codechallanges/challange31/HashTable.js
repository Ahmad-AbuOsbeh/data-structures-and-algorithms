const LinkedList = require("./LinkedList");

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  //key = name ==> 400
  hash(key) {
    const sumCharCode = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  add(key, value) {
    // get an index
    const hash = this.hash(key);
    // console.log("Key", hash);
    // we need to check if a value already exist in the index
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.insert({ [key]: value });
      this.storage[hash] = ll; // [222] = {head:{value:{"key","value"},next:null}}
    } else {
      this.storage[hash].insert({ [key]: value });
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value[key];
        }
        currentNode = currentNode.next;
      }
    } else {
      return null;
    }
  }

  contains(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      let currentNode = this.storage[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }

  // repeatedWord
  repeatedWord(string) {
    const arr = string.split(/[ ,]+/);
    let key;
    let hash;
    for (let i = 0; i < arr.length; i++) {
      key = arr[i].toLowerCase();
      this.add(key, "noValue");
      hash = this.hash(key);
      if (this.storage[hash].head.next) {
        return key;
      }
    }
  }
}

module.exports = Hashmap;
