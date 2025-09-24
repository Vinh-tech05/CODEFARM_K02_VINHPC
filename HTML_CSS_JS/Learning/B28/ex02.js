function PromiseA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 2000);
  });
}

function PromiseB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 2000);
  });
}

function PromiseC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("C");
    }, 2000);
  });
}

console.time("Promise");
PromiseA()
  .then((data) => {
    console.log(data);
    return PromiseB();
  })
  .then((data) => {
    console.log(data);
    return PromiseC();
  })
  .then((data) => {
    console.log(data);
    console.timeEnd("Promise");
  });
