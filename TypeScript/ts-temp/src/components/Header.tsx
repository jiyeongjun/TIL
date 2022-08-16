import React from "react";
import {useSelector} from 'react-redux';
import {ReducerType} from '../store/index';

import styled from "styled-components";
import {media} from '../style/util'
import {TextA, Text} from "../style/Text";
import Toggle from "./Toggle";
import {GiHamburgerMenu} from "react-icons/gi";
import {TbSearch} from "react-icons/tb"


interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

const Header = ({themeMode, toggleTheme}: IToggle) => {
  const isAuth = useSelector((state: ReducerType) => state.auth.isAuthenticated);

  return (
    <StyledHeader>
      <li className="hamburger-menu">
        <GiHamburgerMenu/>
      </li>
      <a className='logo-icon' href='/'><img src="assets/img/Logo.svg" alt="logo"/></a>
      <TextA className="logo" href='/' fontSize="xl" fontWeight="bold">ZeroJun</TextA>
      <nav>
        <ul>
          <li className='menu'>
            <TextA className="menu" href='/' fontSize="md" fontWeight="semiBold">ABOUT</TextA>
          </li>
          <li className='menu'>
            <TextA className="menu" href='/' fontSize="md" fontWeight="semiBold">PROJECT</TextA>
          </li>
          {isAuth && (
            <li className='menu'>
              <TextA className="menu" href='/' fontSize="md" fontWeight="semiBold">LOGOUT</TextA>
            </li>
          )}
          <li>
            <Toggle themeMode={themeMode} toggleTheme={toggleTheme}/>
          </li>
          <li className="search-menu">
            <TbSearch/>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header;


const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.mode.background};
  color: white;
  padding: 0 3%;
  border-bottom: ${({theme}) => `1px solid ${theme.mode.divider}`};


  & .logo-icon {
    filter: ${({theme}) => theme.mode.lightImg};

    ${media.custom("992px")} {
      margin-right: auto;
      margin-top: 0.3rem;
      margin-left: 1rem;
    }
  }

  & .logo {
    margin-left: 1rem;
    margin-right: auto;
    display: block;

    ${media.custom("992px")} {
      display: none;
    }
  }

  & .menu {
    display: block;

    TextA {
      margin-top: 0.3rem;
    }

    ${media.custom("992px")} {
      display: none;
    }
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

  & a:link,
  a:visited {
    text-decoration: none;
  }

  & a:hover,
  a:active {
    color: rgb(198, 198, 203);
    cursor: pointer;
  }

  & Button:hover,
  Button:active {
    background-color: rgb(198, 198, 203);
  }

  & .hamburger-menu {
    display: none;

    ${media.custom("992px")} {
      display: block;
    }

    svg {
      margin-top: 0.3rem;
      color: ${({theme}) => theme.mode.themeIcon};
      height: 24px;
      width: 24px;
      cursor: pointer;
    }
  }

  & .search-menu {
    svg {
      margin-top: 0.2rem;
      color: ${({theme}) => theme.mode.themeIcon};
      height: 27px;
      width: 27px;
      cursor: pointer;
    }
  }
`
