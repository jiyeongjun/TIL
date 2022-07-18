export const log = console.log;

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

export const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur2 = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise)
        return a
          .then((a) => ((res.push(a), res.length) == l ? res : recur()))
          .catch((e) => (e == nop ? recur() : Promise.reject(e)));
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  })();
});
export const takeAll = take(Infinity);

export const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = f(acc, a);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});


export const go = (...args) => reduce((val, f) => f(val), args);

export const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

// 지연평가
export const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

L.map = curry(function* (f, iter) {
  for (const a of iter) {
    yield go1(a, f);
  }
});

const nop = Symbol("nop");

L.filter = curry(function* (f, iter) {
  for (const a of iter) {
    const b = go1(a, f);
    if (b instanceof Promise)
      yield b.then((b) => (b ? a : Promise.reject(nop)));
    else if (b) yield a;
  }
});

const isIterable = (a) => a && a[Symbol.iterator];

L.flatten = function* (iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* a;
    else yield a;
  }
};
export const flatten = curry(pipe(L.flatten, takeAll));

L.deepflat = function* f(iter) {
  for (const a of iter) {
    if (isIterable(a)) yield* f(a);
    else yield a;
  }
};

L.flatMap = curry(pipe(L.map, L.flatten));
export const flatMap = curry(pipe(L.map, flatten));

export const join = curry((sep = ",", iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);

export const map = curry(pipe(L.map, takeAll));

export const filter = curry(pipe(L.filter, takeAll));
