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
  head: NodeBase;

  add(value: any): void {
    if (this.head === null) {
      this.head = new NodeBase(value);
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      // When the loop is over, then we finally set the value to the lastNode in the linkedList
      currentNode.next = new NodeBase(value);
    }

    this.length++;
  }
}
