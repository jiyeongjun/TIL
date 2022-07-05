"use strict";
const log = console.log;
// 추상클래스
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName}`;
    }
}
class StorageTemplate {
    constructor() {
        this.storage = {};
    }
}
class LocalStorage extends StorageTemplate {
    setItem(key, value) {
        this.storage[key] = value;
    }
    getItem(key) {
        return this.storage[key] || false;
    }
    clearItem(key) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}
// 다형성
const stringStorage = new LocalStorage();
stringStorage.setItem("안녕", "반가워");
stringStorage.getItem("안녕");
const booleanStorage = new LocalStorage();
booleanStorage.setItem("안녕", true);
booleanStorage.getItem("안녕");
// Geolocation class
class GGeolocation {
    clearWatch(watchId) {
        console.log(watchId);
    }
    getCurrentPosition(successCallback, errorCallback, options) {
        if (successCallback)
            console.log(successCallback);
        if (errorCallback)
            console.log(errorCallback);
        if (options)
            console.log(options);
    }
    watchPosition(successCallback, errorCallback, options) {
        if (successCallback)
            console.log(successCallback);
        if (errorCallback)
            console.log(errorCallback);
        if (options)
            console.log(options);
        return 0;
    }
}
const geolocation = new GGeolocation();
// 오버로딩
geolocation.getCurrentPosition(test);
geolocation.getCurrentPosition(test, test);
geolocation.getCurrentPosition(test, test, {});
function test() { }
