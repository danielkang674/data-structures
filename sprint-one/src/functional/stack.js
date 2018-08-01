
var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    let size = someInstance.size();
    storage[size] = value;
  };

  someInstance.pop = function () {
    let size = someInstance.size() - 1;
    let value = storage[size];
    delete storage[size];
    return value;
  };

  someInstance.size = function () {
    let counter = 0;
    for (let key in storage) {
      counter++;
    }
    return counter;
  };

  return someInstance;
};
