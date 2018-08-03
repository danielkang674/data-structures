

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  } 
  this._storage.get(index).push([k, v]);
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
 */


