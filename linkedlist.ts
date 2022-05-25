// @author: @guillermoriv

export class NodeBase {
  value: any;
  next: NodeBase;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  length: number;
  headNode: NodeBase;

  constructor() {
    this.length = 0;
    this.headNode = null;
  }

  add(value: string): void {
    if (this.headNode === null) {
      this.headNode = new NodeBase(value);
    } else {
      let currentNode = this.headNode;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      // When the loop is over, then we finally set the value to the lastNode in the linkedList
      currentNode.next = new NodeBase(value);
    }

    this.length++;
  }

  remove(value: string) {
    let currentNode = this.headNode;
    let previousNode;

    if (currentNode.value === value) {
      this.headNode = currentNode.next;
    } else {
      while (currentNode.value !== value) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      // When the loop is over, then we finded the value, and we set the previousNode.next to the currentNode.next
      previousNode.next = currentNode.next;
    }

    this.length--;
  }

  indexOf(value: string) {
    let currentNode = this.headNode;
    let index = -1;

    while (currentNode) {
      index++;

      if (currentNode.value === value) {
        return index;
      }

      currentNode = currentNode.next;
    }

    if (currentNode.value === value) {
      return index;
    } else {
      while (currentNode.next) {}
    }
  }
}
