"use strict";
const PseudoQueue = require("../PseudoQueue ");
describe("PseudoQueue Tests ", () => {
  it("1.Can successfully enqueue into a PseudoQueue", () => {
    let queue = new PseudoQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.back.peek()).toBe("c");
  });

  it("2.Can successfully dequeue from a PseudoQueue", () => {
    let queue = new PseudoQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();

    expect(queue.front.peek()).toBe("b");
  });

  it("3.Can successfully empty PseudoQueue", () => {
    let queue = new PseudoQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front.peek()).toBe(null);
    expect(queue.front.isEmpty()).toBe("empty stack");
    expect(queue.back.isEmpty()).toBe("empty stack");
  });

  it("4.Can successfully multiple enqueues & dequeues in PseudoQueue", () => {
    let queue = new PseudoQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();
    queue.enqueue("d");
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front.peek()).toBe(null);
    expect(queue.back.peek()).toBe(null);
  });
  xit("4.Can successfully multiple enqueues & dequeues in PseudoQueue", () => {
    let queue = new PseudoQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.dequeue();
    queue.enqueue("d");
    // queue.dequeue();
    // queue.dequeue();
    // queue.dequeue();

    expect(queue.tostring()).toBe(null);
    // expect(queue.back.peek()).toBe(null);
  });
});
