/**
 * callback
 * promise
 * async/await
 */

function A(callback) {
  setTimeout(() => {
    console.log("A");
    callback();
  }, 2000);
}

function B(callback) {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 1000);
}

function C(callback) {
  setTimeout(() => {
    console.log("C");
  }, 500);
}

A(() => B(() => C()));
/**
 * * JS là ngôn ngữ đơn luồng.
 * * Js là ngôn ngữ đồng bộ khi kh sử dụng các effect, các web api. Nhưng JS xử lý bất đồng bộ với các WEB API nhưu fetch, setTimeout,...
 */
