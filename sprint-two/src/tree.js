var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
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
  let newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
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

treeMethods.removeFromParent = function () {
  let parent = this.parent;
  this.parent = null;
  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].value === this.value) {
      parent.children.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addChild should be constant IF treeMethods does not change because of the functional-shared style.
 * IF IT DOES change, then it is linear to how many methods are added/subtracted to treeMethods.
 * 
 * contains is linear because it checks every node.
 */

