"use strict";
const Stack = require("../Stack");
describe("Stack Tests ", () => {
  it("1.Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push("a");
    expect(stack.top.value).toBe("a");
  });

  it("2.Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");

    expect(stack.top.value).toBe("c");
  });

  it("3.Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");

    expect(stack.pop()).toBe("c");
  });

  it("4.Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");

    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it("5.Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.push("c");

    expect(stack.peek()).toBe("c");
  });

  it("6.Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    let stackTwo = new Stack();
    stackTwo.push("a");

    expect(stack).toBeInstanceOf(Stack);
    expect(stack.isEmpty()).toBe("empty stack");
    expect(stackTwo.isEmpty()).toBe("full stack");
  });

  it("7.Calling pop or peek on empty stack raises exception", () => {
    let stack = new Stack();

    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
  });
});
