"use strict";
const Hashmap = require("../HashTable");

describe("HASH TABLE TESTS", () => {
  let hashTable;
  beforeAll(() => {
    hashTable = new Hashmap(5000);
    hashTable.add("ahmad", "abuosbeh");
    hashTable.add("omar", "abuafifah");
    hashTable.add("hamza", "allan");
  });

  //Adding a key/value to your hashtable results in the value being in the data structure
  it("1.Adding a key/value to your hashtable results in the value being in the data structure", () => {
    const hash1 = hashTable.hash("hamza");
    const hash2 = hashTable.hash("omar");
    const hash3 = hashTable.hash("ahmad");
    expect(hashTable.storage[hash1].head.value).toEqual({ hamza: "allan" });
    expect(hashTable.storage[hash2].head.value).toEqual({ omar: "abuafifah" });
    expect(hashTable.storage[hash3].head.value).toEqual({ ahmad: "abuosbeh" });
    expect(hashTable.storage[hash3].head.value["ahmad"]).toEqual("abuosbeh");
  });

  //Retrieving based on a key returns the value stored
  it("2.Retrieving based on a key returns the value stored", () => {
    expect(hashTable.get("hamza")).toEqual("allan");
    expect(hashTable.get("omar")).toEqual("abuafifah");
    expect(hashTable.get("ahmad")).toEqual("abuosbeh");
  });

  //Successfully returns null for a key that does not exist in the hashtable
  it("3.Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashTable.get("khaled")).toBeNull();
    expect(hashTable.get("test")).toBeNull();
  });

  //Successfully handle a collision within the hashtable
  it("4.Successfully handle a collision within the hashtable", () => {
    hashTable.add("hamad", "zyoud");
    const collisionHash = hashTable.hash("ahmad");
    // const hash2 = hashTable.hash("hamad");
    expect(hashTable.storage[collisionHash].head.next.value).toEqual({
      ahmad: "abuosbeh",
    });
    expect(hashTable.storage[collisionHash].head.value).toEqual({
      hamad: "zyoud",
    });
  });

  //Successfully retrieve a value from a bucket within the hashtable that has a collision
  it("5.Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    hashTable.add("hamad", "zyoud");

    expect(hashTable.get("ahmad")).toEqual("abuosbeh");
    expect(hashTable.get("hamad")).toEqual("zyoud");
  });

  //Successfully hash a key to an in-range value
  it("6.Successfully hash a key to an in-range value", () => {
    const hashINRange = hashTable.hash("ahmad");

    expect(hashINRange).toBeLessThan(hashTable.storage.length);
    expect(hashINRange).toBeLessThan(5000);
  });

  //Successfully test the hash if it contains a key or not
  it("7.Successfully test the hash if it contains a key or not", () => {
    expect(hashTable.contains("ahmad")).toBeTruthy();
    expect(hashTable.contains("test")).toBe(false);
  });
});
