"use strict";
const BinaryTree = require("../BinaryTree");
const Node = require("../node");
describe("Binary Tree Tests ", () => {
  it("1.Can successfully instantiate an empty tree", () => {
    let binaryTree = new BinaryTree();
    expect(binaryTree.root).toBe(null);
  });

  it("2.Can successfully instantiate a tree with a single root node", () => {
    let node = new Node("A");
    let binaryTree = new BinaryTree(node);
    expect(binaryTree.root.value).toBe("A");
    expect(binaryTree.root.left).toBe(null);
    expect(binaryTree.root.right).toBe(null);
  });

  it("3.Can successfully add a left child and right child to a single root node", () => {
    let node = new Node("A");
    node.left = new Node("B");
    node.right = new Node("C");

    let binaryTree = new BinaryTree(node);
    expect(binaryTree.root.value).toBe("A");
    expect(binaryTree.root.left.value).toBe("B");
    expect(binaryTree.root.right.value).toBe("C");
    expect(binaryTree.root.left.left).toBe(null);
    expect(binaryTree.root.left.right).toBe(null);
    expect(binaryTree.root.right.left).toBe(null);
    expect(binaryTree.root.right.right).toBe(null);
  });
});

describe("Depth First Search methods tests", () => {
  let binaryTree;
  beforeAll(() => {
    let one = new Node("A");
    let two = new Node("B");
    let three = new Node("C");
    let four = new Node("D");
    let five = new Node("E");
    let six = new Node("F");
    let seven = new Node("G");
    let eight = new Node("H");
    let nine = new Node("I");
    let ten = new Node("J");
    let eleven = new Node("K");
    let twelve = new Node("L");
    let thirteen = new Node("M");

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
  it("4.Can successfully return a collection from a preorder traversal", () => {
    let expectedResults =
      "A > B > D > F > G > H > E > C > I > K > M > L > J > ";
    expect(binaryTree.root.value).toBe("A");
    expect(binaryTree.root.left.value).toBe("B");
    expect(binaryTree.root.right.value).toBe("C");
    expect(binaryTree.preOrder()).toBe(expectedResults);
  });

  it("5.Can successfully return a collection from a inorder traversal", () => {
    let expectedResults =
      "F > D > G > H > B > E > A > M > K > I > L > C > J > ";
    expect(binaryTree.root.value).toBe("A");
    expect(binaryTree.root.left.value).toBe("B");
    expect(binaryTree.root.right.value).toBe("C");
    expect(binaryTree.inOrder()).toBe(expectedResults);
  });

  it("6.Can successfully return a collection from a postorder traversal", () => {
    let expectedResults =
      "F > H > G > D > E > B > M > K > L > I > J > C > A > ";
    expect(binaryTree.root.value).toBe("A");
    expect(binaryTree.root.left.value).toBe("B");
    expect(binaryTree.root.right.value).toBe("C");
    expect(binaryTree.postOrder()).toBe(expectedResults);
  });
});
