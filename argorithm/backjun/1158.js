//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs").readFileSync(readFileSyncAddress).toString();
const [n, k] = input.split(" ").map(Number);

const sol = (n, k) => {
  const arr = [...Array(n)].map((v, i) => i + 1);
  const res = [];

  while (arr.length) {
    for (let i = 0; i < k; i++) {
      arr.push(arr.shift());
    }
    res.push(arr.pop());
  }

  console.log("<" + res.join(", ") + ">");
};
sol(n, k);
