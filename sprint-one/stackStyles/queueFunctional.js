let TOTALNODES = 40000000;
let queueFunctional = Queue();
for (let i = 0; i < TOTALNODES; i++) {
  queueFunctional.enqueue(i);
}
console.log(queueFunctional.size());
for (let j = 0; j < TOTALNODES; j++) {
  queueFunctional.dequeue();
}
console.log(queueFunctional.size());
console.log(queueFunctional);