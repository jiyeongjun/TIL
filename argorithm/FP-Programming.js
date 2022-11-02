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

