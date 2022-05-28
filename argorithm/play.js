const log = console.log;

function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    const arr = str.split(' ');
    let res = '';
    for (a of arr) res += a.slice(0, 1);
    return res;
}
log(firstCharacter('fds fdsfff fdsf fsdf gf'));