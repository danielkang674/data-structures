class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    let tail = this.size();
    for (let key in this.storage) {
      tail = tail <= Number(key) ? Number(key) + 1 : tail;
    }
    this.storage[tail] = value;
  }

  dequeue() {
    let head = this.size();
    let value;
    for (let key in this.storage) {
      head = head >= Number(key) ? Number(key) : head;
    }
    value = this.storage[head];
    delete this.storage[head];
    return value;
  }

  size() {
    let counter = 0;
    for (let key in this.storage) {
      counter++;
    }
    return counter;
  }
}

let es6Queue = new Queue;
