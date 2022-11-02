const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
const reduce = curry((f, acc, iter) => {
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
const pipe = (f, ...fs) => (...args) => go(f(...args), ...fs);


const addEachDigit = (num) => {
  return String(num).split('').reduce((acc, cur) => acc += Number(cur), 0);
}

console.log(addEachDigit(311));
