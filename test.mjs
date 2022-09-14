// mjs파일은 자바스크립트 모듈파일이다.

import { Node, LinkedList } from './LinkedList.mjs';

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

const linkedList = new LinkedList();

console.log('===== insertAt() 다섯 번 호출 =====');
linkedList.insertAt(0, 1);
linkedList.insertAt(1, 2);
linkedList.insertAt(2, 3);
linkedList.insertAt(3, 4);
linkedList.insertAt(4, 5);
linkedList.printAll();
console.log('===== claer() 호출 ====');
linkedList.clear();
linkedList.printAll();
console.log('===== insertLast() 세 번 호출 =====');
linkedList.insertLast(0);
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.printAll();
console.log('===== deleteAt() 호출 =====');
linkedList.deleteAt(0);
linkedList.printAll();
linkedList.deleteAt(1);
linkedList.printAll();
console.log('===== deleteLast() 호출 =====');
linkedList.insertLast(2);
linkedList.deleteLast();
linkedList.printAll();
linkedList.deleteLast();
linkedList.printAll();
console.log('===== getNodeAt() 호출 =====');
linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertLast(4);
linkedList.insertLast(5);

const secondNode = linkedList.getNodeAt(2);
console.log(secondNode);
