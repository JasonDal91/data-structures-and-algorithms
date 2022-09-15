import { Node, LinkedList } from './LinkedList_practice.mjs';

const node = new Node(1);

//console.log(node);

const linkedList = new LinkedList();
linkedList.insertAt(0, 1);
linkedList.insertAt(1, 2);
linkedList.insertAt(2, 3);
linkedList.printAll();
