class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    let tail = this.size();
    this.storage[tail] = value;
  }

  pop() {
    let tail = this.size();
    let value = this.storage[tail - 1];
    delete this.storage[tail - 1];
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

let es6Instance = new Stack();