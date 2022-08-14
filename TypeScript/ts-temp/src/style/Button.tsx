import styled from "styled-components";

interface IButton {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  borderColor?: string;
  bold?: string;
  paddingSize?: string;
  disabled?: boolean;
  isClick?: boolean;
}

const Button = styled.button.attrs({type: "button"})<IButton>`
  background-color: ${({theme, backgroundColor}) =>
          (backgroundColor && theme.mode[backgroundColor]) || theme.mode.green};
  color: ${({theme, color}) => (color && theme.mode[color]) || theme.mode.white};
  font-size: ${({theme, fontSize}) => (fontSize && theme.fontSizes[fontSize]) || theme.fontSizes.md};
  font-weight: ${({bold}) => (bold ? "bold" : "normal")};
  pointer-events: ${({disabled}) => (disabled ? "none" : "auto")};
  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({disabled}) => (disabled ? 0.3 : 1)};
  border-radius: 10px;
  border: 1px solid ${({theme, borderColor}) => (borderColor && theme.mode[borderColor]) || theme.mode.gray2};
  text-align: center;
  padding: ${({paddingSize}) => (paddingSize ? paddingSize : "10px 15px")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default Button;
