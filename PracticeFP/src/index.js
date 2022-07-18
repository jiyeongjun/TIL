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
} from "../lib/fx.js";

go(
  [1, 2, 3, 4, 5],
  L.map((a) => Promise.resolve(a * a)),
  L.filter((a) => a % 2),
  take(5),
  log
);
