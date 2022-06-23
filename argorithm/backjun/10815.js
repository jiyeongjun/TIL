//const readFileSyncAddress = '/dev/stdin'; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs").readFileSync(readFileSyncAddress).toString();
console.log(process.cwd());
console.log(input);
