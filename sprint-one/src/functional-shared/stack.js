var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  let size = this.size();
  this.storage[size] = value;
  this.length++;
};

stackMethods.pop = function () {
  let size = this.size() - 1;
  let value = this.storage[size];
  if (value !== undefined) {
    delete this.storage[size];
    this.length--;
  }
  return value;
};

stackMethods.size = function () {
  return this.length;
};

