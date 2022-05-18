/* eslint-disable */
import { log, curry, map, filter, reduce, go, pipe, take, L, join } from '../lib/fx.js';

/* 지연평가 */
const add = (a, b) => a + b;

// range
const range1 = l => {
    let i = -1;
    let result = [];
    while (++i < l) {
        result.push(i);
    }
    return result;
}

const range = l => {
    let cnt = 0;
    let result = [];
    while (l--) {
        result.push(cnt++);
    }
    return result;
}


var list = range(4); // range를 호출했을 때, 즉시 배열로 평가된다.
log(list); // [0, 1, 2, 3]
log(reduce(add, list)); //6

// 느긋한 L.range
L.range = function* (l) {
    let i = -1;
    while (++i < l) {
        yield i;
    }
}



// 느긋한 L.map
var it = L.map(a => a + 10, [1, 2, 3,]);
log(typeof ([1, 2, 3, 4]));
log(it.next());
log(it.next());
log(it.next());

const arr = [1, 2, 3, 4];
log(null && null[Symbol.iterator]);
const isIterable = a => a && a[Symbol.iterator];


