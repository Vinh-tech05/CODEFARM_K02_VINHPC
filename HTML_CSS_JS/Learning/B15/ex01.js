const arr = ["banana", "apple", "orange"];

const result = arr.slice(1, 3);
console.log(result);
console.log(arr);

const result2 = arr.slice();
console.log(result2);
result2.push("tomato");
console.log(result2);
console.log(arr);

/**
 * slice(start:end)
 * start:vị trí bắt đầu cắt
 * end: vị trí kết thúc
 * tạo ra mảng mới là con của mảng cũ,
 * không thay đổi mảng gốc
 * chấp nhận chỉ số âm.(lúc í thì điểm bắt đầu sẽ ngược lại với chỉ số âm)
 */
