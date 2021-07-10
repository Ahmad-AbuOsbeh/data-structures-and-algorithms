"use strict";
const Queue = require("../Queue");
describe("Queue Tests ", () => {
  it("1.Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue("a");

    expect(queue.front.value).toBe("a");
  });

  it("2.Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");

    expect(queue.front.value).toBe("a");
    expect(queue.back.value).toBe("d");
  });

  it("3.Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");

    expect(queue.dequeue()).toBe("a");
  });

  it("4.Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");

    expect(queue.peek()).toBe("a");
  });

  it("5.Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toBe("empty queue");
  });

  it("6.Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    let queueTwo = new Queue();
    queueTwo.enqueue("a");

    expect(queue).toBeInstanceOf(Queue);
    expect(queue.isEmpty()).toBe("empty queue");
    expect(queueTwo.isEmpty()).toBe("full queue");
  });

  it("7.Calling dequeue or peek on empty queue raises exception", () => {
    let queue = new Queue();

    expect(queue.peek()).toBe("empty queue");
    expect(queue.dequeue()).toBe("empty queue");
  });
});
