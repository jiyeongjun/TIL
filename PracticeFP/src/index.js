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
  join
} from "../lib/fx.js";

const delay500 = a => new Promise(resolve =>
  setTimeout(() => resolve(a), 500))

const add = (a, b) => a + b;
go(
  [1, 2, 3, 4, 5],
  L.map(el => delay500(el * el)),
  L.filter((a) => a % 2),
  reduce(add),
  log // 35
);

