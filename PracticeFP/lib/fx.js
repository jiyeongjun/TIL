const map = (f, iter) => {
  // f : 함수 파라미터, iter : 이터러블 프로토콜을 따르는 파라미터
  let result = [];
  for (const a of iter) {
    result.push(f(a)); // 어떤 값을 수집할 것인지는 f에게 위임한다.
  }
  return result;
}


const filter = (f, iter) => {
  let result = [];
  for (const a of iter) {
    if (f(a)) result.push(a);
  }
  return result;
}

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}

//export { map, filter, reduce };