const studentList = [
  { id: 1, name: "Vân Anh", skill: "HTML_CSS" },
  { id: 2, name: "Vân Anh", skill: "HTML_CSS" },
  { id: 3, name: "Vân Anh", skill: "HTML_CSS" },
  { id: 4, name: "Toro", skill: "Hất tung" },
];

//xây dựng bảng đầy đủ các thuộc tính từ studenlist

const element3 = document.getElementsByClassName("student-table")[0];
// console.log(element3);
let content = "";
studentList.forEach((item) => {
  const table = `<tr>
                 <td scope="row" class="table-secondary">${item.id}</td>
                 <td class="table-secondary">${item.name}</td>
                 <td class="table-secondary">${item.skill}</td>
                </tr>`;
  console.log(table);
  content += table;
});
element3.innerHTML = content;
