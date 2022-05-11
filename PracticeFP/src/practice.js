/* eslint-disable */
import { log, curry, map, filter, reduce, go, pipe, take } from '../lib/fx.js';

/* 지연평가 */
const add = (a, b) => a + b;

// range
const range = l => {
    let i = -1;
    let result = [];
    while (++i < l) {
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
        yield i;
    }
}

var list = L.range(4); // range를 호출했을 때, 아직 평가되지 않는다.
log(list); // L.range : Generator
log(reduce(add, list)); // array를 만들지 않고, 하나씩 값을 꺼내게 된다.

const test = (name, time, f) => {
    console.time(name);
    while (time--) f();
    console.timeEnd(name);
}

test('L.range', 1, () => reduce(add, L.range(10000000)));
test('range', 1, () => reduce(add, range(10000000)));


console.time('기본');
go(
    range(10),
    take(5),
    reduce(add),
    log
)
console.timeEnd('기본');

console.time('지연');
go(
    L.range(10),
    take(5),
    reduce(add),
    log
)
console.timeEnd('지연');


L.map = function* (f, iter) {
    for (const a of iter) yield f(a);
}
var it = L.map(a => a + 10, [1, 2, 3,]);
log(typeof ([1, 2, 3, 4]));
log(it.next());
log(it.next());
log(it.next());

// TODO : clear위치
console.clear();

function mostFrequentCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str.trim() === '') return '';
    const newstr = str.replace(/ /g, "");
    let obj = {
        카운트: 0,
        문자: ''
    };
    for (const chr of newstr) {
        if (!obj[chr]) obj[chr] = 0;
        obj[chr]++;
        log(obj);
        if (obj[chr] > obj['카운트']) {
            obj['카운트'] = obj[chr];
            obj['문자'] = chr;
        }
    }
    return obj['문자'];
}

function mostFrequentCharacter1(str) {
    let obj = { mostCount: 0, mostFrequent: '' };
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }

        if (obj[str[i]] === undefined) {
            obj[str[i]] = 0;
        }
        obj[str[i]]++;
        log(obj);
        if (obj[str[i]] > obj['mostCount']) {
            obj['mostCount'] = obj[str[i]];
            obj['mostFrequent'] = str[i];
        }
    }
    return obj['mostFrequent'];
}
let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'
