//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
// const readFileSyncAddress = "backjun/input.txt"; // vscode Test
// const input = require("fs")
//   .readFileSync(readFileSyncAddress)
//   .toString()
//   .trim()
//   .split("\n");
const log = console.log;

function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  let temp = Array.from({ length: N }, () => 0);
  let visited = Array.from({ length: N }, () => 0);
  let arr = [...K].sort((a, b) => a - b);
  let answer = [];
  function DFS(L) {
    if (L === N) {
      if (JSON.stringify(temp) === JSON.stringify(K)) return true;
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < N; i++) {
        if (!visited[i]) {
          visited[i] = 1; // 방문처리
          temp[L] = arr[i];
          if (DFS(L + 1)) return answer.length;
          visited[i] = 0; // 방문 후 다시 올라갈 때 원상복구
        }
      }
    }
  }
  return DFS(0);
}

let output = orderOfPresentation(3, [2, 3, 1]);
console.log(output); // 3
