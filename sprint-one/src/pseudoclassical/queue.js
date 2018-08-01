var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

let anotherInstance = new Queue();

Queue.prototype.enqueue = function (value) {
  let tail = this.size();
  for (let key in this.storage) {
    if (tail <= Number(key)) {
      tail = Number(key);
    }
  }
  this.storage[tail + 1] = value;
};

Queue.prototype.dequeue = function () {
  let head = this.size();
  let value;
  for (let key in this.storage) {
    if (head >= Number(key)) {
      head = Number(key);
    }
  }
  value = this.storage[head];
  delete this.storage[head];
  return value;
};

Queue.prototype.size = function () {
  let counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};