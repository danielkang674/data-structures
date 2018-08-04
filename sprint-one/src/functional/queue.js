var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.front = 0;
  someInstance.back = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[someInstance.back] = value;
    someInstance.back++;
  };

  someInstance.dequeue = function () {
    let value;
    if (someInstance.front <= someInstance.back) {
      value = storage[someInstance.front];
      delete storage[someInstance.front];
      someInstance.front++;
    }
    return value;
  };

  someInstance.size = function () {
    let length = someInstance.back - someInstance.front;
    return length < 0 ? 0 : length;
  };

  return someInstance;
};
