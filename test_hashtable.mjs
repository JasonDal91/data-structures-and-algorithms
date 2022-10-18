import { HashTable } from './HashTable.mjs';

let hashTable = new HashTable();

hashTable.set(1, '문광민');
hashTable.set(4, '최윤희');
hashTable.set(20, '이한솔');
hashTable.set(6, '강재규');
hashTable.set(22, '조설주');
hashTable.set(21, '강동국');
hashTable.set(5, '서총명');
hashTable.set(10, '김성훈');
hashTable.set(8, '최재우');
hashTable.set(9, '박정훈');
hashTable.set(14, '유재석');

console.log(`1: ${hashTable.get(1)}`);
console.log(`22: ${hashTable.get(22)}`);
console.log(`14: ${hashTable.get(14)}`);
