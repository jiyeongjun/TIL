import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  // css 초기값 정의
  ${reset}

  ;

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
