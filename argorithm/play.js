//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test

const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const log = console.log;

class HashTable {
  constructor(size = 53) {
    this.keyMap = Array.from({ length: size }, () => []);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index].length) {
      for (const a of this.keyMap[index]) {
        if (key === a[0]) return a[1];
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (const el of this.keyMap) {
      if (el.length !== 0) {
        for (const a of el) {
          if (!valuesArr.includes(a[1])) valuesArr.push(a[1]);
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    for (const el of this.keyMap) {
      if (el.length !== 0) {
        for (const a of el) {
          if (!keysArr.includes(a[0])) keysArr.push(a[0]);
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("pink", "핑크");
ht.set("kinp", "what?");
ht.set("wwwwwwwww", "what?");

log(ht.get("yellow"), ht.get("pink"), ht.get("kinp"));
// #FFFF00 핑크 what?

log(ht.values());
// [
//   '#DDA0DD', '#FA8072',
//   '#800000', '#FFFF00',
//   '핑크',    '#808000',
//   '#F08080', 'what?',
//   '#C71585'
// ]
log(ht.keys());
//[
//   'plum',
//   'salmon',
//   'maroon',
//   'yellow',
//   'pink',
//   'olive',
//   'lightcoral',
//   'kinp',
//   'wwwwwwwww',
//   'mediumvioletred'
// ]
