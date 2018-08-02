var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (list.tail === null && list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      let temp = Node(value);
      list.tail.next = temp;
      list.tail = temp;
    }
  };

  list.removeHead = function () {
    if (list.head === null) {
      return null;
    }
    if (list.head.next === null) {
      let temp = list.head.value;
      list.head = null;
      list.tail = null;
      return temp;
    }
    let temp = Node(list.head.value);
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function (target) {
    let contain = false;

    let innerFunc = function (node) {
      if (node.value === target) {
        contain = true;
        return;
      }
      if (node.next === null) {
        return;
      }
      innerFunc(node.next);
    };
    innerFunc(list.head);
    return contain;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* addToTail and removeHead are constant
* contains is linear
*/