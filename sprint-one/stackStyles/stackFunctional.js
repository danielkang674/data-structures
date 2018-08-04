const TOTALNODES = 40000000;
let stackStyles = {};
stackStyles.functional = Stack();
for (let i = 0; i < TOTALNODES; i++) {
  stackStyles.functional.push(i);
}
stackStyles.functional.totalLength = stackStyles.functional.size();
console.log(stackStyles.functional.totalLength);
for (let j = 0; j < TOTALNODES; j++) {
  stackStyles.functional.pop();
}
stackStyles.functional.totalLength = stackStyles.functional.size();
console.log(stackStyles.functional.totalLength);
console.log(stackStyles.functional);