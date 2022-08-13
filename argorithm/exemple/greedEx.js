// 1, 5, 10, 100, 500원이 있을 때 최소한의 동전 개수로 거스름돈 K만드는 함수
function minNumCoin(k) {
  let count = 0;
  const joiCoins = [500, 100, 50, 10, 5, 1];
  for (let i = 0; i < joiCoins.length; i++) {
    if (k === 0) break;
    count += Math.floor(Number(k / joiCoins[i]));
    k %= joiCoins[i];
  }
  return count;
}

