import React from "react";
import styled from "styled-components";
import {MdLightMode, MdDarkMode} from "react-icons/md";

interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

interface IWrapper {
  themeMode: string;
}

const Wrapper = styled.button<IWrapper>`
  background: ${({theme}) => theme.mode.mainBackground};
  border: 1px solid ${({theme}) => theme.mode.border};
  box-shadow: 0 1px 3px ${({theme}) => theme.mode.divider};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem;
  z-index: 1;
  width: 2rem;
  height: 2rem;
  top: 2rem;
  right: 2rem;

  svg {
    color: ${({theme}) => theme.mode.themeIcon};

    &:first-child {
      width: 23px;
      height: 23px;
      animation: show 0.4s ease forwards;
    }

    &:nth-child(2) {
      width: 23px;
      height: 23px;
      animation: show 0.4s ease forwards;
    }

    @keyframes show {
      from {
        transform: rotate(0deg);
        opacity: 0;
      }
      to {
        transform: rotate(360deg);
        opacity: 1;
      }
    }

  }
`;

const Toggle = ({themeMode, toggleTheme}: IToggle) => {
  return (
    <>
      <Wrapper onClick={toggleTheme} themeMode={themeMode}>
        {themeMode === "light" ? <MdLightMode/> : <MdDarkMode/>}
      </Wrapper>
    </>
  );
};

export default Toggle;
