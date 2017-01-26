const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    if (!this.length) {
      this.length = 0;
      this._head = new Node(data);
      this._tail = this._heed;

      return this;
    }

    if (this.length === 1) {
      this.length++;
      this._tail = new Node(data, this._head);
      this._head.next = this._tail;

      return this;
    }

    this._tail.next = new Node(data, this._tail);
    this._tail = this._tail.next;
    this.length++;

    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let i = 0;
    let item = this._head;
    while (item !== null && i < index) {
      i++;
      item = item.next;
    }

    return item && item.data;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      return this;
    }

    if (index === this.length) {
      this.append(data);

      return this;
    }

    if (index === 0) {
      this.length++;
      this._head.prev = new Node(data, null, this._head);
      this._head = this._head.prev;

      return this;
    }

    if (index === this.length - 1) {
      this.length++;
      this._tail.next = new Node(data, this._tail, null);
      this._tail = this._tail.next;

      return this;
    }

    this.length++;
    let i = 0;
    let item = this._head;
    while (i !== index - 1) {
      item = item.next;
      i++;
    }

    const tmp = item.next;
    item.next = new Node(data, item, item.next);
    if (tmp) {
      tmp.prev = item.next;
    }

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  deleteAt(index) {
    if (index < 0 || index > this.length - 1) {
      return this;
    }

    if (this.length === 1) {
      this.clear();

      return this;
    }

    if (index === 0) {
      this.length--;
      this._head = this._head.next;
      this._head.prev = null;

      return this;
    }

    if (index === this.length - 1) {
      this.length--;
      this._tail = this._tail.prev;
      this._tail.next = null;

      return this;
    }

    this.length--;
    let i = 0;
    let item = this._head;
    while (i !== index - 1) {
      item = item.next;
      i++;
    }

    item.prev.next = item.next;
    item.next.prev = item.prev;

    return this;
  }

  reverse() {
    let left = this._head;
    let right = this._tail;

    while (left !== right) {
      const tmp = left.data;
      left.data = right.data;
      right.data = tmp;
      left = left.next;
      right = right.prev;
    }

    return this;
  }

  indexOf(data) {
    let i = 0;
    let item = this._head;

    while (i < this.length && item.data !== data) {
      item = item.next;
      i++;
    }

    if (i < this.length) {
      return i;
    }

    return -1;
  }
}

module.exports = LinkedList;
