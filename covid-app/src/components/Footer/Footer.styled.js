import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: #06d6a0;
  color: #fff;

  footer {
    display: flex;
    padding: 1rem;
  }

  footer > div:first-child {
    text-align: center;
    margin: auto;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  footer > div:last-child {
    display: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  span:hover {
    font-weight: bold;
  }

  li > a:hover {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    background-color: #06d6a0;

    footer {
      max-width: 1200px;
      margin: auto;
      justify-content: space-between;
    }

    footer > div:first-child {
      align-items: start;
      text-align: left;
      margin: 0;
    }

    footer > div:last-child {
      margin: auto 0;
      display: inline;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
    }

    li {
      margin: auto;
      margin-left: 2rem;
    }
  }
`

export default StyledFooter
