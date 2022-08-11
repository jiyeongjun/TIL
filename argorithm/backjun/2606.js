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

  dfsi(start) { // 반복형
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      })
    }
    return result;
  }
}

let g = new Graph();

const edgeAll = input.slice(2).map((el) => el.split(" "));
const vertexAll = new Set(edgeAll.flatMap(el => el));

vertexAll.forEach(vertex => g.addVertex(vertex));
edgeAll.forEach(edge => g.addEdge(edge[0], edge[1]))

log(g.dfsi(1).length - 1);
