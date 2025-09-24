/**
 * đệ quy
 */
// function hello(count) {
//   count++;
//   if (count <= 5) {
//     console.log(`hello ${count}`);
//     hello(count);
//   }
// }
// hello(1);

function printNumber(n) {
  n++;
  if (n <= 10) {
    console.log(n);
    printNumber(n);
  }
}
printNumber(0);
