/**
 해시 테이블은 프로그래밍 언어에 따라서 조금씩 다른 이름을 가지고 있다.
 해시, 맵, 해시맵, 딕셔너리라고도 불린다.

 해시와 테이블이 합쳐진 자료구조이다.

 표(table)
 어떤 내용을 일정한 형식, 순서에 따라 나타낸 것


 해시 테이블의 추상자료형
 set - 데이터 삽입
 get - 데이터 읽기
 remove - 데이터 제거


 set 구현
 [] 해시 함수 필요
 [] 데이터를 넣을 배열 필요
 [] 충돌을 대비한 doublelinkedlist 

 [] 해시 테이블 빈 배열을 만든다.
 [] key와 value가 있는 객체 데이터를 받는다.
 [] 객체 데이터의 key값을 해시함수로 넣어서 인덱스를 구한다.
 [] 인덱스에 value를 node로 넣는다. (insertAt 사용)
 [] 인덱스에 이미 데이터가 들어가 잇다면?
 

 */

import { DoublyLinkedList } from './DoublyLinkedList.mjs';

class hashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }

  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new hashData(key, value));
  }

  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
    return null;
  }
}
export { HashTable };
