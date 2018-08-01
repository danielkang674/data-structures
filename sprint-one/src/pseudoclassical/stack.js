var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};
let someInstance = new Stack();

Stack.prototype.push = function (value) {
  let tail = this.size();
  this.storage[tail] = value;
};

Stack.prototype.pop = function () {
  let tail = this.size();
  let value = this.storage[tail - 1];
  delete this.storage[tail - 1];
  return value;
};

Stack.prototype.size = function () {
  let counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};