"use strict";
const LinkedList = require("../linked-list");
describe("linked-list-zip ", () => {
  it("1.input two equals lists and returns Ziped-list", () => {
    let firstList = new LinkedList();
    let secondList = new LinkedList();
    let ll = new LinkedList();
    firstList.append("1");
    firstList.append("3");
    firstList.append("2");

    secondList.append("5");
    secondList.append("9");
    secondList.append("4");

    expect(ll.zipLists(firstList, secondList)[2]).toBe(
      "{1} ->{5} ->{3} ->{9} ->{2} ->{4} ->NULL"
    );
  });

  it("2.input two non-equals lists and returns Ziped-list", () => {
    let firstList = new LinkedList();
    let secondList = new LinkedList();
    let ll = new LinkedList();
    firstList.append("1");
    firstList.append("3");

    secondList.append("5");
    secondList.append("9");
    secondList.append("4");

    expect(ll.zipLists(firstList, secondList)[2]).toBe(
      "{1} ->{5} ->{3} ->{9} ->{4} ->NULL"
    );
  });

  it("3.“Happy Path” - Expected outcome", () => {
    let firstList = new LinkedList();
    let secondList = new LinkedList();
    let ll = new LinkedList();
    firstList.append("1");
    firstList.append("3");

    secondList.append("5");
    secondList.append("9");
    secondList.append("4");
    if (
      expect(ll.zipLists(firstList, secondList)[2]).toBe(
        "{1} ->{5} ->{3} ->{9} ->{4} ->NULL"
      )
    ) {
      expect(ll.zipLists(firstList, secondList)[3]).toBe("Happy path");
    }
  });
});
