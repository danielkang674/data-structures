var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function (value) {
  if (this.tail === null && this.head === null) {
    this.head = this.createNode(value);
    this.tail = this.head;
  } else {
    let temp = this.createNode(value);
    this.tail.next = temp;
    this.tail = temp;
  }
};

DoublyLinkedList.prototype.removeHead = function () {
  if (this.head === null) {
    return null;
  }
  if (this.head.next === null) {
    let temp = this.head.value;
    this.head = null;
    this.tail = null;
    return temp;
  }
  let temp = this.createNode(this.head.value);
  this.head = this.head.next;
  return temp.value;
};

DoublyLinkedList.prototype.contains = function (target) {
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
  innerFunc(this.head);
  return contain;
};

DoublyLinkedList.prototype.createNode = function (value) {
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