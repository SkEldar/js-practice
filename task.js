let a = [];

for (let i = 0; i < 10; i++) {
  let rand = Math.random();
  a.push(rand);
}
console.log(a);
// for (let q = 0; q < a.length; q++) {
//   let max = arr[0];
//   if (a[q] > max) {
//     max = a[q];
//   }
// }
console.log(Math.max.apply(null, a));
