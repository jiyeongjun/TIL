const log = console.log;

// 초기 모델
const isValidUser = true; // 서버에서 받아왔다고 가정
const isValidToken = true;

if (isValidToken && isValidUser) {
    console.log('로그인 성공!');
}

// 로그인 실패 기능을 추가할 때 (기존 코드를 재활용 한다고 가정)

if (!(isValidToken && isValidUser)) {
    console.log('로그인 실패!');
}

// 드모르간의 법칙을 이용하면 한꺼풀 벗겨낼 수 있다.
if (!isValidToken || !isValidUser) {
    console.log('로그인 실패!');
}