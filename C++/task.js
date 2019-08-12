let start = [];
let end = [];
for (let i = 0; i < 10; i++) {
  let c = Math.floor(Math.random() * 10);
  start.push(c);
}
console.log(start);
let max = 0;
for (let l = 0; l < start.length; l++) {
  if (start[l] > max) {
    max = start[l];
  }
  max = 0;
  n = max;
  if (start[l] > max && start[l] < n) {
    max = start[l];
  }
}
end.push(max);

console.log(end);
