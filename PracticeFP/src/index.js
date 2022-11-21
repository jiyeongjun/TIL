import {
  log,
  curry,
  map,
  filter,
  reduce,
  go,
  pipe,
  L,
  take,
  takeAll,
  flatMap,
  join,
  C
} from "../lib/fx.js";

const arr = [1, 2, 3, 4, 5];
const map1 = (f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

const gmap = function* (f, iter) {
  for (const a of iter) yield f(a);
}

for (const a of gmap((el) => el + 2, arr)) {
  console.log(a);
}
