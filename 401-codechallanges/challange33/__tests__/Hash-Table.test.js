"use strict";
const Hashmap = require("../HashTable");

describe("LEFT JOIN TESTS", () => {
  let leftHashTable;
  let rightHashTable;
  beforeAll(() => {
    //left hash
    leftHashTable = new Hashmap(5000);
    leftHashTable.add("fond", "enamored");
    leftHashTable.add("warth", "anger");
    leftHashTable.add("diligent", "employed");
    leftHashTable.add("outfit", "garb");
    leftHashTable.add("guide", "usher");

    //right hash
    rightHashTable = new Hashmap(5000);
    rightHashTable.add("fond", "averse");
    rightHashTable.add("warth", "delight");
    rightHashTable.add("diligent", "idle");
    rightHashTable.add("guide", "follow");
    rightHashTable.add("flow", "jam");
  });

  // successfuly return the left join between two hashmaps
  it("1.successfuly return the left join between two hashmaps", () => {
    let expectedResults = [
      ["warth", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "NULL"],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
    ];
    let hashTable = new Hashmap(5000);

    expect(hashTable.leftJoin(leftHashTable, rightHashTable)).toEqual(
      expectedResults
    );
  });
});
