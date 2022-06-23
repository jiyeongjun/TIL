const log = console.log;

class Parent {
  hi() {
    console.log("부모하이");
  }
}

class Child extends Parent {
  hello() {
    console.log("자식헬로");
  }
}

let child = new Child();
child.hi(); // 부모클래스의 맴버
child.hello(); // 자식클래스의 맴버
