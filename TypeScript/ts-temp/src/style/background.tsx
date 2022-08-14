import styled from "styled-components";

const Backgound = styled.div`
  background-color: ${({theme}) => theme.mode.mainBackground};
  border: 1px dotted transparent;
  height: 100vh;
  transition: 0.3s;
`;

export default Backgound;
