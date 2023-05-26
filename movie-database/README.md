## Praktikum Pertemuan 9

- Menggunakan package [styled-components](https://styled-components.com/)

  Membuat styled component pada tag button[index.js](./src/components/ui/index.js)

  ```javascript
  import styled, { css } from "styled-components"

  const Button = styled.button`
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: ${({ variant, theme }) =>
      theme.colors[variant] || theme.colors["primary"]};
    cursor: pointer;
    &:hover {
      background-color: ${({ variant, theme }) =>
        theme.hoverColors[variant] || theme.hoverColors["primary"]};
      }

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}

    export { Button }
  ```

  menggunakan styled button di komponen Hero dan AddMovieForm

  ```javascript
  import { Button } from "../ui"

  function Hero() {
    return <Button variant="primary">Watch</Button>
  }

  function AddMovieForm() {
    return <Button variant="secondary">Add Movie</Button>
  }
  ```

## Task Pertemuan 9

- Refactor [Navbar](./src/components/Navbar/Navbar.js), [Hero](./src/components/Hero/Hero.js), [Footer](./src/components/Footer/Footer.js) using Styled Components.

  - Komponen [Navbar](./src/components/Navbar/Navbar.js)

  [Navbar.styled.js](./src/components/Navbar/Navbar.styled.js)

  ```javascript
  import styled from "styled-components"

  const StyledNavbar = styled.div`
    background-color: #06d6a0;
    color: #fff;

    nav {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }

    & > nav > div:first-child {
      display: flex;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #fff;
    }

    .navbar__list {
      display: none;
    }

    .navbar__list__show {
      border-top: 1px solid #f8f9fa;
      display: block;
      list-style: none;
      position: absolute;
      top: 4rem;
      right: 0;
      width: 100%;
      text-align: center;
      background-color: #06d6a0;
    }

    li {
      margin: 0.5rem auto;
      padding: 0 1rem;
    }

    li > a {
      padding: 0.5rem;
      list-style: none;
      text-decoration: none;
      color: #fff;
      width: 100%;
      margin: auto;
      display: block;
      border-radius: 5px;
    }

    li > a:hover {
      font-weight: bold;
      background-color: #08c290;
    }

    span {
      display: block;
      font-size: 1.5rem;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      nav {
        max-width: 1200px;
        margin: auto;
      }

      h1 {
        margin: auto 0;
      }

      .navbar__list {
        text-align: right;
        display: flex;
        list-style: none;
        flex-direction: row;
      }

      li {
        padding: 0;
        margin-left: 1rem;
      }

      span {
        display: none;
      }
    }
  `

  export default StyledNavbar
  ```

  - Komponen [Hero](./src/components/Hero/Hero.js)

  [Hero.styled.js](./src/components/Hero/Hero.styled.js)

  ```javascript
  import styled from "styled-components"

  const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    & > div:nth-child(1) {
      margin-bottom: 1rem;
    }

    h3 {
      color: #118ab2;
      margin-bottom: 0.5em;
      font-size: 1.59rem;
    }

    p {
      color: #64748b;
      margin-bottom: 1rem;
    }

    img {
      display: none;
    }

    @media (min-width: 992px) {
      padding: 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      margin-bottom: 2rem;

      & > div:nth-child(1) {
        flex-basis: 60%;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 25px;
      }
    }
  `

  export default StyledHero
  ```

  - Komponen [Footer](./src/components/Footer/Footer.js)

  [Footer.styled.js](./src/components/Footer/Footer.styled.js)

  ```javascript
  import styled from "styled-components"

  const StyledFooter = styled.div`
    background-color: #06d6a0;
    padding: 1.5rem 1rem;
    color: #fff;
    text-align: center;
    margin-top: auto;

    footer {
      max-width: 1200px;
      margin: auto;
    }

    p > a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
    }
  `

  export default StyledFooter
  ```

- Opsional : Membuat komponen UI seperti [Chakra](https://chakra-ui.com/)

  - Membuat style komponen Heading dengan tag h2

  ```javascript
  const Heading = styled.h2`
    color: #06d6a0;
    margin-bottom: 0.5rem;
    font-size: 2.44rem;
  `

  export { Heading }
  ```

  - Menggunakan komponen Heading

  ```javascript
  import StyledHero from "./Hero.styled"
  import { useState, useEffect } from "react"
  import { Button, Heading } from "../ui"

  function Hero() {
    const [movie, setMovie] = useState({})

    function getMovie() {...}

    useEffect(() => { getMovie() }, [])

    return (
      <StyledHero>
        <div>
          <Heading>{movie.Title}</Heading>
          <h3>Genre : {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button>Watch</Button>
        </div>
        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      </StyledHero>
    )
  }

  export default Hero
  ```

- Menambahkan properti size pada komponen [Button](./src/components/ui/index.js)

  - sm: font-size: 0.8rem, padding: 0.2rem 0.5rem.
  - md (default): font-size: 1rem, padding: 0.5rem 1rem.
  - lg: font-size: 1.3rem, padding: 0.5rem 1rem;

  #### Membuat objek untuk Font Size dan padding pada [theme.js](./src/utils/constants/theme.js)

  ```javascript
  const theme = {
    colors: {...},
    hoverColors: {...},
    fontSize: {
      sm: ".8rem",
      md: "1rem",
      lg: "1.3rem",
    },
    padding: {
      sm: ".2rem .5rem",
      md: ".5rem 1rem",
      lg: ".5rem 1rem",
    },
  }

  export default theme
  ```

  #### Menambahkan properti size pada Button

  ```javascript
  import styled, { css } from "styled-components"

  const Button = styled.button`
    ...;
    font-size: ${({ size, theme }) =>
      theme.fontSize[size] || theme.fontSize["md"]};
    padding: ${({ size, theme }) => theme.padding[size] || theme.padding["md"]};
  `
  ```
