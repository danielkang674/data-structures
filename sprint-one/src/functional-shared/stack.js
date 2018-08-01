var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
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
};

stackMethods.pop = function () {
  let size = this.size() - 1;
  let value = this.storage[size];
  delete this.storage[size];
  return value;
};

stackMethods.size = function () {
  let counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};

