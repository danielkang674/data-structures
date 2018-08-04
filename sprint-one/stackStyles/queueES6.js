let TOTALNODES = 40000000;
let queueES6 = new Queue();
for (let i = 0; i < TOTALNODES; i++) {
  queueES6.enqueue(i);
}
console.log(queueES6.size());
for (let j = 0; j < TOTALNODES; j++) {
  queueES6.dequeue();
}
console.log(queueES6.size());
console.log(queueES6);