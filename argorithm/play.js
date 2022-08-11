const log = console.log;

const add = (a, b) => a + b;

function ocean(target, type) {
  const matrix = [];

  type.forEach((coin, idx) => {
    matrix.push([]);
    for (let curCost = 1; curCost <= target; curCost++) {
      if (curCost > coin) {
        const targetCol = curCost - coin - 1; // 경우의 수를 참조할 column
        matrix[idx].push(matrix.map(arr => arr[targetCol]).reduce(add));
        continue;
      }
      curCost === coin ? matrix[idx].push(1) : matrix[idx].push(0);
    }
  })
  // 각 행의 가장 나중 요소를 모두 더해준 것이 모든 경우의 수가 된다.
  return matrix.map(arr => arr[arr.length - 1]).reduce(add);
}


let output = ocean(5, [1, 2, 3]);
console.log(output); // 4

//    1  2  3  4  5
//1   1  1  1  1  1
//2   0  1  1  2* 2
//3   0  0  1  1  2
//                5(total)

// *2원이 무조건 포함되어 있어야 하는 상황에서
// 1원과 2원을 조합하여 4원을 만드는 경우의 수는
// 1원과 2원을 조합하여 2원을 만드는 경우의 수와 같다.
// 그렇다면 이 경우의 수는 112, 22가 된다.
// 결국 1, 2원만 있는 상태에서 4를 만들 수 있는 모든 경우의 수는 1111, 112, 22 이렇게 총 3개가 된다.

// 따라서 위와 같은 matrix구조를 만들어 각 행의 끝 원소를 모두 더해주면 모든 경우의 수가 된다.


//     1  2  3  4  5
// 2   0  1  0  1  0
// 3   0  0  1  0  1

