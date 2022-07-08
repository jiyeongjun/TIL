const log = console.log;

// 추상클래스
abstract class User {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
// 위와 같은 추상클래스는 인터페이스로 바꿀 수 있다.
interface User1 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class Player extends User {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName}`;
  }
}

// LocalStorage API
interface SStorage<T> {
  [key: string]: T;
}

abstract class StorageTemplate<T> {
  protected storage: SStorage<T> = {};
  abstract setItem(key: string, value: T): void;
  abstract getItem(key: string): T | boolean;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorage<T> extends StorageTemplate<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T | boolean {
    return this.storage[key] || false;
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

// 다형성
const stringStorage = new LocalStorage<string>();
stringStorage.setItem("안녕", "반가워");
stringStorage.getItem("안녕");
const booleanStorage = new LocalStorage<boolean>();
booleanStorage.setItem("안녕", true);
booleanStorage.getItem("안녕");

// Geolocation API
// Main interface
interface IGeolocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(
    successCallback: IPositionCallback,
    errorCallback?: IPositionErrorCallback | null,
    options?: IGeolocationOptions
  ): void;
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: IPositionErrorCallback | null,
    options?: IGeolocationOptions
  ): number;
}

// successCallback interface
interface IPositionCallback {
  (position: IGeolocationPosition): void;
}
interface IGeolocationPosition {
  readonly coords: IGeolocationCoordinates;
  readonly timestamp: IEpochTimeStamp;
}
interface IGeolocationCoordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}
type IEpochTimeStamp = number;

// errorCallback interface
interface IPositionErrorCallback {
  (positionError: IGeolocationPositionError): void;
}
interface IGeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

// option interface
interface IGeolocationOptions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

// Geolocation class
class GGeolocation implements IGeolocation {
  clearWatch(watchId: number) {
    console.log(watchId);
  }
  getCurrentPosition(
    successCallback: IPositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
  }
  watchPosition(
    successCallback: PositionCallback,
    errorCallback?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (successCallback) console.log(successCallback);
    if (errorCallback) console.log(errorCallback);
    if (options) console.log(options);
    return 0;
  }
}

const geolocation = new GGeolocation();
// 오버로딩
geolocation.getCurrentPosition(test);
geolocation.getCurrentPosition(test, test);
geolocation.getCurrentPosition(test, test, {});

function test() {}

console.log(test);
