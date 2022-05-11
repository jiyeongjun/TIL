/* eslint-disable */
export const log = console.log;

export const L = {};

export const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

export const map = curry((f, iter) => {
  let result = [];
  for (const a of iter) {
    result.push(f(a));
  }
  return result;
})

export const filter = curry((f, iter) => {
  let result = [];
  for (const a of iter) {
    if (f(a)) result.push(a);
  }
  return result;
})

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

export const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
})

