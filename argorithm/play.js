//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .split("\n");

const log = console.log;

function solution(n, lost, reserve) {
  const lostSet = new Set(lost.sort((a, b) => a - b));
  const reserveSet = new Set(reserve.sort((a, b) => a - b));
  for (const a of reserve) {
    if (lostSet.has(a) === reserveSet.has(a)) {
      lostSet.delete(a);
      continue;
    }
    lostSet.delete(a - 1) || lostSet.delete(a + 1);
  }
  return n - lostSet.size;
}

log(solution(30, [1, 2, 6, 7], [1, 3, 5, 9]));
