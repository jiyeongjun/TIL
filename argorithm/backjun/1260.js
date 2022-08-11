const log = console.log;

const fs = require("fs");
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "./input.txt"; // vscode Test
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");


class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) { // 정점추가
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) { // 간선추가
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  dfsr(start) { // 재귀형
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);
    return result;
  }


  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }

}

let g = new Graph();

const [n, v, m] = input.map((el) => el.split(" "))[0];

const edgeAll = input.slice(1).map((el) => el.split(" "));
const vertexAll = new Set(edgeAll.flatMap(el => el));

const sortedEdgeAll = edgeAll.map(edge => edge.sort((a, b) => a - b));
log(sortedEdgeAll);

vertexAll.forEach(vertex => g.addVertex(vertex));
sortedEdgeAll.forEach(edge => g.addEdge(edge[0], edge[1]))

log(`${g.dfsr(m)}\n${g.bfs(m)}`);

