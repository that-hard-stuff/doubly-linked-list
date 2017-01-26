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
        
        return;
      }
        
      if (this.length === 1) {
        this.length++;
        this._tail = new Node(data, this._head);
        this._head.next = this._tail;
          
        return;
      }
        
      this._tail.next = new Node(data, this._tail);
      this._tail = this._tail.next;
      this.length++;
        
      return;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
