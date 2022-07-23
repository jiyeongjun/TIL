//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

const log = console.log;

const getSpanStyle = (num) => {
  let res = [];
  for (let i; i < num; i++) {
    res.push({ "--i": i });
  }
  return res;
};

const spanStyle = getSpanStyle(16);

const testFunc = () => {
  const test = 0;
};
log(spanStyle);
