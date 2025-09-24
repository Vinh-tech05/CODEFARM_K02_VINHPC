const arr = [
  { id: 1, name: "SP1", price: 200 },
  { id: 2, name: "SP2", price: 400 },
  { id: 3, name: "SP3", price: 500 },
  { id: 4, name: "SP4", price: 600 },
  { id: 5, name: "SP5", price: 100 },
];

function randomProducts(arr, n) {
  let arr1 = [];
  let arr2 = [];

  function generateIndex() {
    const index = Math.floor(Math.random() * arr.length);
    // console.log(index);
    if (arr2.find((item) => item === index)) {
      return generateIndex();
    }
    arr2.push(index);
    return index;
  }
  for (let i = 0; i < n; i++) {
    let index = generateIndex();
    arr1.push(arr[index]);
  }
  return arr1;
}
console.log(randomProducts(arr, 5));

//Output: manmrg con ngẫu nhiên chứa n phần tử từ arr

//B5: Kiểm tra xem index đã từng xuất hiện trong mảng phụ chưa, nếu chưa push phần tử này vào mảng đích và trả về mảng đích với số phần tử <=arr
