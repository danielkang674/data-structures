let TOTALNODES = 40000000;
let queuePseudoclassical = new Queue();
for (let i = 0; i < TOTALNODES; i++) {
  queuePseudoclassical.enqueue(i);
}
console.log(queuePseudoclassical.size());
for (let j = 0; j < TOTALNODES; j++) {
  queuePseudoclassical.dequeue();
}
console.log(queuePseudoclassical.size());
console.log(queuePseudoclassical);