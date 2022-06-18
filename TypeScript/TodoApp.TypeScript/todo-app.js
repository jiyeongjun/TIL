"use strict";
var Greeter = /** @class */ (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.getGreeter = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
var greeter = new Greeter("안녕하세요");
document.body.innerHTML = greeter.getGreeter();
