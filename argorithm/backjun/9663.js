const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "input.txt"; // vscode Test

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString();


console.log(input);

