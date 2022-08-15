import React from "react";

import styled from "styled-components";
import Button from "../style/Button";
import Text from "../style/Text";
import Toggle from "./Toggle";

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3250b9;
  color: white;
  padding: 0 3%;


  & img {
    ${({theme}) => theme.mode.themeIcon} filter: opacity(0.4) drop-shadow(0 0 0 red);
  }

  & ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  & li {
    margin: 0 1rem;
  }

  & a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
  }

  & a:hover,
  a:active {
    color: #b864da;
  }

  & Button:hover,
  Button:active {
    background-color: rgb(198, 198, 203);
  }
`

interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

const Header = ({themeMode, toggleTheme}: IToggle) => {
  return (
    <StyledHeader>
      <h1><Text fontSize="xxl" fontWeight="extraBold">111</Text></h1>
      <a href='/'><img src="assets/img/jyjLogo.png" alt="logo"/></a>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'><Text fontSize="lg" fontWeight="extraBold">My Sales</Text></a>
          </li>
          <li>
            <Button>Login</Button>
          </li>
          <li>
            <Toggle themeMode={themeMode} toggleTheme={toggleTheme}/>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header;
