const log = console.log;

const menu = [
  {
    type: "음료종류",
    name: "음료",
    children: [
      {
        type: "음료구분",
        name: "콜드브루",
        children: [
          { type: "맛있는거", name: "콜드1" },
          { type: "맛있는거", name: "콜드2" },
          { type: "맛있는거", name: "콜드3" },
        ],
      },
      {
        type: "음료구분",
        name: "사이다",
        children: [
          { type: "맛있는거", name: "칠성" },
          { type: "맛있는거", name: "나랑드" },
          { type: "맛있는거", name: "좋아" },
        ],
      },
    ],
  },
  {
    name: "하이",
    type: "음식",
    children: [
      {
        type: "한식",
        name: "이건하나",
      },
    ],
  },
];

//const root = document.getElementById("root");
function createTreeView(menu, currentNode) {
  for (const el of menu) {
    const li = document.createElement("li");
    if (el.children) {
      const input = document.createElement("input");
      input.type = "checkbox";

      const span = document.createElement("span");
      span.textContent = el.name;

      const ul = document.createElement("ul");
      li.append(input, span, ul);
      currentNode.append(li);

      createTreeView(el.children, ul);
    } else {
      li.textContent = el.name;
      currentNode.append(li);
    }
  }
}
//createTreeView(menu, root);

const createTreeView2 = (menu, currentNode) => {
  Array.from(menu).forEach((el) => {
    const li = document.createElement("li");
    el.children
      ? currentNode.append(`
      ${li.append(`<input type="checkbox">
      <span>${el.name}</span>
      <ul><ul>
      ${createTreeView2(li)}`)}
    `)
      : currentNode.append(`<li>${el.name}</li>`);
  });
};
//createTreeView2(menu, root);

let menuHtml = ``;
let temp = ``;
//let ul = document.createElement("ul");
const createTreeView3 = (menu, currentNode) => {
  menu.forEach((el) => {
    const li = document.createElement("li");
    if (el.children) {
      const input = document.createElement("input");
      input.type = "checkbox";

      const span = document.createElement("span");
      span.textContent = el.name;

      const ul = document.createElement("ul");
      li.append(input, span, ul);
      currentNode.append(li);

      createTreeView(el.children, ul);
    } else {
      li.textContent = el.name;
      currentNode.append(li);
    }
  });
};
//createTreeView3(menu, root);
//menu.forEach((el) => console.log(el));

function stringifyJSON(obj) {
  //base
  if (typeof obj === "number" || obj === null || typeof obj === "boolean") {
    return `${obj}`;
  }
  if (typeof obj === "string") {
    return `"${obj}"`;
  }
  //재귀 case
  if (Array.isArray(obj)) {
    ///배열일 때
    if (obj.length === 0) {
      return "[]";
    } else {
      const arr = [];
      for (let i of obj) {
        arr.push(stringifyJSON(i));
      }
      return `[${arr}]`;
    }
  }
  if (Object.keys(obj).length === 0) {
    //객체일 때
    return "{}";
  } else {
    const objarr = []; //객체는 ``로 string화 할 수 없으니 []에 담는다.
    for (let i in obj) {
      if (typeof obj[i] === "function" || typeof obj[i] === "undefined") {
        continue; //함수와 undefined는 stringify하지않고 지나간다.
      }
      objarr.push(stringifyJSON(i) + ":" + stringifyJSON(obj[i]));
    }
    return `{${objarr}}`;
  }
}

function test(templetLiteral) {
  let a = Array.from(templetLiteral);
  console.log(...templetLiteral, typeof a);
}
test`안녕하세`;
