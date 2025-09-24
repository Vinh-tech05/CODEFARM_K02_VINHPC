/**
 * Number
 */

let a = 10.23443; // ưu tiên sử dụng vì dễ khai báo, ít tốn tài nguyên bộ nhớ, hiệu suất tốt
let b = new Number("10.05");

console.log(a.toFixed(3));

//Sự khác nhau giữa sử dụng phương thức tĩnh của hàm tạo (class) và PT thông qua prototype là gì?

// các phương thức được đặt trong prototype có nhiệm vụ làm việc với instance nên đc truy cập thông qua instance( VD: number.toFixed())

//Các thuộc tính, phương thức tĩnh (static methods, static properties) thì đc khai báo trong hàm tạo(hoặc class) nên đc truy cập thông qua hàm tạo Number

//Khi vượt quá ngưỡng Number thù nên dùng BigInt để tính toán : (n)
