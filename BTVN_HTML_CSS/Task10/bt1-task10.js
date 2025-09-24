const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  const newObj = {};
  array.forEach((item) => {
    const splitItem = item.split(":");
    const key = splitItem[0];
    const value = splitItem[1];

    newObj[key] = value;
  });
  return newObj;
}

// Output:
console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }
