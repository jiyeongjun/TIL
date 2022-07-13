//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
// const readFileSyncAddress = "backjun/input.txt"; // vscode Test
// const input = require("fs")
//   .readFileSync(readFileSyncAddress)
//   .toString()
//   .trim()
//   .split("\n");
const log = console.log;

const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  const strArr = [...new Set(str)].sort();

  const res = [""];

  strArr.forEach((s) => res.forEach((r) => res.push(s + r)));
  return res.sort();
};

log(powerSet("abc"));
