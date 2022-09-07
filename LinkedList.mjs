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

export { Node };
