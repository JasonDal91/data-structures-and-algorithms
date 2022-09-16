import { Node, LinkedList } from './LinkedList_practice.mjs';

const node = new Node(1);
const node1 = new Node(2);
node.next = node1;

console.log(node);
console.log(node.next);
console.log(node.next.next);

const linkedList = new LinkedList();
linkedList.insertAt(0, 1);
linkedList.insertAt(1, 2);
linkedList.printAll();
console.log(linkedList.count);
linkedList.insertAt(2, 3);
linkedList.printAll();

linkedList.claer();
linkedList.printAll();

linkedList.insertLast(1);
linkedList.insertLast(2);
linkedList.insertLast(3);
linkedList.insertLast(4);
linkedList.printAll();
linkedList.deleteAt(0);
linkedList.printAll();
linkedList.deleteAt(1);

linkedList.printAll();
linkedList.deleteAt(1);
//linkedList.deleteAt(0);
//linkedList.deleteLast();
linkedList.printAll();

//linkedList.insertLast(2);
//const secondNode = linkedList.getNodeAt(1);
//console.log(secondNode);
