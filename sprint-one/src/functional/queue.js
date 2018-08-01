var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    let size = someInstance.size();
    let highestKey = size;
    for (let key in storage) {
      if (highestKey <= Number(key)) {
        highestKey = Number(key) + 1;
      }
    }
    storage[highestKey] = value;
  };

  someInstance.dequeue = function () {
    let lowestKey = someInstance.size(); 
    let value;
    for (let key in storage) {
      if (lowestKey > Number(key)) {
        lowestKey = Number(key);
      }
    }
    value = storage[lowestKey];
    delete storage[lowestKey];
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
