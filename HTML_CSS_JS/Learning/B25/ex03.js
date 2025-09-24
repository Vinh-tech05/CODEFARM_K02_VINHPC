// let counter = 0;

// const ID = setInterval(
//   (name) => {
//     console.log(`counter: ${counter++},${name}`);
//   },
//   1000,
//   "thay Hoang"
// );
// clearInterval(ID);

// * Xây dựng đồng hồ đếm ngược thời gian để thực hiện giao diện lên màn hình với định dang HH:MM:SS

const ID = setInterval(() => {
  const timer = new Date();
  document.body.innerHTML = `${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`;
}, 1000);
clearInterval(ID);
