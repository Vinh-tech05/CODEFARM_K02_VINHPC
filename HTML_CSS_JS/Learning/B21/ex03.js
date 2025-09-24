// function checkSymmetricalStr(str) {
//   const m = str.split("").reverse().join("");
//   if (m === str) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// checkSymmetricalStr("abba");
// checkSymmetricalStr("abcd");

//
const arr = ["apple", "banana", "cherry", "date"];
const keyword = "an";
function filterStringsByKeyword(arr, keyword) {
  const a = arr.filter((str) => str.includes(keyword));
  return a;
}
console.log(filterStringsByKeyword(arr, keyword));
