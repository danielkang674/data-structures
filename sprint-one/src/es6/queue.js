class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    let value;
    if (this.front <= this.back) {
      value = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
    }
    return value;
  }

  size() {
    let length = this.back - this.front;
    return length < 0 ? 0 : length;
  }
}

let es6Queue = new Queue;
