const TOTALNODES = 40000000;
let stackPseudoclassical = new Stack();
stackPseudoclassical = new Stack();
for (let i = 0; i < TOTALNODES; i++) {
  stackPseudoclassical.push(i);
}
stackPseudoclassical.totalLength = stackPseudoclassical.size();
console.log(stackPseudoclassical.totalLength);
for (let j = 0; j < TOTALNODES; j++) {
  stackPseudoclassical.pop();
}
stackPseudoclassical.totalLength = stackPseudoclassical.size();
console.log(stackPseudoclassical.totalLength);
console.log(stackPseudoclassical);