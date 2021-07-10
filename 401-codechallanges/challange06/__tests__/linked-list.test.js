"use strict";
const LinkedList = require("../linked-list");
describe("linked-list tests- Challange 06 ", () => {
  it("1.Can successfully add a node to the end of the linked list", () => {
    let ll = new LinkedList();
    ll.append("10");
    // ll.tostring();
    expect(ll.tostring()).toEqual("{10} ->NULL");
  });

  it("2.Can successfully add multiple nodes to the end of a linked list", () => {
    let ll = new LinkedList();
    ll.append("1");
    ll.append("2");
    ll.append("3");
    ll.append("4");
    ll.tostring();

    expect(ll.tostring()).toEqual("{1} ->{2} ->{3} ->{4} ->NULL");
  });

  it("3.Can successfully insert a node before a node located i the middle of a linked list", () => {
    let ll = new LinkedList();
    ll.insert("1");
    ll.insert("2");
    ll.insert("3");
    ll.insert("4");
    ll.insertBefore("3", "a");
    expect(ll.tostring()).toEqual("a");
  });

  // it("Can properly insert multiple nodes into the linked list", () => {
  //   let ll = new LinkedList();
  //   ll.insert("a");
  //   ll.insert("b");
  //   ll.insert("c");
  //   ll.insert("d");

  //   expect(ll.head.value).toEqual("d");
  // });
});

xdescribe("tests group 2", () => {
  it("Can properly return a collection of all the values that exist in the linked list", () => {
    let ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    // ll.insert('test4');
    // console.log('ll', ll);
    // let newList = new LinkedList();
    // console.log('newlist', newList);

    // const result = ll.includes('test1');

    expect(ll.includes("a")).toEqual(true);
  });

  it("Will return false when searching for a value in the linked list that does not exist", () => {
    let ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    ll.insert("test4");
    // console.log('ll', ll);
    // let newList = new LinkedList();
    // console.log('newlist', newList);
    // ll.tostring();
    // const result = ll.includes('test1');

    expect(ll.includes("test6")).toEqual(false);
  });

  it("Can properly return a collection of all the values that exist in the linked list", () => {
    let ll = new LinkedList();
    ll.insert("test1");
    ll.insert("test2");
    ll.insert("test3");
    // ll.insert('test4');
    // console.log('ll', ll);
    // let newList = new LinkedList();
    // console.log('newlist', newList);

    // const result = ll.includes('test1');
    expect(ll.tostring()).toEqual("{test3} ->{test2} ->{test1} ->NULL");

    // expect(ll.includes('test1')).toEqual(true);
  });
});
