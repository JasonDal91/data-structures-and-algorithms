import { Deque } from './Deque.mjs';

const deque = new Deque();

console.log('===== addFirst() =====');
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeLast();
deque.printAll();

console.log('\n');
