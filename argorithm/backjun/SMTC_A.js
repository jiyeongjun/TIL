//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const sol = (input) => {
  const match1 = [];
  const match2 = [];
  const record = [];

  const 몬스터수 = +input[0].split(" ")[0];
  let 시루의체력 = +input[0].split(" ")[1];
  const 몬스터공격력 = input[1].split(" ");
  const 주민 = input[2].split(" ");
  let 구한주민 = 0;

  for (let i = 0; i < 몬스터수; i++) {
    match1[i] = [주민[i], 몬스터공격력[i]];
  }
  for (let i = 0; i < 몬스터수; i++) {
    match2[i] = [몬스터공격력[i], 주민[i]];
  }
  match1.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  match2.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  while (match1.length) {
    for (const 마을 of match1) {
      if (시루의체력 - +마을[1] < 0) {
        record.push(구한주민);
        구한주민 = 0;
        match1.shift();
        break;
      }
      시루의체력 -= +마을[1];
      구한주민 += +마을[0];
    }
  }
  return console.log(Math.max(...record));
};

sol(input);
