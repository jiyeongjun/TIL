const log = console.log;

// const solution = (p) => {
//   const res = new Array(p.length).fill(0);

//   for (let i = 0; i < p.length - 1; i++) {
//     const min = Math.min(...p.slice(i));
//     for (let j = i + 1; j < p.length; j++) {
//       if (p[i] > p[j] && min === p[j]) {
//         [p[i], p[j]] = [p[j], p[i]]; // p배열 위치 변경
//         [res[i], res[j]] = [++res[i], ++res[j]]; // 자리 변경된 두 index에 1증가
//       }
//     }
//   }
//   return res;
// };
// log(solution(input1));
// log(solution(input2));
// log(solution(input3));

const 화살표 = () => true;
const 화살표2 = () => {
  true;
};
const 화살표변수 = 화살표();
const 화살표변수2 = 화살표2();

console.log(화살표변수);
console.log(화살표변수2);
