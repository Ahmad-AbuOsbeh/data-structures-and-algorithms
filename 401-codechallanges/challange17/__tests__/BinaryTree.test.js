"use strict";
const BinaryTree = require("../BinaryTree");
const Node = require("../node");

describe("Breadth-first Traversal tests", () => {
  let secondBinaryTree = new BinaryTree();
  let binaryTree;
  beforeAll(() => {
    let one = new Node(2);
    let two = new Node(7);
    let three = new Node(5);
    let four = new Node(2);
    let five = new Node(6);
    let six = new Node(5);
    let seven = new Node(11);
    let eight = new Node(9);
    let nine = new Node(4);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = six;
    five.right = seven;

    three.right = eight;
    eight.left = nine;

    binaryTree = new BinaryTree(one);
  });
  it("1.Can successfully return a collection from a breadthFisrt traversal", () => {
    let expectedResults = "2 > 7 > 5 > 2 > 6 > 9 > 5 > 11 > 4 > ";

    expect(secondBinaryTree.breadthFisrt(binaryTree)).toBe(expectedResults);
  });
});
