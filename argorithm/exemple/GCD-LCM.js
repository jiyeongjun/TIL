function getGCD(a, b) {
  // always a > b
  while (b) {
    let r = a % b;
    [a, b] = [b, r];
  }
  return a;
}

console.log(getGCD(36, 15));

// 큰수 * (작은수 / 최대공약수)
function getLCM(a, b) {
  return a * (b / getGCD(a, b));
}

console.log(getLCM(36, 15));
