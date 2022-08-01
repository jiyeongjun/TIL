const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test

const findCenter = (edges) => {
  const temp = edges[0];
  for (const a of edges.slice(1)) {
    if (temp.includes(a[0])) return a[0];
    if (temp.includes(a[1])) return a[1];
  }
}

const edges = [[1, 2], [2, 3], [4, 2]];
log(findCenter(edges));
