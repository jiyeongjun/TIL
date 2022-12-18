const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo'), 1000);
});
const promise4 = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('foo1'), 2000);
});

Promise.customAll = (promises) => {
  return new Promise((resolve, reject) => {
    const res = [];
    let cnt = promises.length;
    promises.forEach((promise, index) => {
      Promise.resolve(promise instanceof Promise ? promise : promise())
        .then((value) => {
          res[index] = value;
          cnt--;
          !cnt && resolve(res);
        })
        .catch(reject)
    })
  })
}

Promise.divAll = async (arr, num) => {
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    const res = await Promise.customAll(arr.slice(i, i + num));
    console.log(res, "완료");
    result.push(...res);
  }
  return result;
}

Promise.divAll([promise3, promise4, promise3, promise4, promise4, promise4, promise4], 3)
  .then(console.log);

Promise.all([promise3, promise4, promise3, promise4, promise4, promise4, promise4]).then(console.log)


//const p1 = Promise.all([promise3, 1337, "hi", promise4, promise5]);
//const p3 = Promise.customAll([promise3, promise4]);
//console.log(p1.then(console.log));
//console.log(p3.then(console.log));
// console.log(p4.then(console.log));


// Promise.all().then((values) => {
//   console.log(values);
// });
//
// Promise.selectAll([promise3]).then((values) => {
//   console.log("custom", values);
// });
//
// all().then((values) => {
//   console.log("custom2", values);
// });

const a = {
  c: 3,
  [3]: 4
}
console.log(a);

