// const h2Element1 = document.createElement("h2");
// h2Element1.innerText = "JS DOM";
// console.log(h2Element1);

// document.body.appendChild(h2Element1);

const studentList = [
  { id: 1, name: "Vân Anh", skill: "HTML_CSS" },
  { id: 2, name: "Vân Anh", skill: "HTML_CSS" },
  { id: 3, name: "Vân Anh", skill: "HTML_CSS" },
  { id: 4, name: "Toro", skill: "Hất tung" },
];

//Hiển thị danh sách học viên cho trước và skill của họ lên màn hình bằng thao tác DOM, Sử dụng ol, li.
//dùng foreach để duyệt mảng

const element1 = document.createElement("ol"); //tạo ra thẻ ol
console.log(element1);

//dùng vòng lặp để duyệt mảng và đưa vào thẻ li
studentList.forEach((item) => {
  const element2 = document.createElement("li");
  //đưa nội dung duyệt vào thẻ li
  element2.innerText = `${item.name}-${item.skill}`;
  //   console.log(element2);
  //đưa thẻ li vào ol
  element1.appendChild(element2);
});
// đưa ol vào màn hình
document.body.appendChild(element1);
