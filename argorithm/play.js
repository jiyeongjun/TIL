function solution(maps) {
  let answer = 0;
  const ROW = maps.length;
  const COL = maps[0].length;

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (maps[i][j] === 1) {
        let island = findIsland([], i, j);
        let length = calculateLength(island);
        if (length > answer) answer = length;
      }
    }
  }

  function findIsland(island, row, col) {
    island.push([row, col]);
    maps[row][col] = 'x';
    if (row - 1 >= 0 && maps[row - 1][col] === 1) findIsland(island, row - 1, col);
    if (row + 1 < ROW && maps[row + 1][col] === 1) findIsland(island, row + 1, col);
    if (col - 1 >= 0 && maps[row][col - 1] === 1) findIsland(island, row, col - 1);
    if (col + 1 < COL && maps[row][col + 1] === 1) findIsland(island, row, col + 1);
    return island;
  }

  // let tmp = findIsland([], 0, 2);
  // answer = calculateLength(tmp);
  return answer;
}

function calculateLength(island) {
  let length = island.length;
  let result = length * 4;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (island[i][0] === island[j][0] && Math.abs(island[i][1] - island[j][1]) === 1) result -= 2;
      else if (island[i][1] === island[j][1] && Math.abs(island[i][0] - island[j][0]) === 1) result -= 2;
      // console.log('i : ', i, 'j : ', j, 'result : ', result);
    }
  }
  console.log(island)
  return result;
}

console.log(solution([[0, 0, 1, 0, 0], [0, 1, 1, 0, 1], [0, 0, 1, 0, 1], [1, 1, 1, 0, 1]]))
