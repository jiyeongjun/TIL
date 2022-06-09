const log = console.log;

// bad
function getUserType1(type) {
  if (type === "ADMIN") {
    return "관리자";
  } else if (type === "INSTRUCTOR") {
    return "강사";
  } else if (type === "STUDENT") {
    return "수강생";
  } else {
    return "해당 없음";
  }
}

// good1 가장 바람직 하다.
function getUserType2(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
    UNDEFINED: "해당 없음",
  };
  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}

import USER_TYPE from "./constants/...some.js";
function getUserType2(type) {
  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}

// good2
function getUserType3(type) {
  return (
    {
      ADMIN: "관리자",
      INSTRUCTOR: "강사",
      STUDENT: "수강생",
      UNDEFINED: "해당 없음",
    }[type] ?? "해당 없음"
  );
}
