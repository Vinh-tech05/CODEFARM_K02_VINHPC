// const stringDay = prompt("Nhập Y_M_D");

// function getDay(stringDay) {
//   const now = new Date(stringDay).getDay();
//   if (now == 1) console.log("Thứ2");
//   else if (now == 2) console.log("Thứ3");
//   else if (now == 3) console.log("Thứ4");
//   else if (now == 4) console.log("Thứ5");
//   else if (now == 5) console.log("Thứ6");
//   else if (now == 6) console.log("Thứ7");
//   else console.log("CN");
// }
// //   switch (now)
// //     case 0:
// //       console.log("CN");

// //       break;
// //     case 1:
// //       console.log("2");

// //       break;
// //     case 2:
// //       console.log("3");

// //       break;
// //     case 3:
// //       console.log("4");

// //       break;
// //     case 4:
// //       console.log("5");

// //       break;
// //     case 5:
// //       console.log("6");

// //       break;
// //     case 6:
// //       console.log("T7");

// //       break;

// //     default:
// //       break;
// //   }
// getDay(stringDay);

//làm hình vuông với kí tự là dấu *

// const n = Number(prompt("Nhập vào HV(4x4): "));

// function printSquare(n) {
//   let colum = "";
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//       row += " * ";
//     }

//     colum += row + "\n";
//   }
//   console.log(colum);
// }
// printSquare(n);

//tam giác vuông

// const n = Number(prompt("Nhập số n :  "));

// function tamGiacCan(n) {
//   let colum = "";
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += " * ";
//     }
//     colum += row + "\n";
//   }
//   console.log(colum);
// }

// tamGiacCan(n);

// const n = Number(prompt("Nhập số n :  "));
// const m = prompt("Nhập kí tự");
// function cayThong(n, m) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 0; j <= n - i; j++) {
//       row += " ";
//     }
//     for (let p = 0; p < 2 * i - 1; p++) {
//       row += m;
//     }
//     console.log(row);
//   }
//   let colum = "";
//   for (let k = 1; k < n - 1; k++) {
//     colum += " ";
//   }
//   colum += " ||| ";
//   console.log(colum);
// }
// cayThong(n, m);

// function printMultiplicationTable() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Bảng nhân ${i}:`);

//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`); //i =1; x j =1 ; 1
//     }
//   }
// }
// printMultiplicationTable();

function printPrimeNumber(n) {
  if (typeof n !== "number" || Number.isNaN(n)) {
    console.log("Invalid");
    return;
  }
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let x = 2; x <= Math.sqrt(i); x++) {
      if (i % x === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

printPrimeNumber(10);
