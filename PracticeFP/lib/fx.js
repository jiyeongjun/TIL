let log = console.log; // eslint-disable-line no-unused-vars

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => { // eslint-disable-line no-unused-vars
  let result = [];
  for (const a of iter) {
    result.push(f(a));
  }
  return result;
});

const filter = curry((f, iter) => { // eslint-disable-line no-unused-vars
  let result = [];
  for (const a of iter) {
    if (f(a)) result.push(a);
  }
  return result;
});

const reduce = curry((f, acc, iter) => { // eslint-disable-line no-unused-vars
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs); // eslint-disable-line no-unused-vars


export { log, curry, map, filter, reduce, go, pipe }; // 두 함수를 내보냄