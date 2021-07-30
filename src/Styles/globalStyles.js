import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  justify-content: center;
`;

export default GlobalStyle;
