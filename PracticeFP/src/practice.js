/* eslint-disable */
import { log, curry, map, filter, reduce, go, pipe } from '../lib/fx.js';

/* 지연평가 */
const add = (a, b) => a + b;

// range
const range = l => {
    let i = -1;
    let result = [];
    while (++i < l) {
        log(i, 'range');
        result.push(i);
    }
    return result;
}
var list = range(4); // range를 호출했을 때, 즉시 배열로 평가된다.
log(list); // [0, 1, 2, 3, 4]
log(reduce(add, list)); //6

// 느긋한 L.range
const L = {};
L.range = function* (l) {
    let i = -1;
    while (++i < l) {
        log(i, 'L.range');
        yield i;
    }
}

var list = L.range(4); // range를 호출했을 때, 아직 평가되지 않는다.
log(list); // L.range : Generator
log(reduce(add, list)); // array를 만들지 않고, 하나씩 값을 꺼내게 된다.
log(reduce(add, list)); // array를 만들지 않고, 하나씩 값을 꺼내게 된다.

console.clear();


function removeNumberValues(obj) {
    // TODO: 여기에 코드를 작성합니다.
    for (let prop in obj) {
        //log(typeof (obj[prop]));
        if (typeof (obj[prop]) === 'number') {
            log('들어옴');
            delete obj.prop;
        }
    }
}
const obj = {
    a: 2,
    b: 'remaining',
    c: 4,
};

removeNumberValues(obj);

