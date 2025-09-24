const users = [
  { id: 1, name: "Huy", gender: "male" },
  { id: 2, name: "Van Anh", gender: "female" },
  { id: 3, name: "Nam", gender: "other" },
];
//Kiểm tra xem trong users có bạn nữ nào không
const user = users.some((item) => item.gender === "female");
//Kiểm tra xem trong users có phải toàn bạn nữ không
const user1 = users.every((item) => item.gender === "female");
console.log(user);
console.log(user1);
