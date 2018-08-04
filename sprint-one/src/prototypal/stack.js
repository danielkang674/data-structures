var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.length = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  let tail = this.size();
  this.storage[tail] = value;
  this.length++;
};

stackMethods.pop = function () {
  let tail = this.size();
  let value = this.storage[tail - 1];
  if (value !== undefined) {
    this.length--;
    delete this.storage[tail - 1];
  }
  return value;
};

stackMethods.size = function () {
  return this.length;
};
