import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: #fff
  }
`

export default GlobalStyle
