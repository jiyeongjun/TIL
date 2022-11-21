import {add} from "./fxjs/index.js"

const log = console.log;

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

console.log(add(1, 2));


