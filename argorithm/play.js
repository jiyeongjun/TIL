const log = console.log;

function countUniqueValues1(arr) {
    // add whatever parameters you deem necessary - good luck!
    arr.sort();
    return arr.filter((v, i) => arr.indexOf(v) === i).length; // 중복제거
}

function countUniqueValues2(arr) {
    // add whatever parameters you deem necessary - good luck!
    let pointer1 = 0;
    arr.sort();
    for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
        if (arr[pointer1] !== arr[pointer2]) {
            pointer1++;
            arr[pointer1] = arr[pointer2];
        }
    }
    return pointer1 + 1
}
log(countUniqueValues1([1, 2, 2, 3, 1, 5, 6, 3]));
//log(countUniqueValues2([1, 2, 2, 3, 1, 5, 6, 3]));


