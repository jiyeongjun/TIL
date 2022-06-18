class Greeter {
  constructor(public greeting: string) {}
  getGreeter() {
    return "<h1>" + this.greeting + "</h1>";
  }
}

const greeter = new Greeter("안녕하세요");

document.body.innerHTML = greeter.getGreeter();
