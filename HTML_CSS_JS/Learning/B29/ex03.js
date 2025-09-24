const myFetch1 = fetch("http://dummyjson.com/products?limit=10&skip=10")
  .then((res) => res.json())
  .then((data) => data);
const myFetch2 = fetch("http://dummyjson.com/products?limit=40&skip=0")
  .then((res) => res.json())
  .then((data) => data);
const myFetch3 = fetch("http://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => data);
Promise.race([myFetch1, myFetch2, myFetch3])
  .then((data) => {
    console.log(data);
    console.log("xong");
  })
  .catch((err) => {
    console.log(err);
    console.log("fail");
  });

/**
 * ? Promise.all
 * * - Nhận vào 1 array các promise
 * * - Thực hiện toàn bộ các promise này đồng thời ( kh cần tuần tự)
 * * - Nếu tất cả đều thành công , promise.all gọi đến `then` và trả về arr các kết quả của các promise (theo đúng thứ tự)
 * * - Neesi 1 trong số các promise bị rejected thì Promise.all dừng ngay lập tức và trả về err trong catch
 * !Khi nào dùng PROMISE.RACE
 * - Khi chỉ cần 1 kết quả nhanh nhất cho 1 lượng request.
 * - VD: gọi đồng thời nhiều API đến nhiều server để lấy nhanh nhất 1 kết quả
 */
