const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
function solution(pin) {
  let temp = [];
  let prev = Number(pin[0]);
  let cnt = 0;
  for (const a of pin.slice(1)) {
    if (prev + 1 === Number(a) || prev - 1 === Number(a) || prev === Number(a)) {
      temp.push(prev);
      temp.push(a)
    } else if (cnt === 2) {
    } else {
      temp.pop();
      temp.pop();
    }
    prev = Number(a);
    cnt++;
  }
  if (temp.length > 2) return false;
  return true;
}

log(solution('0000'))
log(solution('9876'))
log(solution('1234'))
log(solution('1230'))
log(solution('2987'))
log(solution('1890'))
log(solution('0129'))
log(solution('0000'))


// kang jin ju babo
