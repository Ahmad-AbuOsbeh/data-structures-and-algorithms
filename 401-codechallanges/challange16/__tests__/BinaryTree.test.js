"use strict";
const BinaryTree = require("../BinaryTree");
const Node = require("../node");

describe("Tree Max tests", () => {
  let binaryTree;
  beforeAll(() => {
    let one = new Node(20);
    let two = new Node(30);
    let three = new Node(19);
    let four = new Node(45);
    let five = new Node(36);
    let six = new Node(1);
    let seven = new Node(9);
    let eight = new Node(111);
    let nine = new Node(67);
    let ten = new Node(88);
    let eleven = new Node(-20);
    let twelve = new Node(500);
    let thirteen = new Node(100);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    four.left = six;
    four.right = seven;
    seven.right = eight;

    three.left = nine;
    three.right = ten;
    nine.left = eleven;
    nine.right = twelve;
    eleven.left = thirteen;

    binaryTree = new BinaryTree(one);
  });
  it("1.Can successfully return a collection from a preorder traversal", () => {
    let expectedResults =
      "20 > 30 > 45 > 1 > 9 > 111 > 36 > 19 > 67 > -20 > 100 > 500 > 88 > ";
    expect(binaryTree.root.value).toBe(20);
    expect(binaryTree.root.left.value).toBe(30);
    expect(binaryTree.root.right.value).toBe(19);
    expect(binaryTree.preOrder()).toBe(expectedResults);
  });

  it("2.Can successfully return the maximum value of this tree", () => {
    let expectedResults =
      "20 > 30 > 45 > 1 > 9 > 111 > 36 > 19 > 67 > -20 > 100 > 500 > 88 > ";
    expect(binaryTree.root.value).toBe(20);
    expect(binaryTree.root.left.value).toBe(30);
    expect(binaryTree.root.right.value).toBe(19);
    expect(binaryTree.preOrder()).toBe(expectedResults);
    expect(binaryTree.finMax()).toBe(500);
  });
});
