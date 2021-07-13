"use strict";
const Queue = require("./Queue");

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }
  enqueue(animal) {
    if (animal.type == "dog") {
      this.dog.enqueue(animal.name);
    } else if (animal.type == "cat") {
      this.cat.enqueue(animal.name);
    } else {
      return;
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      return this.dog.dequeue();
    } else if (pref === "cat") {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
