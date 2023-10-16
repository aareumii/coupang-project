import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    outline: none;
  }

  a:visited, a:active{color: #000}
`;
