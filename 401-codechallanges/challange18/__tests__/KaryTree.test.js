"use strict";
const KaryTree = require("../KaryTree");
const Node = require("../node");

describe("KaryTree-tests", () => {
  let secondKaryTree = new KaryTree();
  let karytreeInstance;
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);
    let ten = new Node(10);
    let eleven = new Node(11);
    let twelve = new Node(12);
    let thirteen = new Node(13);
    let fourteen = new Node(14);
    let fifteen = new Node(15);
    let sixteen = new Node(16);
    let seventeen = new Node(17);

    one.children.push(two);
    one.children.push(three);
    one.children.push(four);
    two.children.push(five);
    two.children.push(six);
    two.children.push(seven);
    three.children.push(eight);
    three.children.push(nine);
    three.children.push(ten);
    four.children.push(eleven);
    four.children.push(twelve);
    four.children.push(thirteen);
    five.children.push(fourteen);
    seven.children.push(fifteen);
    nine.children.push(sixteen);
    eleven.children.push(seventeen);

    karytreeInstance = new KaryTree(one);
  });
  it("1.Can successfully return a collection from a breadthFisrt traversal", () => {
    let expectedResults =
      " 1 >  2 >  3 >  4 >  5 >  6 >  7 >  8 >  9 >  10 >  11 >  12 >  13 >  14 >  15 >  16 >  17 > ";

    expect(secondKaryTree.breadthFisrt(karytreeInstance)).toBe(expectedResults);
  });
  it("2.Can successfully run FizzBuzz method for k-ary tree", () => {
    let expectedResults =
      " 1 >  2 >  Fizz >  4 >  Buzz >  Fizz >  7 >  8 >  Fizz >  Buzz >  11 >  Fizz >  13 >  14 >  FizzBuzz >  16 >  17 > ";

    expect(secondKaryTree.fizzBuzztree(karytreeInstance)).toBe(expectedResults);
  });
});
