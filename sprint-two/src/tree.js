var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  let contain = false;

  let innerFunc = function (node) {
    if (node.value === target) {
      contain = true;
    }
    if (node.children.length > 0) {
      for (let child of node.children) {
        innerFunc(child);
      }
    }
  };
  innerFunc(this);
  return contain;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addChild should be constant IF treeMethods does not change because of the functional-shared methods.
 * IF IT DOES change, then it is linear to how many methods are added/subtracted to treeMethods.
 * 
 * contains is linear because it checks every node.
 */

