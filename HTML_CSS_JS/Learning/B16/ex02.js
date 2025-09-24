/**
 * find: trả về phần tử đầu tiên thìm thấy và chỉ dùng để tìm khi trường nó tìm là duy nhất.
 * findLast: tìm từ cuối trả về phần tử tìm thấy từ cuối lên đầu.
 * findIndex, findLastIndex : trả về vị trí của phần tử đầu tiên hoặc cuối cùng thỏa mãn đk-phù hợp cho tìm vị trí đối tượng trong mảng
 * filter
 * some
 * every
 * include: tìm và trả về True/False
 * indexOf, lastIndex : trả về vị trí của phần tử đầu tiên hoặc cuối cùng trong mảng thảo mãn đk - có thể truyền đc vị trí bắt đầu tìm đc vào
 *
 * reduce
 * sort
 */

const students = [
  { id: 1, name: "V", score: 2 },
  { id: 2, name: "A", score: 7 },
  { id: 3, name: "U", score: 6 },
  { id: 4, name: "T", score: 4 },
];
console.log(students.find((item) => item.score < 5));
console.log(students.findLast((item) => item.score < 5));
console.log(students.findIndex((item) => item.score < 5));
console.log(students.findLastIndex((item) => item.score < 5));

const animals = ["dog", "cat", "camel", "cat"];

console.log(animals.indexOf("cat")); //vị trí con mèo trong mảng
console.log(animals.lastIndexOf("cat"));
console.log(animals.includes("cat")); //true
