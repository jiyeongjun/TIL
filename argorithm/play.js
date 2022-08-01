const log = console.log;
//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test


const dispatch = (a) => {
  if (typeof a === 'function') a(dispatch);
  else console.log(a);
}

const returnFunc =
  (message) =>
    (dispatch) => {
      dispatch({ a: 1 });
      console.log(message);
    }


dispatch(returnFunc("메세지출력"));
