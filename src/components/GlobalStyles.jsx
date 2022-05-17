import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 50px;
  }
`;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
body {
  font-family: Arial, Sans-Serif;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 0.03em;
  background-color: #f7f7f7;
  color: #545454;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
}
img {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;
