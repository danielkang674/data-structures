const TOTALNODES = 40000000;
let stackStylesES6 = new Stack();
for (let i = 0; i < TOTALNODES; i++) {
  stackStylesES6.push(i);
}
stackStylesES6.totalLength = stackStylesES6.size();
console.log(stackStylesES6.totalLength);
for (let j = 0; j < TOTALNODES; j++) {
  stackStylesES6.pop();
}
stackStylesES6.totalLength = stackStylesES6.size();
console.log(stackStylesES6.totalLength);
console.log(stackStylesES6);