//const readFileSyncAddress = '/dev/stdin'; // BackJun Submit
const readFileSyncAddress = "input.txt"; // vscode Test
const input = require("fs").readFileSync(readFileSyncAddress).toString();
console.log(process.cwd());
console.log(input);
