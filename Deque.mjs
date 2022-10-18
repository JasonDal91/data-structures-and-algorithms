import { DoublyLinkedList } from './DoublyLinkedList.mjs';

// Deque의 추상자료형
// printAll - 모든 데이터 출력
// addFrist - head에 데이터 삽입
// removeFirst - head에서 데이터 제거
// addLast - tail에 데이터 삽입
// removeLast - tail에서 데이터 제거
// isEmpty - 리스트 비었는지 체크

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    return this.list.printAll();
  }

  addFirst(data) {
    this.list.insertAt(0, data);
  }

  removeFirst() {
    try {
      return this.list.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  addLast(data) {
    this.list.insertLast(data);
  }

  removeLast() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Deque };
