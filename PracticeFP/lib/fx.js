/* eslint-disable */
export const log = console.log;

export const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
})

const takeAll = take(Infinity);

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
})

export const go = (...args) => reduce((a, f) => f(a), args);

export const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

// 지연평가
export const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
}

L.map = function* (f, iter) {
  for (const a of iter) yield f(a);
}

L.filter = function* (f, iter) {
  for (const a of iter) if (f(a)) yield a;
}

const isIterable = a => a && a[Symbol.iterator];

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a
    else yield a;
  }
}
export const flatten = curry(pipe(L.flatten, takeAll));

L.deepflat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a)
    else yield a;
  }
}

L.flatMap = curry(pipe(L.map, L.flatten));
export const flatMap = curry(pipe(L.map, flatten));

export const join = curry((sep = ',', iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter));

export const map = curry(pipe(L.map, takeAll));

export const filter = curry(pipe(L.filter, takeAll));

