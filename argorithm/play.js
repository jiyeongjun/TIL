const log = console.log;

function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    const res = power(base, exponent / 2) % 94906249;
    return (res * res) % 94906249;
  } else {
    const res = power(base, (exponent - 1) / 2) % 94906249;
    return (base * ((res * res) % 94906249)) % 94906249;
  }
}

power(2, 5);
