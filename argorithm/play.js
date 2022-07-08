//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
// const readFileSyncAddress = "backjun/input.txt"; // vscode Test
// const input = require("fs")
//   .readFileSync(readFileSyncAddress)
//   .toString()
//   .trim()
//   .split("\n");
const log = console.log;

const uglyNumbers = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  const uglyNumbersArr = Array.from({ length: n }, () => 0);
  uglyNumbersArr[0] = 1;
  let [idx2, idx3, idx5] = [0, 0, 0];

  uglyNumbersArr.forEach((_, i) => {
    const [mul2, mul3, mul5] = [
      uglyNumbersArr[idx2] * 2,
      uglyNumbersArr[idx3] * 3,
      uglyNumbersArr[idx5] * 5,
    ];

    const nextUglyNum = Math.min(mul2, mul3, mul5);
    uglyNumbersArr[i + 1] = nextUglyNum;

    nextUglyNum === mul2 && idx2++;
    nextUglyNum === mul3 && idx3++;
    nextUglyNum === mul5 && idx5++;
  });
  return uglyNumbersArr[n - 1];
};

log(uglyNumbers(8));
