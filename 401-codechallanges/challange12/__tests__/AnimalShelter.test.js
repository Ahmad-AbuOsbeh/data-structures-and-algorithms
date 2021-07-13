"use strict";
const AnimalShelter = require("../AnimalShelter");
describe("AnimalShelter Tests ", () => {
  it("1.Can successfully enqueue into a AnimalShelter", () => {
    let animalShelter = new AnimalShelter();
    let animal = {
      name: "sherry",
      type: "cat",
    };
    animalShelter.enqueue(animal);

    expect(animalShelter.cat.peek()).toBe("sherry");
  });

  it("2.Can successfully enqueue multiple into a AnimalShelter", () => {
    let animalShelter = new AnimalShelter();
    let animal = {
      name: "sherry",
      type: "cat",
    };
    let animal1 = {
      name: "Meteb",
      type: "cat",
    };
    let animal2 = {
      name: "Qawqazi",
      type: "dog",
    };
    let animal3 = {
      name: "toto",
      type: "cat",
    };
    let animal4 = {
      name: "bitbull",
      type: "dog",
    };
    animalShelter.enqueue(animal);
    animalShelter.enqueue(animal1);
    animalShelter.enqueue(animal2);
    animalShelter.enqueue(animal3);
    animalShelter.enqueue(animal4);
    // animalShelter.dequeue("cat");
    // animalShelter.dequeue("cat");
    // animalShelter.dequeue("dog");

    expect(animalShelter.cat.length).toBe(3);
    expect(animalShelter.cat.peek()).toBe("sherry");

    expect(animalShelter.dog.peek()).toBe("Qawqazi");
  });
});
