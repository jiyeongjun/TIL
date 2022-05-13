const log = console.log;
function addUpto(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

function addUptobyMath(n) {
    return n * (n + 1) / 2; // 위 함수를 수학적으로 구현
}

// 1. 내장Function인 performance.now Function이용
let t1 = performance.now();
addUpto(100000000);
let t2 = performance.now();
log(`Time Elapsed: ${(t2 - t1) / 1000} sec.`);

let t3 = performance.now();
addUptobyMath(100000000);
let t4 = performance.now();
log(`Time Elapsed: ${(t4 - t3) / 1000} sec.`);
