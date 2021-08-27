"use strict";
const Hashmap = require("../HashTable");

describe("UNIQUE CHARACTERS TESTS", () => {
  // successfuly check all characters in the string are unique or not
  it("1.successfuly check all characters in the string are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "The quick brown fox jumps over the lazy dog";
    expect(hashTable.uniqueCharacters(string)).toEqual(false);
  });

  // successfuly check all characters in the string are unique or not
  it("2.successfuly check all characters in the string are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "I love cats";
    expect(hashTable.uniqueCharacters(string)).toEqual(true);
  });

  // successfuly check all characters in the string are unique or not
  it("3.successfuly check all characters in the string are unique or not", () => {
    let hashTable = new Hashmap(5000);

    let string = "Donald the duck	";
    expect(hashTable.uniqueCharacters(string)).toEqual(false);
  });
});
