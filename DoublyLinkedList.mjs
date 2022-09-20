/* 
추상자료형
- 어떠한 데이터와 그 데이터에 대한 연산을 표기
- 데이터와 그 데이터를 연산하는 기능을 표기하는 것

연결리스트의 추상자료형
1. 모든 데이터 출력  printAll()
2. 모든 데이터 제거  clear()
3. 인덱스 삽입  insertAt(index, data)
4. 마지막 삽입  insertLast(data)
5. 인덱스 삭제  deleteAt(index)
6. 마지막 삭제  deleteLast()
7. 인덱스 읽기  getNodeAt(index)
*/

// 연결리스트는 데이터를 담은 노드를 서로 연결하는 구조

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = '[';
    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ', ';
      }
    }
    text += ']';
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error('index should be over than 0 and lese than count');
    }
    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head != null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('index should be over than 0 and lese than count');
    }
    let currentNode = this.head;
    if (index === 0) {
      let deleteNode = this.head;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return deleteNode;
    } else if (index === this.count - 1) {
      let deleteNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('index should be over than 0 and lese than count');
    }
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, DoublyLinkedList };
