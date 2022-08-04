const log = console.log;

const curry = f => (a, ...bs) =>
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

const filter = curry(function* (f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

const map = curry(function* (f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

const take = curry(function (length, iter) {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == length) return res;
  }
  return res;
});

const reduce = curry(function (f, acc, iter) {
  if (arguments.length === 2) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});


const go = (...as) => reduce((a, f) => f(a), as);

const add = (a, b) => a + b;

const f = (list, length) =>
  go(list,
    filter(a => a % 2),
    map(a => a * a),
    take(length),
    reduce(add))

function main() {
  //log(f([1, 2, 3, 4, 5], 3));
}


main();

const findJudge = (n, trust) => {
  const graph = getTrustGraph(trust);
  const [가장신뢰받는자, 신뢰하는자들] = graph[0];
  log(신뢰하는자들.length !== n - 1);
  return graph.map(g => g[1]).filter(person => person.includes(Number(가장신뢰받는자))).length
  && 신뢰하는자들.length !== (n - 1) ? -1 : Number(가장신뢰받는자)
}

const getTrustGraph = (trust) => {
  const graph = {};
  for (const [신뢰하는자, 신뢰받는자] of trust) {
    신뢰받는자 in graph ? graph[신뢰받는자].push(신뢰하는자) : graph[신뢰받는자] = [신뢰하는자];
  }
  return Object.entries(graph).sort((a, b) => b[1].length - a[1].length);
}
log(findJudge(3, [[1, 3], [2, 3], [3, 1]]));
