const log = console.log;

abstract class User {
  // 직접 인스턴스는 만들지 않는다.
  // 추상클래스는 오직 다른곳에서 상속 받을수만 있다.
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string // private은 클래스 밖에서 접근할 수 없다. // 자식 클래스에서도 접근할 수 없다. // protected는 자식 클래스에서는 접근할 수 있다.
  ) {}
  abstract getNickName(): void; // 추상매소드
  // 상속받는 클래스에서 이 매소드를 무조건 구현해야한다.

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}

const jun = new Player("wl", "dud", "wns");

jun.getNickName();

// 해시맵 만들기
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    if (!this.words[term]) return false;
    delete this.words[term];
    return true;
  }
  update(term: string, def: string) {
    if (!this.words[term]) return false;
    this.words[term] = def;
    return this.words[term];
  }
  showAll() {
    return this.words;
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}
