"use strict";
const LinkedList = require("../linked-list");
describe("linked-list Palindrome ", () => {
  it("1.returns true for Palindrome list", () => {
    let Inputlist = new LinkedList();

    Inputlist.insert("t");
    Inputlist.insert("a");
    Inputlist.insert("c");
    Inputlist.insert("o");
    Inputlist.insert("c");
    Inputlist.insert("a");
    Inputlist.insert("t");

    expect(Inputlist.checkPalindrome()).toBe(true);
  });

  it("2.returns false for non-Palindrome list", () => {
    let Inputlist = new LinkedList();

    Inputlist.insert("h");
    Inputlist.insert("a");
    Inputlist.insert("c");
    Inputlist.insert("o");
    Inputlist.insert("c");
    Inputlist.insert("u");
    Inputlist.insert("s");

    expect(Inputlist.checkPalindrome()).toBe(false);
  });
});
