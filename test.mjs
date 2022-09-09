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
linkedList.insertAt(0, 3);
linkedList.insertAt(1, 3);
linkedList.insertAt(2, 2);
