var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function () {
  let value;
  if (this.front <= this.back) {
    value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
  }
  return value;
};

queueMethods.size = function () {
  let length = this.back - this.front;
  return length < 0 ? 0 : length;
};


