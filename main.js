function isOldEnoughToDrink(age) {
    // TODO: 여기에 코드를 작성합니다.
    const result = age < 30 ? "여름이 매우 덥네요" : "에어컨을 켜야겠다!";
    console.log(result);
    return result;
  }

  isOldEnoughToDrink(30);