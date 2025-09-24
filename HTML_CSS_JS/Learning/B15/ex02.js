const arr = ["B", "B", "C", "D"];

const result = arr.splice(0, 1, "A");
console.log(result);
console.log(arr);

/**
 * splice(start,deletedCount, ...elements)
 * start: vị trí bắt đầu thay đổi
 * deletedCount: số lượng phần tử bớt đi
 * elements: Các phần tử mới thêm vào
 * trả về mảng phần tử bị lược bỏ
 * thay đổi mảng gốc
 */
