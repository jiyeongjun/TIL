const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index) => {
    const permutations = getPermutations(arr.filter((_, idx) => idx !== index), num - 1);
    results.push(...permutations.map(v => [fixed, ...v]));
  });
  return results;
}

const example1 = [1, 2, 3, 4];
const result1 = getPermutations(example1, 3);
console.log(result1);


const getCombinations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
    const combinations = getCombinations(origin.slice(index + 1), num - 1);
    results.push(...combinations.map(v => [fixed, ...v]));
  });

  return results;
}


const example2 = [1, 2, 3, 4];
const result2 = getCombinations(example2, 3);
console.log(result2);


const getPermutationsRe = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed) => {
    const permutations = getPermutationsRe(arr, num - 1);
    results.push(...permutations.map(v => [fixed, ...v]));
  });

  return results;
}


const example3 = [1, 2, 3, 4];
const result3 = getPermutationsRe(example3, 3);
console.log(result3);
