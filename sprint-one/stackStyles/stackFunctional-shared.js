const TOTALNODES = 40000000;
let stackStyles = {};
stackStyles.functionalShared = Stack();
for (let i = 0; i < TOTALNODES; i++) {
  stackStyles.functionalShared.push(i);
}
stackStyles.functionalShared.totalLength = stackStyles.functionalShared.size();
console.log(stackStyles.functionalShared.totalLength);
for (let j = 0; j < TOTALNODES; j++) {
  stackStyles.functionalShared.pop();
}
stackStyles.functionalShared.totalLength = stackStyles.functionalShared.size();
console.log(stackStyles.functionalShared.totalLength);
console.log(stackStyles.functionalShared);