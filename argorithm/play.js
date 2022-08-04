const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test


const L = {};

L.range = function* (stop) {
  let i = -1;
  while (++i < stop) yield i;
}
log([L.range(5)]);

const wow = L.range(5);

log(wow.next());
log(wow.next());
log(wow.next());
log(wow.next());
log(wow.next());
log(wow.next());
log(wow.next());
log(wow.next());
