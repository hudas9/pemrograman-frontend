import styled from 'styled-components'

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
    display: block;
    list-style: none;
    position: absolute;
    top: 4.25rem;
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

  .active {
    font-weight: bold;
    background-color: #08c290;
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
