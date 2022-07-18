const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");
