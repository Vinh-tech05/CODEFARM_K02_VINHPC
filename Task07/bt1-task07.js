// Input:
const arrayNumber = [1, 2, 3, 3, 2, 1];
function checkSymmetricalArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return "Dữ liệu kh hợp lệ";
  if (arr.length === 1) return "Mảng có 1 phần tử, kh kiểm tra được";

  const arrReversed = arr.slice().reverse();
  let SymmetricalArr = true;

  arr.forEach((value, index) => {
    if (value !== arrReversed[index]) {
      SymmetricalArr = false;
    }
  });
  return SymmetricalArr;
}

// Output:
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true
