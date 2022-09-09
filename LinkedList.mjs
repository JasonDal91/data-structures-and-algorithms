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
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    let node = new Node(data);

    if (index < 0 || index > this.count) {
      throw new Error('index should be over than 0 and lese than count');
    }

    this.head = node;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    node.next = currentNode.next.next;
    count++;

    console.log(node);
  }
}

export { Node, LinkedList };

// insertAt(0, 1)
// 첫번쨰 노드에 1이 저장
// insertAt(3, 1)
// 4번쨰 노드에 1 저장
// head와 next로 순서를 기억
