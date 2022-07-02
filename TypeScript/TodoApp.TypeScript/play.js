"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var log = console.log;
var User = /** @class */ (function () {
  // 직접 인스턴스는 만들지 않는다.
  // 추상클래스는 오직 다른곳에서 상속 받을수만 있다.
  function User(
    firstName,
    lastName,
    nickname // private은 클래스 밖에서 접근할 수 없다. // 자식 클래스에서도 접근할 수 없다. // protected는 자식 클래스에서는 접근할 수 있다.
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
  }
  // 상속받는 클래스에서 이 매소드를 무조건 구현해야한다.
  User.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
  };
  return User;
})();
var Player = /** @class */ (function (_super) {
  __extends(Player, _super);
  function Player() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Player.prototype.getNickName = function () {
    console.log(this.nickname);
  };
  return Player;
})(User);
var jun = new Player("wl", "dud", "wns");
jun.getNickName();
var Dict = /** @class */ (function () {
  function Dict() {
    this.words = {};
  }
  Dict.prototype.add = function (word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  };
  Dict.prototype.get = function (term) {
    return this.words[term];
  };
  Dict.prototype.delete = function (term) {
    if (!this.words[term]) return false;
    delete this.words[term];
    return true;
  };
  Dict.prototype.update = function (term, def) {
    if (!this.words[term]) return false;
    this.words[term] = def;
  };
  return Dict;
})();
var Word = /** @class */ (function () {
  function Word(term, def) {
    this.term = term;
    this.def = def;
  }
  return Word;
})();
var kimchi = new Word("김치", "한국의 전통음식");
var hanbok = new Word("한복", "한국의 전통복");
var 태권도 = new Word("태권도", "한국의 전통무술");
var dict = new Dict();
dict.add(kimchi);
dict.add(hanbok);
dict.add(태권도);

// expected output: "John"
// add: 단어를 추가함.
// get: 단어의 정의를 리턴함.
// delete: 단어를 삭제함.
// update: 단어를 업데이트 함.
// showAll: dictionary 의 단어를 모두 프린트함.
// count: dict 단어들의 총 count 를 리턴함.
