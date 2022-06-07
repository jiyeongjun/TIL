const log = console.log;

const originArray = ["123", "456", "789"];

const newArray1 = originArray;
const newArray2 = [...originArray];
originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);
log(newArray1); // 새로운 배열도 변한다.
log(newArray2); // 새로운 배열도 변한다.
