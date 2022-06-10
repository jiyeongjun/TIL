const log = console.log;

function naiveSearch(long, short) {
  let cnt = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) cnt++;
    }
  }
  return cnt;
}

log(naiveSearch("lorie loled", "lol")); // 1
log(naiveSearch("lorie loled", "lo")); // 1
