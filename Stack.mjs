import { LinkedList } from './LinkedList.mjs';

// 스택의 추상자료형
// Push - 데이터 삽입
// Pop - 데이터 제거
// Peek - 데이터 참조
// isEmpty - 비었는지 체크

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (error) {
      return null;
    }
  }

  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
