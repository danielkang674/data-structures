var BinarySearchTree = function (value) {
  let newBST = Object.create(bstMethods);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function (value) {
  // check value
  if (value < this.value) {
    if (this.left === null) {
      // create new tree node
      this.left = BinarySearchTree(value);
    } else {
      // go down the tree recursively
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function (value) {
  let bool = false;

  // inner recursive function
  let innerFunc = function (node) {
    // CORRECT IMPLEMENTATION
    if (bool) {
      return;
    }
    if (node.value === value) {
      bool = true;
      return;
    }
    if (value < node.value && node.left !== null) {
      innerFunc(node.left);
    } else if (value > node.value && node.right !== null) {
      innerFunc(node.right);
    }

    // INCORRECT IMPLEMENTATION
    // if (bool) {
    //   return;
    // }
    // if (node.value === value) {
    //   bool = true;
    //   return;
    // }
    // if (node.left !== null) {
    //   innerFunc(node.left);
    // }
    // if (node.right !== null) {
    //   innerFunc(node.right);
    // }
  };

  // call function
  innerFunc(this);
  return bool;
};

bstMethods.depthFirstLog = function (cb) {

  // inner recursive function
  let innerFunc = function (node) {
    cb(node.value);
    if (node.left !== null) {
      innerFunc(node.left);
    }
    if (node.right !== null) {
      innerFunc(node.right);
    }
  };

  // call function
  innerFunc(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert is linear
 * contains is O(log n) 
 * depthfirstlog is linear
 */
