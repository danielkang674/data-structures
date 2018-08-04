

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  this._ratio = 0.75;
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
    this._size++;
  }
  if ((this._size / this._limit) > this._ratio) {
    this.double();
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let container = this._storage.get(index);
  let value;
  if (container) {
    for (let i = 0; i < container.length; i++) {
      if (container[i][0] === k) {
        value = container[i][1];
      }
    }
  }
  return value;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let container = this._storage.get(index);
  if (container) {
    for (let i = 0; i < container.length; i++) {
      if (container[i][0] === k) {
        container.splice(i, 1);
        this._size--;
      }
    }
  }
  if ((this._size / this._limit) < (1 - this._ratio)) {
    this.halve();
  }
};

HashTable.prototype.double = function () {
  let oldLimit = this._limit;
  let oldStorage = this._storage;
  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  for (let i = 0; i < oldLimit; i++) {
    let bucket = oldStorage.get(i);
    if (bucket) {
      for (let j = 0; j < bucket.length; j++) {
        this.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }
};

HashTable.prototype.halve = function () {
  let oldLimit = this._limit;
  let oldStorage = this._storage;
  this._limit = Math.floor(this._limit / 2);
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  for (let i = 0; i < oldLimit; i++) {
    let bucket = oldStorage.get(i);
    if (bucket) {
      for (let j = 0; j < bucket.length; j++) {
        this.insert(bucket[j][0], bucket[j][1]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert is constant complexity
 * retrieve is constant if distribution is good
 * remove is constant if distribution is good
 */


