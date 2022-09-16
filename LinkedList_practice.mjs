// 연결리스트의 추상자료형
// 1. 모든 데이터 출력  printAll()
// 2. 모든 데이터 제거  clear()
// 3. 인덱스 삽입  insertAt(index, data)
// 4. 마지막 삽입  insertLast(data)
// 5. 인덱스 삭제  deleteAt(index)
// 6. 마지막 삭제  deleteLast()
// 7. 인덱스 읽기  getNodeAt(index)

class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error('index는 0보다 크고 count보다 작거나 같아야 합니다.');
    }
    const newNode = new Node(data);

    if (index === 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  printAll() {
    let currentNode = this.head;
    let text = '[';
    while (currentNode !== null) {
      text += `${currentNode.data}`;
      currentNode = currentNode.next;
      if (currentNode !== null) {
        text += ',';
      }
    }
    text += ']';
    console.log(text);
  }

  claer() {
    this.head = null;
    this.count = 0;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error('index는 0보다 크고 count보다 작거나 같아야 합니다.');
    }

    let deletedNode;

    if (index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error('index는 0보다 크고 count보다 작거나 같아야 합니다.');
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

export { Node, LinkedList };
