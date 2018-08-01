var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  let tail = this.size();
  for (let key in this.storage) {
    if (tail <= Number(key)) {
      tail = Number(key);
    }
  }
  this.storage[tail + 1] = value;
};

queueMethods.dequeue = function () {
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

queueMethods.size = function () {
  let counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};

