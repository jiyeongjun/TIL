const log = console.log;

const data = [
    {
        gender: 'male',
        age: 24,
    },
    {
        gender: 'male',
        age: 25,
    },
    {
        gender: 'female',
        age: 27,
    },
    {
        gender: 'female',
        age: 22,
    },
    {
        gender: 'male',
        age: 29,
    },
];

const compose = (...funcArgs) => (data) => {
    // funcArgs의 요소인 함수들을 차례대로 적용(apply)시킨 결과를 리턴합니다.
    let result = data;
    for (funcArg of funcArgs) result = funcArg(result);
    return result;
}

const compose2 = (...args) => (data) => args.reduce((a, f) => f(a), data);
// [data, f1, f2, f3] : f3(f2(f1(data)))의 결과 return

const getOnlyMales = (data) => data.filter(d => d.gender === 'male');
const getOnlyAges = (data) => data.map(d => d.age);
const getAverage = (data) => {
    const sum = data.reduce((acc, cur) => acc + cur, 0);
    return sum / data.length;
}


const getAverageAgeOfMale = compose2(
    getOnlyMales, // 배열을 입력받아 배열을 리턴하는 함수
    getOnlyAges, // 배열을 입력받아 배열을 리턴하는 함수
    getAverage // 배열을 입력받아 `number` 타입을 리턴하는 함수
);

const result = getAverageAgeOfMale(data);
console.log(result); // --> 26
console.clear();

const 평균구하기 = (arr) => arr.reduce(add) / arr.length;
const add = (a, b) => a + b;

function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.
    return students.filter(obj => obj.gender === 'female').map(obj => obj.grades = 평균구하기(obj.grades));
}

let studentList = [
    {
        name: 'Anna',
        gender: 'female',
        grades: [4.5, 3.5, 4],
    },
    {
        name: 'Dennis',
        gender: 'male',
        country: 'Germany',
        grades: [5, 1.5, 4],
    },
    {
        name: 'Martha',
        gender: 'female',
        grades: [5, 4, 4, 3],
    },
    {
        name: 'Brock',
        gender: 'male',
        grades: [4, 3, 2],
    },
];
let output = studentReports(studentList); //? 
console.log(output);
