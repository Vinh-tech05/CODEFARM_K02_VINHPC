// !  storage là 1 phần của WEB API, là kho chứa dữ liệu cửa website trên trình duyệt
/**
 * ? localStorage:
 * * dung lượng : 5-10MB (tùy trình duyệt)
 * * lưu trữ dạng key-value(value là string)
 * * đc quản lý theo domain/ip address.
 * * vĩnh viễn kh mất đi nếu kh xóa
 * * Sử dụng để mang tính bền vững của ng dùng
 *
 *
 *
 * ? sessionStorage:
 * * dung lượng : 5-10MB (tùy trình duyệt)
 * * lưu trữ dạng key-value(value là string)
 * * đc quản lý theo tab.
 * * khi ng dùng thoát thì tự động xóa
 * * Sử dụng khi muốn lưu trữ các thông tin tồn tại và thay đổi theo yêu cầu ng dùng
 *
 * ? các phương thức chung: set, get, remove, clear.
 */

// localStorage.setItem("name", "Hoang");
// localStorage.setItem("age", 33);

// sessionStorage.setItem("name", "Hoang");
// sessionStorage.setItem("age", 33);
