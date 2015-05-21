function LinkedList(data) {
  var node = new Node(data);
  return {
    startNode: node,
    endNode: node,
    currentNode: node,

    goNext: function() {
      if (!!this.currentNode.next) {
        this.currentNode = this.currentNode.next;
      }
      return this.currentNode;
    },

    goPrevious: function() {
      if (!!this.currentNode.previous) {
        this.currentNode = this.currentNode.previous;
      }
      return this.currentNode;
    },

    goStart: function() {
      this.currentNode = this.startNode;
    },

    goEnd: function() {
      this.currentNode = this.endNode;
    },

    insertBeggining: function(data) {
      var node = new Node(data, null, this.startNode);
      this.startNode.linkPrevious(node);
      this.startNode = node;
      return node;
    },

    insertEnd: function(data) {
      var node = new Node(data);
      if (!!this.endNode)
        this.endNode.linkPrevious(node);
      this.endNode = node;
      return node;
    },

    insertAfter: function(data) {
      var node = new Node(data);
      this.currentNode.linkNext(node);
      if (this.currentNode == this.endNode)
        this.endNode = node;
      return this.goNext();
    },
    insertBefore: function(data) {
      var node = new Node(data);
      this.currentNode.linkPrevious(node);
      if (this.currentNode == this.startNode)
        this.startNode = node;
      return this.goPrevious();
    },
    deleteCurrent: function() {
      var node = this.currentNode.next || this.currentNode.previous || this.startNode;
      this.currentNode.delete();
      this.currentNode = node;
    }
  };
}

function Node(data, previous, next) {
  // TODO: shitty interface must redo this signature
  return {
    next: (next instanceof Node ? next : null),
    previous: (previous instanceof Node ? previous : null),
    data: data,
    linkNext: function(next) {
      this.next = next;
      if (!!this.next) {
        this.next.previous = this;
      }
    },
    linkPrevious: function(previous) {
      this.previous = previous;
      if (!!this.previous) {
        this.previous.next = this;
      }
    },
    delete: function() {
      if (!!this.previous) {
        this.previous.next = this.next;
      }
      if (!!this.next) {
        this.next.previous = this.previous;
      }
    }
  };
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList
};