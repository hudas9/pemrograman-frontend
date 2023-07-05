import styled from 'styled-components'

const StyledCardRegion = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  flex-basis: 100%;
  margin-bottom: 3rem;
  padding: 2rem;
  width: 70px;
  display: flex;
  flex-direction: column;

  h2 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 32px;
  }

  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }

  span {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  div:nth-of-type(1) p {
    color: #06d6a0;
  }

  div:nth-of-type(2) p {
    color: #118ab2;
  }

  div:nth-of-type(3) p {
    color: #ef476f;
  }

  @media (min-width: 768px) {
    flex-basis: 40%;
    width: 200px;
    margin: 1rem;
  }

  @media (min-width: 992px) {
    min-width: 290px;
    flex-basis: 25%;
    margin: 1.5rem;
  }
`

export default StyledCardRegion
