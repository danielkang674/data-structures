let TOTALNODES = 40000000;
let queueFunctionalShared = Queue();
for (let i = 0; i < TOTALNODES; i++) {
  queueFunctionalShared.enqueue(i);
}
console.log(queueFunctionalShared.size());
for (let j = 0; j < TOTALNODES; j++) {
  queueFunctionalShared.dequeue();
}
console.log(queueFunctionalShared.size());
console.log(queueFunctionalShared);