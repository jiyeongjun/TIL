const log = console.log;

function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < num1; i++) {
    if (num1 < num2 * (i + 1)) return num1 - num2 * i;
  }
}

log(modulo(123, 4));
