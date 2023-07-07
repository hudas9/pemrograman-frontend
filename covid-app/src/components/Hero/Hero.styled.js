import styled from 'styled-components'

const StyledHero = styled.div`
  margin-top: 3rem;

  section {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }

  h2 {
    color: #06d6a0;
    font-size: 2.44rem;
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

    img {
      max-width: 100%;
    }
  }
`

export default StyledHero
