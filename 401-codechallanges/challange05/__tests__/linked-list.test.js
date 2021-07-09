"use strict";
const LinkedList = require("../linked-list");
describe("linked-list tests ", () => {
  it("Can successfully instantiate an empty linked list", () => {
    let ll = new LinkedList();
    expect(ll).toBeInstanceOf(LinkedList);
  });

  it("Can properly insert into the linked list", () => {
    let ll = new LinkedList();
    ll.insert("a");
    expect(ll.head).toBeTruthy();
  });

  it("The head property will properly point to the first node in the linked list", () => {
    let ll = new LinkedList();
    ll.insert("a");
    expect(ll.head.value).toEqual("a");
  });

  it("Can properly insert multiple nodes into the linked list", () => {
    let ll = new LinkedList();
    ll.insert("a");
    ll.insert("b");
    ll.insert("c");
    ll.insert("d");

    expect(ll.head.value).toEqual("d");
  });
});

describe("tests group 2", () => {
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
