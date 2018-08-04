class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    let tail = this.size();
    this.storage[tail] = value;
    this.length++;
  }

  pop() {
    let tail = this.size();
    let value = this.storage[tail - 1];
    if (value !== undefined) {
      this.length--;
      delete this.storage[tail - 1];
    }
    return value;
  }

  size() {
    return this.length;
  }
}

let es6Instance = new Stack();