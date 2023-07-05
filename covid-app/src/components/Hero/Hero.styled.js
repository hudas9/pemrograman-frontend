import styled from 'styled-components'

const StyledHero = styled.div`
  margin-top: 3rem;

  section {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }

  img {
    max-width: 50%;
    height: auto;
    margin-bottom: 2rem;
  }

  h2 {
    color: #06d6a0;
    font-size: 2.44rem;
  }

  p:first-of-type {
    color: #118ab2;
    margin-bottom: 1rem;
  }

  p:last-of-type {
    color: #64748b;
    margin-bottom: 1rem;
    width: 70%;
    margin: auto;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 3rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
  }

  button:hover {
    background-color: #08c290;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 2rem auto;

    section {
      padding: 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    section > div:first-child {
      flex-basis: 40%;
      margin: 2rem 0;
    }

    section > div:last-child {
      flex-basis: 40%;
    }

    p:last-of-type {
      width: 100%;
    }

    img {
      max-width: 100%;
    }
  }
`

export default StyledHero
