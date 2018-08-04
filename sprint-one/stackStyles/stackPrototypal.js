const TOTALNODES = 40000000;
let stackPrototypal = Stack();
for (let i = 0; i < TOTALNODES; i++) {
  stackPrototypal.push(i);
}
stackPrototypal.totalLength = stackPrototypal.size();
console.log(stackPrototypal.totalLength);
for (let j = 0; j < TOTALNODES; j++) {
  stackPrototypal.pop();
}
stackPrototypal.totalLength = stackPrototypal.size();
console.log(stackPrototypal.totalLength);
console.log(stackPrototypal);