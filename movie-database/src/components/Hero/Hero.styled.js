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
