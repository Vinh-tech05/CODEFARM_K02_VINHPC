//DOM : là 1 giao diện lập trình cho phép truy cập và thao tác với các tài liệu HTML, XML và SVG
/**
 * Element node: các phương thức
 */

const itemHTML1 = document.getElementsByClassName("item")[1];
const itemHTML2 = document.getElementsByClassName("container")[0];
console.log(itemHTML2.getElementsByClassName("item")[0]);

console.log(itemHTML1);

let itemHTML3 = document.querySelector("div.container > .item");
console.log(itemHTML3);

let itemHTML4 = document.querySelectorAll(".container > .item");
console.log(itemHTML4);
