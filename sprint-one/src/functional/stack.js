
var Stack = function () {
  var someInstance = {};
  someInstance.length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    let size = someInstance.size();
    storage[size] = value;
    someInstance.length++;
  };

  someInstance.pop = function () {
    let size = someInstance.size() - 1;
    let value = storage[size];
    if (value !== undefined) {
      delete storage[size];
      someInstance.length--;
    }
    return value;
  };

  someInstance.size = function () {
    return someInstance.length;
  }

  return someInstance;
};
