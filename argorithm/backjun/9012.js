const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

const sol = (input) => {
  const stack = [];
  let res = "YES";
  for (let i = 1; i < input.length; i++) {
    const strArr = input[i].split("");
    for (const chr of strArr) {
      if (chr === "(") stack.push(1);
      else {
        if (!stack.pop()) {
          res = "NO";
          break;
        }
      }
    }
    if (stack.length !== 0) res = "NO";
    else res = "YES";
    console.log(res);
  }
};

sol(input);
