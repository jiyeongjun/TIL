const log = console.log;

// // 콜백함수
// const add10 = (a, callback) => {
//   setTimeout(() => callback(a + 10), 100);
// };
// add10(5, (res) => {
//   add10(res, (res) => {
//     add10(res, (res) => log(res));
//   });
// });

// //프로미스
// const add20 = (a) => {
//   return new Promise((resolve) => setTimeout(() => resolve(a + 20)), 200);
// };

// add20(5).then(add20).then(add20).then(log);

function ABCheck(str) {
  // code goes here
  for (let i = 0; i < str.length; i++) {
    log(str[i].toUpperCase(), str[i + 4].toUpperCase());
    if (str[i + 4] === undefined) return false;
    if (str[i].toUpperCase() === "A" && str[i + 4].toUpperCase() === "B")
      return true;
    if (str[i].toUpperCase() === "B" && str[i + 4].toUpperCase() === "A")
      return true;
  }
  //return false;
}
log(ABCheck("aMAJ7sBrO4CyysuoHFrgGTX"));
// const str = "abcd";
// log(str[4]);
