import styled from 'styled-components'

const StyledDetailMovie = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 2rem auto;

  & > div:nth-child(2) {
    margin-bottom: 1rem;
  }

  h2 {
    color: #06d6a0;
    font-size: 1.8rem;
  }

  h3 {
    color: #118ab2;
    font-size: 1.5rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  img {
    display: none;
  }

  button {
    font-size: 14px;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }

  button:hover {
    background-color: #08c290;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    padding: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    h2 {
      font-size: 2.4rem;
    }

    h2,
    h3 {
      margin-bottom: 1rem;
    }

    & > div:nth-child(2) {
      flex-basis: 70%;
      text-align: left;
      margin-left: 3rem;
    }

    & > div:nth-child(1) {
      flex-basis: 30%;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 25px;
    }
  }
`

export default StyledDetailMovie
