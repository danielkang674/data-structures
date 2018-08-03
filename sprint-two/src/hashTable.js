

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  let doIpush = true;
  if (!bucket) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      doIpush = false;
    }
  }
  if (doIpush) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let container = this._storage.get(index);
  let value;
  for (let i = 0; i < container.length; i++) {
    if (container[i][0] === k) {
      value = container[i][1];
    }
  }
  return value;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let container = this._storage.get(index);
  for (let i = 0; i < container.length; i++) {
    if (container[i][0] === k) {
      delete container[i][0];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert is constant complexity
 * retrieve is constant if distribution is good
 * remove is constant if distribution is good
 */


