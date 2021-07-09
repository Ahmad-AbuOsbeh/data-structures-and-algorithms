"use strict";
const LinkedList = require("../linked-list");
describe("linked-list Palindrome ", () => {
  it("returns true or false if inputted linked list is Palindrome or not", () => {
    let Inputlist = new LinkedList();
    let ll = new LinkedList();

    Inputlist.insert("t");
    Inputlist.insert("a");
    Inputlist.insert("c");
    Inputlist.insert("o");
    Inputlist.insert("c");
    Inputlist.insert("a");
    Inputlist.insert("t");

    console.log("Inputlist", Inputlist);
    console.log("ll", ll);

    expect(ll.checkPalindrome(Inputlist)).toBe("true");
  });
});
