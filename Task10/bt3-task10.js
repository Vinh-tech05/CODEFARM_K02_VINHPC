function sortUsersByName(users) {
  function tachTen(fullName) {
    const tu = fullName.trim().split(/\s+/);
    const ten = tu[tu.length - 1];
    const hoVaTenDem = tu.slice(0, -1).join(" ");
    return { ten, hoVaTenDem };
  }

  return users.sort((a, b) => {
    const tenA = tachTen(a.fullName);
    const tenB = tachTen(b.fullName);

    const cmpTen = tenA.ten.localeCompare(tenB.ten, "vi", {
      sensitivity: "base",
    });
    if (cmpTen !== 0) return cmpTen;

    return tenA.hoVaTenDem.localeCompare(tenB.hoVaTenDem, "vi", {
      sensitivity: "base",
    });
  });
}

// Input:
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];
// Output:
console.log(sortUsersByName(users));
[
  { fullName: "Nguyễn Đức Hoàng" }, // Tên: Hoàng, Họ và tên đệm: Nguyễn Đức
  { fullName: "Nguyễn Minh Hoàng" }, // Tên: Hoàng, Họ và tên đệm: Nguyễn Minh
  { fullName: "Lê Nin" }, // Tên: Nin
  { fullName: "Lê Văn Tình" }, // Tên: Tình
  { fullName: "Lê Văn" }, // Tên: Văn
];
