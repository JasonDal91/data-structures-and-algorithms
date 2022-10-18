// 큐는 first in first out 의 자료구조이다.
// 일상생활 예) 마트의 줄( 먼저 온 사람이 먼저 계산하고 나간다. )
// 큐는 운영체제에서도 쓰인다. 운영체제가 프로세스의 작업 요청을 들어온 순서대로 큐에 넣고
// CPU가 순서대로 꺼내서 처리한다. 이를 운영체제에서는 FIFO 스케쥴링이라고 한다.

// 큐의 추상자료형
// enqueue - 데이터 삽입
// dequeue - 데이터 제거
// front - 데이터 참조(가장 먼저 들어간 데이터 참조)
// isEmpty - 비었는지 확인

import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  enqueue(data) {
    this.list.insertAt(0, data);
  }

  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (error) {
      return null;
    }
  }

  front() {
    return this.list.tail;
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Queue };
