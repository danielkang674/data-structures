describe('doublyLinkedList', function () {
  var doublyLinkedList;

  beforeEach(function () {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a head and tail', function () {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function () {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function () {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function () {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should be able to empty and refill', function () {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeHead();
    doublyLinkedList.addToTail(11);
    expect(doublyLinkedList.contains(11)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(false);
    expect(doublyLinkedList.contains(9)).to.equal(false);
  });

  // differs from singly linked list
  it('should have methods named "addToHead" and "removeTail"', function () {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should have a previous property', function () {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head).to.have.property('previous');
    expect(doublyLinkedList.tail).to.have.property('previous');
    expect(doublyLinkedList.tail.previous.value).to.equal(6);
  });

  it('should designate a new head when new nodes are added to the head', function () {
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
    doublyLinkedList.addToHead(9);
    expect(doublyLinkedList.head.value).to.equal(9);
    expect(doublyLinkedList.tail.value).to.equal(7);
  });

  it('should return the value of the former tail when removeTail is called', function () {
    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.removeTail()).to.equal(2);
  });

  it('should be able to empty and refill using all methods', function () {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToHead(10);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.addToHead(12);
    doublyLinkedList.removeHead();
    doublyLinkedList.removeTail();
    doublyLinkedList.removeHead();
    doublyLinkedList.removeTail();
    doublyLinkedList.addToTail(11);
    doublyLinkedList.addToHead(13);
    expect(doublyLinkedList.contains(11)).to.equal(true);
    expect(doublyLinkedList.contains(7)).to.equal(false);
    expect(doublyLinkedList.contains(9)).to.equal(false);
    expect(doublyLinkedList.contains(10)).to.equal(false);
    expect(doublyLinkedList.contains(12)).to.equal(false);
    expect(doublyLinkedList.contains(13)).to.equal(true);
  });
  // add more tests here to test the functionality of doublyLinkedList
});
