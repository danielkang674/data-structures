var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

let anotherInstance = new Queue();

Queue.prototype.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function () {
  let value;
  if (this.front <= this.back) {
    value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
  }
  return value;
};

Queue.prototype.size = function () {
  let length = this.back - this.front;
  return length < 0 ? 0 : length;
};