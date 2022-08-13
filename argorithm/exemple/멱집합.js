let inputSet = ['a', 'b', 'c'];

function powerSet(arr) {
  const result = [];

  (function recursion(subset, start) {
    result.push(subset);
    for (let i = start; i < arr.length; i++) {
      recursion([...subset, arr[i]], i + 1);
    }
  })([], 0);

  return result;
}

console.log(powerSet(inputSet));
