const log = console.log;

function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let p1 = 0;
  let p2 = arr.length - 1;
  let res = Math.floor((p1 + p2) / 2);
  while (arr[res] !== val) {
    if (p1 > p2) return -1;
    if (val < arr[res]) p2 = res - 1;
    else p1 = res + 1;
    res = Math.floor((p1 + p2) / 2);
  }
  return res;
}

log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 55, 90, 110], 1000));
