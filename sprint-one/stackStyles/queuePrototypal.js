let TOTALNODES = 40000000;
let queuePrototypal = Queue();
for (let i = 0; i < TOTALNODES; i++) {
  queuePrototypal.enqueue(i);
}
console.log(queuePrototypal.size());
for (let j = 0; j < TOTALNODES; j++) {
  queuePrototypal.dequeue();
}
console.log(queuePrototypal.size());
console.log(queuePrototypal);