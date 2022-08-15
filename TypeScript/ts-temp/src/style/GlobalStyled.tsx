import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  // css 초기값 정의
  ${reset}

  ;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

`;

export default GlobalStyles;
