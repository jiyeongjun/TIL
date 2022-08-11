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

const delay500 = (a, name) => new Promise(resolve => {
  console.log(`${name}: ${a}`);
  setTimeout(() => resolve(a), 500);
});

console.time('');
go([1, 2, 3, 4, 5, 6, 7, 8],
  L.map(a => delay500(a * a, 'map 1')),
  C.filter(a => delay500(a % 2, 'filter 2')),
  L.map(a => delay500(a + 1, 'map 3')),
  take(2),
  log,
  _ => console.timeEnd(''));
