let a: number = 10;
console.log(a);

let b: string = "Hoang";
console.log(b);

let isMarried: boolean = true;
//typescrip notation

type User = { name: string; age: number; major: string };

{
  const infor: User = {
    name: "Nguyễn Hoàng",
    age: 33,
    major: "IT",
  };
  const infor2: User = {
    name: "Nguyễn Hoàng Minh",
    age: 22,
    major: "MKT",
  };

  const listUser: User[] = [infor, infor2];
  const arrNumber: number[] = [1, 2, 3, 4, 5];
  const arrmixed: (number | string)[] = [1, 3, "hoang", 3, 4, "minh"];
  console.log(arrmixed);
}
