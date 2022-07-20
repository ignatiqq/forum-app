import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}


body {
  background: var(--body-background);
  font-family: 'Roboto', 'Helvetica', sans-serif;
  text-rendering:geometricPrecision;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  color: var(--text-gray);
  width: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

h1,
h2,
h3,
h4,
h5,
h6 {
margin: 0;
}

ul,
ol {
list-style: none;
padding: 0;
margin: 0;
}

a {
  text-decoration: none;
}

input,
input::placeholder,
button {
font-family: 'Helvetica';
}
`;

export default GlobalStyle;