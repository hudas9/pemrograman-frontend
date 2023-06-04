import styled from 'styled-components'

const StyledMovie = styled.div`
  margin-bottom: 2rem;
  position: relative;

  img {
    width: 95%;
    border-radius: 25px;
    height: 450px;
  }

  h3 {
    color: #06d6a0;
    font-size: 1.5rem;
  }

  p {
    color: #64748b;
  }

  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    height: 550px;
  }

  @media screen and (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
    height: 525px;

    img {
      width: 100%;
      height: auto;
    }
  }
`
export default StyledMovie
