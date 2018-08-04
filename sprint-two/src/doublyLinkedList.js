var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

DoublyLinkedList.prototype.addToTail = function (value) {
  let tempNode = this.createNode(value);
  if (this.tail === null && this.head === null) {
    this.head = tempNode;
    this.tail = tempNode;
  } else {
    let previousNode = this.tail;
    this.tail.next = tempNode;
    this.tail = tempNode;
    this.tail.previous = previousNode;
  }
};

DoublyLinkedList.prototype.removeHead = function () {
  if (this.head === null) {
    return null;
  }
  let temp = this.head.value;
  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
    return temp;
  }
  this.head = this.head.next;
  this.head.previous = null;
  return temp;
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
  node.previous = null;

  return node;
};

DoublyLinkedList.prototype.addToHead = function (value) {
  let newNode = this.createNode(value);
  if (this.head === null && this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    let tempNext = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.head.next = tempNext;
  }
};

DoublyLinkedList.prototype.removeTail = function () {
  if (this.tail === null) {
    return null;
  }
  let tempValue = this.tail.value;
  if (this.tail.previous === null) {
    this.head = null;
    this.tail = null;
    return tempValue;
  }
  this.tail = this.tail.previous;
  this.tail.next = null;
  return tempValue;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* addToTail and removeHead are constant
* contains is linear
*/