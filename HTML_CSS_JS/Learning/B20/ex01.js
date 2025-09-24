const arr1 = ["A", "B", "C", "D"];

const firstStudent = arr1[0];
const secondStudent = arr1[1];

//Destructuring: là cú pháp khai báo nhiều biến hoặc lấy ra nhiều key của Object để thành các biến riêng lẻ trong 1 lần gán
// có thể coi là hành vi phá vỡ vỏ bọc của khối hộp để lấy các phần tử con bên trong.
const [first, second, ...rest] = arr1;
console.log(first);
console.log(second);
console.log(rest);

/** REST()
 * rest được gọi là phần còn lại khi destructuring hoặc truyền tham số và hàm
 * rest được coi là cách để gom lại các phẩn tử hoặc một thuộc tính của mảng( hoặc đối tượng)
 * rest luôn đc khai báo ở cuối destructuring or khi truyền tham số vào hàm
 */

/**SPREAD()
 * spread(): được sử dụng để trải các phần tử, thuộc tính của mảng, đối tượng đã có sẵn vào 1 khai báo mới.
 * có thể đc sử dụng ở bất cứ vị trí nào trong Object, array literal
 */
