const minutes = prompt("Số phút: ");

// console.log(minutes);

let seconds = minutes * 60;

// console.log(seconds);

// console.log(time);
function start() {
  const ID = setInterval(() => {
    if (seconds <= 0) {
      document.body.innerHTML = "Hết Giờ";
      clearInterval(ID);
      return;
    }
    const minute = Math.floor(seconds / 60);
    const second = Math.floor(seconds % 60);
    document.body.innerHTML = `${minute} : ${second} `;
    seconds--;
  }, 100);
}

document.getElementById("btnStart").addEventListener("click", start);
