const log = console.log;

// Early Return 



// 로그인 함수
// 1. 로그인 여부 확인
// 2. 토큰 존재 여부 확인
// 3. 기 가입 유저인지 확인
// 3-true. 로그인 성공
// 3-false. 회원가입유도
function loginService(isLogin, user) {
    if (!isLogin) {
        if (checkToken()) { // 브라우저에서 토큰이 있는지 확인
            if (!user.nickname) { // 유저의 닉네임 존재하지 않을 경우
                return registerUser(user); // 회원가입에 유저를 보낸다.
            } else {
                refreshToken(); // 토큰이 존재하면 토큰을 리프레쉬 한다.

                return '로그인 성공'; // 로그인 성공 처리를 한다.
            }
        } else {
            throw new Error('No Token');
        }
    }
}

// 1차 수정
function loginService(isLogin, user) {
    // Ealry Return
    // 함수를 미리 종료
    // 사고하기 편함
    if (isLogin) return; // 이미 로그인 되어 있으면 함수 종료

    if (!checkToken()) throw new Error('No Token'); //  토큰이 없으면 에러

    if (!user.nickname) return registerUser(user); // 닉네임 없으면 회원가입

    refreshToken();

    return '로그인 성공';
}

// 2차 수정 : 기능 분리
function login() {
    refreshToken();
    return '로그인 성공';
}

function loginService(isLogin, user) {
    // Ealry Return
    // 함수를 미리 종료
    // 사고하기 편함
    if (isLogin) return; // 이미 로그인 되어 있으면 함수 종료
    if (!checkToken()) throw new Error('No Token'); //  토큰이 없으면 에러
    if (!user.nickname) return registerUser(user); // 닉네임 없으면 회원가입
    login();
}

