function queuePrinter(bufferSize, capacities, documents) {
  // TODO: 여기에 코드를 작성합니다.
  let workList = Array.from({ length: bufferSize }, () => 0);
  let sec = 1;


  while (documents.length || getWorkListSize(workList)) {
    if (getWorkListSize(workList) + documents[0] < capacities) {
      workList[workList.length - 1] = documents.shift();
      workList = moveDoc(workList);
    } else workList = moveDoc(workList);
    sec++;
  }
  return sec;
}

const getWorkListSize = (arr) => {
  return arr.reduce((a, b) => a + b);
}

const moveDoc = (arr) => {
  return arr.map((el, idx) => {
    if (idx !== arr.length - 1) return arr[idx + 1];
    else return 0;
  })
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8
